"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // Adjust this path if necessary

const translations = {
  get_in_touch: {
    en: "Get in Touch",
    fr: "Contactez-nous",
    ar: "تواصل معنا",
  },
  name: {
    en: "Name",
    fr: "Nom",
    ar: "الاسم",
  },
  email: {
    en: "Email",
    fr: "E-mail",
    ar: "البريد الإلكتروني",
  },
  your_question: {
    en: "Your Question",
    fr: "Votre question",
    ar: "سؤالك",
  },
  message: {
    en: "Message",
    fr: "Message",
    ar: "الرسالة",
  },
  send_message: {
    en: "Send Message",
    fr: "Envoyer le message",
    ar: "إرسال الرسالة",
  },
  sending: {
    en: "Sending...",
    fr: "Envoi en cours...",
    ar: "جارٍ الإرسال...",
  },
  success_message: {
    en: "Your message has been sent successfully!",
    fr: "Votre message a été envoyé avec succès!",
    ar: "تم إرسال رسالتك بنجاح!",
  },
  error_message: {
    en: "There was an error sending your message. Please try again.",
    fr: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
    ar: "حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
  },
  // Additional keys can be added here as needed
};

const Translate = ({ word }) => {
  const { language } = useLanguage(); // Get the current language from context

  return (
    <>
      {translations[word] ? translations[word][language] || translations[word]['en'] : word}
    </>
  );
};

export default Translate;
