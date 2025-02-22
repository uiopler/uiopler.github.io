// gitprofile.config.js

const config = {
  github: {
    username: 'uiopler', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['uiopler', 'register', 'uiopler.github.io'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: '',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'uiopler',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://uiopler.is-a.dev',
    phone: '',
    email: 'uiopler.dev@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Discord API',
    'Python',
    'MongoDB',
    'OpenCV',
    'Git',
    'Machine learning',
    'MySQL',

  ],
  experiences: [
    {
      company: 'Butterfly Client',
      position: 'Bot Developer',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'LitchyMC',
      position: 'Bot Developer',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
//     {
//       institution: 'Toulouse College',
//       degree: 'Highschool Diploma',
//       from: '2022',
//       to: 'Present',
//     },
//     {
//       institution: 'Zahia Salman Highschool',
//       degree: 'Lebanese Brevet',
//       from: '2019',
//       to: '2021',
//     },
//     {
//       institution: 'Toulouse College',
//       degree: 'Middle School',
//       from: '2014',
//       to: '2019',
//     },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
//     {
//       title: 'Project Name',
//       description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
//       imageUrl: 'https://via.placeholder.com/250x250',
//       link: 'https://example.com',
//     },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'uiopler', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with ❤️`,
};

export default config;
