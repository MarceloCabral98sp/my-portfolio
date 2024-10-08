import './home.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ReactGA from 'react-ga4';
import { useNavigate } from 'react-router-dom';

interface ProjectsProps {
    scrollToProjects: () => void;
}

const Home = React.forwardRef<HTMLDivElement, ProjectsProps>(({scrollToProjects}, ref) => {
    
    const { t } = useTranslation();
    const navigate = useNavigate();

    return(
        <section ref={ref} className='home-section'>
            <div className='home-section__container'>
                <h1>{ t('pages.home.title')}</h1>
                <p>{ t('pages.home.subtitle')}</p>
            
                <div className="home-section-container-btn">
                    <button 
                        className='home-section__container-button btn' 
                        onClick={() => {
                            ReactGA.event({
                                category: 'Navigation',
                                action: 'Click',
                                label: 'Home - scroll to projects'
                            });

                            navigate('/projects', { replace: true });
                            scrollToProjects();
                        }}
                    >{ t('pages.home.button') }</button>
                </div>
            </div>
        </section>
    );
});

export default Home;