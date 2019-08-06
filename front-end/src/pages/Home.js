import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe experience starting at $299">
          <Link className="btn-primary" to={'/rooms'}>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
};

export default Home;
