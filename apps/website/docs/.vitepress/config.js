export default {
    base: '/docs/',
    title: 'Project Documentation',
    description: 'Technical documentation for your Vue project',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide' },
      ],
      sidebar: [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Installation Guide', link: '/guide' },
          ]
        }
      ]
    }
  }
