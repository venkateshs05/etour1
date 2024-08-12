import React, { useState } from 'react';
import './Slider.css';
import {Button} from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Slider = () => {
  const{t} = useTranslation();
  const [activeBtn, setActiveBtn] = useState(0);
  const navigate = useNavigate();
  const handleBtnClick = (index, src) => {
    setActiveBtn(index);
    document.querySelector('#video-slider').src = src;
  };

  const handleButtonClick=()=>{
  
    document.querySelector('.ref').scrollIntoView(true);
    navigate(`/Home`);
  }
  return (
    <div>
      <section className="home" id="home">
        <div className="content">
          <h4>{t('Embark on a journey of a lifetime')}</h4>
          <p> {t('Every path leads to new experiences')}</p>

          {/* <a href="#" className="btn">
            discover more
          </a> */}
          {/* <Button variant="primary" onClick={() => navigate(`/Home`)}>
          discover more
          </Button> */}
          <Button variant="primary" onClick={handleButtonClick}>{t('discover more')}</Button>
        </div>

        <div className="controls">
          {[1, 2, 3, 4, 5].map((index) => (
            <span
              key={index}
              className={`vid-btn ${index === activeBtn ? 'active' : ''}`}
              data-src={`images/images/vid-${index}.mp4`}
              onClick={() =>
                handleBtnClick(index, `images/images/vid-${index}.mp4`)
              }
            ></span>
          ))}
        </div>

        <div className="video-container">
          <video
            src="WhatsApp Video 2024-08-11 at 17.00.40_194e1dba.mp4"
            id="video-slider"
            loop
            autoPlay
            muted
            controls={false} // Disable default controls
            controlsList="nodownload" // Disable download button
          ></video>
        </div>
      </section>
    </div>
  );
};

export default Slider;
