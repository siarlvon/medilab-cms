import React from 'react';
import WelcomeHeaderRecord from './WelcomeHeaderRecord';
import WhyUsSectionRecord from './WhyUsSectionRecord';

export default function WelcomeSection({details}) {
  console.log(details);

  if (details.__typename === 'WelcomeHeaderRecord') {
    return <WelcomeHeaderRecord details={details} />;
  } else if (details.__typename === 'WhyUsSectionRecord') {
    return <WhyUsSectionRecord details={details} />;
  } else if (details.__typename === 'WhyUsSectionRecord') {
    return <WhyUsSectionRecord details={details} />;
  }
}
