module.exports = {
    title: 'zkSync: a UX-centric zkRollup protocol', // adding title gives us a header with search box
    description: 'The new standard for scalable crypto payments',
    repo: 'matter-labs/zksync',
    dest: 'dist',
    markdown: {
        toc: { includeLevel: [2, 3] }
    },
    plugins: [
        [
            'vuepress-plugin-canonical',
            {
                baseURL: 'https://zksync.io', // base url for your canonical link, optional, default: ''
                stripExtension: false // strip '.html' , optional, default: false
            }
        ]
    ],
    themeConfig: {
        logo: '/LogotypeLight.svg',
        lastUpdated: false,
        repo: 'matter-labs/zksync',
        nav: [
            {
                text: 'Docs',
                link: '/faq/intro.html'
            },
            {
                text: 'Contact us',
                link: '/legal/contacts'
            }            
        ],
        //displayAllHeaders: true,
        sidebar: {
            '/legal/': [
                '/legal/terms',
                '/legal/privacy'
            ],
            '/': [         
                {
                    title: 'FAQ',  // required
                    path: '/faq/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 1,     // optional, defaults to 1
                    children: [
                      //['/faq/why', 'Why should I care?'],
                      '/faq/intro',
                      '/faq/tech',
                      '/faq/tokens',
                      '/faq/security',
                      '/faq/decentralization',
                      '/faq/sc',
                      '/faq/privacy'
                    ]
                },             
                {
                    title: 'Developer guide',  // required
                    path: '/dev/', // optional, which should be a absolute path.
                    collapsable: true,  // optional, defaults to true
                    sidebarDepth: 2,    // optional, defaults to 1
                    children: [
                      '/dev/tutorial',
                      '/dev/basic',
                      '/dev/providers',
                      '/dev/accounts',
                      '/dev/rest',
                      '/dev/utils',
                      '/dev/types'
                    ]
                },
            ]
        }
    },
    head: [
        [ 'script', { src: "/__/firebase/7.13.2/firebase-app.js",       defer: true }, ''],
        [ 'script', { src: "/__/firebase/7.13.2/firebase-analytics.js", defer: true }, ''],
        [ 'script', { src: "/__/firebase/init.js",                      defer: true }, ''],
    ],
}
