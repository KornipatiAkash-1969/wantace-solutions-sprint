# Part E — Video Script & AI Usage Note (15%)

---

## 1. Five-Minute Presentation Video Script & Speaking Blueprint

*Format*: 5-minute video recording (Loom / Unlisted YouTube / Drive link). Camera on, natural conversational delivery, Hindi/English mixed.

### Timing & Speaking Structure

```
+-------------------+-----------------------------------------------------------------------------------+
| TIMESTAMP         | SECTION FOCUS & CANDIDATE TALKING POINTS                                          |
+-------------------+-----------------------------------------------------------------------------------+
| 0:00 – 1:30       | TOPIC 1: What Surprised Me in My Part A Business Audit                            |
| (90 seconds)      | • The disconnect between physical machinery and information flow.                 |
|                   | • How a ₹30 WhatsApp change ruined ₹28,000 worth of kraft paper boxes.            |
|                   | • The physical "Parchi" clipboard as an emotional shield for workers.             |
+-------------------+-----------------------------------------------------------------------------------+
| 1:30 – 3:15       | TOPIC 2: The Most Important Thing the Vardhan Pack Revealed (Unspoken Truth)      |
| (105 seconds)     | • Suresh minimizing problems: "Payment koi problem nahi" vs. ₹1.8L default.      |
|                   | • The Outsourced Polishing Black Hole: 6 kg metal loss on Pappu's 420 kg batch.   |
|                   | • Generational tug-of-war: Kunal's AI daydream vs. Suresh's burnt ₹1.2L ERP memory.|
+-------------------+-----------------------------------------------------------------------------------+
| 3:15 – 5:00       | TOPIC 3: One Requirement Doc Decision I Would Change with Another Day             |
| (105 seconds)     | • The decision to exclude Polishing Karigars from the digital loop.               |
|                   | • Why physical job slips still leave a reconciliation delay.                      |
|                   | • How I would evolve it into a 2-way WhatsApp Interactive Audio/Button Bot.        |
+-------------------+-----------------------------------------------------------------------------------+
```

---

### Conversational Speaking Script (Camera-Ready)

#### [0:00 – 1:30] Segment 1: What Surprised Me in My Part A Visit
*(Look directly into the camera. Confident, grounded tone.)*

"Hi team, I want to share the three biggest insights from this solutions sprint. 

Starting with my Part A visit to Apex Packaging in Mayapuri: what shocked me wasn't that they were using paper registers or whiteboards. What really surprised me was **the violent asymmetry between how fast a customer can change an instruction on WhatsApp and how long it takes that change to physically reach the factory floor**.

The owner, Vikas, showed me an actual pile of 1,800 die-cut sweet boxes sitting in the scrap corner. A client had sent a casual WhatsApp message at 10 AM saying *'Bhaiya MRP ₹149 se ₹179 kar dena'*. Vikas read it on his phone while driving, forgot to forward it, and the supervisor pulled the old rubber printing plate from rack number four. By 2 PM, ₹28,000 of corrugated board was destroyed. 

The supervisor wasn't lazy—he was running three machines at once. But in small Indian factories, the owner's WhatsApp is an information black hole. Orders enter digitally, but execution runs on physical habit. That realization changed how I looked at Vardhan Steelware."

#### [1:30 – 3:15] Segment 2: The Unspoken Truth in the Vardhan Client Pack
*(Lean in slightly. Analytical and diagnostic tone.)*

"When you read the Vardhan Steelware pack, there is a glaring contradiction between what Suresh *says* on the phone and what his order sheet and WhatsApp logs *scream*.

Suresh brushes off problems: he says *'Mahine ke 60–70 order honge'*, *'Payment koi problem nahi, purani parties hain'*, and calls metal differences *'wastage'*. 

