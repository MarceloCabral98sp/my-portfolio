import styled from "styled-components";

const Home = () => {
    return (
        <HomeContainer>

            <HomeContent>
                <HomeTitle>Olá! Me chamo Marcelo Cabral</HomeTitle>
                <HomeSubtitle>Sou um Desenvolvedor Web apaixonado por tecnologia, e trabalho
                    com TI desde 2019 com experiência em Desenvolvimento e QA.
                </HomeSubtitle>
                
                <HomeButton>
                    <a className="btn" href="#">Projetos</a>
                </HomeButton>
            </HomeContent>
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
    position: relative;
    height: 100vh;
    // min-height: 80rem;
    max-height: 120rem;
    background-image: conic-gradient(from 90deg at -10% 100%, #bcc1cd 0deg, #bcc1cd 90deg, #fff 1turn);

    border: 0.6px solid green;
`;

const HomeContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90rem;
    width: 92%;
    border: 0.6px solid red;
`;

const HomeTitle = styled.h1`
    font-size: 36px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
`;

const HomeSubtitle = styled.p`
    margin: 3rem auto 0 auto;
    max-width: 80rem;

    color: #333333;
    font-size: 16px;
    line-height: 1.6;
    text-align: center;
`;

const HomeButton = styled.div`
    margin-top: 48px;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

export default Home