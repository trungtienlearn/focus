import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function LocaleLayout({ children, params }) {
    // Lấy locale từ params
    const { locale } = await params;

    // Kiểm tra xem locale có hợp lệ không
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    return (
         <NextIntlClientProvider>
            <div className="flex flex-col min-h-screen">
                <Header />
                {/* phần main chiếm không gian còn lại */}
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </NextIntlClientProvider>
    );
}
