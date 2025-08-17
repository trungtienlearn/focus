import Providers from "@/components/Providers";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "TrungTienLearn - Học tập và phát triển bản thân",
    description:
        "TrungTienLearn - Nơi cung cấp kiến thức và kỹ năng cho sự nghiệp của bạn",
};

export default async function RootLayout({ children, params }) {
    const locale = routing.locales.includes(params?.locale) ? params.locale : "vi";
    return (
        <html lang={locale}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
