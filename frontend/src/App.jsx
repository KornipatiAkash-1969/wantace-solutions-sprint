import React, { useState } from 'react';
import Navbar from './components/Navbar';
import RoleBanner from './components/RoleBanner';
import SureshView from './components/SureshView';
import KunalView from './components/KunalView';
import RameshView from './components/RameshView';
import MunshiView from './components/MunshiView';
import DataAuditView from './components/DataAuditView';
import { INITIAL_ORDERS } from './data/seedData';
import { Bell } from 'lucide-react';

export default function App() {
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [currentRole, setCurrentRole] = useState('suresh');
  const [notification, setNotification] = useState(null);

  const showToast = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Suresh: Override Payment Hold
  const handleOverrideHold = (orderId, party) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          status: 'PENDING',
          remarks: 'Payment hold authorized & released by Suresh Vardhan on phone'
        };
      }
      return o;
    }));
    showToast(`Order ${orderId} (${party}) released by Suresh! Ramesh is now authorized to load tempo.`, 'success');
  };

  // Suresh: Alert Ramesh
  const handleAlertRamesh = (orderId, party) => {
    showToast(`Priority alert sent to Ramesh on shop floor for order ${orderId} (${party})!`, 'info');
  };

  // Call contact action
  const handleCallContact = (contact) => {
    showToast(`Connecting direct call to ${contact}...`, 'info');
  };

  // Kunal: Add New Order
  const handleAddOrder = (newOrder) => {
    setOrders(prev => [newOrder, ...prev]);
    showToast(`New order ${newOrder.id} registered for ${newOrder.party}!`, 'success');
  };

  // Ramesh: Send to Polishing
  const handleSendToPolishing = (id) => {
    setOrders(prev => prev.map(o => {
      if (o.id === id) {
        return {
          ...o,
          status: 'IN_POLISHING',
          remarks: 'Ramesh marked: Batch issued to external karigar for polishing'
        };
      }
      return o;
    }));
    showToast(`Order ${id} marked: Issued to Karigar for polishing!`, 'info');
  };

  // Ramesh: Receive from Polishing
  const handleReceivePolishing = (id) => {
    setOrders(prev => prev.map(o => {
      if (o.id === id) {
        return {
          ...o,
          status: 'PENDING',
          remarks: 'Polishing batch received back & inspected. Ready for packaging.'
        };
      }
      return o;
    }));
    showToast(`Order ${id} received from polish and staged for packing!`, 'success');
  };

  // Ramesh: Partial Dispatch
  const handlePartialDispatch = (id, shippedQty, vehicleNo) => {
    setOrders(prev => prev.map(o => {
      if (o.id === id) {
        if (shippedQty >= o.qty) {
          return {
            ...o,
            status: 'DISPATCHED',
            remarks: `Fully dispatched via ${vehicleNo}`
          };
        } else {
          const remaining = o.qty - shippedQty;
          return {
            ...o,
            status: 'PARTIAL_DISPATCH',
            remarks: `Partially dispatched: ${shippedQty} ${o.unit} sent via ${vehicleNo}, balance ${remaining} ${o.unit} backordered`
          };
        }
      }
      return o;
    }));
    showToast(`Dispatch chalan confirmed for ${shippedQty} units! Driver chalan recorded.`, 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      
      {/* GLOBAL NAVBAR */}
      <Navbar currentRole={currentRole} onSelectRole={setCurrentRole} />

      {/* CONTEXT BANNER */}
      <RoleBanner currentRole={currentRole} />

      {/* TOAST NOTIFICATION POPUP */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <div className={`px-4 py-3 rounded-xl shadow-xl border text-xs font-bold flex items-center space-x-2.5 ${
            notification.type === 'success' 
              ? 'bg-slate-900 border-slate-800 text-white' 
              : 'bg-slate-800 border-slate-700 text-white'
          }`}>
            <Bell size={14} className="text-emerald-400" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* MAIN VIEW CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {currentRole === 'suresh' && (
          <SureshView
            orders={orders}
            onOverrideHold={handleOverrideHold}
            onAlertRamesh={handleAlertRamesh}
            onCallContact={handleCallContact}
          />
        )}

        {currentRole === 'kunal' && (
          <KunalView
            orders={orders}
            onAddOrder={handleAddOrder}
          />
        )}

        {currentRole === 'ramesh' && (
          <RameshView
            orders={orders}
            onSendToPolishing={handleSendToPolishing}
            onReceivePolishing={handleReceivePolishing}
            onPartialDispatch={handlePartialDispatch}
          />
        )}

        {currentRole === 'munshi' && (
          <MunshiView
            orders={orders}
          />
        )}

        {currentRole === 'audit' && (
          <DataAuditView />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-4 px-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center space-x-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-slate-800 font-bold">Vardhan Steelware Factory OS</span>
            <span>• Phase 1 Pre-Diwali MVP</span>
          </div>
          <div className="font-mono text-[11px] text-slate-500 text-center sm:text-right">
            Wantace Solutions Sprint • Jagadhri Utensil Cluster • 25 Seed Orders
          </div>
        </div>
      </footer>

    </div>
  );
}
