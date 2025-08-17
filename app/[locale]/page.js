'use client';

import { useState, useEffect } from "react";
import SectionHero from "@/components/SectionHero";
import PostCard from "@/components/PostCard";
import CourseCard from "@/components/CourseCard";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    // Fetch posts from the API
    async function fetchPosts() {
      const response = await fetch('/api/posts', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      return data;
    }
    // Fetch couses from the API
    async function fetchCourses() {
      const response = await fetch('/api/courses', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      return data;
    }
    // Fetch courses and set state
    fetchCourses().then(courses => {
      setCourses(courses);
    }).catch(error => {
      console.error('Error fetching courses:', error);
    });
    // Fetch posts and set state
    fetchPosts().then(posts => {
      setPosts(posts);
    }).catch(error => {
      console.error('Error fetching posts:', error);
    });
  }, []);

  return (
    <div>
      <SectionHero />
      <main className="container mx-auto px-4">
      {/* Các bài viết mới */}
      <div>
        <h2 className="text-2xl text-sky-700 font-bold text-center my-8 uppercase">
          {t('latestPosts')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      {/* Các khóa học */}
      <div className="my-12">
        <h2 className="text-2xl text-sky-700 font-bold text-center my-8 uppercase">
          {t('latestCourses')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
      </main>
    </div>
  );
}
