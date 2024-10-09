import React from "react";
const StarContent = ({ blog }) => {
    return (
        <article className="col-span-1 md:col-span-3 bg-gray-900 p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-teal-400 mb-6">{blog.title}</h1>

            <section id="task" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">Situation:</h2>
                <p className="text-gray-300 text-lg">{blog.situation}</p>
            </section>

            {/* Task Section */}
            <section id="task" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">Task:</h2>
                <p className="text-gray-300 text-lg">{blog.task}</p>
            </section>

            {/* Action Section */}
            <section id="action" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">Action:</h2>
                <p className="text-gray-300 text-lg">{blog.action}</p>
            </section>

            {/* Result Section */}
            <section id="result" className="mb-8">
                <h2 className="text-3xl font-semibold text-teal-400 mb-4">Result:</h2>
                <p className="text-gray-300 text-lg">{blog.result}</p>
            </section>
        </article>
    );
};

export default StarContent;
