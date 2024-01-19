// Example code for Projects.js
import React from 'react';
import map from '../map.png';
import bigHero from '../bg-hero.jpg';
import proj3 from '../proj3.jpeg';
import { Link } from 'react-router-dom'; // Import Link

const Projects = () => {
  return (
      <div className="bg-white py-8 sm:py-32" id="projects">
        <div className="mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Projects</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">I have dedicated a significant amount of time to various projects, finding great joy in the journey of creating things from scratch. Below, you'll find some of my most valued projects that showcase my skills and proficiency. My experience includes a wide range of smaller projects stemming from diverse courses and challenges, each focused on solidifying my foundational knowledge. You are welcome to view these on my GitHub</p>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
              <span className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</span>
              <span className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></span>
            </div> */}
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-b border-gray-200 pb-10 sm:mt-16 sm:pb-16 lg:mx-0 lg:max-w-none lg:grid-cols-3  lg:flex lg:flex-wrap lg:items-stretch">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <Link to={`/all`}>
                <div className="shadow-lg flex flex-col justify-between p-4 hover:bg-indigo-100 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">REST World API</h2>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">REST API</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Tailwind</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">React</span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-base mb-4">REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.</h3>
                    <img src={map} alt="Project 1" />
                  </div>
                </div>
              </Link>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <Link to="/pricing">
                <div className="shadow-lg flex flex-col justify-between p-4 hover:bg-indigo-100 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">Pricing Page</h2>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">REST API</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Tailwind</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">React</span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-base mb-4">Pricing page Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</h3>
                    <img src={proj3} alt="Project 1" />
                  </div>
                </div>
              </Link>
            </article>

            <article className="flex max-w-xl flex-col items-start justify-between">
              <Link to={`/bmi`}>
                <div className="shadow-lg flex flex-col justify-between p-4 hover:bg-indigo-100 rounded-lg">
                  <h2 className="text-xl font-semibold mb-2">BMI calculator</h2>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">Jan 18, 2024</time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">React</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Tailwind</span>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">react-gauge-chart</span>
                  </div>
                  <div className="group relative">
                    <h3 className="text-base mb-4">Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. View the BMI tables or use the tool below to compute yours.</h3>
                    <img src={bigHero} alt="Project 1" />
                  </div>
                </div>
              </Link>
            </article>

          </div>
        </div>
      </div>
  );
};

export default Projects;
