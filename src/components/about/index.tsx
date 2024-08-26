import './about.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

interface AboutProps {
    scrollToContact: () => void;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(({ scrollToContact}, ref) => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'Angular',
        'React',
        'SASS',
        'GIT',
        'Azure',
        'Design Responsivo',
        'REST',
        'SCRUM',
        'Google Analytics'
    ];
    
    return(
        <section className='about-section' ref={ref}>
            <div className='about-section__container'>
                <div className='about-section__header'>
                    <h1>{ t('pages.about.title')}</h1>
                    <p>{ t('pages.about.subtitle')}</p>
                </div>
                <div className='about-section__description'>
                    <div className='about-section__description-info'>
                        <h2>{ t('pages.about.info-title')}</h2>
                        <p>{ t('pages.about.info-description.0')}</p>
                        <p>{ t('pages.about.info-description.1')}</p>
                        <p>{ t('pages.about.info-description.2')} </p>
                        <p>{ t('pages.about.info-description.3')} </p>

                        <button 
                            className='about-section__description-button btn'
                            onClick={() => {
                                ReactGA.event({
                                    category: 'Navigation',
                                    action: 'Click',
                                    label: 'About - scroll to contact'
                                });
                                
                                navigate('/contact', { replace: true });
                                scrollToContact();
                            }}
                        >{ t('pages.about.button') }</button>
                    </div>

                    <div className='about-section__description-info'>
                        <h2>{ t('pages.about.skills-title')}</h2>
                        <div className='about-section__description-info-items'>
                            { 
                                skills.map((skill, index) => (
                                    <div key={index}>{skill}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default About;