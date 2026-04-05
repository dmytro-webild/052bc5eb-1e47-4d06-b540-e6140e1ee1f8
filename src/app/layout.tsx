import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Unbounded } from "next/font/google";



export const metadata: Metadata = {
  title: 'ESTATE | Authorized Selection',
  description: 'An exclusive fashion archive by THE GRISHA. Access granted only to those who understand the vision.',
  openGraph: {
    "title": "ESTATE | Authorized Selection",
    "siteName": "ESTATE",
    "type": "website"
  },
};



const unbounded = Unbounded({
  variable: "--font-unbounded",  subsets: ["latin"],
  weight: ["900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${unbounded.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
