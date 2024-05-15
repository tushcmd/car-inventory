import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProviders from "@/components/providers/AppProviders";
import Navbar from '@/components/shared/Navbar';
import Footer from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Garage Inventory",
  description: "Nextjs Shadcnui Nodejs Express and MongoDB CRUD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </AppProviders>
      </body>
    </html>
  );
}
