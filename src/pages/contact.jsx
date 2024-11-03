import React from 'react';

const Contact = () => {
  return (
    <div className='p-10'>
      <header className='mb-8'>
        <h1 className='text-4xl font-bold'>Contact Us</h1>
      </header>

      <section className='mb-6'>
        <h2 className='text-2xl mb-4'>Get in Touch</h2>
        <p>Contact me to get into the course at my discord or my email. happy coding!</p>
      </section>

      <section className='mb-6'>
        <h2 className='text-2xl mb-4'>Contact Information</h2>
        <ul className='list-disc list-inside'>
          <li>Email: nat0i0yoh@gmail.com</li>
          <li>Discord: <a href="https://discord.com/users/nat_i_yoh" className='text-blue-500'>@nat_i_yoh</a></li>
        </ul>
      </section>

      

      
      
    </div>
  );
};

export default Contact;
