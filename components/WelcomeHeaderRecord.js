import React from 'react';

export default function WelcomeHeaderRecord({details}) {
  return (
    <>
      {/* ======= Hero / Welcome Section ======= */}
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <h1>{details.title}</h1>
          <h2>{details.description}</h2>
          <a href='#about' className='btn-get-started scrollto'>
            {details.buttonText}
          </a>
        </div>
      </section>
    </>
  );
}
