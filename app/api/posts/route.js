

export async function GET() {
    return new Response(
        JSON.stringify([
        {
            id: 1,
            title: "Tư duy phản biện - kỹ năng thiết yếu",
            slug: "tu-duy-phan-bien-ky-nang-thiet-yeu",
            description: "Mô tả ngắn về bài viết 1. Đây là nơi bạn có thể tìm hiểu thêm về chủ đề này.",
            date: "18 Jan 2025",
            category: "Tư duy phản biện",
            image: "/images/img-post1.jpg", // Đường dẫn đến ảnh bài viết
        },
        {
            id: 2,
            title: "Chánh niệm trong cuộc sống hàng ngày",
            slug: "chanh-niem-trong-cuoc-song-hang-ngay",
            description: "Bạn có đang cảm thấy căng thẳng, mất tập trung hay bị cuốn vào guồng quay hối hả của cuộc sống? Khóa học Chánh Niệm được thiết kế để giúp bạn tìm lại sự cân bằng, tĩnh tại từ bên trong thông qua những phương pháp thực hành đơn giản nhưng hiệu quả.",
            date: "20 Jan 2025",
            category: "Chánh niệm",
            image: "/images/img-post2.jpg", // Đường dẫn đến ảnh bài viết
        },
        {
            id: 3,
            title: "Đặt câu hỏi để khám phá tri thức",
            slug: "dat-cau-hoi-de-kham-pha-tri-thuc",
            description: "Bạn có bao giờ tự hỏi tại sao mình lại gặp khó khăn trong việc hiểu sâu về một vấn đề? Có phải bạn đang tìm kiếm cách để nâng cao khả năng phân tích và tư duy phản biện của mình? Khóa học này sẽ giúp bạn phát triển kỹ năng đặt câu hỏi đúng, từ đó mở rộng khả năng nhận thức và tư duy của bạn.",
            date: "22 Jan 2025",
            category: "Đặt câu hỏi",
            image: "/images/img-post3.jpg", // Đường dẫn đến ảnh bài viết
        },
        ]),
        {
        headers: { "Content-Type": "application/json" },
        }
    );
}