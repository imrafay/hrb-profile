import React from "react";
import { useParams } from "react-router-dom";
import blogsData from "../data/blogs";
import SiteMap from "../components/blog/SiteMap";
import BlogContent from "../components/blog/Content";

const BlogDetailPage = () => {
    const { category, id } = useParams();

    const categoryData = blogsData[category];
    const blog = categoryData?.Content.find((b) => b.id === id);

    if (!blog) {
        return <div className="container mx-auto py-10">Blog not found</div>;
    }

    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 min-h-screen py-10 mt-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
                {/* Site Map Component */}
                <SiteMap blogsData={blogsData} />

                {/* Blog Content Component */}
                <BlogContent blog={blog} />
            </div>
        </div>
    );
};

export default BlogDetailPage;
