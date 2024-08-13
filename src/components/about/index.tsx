import React from 'react';
import './about.scss';

interface AboutProps {
    scrollToContact: () => void;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(({ scrollToContact}, ref) => {

    return(
        <section className='about-section' ref={ref}>
            <div className='about-section__container'>
                <div className='about-section__container--header'>
                    <h1>Sobre</h1>
                    <p>Aqui você encontrará informações sobre mim, como a minha experiência e minhas habilidades dentro da programação</p>
                </div>
                <div className='about-section__container--description'>
                    <div className='description-info'>
                        <h2>Quem eu sou?</h2>
                        <p>
                            Eu sou apaixonado por construção de aplicações e trabalho como TI desde 2019. Terminei a graduação em Análise e Desenvolvimento de Sistemas em 2020, e desde então já tive experiência dentro da área de TI como Quality Assurance e como desenvolvedor.
                        </p>
                        <p>
                            Como desenvolvedor, atuei na modernização de uma plataforma de investimentos
                            de um grande banco utilizando Angular nas versões 8 e 12, Jasmine, Jest, CMS da Oracle, CloudBees, Google Analytics, e mais. Como QA, atuei na criação e execução de casos de testes, HP ALM, Octane e técnica BDD para desenvolvimento ágil.
                        </p>
                        <p>
                            Estou aberto a oportunidades de trabalho onde eu possa contribuir, aprender e crescer. Se você tiver uma oportunidade que corresponda às minhas habilidades e experiência, entre em contato comigo.
                        </p>
                        <div className='info-button' ref={ref} onClick={scrollToContact}>
                            <a className='btn' onClick={scrollToContact}>Contatar</a>
                        </div>
                    </div>

                    <div className='description-info'>
                        <h2>Habilidades</h2>
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