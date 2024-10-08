import React from 'react';
import "./Tech.css";
import { TechstackList } from '../utils/TechstackList'; // Ensure correct import path

const Tech = () => {
  return (
    <div className='container techstack' id="Tech Stack">
      <h2 className='col-12 mt-3 mb-1 text-center'>
        Technologies Stack
      </h2>
      <hr />
      <p className='pb-3 text-center'>
        Including programming languages, frameworks, databases, development APIs, front-end tools, and back-end tools.
      </p>
      <div className='row'>
        {TechstackList.map((tech) => (
          <div key={tech._id} className='col-6 col-md-3'> {/* Responsive adjustments */}
            <div className='card m-2 tech-card'>
              <div className='card-content'>
                <div className='card-body'>
                  <div className='media d-flex justify-content-center'>
                    <div className='align-self-center'>
                      <tech.icon className='tech-icon' aria-hidden="true" />
                    </div>
                    <div className='media-body'>
                      <h5 className='text-center'>{tech.name}</h5> {/* Center text for better alignment */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
