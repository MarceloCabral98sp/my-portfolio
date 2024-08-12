import { forwardRef } from "react";
import styled from "styled-components";

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <ProjectsSection ref={ref}>
            <ProjectsContainer>
                <ProjectsHeader>
                    <h1>Projetos</h1>
                    <p>Aqui você encontrará alguns dos meus projetos pessoais que criei e que estão por vir</p>
                </ProjectsHeader>
            
                <div>
                    <ProjectCard>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <HomeButton>
                                <a className="btn">Ver Caso</a>
                            </HomeButton>
                        </div>
                    </ProjectCard>

                    <ProjectCard>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <HomeButton>
                                <a className="btn">Ver Caso</a>
                            </HomeButton>
                        </div>
                    </ProjectCard>

                    <ProjectCard>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <HomeButton>
                                <a className="btn">Ver Caso</a>
                            </HomeButton>
                        </div>
                    </ProjectCard>
                </div>
            </ProjectsContainer>
        
        </ProjectsSection>
    )
});

const ProjectsSection = styled.section`
    padding: 60px 0;
`;

const ProjectsContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: auto;
`;

const ProjectsHeader = styled.div`

    text-align: center;
    margin-bottom: 60px;

    h1 {
        margin-bottom: 24px;
    }
`;  

const ProjectCard = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 5rem;
    margin-bottom: 40px;

    img {
        max-width: 513px;
        width: 100%;
        height: 316px;
        border: 5px solid #666666;
        border-radius: 4px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div h2 {
        margin-bottom: 24px;
    }
`;

const HomeButton = styled.div`
    margin-top: 48px;
    text-align: center;

    a {
        text-decoration: none;
    }
`;


export default Projects;