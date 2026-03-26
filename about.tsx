import './about.css';
import aboutImg from './assets/dark.jpg';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const About = () => {

    const { t } = useTranslation();
    return(
        <section className='about-section' id='about'>
            <div className="about-card-container">
                <div className='about-card'>
                <img src={aboutImg} alt="Trieu Hoang Viet" className="about-profile-img" />
                </div>

                <div className="about-overlay"></div>

            <div className='about-container'>
                <h2 className="about-title">{t('about_me')} <span className="highlight">{t('me')}</span></h2>
                   <p className='about-text'>
                    {t('about_text')}
                    </p>
                    <div className="about-contact-info">
                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>Ha Noi, Viet Nam</span>
                        </div>
                        <div className="contact-item">
                            <FaPhoneAlt className="contact-icon" />
                            <span>+84 869 643 058</span> 
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;