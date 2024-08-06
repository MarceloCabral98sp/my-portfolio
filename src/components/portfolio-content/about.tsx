import styled from "styled-components";

const About = () => {
    return (
        <AboutContainer>
            <AboutContent>
                <AboutTitle>
                    <h1>Sobre</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iure illo similique, dicta sapiente molestias assumenda. Nobis laborum vel suscipit ipsam incidunt, illum quos excepturi!</p>
                </AboutTitle>
                <AboutSkills>
                    <div>
                        <h1>Quem eu sou?</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus tempora debitis eligendi voluptas minus nulla. Quia voluptate eos quos facere laudantium corporis accusantium voluptatibus nobis modi repellendus cumque adipisci cum sapiente provident tempore eum fuga voluptatum sequi, ipsa inventore earum suscipit velit, libero delectus! Id, quisquam? Magnam libero ad esse laudantium aspernatur temporibus earum nisi, possimus nihil soluta mollitia cum, optio pariatur molestias impedit. Optio eum hic pariatur ex numquam accusamus libero, sint magni! Voluptate dolore perferendis quis quos iste totam voluptatem aspernatur maxime accusamus non animi, nesciunt quia facere sapiente id numquam ad laborum quas quidem? Ex totam nihil fuga, laboriosam velit neque tempora dolor magni, asperiores suscipit voluptatum molestiae maiores aspernatur at! Repellat, vel.</p>
                        <HomeButton>
                        <a className="btn" href="#">Contatar</a>
                    </HomeButton>
                    </div>
                    <div>
                        <h1>Habilidades</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus delectus tempora debitis eligendi voluptas minus nulla. Quia voluptate eos quos facere laudantium corporis accusantium voluptatibus nobis modi repellendus cumque adipisci cum sapiente provident tempore eum fuga voluptatum sequi, ipsa inventore earum suscipit velit, libero delectus! Id, quisquam? Magnam libero ad esse laudantium aspernatur temporibus earum nisi, possimus nihil soluta mollitia cum, optio pariatur molestias impedit. Optio eum hic pariatur ex numquam accusamus libero, sint magni! Voluptate dolore perferendis quis quos iste totam voluptatem aspernatur maxime accusamus non animi, nesciunt quia facere sapiente id numquam ad laborum quas quidem? Ex totam nihil fuga, laboriosam velit neque tempora dolor magni, asperiores suscipit voluptatum molestiae maiores aspernatur at! Repellat, vel.</p>
                    </div>
                </AboutSkills>

            </AboutContent>
        </AboutContainer>
    )
};

const AboutContainer = styled.section`
    padding: 60px 0;
    border: 0.2px solid pink;
`;

const AboutContent = styled.div`
    max-width: 120rem;
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

const HomeButton = styled.div`
    margin-top: 48px;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

export default About;