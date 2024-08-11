import React, { FormEvent, forwardRef } from "react";
import styled from "styled-components";
import Swal from 'sweetalert2'

const Contact = forwardRef<HTMLDivElement>((props, ref) => {

    // const contactRef = useRef(null);
    
    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append('access_key', '25bbe40d-40ce-4962-8d69-34c80d03757e');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: json
        }).then((res) => res.json());

        if(res.success) {
            Swal.fire({
                title: "Sucesso!",
                text: "Email enviado com sucesso!",
                icon: "success"
            });

            form.reset();
        }
    }

    return (
        <ContactContainer
            ref={ref}
        >
            <ContactContent>
                <h1>Contato</h1>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
            </ContactContent>

                <ContactForm onSubmit={onSubmit}>
                    <FormInputBox>
                        <label>Nome</label>
                        <input type="text" name="name" placeholder="Digite o seu nome" required/>
                    </FormInputBox>

                    <FormInputBox>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Digite o seu email" required/>
                    </FormInputBox>
 
                    <FormInputBox>
                        <label>Mensagem</label>
                        <textarea name="message" className="message" placeholder="Digite a sua mensagem..."/>
                    </FormInputBox>
                    <FormButton className="btn">Enviar</FormButton>
                </ContactForm>

        </ContactContainer>
    )
});

const ContactContainer = styled.section`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, rgba(245, 245, 245, 0.95), rgba(245, 245, 245, 0.95)), url(src/assets/images/lightmode-image.png);
`;

const ContactContent = styled.section`
    text-align: center;
    margin-bottom: 60px;
`;

const ContactForm = styled.form`
    background-color: white;
    max-width: 600px;
    width: 100%;
    padding: 24px 24px 32px;
    border-radius: 8px;
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
`;

const FormInputBox = styled.div`

    margin-top: 16px;
    input, textarea {
        width: 100%;
        height: 60px;
        background: transparent;
        border: 2px solid #ddd;
        outline: none;
        border-radius: 8px;
        padding: 16px;
        font-size: 16px;
        color: #333;
        margin-top: 8px;
    }

    .message {
        height: 200px;
        resize: none;
    }
`;

const FormButton = styled.button`
    width: 100%;
    height: 55px;
    border: none;
    box-shadow: 0 10px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    margin-top: 24px;
    transition: .3s;
`;

export default Contact;