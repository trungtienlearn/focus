// components/Header.jsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
    const t = useTranslations();
    const locale = useLocale();
    const [modalType, setModalType] = useState(null);
    const { data: session, status } = useSession();

    const openModal = (type) => setModalType(type);
    const closeModal = () => setModalType(null);

    const otherLocale = locale === "en" ? "vi" : "en";

    return (
        <>
            <header className="bg-white sticky top-0 z-50 shadow">
                <nav className="flex items-center justify-around p-4 container mx-auto">
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/"
                            className="text-2xl font-black text-sky-900"
                        >
                            TrungTienLearn
                        </Link>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/" className="hover:text-blue-600">
                                    {t("Header.home")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-blue-600"
                                >
                                    {t("Header.blog")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/course"
                                    className="hover:text-blue-600"
                                >
                                    {t("Header.courses")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/portfolio"
                                    className="hover:text-blue-600"
                                >
                                    {t("Header.portfolio")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {status === "authenticated" ? (
                            <div className="flex items-center space-x-4">
                                <span className="text-gray-700">
                                    Chào, {session.user.name}
                                </span>
                                <button
                                    onClick={() => signOut()}
                                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                                >
                                    {t("Header.logout")}
                                </button>
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={() => openModal("register")}
                                    className="bg-transparent border-2 border-solid text-sky-900 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white mr-2"
                                >
                                    {t("Header.register")}
                                </button>
                                <button
                                    onClick={() => openModal("login")}
                                    className="bg-blue-500 text-white px-4 py-2 border-2 border-blue-500 rounded-full hover:bg-blue-600 hover:border-blue-600"
                                >
                                    {t("Header.login")}
                                </button>
                                <Link
                                    href={`/${otherLocale}`}
                                    className="border border-gray-300 ms-4 px-3 py-1 rounded hover:bg-gray-100"
                                >
                                    {otherLocale.toUpperCase()}
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </header>

            <Modal isOpen={modalType === "register"} onClose={closeModal}>
                <RegisterForm
                    onSwitchToLogin={() => openModal("login")}
                    onClose={closeModal}
                />
            </Modal>

            <Modal isOpen={modalType === "login"} onClose={closeModal}>
                <LoginForm
                    onSwitchToRegister={() => openModal("register")}
                    onClose={closeModal}
                />
            </Modal>
        </>
    );
}
