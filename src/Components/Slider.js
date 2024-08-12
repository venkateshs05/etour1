import React, { useState } from 'react';
import './Slider.css';
import { Button } from 'react-bootstrap'; 
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Slider = () => {
  const { t } = useTranslation(); 
  const [activeBtn, setActiveBtn] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBtnClick = (index, src) => {
    setActiveBtn(index);
    const videoElement = document.querySelector('#video-slider');
    if (videoElement) {
      videoElement.src = src;
    }
  };

  const handleButtonClick = () => {
    document.querySelector('.ref').scrollIntoView(true);
    navigate(`/Home`);
  };

  // Generate a unique key for the video element to force re-rendering
  const videoKey = location.pathname === '/' ? Date.now() : null;

  return (
    <div>
      {location.pathname === '/' && ( // Only render content on the homepage
        <section className="home" id="home">
          <div className="content">
            <h4>{t('Embark on a journey of a lifetime')}</h4>
            <p>{t('Every path leads to new experiences')}</p>
            <Button variant="primary" onClick={handleButtonClick}>
              {t('discover more')}
            </Button>
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
              src="vid-1.mp4"
              id="video-slider"
              key={videoKey} // Key prop to force re-rendering
              loop
              autoPlay
              muted
              controls={false} // Disable default controls
              controlsList="nodownload" // Disable download button
            ></video>
          </div>
        </section>
      )}
    </div>
  );
};

export default Slider;
