import React from 'react';
import ImageSrc from '../ImageSrc/ImageSrc';
import TmDb from '../../Assets/images/movie-db.png';
import '../../Styles/footer.scss';

// footer
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-center">
          <div className="col-md-6">
            <div className="ft-content">
              <div className="ft-img">
                <ImageSrc imgSrc={TmDb} />
              </div>
              <h1 className="footer-text">
                Developed &amp; designed by Vince Tañan
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
