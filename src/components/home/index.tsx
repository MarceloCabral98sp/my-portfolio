import './home.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
    scrollToProjects: () => void;
}

const Home = React.forwardRef<HTMLDivElement, ProjectsProps>(({scrollToProjects}, ref) => {
    
    const { t } = useTranslation();

    return(
        <section ref={ref} className='home-section'>
            <div className='home-section__container'>
                <h1>{ t('pages.home.title')}</h1>
                <p>{ t('pages.home.subtitle')}</p>
            
                <div className="home-section-container-btn">
                    <button className='home-section__container-button btn' onClick={ scrollToProjects }>{ t('pages.home.button') }</button>
                </div>
            </div>
        </section>
    );
});

export default Home;