'use client';
import { useState, useEffect } from 'react';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

export default function BlogPage() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('/api/posts'); // Giả sử có API để lấy bài viết
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error('Error fetching posts:', error);
			}
		};
		fetchPosts();
	}, []);

	useEffect(() => {
		console.log('Posts fetched:', posts);
	}, [posts]);
    return (
        <>
            <div className="bg-gray-200 p-6">
                {/* Tiêu đề trang */}
                <h1 className="text-3xl text-center font-bold mb-4 uppercase">
                    Bài viết
                </h1>
                {/* Nội dung trang */}
                <p className="text-lg text-center text-gray-700">
                    Đây là nơi bạn có thể tìm thấy tất cả các bài viết mới nhất
                    của chúng tôi. Hãy cùng khám phá!
                </p>
                <div className="container mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
                    {/* Bộ lọc các bài viết */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết..."
                                className="border border-gray-300 w-100 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Tìm kiếm bài viết"
                            ></input>
                            <button className="bg-blue-500 text-white rounded-lg ms-6 px-4 py-2 hover:bg-blue-600 transition duration-200">
                                Tìm Kiếm
                            </button>
                        </div>
                        {/* Nút viết bài */}
                        <Link href="/write">
                            <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 transition duration-200">
                                + Viết Bài
                            </button>
                        </Link>
                    </div>
                    {/* Chọn theo danh mục */}
                    <div className="flex justify-start items-center mb-6">
                        <button className="active:bg-blue-500 text-white bg-blue-600 rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200">
                            Tất cả
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 ml-4 hover:bg-gray-100 transition duration-200">
                            Công nghệ
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 ml-4 hover:bg-gray-100 transition duration-200">
                            Cuộc sống
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 ml-4 hover:bg-gray-100 transition duration-200">
                            Giải trí
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 ml-4 hover:bg-gray-100 transition duration-200">
                            Triết học
                        </button>
                        <button className="border border-gray-300 rounded-lg px-2 py-1 ml-4 hover:bg-gray-100 transition duration-200">
                            Tâm lý học
                        </button>
                    </div>
                </div>
                {/* Danh sách các bài viết */}
				<div className='container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
					{posts.map((post) => (
						<PostCard key={post.id} post={post} />))
					}
				</div>
            </div>
        </>
    );
}
