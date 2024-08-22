import { useEffect, useState } from 'react';

function Banner() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100); // Add delay for animation effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      name="home"
      className="relative w-full h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-100 flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-overlay opacity-50"></div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col justify-center space-y-6 z-10 relative">
        <p className={`text-teal-400 text-lg sm:text-xl transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          Hi, my name is
        </p>
        <h1 className={`text-5xl sm:text-7xl font-extrabold text-white leading-tight transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          Hassan Rafay Baig
        </h1>
        <h2 className={`text-3xl sm:text-5xl font-semibold text-gray-300 leading-tight transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          I am a Full Stack Developer
        </h2>
        <p className={`text-lg sm:text-xl text-gray-400 max-w-lg transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          I am a dedicated software developer with a strong background in
          creating and maintaining robust applications. Currently, I hold a
          permanent position at a reputable company, where I utilize my skills
          in software engineering to drive innovative solutions and ensure
          seamless performance.
        </p>
        <a
          href="https://www.linkedin.com/in/hassanrafay/"
          className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out"
        >
          Contact Me
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}

export default Banner;
