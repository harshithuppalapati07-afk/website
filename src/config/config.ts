// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'Uppalpati Harshith',
    title: 'Economics with Data Science Undergraduate',
    image: getAsset('images/profile.png'), // Customize or replace with your profile image
    description:
      'Write a short bio here describing your background and focus. Keep it to 2–4 sentences.\n' +
      '\n' +
      'Mention your institution or company, areas of interest, and what you teach or build.\n' +
      '\n' +
      'Summarize your education or certifications briefly and highlight your practical work.\n' +
      '\n' +
      'Optional: Add notable books, workshops, or training you deliver.',
    tagline: 'Exploring economics through data and finance',
    location: 'Banglore, India',
  },

  seo: {
    title: 'Uppalpati Harshith – Economics with Data Science',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Economics Student','Dart Enthusiast', 'Finance Learner', 'Aspiring Analyst'],

  navigation: [
    { name: 'Home', url: '/' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],


  education: [
    {
      institution: 'Christ University',
      degree: 'Economics with Data Science ',
      year: '2025-2029',
      image: getAsset('images/education/placeholder.png'),
      description: ['Brief description of your focus or thesis'],
    },
    {
      institution: 'Maharishi Vidya Mandir',
      degree: 'Higher Secondary Education',
      year: '2023–2025',
      image: getAsset('images/education/placeholder.png'),
      description: ['Key topics or skills learned'],
    },
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Investment Banking Virtual Experience',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Financial Analysis', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Data Analyst Intern',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Flekt',
      time: '(2026 – Present)',
      desp: ['Analyzing data trends to support business decisions', 'Creating visualizations to communicate findings'],
    },
  ],



  contact: {
    email: 'your.email@example.com',
    linkedin: 'https://www.linkedin.com/in/harshith-uppalapati-77427a348/',
    github: 'https://github.com/harshithuppalapati07-afk',
  
  },
};

export default siteConfig;
