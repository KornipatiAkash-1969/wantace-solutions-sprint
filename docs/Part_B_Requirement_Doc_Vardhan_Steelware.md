# Part B — Product Requirement Document (PRD)

**Project**: Factory Order & Dispatch Visibility System (Phase 1 MVP)  
**Client**: Vardhan Steelware (Jagadhri, Haryana)  
**Target Audience**: Software Engineering & Implementation Team  
**Scope Boundary**: Phase 1 Delivery (2-Week Production Rollout before Diwali)  

---

## 1. The Problem in the Client's Words

> *"Problem orders ki nahi hai. Problem yeh hai ki pata nahi chalta maal kahan atka hai. Customer phone karta hai toh mujhe Ramesh ko phone karna padta hai. Ramesh ki diary mein sab hai... Mujhe bas phone pe dekhna hai kaunsa order kahan hai. Pehle wale mein paisa doob gaya [₹1.2L ERP in 2023]. Jo kaam kare, uska de denge. Diwali se pehle chahiye, season hai."*  
> — **Suresh Vardhan (Owner, 58)**

> *"What we really need is a proper modern system. Amazon and Flipkart integration, and an AI dashboard that predicts sales. Online is growing 30% every month... And it should look modern. I want to show it to our distributors."*  
> — **Kunal Vardhan (Son / Sales Coordinator, 30, MBA)**

---

## 2. What the Material Shows: Evidence vs. Client Claims

A quantitative audit of Kunal's 1–7 September 2026 Google Sheet (25 order rows) and the "Vardhan Dispatch" WhatsApp group logs reveals significant operational blindspots:

```
+-------------------------------------------------------------------------------------------------------+
| METRIC / HYPOTHESIS           | CLIENT'S CLAIM (TRANSCRIPT)   | ACTUAL DATA (SHEET & WHATSAPP)        |
+-------------------------------+-------------------------------+---------------------------------------+
| Monthly Order Volume          | "Mahine ke 60–70 order honge" | 25 orders in 7 days = 3.57/day        |
|                               | (Suresh)                      | Extrapolates to 107.1 orders/month    |
|                               |                               | (surge to ~150+ during Diwali).       |
+-------------------------------+-------------------------------+---------------------------------------+
| Online Revenue Share          | "Online abhi 5% bhi nahi hai" | 3 orders out of 25 = 12.0% by count;  |
|                               | (Suresh)                      | ₹46,192 / ₹5,86,317 = 7.88% by value. |
|                               |                               | Growing, but NOT the core bottleneck. |
+-------------------------------+-------------------------------+---------------------------------------+
| Payment & Credit Risk         | "Payment koi problem nahi.    | Sharma Bartan Karnal holds ₹1.8L old  |
|                               | Purani parties hain." (Suresh)| dues; 2 orders held; direct customer  |
|                               |                               | conflict on WhatsApp on 05/09.        |
+-------------------------------+-------------------------------+---------------------------------------+
| Production Bottlenecks        | "Maal banta hai, polish hota  | 40.5% of value (₹2.37L) pending;      |
|                               | hai, pack karke bhej dete"    | 4 out of 10 pending orders stuck in   |
|                               |                               | outsourced polishing (Tope/Bhagona).  |
+-------------------------------+-------------------------------+---------------------------------------+
| Polishing Metal Yield / Loss  | "Arre, woh wastage hai"       | 420 kg issued to Pappu -> 1,180 pcs   |
|                               | (Suresh)                      | returned with 6 kg direct shortage    |
|                               |                               | (1.43% loss). Unreconciled hisaab.    |
+-------------------------------+-------------------------------+---------------------------------------+
```

### Critical Data Inconsistencies & Defect Log (Kunal's Sheet)
1. **Duplicate Order Entries from WhatsApp**:
   * *Row 1 & Row 3 (01-09-26)*: `Gupta Traders Ambala`, `Kadai No.10`, `200 pcs`, `₹185`. Row 1 marked `dispatched`; Row 3 marked `pending, repeat msg?`. Kunal cannot verify if customer re-ordered or re-sent the same message.
   * *Row 5 & Row 11 (02-09-26 & 04-09-26)*: `Jain Crockery Panipat`, `Kadhai No 10`, `150 pcs`, `₹192`. Entered twice because customer re-sent inquiry on WhatsApp (`again sent on whatsapp`).
