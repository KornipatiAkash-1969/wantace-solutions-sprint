import React from 'react';

export default function RoleBanner({ currentRole }) {
  const configs = {
    suresh: {
      title: "Suresh Vardhan (58, Owner)",
      quote: '"Mujhe bas phone pe dekhna hai kaunsa order kahan atka hai."',
      desc: "Simulating 7:30 AM Smartphone Pulse: Atka Maal stages, Payment Holds, and Karigar shortages. Zero typing, 1-tap call/override.",
      badge: "Owner Mode"
    },
    kunal: {
      title: "Kunal Vardhan (30, Sales Desk & MBA)",
      quote: '"Main sheet maintain karta hoon na... duplicate entries and WhatsApp messages create chaos."',
      desc: "Order Intake Desk: Real-time duplicate detection, standardized units (PCS/DOZ/SET only, locks out KG), rate verification.",
      badge: "Sales Desk"
    },
    ramesh: {
      title: "Ramesh (Dispatch In-Charge, 22 yrs on Floor)",
      quote: '"Floor pe call pe nahi aa paayega... Ramesh ki diary mein sab hai."',
      desc: "Zero-Typing Floor Screen: Large tap-targets, Hindi labels ('पोलिश भेजा', 'गाड़ी लोड'), and interactive partial dispatch slider without row duplication.",
      badge: "Shop Floor"
    },
    munshi: {
      title: "Munshi Ji (Accounts & Tally Lead)",
      quote: '"Karigar Pappu ko 420 kg diya tha, 1180 pcs aaye. Hisaab kal."',
      desc: "Financial Control & Jobwork Audit: Real-time metal weight-to-piece loss calculation (-6 kg Pappu shortage) and 1-click verified Tally Prime CSV export.",
      badge: "Accounts"
    },
    audit: {
      title: "Forensic Data Audit & Executive Insights",
      quote: '"Suresh says 60-70 orders; sheet proves 107/mo run-rate. Evidence vs Claims."',
      desc: "Deep comparative analytics comparing transcript verbal statements against actual quantitative data in Kunal's 1-7 September Google Sheet.",
      badge: "Audit View"
    }
  };

  const c = configs[currentRole] || configs.suresh;

  return (
    <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 text-xs transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="flex items-center space-x-2.5">
          <span className="w-2 h-2 rounded-full bg-slate-800 shrink-0"></span>
          <div>
            <span className="font-extrabold text-slate-900 mr-1.5 tracking-tight">{c.title}:</span>
            <span className="italic text-slate-600 hidden md:inline">{c.quote}</span>
            <span className="text-slate-600 ml-1 block sm:inline font-medium">— {c.desc}</span>
          </div>
        </div>
        <div className="font-mono text-[11px] text-slate-600 font-semibold shrink-0 bg-slate-200/80 px-2.5 py-0.5 rounded-md border border-slate-300">
          {c.badge} • 25 Seed Orders
        </div>
      </div>
    </div>
  );
}
