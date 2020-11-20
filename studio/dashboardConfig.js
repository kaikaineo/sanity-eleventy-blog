export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5fb806255d612a2c6f44ece3',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ckkghn3d',
                  apiId: '8b4a3fa1-9674-4b4b-9bc6-120254d45480'
                },
                {
                  buildHookId: '5fb80625b6d2ab32cadf9bcd',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ds23sct2',
                  apiId: 'd915a917-982a-4854-a138-8c83fddb9f51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kaikaineo/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ds23sct2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
