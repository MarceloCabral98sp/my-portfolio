import React from 'react';
import './about.scss';
import { useTranslation } from 'react-i18next';

interface AboutProps {
    scrollToContact: () => void;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(({ scrollToContact}, ref) => {

    const { t } = useTranslation();
    
    return(
        <section className='about-section' ref={ref}>
            <div className='about-section__container'>
                <div className='about-section__container--header'>
                    <h1>{ t('pages.about.title')}</h1>
                    <p>{ t('pages.about.subtitle')}</p>
                </div>
                <div className='about-section__container--description'>
                    <div className='description-info'>
                        <h2>{ t('pages.about.info-title')}</h2>
                        <p>{ t('pages.about.info-description.0')}</p>
                        <p>{ t('pages.about.info-description.1')}</p>
                        <p>{ t('pages.about.info-description.2')} </p>
                        <div className='info-button' ref={ref} onClick={scrollToContact}>
                            <a className='btn' onClick={scrollToContact}>{ t('pages.about.button')}</a>
                        </div>
                    </div>

                    <div className='description-info'>
                        <h2>{ t('pages.about.skills-title')}</h2>
                        <div className='description-info__items'>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JavaScript</div>
                            <div>Angular</div>
                            <div>React</div>
                            <div>SASS</div>
                            <div>GIT</div>
                            <div>Azure</div>
                            <div>Design Respondivo</div>
                            <div>REST</div>
                            <div>SCRUM</div>
                            <div>Google Analytics</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default About;