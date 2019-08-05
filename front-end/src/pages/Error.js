import React from 'react';
import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Error = () => {
  return (
    <Hero>
       <Banner title="404" subtitle="page not found">
        <Link className="btn-primary" to={'/'}>
          go back home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
