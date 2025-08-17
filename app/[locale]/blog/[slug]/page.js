"use client";
import Image from "next/image";
import { useEffect, useState, use } from "react";
import CommentSection from "./CommentSection";

export default function BlogDetailPage({ params }) {
    const { slug } = use(params);
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        async function fetchPostData() {
            const response = await fetch(`/api/posts/${slug}`, {
                cache: "no-store",
            });
            if (!response.ok) {
                throw new Error("Failed to fetch post data");
            }
            const data = await response.json();
            setPostData(data);
        }
        fetchPostData().catch((error) => {
            console.error("Error fetching post data:", error);
        });
    }, []);

    return (
        <>
            <div className="container mx-auto p-4">
                <Image
                    src={postData?.image || "/default-image.jpg"}
                    alt="Blog Detail"
                    width={800}
                    height={400}
                    className="w-full h-64 object-cover"
                />
                <h1 className="text-3xl font-bold mt-4">
                    {postData?.title || "Loading"}
                </h1>
                <p className="mt-2">
                    {postData?.description || "Loading description..."}
                </p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: postData?.content || "Loading content...",
                    }}
                    className="mt-4"
                ></div>
                <CommentSection />
            </div>
        </>
    );
}
