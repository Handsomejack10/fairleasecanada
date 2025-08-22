export const metadata = {
  title: "FairLeaseCanada – Freehold Lease Reviews & Valuations",
  description:
    "Independent Canadian support for freehold lease owners: reviews, valuations, selling, and negotiation.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800">{children}</body>
    </html>
  );
}
