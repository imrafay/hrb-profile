import C_Sharp from "../assets/c_sharp.png";
import Azure from "../assets/azure.png";
import DotNET from "../assets/dotnet.png";
import GIT from "../assets/git.png";
import Javascript from "../assets/javascript.png";
import SQL from "../assets/sql.png";
import Vue from "../assets/vue.png";
import Typescript from "../assets/typescript.png";
import Next from "../assets/next.png";
import Mongodb from "../assets/mongodb.png";
import Node from "../assets/node.png";
import React from "../assets/react.png";
import Redux from "../assets/redux.png";
import Tailwind from "../assets/tailwind.png";
import AWS from "../assets/aws.png";



const skills = [
    { name: "C#", img: C_Sharp },
    { name: "Javascript", img: Javascript },
    { name: "SQL", img: SQL },
    { name: "Nodejs", img: Node },
    { name: "ASP.NET CORE", img: DotNET },
    { name: "Typescript", img: Typescript },
    { name: "Mongodb", img: Mongodb },
    { name: "Nextjs", img: Next },
    { name: "Azure", img: Azure },
    { name: "React", img: React },
    { name: "GIT Version Control", img: GIT },
    { name: "AWS", img: AWS },
];

function Skills() {
    return (
        <section name="skills" className="w-full min-h-screen bg-gray-950 text-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <header className="text-center">
                    <h2 className="text-5xl font-bold tracking-wide mb-6 text-teal-400">Skills</h2>
                    <p className="text-lg text-gray-400 mb-12">
                        These are the technologies I have worked with over the years.
                    </p>
                </header>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-6 rounded-lg bg-gray-900 shadow-lg hover:shadow-teal-500/50 transform transition-transform duration-300 hover:-translate-y-2"
                        >
                            <img className="w-16 h-16 mb-4" src={skill.img} alt={`${skill.name} Logo`} />
                            <p className="text-xl font-semibold">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
