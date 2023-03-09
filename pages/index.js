import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {gql, GraphQLClient} from 'graphql-request';
import WelcomeSection from '@/components/WelcomeSection';

const inter = Inter({subsets: ['latin']});

export default function Home({welcome}) {
  console.log(welcome);
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
                      <span>Deep Drop Down</span> <i class='bi bi-chevron-right'></i>
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
            <span class='d-none d-md-inline'>Realizar una</span> Cita
          </a>
        </div>
      </header>

      <div>
        {welcome.welcomeDetail.map((section) => (
          <WelcomeSection details={section} key={section.id} />
        ))}
      </div>
    </>
  );
}

const query = gql`
  query {
    welcome {
      id
      name
      slug
      welcomeDetail {
        ... on WelcomeHeaderRecord {
          __typename
          title
          buttonText
          description
          id
        }
        ... on WhyUsSectionRecord {
          __typename
          title
          description
          buttonText
          whyUsCards {
            icon
            title
            description
            id
          }
          id
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  const client = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });

  const welcome = await client.request(query);
  console.log(welcome);
  return {
    props: welcome,
  };
}
