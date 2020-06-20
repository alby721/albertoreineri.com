'use strict';

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-131500527-17",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
        ,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        //optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        //experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        //variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Defers execution of google analytics script after page load
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "albertoreineri.netlify.app",
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-131500527-17', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
  ],
  url: 'https://lumen.netlify.com',
  pathPrefix: '/',
  title: 'Blog by Alberto Reineri',
  subtitle: 'Web Developer based in Cuneo - Italy. I love coding 💻, learning 📚, cycling 🚲 and sleeping 😂',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Alberto Reineri',
    photo: '/photo.jpg',
    bio: 'Web Developer based in Cuneo - Italy. I love coding 💻, learning 📚, cycling 🚲 and sleeping 😂',
    contacts: {
      github: 'alby721',
      email: 'info@albertoreineri.it',
      facebook: '/alberto.reineri',
      telegram: '',
      twitter: 'ReineriAlberto',
      rss: '',
      vkontakte: '',
      linkedin: 'alberto-r-b1b8b358/',
      instagram: 'albertoreineri/',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
    }
  }
};
