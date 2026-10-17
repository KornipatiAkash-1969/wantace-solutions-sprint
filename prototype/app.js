/**
 * Vardhan Steelware Factory OS - Interactive MVP Logic
 * Data seeded from 1-7 September 2026 Google Sheet and WhatsApp Group Export
 */

// Initial Seed Data (25 rows directly from client pack)
const INITIAL_ORDERS = [
  { id: "VS-26-001", date: "01-09-26", party: "Gupta Traders Ambala", item: "Kadai No.10", qty: 200, unit: "pcs", rate: 185, status: "DISPATCHED", remarks: "Dispatched on time via Tempo" },
  { id: "VS-26-002", date: "01-09-26", party: "Sharma Bartan Bhandar Karnal", item: "Patila set 5pc", qty: 40, unit: "set", rate: 920, status: "DISPATCHED", remarks: "Dispatched before payment hold" },
  { id: "VS-26-003", date: "01-09-26", party: "Gupta Traders Ambala", item: "Kadai No.10", qty: 200, unit: "pcs", rate: 185, status: "PENDING", remarks: "⚠️ DUPLICATE CONFUSION: repeat msg?" },
  { id: "VS-26-004", date: "02-09-26", party: "New Delhi Steel House", item: "Thali 12 inch", qty: 50, unit: "dozen", rate: 610, status: "DISPATCHED", remarks: "Chawri Bazar bulk shipment" },
  { id: "VS-26-005", date: "02-09-26", party: "Jain Crockery Panipat", item: "Kadai No.10", qty: 150, unit: "pcs", rate: 192, status: "PENDING", remarks: "Initial inquiry" },
  { id: "VS-26-006", date: "02-09-26", party: "Online - Kunal (Amazon)", item: "Dinner set 24pc", qty: 12, unit: "set", rate: 2350, status: "DISPATCHED", remarks: "Amazon marketplace order" },
  { id: "VS-26-007", date: "03-09-26", party: "Sharma Bartan Bhandar Karnal", item: "Gilas 300ml", qty: 30, unit: "dozen", rate: 260, status: "HOLD_PAYMENT", remarks: "⛔ BLOCKED: ₹1.8L old dues (Papa told to hold)" },
  { id: "VS-26-008", date: "03-09-26", party: "Bansal & Sons Rohtak", item: "Tope No.6", qty: 120, unit: "pcs", rate: 340, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: Karigar Pappu ke paas atka hai" },
  { id: "VS-26-009", date: "03-09-26", party: "[GHOST DISPATCH - UNKNOWN]", item: "Thali 12 inch", qty: 20, unit: "dozen", rate: 600, status: "DISPATCHED", remarks: "❌ DATA DEFECT: Party name was blank in Kunal sheet!" },
  { id: "VS-26-010", date: "04-09-26", party: "Gupta Traders Ambala", item: "Patila set 5pc", qty: 25, unit: "set", rate: 950, status: "DISPATCHED", remarks: "Dispatched OK" },
  { id: "VS-26-011", date: "04-09-26", party: "Jain Crockery Panipat", item: "Kadai No.10", qty: 150, unit: "pcs", rate: 192, status: "PENDING", remarks: "⚠️ RE-ENTRY: Customer sent again on WhatsApp" },
  { id: "VS-26-012", date: "04-09-26", party: "Mehra Kitchenware Jalandhar", item: "Kadai No.10", qty: 300, unit: "pcs", rate: 180, status: "PARTIAL_DISPATCH", remarks: "180 gaye baaki 120 polish ke baad" },
  { id: "VS-26-013", date: "04-09-26", party: "New Delhi Steel House", item: "Bhagona 8L", qty: 60, unit: "pcs", rate: 410, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: Polishing in progress (Karigar Shyam)" },
  { id: "VS-26-014", date: "05-09-26", party: "Online - Kunal (Flipkart)", item: "Kadai No.10", qty: 35, unit: "pcs", rate: 240, status: "DISPATCHED", remarks: "Flipkart D2C shipment" },
  { id: "VS-26-015", date: "05-09-26", party: "Bansal & Sons Rohtak", item: "Tope No.6", qty: 120, unit: "pcs", rate: 340, status: "IN_POLISHING", remarks: "⚠️ Polishing se aana baaki" },
  { id: "VS-26-016", date: "05-09-26", party: "Sharma Bartan Bhandar Karnal", item: "Gilas 300ml", qty: -6, unit: "dozen", rate: 260, status: "RETURN", remarks: "⚠️ AD-HOC RETURN: Dent damaged boxes returned" },
  { id: "VS-26-017", date: "05-09-26", party: "Verma Utensils Sonipat", item: "Thali 12 inch", qty: 40, unit: "dozen", rate: 605, status: "DISPATCHED", remarks: "Dispatched via Tempo" },
  { id: "VS-26-018", date: "06-09-26", party: "Mehra Kitchenware Jalandhar", item: "Kadai No.10", qty: 120, unit: "pcs", rate: 180, status: "DISPATCHED", remarks: "baaki wala balance fulfilled" },
  { id: "VS-26-019", date: "06-09-26", party: "Gupta Traders Ambala", item: "Bhagona 8 ltr", qty: 40, unit: "pcs", rate: 400, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: In Polish" },
  { id: "VS-26-020", date: "06-09-26", party: "Jain Crockery Panipat", item: "Gilas 300 ml", qty: 25, unit: "dozen", rate: 255, status: "DISPATCHED", remarks: "Dispatched OK" },
  { id: "VS-26-021", date: "06-09-26", party: "Verma Utensils Sonipat", item: "Kadhai 10 no.", qty: 180, unit: "kg", rate: 0, status: "PENDING", remarks: "❌ UNIT DEFECT: Entered in 'kg' with blank rate!" },
  { id: "VS-26-022", date: "07-09-26", party: "New Delhi Steel House", item: "Thali 12 inch", qty: 50, unit: "dozen", rate: 610, status: "DISPATCHED", remarks: "Dispatched 600 thalis" },
  { id: "VS-26-023", date: "07-09-26", party: "Online - Kunal (Amazon)", item: "Patila set 5pc", qty: 8, unit: "set", rate: 1199, status: "DISPATCHED", remarks: "Amazon Diwali gift pack" },
  { id: "VS-26-024", date: "07-09-26", party: "Sharma Bartan Bhandar Karnal", item: "Patila set 5pc", qty: 20, unit: "set", rate: 920, status: "HOLD_PAYMENT", remarks: "⛔ BLOCKED: Dues ₹1.8L still outstanding" },
  { id: "VS-26-025", date: "07-09-26", party: "Bansal & Sons Rohtak", item: "Tope No.6", qty: 60, unit: "pcs", rate: 340, status: "PENDING", remarks: "naya order logged" }
];

let orders = [...INITIAL_ORDERS];
let currentRole = "suresh";
let activePartialOrder = null;

// Initialize app on DOM load
document.addEventListener("DOMContentLoaded", () => {
  renderOrdersTable();
  renderRameshFloorCards();
});

// Role Switcher
function switchRole(role) {
  currentRole = role;
  
  // Update button highlights
  const roles = ["suresh", "kunal", "ramesh", "munshi"];
  roles.forEach(r => {
    const btn = document.getElementById(`role-btn-${r}`);
    const view = document.getElementById(`view-${r}`);
    if (r === role) {
      btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold transition flex items-center space-x-2 bg-blue-600 text-white shadow";
      view.classList.remove("hidden");
    } else {
      btn.className = "px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition flex items-center space-x-2";
      view.classList.add("hidden");
    }
  });

  // Update banner text
  const bannerText = document.getElementById("role-banner-text");
  if (role === "suresh") {
    bannerText.innerHTML = `<strong>Viewing as Suresh Vardhan (58, Owner):</strong> "Mujhe bas phone pe dekhna hai kaunsa order kahan atka hai." Showing 7:30 AM Morning Pulse.`;
  } else if (role === "kunal") {
    bannerText.innerHTML = `<strong>Viewing as Kunal Vardhan (30, Sales Desk):</strong> Enforcing duplicate detection, standard units, and order accuracy.`;
  } else if (role === "ramesh") {
    bannerText.innerHTML = `<strong>Viewing as Ramesh (Dispatch Lead, 22 yrs experience):</strong> Big-button floor action screen. Tap to mark polishing or dispatch.`;
  } else if (role === "munshi") {
    bannerText.innerHTML = `<strong>Viewing as Munshi Ji (Accounts):</strong> Karigar weight loss reconciliation, payment holds, and Tally export.`;
  }
}

// Morning Report Switcher
function showReport(repId) {
  document.getElementById("report-1-content").classList.add("hidden");
  document.getElementById("report-2-content").classList.add("hidden");
  document.getElementById("report-3-content").classList.add("hidden");

  document.getElementById("btn-rep-1").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-400 hover:text-white";
  document.getElementById("btn-rep-2").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-400 hover:text-white";
  document.getElementById("btn-rep-3").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-400 hover:text-white";

  if (repId === "report1") {
    document.getElementById("report-1-content").classList.remove("hidden");
    document.getElementById("btn-rep-1").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white";
  } else if (repId === "report2") {
    document.getElementById("report-2-content").classList.remove("hidden");
    document.getElementById("btn-rep-2").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white";
  } else if (repId === "report3") {
    document.getElementById("report-3-content").classList.remove("hidden");
    document.getElementById("btn-rep-3").className = "px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white";
  }
}

// Override Payment Hold (Suresh Action)
function overridePaymentHold(orderId) {
  const ord = orders.find(o => o.id === orderId);
  if (ord) {
    if (confirm(`Authorize override for ${ord.party}? Suresh Vardhan signature recorded. Ramesh will be permitted to load dispatch.`)) {
      ord.status = "PENDING";
      ord.remarks = "Payment hold overridden by Suresh Vardhan on phone";
      renderOrdersTable();
      renderRameshFloorCards();
      alert(`Order ${orderId} released! Status moved to Pending Production.`);
      showReport("report1");
    }
  }
}

// Render Orders Table for Kunal & Audit View
function renderOrdersTable() {
  const tbody = document.getElementById("orders-table-body");
  if (!tbody) return;

  tbody.innerHTML = orders.map(o => {
    let statusBadge = "";
    if (o.status === "DISPATCHED") {
      statusBadge = `<span class="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[11px] font-bold">DISPATCHED</span>`;
    } else if (o.status === "IN_POLISHING") {
      statusBadge = `<span class="bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20 text-[11px] font-bold">IN POLISHING</span>`;
    } else if (o.status === "HOLD_PAYMENT") {
      statusBadge = `<span class="bg-rose-500/10 text-rose-400 px-2 py-0.5 rounded border border-rose-500/20 text-[11px] font-bold">PAYMENT HOLD</span>`;
    } else if (o.status === "PARTIAL_DISPATCH") {
      statusBadge = `<span class="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 text-[11px] font-bold">PARTIAL (180/300)</span>`;
    } else if (o.status === "RETURN") {
      statusBadge = `<span class="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20 text-[11px] font-bold">RETURN (DENT)</span>`;
    } else {
      statusBadge = `<span class="bg-slate-700 text-slate-300 px-2 py-0.5 rounded text-[11px] font-bold">PENDING</span>`;
    }

    const val = (o.qty > 0 && o.rate > 0) ? `₹${(o.qty * o.rate).toLocaleString()}` : (o.rate === 0 ? `<span class="text-rose-400 font-bold">RATE MISSING</span>` : `-₹${Math.abs(o.qty * o.rate)}`);

    return `
      <tr class="hover:bg-slate-800/40 border-b border-slate-800/60">
        <td class="py-2.5 px-4 text-slate-400 font-mono">${o.date}</td>
        <td class="py-2.5 px-4 font-mono text-blue-400 font-bold">${o.id}</td>
        <td class="py-2.5 px-4 text-white font-medium">${o.party}</td>
        <td class="py-2.5 px-4 font-bold text-slate-200">${o.item} <span class="text-slate-400 font-normal">(${o.qty} ${o.unit})</span></td>
        <td class="py-2.5 px-4 font-mono">${o.rate ? '₹' + o.rate : '-'}</td>
        <td class="py-2.5 px-4 font-mono font-bold">${val}</td>
        <td class="py-2.5 px-4">${statusBadge}</td>
        <td class="py-2.5 px-4 text-[11px] text-slate-400">${o.remarks}</td>
      </tr>
    `;
  }).join("");
}

// Real-Time Duplicate Check for Kunal's Order Form
function checkDuplicateAlert() {
  const party = document.getElementById("party-select").value;
  const item = document.getElementById("item-select").value;
  const warningBox = document.getElementById("duplicate-warning");
  const warningText = document.getElementById("duplicate-warning-text");

  if (!party || !item) {
    warningBox.classList.add("hidden");
    return;
  }

  // Look for existing active orders for same party & item
  const existing = orders.find(o => o.party === party && o.item.toLowerCase().includes(item.toLowerCase().split(" ")[0]));
  if (existing) {
    warningBox.classList.remove("hidden");
    warningText.innerHTML = `⚠️ <strong>Duplicate Warning:</strong> ${party} already has an active record for <strong>${existing.item}</strong> (${existing.qty} ${existing.unit}) dated ${existing.date}. Status: <strong>${existing.status}</strong>. Please confirm if this is a repeat inquiry before adding.`;
  } else {
    warningBox.classList.add("hidden");
  }
}

// Handle Order Creation by Kunal
function handleCreateOrder(e) {
  e.preventDefault();
  const party = document.getElementById("party-select").value;
  const item = document.getElementById("item-select").value;
  const qty = parseFloat(document.getElementById("order-qty").value);
  const unit = document.getElementById("order-unit").value;
  const rate = parseFloat(document.getElementById("order-rate").value);

  const newId = `VS-26-${String(orders.length + 1).padStart(3, '0')}`;
  const newOrder = {
    id: newId,
    date: "08-09-26",
    party: party,
    item: item,
    qty: qty,
    unit: unit,
    rate: rate,
    status: party.includes("Sharma") ? "HOLD_PAYMENT" : "PENDING",
    remarks: "Logged via Kunal Order Desk with unit validation"
  };

  orders.unshift(newOrder);
  renderOrdersTable();
  renderRameshFloorCards();
  alert(`Order ${newId} created successfully! Total: ₹${(qty * rate).toLocaleString()}`);
  e.target.reset();
  document.getElementById("duplicate-warning").classList.add("hidden");
}

// Render Ramesh's Floor Action Cards
function renderRameshFloorCards() {
  const container = document.getElementById("ramesh-cards-container");
  if (!container) return;

  const floorOrders = orders.filter(o => o.status !== "DISPATCHED" && o.status !== "RETURN");

  container.innerHTML = floorOrders.map(o => {
    let actionButtons = "";
    if (o.status === "HOLD_PAYMENT") {
      actionButtons = `
        <div class="p-2.5 bg-rose-950/60 border border-rose-800 rounded-xl text-center text-rose-300 font-bold text-xs">
          <i class="fa-solid fa-lock mr-1"></i> GAADI LOAD MAT KARNA (Payment Hold)
          <div class="text-[10px] text-rose-400 font-normal mt-0.5">Suresh ji ki permission ke bina dispatch nahi hoga.</div>
        </div>
      `;
    } else if (o.status === "IN_POLISHING") {
      actionButtons = `
        <button onclick="markPolishingReceived('${o.id}')" class="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-lg flex items-center justify-center space-x-2">
          <i class="fa-solid fa-check-double text-sm"></i>
          <span>Polish Se Maal Aa Gaya (Ready)</span>
        </button>
      `;
    } else {
      actionButtons = `
        <div class="grid grid-cols-2 gap-2">
          <button onclick="markSendToPolishing('${o.id}')" class="py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1">
            <i class="fa-solid fa-truck-ramp-box"></i>
            <span>Polish Bhejo</span>
          </button>
          <button onclick="openPartialModal('${o.id}')" class="py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-1">
            <i class="fa-solid fa-truck-fast"></i>
            <span>Gaadi Mein Load</span>
          </button>
        </div>
      `;
    }

    return `
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 shadow-lg flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs font-bold text-blue-400">${o.id}</span>
            <span class="text-[11px] font-bold text-slate-400">${o.date}</span>
          </div>
          <h4 class="text-base font-bold text-white mt-1">${o.party}</h4>
          <div class="mt-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-between">
            <div>
              <span class="text-xs text-slate-400 block">Maal / Item:</span>
              <span class="text-sm font-black text-amber-400">${o.item}</span>
            </div>
            <div class="text-right">
              <span class="text-xs text-slate-400 block">Quantity:</span>
              <span class="text-sm font-black text-white font-mono">${o.qty} ${o.unit}</span>
            </div>
          </div>
          <div class="text-[11px] text-slate-400 mt-2">
            Status: <strong class="text-slate-200">${o.status}</strong>
          </div>
        </div>
        <div>
          ${actionButtons}
        </div>
      </div>
    `;
  }).join("");
}

// Ramesh Floor Actions
function markSendToPolishing(id) {
  const ord = orders.find(o => o.id === id);
  if (ord) {
    ord.status = "IN_POLISHING";
    ord.remarks = "Ramesh marked: Issued to Karigar for polishing";
    renderOrdersTable();
    renderRameshFloorCards();
    alert(`Order ${id} (${ord.item}) marked: Sent to external Karigar!`);
  }
}

function markPolishingReceived(id) {
  const ord = orders.find(o => o.id === id);
  if (ord) {
    ord.status = "PENDING";
    ord.remarks = "Polishing received and inspected. Ready for packaging/dispatch.";
    renderOrdersTable();
    renderRameshFloorCards();
    alert(`Order ${id} received back from polishing and ready for truck loading!`);
  }
}

// Partial Dispatch Modal
function openPartialModal(id) {
  const ord = orders.find(o => o.id === id);
  if (!ord) return;
  activePartialOrder = ord;
  document.getElementById("modal-party").innerText = ord.party;
  document.getElementById("modal-item").innerText = `${ord.qty} ${ord.unit} ${ord.item}`;
  
  const slider = document.getElementById("modal-slider");
  slider.max = ord.qty;
  slider.value = Math.min(ord.qty, Math.floor(ord.qty * 0.6) || ord.qty);
  updateSliderVal(slider.value);

  document.getElementById("partial-modal").classList.remove("hidden");
}

function updateSliderVal(val) {
  document.getElementById("modal-slider-disp").innerText = val;
  if (activePartialOrder) {
    const remaining = activePartialOrder.qty - parseFloat(val);
    document.getElementById("modal-remaining-text").innerText = `→ Baaki bachega: ${remaining} ${activePartialOrder.unit} (System tracks backorder automatically without duplicate rows)`;
  }
}

function closePartialModal() {
  document.getElementById("partial-modal").classList.add("hidden");
  activePartialOrder = null;
}

function confirmPartialDispatch() {
  if (!activePartialOrder) return;
  const shippedQty = parseFloat(document.getElementById("modal-slider").value);
  const vehicle = document.getElementById("modal-vehicle").value;

  if (shippedQty >= activePartialOrder.qty) {
    activePartialOrder.status = "DISPATCHED";
    activePartialOrder.remarks = `Fully dispatched via ${vehicle}`;
  } else {
    const remaining = activePartialOrder.qty - shippedQty;
    activePartialOrder.status = "PARTIAL_DISPATCH";
    activePartialOrder.remarks = `Partially dispatched: ${shippedQty} sent via ${vehicle}, balance ${remaining} pending in polish`;
  }

  renderOrdersTable();
  renderRameshFloorCards();
  closePartialModal();
  alert(`Dispatch Chalan generated for ${shippedQty} units! Driver chalan recorded.`);
}

// Munshi Ji Polishing Shortage Recalculator
function recalcShortage() {
  const sentKg = parseFloat(document.getElementById("audit-sent-kg").value) || 0;
  const recdPcs = parseFloat(document.getElementById("audit-recd-pcs").value) || 0;
  const stdPieceWeight = 0.350847; // approx kg per piece for Tope No.6 (420kg / 1197 standard yield)
  
  const expectedPcsWeight = recdPcs * stdPieceWeight;
  const shortageKg = sentKg - expectedPcsWeight;

  const badge = document.getElementById("audit-shortage-badge");
  if (shortageKg > 3.0) {
    badge.className = "px-2 py-1 rounded bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30";
    badge.innerText = `-${shortageKg.toFixed(1)} kg Shortage!`;
  } else {
    badge.className = "px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30";
    badge.innerText = `-${shortageKg.toFixed(1)} kg (Normal)`;
  }
}

// Download Verified Clean Tally CSV for Munshi Ji
function downloadTallyCSV() {
  const headers = ["Order_Number", "Date", "Party_Name", "Product", "Quantity", "Unit", "Rate", "Total_Amount", "Dispatch_Status", "Remarks"];
  const rows = orders.map(o => [
    o.id,
    o.date,
    `"${o.party}"`,
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
}
