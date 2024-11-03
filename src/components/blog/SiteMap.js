import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Icons for expand/collapse

const SiteMap = ({ blogsData }) => {
    const [openCategory, setOpenCategory] = useState(null); // State to track the open category

    const toggleCategory = (cat) => {
        // If clicking on an already open category, close it; otherwise, open the selected category
        setOpenCategory(openCategory === cat ? null : cat);
    };

    return (
        <aside className="col-span-1 bg-gray-900 p-6 rounded-lg shadow-lg h-[800px] overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-semibold text-teal-400 mb-4">Site Map</h2>
            <ul className="space-y-4">
                {Object.keys(blogsData).map((cat) => (
                    <li key={cat}>
                        {/* Category Header with Toggle */}
                        <div
                            onClick={() => toggleCategory(cat)}
                            className="flex items-center justify-between cursor-pointer"
                        >
                            <h3 className="text-lg font-bold text-gray-100">{blogsData[cat].title}</h3>
                            {openCategory === cat ? (
                                <FaChevronUp className="text-teal-400" />
                            ) : (
                                <FaChevronDown className="text-teal-400" />
                            )}
                        </div>

                        {/* Collapsible Category Content */}
                        {openCategory === cat && (
                            <ul className="ml-4 space-y-2 mt-2">
                                {blogsData[cat].Content.map((b) => (
                                    <li key={b.id}>
                                        <Link
                                            to={`/topics/${cat}/${b.id}`}
                                            className="text-teal-400 hover:underline"
                                            onClick={() => setOpenCategory(cat)} // Keeps only the clicked category open
                                        >
                                            {b.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SiteMap;
