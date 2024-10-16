"use client";
import React from 'react';
import { useLanguage } from '../../context/LanguageContext'; // Importing the LanguageContext

const translations = {
  our_location: {
    en: "Our Location",
    fr: "Notre emplacement",
    ar: "موقعنا",
  },
  discover_our_location: {
    en: "Discover our location",
    fr: "Découvrez notre emplacement",
    ar: "اكتشف موقعنا",
  },
  address: {
    en: "Address",
    fr: "Adresse",
    ar: "العنوان",
  },
  phone_number: {
    en: "Phone Number",
    fr: "Numéro de téléphone",
    ar: "رقم الهاتف",
  },
  email: {
    en: "Email",
    fr: "البريد الإلكتروني",
    ar: "البريد الإلكتروني",
  },
  working_hours: {
    en: "Working Hours",
    fr: "Heures de travail",
    ar: "ساعات العمل",
  },
  working_hours_week: {
    en: "Monday to Friday: 9:00 AM - 6:00 PM",
    fr: "Lundi au Vendredi : 9:00 - 18:00",
    ar: "الاثنين إلى الجمعة: 9:00 صباحًا - 6:00 مساءً",
  },
  working_hours_sat: {
    en: "Saturday: 10:00 AM - 4:00 PM",
    fr: "Samedi : 10:00 - 16:00",
    ar: "السبت: 10:00 صباحًا - 4:00 مساءً",
  },
  location_address: { // New translation key for the address
    en: "Islan, Al Mohammadi City, Agadir",
    fr: "Islan, Ville Al Mohammadi, Agadir",
    ar: "إسلان، الحي المحمدي، أكادير",
  },
  // Add more translation keys as needed
};

const Translate = ({ word }) => {
  const { language } = useLanguage(); // Get current language from context

  return (
    <>
      {translations[word] ? translations[word][language] || translations[word]['en'] : word}
    </>
  );
};

export default Translate;
