import React from 'react';
import AboutSectionRecord from './AboutSectionRecord';
import AppointmentSectionRecord from './AppointmentSectionRecord';
import CountsSectionRecord from './CountsSectionRecord';
import ServicesSectionRecord from './ServicesSectionRecord';
import WelcomeHeaderRecord from './WelcomeHeaderRecord';
import WhyUsSectionRecord from './WhyUsSectionRecord';

export default function WelcomeSection({details}) {
  console.log(details);

  if (details.__typename === 'WelcomeHeaderRecord') {
    return <WelcomeHeaderRecord details={details} />;
  } else if (details.__typename === 'WhyUsSectionRecord') {
    return <WhyUsSectionRecord details={details} />;
  } else if (details.__typename === 'AboutSectionRecord') {
    return <AboutSectionRecord details={details} />;
  } else if (details.__typename === 'CountsSectionRecord') {
    return <CountsSectionRecord details={details} />;
  } else if (details.__typename === 'ServicesSectionRecord') {
    return <ServicesSectionRecord details={details} />;
  } else if (details.__typename === 'AppointmentSectionRecord') {
    return <AppointmentSectionRecord details={details} />;
  }
}
