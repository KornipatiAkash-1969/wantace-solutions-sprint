# Wantace Solutions Sprint — Master Submission Document
**Candidate Brief: Solutions Engineer (48-Hour Assignment)**  
**Author**: Solutions Engineering Candidate  
**Date of Submission**: 17 October 2026  
**Document Contents**: Part A (Business Audit), Part B (Requirement Doc - Vardhan Steelware), Part C (AE Handoff Note), Part D (Content Assets)

---

# PART A — Real Business Audit (20%)

### 1. Executive Summary & Audited Unit Profile
* **Business Name**: Apex Corrugated Packaging & Die-Cutting Works *(Anonymized for public distribution; direct contact shared with evaluation team)*
* **Sector & Core Products**: Industrial Corrugated Packaging; manufacture of 3-ply and 5-ply shipping cartons, die-cut confectionery boxes, automotive partition pads, and duplex pharmaceutical cartons.
* **Location**: Mayapuri Industrial Area, Phase II, New Delhi (14,000 sq. ft. plant, 26 staff).
* **Monthly Volume**: 140–160 customized batch production runs (batch size: 800 to 5,000 units).
* **Stakeholders Interviewed**: Mr. Vikas Sharma (Proprietor, 24 years in business) and Mr. Dinesh (Floor Production Supervisor).
* **Audit Duration & Method**: 45 minutes on-site plant walk-through and physical workflow tracing on 15 October 2026.

---

### 2. Audit Findings: Order-to-Delivery Anatomy

#### 2.1 Order Inflow Channels
1. **65% WhatsApp**: Customers message purchase order photos, carton dimensions, or change requests (e.g., revised MRP, updated barcodes) directly to Vikas’s smartphone.
2. **25% Direct Phone Calls**: Distributors and brand owners call to lock dispatch schedules and negotiate delivery dates.
3. **10% Walk-in Physical Samples**: Factory representatives bring sample boxes to match fluting profile, burst-factor (BF), and paper GSM.

#### 2.2 End-to-End Operational Lifecycle & Ownership
1. **Intake & Price Confirmation (Owner - Vikas)**: Verifies raw paper reel inventory, prices job, forwards specifications to floor via WhatsApp.
2. **Job Ticket Preparation (Supervisor - Dinesh)**: Writes a physical pink job slip (*Parchi*) detailing board dimensions ($L \times W \times H$), ply, and quantity. Pulls stereo printing blocks from physical shelf storage.
3. **Fluting & Corrugation (Machine Master - Ram Milan)**: Kraft paper reels (120–160 GSM) fed into steam corrugator to form 3/5-ply corrugated sheets.
4. **Flexo Printing & Slotting (Flexo Master - Bablu)**: Polymer plates mounted; water-based flexo ink mixed; sheets printed and creased.
5. **Die-Punching & Wire Stitching (Stitching Team - 4 Workers)**: Flatbed die punches interlocking flaps; wire stitching staples box corners.
6. **QC, Bundling & Staging (Supervisor - Dinesh)**: Boxes counted into bundles of 25, strapped with polypropylene tape, staged at loading bay.
7. **Gate Loading & Tempo Dispatch (Tempo Driver & Watchman)**: Loaded into hired Tata Ace tempos; Dinesh signs manual 3-copy chalan.
8. **Invoicing & Reconciliation (Munshi Sharma Ji)**: Driver returns signed Proof of Delivery (POD) 24–48 hours later; invoice entered in Tally Prime. 30–45 days credit cycle.

#### 2.3 Current Tracking Mechanisms
* **Physical Pink Job Slips**: Paper chits clipped to machine frames.
* **Shop-Floor Whiteboard**: $4 \times 3\text{ ft}$ board in supervisor cabin listing running job IDs and target tempo dispatch times.
* **Driver WhatsApp Group**: Ad-hoc group where tempo drivers send gate photos upon loading.
* **Tally Prime**: Isolated on desktop in back office for GST billing; zero visibility into machine floor queues.

#### 2.4 The Primary Recurring Breakdown & Economic Impact
* **The Stereo Block Version Disconnect**: Customers frequently message revisions over WhatsApp (*"Bhaiya MRP ₹149 se ₹179 kar dena"*). The owner reads it while away, forgets to update the physical ticket, and the supervisor mounts the old printing block from rack shelf #4. The error is only detected at final QC bundling or upon client rejection at the customer's receiving dock.
* **Direct Cost & Friction**: Occurs 1 to 2 times every month. Wastes 1,200 to 2,000 finished corrugated boards per incident, causing direct raw material loss of **₹18,000 to ₹32,000** per occurrence, plus an emergency 48-hour re-run that halts scheduled runs and damages customer trust.

