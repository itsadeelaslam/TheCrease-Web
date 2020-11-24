import React from 'react';
import { getSliderConfig } from '../../utils/sliderConfig';
import { SliderNextArrow, SliderPrevArrow } from '../CardSlider/sliderNavigation.component';
import Slider from 'react-slick';

import '../RagisterTeams/style.css';

const team = [
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
  {
    name: 'Ali',
    level: 'Club',
    position: '1',
  },
];

const RegisterPlayers = () => {
  const settings = getSliderConfig(<SliderNextArrow />, <SliderPrevArrow />);
  return (
    <div className="browse-brand-main">
      <div className="browse-brand-container">
        <div className="border-none d-flex justify-content-center m-2" style={{backgroundColor: '#282C2F', borderRadius: '10px'}}>
          <h1 className="clr-white">REGISTER PLAYERS</h1>
        </div>
        <Slider {...settings}>
          {team &&
            team.map((i, index) => (
              <div key={index} className="container">
                <div style={{backgroundColor: '#282C2F', padding: '5px', borderRadius: '10px'}}>
                <div className="w-100">
                  <img className="w-100" src={require('../../assets/teamLogo.jpg')} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.name}</p>
                </div>
                <div className="d-flex w-100">
                  <div className="w-50 d-flex justify-content-center align-items-center">
                    <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.level}</p>
                  </div>
                  <div className="w-50 d-flex justify-content-center align-items-center">
                    <p className="m-0 p-0" style={{color: 'whitesmoke'}}>{i.position}</p>
                  </div>
                  </div>
                  </div>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default RegisterPlayers;
