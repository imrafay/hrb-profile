import React from "react";
import { Link as ScrollLink } from "react-scroll";

const TopicNavigation = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Topics</h2>
            <ul className="space-y-2">
                <li>
                    <ScrollLink
                        to="workflow"
                        smooth={true}
                        duration={500}
                        className="text-teal-400 hover:underline cursor-pointer"
                    >
                        How it works
                    </ScrollLink>
                </li>
                <li>
                    <ScrollLink
                        to="benefits"
                        smooth={true}
                        duration={500}
                        className="text-teal-400 hover:underline cursor-pointer"
                    >
                        Benefits
                    </ScrollLink>
                </li>
            </ul>
        </div>
    );
};

export default TopicNavigation;
