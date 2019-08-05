import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Rooms = () => {
  return (
    <Hero hero={'roomsHero'}>
      <Banner title="our rooms">
        <Link className="btn-primary" to={'/'}>
          go back home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Rooms;
