import './projects.scss';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((_, ref) => {

    const { t } = useTranslation();

    return(
        <section className='projects-section' ref={ref}>
            <div className='projects-section__container'>
                <div className='projects-section__header'>
                    <h1>{ t('pages.projects.title')}</h1>
                    <p>{ t('pages.projects.subtitle')}</p>
                </div>

                <div>
                    <div className='projects-section__project-card'>
                        <img src="/assets/images/coming-soon.jpg" alt={ t('pages.projects.coming-soon') } />
                        <div>
                            <h2>{ t('pages.projects.projects.0.project-title') }</h2>
                            <p>{ t('pages.projects.projects.0.project-description') }</p>
                        
                            <button className='btn'>
                                { t('pages.projects.button') }
                            </button>
                        </div>
                    </div>

                    <div className='projects-section__project-card'>
                        <img src="/assets/images/coming-soon.jpg" alt={ t('pages.projects.coming-soon') } />
                        <div>
                            <h2>{ t('pages.projects.projects.1.project-title') }</h2>
                            <p>{ t('pages.projects.projects.1.project-description') }</p>
                        
                            <button className='btn'>
                                { t('pages.projects.button') }
                            </button>
                        </div>
                    </div>

                    <div className='projects-section__project-card'>
                        <img src="/assets/images/coming-soon.jpg" alt={ t('pages.projects.coming-soon') } />
                        <div>
                            <h2>{ t('pages.projects.projects.2.project-title') }</h2>
                            <p>{ t('pages.projects.projects.2.project-description') }</p>
                        
                            <button className='btn'>
                                { t('pages.projects.button') }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Projects;