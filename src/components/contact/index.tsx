import { FormEvent, forwardRef } from "react";
import Swal from "sweetalert2";
import './contact.scss';
import { useTranslation } from "react-i18next";

const Contact = forwardRef<HTMLDivElement>((props, ref) => {

    const { t } = useTranslation();

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
                    <h1>{ t('pages.contact.title')}</h1>
                    <p>{ t('pages.contact.subtitle')}</p>
                </div>

                <form className="contact-section__form" onSubmit={onSubmit}>
                    <div className="contact-section__input-box">
                        <label>{ t('pages.contact.form.name-label')}</label>
                        <input type="text" name="name" placeholder={ t('pages.contact.form.name-placeholder')} required/>
                    </div>

                    <div className="contact-section__input-box">
                        <label>{ t('pages.contact.form.email-label')} </label>
                        <input type="email" name="email" placeholder={ t('pages.contact.form.email-placeholder')}  required/>
                    </div>

                    <div className="contact-section__input-box">
                        <label>{ t('pages.contact.form.message-label')} </label>
                        <textarea name="message" className="message" placeholder={ t('pages.contact.form.message-placeholder')}  required/>
                    </div>

                    <div className="contact-section__btn-position">
                        <button className='contact-section__button'>
                            <a className='btn'>{ t('pages.contact.button')} </a>
                        </button>
                    </div>

                </form>
            </div>
        </section>
    )
}); 

export default Contact;