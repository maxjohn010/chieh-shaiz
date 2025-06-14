const translations = {
  en: {
    welcome: "Welcome to Chef's Kitchen",
    book: "Book Now",
    aboutTitle: "About Me",
    aboutText: "I am a passionate chef specializing in unique culinary experiences.",
    contact: "Contact Me",
    aboutMe: "About Me",
    aboutMeText: "I’m Cheif Shaiz , a culinary artist with 1+ years of experience specializing in Italian and fusion cuisine. I bring passion and flavor to every dish."
  },
  ur: {
    welcome: "شیف کے کچن میں خوش آمدید",
    book: "ابھی بک کریں",
    aboutTitle: "میرے بارے میں",
    aboutText: "میں ایک پرجوش شیف ہوں جو منفرد کھانوں میں مہارت رکھتا ہوں۔",
    contact: "رابطہ کریں",
    aboutMe: "میرے بارے میں",
    aboutPara: "میں Cheif Shaiz ہوں، اطالوی اور فیوژن کھانوں میں مہارت کا 1+ سال کا تجربہ رکھنے والا ایک پکا فنکار۔ میں ہر ڈش میں جذبہ اور ذائقہ لاتا ہوں۔"
  },
  es: {
    welcome: "Bienvenido a la Cocina del Chef",
    book: "Reserva Ahora",
    aboutTitle: "Sobre Mí",
    aboutText: "Soy un chef apasionado especializado en experiencias culinarias únicas.",
    contact: "Contáctame"
  },
  fr: {
    welcome: "Bienvenue dans la Cuisine du Chef",
    book: "Réservez Maintenant",
    aboutTitle: "À Propos de Moi",
    aboutText: "Je suis un chef passionné spécialisé dans les expériences culinaires uniques.",
    contact: "Contactez-moi"
  }
};

function setLanguage(lang) {
  document.querySelector(".hero h1").textContent = translations[lang].welcome;
  document.querySelector(".btn").textContent = translations[lang].book;
  document.querySelector("#about h2").textContent = translations[lang].aboutTitle;
  document.querySelector("#about p").textContent = translations[lang].aboutText;
  document.querySelector("#contact h2").textContent = translations[lang].contact;
}
