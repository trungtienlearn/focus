"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white p-0 rounded-lg shadow-lg">
      {/* Container riêng cho ảnh */}
      <div className="relative w-full h-48 mb-4">
        <Image
          src={course.image || "/images/default-course.jpg"} // Sử dụng ảnh mặc định nếu không có ảnh khóa học
          alt={course.title || "Khóa học"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
          className="rounded-t-lg object-cover"
        />
      </div>
      {/* Chủ đề và ngày tạo */}
      <div>
        <div className="flex items-center justify-between px-6 py-2 bg-transparent">
          <span className="text-sm text-white bg-sky-500 p-1 rounded-lg">
            {course.category || "Chủ đề"} {/* Hiển thị chủ đề hoặc mặc định */}
          </span>
          <span className="text-sm text-gray-600">
            {course.date || "Không lấy được ngày"}
          </span>
        </div>
      </div>
      {/* Tiêu đề và mô tả nằm ngoài container ảnh */}
      <h3 className="text-xl px-6 font-semibold">
        {course.title || "Tiêu đề khóa học"}{" "}
        {/* Hiển thị tiêu đề hoặc mặc định */}
      </h3>
      <p className="mt-2 px-6 line-clamp-3">
        {course.description || "Mô tả ngắn về khóa học."}
      </p>
      {/* Giá bán */}
      <div className="px-6 py-2 bg-transparent">
        <span className="text-lg font-bold text-green-600">
          {course.price
            ? new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(course.price)
            : "Miễn phí"}
        </span>

        {/* Giá gốc nếu có */}
        {course.originalPrice && (
          <span className="text-sm line-through text-pink-500 ml-2">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(course.originalPrice)}
          </span>
        )}
      </div>
      {/* Nút đăng ký và chi tiết */}
      <div className="flex items-center justify-between px-6 py-2 bg-transparent">
        <Link
          href={`/courses/${course.slug}`}
          className="flex text-blue-500 hover:text-blue-700"
        >
          <span>Xem chi tiết</span>
          <ArrowRight className="ml-2" />
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Đăng ký
        </button>
      </div>
    </div>
  );
}
