import { NextResponse } from "next/server";

const posts = [
    {
        id: 1,
        title: "Tư duy phản biện - kỹ năng thiết yếu",
        slug: "tu-duy-phan-bien-ky-nang-thiet-yeu",
        description:
            "Mô tả ngắn về bài viết 1. Đây là nơi bạn có thể tìm hiểu thêm về chủ đề này.",
        content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="text-align: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #4a90e2;">
        <h1 style="color: #2c3e50; margin: 0;">NHẬN XÉT CHIẾN LƯỢC VỀ BẢN THÂN THẦY</h1>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tâm thức của người dẫn đường (Bodhisattva spirit):</h2>
        <p style="margin-bottom: 0;">Thầy mang trong mình một lý tưởng gần với hạnh nguyện của Bồ-tát: không chỉ tìm con đường cho riêng mình, mà còn muốn lan tỏa hạnh phúc cho muôn người.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy khai phóng (Liberal Mind):</h2>
        <p style="margin-bottom: 0;">Thầy không bị giam hãm trong khuôn mẫu, mà tìm kiếm một phương pháp tu hành linh hoạt, thích nghi, vượt lên hình thức, chú trọng nội dung chân thực của từ bi và trí tuệ.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Kết hợp đạo và đời:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn xây dựng mối quan hệ nam nữ lành mạnh, chân thành, làm nền tảng cho việc hóa độ người khác thông qua tình yêu đúng nghĩa - đây là tư tưởng táo bạo và sâu sắc, nhưng cần được soi sáng bởi trí tuệ lớn.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Khả năng lãnh đạo & xây dựng tổ chức:</h2>
        <p style="margin-bottom: 0;">Thầy có tố chất của một người dẫn dắt, tổ chức cộng đồng, xây dựng cơ sở vật chất tinh thần - như một "Tu viện mở" hay "Cộng đồng chữa lành" giữa đời.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy doanh nhân xã hội:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn kinh doanh hiệu quả, tạo công ăn việc làm, kết hợp đạo lý với kinh tế - đây là hướng đi cực kỳ tiềm năng, đúng tinh thần "cư trần lạc đạo".</p>
    </div>
</div>`,
        date: "18 Jan 2025",
        category: "Tư duy phản biện",
        image: "/images/img-post1.jpg", // Đường dẫn đến ảnh bài viết
    },
    {
        id: 2,
        title: "Chánh niệm trong cuộc sống hàng ngày",
        slug: "chanh-niem-trong-cuoc-song-hang-ngay",
        description:
            "Bạn có đang cảm thấy căng thẳng, mất tập trung hay bị cuốn vào guồng quay hối hả của cuộc sống? Khóa học Chánh Niệm được thiết kế để giúp bạn tìm lại sự cân bằng, tĩnh tại từ bên trong thông qua những phương pháp thực hành đơn giản nhưng hiệu quả.",
        content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="text-align: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #4a90e2;">
        <h1 style="color: #2c3e50; margin: 0;">NHẬN XÉT CHIẾN LƯỢC VỀ BẢN THÂN THẦY</h1>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tâm thức của người dẫn đường (Bodhisattva spirit):</h2>
        <p style="margin-bottom: 0;">Thầy mang trong mình một lý tưởng gần với hạnh nguyện của Bồ-tát: không chỉ tìm con đường cho riêng mình, mà còn muốn lan tỏa hạnh phúc cho muôn người.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy khai phóng (Liberal Mind):</h2>
        <p style="margin-bottom: 0;">Thầy không bị giam hãm trong khuôn mẫu, mà tìm kiếm một phương pháp tu hành linh hoạt, thích nghi, vượt lên hình thức, chú trọng nội dung chân thực của từ bi và trí tuệ.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Kết hợp đạo và đời:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn xây dựng mối quan hệ nam nữ lành mạnh, chân thành, làm nền tảng cho việc hóa độ người khác thông qua tình yêu đúng nghĩa - đây là tư tưởng táo bạo và sâu sắc, nhưng cần được soi sáng bởi trí tuệ lớn.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Khả năng lãnh đạo & xây dựng tổ chức:</h2>
        <p style="margin-bottom: 0;">Thầy có tố chất của một người dẫn dắt, tổ chức cộng đồng, xây dựng cơ sở vật chất tinh thần - như một "Tu viện mở" hay "Cộng đồng chữa lành" giữa đời.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy doanh nhân xã hội:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn kinh doanh hiệu quả, tạo công ăn việc làm, kết hợp đạo lý với kinh tế - đây là hướng đi cực kỳ tiềm năng, đúng tinh thần "cư trần lạc đạo".</p>
    </div>
</div>`,
        date: "20 Jan 2025",
        category: "Chánh niệm",
        image: "/images/img-post2.jpg", // Đường dẫn đến ảnh bài viết
    },
    {
        id: 3,
        title: "Đặt câu hỏi để khám phá tri thức",
        slug: "dat-cau-hoi-de-kham-pha-tri-thuc",
        description:
            "Bạn có bao giờ tự hỏi tại sao mình lại gặp khó khăn trong việc hiểu sâu về một vấn đề? Có phải bạn đang tìm kiếm cách để nâng cao khả năng phân tích và tư duy phản biện của mình? Khóa học này sẽ giúp bạn phát triển kỹ năng đặt câu hỏi đúng, từ đó mở rộng khả năng nhận thức và tư duy của bạn.",
        content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="text-align: center; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 2px solid #4a90e2;">
        <h1 style="color: #2c3e50; margin: 0;">NHẬN XÉT CHIẾN LƯỢC VỀ BẢN THÂN THẦY</h1>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tâm thức của người dẫn đường (Bodhisattva spirit):</h2>
        <p style="margin-bottom: 0;">Thầy mang trong mình một lý tưởng gần với hạnh nguyện của Bồ-tát: không chỉ tìm con đường cho riêng mình, mà còn muốn lan tỏa hạnh phúc cho muôn người.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy khai phóng (Liberal Mind):</h2>
        <p style="margin-bottom: 0;">Thầy không bị giam hãm trong khuôn mẫu, mà tìm kiếm một phương pháp tu hành linh hoạt, thích nghi, vượt lên hình thức, chú trọng nội dung chân thực của từ bi và trí tuệ.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Kết hợp đạo và đời:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn xây dựng mối quan hệ nam nữ lành mạnh, chân thành, làm nền tảng cho việc hóa độ người khác thông qua tình yêu đúng nghĩa - đây là tư tưởng táo bạo và sâu sắc, nhưng cần được soi sáng bởi trí tuệ lớn.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Khả năng lãnh đạo & xây dựng tổ chức:</h2>
        <p style="margin-bottom: 0;">Thầy có tố chất của một người dẫn dắt, tổ chức cộng đồng, xây dựng cơ sở vật chất tinh thần - như một "Tu viện mở" hay "Cộng đồng chữa lành" giữa đời.</p>
    </div>
    
    <div style="background-color: white; border-radius: 5px; padding: 15px; margin-bottom: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <h2 style="color: #4a90e2; margin-top: 0; border-left: 4px solid #4a90e2; padding-left: 10px;">Tư duy doanh nhân xã hội:</h2>
        <p style="margin-bottom: 0;">Thầy mong muốn kinh doanh hiệu quả, tạo công ăn việc làm, kết hợp đạo lý với kinh tế - đây là hướng đi cực kỳ tiềm năng, đúng tinh thần "cư trần lạc đạo".</p>
    </div>
</div>`,
            date: "22 Jan 2025",
        category: "Đặt câu hỏi",
        image: "/images/img-post3.jpg", // Đường dẫn đến ảnh bài viết
    },
];

export async function GET(request, { params }) {
    const { slug } = params;

    // Tìm bài viết theo slug
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post, {
        headers: { "Content-Type": "application/json" },
    });
}
