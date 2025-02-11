import { projects } from "../constants"
import { Link } from "react-router-dom"
// import { arrow } from "../assets/icons"
import CTA from "../components/CTA"
import { useState } from "react";


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  console.log("Projects data:", projects); 

  const filteredProjects =
  selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.type === selectedCategory);

  return (
    <section className='max-container shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px] '>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        I've embarked on numerous projects throughout the years, but these are
        the ones I hold closest to my heart. Many of them are open-source, so if
        you come across something that piques your interest, feel free to
        explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>
      
      
      {/* <div className='flex flex-wrap my-20 gap-4  w-full h-full '>
       <button className="bg-blue-600  text-black w-28 h-10 rounded-lg hover:bg-red-700">All</button>
       <button className="bg-blue-600  text-black w-28 h-10 rounded-lg hover:bg-red-700">Html & Css</button>
       <button className="bg-blue-600  text-black w-28 h-10 rounded-lg hover:bg-red-700">Java Script</button>
       <button className="bg-blue-600  text-black w-28 h-10 rounded-lg hover:bg-red-700">React.js</button>
      </div> */}


      <div className='flex flex-wrap my-20 gap-4 w-full h-full'>
        {["All", "Html Css", "Java Script", "React"].map((type) => (
          <button
            key={type}
            className={`w-28 h-10 rounded-lg text-black ${
              selectedCategory === type ? 'bg-blue-600  text-white w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md' : 'text-blue-600 bg-white   w-20 h-10 rounded-lg items-center justify-center flex font-bold shadow-md'
            }`}
            onClick={() => setSelectedCategory(type)}
          >
            {type}
          </button>
        ))}
      </div>
      
      <div className='flex flex-wrap my-20 gap-16'>
        {filteredProjects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}> 
            <div className='block-container w-12 h-12 '>
              <div className={`btn-back rounded-xl   ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,_rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,_rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,_rgba(0,0,0,0.06)_0px_2px_1px,_rgba(0,0,0,0.09)_0px_4px_2px,_rgba(0,0,0,0.09)_0px_8px_4px,_rgba(0,0,0,0.09)_0px_16px_8px,_rgba(0,0,0,0.09)_0px_32px_16px]'>
                {/* <img
                  src={project.imageUrl}
                  alt={project.name}
                  className='w-1/2 h-1/2 object-contain'
                /> */}
              </div>
            </div>

            <div className='mt-5 pt-5  h-[320px] w-[200px]flex flex-col hover:animate-shake pl-6 pr-6 pb-4 bg-[rgba(30,151,190,0.4)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[7px] webkit-backdrop-blur-[7px] rounded-[10px] border border-[rgba(255,255,255,0.18)] '>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              {/* <p className='mt-2 text-black-500'>{project.description}</p> */}
              <img
                   src={project.imageUrl}
                   alt={project.name}
                  className='w-full h-[200px] object-contain'
                />
              <div className='mt-2  flex items-center gap-2 font-poppins w-28 h-8 pl-3 shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,_rgba(0,0,0,0.25)_0px_0.125em_0.5em,_rgba(255,255,255,0.1)_0px_0px_0px_1px_inset] bg-green-500 rounded hover:bg-red-500'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;

