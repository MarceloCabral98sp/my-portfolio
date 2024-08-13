import React from 'react';
import './home.scss';

interface ProjectsProps {
    scrollToProjects: () => void;
}

const Home = React.forwardRef<HTMLDivElement, ProjectsProps>(({scrollToProjects}, ref) => {
    return(
        <section className='home-section'>
            <div className='home-section__content'>
                <h1 className='home-section__content--title'>Olá! Me chamo Marcelo Cabral</h1>
                <p className='home-section__content--subtitle'>Sou um Desenvolvedor Web apaixonado por tecnologia, estou no mercado de TI desde 2019 com experiência em Desenvolvimento e QA.</p>
            
            
                <div className='home-section__content--button' ref={ref} onClick={scrollToProjects}>
                    <a className='btn' onClick={scrollToProjects}>Projetos</a>
                </div>
            </div>


        </section>
    );
});

export default Home;