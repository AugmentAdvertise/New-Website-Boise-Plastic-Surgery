// ============================================
// PRACTICE WEBSITE CONFIGURATION
// ============================================
// Customized for Kramer Plastic Surgery
// ============================================

const SITE_CONFIG = {
  // ==========================================
  // PRACTICE INFORMATION
  // ==========================================
  practiceName: "Kramer Plastic Surgery",
  doctorName: "Dr. Jonathan Kramer",
  doctorCredentials: "MD",
  doctorTitle: "Board-Certified Plastic Surgeon",
  tagline: "Beautiful Transformations to Make Life Happen",

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  phone: "(208) 344-4900",
  phoneClean: "2083444900",
  fax: "(208) 385-7811",
  email: "info@kramerplasticsurgery.com",

  // ==========================================
  // LOCATION
  // ==========================================
  address: {
    street: "1736 S Millennium Way",
    city: "Meridian",
    state: "ID",
    zip: "83642",
    full: "1736 S Millennium Way, Meridian, ID 83642"
  },

  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.123!2d-116.3530!3d43.6007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae5710c43945f7%3A0x67c0e70747e2e064!2s1736+S+Millennium+Way%2C+Meridian%2C+ID+83642!5e0!3m2!1sen!2sus!4v1706000000000",

  // ==========================================
  // OFFICE HOURS
  // ==========================================
  hours: {
    monThurs: "Monday - Thursday: 8:00 AM - 4:00 PM",
    friday: "Friday: 8:00 AM - 12:00 PM",
    weekend: "Saturday - Sunday: Closed"
  },

  // ==========================================
  // SOCIAL MEDIA
  // ==========================================
  social: {
    facebook: "https://www.facebook.com/KramerPlasticSurgery/",
    instagram: "https://www.instagram.com/kramerplasticsurgery/",
    youtube: "",
    tiktok: "",
    realself: ""
  },

  // ==========================================
  // SEO SETTINGS
  // ==========================================
  seo: {
    primaryCity: "Boise",
    primaryState: "ID",
    serviceArea: "Boise, Meridian, and the Treasure Valley, ID",
    homeMetaDescription: "Kramer Plastic Surgery in Boise offers breast augmentation, facelifts, tummy tucks & more. Board-certified plastic surgeon Dr. Jonathan Kramer. Schedule your consultation today.",
    businessType: "PlasticSurgery"
  },

  // ==========================================
  // ABOUT SECTION
  // ==========================================
  about: {
    shortBio: "Dr. Jonathan Kramer is a board-certified plastic surgeon serving the Boise and Treasure Valley area. He attended Vanderbilt University, earned his Medical Degree at Emory University, completed a five-year general surgery residency where he was awarded Outstanding Surgical Intern, and finished a two-year plastic surgery fellowship at the University of Colorado Health Sciences Center. Dr. Kramer is dedicated to helping patients achieve beautiful transformations to make life happen.",
    credentials: [
      "Board Certified by the American Board of Plastic Surgery",
      "Active Member of the American Society of Plastic Surgeons",
      "Idaho's Best 2022 - Statewide and Treasure Valley"
    ],
    education: [
      "Bachelor of Arts & Masters Degree - Vanderbilt University",
      "Medical Degree - Emory University, Atlanta, GA",
      "General Surgery Residency - Phoenix Integrated Surgical Residency Program",
      "Plastic Surgery Fellowship - University of Colorado Health Sciences Center, Denver"
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
        maleBreastReduction: false
      }
    },
    body: {
      enabled: true,
      procedures: {
        tummyTuck: true,
        liposuction: true,
        mommyMakeover: true,
        bodyContouring: true,
        armLift: true,
        thighLift: true,
        braLineBackLift: true,
        maleBreastReduction: true
      }
    },
    face: {
      enabled: true,
      procedures: {
        facelift: true,
        neckLift: true,
        eyelidSurgery: true,
        browLift: true,
        chinSurgery: true
      }
    },
    nonSurgical: {
      enabled: true,
      procedures: {
        botox: true,
        fillers: true,
        coolsculpting: true,
        laserTreatments: true,
        chemicalPeels: true,
        skincare: true
      }
    }
  },

  // ==========================================
  // TESTIMONIALS
  // ==========================================
  testimonials: [
    {
      name: "Patient A.",
      procedure: "Breast Augmentation",
      rating: 5,
      text: "Dr. Kramer made me feel completely comfortable from consultation to recovery. The results exceeded my expectations, and I finally feel confident.",
      location: "Boise, ID"
    },
    {
      name: "Patient B.",
      procedure: "Mommy Makeover",
      rating: 5,
      text: "After having children, I never thought I'd feel like myself again. Dr. Kramer gave me back my confidence. His attention to detail is remarkable.",
      location: "Meridian, ID"
    },
    {
      name: "Patient C.",
      procedure: "Facelift",
      rating: 5,
      text: "I researched many surgeons before choosing Dr. Kramer. His artistic eye and technical skill produced results that look completely natural.",
      location: "Boise, ID"
    }
  ],

  showGallery: true,
  galleryDisclaimer: "Individual results may vary. Photos are of actual patients who have given consent for their use.",

  // ==========================================
  // FINANCING
  // ==========================================
  financing: {
    enabled: true,
    providers: ["CareCredit", "Prosper Healthcare Lending"],
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
