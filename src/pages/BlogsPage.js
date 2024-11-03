import React, { useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs";

const BlogsPage = () => {
    const categories = Object.keys(blogsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const categoriesPerPage = 5;

    // Filter categories and blogs based on search query
    const filteredCategories = categories.filter((category) => {
        const categoryTitleMatches = blogsData[category].title.toLowerCase().includes(searchQuery.toLowerCase());
        const contentTitleMatches = blogsData[category].Content.some((x) =>
            x.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        return categoryTitleMatches || contentTitleMatches;
    });

    // Calculate total number of pages
    const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

    // Get categories for the current page
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

    // Pagination functions
    const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-black text-gray-100 min-h-screen py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-teal-400 mb-10">Blog Categories</h1>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search Topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 bg-gray-800 text-gray-100 rounded-lg focus:outline-none"
                    />
                </div>

                {/* Category List with Pagination */}
                {currentCategories.map((category) => {
                    const isCategoryMatch = blogsData[category].title.toLowerCase().includes(searchQuery.toLowerCase());
                    const filteredBlogs = blogsData[category].Content.filter((blog) =>
                        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
                    );

                    // Only render the category if it matches or if there are matching blogs
                    if (!isCategoryMatch && filteredBlogs.length === 0) return null;

                    return (
                        <div key={category} className="mb-12">
                            <h2
                                className={`text-3xl font-semibold mb-6 ${isCategoryMatch && searchQuery !== "" ? "text-yellow-400" : "text-teal-400"
                                    }`}
                            >
                                {blogsData[category].title}
                            </h2>

                            {/* Show matching blogs only if the category doesn't match */}
                            {!isCategoryMatch && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredBlogs.map((blog) => (
                                        <Link
                                            to={`/topics/${category}/${blog.id}`}
                                            key={blog.id}
                                            className="block p-4 bg-gray-900 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 my-2"
                                        >
                                            <h3
                                                className={`text-2xl font-semibold mb-1 text-yellow-400`}
                                            >
                                                {blog.title}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                            )}

                            {/* Show all blogs if the category itself matches */}
                            {isCategoryMatch && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {blogsData[category].Content.map((blog) => (
                                        <Link
                                            to={`/topics/${category}/${blog.id}`}
                                            key={blog.id}
                                            className="block p-4 bg-gray-900 shadow-lg rounded-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 my-2"
                                        >
                                            <h3 className="text-2xl font-semibold mb-1 text-teal-400">
                                                {blog.title}
                                            </h3>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Pagination Controls */}
                <div className="flex justify-between mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 bg-teal-400 text-gray-900 rounded-lg ${currentPage === 1 && "opacity-50 cursor-not-allowed"
                            }`}
                    >
                        Previous
                    </button>
                    <span className="text-gray-300">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 bg-teal-400 text-gray-900 rounded-lg ${currentPage === totalPages && "opacity-50 cursor-not-allowed"
                            }`}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
