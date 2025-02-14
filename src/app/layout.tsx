import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CRM Support Portal",
  description: "Support portal for managing CRM services and tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-[15px] xl:text-base`}>
        <div className="flex min-h-screen bg-[#1C2B4F]">
          <Sidebar className="fixed inset-y-0 left-0 z-50" />
          <div className="flex-1 flex flex-col pl-[240px]">
            <Header className="sticky top-0 z-40 shadow-sm" />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
