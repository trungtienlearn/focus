// app/not-found.jsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      {/* Hình ảnh lỗi */}
      <Image 
        src="/images/404.jpg" // Thay thế bằng đường dẫn hình ảnh 404 của bạn
        alt="Page not found" 
        width={400} 
        height={400}
        quality={50}
        className="mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Không tìm thấy trang</h1>
      <p className="text-lg text-gray-600 mb-8">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        Quay lại trang chủ
      </Link>
    </div>
  );
}