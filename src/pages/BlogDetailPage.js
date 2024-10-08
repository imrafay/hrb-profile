import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs";

const BlogDetailPage = () => {
    const { category, id } = useParams();
    const blog = blogsData[category].find((b) => b.id === id);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-gray-800">{blog.title}</h1>
            <p className="text-gray-600 mt-4">{blog.content}</p>
        </div>
    );
};

export default BlogDetailPage;
