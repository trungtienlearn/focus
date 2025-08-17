import Tiptap from "@/components/Tiptap";
import Image from "next/image";

const Write = () => {
    return (
        <div className="my-4">
            <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg mb-6">
                <h1 className="text-2xl font-bold mb-4">Soạn thảo bài viết</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="title">Tiêu đề</label>
                        <input
                            type="text"
                            id="title"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập tiêu đề bài viết"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="description">Mô tả</label>
                        <textarea
                            id="description"
                            className="w-full p-2 border border-gray-300 rounded"
                            placeholder="Nhập mô tả ngắn cho bài viết"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="thumbnail">Ảnh đại diện</label>
                        <div className="flex items-center">
                            <Image
                                src="/images/placeholder.png"
                                alt="Thumbnail"
                                width={100}
                                height={100}
                                className="mr-4 rounded"
                            />
                            <input
                                type="file"
                                id="thumbnail"
                                className="border border-gray-300 rounded p-2"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <Tiptap />
        </div>
    );
}

export default Write;