import { useState } from 'react';
import { services } from '../data';
import Title from './Title';
import Service from './Service';

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const removeService = (id) => {
    const newServices = servicesData.filter((service) => service.id !== id);
    setServicesData(newServices);
  };

  const restoreServices = () => {
    setServicesData(services);
  };

  // Handle empty state
  if (servicesData.length === 0) {
    return (
      <section className='section services' id='services'>
        <Title title='our' subTitle='services' />
        <div className='section-center services-center'>
          <p>No services left</p>
          <button className='btn' onClick={restoreServices}>
            Refresh
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} removeService={removeService} />;
        })}
      </div>
    </section>
  );
};

export default Services;