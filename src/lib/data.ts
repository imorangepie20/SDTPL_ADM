export type TeamMember = { name: string; email: string; role: string; avatar?: string };
export type Payment = {
  id: string; customer: string; email: string; amount: number;
  status: "success" | "processing" | "failed";
};
export type Notification = { id: string; title: string; description: string; time: string; read: boolean };

export const teamMembers: TeamMember[] = [
  { name: "Sofia Davis", email: "sofia@example.com", role: "Owner" },
  { name: "Jackson Lee", email: "jackson@example.com", role: "Member" },
  { name: "Isabella Nguyen", email: "isabella@example.com", role: "Member" },
];

export const latestPayments: Payment[] = [
  { id: "1", customer: "Olivia Martin", email: "olivia@example.com", amount: 1999, status: "success" },
  { id: "2", customer: "Jackson Lee", email: "jackson@example.com", amount: 39, status: "processing" },
  { id: "3", customer: "Isabella Nguyen", email: "isabella@example.com", amount: 299, status: "success" },
  { id: "4", customer: "William Kim", email: "will@example.com", amount: 99, status: "failed" },
  { id: "5", customer: "Sofia Davis", email: "sofia@example.com", amount: 39, status: "success" },
];

export const notifications: Notification[] = [
  { id: "1", title: "New subscriber", description: "You gained a new subscriber.", time: "2m ago", read: false },
  { id: "2", title: "Payment received", description: "$1,999 from Olivia Martin.", time: "1h ago", read: false },
  { id: "3", title: "Server update", description: "Deployment finished successfully.", time: "3h ago", read: true },
];
