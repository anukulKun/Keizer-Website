import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Keizer",
  description: "Web Agency",
};

const grotesk = localfont({
  src:[{
    path:"../public/fonts/FOUNDERSGROTESK.ttf",
  },
],
variable: "--font-grotesk",
  
})

const neue = localfont({
  src:[{
    path:"../public/fonts/NeueMontreal-Regular.ttf",
  },
],
variable: "--font-neue",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${inter.className} ${grotesk.variable} ${neue.variable}`}>{children}</body>
    </html>
  );
}
