import React from 'react';
import NavBar from '../NavBar'; 
import Slider from '../Slider';


const Home = () => {
  // Dummy campaign data (replace with actual data)
  //const campaigns = [
    //{ id: 1, title: 'Campaign 1', description: 'Description 1' },
    //{ id: 2, title: 'Campaign 2', description: 'Description 2' },
    // Add more campaign data
  //];

  return (
    <div>
      <NavBar />
      <Slider />
      <h1>Welcome to Crowdfunding Platform</h1>
      <p>Here are the campaigns available:</p>

    </div>
  );
};

export default Home;