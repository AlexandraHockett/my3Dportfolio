import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, certificates } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Alexandra</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Software Developer based in Portugal. In my journey of self-improvement, I've engaged in various courses, including Introduction to Coding, Web Development, Responsive Web Development, and Advanced React Development, all through SheCodes.
        </p>
        <p>
          Transitioning from customer-facing roles in hospitality and restaurants, I discovered a deep passion and aptitude for programming and web development. Driven by my desire for a career shift, I've dedicated myself to practical learning that mirrors real-world scenarios. My approach emphasizes pragmatism, with a keen awareness of creating tangible value in collaboration with like-minded professionals.
        </p>
        <p>
          My goal is to build a portfolio showcasing how my skills can effectively address your needs. My ethos revolves around a growth mindset, unwavering dedication, and a relentless pursuit of improvement. As evidence of my commitment, I've achieved several certificates, which I'm eager to leverage in contributing positively to your team.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div key={skill.name} className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
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

      <div className='py-16'>
        <h3 className='subhead-text'>Certificates</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Here are some certificates I've achieved, showcasing my commitment to continuous learning and proficiency in specific areas. They demonstrate my dedication and the skills I've acquired through various courses.</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {certificates.map((certificate) => (
              <VerticalTimelineElement
                key={certificate.name}
                date={certificate.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={certificate.icon}
                      alt={certificate.organization}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: certificate.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: certificate.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {certificate.name}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {certificate.organization}
                  </p>
                </div>
                <img
                  src={certificate.imageUrl}
                  alt={certificate.name}
                  className='w-1/2 h-1/2 object-contain mx-auto mt-5'
                />
                <a
                  href={certificate.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:underline mt-2 block text-center'
                >
                  View Certificate
                </a>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  );
};

export default About;