2. **Untracked Ghost Dispatch (Row 9, 3 Sep)**:
   * Entry: `3 Sep, , Thali 12 inch, 20 dozen, rate 600, dispatched`.
   * **Missing Customer Name!** 240 thalis worth **₹12,000** left the factory gate without a named recipient or debtor ledger entry.
3. **Data Type & Unit Corruption (Row 21, 06-09-26)**:
   * Entry: `Verma Utensils Sonipat`, `Kadhai 10 no.`, `180 kg`, rate `[BLANK]`, remarks: `pending, rate confirm karna hai`.
   * All other Kadai orders are tracked in **pieces (pcs)**. Entering 180 kg with zero rate corrupts inventory and invoice totals.
4. **Row Fragmentation on Partial Dispatches**:
   * *Row 12 (04-09-26)*: `Mehra Kitchenware`, 300 pcs Kadai ordered, `180 gaye baaki 120` (`partly disp`).
   * *Row 18 (06-09-26)*: `Mehra Kitchenware`, 120 pcs Kadai, `dispatched, baaki wala`.
   * Kunal created an entirely new order line instead of updating parent order fulfillment status, breaking order-to-dispatch traceability.
5. **Ad-hoc Return Accounting (Row 16, 5/9/2026)**:
   * `Sharma Bartan Bhandar`, `Gilas 300ml`, `-6 dozen`, `rate 260`, remarks: `return, dent`.
   * Negative quantities logged directly into the sales sheet without linking to original invoice or damaged scrap register.
6. **WhatsApp Security & Boundary Failure**:
   * On 05/09 at 11:02 AM, the client `Sharma Bartan (Karnal)` is messaging inside the internal factory dispatch group asking *"Bhai gilas kab tak? Diwali ka maal hai"*.
   * Kunal immediately forgets his father placed Sharma on hold on 03/09, asks Ramesh to check, Ramesh corrects him, and Kunal says *"Papa se pucho"*. There is zero unified enforcement of credit policy.

---

## 3. As-Is Process Map & Bottlenecks

![Vardhan As-Is Workflow](../assets/vardhan_as_is_workflow.svg)

### Operational Swimlanes & Gaps
* **Step 1 (Order Intake - Kunal)**: Orders arrive chaotically over phone, WhatsApp personal chats, and marketplace seller portals. Kunal enters them into Google Sheets manually with no validation, creating duplicate entries.
* **Step 2 (Credit Check - Munshi Ji)**: Disconnected in Tally. Munshi ji only spots payment defaults when Suresh or Kunal mentions an order, resulting in awkward last-minute dispatch halts.
* **Step 3 (Shop Floor Staging - Ramesh)**: Ramesh operates strictly from his paper pocket diary. He does not read Kunal's Google Sheet and has no access to real-time order priority.
* **Step 4 (Outsourced Polishing - 4 to 5 Karigars)**: Utensils are weighed out in bulk kilograms (e.g., 420 kg steel to Pappu Karigar). Received back in finished pieces (1,180 pcs). Weight reconciliation happens days later over WhatsApp chits. Metal shortages (3–4% annual scrap) disappear into unexplained "wastage".
* **Step 5 (Tempo Dispatch & Gate Chalan)**: Ramesh loads vehicles and writes paper bilties. Partial dispatches are communicated verbally.
* **Step 6 (Owner Blindspot - Suresh)**: Suresh has zero visibility on his mobile phone. To answer any customer call, he must interrupt Ramesh on the noisy factory floor.

---

## 4. Phase 1 Scope: Ship Before Diwali (2-Week Build)

To prevent the catastrophic adoption failure of the 2023 ₹1.2L ERP, Phase 1 is aggressively de-scoped to solve Suresh's exact daily pain: **Order Status Visibility, Partial Dispatches, Polishing Tracking, and Credit Holds**.

