// translations.js

const translations = {
  en: {
    welcome: 'Welcome to our website!',
    home: 'Home',
    about: 'About',
    contact: 'Contact',
    categories: {
      guitars: 'Guitars',
      basses: 'Basses',
      keys: 'Keys',
      wind_instruments: 'Wind Instruments',
      drums_percussion: 'Drums & Percussion',
      pa_lighting: 'PA & Lighting',
      recording: 'Recording',
      dj_equipment: 'DJ Equipment',
      instruments_for_children: 'Instruments for Children',
      accessories_cables: 'Accessories & Cables',
    },
  },
  fr: {
    welcome: 'Bienvenue sur notre site!',
    home: 'Accueil',
    about: 'À propos',
    contact: 'Contact',
    categories: {
      guitars: 'Guitares',
      basses: 'Basses',
      keys: 'Claviers',
      wind_instruments: 'Instruments à Vent',
      drums_percussion: 'Batterie & Percussion',
      pa_lighting: 'Sonorisation & Éclairage',
      recording: 'Enregistrement',
      dj_equipment: 'Équipement DJ',
      instruments_for_children: 'Instruments pour Enfants',
      accessories_cables: 'Accessoires & Câbles',
    },
  },
  ar: {
    welcome: 'مرحبًا بك في موقعنا!',
    home: 'الرئيسية',
    about: 'حول',
    contact: 'اتصل',
    categories: {
      guitars: 'قيثارات',
      basses: 'باصات',
      keys: 'مفاتيح',
      wind_instruments: 'آلات النفخ',
      drums_percussion: 'طبول وإيقاع',
      pa_lighting: 'صوت وإضاءة',
      recording: 'تسجيل',
      dj_equipment: 'معدات الدي جي',
      instruments_for_children: 'آلات للأطفال',
      accessories_cables: 'ملحقات وكابلات',
    },
  },
};

// Function to translate general keys
export const translate = (key, language) => {
  return translations[language][key] || key;
};

// New function to translate category keys
export const translateCategory = (category, language) => {
  return translations[language].categories[category] || category;
};
