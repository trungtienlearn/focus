'use client';
import { useTranslations, useLocale } from "next-intl";
import Tiptap from "@/components/Tiptap";
import { useState } from "react";

export default function CoursePage() {
  const t = useTranslations();

  const [content, setContent] = useState('<p>Hello World! 🌎️</p>');

  return (
    <div className="bg-gray-100 w-full h-screen">
      {/* Tiêu đề và mô tả trang */}
      <div>
        <h1 className="text-2xl uppercase font-bold text-center pt-4">
            Khóa Học
        </h1>
        <p className="text-center text-gray-600 mt-2">
            Tự học là một hành trình thú vị và đầy thử thách. Dưới đây là một số khóa học mà bạn có thể tham gia để nâng cao kỹ năng của mình.
        </p>
      </div>
    </div>
  );
}