```
+-----------------------------------------------------------+-----------------------------------------------------------+
| IN SCOPE (PHASE 1 MVP - PRE-DIWALI)                       | EXPLICITLY OUT OF SCOPE (PHASE 2 / FUTURE)                |
+-----------------------------------------------------------+-----------------------------------------------------------+
| 1. Mobile-First "Atka Maal" Dashboard for Suresh:        | 1. AI Sales Forecasting & Predictive Purchasing:          |
|    One-touch view of every order's stage & aging days.   |    Premature. Clean historical data does not yet exist.   |
|                                                           |                                                           |
| 2. Order Desk with Hard Validation for Kunal:             | 2. Direct Amazon / Flipkart API Integrations:             |
|    Party dropdown, duplicate detection, enforced units   |    Online is <8% revenue; marketplace shipping labels     |
|    (PCS/DOZ/SET only; no KG for finished goods).          |    are already handled via seller portals.                |
|                                                           |                                                           |
| 3. Shop Floor Dispatch Action Screen for Ramesh:          | 3. Full Tally ERP Replacement & General Ledger:           |
|    Large tap-targets, multi-lot partial dispatch slider, |    Munshi ji will continue using Tally. Phase 1 provides  |
|    one-click "Send to Polishing" / "Mark Dispatched".    |    a 1-click CSV/Excel export for Tally entry.            |
|                                                           |                                                           |
| 4. Outsourced Polishing Reconciliation Module:            | 4. Karigar Mobile App:                                    |
|    Logs Karigar name, kg issued, pcs received, and        |    External polishers will not adopt apps. System prints  |
|    auto-computes metal shortage / piece weight variance.  |    a physical 2-part Job Slip with barcode/serial.       |
|                                                           |                                                           |
| 5. Credit Hold & Payment Gatekeeper:                      | 5. Deep Raw Material Bill-of-Materials (BOM) & Stamping:  |
|    Locks dispatch if customer dues exceed threshold;      |    Utensil pressing is continuous batch flow. Tracking    |
|    only Suresh can tap "Override & Dispatch".             |    sub-assemblies now would overwhelm shop-floor staff.   |
+-----------------------------------------------------------+-----------------------------------------------------------+
```

---

## 5. Relational Data Model

![Vardhan ER Diagram](../assets/vardhan_er_diagram.svg)

### Entity Definitions & Schema Constraints

