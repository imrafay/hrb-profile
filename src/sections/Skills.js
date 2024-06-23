import C_Sharp from "../assets/c_sharp.png";
import Azure from "../assets/azure.png";
import DotNET from "../assets/dotnet.png";
import GIT from "../assets/git.png";
import Javascript from "../assets/javascript.png";
import SQL from "../assets/sql.png";
import Vue from "../assets/vue.png";
import Typescript from "../assets/typescript.png";


function Skills(){
    return (
    <div name="skills" className="w-full h-screen bg-gray-900 text-gray-100">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-600">Skills</p>
                <p className="py-4">These are the technologies I have worked with over the years.</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={C_Sharp} alt="C# Logo"/>
                    <p className="my-4">C#</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={DotNET} alt="C# Logo"/>
                    <p className="my-4">ASP.NET CORE</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Azure} alt="C# Logo"/>
                    <p className="my-4">Azure</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={SQL} alt="C# Logo"/>
                    <p className="my-4">SQL</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Javascript} alt="C# Logo"/>
                    <p className="my-4">Javascript</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Typescript} alt="C# Logo"/>
                    <p className="my-4">Typescript</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Vue} alt="C# Logo"/>
                    <p className="my-4">VueJS</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GIT} alt="C# Logo"/>
                    <p className="my-4">GIT Version Control</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Skills;