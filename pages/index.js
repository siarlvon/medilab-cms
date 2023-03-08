import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {gql, GraphQLClient} from 'graphql-request';
import WelcomeSection from '@/components/WelcomeSection';

const inter = Inter({subsets: ['latin']});

export default function Home({welcome}) {
  console.log(welcome);
  return (
    <>
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
        ... on PageHeaderRecord {
          __typename
          title
          buttonText
          description
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