```sql
-- 1. CUSTOMER (Distributor & Marketplace Master)
CREATE TABLE customers (
    customer_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    business_name VARCHAR(150) NOT NULL UNIQUE,
    contact_person VARCHAR(100),
    phone VARCHAR(20) NOT NULL,
    city VARCHAR(80) NOT NULL,
    state VARCHAR(80) NOT NULL,
    channel_type VARCHAR(20) CHECK (channel_type IN ('DISTRIBUTOR', 'ONLINE', 'DIRECT')),
    credit_limit NUMERIC(12,2) DEFAULT 200000.00,
    outstanding_dues NUMERIC(12,2) DEFAULT 0.00,
    is_blocked BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. SALES ORDER (Header)
CREATE TABLE orders (
    order_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_number VARCHAR(30) UNIQUE NOT NULL, -- Format: VS-2026-XXXX
    customer_id UUID NOT NULL REFERENCES customers(customer_id),
    order_date DATE NOT NULL DEFAULT CURRENT_DATE,
    target_dispatch_date DATE,
    overall_status VARCHAR(30) DEFAULT 'PENDING' 
        CHECK (overall_status IN ('PENDING', 'IN_POLISHING', 'PARTIALLY_DISPATCHED', 'READY_FOR_DISPATCH', 'DISPATCHED', 'HOLD_PAYMENT', 'CANCELLED')),
    payment_hold BOOLEAN DEFAULT FALSE,
    hold_reason TEXT,
    total_order_value NUMERIC(12,2) DEFAULT 0.00,
    remarks TEXT,
    created_by VARCHAR(50) NOT NULL, -- 'Kunal', 'Suresh', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. ORDER ITEMS (Line Items with partial delivery tracking)
CREATE TABLE order_items (
    order_item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
    product_name VARCHAR(120) NOT NULL, -- e.g., 'Kadai No.10', 'Patila set 5pc'
    ordered_qty NUMERIC(10,2) NOT NULL CHECK (ordered_qty > 0),
    unit VARCHAR(15) NOT NULL CHECK (unit IN ('PCS', 'DOZEN', 'SET')),
    unit_rate NUMERIC(10,2) NOT NULL CHECK (unit_rate > 0),
    line_total NUMERIC(12,2) GENERATED ALWAYS AS (ordered_qty * unit_rate) STORED,
    dispatched_qty NUMERIC(10,2) DEFAULT 0.00 CHECK (dispatched_qty <= ordered_qty),
    in_polish_qty NUMERIC(10,2) DEFAULT 0.00,
    item_status VARCHAR(25) DEFAULT 'PENDING'
        CHECK (item_status IN ('PENDING', 'IN_POLISHING', 'PARTIAL', 'DISPATCHED'))
);

-- 4. OUTSOURCED POLISHING BATCH (Jobwork tracking)
CREATE TABLE polishing_batches (
    batch_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    batch_number VARCHAR(30) UNIQUE NOT NULL, -- Format: POL-2026-XXX
    karigar_name VARCHAR(100) NOT NULL, -- e.g., 'Pappu', 'Shyam'
    sent_date DATE NOT NULL DEFAULT CURRENT_DATE,
    expected_return_date DATE,
    actual_return_date DATE,
    weight_sent_kg NUMERIC(10,3) NOT NULL,
    units_received_pcs INTEGER DEFAULT 0,
    standard_expected_loss_pct NUMERIC(4,2) DEFAULT 1.00, -- Standard 1% allowable buffing loss
    actual_shortage_kg NUMERIC(10,3) DEFAULT 0.000,
    reconciliation_status VARCHAR(20) DEFAULT 'ISSUED' 
        CHECK (reconciliation_status IN ('ISSUED', 'RECEIVED', 'RECONCILED_OK', 'SHORTAGE_FLAGGED')),
    munshi_remarks TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. DISPATCH FULFILLMENT RECORD (Tracks partials without duplicating rows)
CREATE TABLE dispatch_records (
    dispatch_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chalan_number VARCHAR(30) UNIQUE NOT NULL, -- Format: CH-2026-XXXX
    order_id UUID NOT NULL REFERENCES orders(order_id),
    dispatch_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    transporter_name VARCHAR(100) NOT NULL,
    vehicle_number VARCHAR(30),
    driver_phone VARCHAR(20),
    bilti_number VARCHAR(50),
    dispatched_by VARCHAR(50) DEFAULT 'Ramesh',
    remarks TEXT
);

CREATE TABLE dispatch_items (
    dispatch_item_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dispatch_id UUID NOT NULL REFERENCES dispatch_records(dispatch_id) ON DELETE CASCADE,
    order_item_id UUID NOT NULL REFERENCES order_items(order_item_id),
    qty_shipped NUMERIC(10,2) NOT NULL CHECK (qty_shipped > 0)
);
```

---

## 6. User Roles & Mobile UI Workflows

The system must run smoothly on low-cost Android smartphones over 4G/Wi-Fi with Hindi language support for Ramesh and shop-floor staff.

