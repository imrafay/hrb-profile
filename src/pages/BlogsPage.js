import React from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs";

const BlogsPage = () => {
    const categories = Object.keys(blogsData); // Get all categories from the blogsData

    return (
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-teal-400 mb-10">Blog Categories</h1>

                {categories.map((category) => (
                    <div key={category} className="mb-12">
                        <h2 className="text-3xl font-semibold text-teal-400 mb-6">{blogsData[category].title}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogsData[category].Content.map((blog) => (
                                <Link
                                    to={`/blogs/${category}/${blog.id}`}
                                    key={blog.id}
                                    className="block p-6 bg-gray-900 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                                >
                                    <h3 className="text-2xl font-semibold text-teal-400 mb-2">{blog.title}</h3>
                                    <p className="text-gray-300">{blog.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;
