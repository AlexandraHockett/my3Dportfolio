import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'

const InfoBox =({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
  1:(
    <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Alexandra</span>👋
      <br/>
      A Software Developer from Portugal
      </h1>
        
  ),
  2:(
    <InfoBox 
      text="Through dedicated workshops and intensive classes, I have gained substantial knowledge and honed a variety of skills that have enabled me to develop the projects featured in my portfolio. My commitment to learning and passion for this field are reflected in the quality and creativity of my work"
      link="/about"
      btnText="Learn more"
    />
  ),
  3:(
    <InfoBox 
      text="Driven by a passion for learning, I have successfully completed numerous projects through hands-on workshops and comprehensive classes. Curious about the impact? Explore my portfolio to see the results of my dedication and creativity"
      link="/projects"
      btnText="Visit my portfolio"
    />

  ),
  4:(
    <InfoBox 
      text="Looking for someone to bring your project to life or need a developer with fresh insights? I'm just a message away, ready to turn your ideas into reality?"
      link="/contact"
      btnText="Let's talk"
    />

  )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo