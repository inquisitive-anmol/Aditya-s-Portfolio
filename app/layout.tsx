import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize as needed
});


export const metadata: Metadata = {
  title: "Aditya's Portfolio",
  description: "Modern & Minimalist Video Editor Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}
