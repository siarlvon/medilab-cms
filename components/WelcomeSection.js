import React from 'react';
import CalloutRecord from './CalloutRecord';
import WelcomeHeaderRecord from './WelcomeHeaderRecord';

export default function WelcomeSection({details}) {
  console.log(details);

  if (details.__typename === 'WelcomeHeaderRecord') {
    return <WelcomeHeaderRecord details={details} />;
  } else if (details.__typename === 'CalloutRecord') {
    return <CalloutRecord details={details} />;
  }
}