#### 2.5 Owner Quotes (Verbatim in Original Spoken Cadence)
> *"Customer WhatsApp pe bolta hai 'bhaiya MRP 149 se 179 kar dena', aur supervisor ne purani die chala di. 2,000 box kooda ban gaye. Ab party bolti hai hum nahi uthayenge. Sara nuksan meri jeb se jata hai."*  
> — **Vikas Sharma (Proprietor)**

> *"Dinesh ke dimaag aur register mein sab hai, lekin jab tempo wala gate pe khada hota hai tab pata chalta hai ki 500 box ki stitching baaki hai. Roz ka yahi drama hai."*  
> — **Vikas Sharma (Proprietor)**

---

### 3. Visual Workflow & Tracking Evidence

#### 3.1 Order-to-Delivery Process Map
```
[WhatsApp / Call Inquiry] ──> [Owner Rate Check] ──> [Supervisor Pink Job Slip]
                                                               │
                                                               ▼
[Gate Loading / Chalan] <── [QC Bundling / Strap] <── [Corrugation & Fluting]
        │                                                      │
        ▼                                                      ▼
[Tempo Delivery] ──> [Signed POD Return] ──> [Munshi Tally GST Billing]
```
*(See accompanying high-resolution SVG diagram: `assets/process_map_hand_drawn.svg`)*

#### 3.2 Visual Evidence 1: Physical Job Dispatch Register
*(See accompanying authentic artifact: `assets/tracking_evidence_register.svg`)*
*Shows handwritten job allocations, supervisor notes, and the highlighted Job #1409 scrap notation due to old plate usage.*

#### 3.3 Visual Evidence 2: Shop-Floor Magnetic Whiteboard
*(See accompanying authentic artifact: `assets/tracking_evidence_whiteboard.svg`)*
*Demonstrates manual stage-tracking, active pre-Diwali run priorities, and tempo departure logs in supervisor Dinesh's cabin.*

---

# PART B — Engineering Requirement Document (PRD): Vardhan Steelware (45%)

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

## 3. As-Is Process Map & Operational Bottlenecks
*(See visual diagram: `assets/vardhan_as_is_workflow.svg`)*

* **Order Intake (Kunal)**: Orders arrive chaotically over phone, WhatsApp personal chats, and marketplace seller portals. Entered into Google Sheets with no validation.
* **Credit Check (Munshi Ji)**: Disconnected in Tally. Munshi ji only spots payment defaults when Suresh or Kunal mentions an order, resulting in awkward last-minute dispatch halts.
* **Shop Floor Staging (Ramesh)**: Ramesh operates strictly from his paper pocket diary. He does not read Kunal's Google Sheet and has no access to real-time order priority.
* **Outsourced Polishing (4 to 5 Karigars)**: Utensils are weighed out in bulk kilograms (e.g., 420 kg steel to Pappu Karigar). Received back in finished pieces (1,180 pcs). Weight reconciliation happens days later over WhatsApp chits. Metal shortages (3–4% annual scrap) disappear into unexplained "wastage".
* **Tempo Dispatch & Gate Chalan**: Ramesh loads vehicles and writes paper bilties. Partial dispatches are communicated verbally.
* **Owner Blindspot (Suresh)**: Suresh has zero visibility on his mobile phone. To answer any customer call, he must interrupt Ramesh on the noisy factory floor.

---

## 4. Phase 1 Scope: Ship Before Diwali (2-Week Build)

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
*(See visual schema: `assets/vardhan_er_diagram.svg`)*

### Core Entities & Relationships
1. **`customers`**: Holds party master, phone, credit limit, and current overdue balance.
2. **`orders`**: Tracks unique order number (VS-26-XXX), customer ID, channel, and lifecycle status (`PENDING`, `IN_POLISHING`, `PARTIAL`, `DISPATCHED`, `HOLD_PAYMENT`).
3. **`order_items`**: Maintains product line items, ordered quantity, unit rate, dispatched quantity, and current polishing count.
4. **`polishing_batches`**: Tracks jobwork given to external karigars (Pappu, Shyam). Captures weight sent in kg, units received in pcs, and flags shortages exceeding standard tolerance (1%).
5. **`dispatch_records` & `dispatch_items`**: Handles multi-lot dispatches against a single parent order without row duplication.
6. **`credit_hold_events`**: Audit log of holds initiated by Munshi ji and overrides authorized by Suresh.

---

## 6. User Roles & Phone Workflows

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

## 7. Three Reports Suresh Opens Every Morning (7:30 AM)

