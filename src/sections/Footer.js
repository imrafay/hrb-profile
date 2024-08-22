import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 font-medium">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Designed and Developed by Hassan Rafay Baig.</p>
          <p>Built with ReactJS & Tailwind CSS. Hosted on Netlify.</p>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/imrafay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/hassanrafay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
