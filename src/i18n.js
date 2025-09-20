import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "header": {
        "home": "Home",
        "places": "Places",
        "booking": "Booking",
        "savedPlans": "Saved Plans",
        "survey": "Survey",
        "helpline": "Helpline",
        "aboutUs": "About Us",
        "welcome": "Welcome, {{name}}",
        "profile": "Profile",
        "logout": "Logout"
      },
      "footer": {
        "quickLinks": "Quick Links",
        "contactUs": "Contact Us",
        "legal": "Legal",
        "privacyPolicy": "Privacy Policy",
        "termsOfService": "Terms of Service",
        "copyright": "© {{year}} Kerala Tourism. All Rights Reserved."
      },
      "homePage": {
        "title": "Explore Kerala - God's Own Country",
        "metaDescription": "Discover the beauty of Kerala with our interactive tourism guide. Find destinations, plan your budget, and explore God's Own Country.",
        "yourLocation": "Your Location in Kerala",
        "weatherReport": "Weather Report",
        "discoverKerala": "Discover Kerala",
        "chooseGroup": "Choose Your Travel Group",
        "budgetPlanner": "Budget-Based Tour Planner",
        "trendingPackages": "Trending Kerala Packages",
        "manualPlanner": "Manual Tour Planner",
        "savedPlans": "Saved Tour Plans"
      },
      "placesPage": {
        "title": "Places to Visit in Kerala",
        "metaDescription": "Explore hotels, temples, parks, and more in Kerala.",
        "discoverPlaces": "Discover Places",
        "browseCategories": "Browse through categories to find your next destination in Kerala.",
        "categories": "Categories",
        "events": "Up-to-Date Events & Festivals",
        "viewOnMap": "View on Map",
        "book": "Book"
      },
      "bookingPage": {
        "title": "Booking System - Kerala Tourism",
        "metaDescription": "Book hotels, transport, and more for your Kerala trip.",
        "bookingSystem": "Booking System",
        "findAndBook": "Find and book everything you need for your trip.",
        "bookNow": "Book {{category}}",
        "allInOne": "All-in-One Booking",
        "manageAll": "Manage all your reservations in one place. Your booked items will appear in your Saved Tour Plans.",
        "viewMyBookings": "View My Bookings"
      },
      "savedPlansPage": {
        "title": "Saved Tour Plans - Kerala Tourism",
        "metaDescription": "View, edit, and manage your saved Kerala tour plans.",
        "yourSavedPlans": "Your Saved Plans",
        "allYourPlans": "All your custom and saved tour packages in one place."
      },
      "helplinePage": {
        "title": "Emergency Helpline - Kerala Tourism",
        "metaDescription": "Find important emergency and helpline contact numbers for your safety in Kerala.",
        "emergencyHelpline": "Emergency Helpline",
        "importantContacts": "Important contacts for your safety and assistance.",
        "callNow": "Call Now"
      },
      "aboutUsPage": {
        "title": "About Us - Kerala Tourism",
        "metaDescription": "Contact information for the Kerala Tourism application team.",
        "aboutAndContact": "About Us & Contact",
        "getInTouch": "Get in touch with the Kerala Tourism team.",
        "ourMission": "Our Mission",
        "missionText": "Our mission is to provide a seamless and enriching travel experience for everyone visiting \"God's Own Country\". We aim to be the one-stop digital companion for tourists, offering comprehensive information, easy booking facilities, and personalized tour planning to showcase the best of Kerala's culture, heritage, and natural beauty.",
        "contactInfo": "Contact Information",
        "email": "Email",
        "phone": "Phone",
        "instagram": "Instagram"
      },
      "surveyPage": {
        "title": "Transportation Survey - Kerala Tourism",
        "metaDescription": "Share your feedback on transportation in Kerala to help us improve.",
        "surveyTitle": "Transportation Survey",
        "surveySubtitle": "Your feedback helps us improve travel experiences in Kerala.",
        "submit": "Submit Survey"
      },
      "profilePage": {
        "title": "My Profile",
        "metaDescription": "Manage your personal details and preferences.",
        "header": "Your Profile",
        "subHeader": "Update your personal information and settings.",
        "name": "Full Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "age": "Age",
        "address": "Address",
        "language": "Preferred Language",
        "saveButton": "Save Changes",
        "bookingHistory": "Booking History"
      },
      "searchBar": {
        "placeholder": "Search cities, 'popular places', hotels...",
        "search": "Search",
        "results": "Search Results",
        "close": "Close",
        "explore": "Explore {{name}}",
        "bookNow": "Book Now"
      }
    }
  },
  ta: {
    translation: {
      "header": {
        "home": "முகப்பு",
        "places": "இடங்கள்",
        "booking": "முன்பதிவு",
        "savedPlans": "சேமித்த திட்டங்கள்",
        "survey": "கணக்கெடுப்பு",
        "helpline": "உதவி மையம்",
        "aboutUs": "எங்களைப் பற்றி",
        "welcome": "வாருங்கள், {{name}}",
        "profile": "சுயவிவரம்",
        "logout": "வெளியேறு"
      },
      "footer": {
        "quickLinks": "விரைவு இணைப்புகள்",
        "contactUs": "தொடர்பு கொள்ள",
        "legal": "சட்டப்பூர்வமானது",
        "privacyPolicy": "தனியுரிமைக் கொள்கை",
        "termsOfService": "சேவை விதிமுறைகள்",
        "copyright": "© {{year}} கேரளா சுற்றுலா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
      },
      "homePage": {
        "title": "கேரளாவை ஆராயுங்கள் - கடவுளின் சொந்த நாடு",
        "metaDescription": "எங்கள் ஊடாடும் சுற்றுலா வழிகாட்டி மூலம் கேரளாவின் அழகைக் கண்டறியுங்கள்.",
        "yourLocation": "கேரளாவில் உங்கள் இருப்பிடம்",
        "weatherReport": "வானிலை அறிக்கை",
        "discoverKerala": "கேரளாவைக் கண்டறியுங்கள்",
        "chooseGroup": "உங்கள் பயணக் குழுவைத் தேர்ந்தெடுக்கவும்",
        "budgetPlanner": "பட்ஜெட் அடிப்படையிலான சுற்றுலா திட்டமிடுபவர்",
        "trendingPackages": "பிரபலமான கேரளா தொகுப்புகள்",
        "manualPlanner": "கைமுறை சுற்றுலா திட்டமிடுபவர்",
        "savedPlans": "சேமித்த சுற்றுலா திட்டங்கள்"
      },
      "placesPage": {
        "title": "கேரளாவில் பார்க்க வேண்டிய இடங்கள்",
        "metaDescription": "கேரளாவில் ஹோட்டல்கள், கோவில்கள், பூங்காக்கள் மற்றும் பலவற்றை ஆராயுங்கள்.",
        "discoverPlaces": "இடங்களைக் கண்டறியுங்கள்",
        "browseCategories": "கேரளாவில் உங்கள் அடுத்த இலக்கைக் கண்டுபிடிக்க வகைகளில் உலாவவும்.",
        "categories": "வகைகள்",
        "events": "புதுப்பித்த நிகழ்வுகள் மற்றும் திருவிழாக்கள்",
        "viewOnMap": "வரைபடத்தில் காண்க",
        "book": "முன்பதிவு"
      },
      "bookingPage": {
        "title": "முன்பதிவு அமைப்பு - கேரளா சுற்றுலா",
        "metaDescription": "உங்கள் கேரளா பயணத்திற்கு ஹோட்டல்கள், போக்குவரத்து மற்றும் பலவற்றை முன்பதிவு செய்யுங்கள்.",
        "bookingSystem": "முன்பதிவு அமைப்பு",
        "findAndBook": "உங்கள் பயணத்திற்கு தேவையான அனைத்தையும் கண்டுபிடித்து முன்பதிவு செய்யுங்கள்.",
        "bookNow": "{{category}} முன்பதிவு செய்யுங்கள்",
        "allInOne": "அனைத்தும் ஒரே முன்பதிவு",
        "manageAll": "உங்கள் எல்லா முன்பதிவுகளையும் ஒரே இடத்தில் நிர்வகிக்கவும்.",
        "viewMyBookings": "எனது முன்பதிவுகளைக் காண்க"
      },
      "savedPlansPage": {
        "title": "சேமித்த சுற்றுலா திட்டங்கள் - கேரளா சுற்றுலா",
        "metaDescription": "உங்கள் சேமித்த கேரளா சுற்றுலா திட்டங்களைக் காணலாம், திருத்தலாம் மற்றும் நிர்வகிக்கலாம்.",
        "yourSavedPlans": "உங்கள் சேமித்த திட்டங்கள்",
        "allYourPlans": "உங்கள் அனைத்து தனிப்பயன் மற்றும் சேமித்த சுற்றுலா தொகுப்புகளும் ஒரே இடத்தில்."
      },
      "helplinePage": {
        "title": "அவசர உதவி மையம் - கேரளா சுற்றுலா",
        "metaDescription": "கேரளாவில் உங்கள் பாதுகாப்பிற்கான முக்கியமான அவசர மற்றும் உதவி மைய தொடர்பு எண்களைக் கண்டறியவும்.",
        "emergencyHelpline": "அவசர உதவி மையம்",
        "importantContacts": "உங்கள் பாதுகாப்பு மற்றும் உதவிக்கான முக்கிய தொடர்புகள்.",
        "callNow": "இப்போது அழைக்கவும்"
      },
      "aboutUsPage": {
        "title": "எங்களைப் பற்றி - கேரளா சுற்றுலா",
        "metaDescription": "கேரளா சுற்றுலா விண்ணப்பக் குழுவிற்கான தொடர்புத் தகவல்.",
        "aboutAndContact": "எங்களைப் பற்றி & தொடர்பு",
        "getInTouch": "கேரளா சுற்றுலா குழுவுடன் தொடர்பு கொள்ளுங்கள்.",
        "ourMission": "எங்கள் நோக்கம்",
        "missionText": "எங்கள் நோக்கம் \"கடவுளின் சொந்த நாட்டிற்கு\" வருகை தரும் அனைவருக்கும் தடையற்ற மற்றும் வளமான பயண அனுபவத்தை வழங்குவதாகும்.",
        "contactInfo": "தொடர்பு தகவல்",
        "email": "மின்னஞ்சல்",
        "phone": "தொலைபேசி",
        "instagram": "இன்ஸ்டாகிராம்"
      },
      "surveyPage": {
        "title": "போக்குவரத்து கணக்கெடுப்பு - கேரளா சுற்றுலா",
        "metaDescription": "கேரளாவில் போக்குவரத்தைப் பற்றிய உங்கள் கருத்தைப் பகிர்ந்து கொள்ளுங்கள்.",
        "surveyTitle": "போக்குவரத்து கணக்கெடுப்பு",
        "surveySubtitle": "உங்கள் கருத்து கேரளாவில் பயண அனுபவங்களை மேம்படுத்த உதவுகிறது.",
        "submit": "சமர்ப்பிக்கவும்"
      },
      "profilePage": {
        "title": "என் சுயவிவரம்",
        "metaDescription": "உங்கள் தனிப்பட்ட விவரங்கள் மற்றும் விருப்பங்களை நிர்வகிக்கவும்.",
        "header": "உங்கள் சுயவிவரம்",
        "subHeader": "உங்கள் தனிப்பட்ட தகவல் மற்றும் அமைப்புகளைப் புதுப்பிக்கவும்.",
        "name": "முழு பெயர்",
        "email": "மின்னஞ்சல் முகவரி",
        "phone": "தொலைபேசி எண்",
        "age": "வயது",
        "address": "முகவரி",
        "language": "விருப்பமான மொழி",
        "saveButton": "மாற்றங்களைச் சேமி",
        "bookingHistory": "முன்பதிவு வரலாறு"
      },
      "searchBar": {
        "placeholder": "நகரங்கள், 'பிரபலமான இடங்கள்', ஹோட்டல்கள்...",
        "search": "தேடு",
        "results": "தேடல் முடிவுகள்",
        "close": "மூடு",
        "explore": "{{name}} ஆராயுங்கள்",
        "bookNow": "இப்போதே முன்பதிவு செய்யுங்கள்"
      }
    }
  },
  ml: {
    translation: {
      "header": {
        "home": "ഹോം",
        "places": "സ്ഥലങ്ങൾ",
        "booking": "ബുക്കിംഗ്",
        "savedPlans": "സേവ് ചെയ്ത പ്ലാനുകൾ",
        "survey": "സർവേ",
        "helpline": "ഹെൽപ്പ്ലൈൻ",
        "aboutUs": "ഞങ്ങളെക്കുറിച്ച്",
        "welcome": "സ്വാഗതം, {{name}}",
        "profile": "പ്രൊഫൈൽ",
        "logout": "ലോഗ് ഔട്ട്"
      },
      "footer": {
        "quickLinks": "ദ്രുത ലിങ്കുകൾ",
        "contactUs": "ബന്ധപ്പെടുക",
        "legal": "നിയമപരമായത്",
        "privacyPolicy": "സ്വകാര്യതാ നയം",
        "termsOfService": "സേവന നിബന്ധനകൾ",
        "copyright": "© {{year}} കേരള ടൂറിസം. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം."
      },
      "homePage": {
        "title": "കേരളം പര്യവേക്ഷണം ചെയ്യുക - ദൈവത്തിന്റെ സ്വന്തം നാട്",
        "metaDescription": "ഞങ്ങളുടെ ഇന്ററാക്ടീവ് ടൂറിസം ഗൈഡ് ഉപയോഗിച്ച് കേരളത്തിന്റെ സൗന്ദര്യം കണ്ടെത്തുക.",
        "yourLocation": "കേരളത്തിലെ നിങ്ങളുടെ സ്ഥാനം",
        "weatherReport": "കാലാവസ്ഥാ റിപ്പോർട്ട്",
        "discoverKerala": "കേരളം കണ്ടെത്തുക",
        "chooseGroup": "നിങ്ങളുടെ യാത്രാ സംഘത്തെ തിരഞ്ഞെടുക്കുക",
        "budgetPlanner": "ബജറ്റ് അടിസ്ഥാനമാക്കിയുള്ള ടൂർ പ്ലാനർ",
        "trendingPackages": "ട്രെൻഡിംഗ് കേരള പാക്കേജുകൾ",
        "manualPlanner": "മാനുവൽ ടൂർ പ്ലാനർ",
        "savedPlans": "സേവ് ചെയ്ത ടൂർ പ്ലാനുകൾ"
      },
      "placesPage": {
        "title": "കേരളത്തിൽ സന്ദർശിക്കേണ്ട സ്ഥലങ്ങൾ",
        "metaDescription": "കേരളത്തിലെ ഹോട്ടലുകൾ, ക്ഷേത്രങ്ങൾ, പാർക്കുകൾ എന്നിവയും മറ്റും പര്യവേക്ഷണം ചെയ്യുക.",
        "discoverPlaces": "സ്ഥലങ്ങൾ കണ്ടെത്തുക",
        "browseCategories": "കേരളത്തിലെ നിങ്ങളുടെ അടുത്ത ലക്ഷ്യസ്ഥാനം കണ്ടെത്താൻ വിഭാഗങ്ങളിലൂടെ ബ്രൗസ് ചെയ്യുക.",
        "categories": "വിഭാഗങ്ങൾ",
        "events": "പുതിയ പരിപാടികളും ഉത്സവങ്ങളും",
        "viewOnMap": "മാപ്പിൽ കാണുക",
        "book": "ബുക്ക് ചെയ്യുക"
      },
      "bookingPage": {
        "title": "ബുക്കിംഗ് സിസ്റ്റം - കേരള ടൂറിസം",
        "metaDescription": "നിങ്ങളുടെ കേരള യാത്രയ്ക്കായി ഹോട്ടലുകൾ, ഗതാഗതം എന്നിവയും മറ്റും ബുക്ക് ചെയ്യുക.",
        "bookingSystem": "ബുക്കിംഗ് സിസ്റ്റം",
        "findAndBook": "നിങ്ങളുടെ യാത്രയ്ക്ക് ആവശ്യമായതെല്ലാം കണ്ടെത്തി ബുക്ക് ചെയ്യുക.",
        "bookNow": "{{category}} ബുക്ക് ചെയ്യുക",
        "allInOne": "ഓൾ-ഇൻ-വൺ ബുക്കിംഗ്",
        "manageAll": "നിങ്ങളുടെ എല്ലാ റിസർവേഷനുകളും ഒരിടത്ത് കൈകാര്യം ചെയ്യുക.",
        "viewMyBookings": "എന്റെ ബുക്കിംഗുകൾ കാണുക"
      },
      "savedPlansPage": {
        "title": "സേവ് ചെയ്ത ടൂർ പ്ലാനുകൾ - കേരള ടൂറിസം",
        "metaDescription": "നിങ്ങൾ സേവ് ചെയ്ത കേരള ടൂർ പ്ലാനുകൾ കാണുക, എഡിറ്റ് ചെയ്യുക, നിയന്ത്രിക്കുക.",
        "yourSavedPlans": "നിങ്ങൾ സേവ് ചെയ്ത പ്ലാനുകൾ",
        "allYourPlans": "നിങ്ങളുടെ എല്ലാ ഇഷ്ടാനുസൃത, സേവ് ചെയ്ത ടൂർ പാക്കേജുകളും ഒരിടത്ത്."
      },
      "helplinePage": {
        "title": "അടിയന്തര ഹെൽപ്പ്ലൈൻ - കേരള ടൂറിസം",
        "metaDescription": "കേരളത്തിൽ നിങ്ങളുടെ സുരക്ഷയ്ക്കായി പ്രധാനപ്പെട്ട അടിയന്തര, ഹെൽപ്പ്ലൈൻ കോൺടാക്റ്റ് നമ്പറുകൾ കണ്ടെത്തുക.",
        "emergencyHelpline": "അടിയന്തര ഹെൽപ്പ്ലൈൻ",
        "importantContacts": "നിങ്ങളുടെ സുരക്ഷയ്ക്കും സഹായത്തിനുമുള്ള പ്രധാന കോൺടാക്റ്റുകൾ.",
        "callNow": "ഇപ്പോൾ വിളിക്കുക"
      },
      "aboutUsPage": {
        "title": "ഞങ്ങളെക്കുറിച്ച് - കേരള ടൂറിസം",
        "metaDescription": "കേരള ടൂറിസം ആപ്ലിക്കേഷൻ ടീമിന്റെ കോൺടാക്റ്റ് വിവരങ്ങൾ.",
        "aboutAndContact": "ഞങ്ങളെക്കുറിച്ചും ബന്ധപ്പെടാനും",
        "getInTouch": "കേരള ടൂറിസം ടീമുമായി ബന്ധപ്പെടുക.",
        "ourMission": "ഞങ്ങളുടെ ദൗത്യം",
        "missionText": "\"ദൈവത്തിന്റെ സ്വന്തം നാട്\" സന്ദർശിക്കുന്ന എല്ലാവർക്കും തടസ്സമില്ലാത്തതും സമ്പന്നവുമായ യാത്രാനുഭവം നൽകുക എന്നതാണ് ഞങ്ങളുടെ ദൗത്യം.",
        "contactInfo": "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",
        "email": "ഇമെയിൽ",
        "phone": "ഫോൺ",
        "instagram": "ഇൻസ്റ്റാഗ്രാം"
      },
      "surveyPage": {
        "title": "ഗതാഗത സർവേ - കേരള ടൂറിസം",
        "metaDescription": "കേരളത്തിലെ ഗതാഗതത്തെക്കുറിച്ചുള്ള നിങ്ങളുടെ അഭിപ്രായം ഞങ്ങളെ മെച്ചപ്പെടുത്താൻ സഹായിക്കും.",
        "surveyTitle": "ഗതാഗത സർവേ",
        "surveySubtitle": "നിങ്ങളുടെ ഫീഡ്‌ബാക്ക് കേരളത്തിലെ യാത്രാനുഭവങ്ങൾ മെച്ചപ്പെടുത്താൻ ഞങ്ങളെ സഹായിക്കുന്നു.",
        "submit": "സമർപ്പിക്കുക"
      },
      "profilePage": {
        "title": "എന്റെ പ്രൊഫൈൽ",
        "metaDescription": "നിങ്ങളുടെ സ്വകാര്യ വിവരങ്ങളും മുൻഗണനകളും നിയന്ത്രിക്കുക.",
        "header": "നിങ്ങളുടെ പ്രൊഫൈൽ",
        "subHeader": "നിങ്ങളുടെ സ്വകാര്യ വിവരങ്ങളും ക്രമീകരണങ്ങളും അപ്ഡേറ്റ് ചെയ്യുക.",
        "name": "മുഴുവൻ പേര്",
        "email": "ഇമെയിൽ വിലാസം",
        "phone": "ഫോൺ നമ്പർ",
        "age": "വയസ്സ്",
        "address": "വിലാസം",
        "language": "ഇഷ്ട ഭാഷ",
        "saveButton": "മാറ്റങ്ങൾ സംരക്ഷിക്കുക",
        "bookingHistory": "ബുക്കിംഗ് ചരിത്രം"
      },
      "searchBar": {
        "placeholder": "നഗരങ്ങൾ, 'പ്രശസ്തമായ സ്ഥലങ്ങൾ', ഹോട്ടലുകൾ...",
        "search": "തിരയുക",
        "results": "തിരയൽ ഫലങ്ങൾ",
        "close": "അടയ്ക്കുക",
        "explore": "{{name}} പര്യവേക്ഷണം ചെയ്യുക",
        "bookNow": "ഇപ്പോൾ ബുക്ക് ചെയ്യുക"
      }
    }
  },
  hi: {
    translation: {
      "header": {
        "home": "होम",
        "places": "स्थान",
        "booking": "बुकिंग",
        "savedPlans": "सहेजी गई योजनाएँ",
        "survey": "सर्वेक्षण",
        "helpline": "हेल्पलाइन",
        "aboutUs": "हमारे बारे में",
        "welcome": "नमस्ते, {{name}}",
        "profile": "प्रोफ़ाइल",
        "logout": "लॉग आउट"
      },
      "footer": {
        "quickLinks": "त्वरित लिंक्स",
        "contactUs": "संपर्क करें",
        "legal": "कानूनी",
        "privacyPolicy": "गोपनीयता नीति",
        "termsOfService": "सेवा की शर्तें",
        "copyright": "© {{year}} केरल पर्यटन। सर्वाधिकार सुरक्षित।"
      },
      "homePage": {
        "title": "केरल का अन्वेषण करें - ईश्वर का अपना देश",
        "metaDescription": "हमारे इंटरैक्टिव पर्यटन गाइड के साथ केरल की सुंदरता की खोज करें।",
        "yourLocation": "केरल में आपका स्थान",
        "weatherReport": "मौसम रिपोर्ट",
        "discoverKerala": "केरल की खोज करें",
        "chooseGroup": "अपना यात्रा समूह चुनें",
        "budgetPlanner": "बजट-आधारित टूर प्लानर",
        "trendingPackages": "ट्रेंडिंग केरल पैकेज",
        "manualPlanner": "मैनुअल टूर प्लानर",
        "savedPlans": "सहेजी गई टूर योजनाएँ"
      },
      "placesPage": {
        "title": "केरल में घूमने की जगहें",
        "metaDescription": "केरल में होटल, मंदिर, पार्क और बहुत कुछ देखें।",
        "discoverPlaces": "स्थानों की खोज करें",
        "browseCategories": "केरल में अपना अगला गंतव्य खोजने के लिए श्रेणियों के माध्यम से ब्राउज़ करें।",
        "categories": "श्रेणियाँ",
        "events": "अद्यतित घटनाएँ और त्यौहार",
        "viewOnMap": "मानचित्र पर देखें",
        "book": "बुक करें"
      },
      "bookingPage": {
        "title": "बुकिंग प्रणाली - केरल पर्यटन",
        "metaDescription": "अपनी केरल यात्रा के लिए होटल, परिवहन और बहुत कुछ बुक करें।",
        "bookingSystem": "बुकिंग प्रणाली",
        "findAndBook": "अपनी यात्रा के लिए आवश्यक सब कुछ ढूंढें और बुक करें।",
        "bookNow": "{{category}} बुक करें",
        "allInOne": "ऑल-इन-वन बुकिंग",
        "manageAll": "अपने सभी आरक्षणों को एक ही स्थान पर प्रबंधित करें।",
        "viewMyBookings": "मेरी बुकिंग देखें"
      },
      "savedPlansPage": {
        "title": "सहेजी गई टूर योजनाएँ - केरल पर्यटन",
        "metaDescription": "अपनी सहेजी गई केरल टूर योजनाओं को देखें, संपादित करें और प्रबंधित करें।",
        "yourSavedPlans": "आपकी सहेजी गई योजनाएँ",
        "allYourPlans": "आपके सभी कस्टम और सहेजे गए टूर पैकेज एक ही स्थान पर।"
      },
      "helplinePage": {
        "title": "आपातकालीन हेल्पलाइन - केरल पर्यटन",
        "metaDescription": "केरल में अपनी सुरक्षा के लिए महत्वपूर्ण आपातकालीन और हेल्पलाइन संपर्क नंबर खोजें।",
        "emergencyHelpline": "आपातकालीन हेल्पलाइन",
        "importantContacts": "आपकी सुरक्षा और सहायता के लिए महत्वपूर्ण संपर्क।",
        "callNow": "अभी कॉल करें"
      },
      "aboutUsPage": {
        "title": "हमारे बारे में - केरल पर्यटन",
        "metaDescription": "केरल पर्यटन आवेदन टीम के लिए संपर्क जानकारी।",
        "aboutAndContact": "हमारे बारे में और संपर्क",
        "getInTouch": "केरल पर्यटन टीम से संपर्क करें।",
        "ourMission": "हमारा लक्ष्य",
        "missionText": "हमारा मिशन \"ईश्वर के अपने देश\" में आने वाले सभी लोगों के लिए एक सहज और समृद्ध यात्रा अनुभव प्रदान करना है।",
        "contactInfo": "संपर्क जानकारी",
        "email": "ईमेल",
        "phone": "फ़ोन",
        "instagram": "इंस्टाग्राम"
      },
      "surveyPage": {
        "title": "परिवहन सर्वेक्षण - केरल पर्यटन",
        "metaDescription": "केरल में परिवहन पर अपनी प्रतिक्रिया साझा करें ताकि हमें सुधार करने में मदद मिल सके।",
        "surveyTitle": "परिवहन सर्वेक्षण",
        "surveySubtitle": "आपकी प्रतिक्रिया हमें केरल में यात्रा के अनुभवों को बेहतर बनाने में मदद करती है।",
        "submit": "प्रस्तुत करें"
      },
      "profilePage": {
        "title": "मेरी प्रोफाइल",
        "metaDescription": "अपने व्यक्तिगत विवरण और प्राथमिकताएं प्रबंधित करें।",
        "header": "आपकी प्रोफ़ाइल",
        "subHeader": "अपनी व्यक्तिगत जानकारी और सेटिंग्स अपडेट करें।",
        "name": "पूरा नाम",
        "email": "ईमेल पता",
        "phone": "फ़ोन नंबर",
        "age": "आयु",
        "address": "पता",
        "language": "पसंदीदा भाषा",
        "saveButton": "परिवर्तनों को सहेजें",
        "bookingHistory": "बुकिंग इतिहास"
      },
      "searchBar": {
        "placeholder": "शहर, 'लोकप्रिय स्थान', होटल खोजें...",
        "search": "खोज",
        "results": "खोज परिणाम",
        "close": "बंद करें",
        "explore": "{{name}} का अन्वेषण करें",
        "bookNow": "अभी बुक करें"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
