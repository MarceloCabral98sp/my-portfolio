import styled from "styled-components";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    return (
        <FooterSection>
            <FooterContainer>
                <FooterIcons>
                    <a href="https://github.com/MarceloCabral98sp">
                        <img src="src/assets/icons/github-svgrepo-com.svg" alt="Ícone do github" />
                    </a>
                </FooterIcons>
                <FooterIcons>
                    <a href="https://www.linkedin.com/in/marcelo-cabral-72228416a/">
                        <img src="src/assets/icons/linkedin-svgrepo-com.svg" alt="Ícone do linkedin" />
                    </a>
                </FooterIcons>
                <FooterIcons>
                    <a href="https://www.youtube.com/@marcelocabral463">
                        <img src="src/assets/icons/youtube-svgrepo-com.svg" alt="Ícone do youtube" />
                    </a>
                </FooterIcons>
            </FooterContainer>
            <FooterCopyright>
                <p>&copy; Copyright {currentYear}. Made by <a href="#"><strong>Marcelo Cabral</strong></a></p>
            </FooterCopyright>
        </FooterSection>
    )
}

const FooterSection = styled.section`
    height: 120px;
    padding: 16px;
    background-color: #030303;
`;

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #444;
`;

const FooterIcons = styled.div`
    a {
        padding: 8px;
        display: block;
    }

    img {
        width: 24px;
        filter: brightness(0) invert(1);
    }
`;

const FooterCopyright = styled.div`
    font-size: 12px;
    color: white;
    text-align: center;
    margin-top: 16px;

    p a {
        color: white;
    }
`;


export default Footer;