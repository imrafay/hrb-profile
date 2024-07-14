import Arztpool from "../assets/arztpool-portfolio.jpg";
import Rhithm from "../assets/rhithm-portfolio.jpg";
import Velo from "../assets/velo-portfolio.jpg";


function Projects(){
    return (
    <div name="projects" className="w-full h-screen bg-gray-900 text-gray-100">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-gray-600">Projects</p>
                <p className="py-4">These are the projects I have worked with over the years.</p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-center py-8">
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="object-cover h-48 w-96 mx-auto" src={Rhithm} alt="Rhithm"/>
                    <p className="my-4">Rhithm</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="object-cover h-48 w-96 mx-auto" src={Arztpool} alt="Arztpool"/>
                    <p className="my-4">Arztpool</p>
                </div>
                <div className="rounded-md shadow-md shadow-gray-800 hover:cursor-pointer hover:scale-110 duration-500">
                    <img className="object-cover h-48 w-96 mx-auto" src={Velo} alt="VeloHub"/>
                    <p className="my-4">VeloHub</p>
                </div>
            </div>
        </div>
    </div>);
}

export default Projects;