import React, { useState } from 'react';
import { Scale, Lock, CheckCircle2, FileSpreadsheet } from 'lucide-react';
import { CUSTOMER_MASTER } from '../data/seedData';

export default function MunshiView({ orders }) {
  const [sentKg, setSentKg] = useState(420.0);
  const [recdPcs, setRecdPcs] = useState(1180);
  const [customers, setCustomers] = useState(CUSTOMER_MASTER);

  // Dynamic shortage formula
  const stdPieceWeight = 0.350847; // standard kg per Tope No.6
  const expectedPcsWeight = recdPcs * stdPieceWeight;
  const shortageKg = Math.max(0, sentKg - expectedPcsWeight);
  const isLossCritical = shortageKg > 3.0; // over standard 1% tolerance

  const toggleCustomerBlock = (name) => {
    setCustomers(prev => prev.map(c => {
      if (c.name === name) {
        const nextState = !c.isBlocked;
        return { ...c, isBlocked: nextState };
      }
      return c;
    }));
  };

  const handleExportCSV = () => {
    const headers = ["Order_Number", "Date", "Party_Name", "City", "Product", "Quantity", "Unit", "Rate", "Total_Amount", "Status", "Remarks"];
    const rows = orders.map(o => [
      o.id,
      o.date,
      `"${o.party}"`,
      `"${o.city}"`,
      `"${o.item}"`,
      o.qty,
      o.unit,
      o.rate,
      (o.qty * o.rate).toFixed(2),
      o.status,
      `"${o.remarks.replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Vardhan_Steelware_Tally_Sales_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      
      {/* MUNSHI TOP BAR */}
      <div className="white-panel rounded-2xl p-6 flex flex-wrap items-center justify-between gap-4 border border-slate-200">
        <div className="flex items-center space-x-3.5">
          <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 border border-slate-200">
            <Scale size={20} />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
              <span>Munshi Ji's Accounts & Jobwork Audit Desk</span>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full border border-slate-300 uppercase font-mono font-bold">
                Tally Prime Sync
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Tally synchronization, outsourced polishing metal loss calculation, and payment hold enforcement.
            </p>
          </div>
        </div>
        <button
          onClick={handleExportCSV}
          className="px-4.5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center space-x-2 shadow-xs transition active:scale-95"
        >
          <FileSpreadsheet size={16} />
          <span>Export Clean Tally Prime CSV</span>
        </button>
      </div>

      {/* DYNAMIC KARIGAR WEIGHT LOSS & SHORTAGE CALCULATOR */}
      <div className="white-panel rounded-2xl p-6 space-y-4 border border-slate-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2 tracking-tight">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              <span>Karigar Jobwork Metal Shortage Audit (Pappu / Shyam / Ramu)</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Reconciles raw utensil weight sent (kg) against polished pieces received, stopping the 3–4% annual stainless steel scrap leakage.
            </p>
          </div>
          <span className="text-xs font-mono bg-slate-100 text-slate-800 px-3 py-1 rounded-full border border-slate-300 font-bold">
            Live Loss Formula
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs bg-slate-50 p-4.5 rounded-2xl border border-slate-200">
          <div>
            <span className="text-slate-500 block mb-1.5 font-bold uppercase tracking-wider text-[10px]">Karigar Name</span>
            <input
              type="text"
              value="Karigar Pappu (Jagadhri)"
              readOnly
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-slate-900 font-bold"
            />
          </div>
          <div>
            <span className="text-slate-500 block mb-1.5 font-bold uppercase tracking-wider text-[10px]">Raw Metal Issued (kg)</span>
            <input
              type="number"
              value={sentKg}
              onChange={(e) => setSentKg(parseFloat(e.target.value) || 0)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-slate-900 font-mono font-bold focus:border-slate-800 focus:outline-none"
            />
          </div>
          <div>
            <span className="text-slate-500 block mb-1.5 font-bold uppercase tracking-wider text-[10px]">Finished Pieces Received</span>
            <input
              type="number"
              value={recdPcs}
              onChange={(e) => setRecdPcs(parseFloat(e.target.value) || 0)}
              className="w-full bg-white border border-slate-300 rounded-xl p-2.5 text-slate-900 font-mono font-bold focus:border-slate-800 focus:outline-none"
            />
          </div>
          <div>
            <span className="text-slate-500 block mb-1.5 font-bold uppercase tracking-wider text-[10px]">Shortage Variance</span>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-2 rounded-xl font-mono font-black text-sm tracking-tight ${
                isLossCritical
                  ? 'bg-rose-100 text-rose-800 border border-rose-300'
                  : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
              }`}>
                -{shortageKg.toFixed(2)} kg Loss
              </span>
            </div>
          </div>
        </div>

        {/* FINANCIAL RECONCILIATION BANNER */}
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-rose-900 font-medium">
            <strong>Financial Action:</strong> {shortageKg.toFixed(2)} kg stainless steel shortage = <strong className="text-slate-900 font-mono text-sm">₹{(shortageKg * 280).toFixed(0)}</strong> direct metal deficit. Recommended debit note from Karigar Pappu's buffing payout.
          </div>
          <button
            onClick={() => alert(`₹${(shortageKg * 280).toFixed(0)} posted to Karigar Pappu Debit Adjustment Ledger in Tally.`)}
            className="px-4 py-2 bg-rose-700 hover:bg-rose-800 text-white rounded-xl font-bold text-xs shadow-xs shrink-0"
          >
            Post Tally Deduction
          </button>
        </div>
      </div>

      {/* CUSTOMER CREDIT LIMIT & PAYMENT HOLD GATEKEEPER */}
      <div className="white-panel rounded-2xl p-6 space-y-4 border border-slate-200">
        <div>
          <h3 className="text-sm font-extrabold text-slate-900 flex items-center space-x-2 tracking-tight">
            <Lock size={16} className="text-slate-700" />
            <span>Customer Credit Control Master & Payment Lock Queue</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            When a party's dues exceed their sanctioned credit limit, new dispatches are automatically frozen until Munshi ji or Suresh overrides.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Distributor / Party</th>
                <th className="py-3.5 px-4">Location</th>
                <th className="py-3.5 px-4">Contact Phone</th>
                <th className="py-3.5 px-4">Outstanding Dues</th>
                <th className="py-3.5 px-4">Credit Limit</th>
                <th className="py-3.5 px-4">Dispatch Lock Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              {customers.map((c) => (
                <tr key={c.name} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 px-4 font-black text-slate-900 text-sm">{c.name}</td>
                  <td className="py-3.5 px-4 text-slate-500">{c.city}</td>
                  <td className="py-3.5 px-4 text-slate-600 font-mono">{c.phone}</td>
                  <td className={`py-3.5 px-4 font-mono font-bold ${c.dues > 100000 ? 'text-rose-700 text-sm' : 'text-slate-800'}`}>
                    ₹{c.dues.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">
                    ₹{c.creditLimit.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4">
                    {c.isBlocked ? (
                      <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-md border border-rose-300 font-bold inline-flex items-center space-x-1">
                        <Lock size={12} />
                        <span>BLOCKED (Hold)</span>
                      </span>
                    ) : (
                      <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md border border-emerald-300 font-bold inline-flex items-center space-x-1">
                        <CheckCircle2 size={12} />
                        <span>CLEAR TO DISPATCH</span>
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => toggleCustomerBlock(c.name)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                        c.isBlocked
                          ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      {c.isBlocked ? 'Release Hold' : 'Block Party'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
