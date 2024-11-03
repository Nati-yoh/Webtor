import React from 'react';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg'

const Home = () => {
  return (
    <div>
      <header className='p-10 py-48 bg-slate-500 flex flex-col justify-center items-center text-center'>
        <div id="cont">
          <h1 className='text-5xl mb-8'>Webtor</h1>
          <p>Build your ultimate Frontend experience</p>
        </div>
      </header>

      <section className='flex justify-evenly items-center p-10'>
        <div id="text" className='flex-1'>
          <h1 className='text-3xl mb-4'>Learn from Zero to Hero</h1>
          <p>At Webtor, we turn beginners into frontend development heroes. Our course guides you step-by-step, from basic HTML, CSS, and JavaScript to advanced frameworks like React. With hands-on projects and expert mentorship, you'll gain the skills needed to thrive in the tech industry. Join us and transform your passion into professional prowess.</p>
        </div>
        <div id="img" className='flex-1 p-4'>
          <img className='w-full h-auto' src={Img1} alt="Frontend Development" />
        </div>
      </section>

      <section className='flex justify-evenly items-center p-10'>
      <div id="img" className='flex-1 p-4'>
          <img className='w-full h-auto' src={Img2} alt="Frontend Development" />
        </div>

        <div id="text" className='flex-1'>
          <h1 className='text-3xl mb-4'>Learn from Zero to Hero</h1>
          <p>At Webtor, we turn beginners into frontend development heroes. Our course guides you step-by-step, from basic HTML, CSS, and JavaScript to advanced frameworks like React. With hands-on projects and expert mentorship, you'll gain the skills needed to thrive in the tech industry. Join us and transform your passion into professional prowess.</p>
        </div>
        
      </section>
    </div>
  );
};

export default Home;

