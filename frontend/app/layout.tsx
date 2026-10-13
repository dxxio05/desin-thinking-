import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"],
  preload: false,
});

const description =
  "데이터 분석과 MIS에 관심이 많은 서울시립대학교 경영학부 임재정의 Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "임재정 | Portfolio",
  description,
  openGraph: {
    title: "임재정 | Portfolio",
    description,
    type: "website",
    locale: "ko_KR",
    images: ["/profile.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${dmSans.variable} ${notoSansKr.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
