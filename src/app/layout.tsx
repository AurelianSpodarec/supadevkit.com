import type { Metadata } from "next";

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: "Supatoolkit",
  description: "Developer super toolkit to help with tedious CSS, JavaScript etc tasksOne toolkit for all.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  );
}
