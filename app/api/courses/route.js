export async function GET() {
    return new Response(
        JSON.stringify([
            {
                id: 1,
                title: "Lập Trình C++ Cho Người Mới Bắt Đầu - Hiểu Sâu, Code Nhanh, Làm Dự Án Ngay!",
                description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                date: "18 Jan 2025",
                category: "Lập trình",
                image: "/images/course-1.jpg", // Đường dẫn đến ảnh khóa học
                price: 500000,
                originalPrice: 700000,
                slug: "lap-trinh-cpp-cho-nguoi-moi-bat-dau-hieu-sau-code-nhanh-lam-du-an-ngay",
            },
            {
                id: 2,
                title: "Nhận biết chánh niệm - Kỹ năng thiết yếu của thời đại",
                description: "Bạn có đang cảm thấy căng thẳng, mất tập trung hay bị cuốn vào guồng quay hối hả của cuộc sống? Khóa học Chánh Niệm được thiết kế để giúp bạn tìm lại sự cân bằng, tĩnh tại từ bên trong thông qua những phương pháp thực hành đơn giản nhưng hiệu quả.",
                date: "20 Jan 2025",
                category: "Chánh niệm",
                image: "/images/course-2.jpg", // Đường dẫn đến ảnh khóa học
                price: 3499000,
                originalPrice: 9500000,
                slug: "nhan-biet-chanh-niem-ky-nang-thiet-yeu-cua-thoi-dai",
            },
            {
                id: 3,
                title: "Khóa học Python cơ bản - Từ con số 0 đến làm dự án thực tế",
                description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                date: "22 Jan 2025",
                category: "Python",
                image: "/images/course-3.jpg", // Đường dẫn đến ảnh khóa học
                price: 600000,
                originalPrice: 800000,
                slug: "khoa-hoc-python-co-ban-tu-con-so-0-den-lam-du-an-thuc-te",
            },
        ]),
        {
            headers: { "Content-Type": "application/json" },
        }
    )
}
