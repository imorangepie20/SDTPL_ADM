// ─── Types ────────────────────────────────────────────────────────────────────

export type CurrencyBalance = {
  code: string;
  label: string;
  amount: string;
};

export type ExchangeRatePoint = {
  time: string;
  rate: number;
};

export type TransactionStatus = "Completed" | "Pending" | "Failed";

export type Transaction = {
  id: string;
  date: string;
  description: string;
  status: TransactionStatus;
  amount: string;
  positive: boolean;
};

// ─── Balances ─────────────────────────────────────────────────────────────────

export const totalBalance = "1,740.30 USD";

export const currencyBalances: CurrencyBalance[] = [
  { code: "USD", label: "US Dollar",    amount: "1,200.00" },
  { code: "EUR", label: "Euro",         amount: "380.50"   },
  { code: "GBP", label: "British Pound", amount: "159.80"  },
];

// ─── Exchange Rates (EUR/USD, ~12 data points, 7D view default) ───────────────

export const exchangeRateData: ExchangeRatePoint[] = [
  { time: "Mon",  rate: 1.074 },
  { time: "Tue",  rate: 1.078 },
  { time: "Wed",  rate: 1.071 },
  { time: "Thu",  rate: 1.083 },
  { time: "Fri",  rate: 1.086 },
  { time: "Sat",  rate: 1.080 },
  { time: "Sun",  rate: 1.084 },
  { time: "Mon2", rate: 1.090 },
  { time: "Tue2", rate: 1.088 },
  { time: "Wed2", rate: 1.092 },
  { time: "Thu2", rate: 1.095 },
  { time: "Fri2", rate: 1.091 },
];

// ─── Transactions ─────────────────────────────────────────────────────────────

export const transactions: Transaction[] = [
  { id: "#T-1001", date: "Aug 4, 2025",  description: "Deposit",  status: "Completed", amount: "+5,651.75 USD", positive: true  },
  { id: "#T-1002", date: "Aug 6, 2025",  description: "Payment",  status: "Completed", amount: "-1,200.00 USD", positive: false },
  { id: "#T-1003", date: "Aug 8, 2025",  description: "Withdraw", status: "Pending",   amount: "-850.00 USD",   positive: false },
  { id: "#T-1004", date: "Aug 11, 2025", description: "Deposit",  status: "Completed", amount: "+2,400.00 USD", positive: true  },
  { id: "#T-1005", date: "Aug 14, 2025", description: "Payment",  status: "Failed",    amount: "-3,420.00 USD", positive: false },
  { id: "#T-1006", date: "Aug 17, 2025", description: "Withdraw", status: "Pending",   amount: "-620.50 USD",   positive: false },
  { id: "#T-1007", date: "Aug 20, 2025", description: "Deposit",  status: "Completed", amount: "+1,875.25 USD", positive: true  },
];
