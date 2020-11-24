import React from 'react';
import Blogs from '../components/Blogs/blogs.component';
import CardSlider from '../components/CardSlider/cardSlider.component';
import ContactUs from '../components/ContactUs/contact.component';
import Footer from '../components/Footer/footer.component';
import HeaderComponent from '../components/Headers/header.compoent';
import RegisterPlayers from '../components/RagisterPlayer/ragisterPlayer.component';
import RegisterTeams from '../components/RagisterTeams/ragisterTeams.component';
import Rankings from '../components/Rankings/ranking.component';

const HomeScreen = () => {
  return (
    <>
      <HeaderComponent />
      <Blogs />
      <CardSlider />
      <Rankings />
      <RegisterTeams />
      <RegisterPlayers />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomeScreen;
