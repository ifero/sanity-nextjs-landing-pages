export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '618a64fc5c6b7542e56d9351',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-usyr52aa',
                  apiId: 'e972360d-7608-435e-a48a-6fef9d712765'
                },
                {
                  buildHookId: '618a64fcf40f2e304283797e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-22eawkba',
                  apiId: '31056740-59cc-49cb-bab1-18e60cd116a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ifero/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-22eawkba.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
