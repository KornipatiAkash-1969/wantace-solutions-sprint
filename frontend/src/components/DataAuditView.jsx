import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function DataAuditView() {
  const comparisons = [
    {
      metric: "Monthly Order Run-Rate",
      claim: '"Mahine ke 60–70 order honge." (Suresh)',
      reality: "25 orders in 7 days = 3.57/day → 107.1 orders/month (surging past 150+ during Diwali). Undercounting by 40–55%.",
      impact: "Underestimating floor capacity and logistics requirements before festival surge.",
      status: "MISMATCH",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
    },
    {
      metric: "Online Revenue Share",
      claim: '"Online abhi 5% bhi nahi hai." (Suresh)',
      reality: "3 orders out of 25 = 12.0% by count; ₹46,192 / ₹5,86,317 = 7.88% by revenue. Growing, but NOT the core bottleneck.",
      impact: "Kunal demanding AI forecasting & marketplace API sync is premature when floor has no basic visibility.",
      status: "PREMATURE_DEMAND",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300"
    },
    {
      metric: "Payment Defaults & Credit Risk",
      claim: '"Payment koi problem nahi. Purani parties hain." (Suresh)',
      reality: "Sharma Bartan Karnal holds ₹1.8L overdue balance; 2 orders frozen; direct customer conflict inside internal WhatsApp on 05/09.",
      impact: "Verbal informal trust masks working capital lockup and awkward factory dispatch disputes.",
      status: "CRITICAL_DEFAULT",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
    },
    {
      metric: "Production Bottlenecks",
      claim: '"Maal banta hai, polish hota hai, pack karke bhej dete." (Suresh)',
      reality: "40.5% of value (₹2.37L) pending; 4 out of 10 pending orders stuck in outsourced polishing (Tope/Bhagona).",
      impact: "Outsourced karigars are the single biggest operational blindspot on the delivery timeline.",
      status: "BOTTLENECK",
      badgeColor: "bg-slate-100 text-slate-800 border-slate-300"
    },
    {
      metric: "Polishing Metal Scrap Loss",
      claim: '"Arre, woh toh wastage hai." (Suresh)',
      reality: "420 kg issued to Pappu → 1,180 pcs returned with 6.0 kg direct shortage (1.43% loss). Kunal noted 3–4% annual scrap in audit.",
      impact: "Silent margin leakage running into lakhs of rupees annually walking out the factory back door.",
      status: "MARGIN_LEAKAGE",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-300"
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* AUDIT INTRO BANNER */}
      <div className="white-panel rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-slate-200">
        <div className="flex items-center space-x-3.5">
          <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200">
            <BarChart3 size={20} />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2 tracking-tight">
              <span>Forensic Analysis: Client Claims vs Ground Truth</span>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-300 uppercase font-mono font-bold">
                Evidence Audit
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Comparing what Suresh and Kunal stated on the 12 October discovery call against the hard evidence in the 1–7 September Google Sheet and WhatsApp group export.
            </p>
          </div>
        </div>
        <span className="bg-slate-100 text-slate-800 font-mono text-xs px-3.5 py-1.5 rounded-xl border border-slate-300 font-bold shrink-0">
          Wantace Solutions Diagnostic
        </span>
      </div>

      {/* COMPARATIVE SCORECARD TABLE */}
      <div className="white-panel rounded-2xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Operational Area</th>
                <th className="py-3.5 px-4">Client Verbal Statement</th>
                <th className="py-3.5 px-4">Ground Truth from Logs</th>
                <th className="py-3.5 px-4">Solutions Engineering Impact</th>
                <th className="py-3.5 px-4 text-right">Verdict</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              {comparisons.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 px-4 font-black text-slate-900 whitespace-nowrap">{c.metric}</td>
                  <td className="py-4 px-4 text-slate-600 italic max-w-xs">{c.claim}</td>
                  <td className="py-4 px-4 text-slate-900 font-medium max-w-sm">{c.reality}</td>
                  <td className="py-4 px-4 text-slate-500 max-w-xs">{c.impact}</td>
                  <td className="py-4 px-4 text-right whitespace-nowrap">
                    <span className={`px-2.5 py-1 rounded-md border font-bold text-[11px] ${c.badgeColor}`}>
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4 CRITICAL DEFECT CARDS FROM KUNAL'S SHEET */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="white-panel rounded-2xl p-5 space-y-2 border-l-4 border-l-amber-500">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900">
            <span>DEFECT 1: DUPLICATE WHATSAPP ENTRIES</span>
            <span className="font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300">Row 1 & Row 3</span>
          </div>
          <h4 className="text-slate-900 font-black text-sm">Gupta Traders Kadai No.10 (200 pcs)</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Row 1 was marked dispatched on 01-09-26. Row 3 was entered again on the same day as "pending, repeat msg?". Kunal could not verify whether the client re-ordered or re-sent the previous WhatsApp message.
          </p>
        </div>

        <div className="white-panel rounded-2xl p-5 space-y-2 border-l-4 border-l-rose-500">
          <div className="flex items-center justify-between text-xs font-bold text-rose-900">
            <span>DEFECT 2: GHOST DISPATCH (MISSING CUSTOMER)</span>
            <span className="font-mono bg-rose-100 text-rose-900 px-2 py-0.5 rounded border border-rose-300">Row 9</span>
          </div>
          <h4 className="text-slate-900 font-black text-sm">240 Thalis Dispatched to Blank Recipient</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Entry reads: <span className="font-mono text-slate-800">"3 Sep, , Thali 12 inch, 20 dozen, rate 600, dispatched"</span>. 240 stainless steel thalis worth <strong className="text-slate-900">₹12,000</strong> left the factory gate with zero recorded debtor or destination.
          </p>
        </div>

        <div className="white-panel rounded-2xl p-5 space-y-2 border-l-4 border-l-slate-600">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>DEFECT 3: UNIT & RATE CORRUPTION</span>
            <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-300">Row 21</span>
          </div>
          <h4 className="text-slate-900 font-black text-sm">Verma Utensils: Kadai Entered in 'kg'</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Entry recorded quantity as "180", unit as "kg" (while every other kadai order is in pieces), with rate left completely blank and remarks "rate confirm karna hai".
          </p>
        </div>

        <div className="white-panel rounded-2xl p-5 space-y-2 border-l-4 border-l-slate-900">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900">
            <span>DEFECT 4: ROW FRAGMENTATION ON PARTIALS</span>
            <span className="font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-300">Row 12 & Row 18</span>
          </div>
          <h4 className="text-slate-900 font-black text-sm">Mehra Kitchenware Kadai Order Split</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            300 ordered, 180 dispatched on 04-09-26. Two days later, a brand new row was created for 120 pcs ("baaki wala"), severing fulfillment traceability.
          </p>
        </div>

      </div>

    </div>
  );
}
