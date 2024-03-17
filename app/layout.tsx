import { Work_Sans } from "next/font/google";
import "./globals.css";
import "@/styles/gruvbox-material.css";
import { ThemeProvider } from "next-themes";

const workSans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