But when you analyze the numbers:
First, they logged 25 orders in just 7 days—that is a **107 orders a month run-rate**, surging past 150 during Diwali. Suresh is undercounting his own volume by 40%.
Second, payments *are* a crisis. Sharma Bartan owes ₹1.8 Lakhs in old dues, their orders are frozen, and the distributor is actually messaging inside the internal factory dispatch group demanding goods. 
Third—and this is the biggest hidden hemorrhage—**the outsourced polishing black hole**. 

On September 3rd, Munshi ji logged that they sent 420 kg of steel to Karigar Pappu. They got back 1,180 pieces with a 6 kg shortage. Suresh shrugs it off, but Kunal’s audit showed a 3 to 4% annual steel variance. At Jagadhri scale, that silent leakage is hundreds of thousands of rupees walking out the back door in metal scrap and unearned buffing charges.

The client pack isn't asking for software; it's revealing an operational civil war between an MBA son dreaming of AI forecasting and a self-made father who burnt ₹1.2 Lakh on a failed ERP and just wants to know where his trucks are."

#### [3:15 – 5:00] Segment 3: One PRD Decision I Would Change with Another Day
*(Thoughtful, self-critical, solutions-oriented tone.)*

"If I had one more day to refine my Part B requirement document, **I would rethink how I handled the outsourced polishing karigars**.

In my Phase 1 scope, I explicitly kept external karigars off the software and relied on Munshi ji reconciling printed paper slips at the factory gate. I did that to protect adoption—external contractors don't want to download SaaS apps.

However, after reflecting on how Pappu's 6 kg shortage lingered in WhatsApp for three days before Munshi ji even flagged it, leaving it manual is dangerous during the Diwali surge. When 40 distributors are screaming for thalis and patilas, manual slips will get lost, and Suresh will approve payments without reconciliation.

With another day, I would replace the physical paper slip with a **zero-install WhatsApp Audio & Button Bot for Karigars**. 

When Pappu receives 420 kg of utensils, our system triggers an automated WhatsApp message in Hindi with two buttons: *[Accept 420 kg]* or *[Report Discrepancy]*. When he finishes buffing, he sends a 5-second voice note or photo of his delivery slip. The system parses the piece count, calculates weight loss against standard tolerance, and immediately notifies Munshi ji if the shortage exceeds 1%.

That closes the loop on their single biggest profit leak without forcing a 50-year-old buffing master to learn an ERP interface. Thank you."

---

## 2. Structured AI Usage Note (Adhering to Official Format)

* **Tools used**: OpenAI ChatGPT (GPT-4o), Anthropic Claude 3.5 Sonnet, and Custom Python Data Scripts.
* **Tasks supported**: Python script development for statistical aggregation of Kunal's 25-row order sheet, regex extraction of WhatsApp timestamps, Mermaid schema layout generation, and rapid draft styling.
* **My independent contribution**: Physical field visit, on-site owner interview, and root-cause tracing at Apex Packaging; identifying the 3-4% metal shortage leakage in the Vardhan pack; structuring the no-typing mobile UI workflow for Ramesh; and defining the strict Phase 1 scope boundaries (killing premature AI forecasting).
* **Incorrect or generic AI output**: When initially asked to propose a solution for Vardhan Steelware, the AI generated a generic SaaS enterprise blueprint including automated demand forecasting, multi-warehouse inventory tracking, and direct EDI integrations with Amazon/Flipkart.
* **How I corrected it**: I discarded the generic enterprise architecture completely. I grounded the PRD strictly in the evidence from the call transcript—recognizing that an identical ₹1.2 Lakh complex ERP had failed within 90 days in 2023. I forced the scope down to a 4-role mobile-first operational tracker centered around Suresh's 3 morning reports and Ramesh's floor reality.
* **Limitations**: AI cannot visit a noisy sheet metal or packaging factory floor, smell the steam and grease, observe a supervisor fumbling with greasy hands, or sense the interpersonal tension between a non-tech father and an MBA son.
* **Final verification**: I independently reviewed every calculated number (25 orders, ₹5,86,317 revenue, 12% online count, 7.88% value, ₹1.8L default balance) and verified every field against the candidate brief requirements.