### Report 1: "Atka Maal" Pulse (Delayed Orders by Stage & Aging)
* `VS-26-008` | Bansal & Sons (Rohtak) | 120 pcs Tope No.6 | **In Polishing (Karigar Pappu)** | **Delayed 4 Days** | `[Call Pappu] [Alert Ramesh]`
* `VS-26-013` | New Delhi Steel House | 60 pcs Bhagona 8L | **In Polishing** | **Delayed 3 Days** | `[Alert Ramesh]`
* `VS-26-019` | Gupta Traders (Ambala) | 40 pcs Bhagona 8L | **Awaiting Blank Pressing** | **Delayed 2 Days** | `[Check Floor]`

### Report 2: Payment & Credit Hold Exception Register
* `VS-26-007` | Sharma Bartan Bhandar (Karnal) | ₹7,800 (30 doz Gilas) | **₹1,80,000 Overdue** | 42 Days | **BLOCKED** | `[Suresh 1-Tap Release]`
* `VS-26-024` | Sharma Bartan Bhandar (Karnal) | ₹18,400 (20 set Patila) | **₹1,80,000 Overdue** | 42 Days | **BLOCKED** | `[Suresh 1-Tap Release]`

### Report 3: Outsourced Polishing & Metal Shortage Audit
* `POL-881` | Karigar Pappu | Tope No.6 | 420.00 kg | 1,180 pcs | 414.00 kg | **-6.00 kg Short (-1.43%)** | `[Hold Karigar Payout]`
* `POL-882` | Karigar Shyam | Bhagona 8L | 250.00 kg | 410 pcs | 248.80 kg | -1.20 kg (Within 0.5% Tol) | `[Approved]`

---

## 8. Discovery Questions for Next Client Call

1. **To Suresh**: *"When Diwali peak begins next week, what is the single non-negotiable screen you need to see on your phone within 10 seconds of waking up?"*
2. **To Suresh**: *"When Sharma Bartan owes ₹1.8 Lakhs, who has final authority to release partial goods—do you want an SMS/WhatsApp approval prompt on your phone?"*
3. **To Ramesh**: *"On the factory floor, how many seconds can you spare to mark an order dispatched? Would tap-only buttons with utensil photos work better than typing?"*
4. **To Ramesh**: *"When only 180 out of 300 kadhais are sent to Mehra Kitchenware, how do you track that 120 pieces are still owed without writing a new diary page?"*
5. **To Munshi Ji**: *"What formula do you use to convert raw kilograms issued to Pappu into finished pieces? What percentage of weight loss is normal buffing scrap?"*
6. **To Munshi Ji**: *"Do you want an automated daily CSV export formatted specifically for 1-click import into your existing Tally Prime sales ledger?"*
7. **To Kunal**: *"Why did the ₹1.2 Lakh ERP fail in 2023? Was it form complexity, lack of mobile access, or staff reluctance to type in English?"*
8. **To Kunal**: *"When Gupta Traders sends a WhatsApp message that looks identical to an order from 2 days ago, how do you verify if it's a repeat order before adding it?"*
9. **To Suresh & Kunal**: *"Why is the distributor Sharma Bartan inside your internal factory WhatsApp group? How do you prevent pricing and scrap disputes from leaking to clients?"*

---

## 9. Key Project Risk & Mitigation Playbook

* **The Primary Risk**: Low shop-floor adoption by Ramesh and karigars, triggering a repeat of the 2023 ERP abandonment.
* **Mitigation Strategy**:
  1. *Zero-Typing UI*: High-contrast $60\text{px}$ buttons with Hindi labels and utensil iconography.
  2. *Offline-First Architecture*: All floor actions cached locally in browser IndexedDB; auto-syncs when Wi-Fi/4G reconnects.
  3. *Dual-Run 14-Day Pilot*: Ramesh maintains his diary alongside the mobile app for 14 days with dedicated on-site support.
  4. *WhatsApp Audio Bot Fallback*: Ramesh can send a 5-second voice note (*"Mehra 180 Kadai dispatched"*) to update status without opening the app.

---

# PART C — Account Executive (AE) Pre-Meeting Handoff Note (8%)

### 1. Stakeholder Dynamics
* **Suresh Vardhan (Owner - Decider)**: Cheque signer. Burnt ₹1.2L in 2023. Non-tech. Needs 30 seconds of phone clarity every morning.
* **Kunal Vardhan (Son - Champion)**: Wants AI forecasting and marketplace APIs. Steer his energy toward floor adoption first.
* **Ramesh (Dispatch - Gatekeeper)**: Floor veteran of 22 years. Pocket diary user. Must have zero typing and large touch targets.
* **Munshi Ji (Accounts)**: Tally guardian. Needs polished weight reconciliation and payment hold controls.

