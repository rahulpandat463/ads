import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suvrin | Become UAE E-Invoicing Compliant in 2026",
  description: "Suvrin adds a compliance layer that plugs straight into the ERP you already run – so nothing changes for your team, and you go live fast, without the cost of a new system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#070d1f] text-slate-100 antialiased selection:bg-[#2140A6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
