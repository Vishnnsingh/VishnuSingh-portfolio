import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import Popup from './Popup';
const InfoBox = ({ text, link, btnText }) => (

    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
         {btnText}
         <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent ={
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 ">
            Hi, I am <span className="font-semibold">Er. vishnu Singh</span>👋
            <br />
            A passionate Software Engineer hailing from Bihar.

        </h1>
    ),
    2: (
        <InfoBox
         text="Worked  with some companies and picked up many skills along the way"
         link="/about"
         btnText="Discover more about me"
        />
    ),
    3: (
        <InfoBox
        text="Successfully managed and delivered multiple projects over the years, driving impactful results."
        link="/projects"
        btnText="Visit my portfolio"
       />
    ),
    4: (
        <InfoBox
        text="Got a project in mind or need a developer? I'm just a message away! Contact me if you have something for me."
        link="/contact"
        btnText="Let's talk"
       />
    )
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
