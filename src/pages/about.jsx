import React from 'react';

const About = () => {
  return (
    <div className='p-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold text-slate-800'>About Webtor</h1>
      </header>

      <section className='mb-6'>
        <h2 className='text-2xl mb-4 text-slate-800'>Our Mission</h2>
        <p>At Webtor, our mission is to make high-quality frontend development education accessible to everyone. We believe that with the right guidance and resources, anyone can become a skilled developer. Our comprehensive courses are designed to take you from a complete beginner to an expert, with hands-on projects and real-world applications.</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl mb-4 text-slate-800'>About Me</h2>
        <p>I am a professional frontend developer that has learnt upto 4 years of frontend web dev. my goal is to filter out all the unnecesarry information i have recieved and put to you only the neccesary ones. also i will be the mentor figure foryou to make your frontend jounery smooth and flawless</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl mb-4 text-slate-800'>Why Choose Webtor?</h2>
        <ul className='list-disc list-inside'>
          <li>Learning how to learn: learn how to learn new things fast using the latest AI technologies like Chat-GPT and how you can make your coding fast using them.</li>
          <li>Comprehensive Curriculum: Cover everything from basic HTML and CSS to advanced JavaScript and React plus some frameworks like tailwind and next.js also UI-UX and project management.</li>
          <li>Hands-On Projects: Build real-world projects that you can showcase in your portfolio.</li>
          <li>Community Support: Join a vibrant community of learners and get help and feedback from your peers.</li>
          <li>Flexible Learning: Access our courses anytime, anywhere, and learn at your own pace.</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl mb-4 text-slate-800'>Join Us Today</h2>
        <p>Are you ready to start your journey into the world of frontend development? Join Webtor today and take the first step towards a successful career in tech. We are excited to have you with us and can't wait to see what you'll create!</p>
      </section>
    </div>
  );
};

export default About;