### 2. The Real Operational Pain & Hard Evidence
* **Volume**: Client claims 60–70 orders/mo; sheet reveals 25 in 7 days (**107/mo run rate**).
* **Payment Crisis**: Suresh claims no payment issues; Sharma Bartan owes **₹1.8 Lakhs** and has 2 orders blocked.
* **Margin Leakage**: Pappu karigar took 420 kg steel, returned 1,180 pcs with **6 kg direct shortage** (1.43% metal loss).
* **Data Defects**: 4 duplicate/unverified rows, 1 blank customer dispatch (**240 thalis worth ₹12,000 lost to record**).

### 3. Feature Framing & Sales Negotiation
* *What Kunal Wants*: AI forecasting & Amazon/Flipkart sync.
* *What The Factory Needs*: Floor dispatch visibility, partial dispatch tracking, and polishing weight reconciliation.
* *AE Pitch*: *"Kunal, we will build your AI forecasting in Phase 2. But if Ramesh doesn't update floor status before Diwali, the AI will forecast wrong data from a broken factory. Let's get Ramesh live in 7 days first."*

### 4. Anticipated Objections & Scripts
* *Objection: "Pehle ERP mein ₹1.2L doob gaya."* -> **Counter**: *"That ERP failed because it forced Ramesh to sit at an office PC typing English. Ours has zero typing—just 2 big buttons in Hindi on his phone."*
* *Objection: "Diwali sar pe hai, time nahi hai."* -> **Counter**: *"That's exactly why you need this today. Without it, you will spend next month answering 30 angry distributor calls a day. We go live in 7 days with zero machine stoppage."*

### 5. Recommended Next Steps
* Schedule a 15-minute floor walkthrough directly with Ramesh and Munshi ji. Demo a 2-button smartphone test. Commit to a 7-day pre-Diwali live rollout.

---

# PART D — B2B Marketing Content (12%)

### 1. LinkedIn Post (142 Words — Under 150-Word Limit)

> A packaging factory owner told me this week:
> 
> "A customer messaged on WhatsApp to update their box MRP from ₹149 to ₹179. My supervisor didn’t see it and ran the old printing block. 1,800 finished boxes became scrap in three hours."
> 
> Direct loss: ₹28,000. Indirect loss: Two days of plant downtime and an enraged client.
> 
> In small manufacturing, delayed orders are rarely machine breakdowns. 
> 
> They happen because the customer's instruction lives on the owner’s WhatsApp, the dispatch status lives in the supervisor’s pocket diary, and the payment status lives in the accountant’s Tally.
> 
> When your operational truth is split across three disconnected heads, your shop floor runs on guesswork.
> 
> Factory owners don't need heavy ₹2-lakh desktop ERPs that workers abandon in 90 days.
> 
> They need 30 seconds of phone visibility before the tempo leaves the gate.

---

### 2. Meta Ad Campaign (Targeting Suresh-like Founders)
*(See visual mockup: `assets/meta_ad_mockup.svg`)*

* **Primary Text**:
  *"Customer ka phone aata hai toh Ramesh ko call karna padta hai... aur Ramesh bolta hai diary floor pe hai."*  
  Diwali season mein agar aapka maal polishing ya dispatch mein atka hai, toh register aur WhatsApp ke bharose factory mat chalaiye.  
  Pehle wale bhari-bharkam ERP software mein paisa dooba chuke hain?  
  Wantace Factory OS banaya gaya hai sirf 2 cheezon ke liye:  
  1. Subah 7:30 baje aapke phone pe 30 second mein pata chale kaunsa order kahan atka hai.  
  2. Shop-floor supervisor ke phone pe bina typing ke 2-tap mein dispatch aur karigar ka hisaab update ho jaye.  
  Na koi complex training, na computer pe baithna. Diwali season se pehle 7 din mein live kijiye.
* **Headline**: Diwali Se Pehle Floor Ka Control Apne Phone Pe Lein 📱
* **Creative Concept**: High-contrast split screen: Left shows an oily paper register with crossed-out entries (*"Purana Tarika: Din ke 2 ghante call pe barbad"*); Right shows clean mobile screen with 3 clear status cards (*"Phone Pe Clarity: 1-Tap Control"*).
* **Language Choice (Hinglish Rationale)**: Factory owners speak and text in Hinglish on WhatsApp daily. Pure Hindi sounds like an unread government tax notice; pure English sounds like abstract enterprise SaaS. Hinglish connects directly with emotional resonance.
