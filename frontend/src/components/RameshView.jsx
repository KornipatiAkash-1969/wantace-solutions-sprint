import React, { useState } from 'react';
import { Truck, CheckCircle2, AlertOctagon, ArrowUpRight, Check, X } from 'lucide-react';

export default function RameshView({ orders, onSendToPolishing, onReceivePolishing, onPartialDispatch }) {
  const [activeModalOrder, setActiveModalOrder] = useState(null);
  const [shippedQty, setShippedQty] = useState(180);
  const [vehicleNo, setVehicleNo] = useState('HR-02-AB-4412 (Tata Ace)');

  const floorOrders = orders.filter(o => o.status !== 'DISPATCHED' && o.status !== 'RETURN');

  const openModal = (order) => {
    setActiveModalOrder(order);
    const defaultPart = Math.min(order.qty, Math.floor(order.qty * 0.6) || order.qty);
    setShippedQty(defaultPart);
  };

  const handleConfirmModal = () => {
    if (!activeModalOrder) return;
    onPartialDispatch(activeModalOrder.id, shippedQty, vehicleNo);
    setActiveModalOrder(null);
  };

  return (
    <div className="space-y-6">
      
      {/* RAMESH HEADER BANNER (HIGH VISIBILITY WHITE & GREY) */}
      <div className="white-panel rounded-2xl p-4.5 border-l-4 border-l-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center space-x-3.5">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-xl font-black shrink-0 shadow-md">
            राम
          </div>
          <div>
            <div className="font-black text-slate-900 text-base tracking-tight flex items-center space-x-2">
              <span>Ramesh Bhai Ka Shop-Floor Screen</span>
              <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full border border-slate-300 uppercase font-mono font-bold">
                No Typing
              </span>
            </div>
            <div className="text-slate-600 text-xs mt-0.5 font-medium">
              Bade touch buttons, 2-tap dispatch, aur seedha mobile se karigar ko maal bhejne ka simple tarika.
            </div>
          </div>
        </div>
        <span className="bg-slate-100 text-slate-800 font-mono px-3.5 py-1.5 rounded-xl text-xs font-bold border border-slate-300 shrink-0 shadow-2xs flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>Factory Floor Mode</span>
        </span>
      </div>

      {/* FLOOR ACTION CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {floorOrders.map(o => {
          const isHold = o.status === 'HOLD_PAYMENT';
          const inPolish = o.status === 'IN_POLISHING';

          return (
            <div
              key={o.id}
              className={`white-panel rounded-2xl p-5 space-y-4 shadow-xs flex flex-col justify-between transition-all duration-150 border-2 ${
                isHold 
                  ? 'border-rose-400 bg-rose-50/30' 
                  : inPolish 
                    ? 'border-amber-400 bg-amber-50/30' 
                    : 'border-slate-300 hover:border-slate-800 bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-mono text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300">
                    {o.id}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 font-mono">{o.date}</span>
                </div>

                <h4 className="text-lg font-black text-slate-900 mt-2 tracking-tight">{o.party}</h4>
                <div className="text-xs text-slate-500 font-medium">{o.city}</div>

                {/* Utensil Box */}
                <div className="mt-3.5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Maal / Item:</span>
                    <span className="text-base font-black text-slate-900 tracking-tight">{o.item}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Quantity:</span>
                    <span className="text-lg font-black text-slate-900 font-mono">{o.qty} <span className="text-xs text-slate-500 font-normal">{o.unit}</span></span>
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 mt-2.5 flex items-center justify-between">
                  <span>Current State:</span>
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
                    isHold ? 'bg-rose-100 text-rose-800 border border-rose-300' : inPolish ? 'bg-amber-100 text-amber-800 border border-amber-300' : 'bg-slate-100 text-slate-800 border border-slate-300'
                  }`}>
                    {o.status}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS (TACTILE INDUSTRIAL CONTRAST) */}
              <div className="pt-2">
                {isHold ? (
                  <div className="p-3.5 bg-rose-50 border border-rose-300 rounded-xl text-center text-rose-900 font-bold text-xs space-y-1">
                    <div className="flex items-center justify-center space-x-1.5 text-rose-700">
                      <AlertOctagon size={18} />
                      <span className="text-sm font-black tracking-tight">GAADI LOAD MAT KARNA</span>
                    </div>
                    <div className="text-[11px] text-rose-700 font-medium">
                      Suresh ji ki permission ke bina dispatch band hai (₹1.8L Dues).
                    </div>
                  </div>
                ) : inPolish ? (
                  <button
                    onClick={() => onReceivePolishing(o.id)}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-black text-xs shadow-sm flex items-center justify-center space-x-2 tactile-btn"
                  >
                    <CheckCircle2 size={18} />
                    <span>Polish Se Maal Aa Gaya (Mark Ready)</span>
                  </button>
                ) : (
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={() => onSendToPolishing(o.id)}
                      className="py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 tactile-btn"
                    >
                      <ArrowUpRight size={16} />
                      <span>Polish Bhejo</span>
                    </button>
                    <button
                      onClick={() => openModal(o)}
                      className="py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 tactile-btn shadow-sm"
                    >
                      <Truck size={16} />
                      <span>Gaadi Mein Load</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* PARTIAL DISPATCH MODAL */}
      {activeModalOrder && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-300 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="font-black text-slate-900 text-lg flex items-center space-x-2 tracking-tight">
                <span className="p-2 rounded-xl bg-slate-100 text-slate-800">
                  <Truck size={18} />
                </span>
                <span>गाड़ी में माल लोड करें (Dispatch)</span>
              </h3>
              <button
                onClick={() => setActiveModalOrder(null)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Party:</span>
                  <span className="text-slate-900 font-black text-sm">{activeModalOrder.party}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px]">Order:</span>
                  <span className="text-slate-800 font-black">{activeModalOrder.qty} {activeModalOrder.unit} {activeModalOrder.item}</span>
                </div>
              </div>

              {/* SLIDER CARD */}
              <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-200 space-y-2.5">
                <label className="block text-slate-800 font-bold tracking-wide">
                  गाड़ी में कितने पीस लोड किए? (Adjust Slider)
                </label>
                <div className="flex items-center space-x-4 pt-2">
                  <input
                    type="range"
                    min="1"
                    max={activeModalOrder.qty}
                    value={shippedQty}
                    onChange={(e) => setShippedQty(parseFloat(e.target.value))}
                    className="flex-1 cursor-pointer"
                  />
                  <span className="text-3xl font-black text-slate-900 font-mono w-20 text-right tracking-tight">
                    {shippedQty}
                  </span>
                  <span className="text-slate-500 font-bold uppercase text-[11px]">{activeModalOrder.unit}</span>
                </div>
                <div className="text-[11px] text-amber-800 pt-2 font-medium bg-amber-50 p-2 rounded-lg border border-amber-200">
                  → Baaki bachega: <strong className="text-slate-900">{activeModalOrder.qty - shippedQty} {activeModalOrder.unit}</strong> (Backorder automatically tracked without duplicate row!)
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">Transporter / Tempo No. & Driver</label>
                <input
                  type="text"
                  value={vehicleNo}
                  onChange={(e) => setVehicleNo(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-slate-900 text-xs font-mono font-medium focus:border-slate-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-3 flex space-x-3">
              <button
                onClick={() => setActiveModalOrder(null)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition border border-slate-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmModal}
                className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-black text-xs shadow-sm flex items-center justify-center space-x-1.5 tactile-btn"
              >
                <Check size={16} />
                <span>Confirm ({shippedQty} {activeModalOrder.unit})</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
