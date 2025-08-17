"use client";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({ post }) {
    return (
        <div className="bg-white p-0 rounded-lg shadow-lg">
            {/* Container riêng cho ảnh */}
            <div className="relative w-full h-48 mb-4">
                {" "}
                {/* Đặt chiều cao mong muốn cho ảnh, ví dụ h-48 (12rem) và thêm mb-4 để có khoảng cách */}
                <Image
                    src={post.image || "/images/default-post.jpg"} // Sử dụng ảnh mặc định nếu không có ảnh bài viết
                    alt="Bài viết 1"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={80}
                    className="rounded-t-lg object-cover"
                />
            </div>
            {/* chủ đề và ngày đăng */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
                <span className="text-sm text-white bg-sky-500 p-1 rounded-lg">
                    {post.category || "Chủ đề"}{" "}
                    {/* Hiển thị chủ đề hoặc mặc định */}
                </span>
                <span className="text-sm text-gray-600">
                    {post.date || "Không lấy được ngày"}
                </span>
            </div>
            {/* Tiêu đề và nội dung mô tả nằm ngoài container ảnh */}
            <h3 className="text-xl px-6 font-semibold">
                {post.title || "Tiêu đề bài viết 1"}{" "}
                {/* Hiển thị tiêu đề hoặc mặc định */}
            </h3>
            <p className="mt-2 px-6 line-clamp-3">{post.description}</p>
            {/* Tác giả và nút đọc thêm */}
            <div className="flex items-center justify-between px-6 pb-4 mt-4 bg-transparent">
                <div className="flex items-center space-x-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            src="/images/author.jpg"
                            alt="Tác giả"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                    <span className="text-sm text-gray-700">Trung Tiến</span>
                </div>

                <Link
                    href={`/blog/${post.slug}`}
                    className="flex text-blue-500 hover:text-blue-700 items-center space-x-1"
                >
                    Đọc thêm
                    <ArrowRight />
                </Link>
            </div>
        </div>
    );
}