```
+---------------+-----------------------+---------------------------------------+---------------------------------------+
| ROLE          | USER & DEVICE         | WHAT THEY SEE ON THEIR PHONE          | WHAT THEY DO (ACTIONS)                |
+---------------+-----------------------+---------------------------------------+---------------------------------------+
| Owner         | Suresh Vardhan (58)   | 1. High-contrast 30-second pulse card.| 1. Tap order to view exact status.    |
|               | Samsung Galaxy        | 2. "Atka Maal" list sorted by delay.  | 2. Tap green button to direct call    |
|               | (Large font, Hindi)   | 3. Blocked credit dispatches card.    |    distributor or Ramesh.             |
|               |                       | 4. Polishing shortage red alerts.     | 3. Tap "Override Credit Hold" to free |
|               |                       |                                       |    high-priority orders for dispatch. |
+---------------+-----------------------+---------------------------------------+---------------------------------------+
| Order Desk    | Kunal Vardhan (30)    | 1. Clean Order Entry Desk with        | 1. Add new distributor / online order.|
|               | Laptop & Smartphone   |    duplicate detection banners.       | 2. System flags duplicate phone/text  |
|               |                       | 2. Backorder fulfillment matrix.      |    within 48 hours.                   |
|               |                       | 3. Online marketplace packing list.   | 3. Export 1-click dispatch sheet.     |
+---------------+-----------------------+---------------------------------------+---------------------------------------+
| Floor &       | Ramesh (52, 22y exp)  | 1. Ultra-simple Floor Board:          | 1. Tap item -> "Issue to Karigar"     |
| Dispatch      | Redmi phone           |    [Pending] -> [In Polish] -> [Ready]|    (logs kg & generates paper slip).  |
|               | (Large touch buttons, | 2. Staged orders ready for vehicle.   | 2. Tap "Dispatch" -> enter vehicle #, |
|               | Hindi voice / icons)  | 3. Camera button for driver & bilti.  |    slide partial qty (e.g. 180 of 300)|
|               |                       |                                       | 3. Snap photo of transporter bilti.   |
+---------------+-----------------------+---------------------------------------+---------------------------------------+
| Accounts &    | Munshi Ji (61)        | 1. Payment Hold Queue: Lists parties  | 1. Flag party on hold if dues > ₹1L.  |
| Jobwork       | Desktop PC (Office)   |    with dues > credit limit.          | 2. Reconcile Polishing: enter weight  |
|               | + Mobile browser      | 2. Karigar Jobwork Reconciliation tab |    received, flags Pappu 6kg shortage.|
|               |                       | 3. Daily Tally Export screen.         | 3. Download verified Tally CSV.       |
+---------------+-----------------------+---------------------------------------+---------------------------------------+
```

---

## 7. Three Reports Suresh Opens Every Morning

These reports are delivered to Suresh's phone at **7:30 AM** as interactive mobile cards and an automated WhatsApp PDF digest:

### Report 1: "Atka Maal" (Delayed Orders by Stage & Aging)
* **Purpose**: Eliminates the 15 daily phone calls to Ramesh.
* **Columns**: Order # | Party Name | City | Items & Qty | Current Stage | Days Delayed | Action Button.
* **Example Live View**:
  * `VS-26-008` | Bansal & Sons (Rohtak) | 120 pcs Tope No.6 | **In Polishing (Karigar Pappu)** | **Delayed 4 Days** | `[Call Pappu] [Alert Ramesh]`
  * `VS-26-013` | New Delhi Steel House | 60 pcs Bhagona 8L | **In Polishing** | **Delayed 3 Days** | `[Alert Ramesh]`
  * `VS-26-019` | Gupta Traders (Ambala) | 40 pcs Bhagona 8L | **Awaiting Blank Pressing** | **Delayed 2 Days** | `[Check Floor]`

### Report 2: Payment & Credit Hold Exception Register
* **Purpose**: Prevents delivering goods to defaulting parties while avoiding accidental holds on VIP parties during the festive peak.
* **Columns**: Order # | Party Name | Order Value | Total Overdue Balance | Days Overdue | Blocked Date | Override.
* **Example Live View**:
  * `VS-26-007` | Sharma Bartan Bhandar (Karnal) | ₹7,800 (30 doz Gilas) | **₹1,80,000 Overdue** | 42 Days | **BLOCKED** | `[Suresh 1-Tap Release]`
  * `VS-26-024` | Sharma Bartan Bhandar (Karnal) | ₹18,400 (20 set Patila) | **₹1,80,000 Overdue** | 42 Days | **BLOCKED** | `[Suresh 1-Tap Release]`

### Report 3: Outsourced Polishing & Metal Shortage Audit
* **Purpose**: Stops the silent 3–4% annual stainless steel scrap leakage and resolves karigar disputes before settlement.
* **Columns**: Batch # | Karigar Name | Utensil Type | Weight Sent (kg) | Pcs Received | Net Wt Recd (kg) | Shortage (kg) | Status.
* **Example Live View**:
  * `POL-881` | Karigar Pappu | Tope No.6 | 420.00 kg | 1,180 pcs | 414.00 kg | **-6.00 kg Short (-1.43%)** | `[Hold Karigar Payout]`
  * `POL-882` | Karigar Shyam | Bhagona 8L | 250.00 kg | 410 pcs | 248.80 kg | -1.20 kg (Within 0.5% Tol) | `[Approved]`

