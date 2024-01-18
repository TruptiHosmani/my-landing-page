// Example code for Projects.js
import React from 'react';
import world from '../world.svg';
import { Link } from 'react-router-dom'; // Import Link

const Projects = () => {
  return (
    <section id="projects" className="p-4">
      <h2 className="text-3xl font-bold p-2">Projects</h2>
      {/* Project items */}
      <div className="grid grid-cols-2 gap-8">
        {/* on clicking should take you to the all page */}
        <Link to="/all"> {/* Add Link here */}
          <div className="shadow-md flex flex-col justify-between p-4">
            <h2 className="text-xl font-semibold mb-2">REST World API</h2>
            <h3 className="text-base mb-4">REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.</h3>
            <img src={world} alt="Project 1" />
          </div>
        </Link>

        <Link to="/all"> {/* Add Link here */}
          <div className="shadow-md flex flex-col justify-between p-4">
            <h2 className="text-xl font-semibold mb-2">REST World API</h2>
            <h3 className="text-base mb-4">REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.</h3>
            <img src={world} alt="Project 1" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
