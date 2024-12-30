import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA"

import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";
// import PointerParticles from "../components/PointerParticles";
import Popup from "../components/Popup";

const About = () => {
   
  


  return (

    <section className=' max-container border-b-red-700 border-solid shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px] '>
      {/* <PointerParticles /> */}

     
      <h1 className='head-text flex'>
        Hello, I'm{" "} 
        <span className="ml-4 blue-gradient_text font-semibold drop-shadow">
        
          <Popup />
       
        </span>
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
        Full Stack Developer (MERN) | Software Engineer | Crafting Efficient, Scalable, and Innovative Software Solutions
        </p>
      </div>

      

      







      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12 '>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl hover:bg-blue-500 transition-colors duration-300' />
              <div className='btn-front rounded-xl flex justify-center shadow-[rgba(0,0,0,0.17)_0px_-23px_25px_0px_inset,rgba(0,0,0,0.15)_0px_-36px_30px_0px_inset,rgba(0,0,0,0.1)_0px_-79px_40px_0px_inset,rgba(0,0,0,0.06)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px] items-center hover:bg-blue-500 transition-colors duration-300'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16 bg-transparent'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex shadow-[rgba(50,50,93,0.25)_0px_30px_60px_-12px_inset,_rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset] bg-gray-400'>
          <VerticalTimeline >
            {experiences.map((experience, index) => (
              <VerticalTimelineElement 
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full  '>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                  
                }}
              >
                <div className="shadow-[rgba(0,0,0,0.25)_0px_0.0625em_0.0625em,rgba(0,0,0,0.25)_0px_0.125em_0.5em,rgba(255,255,255,0.1)_0px_0px_0px_1px_inset] rounded	bg-sky-500 pl-5">
                  <h3 className='text-black text-xl font-poppins font-semibold  '>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm  '
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-red-500 ' />

      <CTA />
    </section>
  );
};

export default About;


