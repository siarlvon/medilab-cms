import React from 'react';

export default function WelcomeSection({details}) {
  console.log(details);
  return (
    <>
      {/* ======= Top Bar ======= */}
      <div id='topbar' className='d-flex align-items-center fixed-top'>
        <div className='container d-flex justify-content-between'>
          <div className='contact-info d-flex align-items-center'>
            <i className='bi bi-envelope'></i>
            <a href='mailto:contact@example.com'>test@naowee.com</a>
            <i className='bi bi-phone'></i> +57 123456789
          </div>
          <div className='d-none d-lg-flex social-links align-items-center'>
            <a href='#' className='twitter'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='#' className='facebook'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='#' className='instagram'>
              <i className='bi bi-instagram'></i>
            </a>
            <a href='#' className='linkedin'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
      </div>

      {/* ======= Header ======= */}
      <header id='header' class='fixed-top'>
        <div class='container d-flex align-items-center'>
          <h1 class='logo me-auto'>
            <a href='index.html'>Medilab</a>
          </h1>
          {/* Uncomment below if you prefer to use an image log */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

          <nav id='navbar' class='navbar order-last order-lg-0'>
            <ul>
              <li>
                <a class='nav-link scrollto active' href='#hero'>
                  Inicio
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#about'>
                  Acerca De
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#services'>
                  Servicios
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#departments'>
                  Oficinas
                </a>
              </li>
              <li>
                <a class='nav-link scrollto' href='#doctors'>
                  Doctores
                </a>
              </li>
              <li class='dropdown'>
                <a href='#'>
                  <span>Drop Down</span> <i class='bi bi-chevron-down'></i>
                </a>
                <ul>
                  <li>
                    <a href='#'>Drop Down 1</a>
                  </li>
                  <li class='dropdown'>
                    <a href='#'>
                      <span>Deep Drop Down</span>{' '}
                      <i class='bi bi-chevron-right'></i>
                    </a>
                    <ul>
                      <li>
                        <a href='#'>Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href='#'>Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>Drop Down 2</a>
                  </li>
                  <li>
                    <a href='#'>Drop Down 3</a>
                  </li>
                  <li>
                    <a href='#'>Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class='nav-link scrollto' href='#contact'>
                  Contacto
                </a>
              </li>
            </ul>
            <i class='bi bi-list mobile-nav-toggle'></i>
          </nav>
          {/* .navbar */}

          <a href='#appointment' class='appointment-btn scrollto'>
            <span class='d-none d-md-inline'>Realizar una</span>
            Cita
          </a>
        </div>
      </header>

      {/* ======= Hero / Welcome Section ======= */}
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <h1>Bienvenido a Medilab</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa,
            soluta?
          </h2>
          <a href='#about' className='btn-get-started scrollto'>
            Conócenos
          </a>
        </div>
      </section>
    </>
  );
}
