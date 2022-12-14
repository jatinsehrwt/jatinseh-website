import "./global.css";
import { Inter } from "@next/font/google";
import { AnalyticsWrapper } from "../components/analytics";

const inter = Inter({ variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  );
}
