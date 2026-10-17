export const INITIAL_ORDERS = [
  { id: "VS-26-001", date: "01-09-26", party: "Gupta Traders Ambala", city: "Ambala, Haryana", item: "Kadai No.10", qty: 200, unit: "pcs", rate: 185, status: "DISPATCHED", remarks: "Dispatched on time via Tempo" },
  { id: "VS-26-002", date: "01-09-26", party: "Sharma Bartan Bhandar Karnal", city: "Karnal, Haryana", item: "Patila set 5pc", qty: 40, unit: "set", rate: 920, status: "DISPATCHED", remarks: "Dispatched before payment hold" },
  { id: "VS-26-003", date: "01-09-26", party: "Gupta Traders Ambala", city: "Ambala, Haryana", item: "Kadai No.10", qty: 200, unit: "pcs", rate: 185, status: "PENDING", remarks: "⚠️ DUPLICATE CONFUSION: repeat msg?" },
  { id: "VS-26-004", date: "02-09-26", party: "New Delhi Steel House", city: "Chawri Bazar, Delhi", item: "Thali 12 inch", qty: 50, unit: "dozen", rate: 610, status: "DISPATCHED", remarks: "Chawri Bazar bulk shipment" },
  { id: "VS-26-005", date: "02-09-26", party: "Jain Crockery Panipat", city: "Panipat, Haryana", item: "Kadai No.10", qty: 150, unit: "pcs", rate: 192, status: "PENDING", remarks: "Initial inquiry" },
  { id: "VS-26-006", date: "02-09-26", party: "Online - Kunal (Amazon)", city: "Delhi NCR Hub", item: "Dinner set 24pc", qty: 12, unit: "set", rate: 2350, status: "DISPATCHED", remarks: "Amazon marketplace order" },
  { id: "VS-26-007", date: "03-09-26", party: "Sharma Bartan Bhandar Karnal", city: "Karnal, Haryana", item: "Gilas 300ml", qty: 30, unit: "dozen", rate: 260, status: "HOLD_PAYMENT", remarks: "⛔ BLOCKED: ₹1.8L old dues (Papa told to hold)" },
  { id: "VS-26-008", date: "03-09-26", party: "Bansal & Sons Rohtak", city: "Rohtak, Haryana", item: "Tope No.6", qty: 120, unit: "pcs", rate: 340, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: Karigar Pappu ke paas atka hai" },
  { id: "VS-26-009", date: "03-09-26", party: "[GHOST DISPATCH - UNKNOWN]", city: "Unknown Destination", item: "Thali 12 inch", qty: 20, unit: "dozen", rate: 600, status: "DISPATCHED", remarks: "❌ DATA DEFECT: Party name was blank in Kunal sheet!" },
  { id: "VS-26-010", date: "04-09-26", party: "Gupta Traders Ambala", city: "Ambala, Haryana", item: "Patila set 5pc", qty: 25, unit: "set", rate: 950, status: "DISPATCHED", remarks: "Dispatched OK" },
  { id: "VS-26-011", date: "04-09-26", party: "Jain Crockery Panipat", city: "Panipat, Haryana", item: "Kadai No.10", qty: 150, unit: "pcs", rate: 192, status: "PENDING", remarks: "⚠️ RE-ENTRY: Customer sent again on WhatsApp" },
  { id: "VS-26-012", date: "04-09-26", party: "Mehra Kitchenware Jalandhar", city: "Jalandhar, Punjab", item: "Kadai No.10", qty: 300, unit: "pcs", rate: 180, status: "PARTIAL_DISPATCH", remarks: "180 gaye baaki 120 polish ke baad" },
  { id: "VS-26-013", date: "04-09-26", party: "New Delhi Steel House", city: "Chawri Bazar, Delhi", item: "Bhagona 8L", qty: 60, unit: "pcs", rate: 410, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: Polishing in progress (Karigar Shyam)" },
  { id: "VS-26-014", date: "05-09-26", party: "Online - Kunal (Flipkart)", city: "Gurugram Hub", item: "Kadai No.10", qty: 35, unit: "pcs", rate: 240, status: "DISPATCHED", remarks: "Flipkart D2C shipment" },
  { id: "VS-26-015", date: "05-09-26", party: "Bansal & Sons Rohtak", city: "Rohtak, Haryana", item: "Tope No.6", qty: 120, unit: "pcs", rate: 340, status: "IN_POLISHING", remarks: "⚠️ Polishing se aana baaki" },
  { id: "VS-26-016", date: "05-09-26", party: "Sharma Bartan Bhandar Karnal", city: "Karnal, Haryana", item: "Gilas 300ml", qty: -6, unit: "dozen", rate: 260, status: "RETURN", remarks: "⚠️ AD-HOC RETURN: Dent damaged boxes returned" },
  { id: "VS-26-017", date: "05-09-26", party: "Verma Utensils Sonipat", city: "Sonipat, Haryana", item: "Thali 12 inch", qty: 40, unit: "dozen", rate: 605, status: "DISPATCHED", remarks: "Dispatched via Tempo" },
  { id: "VS-26-018", date: "06-09-26", party: "Mehra Kitchenware Jalandhar", city: "Jalandhar, Punjab", item: "Kadai No.10", qty: 120, unit: "pcs", rate: 180, status: "DISPATCHED", remarks: "baaki wala balance fulfilled" },
  { id: "VS-26-019", date: "06-09-26", party: "Gupta Traders Ambala", city: "Ambala, Haryana", item: "Bhagona 8 ltr", qty: 40, unit: "pcs", rate: 400, status: "IN_POLISHING", remarks: "⚠️ ATKA MAAL: In Polish" },
  { id: "VS-26-020", date: "06-09-26", party: "Jain Crockery Panipat", city: "Panipat, Haryana", item: "Gilas 300 ml", qty: 25, unit: "dozen", rate: 255, status: "DISPATCHED", remarks: "Dispatched OK" },
  { id: "VS-26-021", date: "06-09-26", party: "Verma Utensils Sonipat", city: "Sonipat, Haryana", item: "Kadhai 10 no.", qty: 180, unit: "kg", rate: 0, status: "PENDING", remarks: "❌ UNIT DEFECT: Entered in 'kg' with blank rate!" },
  { id: "VS-26-022", date: "07-09-26", party: "New Delhi Steel House", city: "Chawri Bazar, Delhi", item: "Thali 12 inch", qty: 50, unit: "dozen", rate: 610, status: "DISPATCHED", remarks: "Dispatched 600 thalis" },
  { id: "VS-26-023", date: "07-09-26", party: "Online - Kunal (Amazon)", city: "Noida Hub", item: "Patila set 5pc", qty: 8, unit: "set", rate: 1199, status: "DISPATCHED", remarks: "Amazon Diwali gift pack" },
  { id: "VS-26-024", date: "07-09-26", party: "Sharma Bartan Bhandar Karnal", city: "Karnal, Haryana", item: "Patila set 5pc", qty: 20, unit: "set", rate: 920, status: "HOLD_PAYMENT", remarks: "⛔ BLOCKED: Dues ₹1.8L still outstanding" },
  { id: "VS-26-025", date: "07-09-26", party: "Bansal & Sons Rohtak", city: "Rohtak, Haryana", item: "Tope No.6", qty: 60, unit: "pcs", rate: 340, status: "PENDING", remarks: "naya order logged" }
];

export const CUSTOMER_MASTER = [
  { name: "Gupta Traders Ambala", city: "Ambala, Haryana", phone: "+91 98120 44521", dues: 45000, creditLimit: 150000, isBlocked: false },
  { name: "Sharma Bartan Bhandar Karnal", city: "Karnal, Haryana", phone: "+91 94160 88912", dues: 180000, creditLimit: 100000, isBlocked: true },
  { name: "New Delhi Steel House", city: "Chawri Bazar, Delhi", phone: "+91 98111 23456", dues: 85000, creditLimit: 250000, isBlocked: false },
  { name: "Jain Crockery Panipat", city: "Panipat, Haryana", phone: "+91 98960 11223", dues: 20000, creditLimit: 150000, isBlocked: false },
  { name: "Bansal & Sons Rohtak", city: "Rohtak, Haryana", phone: "+91 94165 33445", dues: 62000, creditLimit: 200000, isBlocked: false },
  { name: "Mehra Kitchenware Jalandhar", city: "Jalandhar, Punjab", phone: "+91 98140 77889", dues: 38000, creditLimit: 200000, isBlocked: false },
  { name: "Verma Utensils Sonipat", city: "Sonipat, Haryana", phone: "+91 94660 55667", dues: 15000, creditLimit: 150000, isBlocked: false },
  { name: "Online - Amazon", city: "Delhi NCR Hub", phone: "Marketplace Portal", dues: 0, creditLimit: 500000, isBlocked: false },
  { name: "Online - Flipkart", city: "Gurugram Hub", phone: "Marketplace Portal", dues: 0, creditLimit: 500000, isBlocked: false }
];

export const POLISHING_BATCHES = [
  { batchId: "POL-881", karigar: "Karigar Pappu", phone: "+91 98721 00112", item: "Tope No.6", sentDate: "03-09-26", returnDate: "06-09-26", weightSentKg: 420.0, piecesReceived: 1180, actualLossKg: 6.0, allowableLossKg: 4.2, status: "SHORTAGE_FLAGGED", deductionAmount: 1680 },
  { batchId: "POL-882", karigar: "Karigar Shyam", phone: "+91 98962 33411", item: "Bhagona 8L", sentDate: "04-09-26", returnDate: "07-09-26", weightSentKg: 250.0, piecesReceived: 410, actualLossKg: 1.2, allowableLossKg: 2.5, status: "RECONCILED_OK", deductionAmount: 0 }
];
