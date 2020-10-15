export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f87b90c41ae213889620ba0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zujmpner',
                  apiId: '1a489ff6-e67d-4ff3-b03b-7806b45c1465'
                },
                {
                  buildHookId: '5f87b90cc4e2953a21a9b9c9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4ywwfy7v',
                  apiId: '2ea95219-48e0-4c4e-81fd-17e7a3f05a30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sagascript/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4ywwfy7v.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
