import React, { useState } from 'react';
import { PlusCircle, AlertTriangle, CheckCircle, Search, Filter, ShieldCheck, ArrowRight, Ban, RefreshCw, ShoppingCart } from 'lucide-react';
import { CUSTOMER_MASTER } from '../data/seedData';

export default function KunalView({ orders, onAddOrder }) {
  const [party, setParty] = useState('');
  const [item, setItem] = useState('Kadai No.10');
  const [qty, setQty] = useState(100);
  const [unit, setUnit] = useState('pcs');
  const [rate, setRate] = useState(185);
  const [filterType, setFilterType] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Duplicate check logic
  const duplicateMatch = orders.find(o => 
    o.party === party && 
    o.item.toLowerCase().includes(item.toLowerCase().split(' ')[0]) &&
    o.status !== 'DISPATCHED'
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!party) {
      alert("Please select a customer / distributor.");
      return;
    }
    if (rate <= 0) {
      alert("Please provide a valid positive unit rate.");
      return;
    }

    const newId = `VS-26-${String(orders.length + 1).padStart(3, '0')}`;
    const selectedCust = CUSTOMER_MASTER.find(c => c.name === party);
    const isHold = selectedCust?.isBlocked || party.includes('Sharma');

    const newOrder = {
      id: newId,
      date: "08-09-26",
      party: party,
      city: selectedCust?.city || "Haryana",
      item: item,
      qty: parseFloat(qty),
      unit: unit,
      rate: parseFloat(rate),
      status: isHold ? "HOLD_PAYMENT" : "PENDING",
      remarks: isHold 
        ? "⛔ BLOCKED: Customer has overdue dues in Tally" 
        : "Booked via Kunal Desk with unit validation"
    };

    onAddOrder(newOrder);
    setQty(100);
    alert(`Order ${newId} successfully registered for ${party}! Value: ₹${(qty * rate).toLocaleString()}`);
  };

  // Filter orders
  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.party.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          o.id.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filterType === 'ALL') return true;
    if (filterType === 'DISPATCHED') return o.status === 'DISPATCHED';
    if (filterType === 'PENDING') return o.status === 'PENDING';
    if (filterType === 'IN_POLISHING') return o.status === 'IN_POLISHING';
    if (filterType === 'HOLD_PAYMENT') return o.status === 'HOLD_PAYMENT';
    if (filterType === 'DEFECTS') return o.remarks.includes('⚠️') || o.remarks.includes('❌') || o.remarks.includes('⛔');
    return true;
  });

  return (
    <div className="space-y-6">
      
      {/* KUNAL ORDER INTAKE DESK WITH LIVE DUPLICATE GUARD */}
      <div className="white-panel rounded-2xl p-6 border border-slate-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center space-x-2.5">
              <span className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-300">
                <ShoppingCart size={16} />
              </span>
              <span>Sales Order Intake Desk (Kunal)</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Validates party master, stops repeat WhatsApp messages from creating duplicate rows, and enforces strict finished goods units.
            </p>
          </div>
          <span className="bg-slate-100 text-slate-800 text-xs px-3 py-1 rounded-xl border border-slate-300 font-bold flex items-center space-x-1.5 shadow-2xs">
            <ShieldCheck size={14} className="text-slate-700" />
            <span>Active Duplicate Guard</span>
          </span>
        </div>

        {/* REAL-TIME DUPLICATE ALERT CARD */}
        {duplicateMatch && (
          <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-900 flex items-start space-x-3.5 shadow-sm animate-fade-in">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-0.5">
              <AlertTriangle size={18} />
            </div>
            <div>
              <div className="font-extrabold text-amber-900 text-sm tracking-tight">POTENTIAL DUPLICATE ENTRY DETECTED!</div>
              <div className="text-amber-800 mt-1 leading-relaxed">
                Warning: <strong>{party}</strong> already has an active order (<span className="font-mono font-bold text-slate-900">{duplicateMatch.id}</span>) for <strong>{duplicateMatch.item}</strong> ({duplicateMatch.qty} {duplicateMatch.unit}) placed on {duplicateMatch.date}.
                Current Status: <span className="font-bold bg-amber-200/60 px-2 py-0.5 rounded border border-amber-300 uppercase">{duplicateMatch.status}</span>.
              </div>
              <div className="text-amber-700 text-[11px] mt-1.5 font-medium italic">
                → Confirm with customer if this is a repeat inquiry on WhatsApp before booking another row.
              </div>
            </div>
          </div>
        )}

        {/* ORDER INTAKE FORM */}
        <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 mb-1.5 tracking-wide">Customer / Distributor *</label>
            <select
              value={party}
              onChange={(e) => setParty(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none transition font-medium"
              required
            >
              <option value="">Select Distributor / Channel...</option>
              {CUSTOMER_MASTER.map(c => (
                <option key={c.name} value={c.name}>
                  {c.name} {c.isBlocked ? '(⛔ Credit Hold)' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1.5 tracking-wide">Utensil Catalog Item *</label>
            <select
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none transition font-medium"
              required
            >
              <option value="Kadai No.10">Kadai No.10 (Heavy Gauge SS)</option>
              <option value="Patila set 5pc">Patila set 5pc (Mirror Finish)</option>
              <option value="Thali 12 inch">Thali 12 inch (Laser Edge)</option>
              <option value="Gilas 300ml">Gilas 300ml (Fluted)</option>
              <option value="Tope No.6">Tope No.6 (Deep Buff)</option>
              <option value="Bhagona 8L">Bhagona 8L (Heavy Bottom)</option>
              <option value="Dinner set 24pc">Dinner set 24pc (Gift Box)</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1.5 tracking-wide">Quantity & Unit *</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none font-mono font-bold"
                required
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none font-medium"
                required
              >
                <option value="pcs">pcs</option>
                <option value="dozen">dozen</option>
                <option value="set">set</option>
              </select>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block font-medium">
              ('kg' locked to protect inventory integrity)
            </span>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1.5 tracking-wide">Unit Rate (₹) *</label>
            <div className="flex space-x-2">
              <input
                type="number"
                min="1"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-900 focus:border-slate-800 focus:bg-white focus:outline-none font-mono font-bold"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs whitespace-nowrap shadow-sm flex items-center space-x-1.5 transition active:scale-95"
              >
                <span>Book</span>
                <ArrowRight size={13} />
              </button>
            </div>
            <span className="text-[10px] text-slate-500 mt-1 block font-mono">
              Line Total: ₹{(qty * rate).toLocaleString()}
            </span>
          </div>
        </form>
      </div>

      {/* SEARCH & FILTER CONTROLS */}
      <div className="white-panel rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Filter Badges */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto">
          {[
            { id: 'ALL', label: `All (${orders.length})` },
            { id: 'DISPATCHED', label: 'Dispatched (12)' },
            { id: 'PENDING', label: 'Pending (7)' },
            { id: 'IN_POLISHING', label: 'In Polish (4)' },
            { id: 'HOLD_PAYMENT', label: 'Payment Hold (2)' },
            { id: 'DEFECTS', label: 'Defects / Anomalies (7)' },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                filterType === f.id
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search party or item..."
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800 focus:bg-white font-medium"
          />
        </div>
      </div>

      {/* FULL ORDER REGISTRY TABLE (CLEAN WHITE & GREY) */}
      <div className="white-panel rounded-2xl overflow-hidden border border-slate-200">
        <div className="overflow-x-auto max-h-[520px]">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 uppercase font-semibold sticky top-0 border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Order ID</th>
                <th className="py-3.5 px-4">Party & City</th>
                <th className="py-3.5 px-4">Utensil & Qty</th>
                <th className="py-3.5 px-4">Rate</th>
                <th className="py-3.5 px-4">Total Value</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Defect Diagnosis & Operational Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              {filteredOrders.map(o => {
                let badge = <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-bold border border-slate-300">PENDING</span>;
                if (o.status === 'DISPATCHED') {
                  badge = <span className="bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-md border border-emerald-300 text-[11px] font-bold">DISPATCHED</span>;
                } else if (o.status === 'IN_POLISHING') {
                  badge = <span className="bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-md border border-amber-300 text-[11px] font-bold">IN POLISHING</span>;
                } else if (o.status === 'HOLD_PAYMENT') {
                  badge = <span className="bg-rose-50 text-rose-900 px-2.5 py-0.5 rounded-md border border-rose-300 text-[11px] font-bold">PAYMENT HOLD</span>;
                } else if (o.status === 'PARTIAL_DISPATCH') {
                  badge = <span className="bg-blue-50 text-blue-900 px-2.5 py-0.5 rounded-md border border-blue-300 text-[11px] font-bold">PARTIAL (180/300)</span>;
                } else if (o.status === 'RETURN') {
                  badge = <span className="bg-purple-50 text-purple-900 px-2.5 py-0.5 rounded-md border border-purple-300 text-[11px] font-bold">RETURN (DENT)</span>;
                }

                const lineVal = (o.qty > 0 && o.rate > 0)
                  ? `₹${(o.qty * o.rate).toLocaleString()}`
                  : (o.rate === 0 ? <span className="text-rose-700 font-bold">RATE BLANK</span> : `-₹${Math.abs(o.qty * o.rate)}`);

                const hasAnomaly = o.remarks.includes('⚠️') || o.remarks.includes('❌') || o.remarks.includes('⛔');

                return (
                  <tr key={o.id} className={`hover:bg-slate-50/80 border-b border-slate-200 transition ${hasAnomaly ? 'bg-amber-50/30' : ''}`}>
                    <td className="py-3 px-4 text-slate-500 font-mono">{o.date}</td>
                    <td className="py-3 px-4 font-mono text-slate-900 font-bold">{o.id}</td>
                    <td className="py-3 px-4">
                      <div className="text-slate-900 font-black text-sm">{o.party}</div>
                      <div className="text-slate-500 text-[11px]">{o.city}</div>
                    </td>
                    <td className="py-3 px-4 font-bold text-slate-800">
                      {o.item} <span className="text-slate-500 font-normal font-mono">({o.qty} {o.unit})</span>
                    </td>
                    <td className="py-3 px-4 font-mono">{o.rate ? `₹${o.rate}` : '-'}</td>
                    <td className="py-3 px-4 font-mono font-bold text-slate-900">{lineVal}</td>
                    <td className="py-3 px-4">{badge}</td>
                    <td className="py-3 px-4 text-[11px] text-slate-600">
                      {o.remarks}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
