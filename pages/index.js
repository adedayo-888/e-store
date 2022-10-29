import React from 'react';

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h1>Best selling speakers</h1>
        <p>Great value for Money</p>
      </div>
      <div>{['product1', 'product2'].map((product) => product)}</div>
      Footer
    </>
  );
};

export default Home;
