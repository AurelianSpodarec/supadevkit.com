import type { Metadata } from "next";

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: "Tweet Generator | Tweet Crafter",
  description: "Generate tweets",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  );
}
