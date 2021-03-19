import {defineConfig} from 'umi';

export default defineConfig({
    //webpack5: {},

    ignoreMomentLocale: true,

    title: 'UmiJs Sample app',
    publicPath: '/static/',
    analytics: {
        ga: 'UA-62269729-10'
    },

    nodeModulesTransform: {
        type: 'none'
    },

    dynamicImport: {
        loading: '@/components/Loading/index.js'
    },

    metas:[
        {
            property: 'og:locale',
            content: 'en_US'
        }
    ],

    headScripts: [
        {
            content: 'console.log("loaded")'
        }
    ],
    styles: [
        'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500&display=swap',
        'body {font-weight: 300; font-family: "Work Sans", sans-serif;} a {cursor: pointer;}'
    ],
    scripts: [
        {
            content: 'console.log("loaded in the end")'
        }
    ]
});
