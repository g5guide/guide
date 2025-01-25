import { h, watch, toRefs } from 'vue'
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import googleAnalytics from 'vitepress-plugin-google-analytics'

import './style.css'
import "vitepress-markdown-timeline/dist/theme/index.css";


/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    enhanceApp({ app, router, siteData }) {
        enhanceAppWithTabs(app);
        googleAnalytics({
            id: 'G-GNLLQFYG4H', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
        })
    },
    Layout() {
        return h(DefaultTheme.Layout, null, {
        });
    },
    setup() {
        // Get frontmatter and route
        const { frontmatter } = toRefs(useData());
        const route = useRoute();

        // Obtain configuration from: https://giscus.app/
        giscusTalk({
            repo: 'g5guide/g5guide.github.io',
            repoId: 'R_kgDOJ55vGA',
            category: 'Comments', // default: `General`
            categoryId: 'DIC_kwDOJ55vGM4CX0n5',
            mapping: 'pathname', // default: `pathname`
            inputPosition: 'top', // default: `top`
            lang: 'ko', // default: `zh-CN`
            lightTheme: 'light', // default: `light`
            darkTheme: 'transparent_dark', // default: `transparent_dark`
            // ...
        }, {
            frontmatter, route
        },
            // Whether to activate the comment area on all pages.
            // The default is true, which means enabled, this parameter can be ignored;
            // If it is false, it means it is not enabled.
            // You can use `comment: true` preface to enable it separately on the page.
            true
        );
    }
}


