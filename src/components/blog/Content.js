import React from "react";
import TopicNavigation from "./TopicNavigation";

const BlogContent = ({ blog }) => {
    return (
        <article className="col-span-1 md:col-span-3 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-teal-400 mb-6">{blog.title}</h1>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{blog.description}</p>

            {/* Topic Navigation Component */}
            <TopicNavigation />

            {/* Workflow Section */}
            <section id="workflow" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">How it works:</h2>
                <ul className="list-disc ml-6 space-y-2">
                    {blog.workFlow.map((step, index) => (
                        <li key={index} className="text-gray-300 text-lg">
                            {step}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">Benefits:</h2>
                <ul className="list-disc ml-6 space-y-2">
                    {blog.Benefits.map((benefit, index) => (
                        <li key={index} className="text-gray-300 text-lg">
                            {benefit}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default BlogContent;
