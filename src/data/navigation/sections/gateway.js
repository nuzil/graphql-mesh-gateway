module.exports = [
    {
        title: 'Overview',
        path: '/gateway',
        header: true,
        pages: [
            {
                title: 'Getting started',
                path: '/gateway/getting-started',
            },
            {
                title: 'What is API Mesh?',
                path: '/gateway/overview'
            },
        ],
    },
    {
        title: 'Working with your mesh',
        path: '/gateway/create-mesh/',
        header: true,
        pages: [
            {
                title: 'Create a mesh',
                path: '/gateway/create-mesh'
            },
            {
                title: 'Work with your mesh',
                path: '/gateway/work-with-mesh'
            },
            {
                title: 'Source handlers',
                path: '/gateway/source-handlers',
            },
            {
                title: 'Transforms',
                path: '/gateway/transforms',
            },
            {
                title: 'Headers',
                path: '/gateway/headers'
            },
            {
                title: 'Cache-control headers',
                path: '/gateway/cache-control-headers'
            },
            {
                title: 'Dynamic content caching with Fastly',
                path: '/gateway/fastly'
            },
        ],
    },
    {
        title: 'Resources',
        path: '/gateway/command-reference',
        header: true,
        pages: [
            {
                title: 'Command reference',
                path: '/gateway/command-reference'
            },
            {
                title: 'API Mesh walkthrough',
                path: '/gateway/mesh_walkthrough'
            },
            {
                title: 'Developer Tools',
                path: '/gateway/developer-tools.md'
            },
            {
                title: 'Hooks',
                path: '/gateway/hooks',
            },
            {
                title: 'Batching ',
                path: '/gateway/batching.md',
            },
            {
                title: 'Extend the schema with custom resolvers',
                path: '/gateway/extending-unified-schema.md'
            },
            {
                title: 'CI/CD walkthrough',
                path: '/gateway/cicd.md'
            },
            {
                title: 'Release notes',
                path: '/gateway/release-notes'
            },
            {
                title: 'Upgrade versions',
                path: '/gateway/upgrade'
            },
            {
                title: `Videos`,
                path: `https://experienceleague.adobe.com/docs/commerce-learn/api-mesh/getting-started-api-mesh.html`,
                EventTarget: `_blank`
            },
            {
                title: `Understanding Extensibility`,
                path: `https://developer.adobe.com/commerce/extensibility/app-development/examples/`,
                EventTarget: `_blank`
            }
        ]
    }
    ]