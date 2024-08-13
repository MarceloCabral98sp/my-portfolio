import './projects.scss';
import { forwardRef } from 'react';

const Projects = forwardRef<HTMLDivElement>((props, ref) => {
    return(
        <section className='projects-section' ref={ref}>
            <div className='projects-section__container'>
                <div className='projects-section__header'>
                    <h1>Projetos</h1>
                    <p>Aqui você encontrará alguns dos meus projetos pessoais que criei e que estão por vir</p>
                </div>

                <div>
                    <div className='projects-section__project-card'>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <div className='button'>
                                <a className="btn">Ver Caso</a>
                            </div>
                        </div>
                    </div>

                    <div className='projects-section__project-card'>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <div className='button'>
                                <a className="btn">Ver Caso</a>
                            </div>
                        </div>
                    </div>

                    <div className='projects-section__project-card'>
                        <img src="src/assets/images/coming-soon.jpg" alt="Imagem sobre projeto que virá em breve" />
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, labore aspernatur! Quae quos, ad sapiente cum molestiae ipsa a earum? Optio, et voluptatum dolores sit quisquam nesciunt.</p>
                        
                            <div className='button'>
                                <a className="btn">Ver Caso</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
});

export default Projects;