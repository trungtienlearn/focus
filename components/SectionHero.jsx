export default function SectionHero() {
    return (
        <>
            {/* Hero section */}
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
        </>
    )
}