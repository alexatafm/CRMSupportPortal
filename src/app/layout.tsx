import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";
import { CreateTicketButton } from "@/components/ui/CreateTicketButton";

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
          <Sidebar className="fixed inset-y-0 left-0 z-30 sidebar" />
          <div className="flex-1 flex flex-col main-content">
            <Header className="fixed top-0 right-0 z-20" />
            <main className="flex-1 overflow-auto main-gradient mt-14">
              {children}
            </main>
          </div>
          <CreateTicketButton />
        </div>
      </body>
    </html>
  );
}
