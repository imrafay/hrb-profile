import React from "react";
import { Link } from "react-router-dom";

const SiteMap = ({ blogsData }) => {
    return (
        <aside className="col-span-1 bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Site Map</h2>
            <ul className="space-y-4">
                {Object.keys(blogsData).map((cat) => (
                    <li key={cat}>
                        <h3 className="text-lg font-bold text-gray-100">{blogsData[cat].title}</h3>
                        <ul className="ml-4 space-y-2">
                            {blogsData[cat].Content.map((b) => (
                                <li key={b.id}>
                                    <Link to={`/blogs/${cat}/${b.id}`} className="text-teal-400 hover:underline">
                                        {b.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SiteMap;
