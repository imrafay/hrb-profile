function About() {
  return (
    <div name="about" className="w-full h-screen  bg-gray-900 text-gray-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">I specialize in building robust and scalable web applications that meet diverse project needs.</div>
          <div>Throughout my career, I've honed my skills in a variety of technologies, including
            AWS, Azure, Microservices, SQL, Dapper, SignalR, Vue.js, and MongoDB. My ability
            to seamlessly integrate these technologies allows me to craft custom solutions
            that are efficient, maintainable, and tailored to specific client requirements.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