---

## 8. Discovery Questions for the Next Call (Assigned by Role)

```
+----+---------------------------------------------------------------------------------------------------+-------------------+
| #  | TARGETED DISCOVERY QUESTION                                                                       | ASKED TO (ROLE)   |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 1  | "Suresh ji, when Diwali peak begins next week, what is the single non-negotiable screen you need  | Suresh Vardhan    |
|    | to see on your phone within 10 seconds of waking up?"                                            | (Owner)           |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 2  | "Suresh ji, when Sharma Bartan owes ₹1.8 Lakhs, who has the final authority to allow a partial    | Suresh Vardhan    |
|    | dispatch—do you want an SMS/WhatsApp approval prompt on your phone?"                              | (Owner)           |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 3  | "Ramesh bhai, on the noisy factory floor, how many seconds can you spare to mark an order as     | Ramesh            |
|    | dispatched? Would tap-only buttons with utensil photos work better than typing?"                  | (Dispatch Lead)   |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 4  | "Ramesh bhai, how do you currently record when only 180 out of 300 kadhais are sent to Mehra     | Ramesh            |
|    | Kitchenware? Where do you write down that 120 pieces are still owed?"                             | (Dispatch Lead)   |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 5  | "Munshi ji, what formula do you use to convert raw kilograms issued to Pappu karigar into the     | Munshi Ji         |
|    | expected piece count? What percentage of weight loss is considered normal burnishing loss?"       | (Accountant)      |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 6  | "Munshi ji, do you want the system to generate an automated daily CSV file formatted specifically | Munshi Ji         |
|    | for 1-click import into your existing Tally Prime sales voucher ledger?"                         | (Accountant)      |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 7  | "Kunal, why did the ₹1.2 Lakh ERP fail in 2023? Was it because it took too long to fill forms,     | Kunal Vardhan     |
|    | required a desktop, or because the floor staff couldn't understand English?"                     | (MBA / Son)       |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 8  | "Kunal, when Gupta Traders sends a WhatsApp message that looks identical to an order from 2 days | Kunal Vardhan     |
|    | ago, how do you verify if it's a repeat order or a reminder before adding it to the sheet?"       | (MBA / Son)       |
+----+---------------------------------------------------------------------------------------------------+-------------------+
| 9  | "Suresh ji & Kunal, why is the external distributor Sharma Bartan inside your internal factory    | Suresh & Kunal    |
|    | WhatsApp dispatch group? What happens when sensitive pricing or scrap notes are discussed there?" | (Leadership)      |
+----+---------------------------------------------------------------------------------------------------+-------------------+
```

---

## 9. Key Project Risk & Mitigation Strategy

### The Primary Risk: Low Shop-Floor Adoption by Ramesh & Karigars
The existential threat to this project is **a repeat of the 2023 ERP failure**, where ₹1.2 Lakh was spent on software that was abandoned within three months because Ramesh and the floor staff found it too cumbersome and continued using their physical diaries.

### Risk Mitigation Playbook
1. **Zero-Typing Mobile Interface for Ramesh**:
   * Ramesh's smartphone UI uses large $60\text{px}$ high-contrast buttons with utensil product iconography and Hindi labels (*"पोलिश भेजा"*, *"गाड़ी लोड हुई"*).
   * Quantities default to full order amounts; partial dispatches are adjusted using simple `[+]` `[-]` steppers or a visual slider.
2. **Offline-First Resilience**:
   * Jagadhri factory sheds frequently suffer Wi-Fi and cellular dead zones. Ramesh's mobile app queues actions locally in IndexedDB and syncs instantly when connectivity resumes.
3. **Dual-Run Pilot (14 Days Prior to Cutover)**:
   * During the first 14 days, Ramesh keeps his paper diary as backup while our team shadows the floor daily to verify every entry.
   * If an order takes more than 15 seconds for Ramesh to update, the interface is redesigned on the spot.
4. **WhatsApp Dispatch Bot Fallback**:
   * If Ramesh is on the press floor without opening the app, he can send a 5-word message or voice note to a dedicated WhatsApp business number (*"Mehra 180 Kadai tempo load"*), and the system automatically parses and updates the dispatch record.
