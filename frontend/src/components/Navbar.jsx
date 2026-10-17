import React from 'react';
import { Smartphone, Laptop, Factory, Receipt, BarChart3 } from 'lucide-react';

export default function Navbar({ currentRole, onSelectRole }) {
  const roles = [
    { id: 'suresh', name: 'Suresh (Owner)', icon: Smartphone, tag: 'Pulse 7:30 AM' },
    { id: 'kunal', name: 'Kunal (Sales)', icon: Laptop, tag: 'Duplicate Guard' },
    { id: 'ramesh', name: 'Ramesh (Floor)', icon: Factory, tag: 'Zero Typing' },
    { id: 'munshi', name: 'Munshi Ji (Accounts)', icon: Receipt, tag: 'Tally CSV' },
    { id: 'audit', name: 'Data Audit', icon: BarChart3, tag: 'Evidence Log' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center font-black text-xl shadow-md text-white border border-slate-700">
            V
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-extrabold text-slate-900 tracking-tight">
                Vardhan Steelware
              </h1>
              <span className="bg-slate-100 text-slate-700 text-[10px] px-2.5 py-0.5 rounded-full border border-slate-300 font-bold uppercase tracking-wider flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Pre-Diwali MVP</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium">
              Jagadhri Utensil Cluster • Wantace Factory Intelligence
            </p>
          </div>
        </div>

        {/* Role Switcher Toolbar */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-inner overflow-x-auto max-w-full gap-1">
          <span className="text-[10px] text-slate-500 px-3 font-bold uppercase tracking-wider hidden xl:inline">
            Role:
          </span>
          {roles.map((r) => {
            const Icon = r.icon;
            const isActive = currentRole === r.id;
            return (
              <button
                key={r.id}
                onClick={() => onSelectRole(r.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 flex items-center space-x-2 whitespace-nowrap ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
                }`}
              >
                <Icon size={14} />
                <span>{r.name}</span>
                {isActive && (
                  <span className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono font-medium hidden sm:inline">
                    {r.tag}
                  </span>
                )}
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
