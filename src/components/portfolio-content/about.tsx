import React from "react";
import styled from "styled-components";

interface AboutProps {
    scrollToContact: () => void;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(({ scrollToContact }, ref) => {

    return (
        <AboutSection ref={ref}>
            <AboutContainer>
                <AboutTitle>
                    <h1>Sobre</h1>
                    <p>Aqui você encontrará informações sobre mim, como a minha experiência e minhas habilidades dentro da programação</p>
                </AboutTitle>
                <AboutSkills>
                    <SkillsInfo>
                        <h1>Quem eu sou?</h1>
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
                        <HomeButton>
                            <a className="btn" onClick={scrollToContact}>Contatar</a>
                        </HomeButton>
                    </SkillsInfo>
                    <SkillsInfo>
                        <h1>Habilidades</h1>
                        <Skills>
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
                        </Skills>
                    </SkillsInfo>
                </AboutSkills>

            </AboutContainer>
        </AboutSection>
    )
});

const AboutSection = styled.section`
    padding: 60px 0;
    background-color: #FAFAFA;
`;

const AboutContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    width: 92%;
`;

const AboutTitle = styled.div`

    margin-bottom: 90px; 

    h1 {
        margin-bottom: 36px;
        text-transform: uppercase;
        text-align: center;
    }   

    p {
        text-align: center;
        max-width: 80rem;
        margin: auto;
    }
`;

const AboutSkills = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10rem;
`;

const SkillsInfo = styled.div`
    h1 {
        font-size: 32px;
        margin-bottom: 32px;
    }
    
    p {
        color: #666;
        margin-bottom: 8px;
    }
`;

const HomeButton = styled.div`
    margin-top: 48px;
    transform: 0.4;

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

const Skills = styled.div`
    margin-top: 16px;
    display: flex;
    flex-wrap: wrap;

    div {
        background-color: rgba(153, 153, 153, 0.2);
        color: #666; 
        border-radius: 4px;
        padding: 8px 24px;
        margin: 0 16px 16px 0;
        font-weight: 600;
    }
`;

export default About;