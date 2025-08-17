// components/Modal.jsx
"use client";

import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 flex justify-center items-center z-[100]"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-gray-600 opacity-80"></div>
            <div
                className="relative mx-auto p-0 w-full max-w-md shadow-lg rounded-md"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end bg-gray-100 p-4 rounded-t-md">
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <X />
                    </button>
                </div>
                <div>{children}</div>
            </div>
        </div>
    );
}
