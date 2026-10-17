"""
Deep Data Analysis of Kunal's Order Sheet & WhatsApp Logs
Vardhan Steelware - 1 to 7 September 2026
"""

import json

RAW_DATA = """date,party,item,qty,unit,rate,status,remarks
01-09-26,Gupta Traders Ambala,Kadai No.10,200,pcs,185,dispatched,
01-09-26,Sharma Bartan Bhandar Karnal,Patila set 5pc,40,set,920,dispatched,
01-09-26,Gupta Traders Ambala,Kadai No.10,200,pcs,185,pending,repeat msg?
2/9/2026,New Delhi Steel House,Thali 12 inch,50,dozen,610,dispatched,
2/9/2026,Jain Crockery Panipat,Kadhai No 10,150,pcs,192,pend,
2/9/2026,Online - Kunal,Dinner set 24pc,12,set,2350,dispatched,amazon
3 Sep,Sharma Bartan Bhandar Karnal,Gilas 300ml,30,dozen,260,hold - payment,old dues 1.8L
3 Sep,Bansal & Sons Rohtak,Tope No.6,120,pcs,340,pending,polish se aana baaki
3 Sep,,Thali 12 inch,20,dozen,600,dispatched,
04-09-26,Gupta Traders Ambala,Patila set 5pc,25,set,950,dispatched,
04-09-26,Jain Crockery Panipat,Kadhai No 10,150,pcs,192,pend,again sent on whatsapp
04-09-26,Mehra Kitchenware Jalandhar,Kadai No.10,300,pcs,180,partly disp,180 gaye baaki 120
04-09-26,New Delhi Steel House,Bhagona 8L,60,pcs,410,pending,polish
5/9/2026,Online - Kunal,Kadai No.10,35,pcs,240,dispatched,flipkart
5/9/2026,Bansal & Sons Rohtak,Tope No.6,120,pcs,340,pending,polish se aana baaki
5/9/2026,Sharma Bartan Bhandar Karnal,Gilas 300ml,-6,dozen,260,return,dent
5/9/2026,Verma Utensils Sonipat,Thali 12 inch,40,dozen,605,dispatched,
06-09-26,Mehra Kitchenware Jalandhar,Kadai No.10,120,pcs,180,dispatched,baaki wala
06-09-26,Gupta Traders Ambala,Bhagona 8 ltr,40,pcs,400,pending,polish
06-09-26,Jain Crockery Panipat,Gilas 300 ml,25,dozen,255,dispatched,
06-09-26,Verma Utensils Sonipat,Kadhai 10 no.,180,kg,,pending,rate confirm karna hai
7 Sep,New Delhi Steel House,Thali 12 inch,50,dozen,610,dispatched,
7 Sep,Online - Kunal,Patila set 5pc,8,set,1199,dispatched,amazon
7 Sep,Sharma Bartan Bhandar Karnal,Patila set 5pc,20,set,920,hold - payment,
7 Sep,Bansal & Sons Rohtak,Tope No.6,60,pcs,340,pending,naya order"""

lines = RAW_DATA.strip().split("\n")
headers = lines[0].split(",")
rows = []
for line in lines[1:]:
    parts = line.split(",")
    # careful with remarks having commas or spaces
    row = {
        "date": parts[0].strip(),
        "party": parts[1].strip(),
        "item": parts[2].strip(),
        "qty": float(parts[3].strip()) if parts[3].strip() else 0.0,
        "unit": parts[4].strip(),
        "rate": float(parts[5].strip()) if parts[5].strip() else None,
        "status": parts[6].strip(),
        "remarks": ",".join(parts[7:]).strip()
    }
    rows.append(row)

# Total rows
total_rows = len(rows)

# Order volume extrapolation
daily_run_rate = total_rows / 7.0
monthly_projected_orders = daily_run_rate * 30.0

# Revenue calculations
total_booked_value = 0.0
dispatched_value = 0.0
pending_value = 0.0
hold_value = 0.0
online_value = 0.0
online_count = 0
distributor_count = 0

status_breakdown = {}
parties = {}
items = {}
issues = []

for idx, r in enumerate(rows, 1):
    val = (r["qty"] * r["rate"]) if (r["rate"] is not None and r["qty"] > 0) else 0.0
    
    # Status grouping
    st = r["status"].lower()
    status_breakdown[st] = status_breakdown.get(st, 0) + 1
    
    if "disp" in st:
        dispatched_value += val
    elif "hold" in st:
        hold_value += val
    elif "pend" in st:
        pending_value += val
        
    total_booked_value += val
    
    # Party grouping
    pty = r["party"] if r["party"] else "[BLANK PARTY]"
    parties[pty] = parties.get(pty, 0) + 1
    
    # Online check
    if "Online" in r["party"]:
        online_count += 1
        online_value += val
    elif r["party"]:
        distributor_count += 1
        
    # Anomaly checks
    if not r["party"]:
        issues.append(f"Row {idx}: Missing Party Name (20 dozen Thalis worth {r['qty']*r['rate']:.2f})")
    if r["rate"] is None:
        issues.append(f"Row {idx}: Missing Rate for {r['party']} ({r['qty']} {r['unit']} of {r['item']})")
    if r["unit"] == "kg" and "Kadai" in r["item"]:
        issues.append(f"Row {idx}: Unit Inconsistency ({r['party']} entered in 'kg' instead of 'pcs')")
    if r["qty"] < 0:
        issues.append(f"Row {idx}: Return logged as negative quantity ({r['qty']} {r['unit']})")
    if "repeat" in r["remarks"].lower() or "again" in r["remarks"].lower():
        issues.append(f"Row {idx}: Potential duplicate/re-entry ({r['party']} - {r['remarks']})")
    if "polish" in r["remarks"].lower():
        issues.append(f"Row {idx}: Stuck in outsourced polishing ({r['party']} - {r['item']} - {r['qty']})")
    if "hold" in r["status"].lower():
        issues.append(f"Row {idx}: Held on payment dues ({r['party']} - {r['remarks']})")

summary = {
    "total_rows": total_rows,
    "daily_rate": round(daily_run_rate, 2),
    "projected_monthly_orders": round(monthly_projected_orders, 1),
    "total_booked_value": round(total_booked_value, 2),
    "dispatched_value": round(dispatched_value, 2),
    "pending_value": round(pending_value, 2),
    "hold_value": round(hold_value, 2),
    "online_count": online_count,
    "online_pct_count": round((online_count / total_rows) * 100, 2),
    "online_value": round(online_value, 2),
    "online_pct_value": round((online_value / total_booked_value) * 100, 2) if total_booked_value else 0,
    "status_counts": status_breakdown,
    "party_frequency": parties,
    "issues_detected": issues
}

print(json.dumps(summary, indent=2))

with open(r"C:\Users\user\.gemini\antigravity\scratch\wantace-solutions-sprint\analysis\order_sheet_data.json", "w") as f:
    json.dump(summary, f, indent=2)
