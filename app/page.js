import Image from "next/image";
import { Heart, MessageCircle, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-stone-200 min-h-screen">
      <header>
        <nav className="flex items-center justify-around p-4">
          <div className="flex items-end space-x-4">
            <div className="text-2xl font-black">TrungTienLearn</div>
            <div>
              <ul className="flex space-x-4 ml-4">
                <li>
                  <a className="hover:text-blue-600" href="#">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#">
                    Bài viết
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#">
                    Khóa học
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-600" href="#">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button className="bg-transparent border-2 border-solid text-sky-900 px-2 py-1 rounded hover:bg-blue-600 hover:text-white mr-2">
              Đăng ký
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 border-2 border-blue-500 rounded hover:bg-blue-600 hover:border-blue-600">
              Đăng nhập
            </button>
          </div>
        </nav>
      </header>
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-[url('/images/hero-web.jpg')] bg-cover bg-center p-6 opacity-90">
        <div className="bg-stone-100/60 p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-4xl font-bold mb-4 text-shadow-lg text-sky-800">
            Chào mừng bạn đến với{" "}
            <span className="text-pink-600">TrungTienLearn</span> - Nơi học tập và tìm lại chính mình!
          </h3>
          <p className="text-2xl mb-6 text-shadow-lg text-yellow-900">
            Tại đây, bạn sẽ tìm thấy các bài viết, khóa học và tài nguyên hữu
            ích để nâng cao khả năng nhận thức và tư duy của mình.
          </p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Các dự án của tôi
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-pink-600 mt-4">
          Bài viết mới nhất
        </button>
      </div>
      {/* Các bài viết mới */}
      <div>
        <h2 className="text-2xl text-sky-700 font-bold text-center my-8 uppercase">
          bài viết mới nhất
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Bài viết 1 */}
          <div className="bg-white p-0 rounded-lg shadow-lg">
            {/* Container riêng cho ảnh */}
            <div className="relative w-full h-48 mb-4">
              {" "}
              {/* Đặt chiều cao mong muốn cho ảnh, ví dụ h-48 (12rem) và thêm mb-4 để có khoảng cách */}
              <Image
                src="/images/img-post1.jpg"
                alt="Bài viết 1"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
              />
            </div>
            {/* chủ đề và ngày đăng */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <span className="text-sm text-white bg-sky-500 p-1 rounded-lg">
                Tư duy phản biện
              </span>
              <span className="text-sm text-gray-600">18 Jan 2025</span>
            </div>
            {/* Tiêu đề và nội dung mô tả nằm ngoài container ảnh */}
            <h3 className="text-xl px-6 font-semibold">
              Tư duy phản biện - kỹ năng thiết yếu
            </h3>
            <p className="mt-2 px-6">
              Mô tả ngắn về bài viết 1. Đây là nơi bạn có thể tìm hiểu thêm về
              chủ đề này.
            </p>
            {/* Tác giả và nút đọc thêm */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/author.jpg"
                    alt="Tác giả"
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-700">Trung Tiến</span>
              </div>
              <a
                href="#"
                className="flex text-blue-500 hover:text-blue-700 items-center space-x-1"
              >
                <span>Đọc thêm</span>
                <ArrowRight />
              </a>
            </div>
          </div>
          {/* Bài viết 2 */}
          <div className="bg-white p-0 rounded-lg shadow-lg">
            {/* Container riêng cho ảnh */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/img-post2.jpg"
                alt="Bài viết 2"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
              />
            </div>
            {/* chủ đề và ngày đăng */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <span className="text-sm text-white bg-sky-500 p-1 rounded-lg">
                Tư duy phản biện
              </span>
              <span className="text-sm text-gray-600">18 Jan 2025</span>
            </div>
            {/* Tiêu đề và nội dung mô tả nằm ngoài container ảnh */}
            <h3 className="text-xl px-6 font-semibold">
              Tại sao cần tư duy phản biện
            </h3>
            <p className="mt-2 px-6">
              Mô tả ngắn về bài viết 2. Đây là nơi bạn có thể tìm hiểu thêm về
              chủ đề này.
            </p>
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/author.jpg"
                    alt="Tác giả"
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-700">Trung Tiến</span>
              </div>
              <a
                href="#"
                className="flex text-blue-500 hover:text-blue-700 items-center space-x-1"
              >
                <span>Đọc thêm</span>
                <ArrowRight />
              </a>
            </div>
          </div>

          {/* Bài viết 3 */}
          <div className="bg-white p-0 rounded-lg shadow-lg">
            {/* Container riêng cho ảnh */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/images/img-post3.jpg"
                alt="Bài viết 3"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
              />
            </div>
            {/* chủ đề và ngày đăng */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <span className="text-sm text-white bg-sky-500 p-1 rounded-lg">
                Kỹ năng
              </span>
              <span className="text-sm text-gray-600">18 Jan 2025</span>
            </div>
            {/* Tiêu đề và nội dung mô tả nằm ngoài container ảnh */}
            <h3 className="text-xl px-6 font-semibold">
              Kỹ năng cần thiết cho frelancer
            </h3>
            <p className="mt-2 px-6 mb-4">
              Mô tả ngắn về bài viết 3. Đây là nơi bạn có thể tìm hiểu thêm về
              chủ đề này.
            </p>
            {/* Tác giả và nút đọc thêm */}
            <div className="flex items-center justify-between px-6 py-2 bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/author.jpg"
                    alt="Tác giả"
                    fill
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-700">Trung Tiến</span>
              </div>
              <a
                href="#"
                className="flex text-blue-500 hover:text-blue-700 items-center space-x-1"
              >
                <span>Đọc thêm</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Các khóa học */}
      <div className="my-12">
        <h2 className="text-2xl text-sky-700 font-bold text-center my-8 uppercase">Các khóa học</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {/* Khóa học 1 */}
          <div className="bg-white rounded-lg shadow-lg">
            {/* Hình ảnh khóa học */}
            <div className="relative w-full h-60">
                <Image
                src="/images/course-1.jpg"
                alt="Khóa học 1"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
                />
            </div>
            {/* Tiêu đề và mô tả khóa học */}
            <div className="px-6 py-4">
                <h3 className="text-xl font-semibold mt-4">Lập Trình C++ Cho Người Mới Bắt Đầu - Hiểu Sâu, Code Nhanh, Làm Dự Án Ngay!</h3>
                <p className="mt-2">
                Khóa học C++ online dành cho người chưa có kinh nghiệm hoặc muốn củng cố kiến thức. Bạn sẽ học cách viết code tối ưu, debug hiệu quả và áp dụng C++ vào các bài toán thực tế như xây dựng game đơn giản, phần mềm quản lý. Đặc biệt, khóa học cung cấp chứng nhận hoàn thành và cơ hội tham gia cộng đồng lập trình viên C++ chuyên nghiệp!
                </p>
                {/* Giá khóa học */}
                <div className="mt-4">
                  <span className="text-lg font-bold text-green-600">Giá: 500.000đ</span>
                  <span className="text-sm text-gray-500 ml-2">Giá gốc: 700.000đ</span>
                </div>
            </div>
            {/* Nút đăng ký khóa học */}
            <div className="px-6 py-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Đăng ký
              </button>
              <a href="#" className="text-blue-500 hover:text-blue-700 ml-4 inline-flex items-center">
                Xem chi tiết
                <ArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
          {/* Khóa học 2 */}
          <div className="bg-white rounded-lg shadow-lg">
            {/* Hình ảnh khóa học */}
            <div className="relative w-full h-60">
                <Image
                src="/images/course-2.jpg"
                alt="Khóa học 1"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
                />
            </div>
            {/* Tiêu đề và mô tả khóa học */}
            <div className="px-6 py-4">
                <h3 className="text-xl font-semibold mt-4">Nhận biết chánh niệm - Kỹ năng thiết yếu của thời đại</h3>
                <p className="mt-2">
                Khóa học C++ online dành cho người chưa có kinh nghiệm hoặc muốn củng cố kiến thức. Bạn sẽ học cách viết code tối ưu, debug hiệu quả và áp dụng C++ vào các bài toán thực tế như xây dựng game đơn giản, phần mềm quản lý. Đặc biệt, khóa học cung cấp chứng nhận hoàn thành và cơ hội tham gia cộng đồng lập trình viên C++ chuyên nghiệp!
                </p>
                {/* Giá khóa học */}
                <div className="mt-4">
                  <span className="text-lg font-bold text-green-600">Giá: 3.499.000đ</span>
                  <span className="text-sm text-gray-500 ml-2">Giá gốc: 9.500.000đ</span>
                </div>
            </div>
            {/* Nút đăng ký khóa học */}
            <div className="px-6 py-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Đăng ký
              </button>
              <a href="#" className="text-blue-500 hover:text-blue-700 ml-4 inline-flex items-center">
                Xem chi tiết
                <ArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
          {/* Khóa học 3 */}
          <div className="bg-white rounded-lg shadow-lg">
            {/* Hình ảnh khóa học */}
            <div className="relative w-full h-60">
                <Image
                src="/images/course-3.jpg"
                alt="Khóa học 1"
                fill
                objectFit="cover"
                quality={80}
                className="rounded-t-lg"
                />
            </div>
            {/* Tiêu đề và mô tả khóa học */}
            <div className="px-6 py-4">
                <h3 className="text-xl font-semibold mt-4">Kỹ năng đặt câu hỏi bản chất</h3>
                <p className="mt-2">
                Khóa học C++ online dành cho người chưa có kinh nghiệm hoặc muốn củng cố kiến thức. Bạn sẽ học cách viết code tối ưu, debug hiệu quả và áp dụng C++ vào các bài toán thực tế như xây dựng game đơn giản, phần mềm quản lý. Đặc biệt, khóa học cung cấp chứng nhận hoàn thành và cơ hội tham gia cộng đồng lập trình viên C++ chuyên nghiệp!
                </p>
                {/* Giá khóa học */}
                <div className="mt-4">
                  <span className="text-lg font-bold text-green-600">Giá: 500.000đ</span>
                  <span className="text-sm text-gray-500 ml-2">Giá gốc: 700.000đ</span>
                </div>
            </div>
            {/* Nút đăng ký khóa học */}
            <div className="px-6 py-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Đăng ký
              </button>
              <a href="#" className="text-blue-500 hover:text-blue-700 ml-4 inline-flex items-center">
                Xem chi tiết
                <ArrowRight className="inline ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2025 TrungTienLearn. Tất cả quyền được bảo lưu.
          </p>
          <p className="text-sm">
            Theo dõi tôi trên mạng xã hội:
            <a href="#" className="text-blue-400 hover:underline ml-2">
              Facebook
            </a>
            ,
            <a href="#" className="text-blue-400 hover:underline ml-2">
              TikTok
            </a>
            ,
            <a href="#" className="text-blue-400 hover:underline ml-2">
              Instagram
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
