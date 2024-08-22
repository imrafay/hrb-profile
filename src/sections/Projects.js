import Arztpool from "../assets/arztpool-portfolio.jpg";
import Rhithm from "../assets/rhithm-portfolio.jpg";
import Velo from "../assets/velo-portfolio.jpg";

const projects = [
  {
    name: "Rhithm",
    description: "Rhithm’s check-in tool provides an opportunity for students and staff to reflect on how they’re feeling. In under one minute, our emoji-based check-in tool helps students build awareness in five key areas of wellness. Based on their answers, our algorithm presents each student with a short activity to teach them essential life skills and/or to get them ready to learn.",
    img: Rhithm,
    link: "https://rhithm.app"
  },
  {
    name: "Arztpool",
    description: "Arztpool is a platform connecting patients with doctors. It provides features like booking appointments, virtual consultations, and more.",
    img: Arztpool,
    link: "https://arztpool.de"
  },
  {
    name: "Velo",
    description: "Velo is a cycling app that helps users track their rides, find new routes, and connect with other cyclists.",
    img: Velo,
    link: "https://www.velo-hub.de"
  }
];

function Projects() {
  return (
    <section name="projects" className="w-full min-h-screen bg-gray-950 text-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-5xl font-bold tracking-wide text-teal-400">Projects</h2>
          <p className="mt-4 text-lg text-gray-400">
            These are the projects I have worked on over the years.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img className="w-full h-48 object-cover" src={project.img} alt={`${project.name} Project`} />
              <div className="p-6">
                <h5 className="text-2xl font-bold tracking-tight text-teal-400 mb-4">
                  {project.name}
                </h5>
                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-teal-400 rounded-lg hover:bg-teal-300 transition duration-300"
                >
                  Live
                  <svg className="w-4 h-4 ml-2 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
