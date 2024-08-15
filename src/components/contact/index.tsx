import { FormEvent, forwardRef } from "react";
import Swal from "sweetalert2";
import './contact.scss';

const Contact = forwardRef<HTMLDivElement>((props, ref) => {

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        formData.append('access_key', '25bbe40d-40ce-4962-8d69-34c80d03757e');

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const req = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: json
        }).then((res) => res.json());

        if(req.success) {
            Swal.fire({
                title: 'Sucesso!',
                text: 'Email enviado com sucesso',  
                icon: 'success',
                confirmButtonColor: '#087ea4'
            });

            form.reset();
        }
    }

    return(
        <section ref={ref} className="contact-section">
            <div className="contact-section__container">
                <div className="contact-section__header">
                    <h1>Contato</h1>
                    <p>Preencha esse formulário para entrar em contato comigo por email. Vou responder o mais breve possível</p>
                </div>

                <form className="contact-section__form" onSubmit={onSubmit}>
                    <div className="contact-section__input-box">
                        <label>Nome</label>
                        <input type="text" name="name" placeholder="Digite o seu nome" required/>
                    </div>

                    <div className="contact-section__input-box">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Digite o seu email" required/>
                    </div>

                    <div className="contact-section__input-box">
                        <label>Mensagem</label>
                        <textarea name="message" className="message" placeholder="Digite a sua mensagem..." required/>
                    </div>

                    <div className="contact-section__btn-position">
                        <button className='contact-section__button'>
                            <a className='btn'>Enviar</a>
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}); 

export default Contact;