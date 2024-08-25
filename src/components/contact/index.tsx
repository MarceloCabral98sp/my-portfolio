import './contact.scss';
import { FormEvent, forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { sendEmail } from "../../services/email-sender/email-sender";
import Swal from "sweetalert2";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {

    const { t } =useTranslation();

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        try {
            const req = await sendEmail(formData);

            if(req.success) {
                Swal.fire({
                    title: t('pages.contact.success-alert.title'),
                    text: t('pages.contact.success-alert.text'),
                    icon: 'success',
                    confirmButtonColor: '#087ea4',
                });
                form.reset();
            }
        } catch (error) {
            Swal.fire({ 
                title: t('pages.contact.error-alert.title'),
                text: t('pages.contact.error-alert.text'),
                icon: 'error',
                confirmButtonColor: '#087ea4',
            });
            console.error('An error occurred while sending the email: ', error);
        }
    };

    return(
        <section className="contact-section" ref={ref}>
            <div className="contact-section__container">
                <div className="contact-section__header">
                    <h1>{ t('pages.contact.title')}</h1>
                    <p>{ t('pages.contact.subtitle')}</p>
                </div>
            </div>

            <form className="contact-section__form" onSubmit={onSubmit}>
                <div className="contact-section__form-input-box">
                    <label>{ t('pages.contact.form.name-label')}</label>
                    <input type="text" name="name" placeholder={ t('pages.contact.form.name-placeholder')} required/>
                </div>
                <div className="contact-section__form-input-box">
                    <label>{ t('pages.contact.form.email-label')}</label>
                    <input type="email" name="email" placeholder={ t('pages.contact.form.email-placeholder')}  required/>
                </div>
                <div className="contact-section__form-input-box">
                    <label>{ t('pages.contact.form.message-label')}</label>
                    <textarea name="message" placeholder={ t('pages.contact.form.message-placeholder')}  required/>
                </div>

                <div className="contact-section__form-button-position">
                    <button className='contact-section__form-button btn'>{ t('pages.contact.button')}</button>
                </div>
            </form>
        </section>
    );
});

export default Contact;