import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next'; // Importa el hook
import './Contact.css';

function Contact() {
  const { t } = useTranslation(); // Obtén la función t() para traducir
  const [state, handleSubmit] = useForm("mbljepez");

  if (state.succeeded) {
    return <p>{t('contact.successMessage')}</p>; // Mensaje de éxito traducido
  }

  return (
    <section id="contact" className="section-container" data-aos="flip-down">
      <h2 className="title">{t('contact.title')}</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">{t('contact.name')}</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t('contact.namePlaceholder')}
          required
          className="input"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <label htmlFor="email">{t('contact.email')}</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder={t('contact.emailPlaceholder')}
          required
          className="input"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">{t('contact.message')}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t('contact.messagePlaceholder')}
          required
          className="textarea"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" className="button" disabled={state.submitting}>
          {t('contact.submitButton')}
        </button>
      </form>
    </section>
  );
}

export default Contact;
