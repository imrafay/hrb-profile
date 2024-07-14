import Arztpool from "../assets/arztpool-portfolio.jpg";
import Rhithm from "../assets/rhithm-portfolio.jpg";
import Velo from "../assets/velo-portfolio.jpg";

function Projects() {
  return (
    <div name="projects" className="w-full min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-600">Projects</p>
          <p className="py-4">These are the projects I have worked with over the years.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Rhithm} alt="Rhithm Site" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Rhithm
              </h5>
              <p className="mb-3 text-gray-700">
                Rhithm’s check-in tool provides an opportunity for students and staff to reflect on how they’re
                feeling. In under one minute, our emoji-based check-in tool helps students to build awareness
                in five key areas of wellness. Based on their answers, our algorithm presents each student with
                a short activity to teach them essential life skills and/or to get them ready to learn.
              </p>
              <a href="https://rhithm.app" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300">
                Live
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Arztpool} alt="Arztpool Site" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Arztpool
              </h5>
              <p className="mb-3 text-gray-700">
                Arztpool is a platform connecting patients with doctors. It provides features like booking
                appointments, virtual consultations, and more.
              </p>
              <a href="https://arztpool.de" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300">
                Live
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg shadow">
            <img className="w-full h-48 object-cover rounded-t-lg" src={Velo} alt="Velo Site" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Velo
              </h5>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                Velo is a cycling app that helps users track their rides, find new routes, and connect with
                other cyclists.
              </p>
              <a href="https://www.velo-hub.de" target="_blank" rel="noreferrer" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300">
                Live
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;
