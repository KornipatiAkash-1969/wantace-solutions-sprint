import React, { useState } from 'react';
import { IndianRupee, Hourglass, Lock, Scale, Phone, AlertTriangle, CheckCircle, Search, ShieldAlert, Check } from 'lucide-react';

export default function SureshView({ orders, onOverrideHold, onAlertRamesh, onCallContact }) {
  const [activeReport, setActiveReport] = useState('atka');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculations
  const atkaOrders = orders.filter(o => o.status === 'IN_POLISHING');
  const holdOrders = orders.filter(o => o.status === 'HOLD_PAYMENT');

  // Filtered orders for live search
  const filteredOrders = orders.filter(o => 
    o.party.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
    o.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* 4 TOP MORNING PULSE CARDS (WHITE & GREY TILES) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Total Orders & Revenue */}
        <div className="white-card rounded-2xl p-5 border border-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Booked Revenue (7d)</span>
            <span className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
              <IndianRupee size={16} />
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight">₹5.86 L</span>
            <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {orders.length} Orders
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 font-medium">
            Run-rate: <strong className="text-slate-800">107/mo</strong> (Suresh estimated 60–70)
          </p>
        </div>

        {/* Card 2: Atka Maal (Polishing Bottleneck) */}
        <div className="white-card rounded-2xl p-5 border border-amber-200 bg-amber-50/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Atka Maal (Polish)</span>
            <span className="p-2.5 rounded-xl bg-amber-100 text-amber-700 border border-amber-200">
              <Hourglass size={16} />
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-amber-700 tracking-tight">{atkaOrders.length} Orders</span>
            <span className="text-xs text-amber-800 font-mono font-bold bg-amber-100 px-2 py-0.5 rounded border border-amber-300">380 units</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-2 font-medium">
            Waiting for Karigars Pappu & Shyam
          </p>
        </div>

        {/* Card 3: Payment Holds */}
        <div className="white-card rounded-2xl p-5 border border-rose-200 bg-rose-50/20">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">Payment Holds</span>
            <span className="p-2.5 rounded-xl bg-rose-100 text-rose-700 border border-rose-200">
              <Lock size={16} />
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-rose-700 tracking-tight">₹1.80 L</span>
            <span className="text-xs text-rose-800 font-mono font-bold bg-rose-100 px-2 py-0.5 rounded border border-rose-300">{holdOrders.length} Blocked</span>
          </div>
          <p className="text-[11px] text-slate-600 mt-2 font-medium">
            Sharma Bartan Karnal (Diwali stock locked)
          </p>
        </div>

        {/* Card 4: Karigar Scrap Shortage */}
        <div className="white-card rounded-2xl p-5 border border-slate-300">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Metal Shortage</span>
            <span className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
              <Scale size={16} />
            </span>
          </div>
          <div className="mt-3 flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 tracking-tight font-mono">-6.00 kg</span>
            <span className="text-xs text-rose-700 font-bold bg-rose-50 px-2 py-0.5 rounded-md border border-rose-200">
              1.43% Loss
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-2 font-medium">
            Karigar Pappu (420kg out, 1180 pcs in)
          </p>
        </div>

      </div>

      {/* QUICK DISTRIBUTOR SEARCH BAR FOR SURESH */}
      <div className="white-panel rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5 w-full md:w-auto">
          <div className="p-2.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200">
            <Search size={18} />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">Distributor Quick-Status Lookup</h3>
            <p className="text-xs text-slate-500">When a distributor calls Suresh, type their name for instant order status without calling Ramesh.</p>
          </div>
        </div>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type party name (e.g. Bansal, Sharma)..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white font-medium transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-800 bg-slate-200 px-2 py-0.5 rounded-md"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* SEARCH RESULTS VIEW (IF SEARCHING) */}
      {searchQuery && (
        <div className="white-panel rounded-2xl p-5 border-slate-300 animate-fade-in">
          <div className="flex items-center justify-between mb-3 text-xs">
            <span className="font-bold text-slate-800">Matching Records for "{searchQuery}":</span>
            <span className="text-slate-500 font-mono">{filteredOrders.length} found</span>
          </div>
          {filteredOrders.length === 0 ? (
            <div className="text-center py-6 text-slate-400 text-xs">No matching orders found.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filteredOrders.map(o => (
                <div key={o.id} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs space-y-1.5 hover:border-slate-300 transition">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-slate-800 font-bold">{o.id}</span>
                    <span className="text-[11px] text-slate-500 font-mono">{o.date}</span>
                  </div>
                  <div className="text-slate-900 font-black text-sm">{o.party}</div>
                  <div className="text-slate-600 font-medium">{o.item} • {o.qty} {o.unit}</div>
                  <div className="text-amber-800 font-bold">Status: {o.status}</div>
                  <div className="text-slate-500 text-[11px] italic">{o.remarks}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* THE 3 MORNING REPORTS TABS CONTAINER */}
      <div className="white-panel rounded-2xl overflow-hidden border border-slate-200">
        <div className="border-b border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-4 bg-slate-50/60">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2">
              <span>Suresh's Daily Morning Pulse (7:30 AM Reports)</span>
              <span className="text-xs font-normal text-slate-500 hidden sm:inline">(Replaces 15 floor phone calls)</span>
            </h2>
            <p className="text-xs text-slate-500">Pre-computed exception alerts delivered to mobile before plant gates open.</p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveReport('atka')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeReport === 'atka' 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Report 1: Atka Maal ({atkaOrders.length})
            </button>
            <button
              onClick={() => setActiveReport('hold')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeReport === 'hold' 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Report 2: Payment Holds ({holdOrders.length})
            </button>
            <button
              onClick={() => setActiveReport('shortage')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
                activeReport === 'shortage' 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              Report 3: Polishing Shortage
            </button>
          </div>
        </div>

        {/* REPORT 1: ATKA MAAL PULSE */}
        {activeReport === 'atka' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span>Orders currently stalled in outsourced polishing past normal 48-hour SLA:</span>
              <span className="text-amber-800 font-bold flex items-center space-x-1.5 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                <AlertTriangle size={14} className="text-amber-600" />
                <span>4 Production Bottlenecks</span>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Party & Location</th>
                    <th className="py-3 px-4">Utensil Product</th>
                    <th className="py-3 px-4">Current Stage</th>
                    <th className="py-3 px-4">Aging Delay</th>
                    <th className="py-3 px-4 text-right">Quick Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  {atkaOrders.map((o) => (
                    <tr key={o.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-3.5 px-4 font-mono text-slate-900 font-bold">{o.id}</td>
                      <td className="py-3.5 px-4">
                        <div className="text-slate-900 font-extrabold text-sm">{o.party}</div>
                        <div className="text-slate-500 text-[11px]">{o.city}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-slate-800 font-bold">{o.item}</span>
                        <span className="text-slate-500 ml-1.5 font-mono">({o.qty} {o.unit})</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md border border-amber-300 font-bold inline-flex items-center space-x-1">
                          <span>In Polishing</span>
                        </span>
                        <span className="text-[11px] text-slate-500 block mt-1 font-medium">External Jobworker</span>
                      </td>
                      <td className="py-3.5 px-4 text-rose-700 font-bold font-mono">Delayed 3–4 Days</td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => onCallContact("Karigar Pappu (+91 98721 00112)")}
                          className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold border border-slate-300 transition"
                        >
                          <Phone size={12} className="inline mr-1" />
                          Call Karigar
                        </button>
                        <button
                          onClick={() => onAlertRamesh(o.id, o.party)}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition shadow-xs"
                        >
                          Alert Ramesh
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-mono text-slate-900 font-bold">VS-26-021</td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-900 font-extrabold text-sm">Verma Utensils</div>
                      <div className="text-slate-500 text-[11px]">Sonipat, Haryana</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-rose-700 font-bold">180 kg(?) Kadhai 10 no.</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="bg-rose-100 text-rose-900 px-2.5 py-1 rounded-md border border-rose-300 font-bold">
                        Rate Unconfirmed
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-amber-800 font-bold font-mono">Blocked at Desk</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => alert("Notification sent to Kunal to fix unit to 'pcs' and confirm price.")}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold"
                      >
                        Nudge Kunal
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORT 2: PAYMENT HOLDS REGISTER */}
        {activeReport === 'hold' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span>Orders blocked by Munshi ji due to customer credit limit breach:</span>
              <span className="text-rose-700 font-bold flex items-center space-x-1.5 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                <ShieldAlert size={14} />
                <span>Requires Suresh Executive Authorization</span>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Distributor</th>
                    <th className="py-3 px-4">Blocked Order Value</th>
                    <th className="py-3 px-4">Overdue Balance</th>
                    <th className="py-3 px-4">Blocked Date</th>
                    <th className="py-3 px-4 text-right">Suresh 1-Tap Authorization</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  {holdOrders.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center py-8 text-emerald-700 font-bold text-sm">
                        <CheckCircle size={18} className="inline mr-2" />
                        No orders currently on payment hold! All dispatches cleared.
                      </td>
                    </tr>
                  ) : (
                    holdOrders.map(o => (
                      <tr key={o.id} className="hover:bg-slate-50/80 transition">
                        <td className="py-3.5 px-4 font-mono text-rose-700 font-bold">{o.id}</td>
                        <td className="py-3.5 px-4">
                          <div className="text-slate-900 font-extrabold text-sm">{o.party}</div>
                          <div className="text-slate-500 text-[11px]">{o.city}</div>
                        </td>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <span className="text-sm font-mono font-black">₹{(o.qty * o.rate).toLocaleString()}</span>
                          <span className="text-slate-500 font-normal block text-[11px]">{o.qty} {o.unit} {o.item}</span>
                        </td>
                        <td className="py-3.5 px-4 text-rose-700 font-bold font-mono">
                          <span className="text-sm">₹1,80,000</span> Overdue
                          <span className="text-[10px] text-slate-500 block font-normal">Dues aging &gt; 40 days</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 font-mono">{o.date}</td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => onOverrideHold(o.id, o.party)}
                            className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-sm flex items-center space-x-1.5 ml-auto transition active:scale-95"
                          >
                            <Check size={14} />
                            <span>Suresh Override & Dispatch</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* REPORT 3: OUTSOURCED POLISHING SHORTAGE AUDIT */}
        {activeReport === 'shortage' && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-200">
              <span>Automated stainless steel weight-to-piece scrap reconciliation for external jobworkers:</span>
              <span className="text-slate-700 font-bold flex items-center space-x-1.5 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                <Scale size={14} />
                <span>Prevents 3–4% Annual Scrap Leakage</span>
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Batch ID</th>
                    <th className="py-3 px-4">Karigar Name</th>
                    <th className="py-3 px-4">Utensil Type</th>
                    <th className="py-3 px-4">Weight Sent (kg)</th>
                    <th className="py-3 px-4">Finished Pcs Received</th>
                    <th className="py-3 px-4">Shortage Deficit</th>
                    <th className="py-3 px-4 text-right">Action / Deduction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 font-medium">
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-mono text-slate-900 font-bold">POL-881</td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-900 font-extrabold text-sm">Karigar Pappu</div>
                      <div className="text-slate-500 text-[11px] font-mono">+91 98721 00112</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">Tope No.6</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 font-bold">420.00 kg</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 font-bold">1,180 pcs</td>
                    <td className="py-3.5 px-4 text-rose-700 font-bold font-mono">
                      -6.00 kg (-1.43%)
                      <span className="text-[10px] text-rose-600 block font-normal">Exceeds 1.0% allowable loss</span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="bg-rose-100 text-rose-800 px-2.5 py-1 rounded-md border border-rose-300 font-bold mr-2">
                        ₹1,680 Loss Flagged
                      </span>
                      <button
                        onClick={() => alert("Munshi ji notified: ₹1,680 deducted from Pappu's polishing payment.")}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold"
                      >
                        Deduct Payout
                      </button>
                    </td>
                  </tr>

                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="py-3.5 px-4 font-mono text-slate-900 font-bold">POL-882</td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-900 font-extrabold text-sm">Karigar Shyam</div>
                      <div className="text-slate-500 text-[11px] font-mono">+91 98962 33411</div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">Bhagona 8L</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 font-bold">250.00 kg</td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 font-bold">410 pcs</td>
                    <td className="py-3.5 px-4 text-emerald-700 font-bold font-mono">
                      -1.20 kg (-0.48%)
                      <span className="text-[10px] text-emerald-600 block font-normal">Within 1.0% allowable buffing loss</span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-300 font-bold">
                        Approved OK
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
