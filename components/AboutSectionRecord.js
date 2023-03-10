import React from 'react';

export default function AboutSectionRecord({details}) {
  return (
    <>
      {/* ======= About Section ======= */}
      <section id='about' className='about'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative'>
              <a href='https://youtu.be/pOq9N5YzqV0' className='glightbox play-btn mb-4'></a>
            </div>

            <div className='col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5'>
              <h3>{details.title}</h3>
              <p>{details.description}</p>

              <div className='icon-box'>
                <div className='icon'>
                  <i className='bx bx-fingerprint'></i>
                </div>
                <h4 className='title'>
                  <a href=''>Lorem Ipsum</a>
                </h4>
                <p className='description'>
                  Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident
                </p>
              </div>

              <div className='icon-box'>
                <div className='icon'>
                  <i className='bx bx-gift'></i>
                </div>
                <h4 className='title'>
                  <a href=''>Nemo Enim</a>
                </h4>
                <p className='description'>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                  deleniti atque
                </p>
              </div>

              <div className='icon-box'>
                <div className='icon'>
                  <i className='bx bx-atom'></i>
                </div>
                <h4 className='title'>
                  <a href=''>Dine Pad</a>
                </h4>
                <p className='description'>
                  Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut
                  eligendi omnis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
}
