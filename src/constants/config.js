// Hospital Configuration and Content
export const hospitalConfig = {
  name: 'Chimex Hospital',
  tagline: 'Caring for Sickle Cell Warriors',
  address: 'Nnewi, Nigeria',
  
  // Contact Information
  contact: {
    phone: '+234 (0) XXX XXX XXXX',
    whatsapp: '+234 (0) XXX XXX XXXX',
    email: 'info@chimexhospital.com',
    facebook: 'https://facebook.com/chimexhospital',
    linkedin: 'https://linkedin.com/company/chimexhospital',
    instagram: 'https://instagram.com/chimexhospital',
    youtube: 'https://youtube.com/@chimexhospital',
  },

  // Home Page Content
  home: {
    hero: {
      title: 'Expert Sickle Cell Care in Nnewi',
      subtitle: 'Providing compassionate, comprehensive healthcare to sickle cell patients and their families',
      cta: 'Book an Appointment',
      supportCta: 'Support Our Program',
    },
    about: {
      title: 'About Chimex Hospital',
      description: 'Chimex Hospital is dedicated to providing specialized sickle cell disease management and care in Nnewi, Nigeria. We combine modern medical expertise with compassionate patient care.',
    },
    services: {
      title: 'Our Services',
      items: [
        'Sickle Cell Diagnosis & Testing',
        'Pain Management & Crisis Care',
        'Chronic Disease Management',
        'Genetic Counseling',
        'Patient Education Programs',
      ],
    },
  },

  // About Page Content
  about: {
    title: 'About Chimex Hospital Sickle Cell Care Program',
    mission: 'To provide accessible, quality sickle cell disease management and improve the quality of life for patients and families in Nigeria.',
    founded: 'Established to address the critical need for specialized sickle cell care in Nigeria, Chimex Hospital has become a beacon of hope for thousands of patients.',
    coreValues: [
      {
        title: 'Compassion',
        description: 'We treat every patient with dignity, empathy, and respect.',
      },
      {
        title: 'Excellence',
        description: 'We maintain the highest standards of medical care and professional ethics.',
      },
      {
        title: 'Accessibility',
        description: 'We work to make quality care affordable and available to all.',
      },
      {
        title: 'Community',
        description: 'We empower patients through education and family-centered care.',
      },
    ],
    leadership: [
      {
        name: 'Dr. [Chief Medical Officer Name]',
        title: 'Chief Medical Officer',
        qualifications: 'MD, Hematology Specialist',
        experience: '20+ years in sickle cell care',
        image: '/images/doctor-1.jpg',
      },
      {
        name: 'Dr. [Consultant Name]',
        title: 'Lead Consultant',
        qualifications: 'MD, Internal Medicine',
        experience: '15+ years clinical experience',
        image: '/images/doctor-2.jpg',
      },
      {
        name: 'Nurse [Name]',
        title: 'Head Nurse',
        qualifications: 'RN, BSc Nursing',
        experience: '12+ years patient care',
        image: '/images/nurse-1.jpg',
      },
    ],
  },

  // Sickle Cell Programme Page
  program: {
    title: 'Sickle Cell Care Programme',
    overview: 'Our comprehensive sickle cell programme provides complete medical care, from diagnosis through long-term management.',
    patientsServed: '5,000+',
    successRate: '95%',
    services: [
      {
        name: 'Diagnostic Services',
        description: 'Advanced testing including genetic screening and hematologic analysis',
      },
      {
        name: 'Pain Management',
        description: 'Specialized crisis intervention and chronic pain management protocols',
      },
      {
        name: 'Patient Education',
        description: 'Comprehensive programs for patients and families about disease management',
      },
      {
        name: 'Preventive Care',
        description: 'Regular monitoring and preventive interventions to reduce complications',
      },
      {
        name: 'Psychosocial Support',
        description: 'Counseling and support groups for emotional and social well-being',
      },
      {
        name: 'Family Genetic Counseling',
        description: 'Guidance for families about inheritance and reproductive planning',
      },
    ],
    impactStats: [
      { label: 'Patients Served', value: '5000+' },
      { label: 'Success Stories', value: '1200+' },
      { label: 'Hospital Staff', value: '50+' },
      { label: 'Years of Service', value: '15+' },
    ],
    successStories: [
      {
        name: 'Patient Success Story 1',
        story: 'A patient\'s inspiring journey from crisis to wellness through our comprehensive care program.',
        image: '/images/success-1.jpg',
      },
      {
        name: 'Patient Success Story 2',
        story: 'How early intervention and education transformed a patient\'s life and health outcomes.',
        image: '/images/success-2.jpg',
      },
      {
        name: 'Patient Success Story 3',
        story: 'A family\'s testimony about the support and care they received at Chimex Hospital.',
        image: '/images/success-3.jpg',
      },
    ],
  },

  // Donate/Sponsors Page
  donate: {
    title: 'Support Our Mission',
    intro: 'Your generosity helps us continue providing world-class sickle cell care to those in need.',
    donationLevels: [
      {
        amount: '$50',
        level: 'Friend',
        benefits: ['Recognition on website', 'Monthly newsletter'],
      },
      {
        amount: '$250',
        level: 'Supporter',
        benefits: ['All Friend benefits', 'Annual recognition', 'Impact reports'],
      },
      {
        amount: '$1,000',
        level: 'Patron',
        benefits: ['All Supporter benefits', 'Hospital tour', 'Direct impact quarterly updates'],
      },
      {
        amount: 'Custom',
        level: 'Corporate Partner',
        benefits: ['Customized partnership', 'Co-marketing opportunities', 'Impact tracking'],
      },
    ],
    ngoPartnerships: 'We collaborate with leading NGOs to amplify our impact and reach more patients.',
    volunteering: 'Interested in volunteering? Join our team and make a direct difference in patients\' lives.',
  },

  // Book Appointment Page
  appointment: {
    title: 'Book an Appointment',
    description: 'Schedule your visit with our medical team. We prioritize your health and convenience.',
    services: [
      'Initial Consultation',
      'Follow-up Appointment',
      'Pain Management Visit',
      'Genetic Counseling',
      'Family Education Program',
    ],
  },

  // Contact Page
  contactPage: {
    title: 'Contact Us',
    intro: 'We\'re here to help. Reach out to us through any of these channels:',
    hours: 'Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed (Emergency Only)',
  },
}

export default hospitalConfig
