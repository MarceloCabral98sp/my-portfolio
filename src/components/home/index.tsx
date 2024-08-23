import React from 'react';
import './home.scss';
import { useTranslation } from 'react-i18next';

interface ProjectsProps {
    scrollToProjects: () => void;
}

const Home = React.forwardRef<HTMLDivElement, ProjectsProps>(({scrollToProjects}, ref) => {
    
    const { t } = useTranslation();

    return(
        <section ref={ref} className='home-section'>
            <div className='home-section__content'>
                <h1 className='home-section__content--title'>{ t('pages.home.title')}</h1>
                <p className='home-section__content--subtitle'>{ t('pages.home.subtitle')}</p>
            
            
                <div className='home-section__content--button'  onClick={scrollToProjects}>
                    <a className='btn' onClick={scrollToProjects}>{ t('pages.home.button')}</a>
                </div>
            </div>


        </section>
    );
});

export default Home;