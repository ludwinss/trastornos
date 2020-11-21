import React from 'react';

import Header from '../layouts/Header/Header';
import Jumbotron from '../layouts/Jumbotron';
import MainContainer from '../layouts/MainContainer';
import Footer from '../layouts/Footer';
import Section from '../layouts/Section';
import logo from '../../images/logo.png';
import bgHomePage from '../../images/fondo.jpg';
import brain from '../../images/brain.png';

export default function HomePage(){
  return(
    <>
      <Header 
        logo={logo}
        title='We Can Do It'
        color='transparent'
      />
      <Jumbotron title='We Can Do It'
        subtitle='Psicology for Everyone'
        brain={brain} 
        fondo={bgHomePage}>
      </Jumbotron>
      <MainContainer>
        <Section/>
      </MainContainer>
      <Footer title='We can Do It'/>
    </>
  );
}
