import React from "react";
import { Link, useParams } from "react-router-dom";
import blogsData from "../data/blogs";

const BlogsPage = () => {
    const { category } = useParams();
    const categories = Object.keys(blogsData);

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Blogs</h1>
            {category ? (
                <>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        {category.toUpperCase()}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {blogsData[category].map((blog) => (
                            <Link
                                to={`/blogs/${category}/${blog.id}`}
                                key={blog.id}
                                className="block p-6 bg-white shadow-md rounded hover:shadow-xl"
                            >
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600">{blog.description}</p>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <h2 className="text-2xl font-semibold">Categories</h2>
                    <ul className="mt-4 space-y-4">
                        {categories.map((cat) => (
                            <li key={cat}>
                                <Link
                                    to={`/blogs/${cat}`}
                                    className="text-blue-500 hover:underline text-lg"
                                >
                                    {cat.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default BlogsPage;
