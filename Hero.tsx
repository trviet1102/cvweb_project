import React, { useTransition } from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return(
        <section className='hero-container' id ='home'>
            <div className ='hero-content'>
            <div className ='hero-left'>
            <h2 className='greeting'>{t('Hi_hero')}</h2>
            <h1 className ='name'>
                {t("I'M_hero")} <span className='highlight'>
                    TRIEU HOANG VIET</span>
            </h1>

            <div className='typewriter-box'>
                <Typewriter
                options={{
                    strings:[t('frontend_dev_hero')],
                    autoStart: true,
                    loop:true,
                    deleteSpeed:50,
                }}
                />
            </div>
                
                <div className='about-socials'>
                    <a href='https://github.com/trviet1102' 
                    target='_blank' 
                    rel='noopener noreferrer '
                    className='social-link'>GitHub</a>
                    
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trieuvietk21c@gmail.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    className='social-link'>Email</a>
                </div>
            </div>

            <div className='hero-right'>
                <div className='code-window'>
                    <div className='code-header'>
                        <span className='dot red'></span>
                        <span className='dot green'></span>
                        <span className='dot yellow'></span>
                    </div>
                    <div className='code-body'>
                <code>
                    <p><span className ='keyword'> const </span><span className='variable'>developer</span>={'{'}</p>
                    <p>&nbsp;&nbsp;name: <span className="string">'Trieu Hoang Viet'</span>,</p>
                <p>&nbsp;&nbsp;skills: [<span className="string">'React'</span>, <span className="string">'Java'</span>, <span className="string">'SQL'</span>, <span className="string">'Dart (Flutter)', <span className="string">'JavaScript'</span></span>],</p>
                <p>&nbsp;&nbsp;hardWorker: <span className="boolean">true</span>,</p>
                <p>&nbsp;&nbsp;quickLearner: <span className="boolean">true</span>,</p>
                <p>&nbsp;&nbsp;hireable: <span className="keyword">function</span>() {'{'}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> this.hardWorker && this.skills.length {'>='} <span className="number">5</span>;</p>
                <p>&nbsp;&nbsp;{'}'}</p>
                <p>{'}'};</p>
                </code>
                </div>
                </div>
                </div>
                
            </div>
        </section>

        
    );
};

export default Hero;