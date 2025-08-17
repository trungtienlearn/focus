"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import Link from "next/link";
import { Undo2 } from "lucide-react";

const Tiptap = () => {
    const [content, setContent] = useState("<p>Hello World! 🌎️</p>");
    const editor = useEditor({
        extensions: [StarterKit],
        content: "<p>Hello World! 🌎️</p>",
        // Không render ngay lập tức trên server để tránh lỗi SSR
        immediatelyRender: false,
    });

    if (!editor) return null;

    return (
        <div>
            {/* Thanh công cụ */}
            <div className="flex mb-4 px-2">
                <Link href="/blog" className="px-2 border-1 rounded text-[10px] flex items-end text-sky-500 hover:bg-sky-100 gap-1">
                    <Undo2 className="text-[10px]"/>
                    <span>Trang bài viết</span>
                </Link>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`px-2 border-1 rounded ml-2 ${
                        editor.isActive("bold") ? "bg-sky-300" : ""
                    }`}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className="px-2 border-1 rounded ml-2"
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className="px-2 border-1 rounded ml-2"
                >
                    Paragraph
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 1 }).run()
                    }
                    className="px-2 border-1 rounded ml-2"
                >
                    H1
                </button>
                <button
                    onClick={() =>
                        editor.chain().focus().setHeading({ level: 2 }).run()
                    }
                    className="px-2 border-1 rounded ml-2"
                >
                    H2
                </button>
            </div>
            <EditorContent editor={editor} className="editor-paper" />
        </div>
    );
};

export default Tiptap;
