import React from 'react';
import { PROJECTS } from './../constants';

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <div className='text-center'>
      <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-300 bg-clip-text text-4xl font-bold border-b-4 border-gray-500 p-2 inline tracking-tight text-transparent">
       My Projects
      </span>
      <p className='py-6'>These are the technologies I've worked with</p>
      </div>
      <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
          <div className='w-full lg:w-1/4'>
            <img
              src={project.image}
              width={150}
              height={150}
              alt={project.title}
              className='mb-6 rounded'
            />
          </div>
          <div className='w-full lg:w-3/4'>
            <h6 className='mb-2 font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-lg p-2 inline tracking-tight text-transparent'>{project.title}</h6> 
            <p className='mb-4 text-neutral-400'>{project.description}</p> {/* Corregido 'description' ...multi  */}
            
              {project.technologies.map((tech, index) => ( //se deja sin multi
                <span key={index} className='mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-teal-400'> 
                  {tech}
                </span>
                //sin multi
              ))}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Projects;
