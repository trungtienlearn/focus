"use client";
import { useState } from "react";

export default function CommentSection() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const commentObj = {
            id: Date.now(),
            author: "Người dùng ẩn danh",
            content: newComment,
            date: new Date().toLocaleString(),
        };
        setComments([commentObj, ...comments]);
        setNewComment("");
    };

    return (
        <div className="mt-8 border-t pt-4">
            <h2 className="text-2xl font-semibold mb-4">Bình luận</h2>
            {/* Form nhập bình luận */}
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Nhập bình luận của bạn..."
                    className="flex-1 border rounded-lg p-2 resize-none"
                    rows={3}
                />
                <button
                    onClick={handleAddComment}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Gửi
                </button>
            </div>

            {/* Danh sách bình luận */}
            {comments.length === 0 ? (
                <p className="text-gray-500">Chưa có bình luận nào.</p>
            ) : (
                <ul className="space-y-4">
                    {comments.map((c) => (
                        <li key={c.id} className="border rounded-lg p-3 bg-gray-50">
                            <div className="flex justify-between text-sm text-gray-500 mb-1">
                                <span>{c.author}</span>
                                <span>{c.date}</span>
                            </div>
                            <p>{c.content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
