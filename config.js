// ============================================
// PRACTICE WEBSITE CONFIGURATION
// ============================================
// Customized for Guerra Plastic Surgery Center
// ============================================

const SITE_CONFIG = {
  // ==========================================
  // PRACTICE INFORMATION
  // ==========================================
  practiceName: "Guerra Plastic Surgery Center",
  doctorName: "Dr. Aldo Guerra",
  doctorCredentials: "MD, FACS",
  doctorTitle: "Board-Certified Plastic Surgeon",
  tagline: "Transforming Lives Through Artistry & Excellence",

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  phone: "(480) 568-2523",
  phoneClean: "4805682523",
  email: "info@guerraplasticsurgery.com",

  // ==========================================
  // LOCATION
  // ==========================================
  address: {
    street: "7600 E McKellips Rd, Suite 102",
    city: "Scottsdale",
    state: "AZ",
    zip: "85258",
    full: "6727 E Shea Blvd, Scottsdale, AZ 85254"
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-100!3d35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0!5e0!3m2!1sen!2sus!4v1234567890",

  // ==========================================
  // OFFICE HOURS
  // ==========================================
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 5:00 PM",
    saturday: "Saturday: By Appointment",
    sunday: "Sunday: Closed"
  },

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  social: {
    facebook: "https://www.facebook.com/guerraplasticsurgery/",
    instagram: "https://www.instagram.com/azbreasts/",
    youtube: "https://www.youtube.com/user/abguerramd",
    tiktok: "",
    realself: ""
  },

  // ==========================================
  // SEO SETTINGS
  // ==========================================
  seo: {
    primaryCity: "Scottsdale",
    primaryState: "AZ",
    serviceArea: "Scottsdale, AZ",
    homeMetaDescription: "Guerra Plastic Surgery Center offers breast augmentation, facelifts, tummy tucks & more. Board-certified plastic surgeon Dr. Aldo Guerra. Schedule your consultation today.",
    businessType: "PlasticSurgery"
  },

  // ==========================================
  // ABOUT SECTION
  // ==========================================
  about: {
    shortBio: "Dr. Aldo Guerra is a RealSelf 100 Top Doctor and also a Top Doctor selected by the Phoenix Magazine. He has board certifications and an outstanding history practicing in the Phoenix area for over 15 years. Congratulations Dr. Guerra on winning Best of Our Valley 2026 for Health & Self: Best Board-Certified Plastic Surgeon Welcome to the website of Dr. Aldo Guerra, one of thetop plastic surgeons in Arizona. Dr.",
    credentials: [
      "Board Certified by the American Board of Plastic Surgery",
      "Fellow of the American College of Surgeons (FACS)",
      "Member of the American Society of Plastic Surgeons"
    ],
    education: [
      "Medical Degree",
      "General Surgery Residency",
      "Plastic Surgery Fellowship"
    ]
  },

  // ==========================================
  // SERVICES OFFERED
  // ==========================================
  services: {
    breast: {
      enabled: true,
      procedures: {
        augmentation: true,
        lift: true,
        reduction: true,
        revision: true,
        implantRemoval: true,
        maleBreastReduction: true
      }
    },
    body: {
      enabled: true,
      procedures: {
        tummyTuck: true,
        liposuction: true,
        mommyMakeover: true,
        bodyLift: true,
        armLift: true,
        thighLift: true,
        buttockAugmentation: true
      }
    },
    face: {
      enabled: true,
      procedures: {
        facelift: true,
        neckLift: true,
        eyelidSurgery: true,
        browLift: true,
        rhinoplasty: true,
        chinAugmentation: true,
        earSurgery: true
      }
    },
    nonSurgical: {
      enabled: true,
      procedures: {
        botox: true,
        fillers: true,
        laserTreatments: true,
        skincare: true
      }
    }
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      name: "Sarah M.",
      procedure: "Breast Augmentation",
      rating: 5,
      text: "Dr. Aldo Guerra made me feel completely comfortable from consultation to recovery. The results exceeded my expectations.",
      location: "Scottsdale, AZ"
    },
    {
      name: "Jennifer L.",
      procedure: "Mommy Makeover",
      rating: 5,
      text: "After having children, I never thought I'd feel like myself again. Dr. Aldo Guerra gave me back my confidence.",
      location: "Scottsdale, AZ"
    },
    {
      name: "Michael R.",
      procedure: "Rhinoplasty",
      rating: 5,
      text: "I researched dozens of surgeons before choosing this practice. The artistic eye and technical skill produced results that look completely natural.",
      location: "Scottsdale, AZ"
    }
  ],

  showGallery: true,
  galleryDisclaimer: "Individual results may vary. Photos are of actual patients who have given consent for their use.",

  // ==========================================
  // FINANCING
  // ==========================================
  financing: {
    enabled: true,
    providers: ["CareCredit", "Prosper Healthcare Lending", "PatientFi"],
    text: "We believe everyone deserves to feel confident. Flexible financing options available to fit your budget."
  },

  // ==========================================
  // COLORS (CSS Custom Properties)
  // ==========================================
  colors: {
    primary: "#337ab7",
    secondary: "#5bc0de",
    accent: "#3c763d",
    text: "#333333",
    lightBg: "#f8f9fa",
    white: "#ffffff"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}
