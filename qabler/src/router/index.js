import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import DocumentationsPage from '../pages/documentations-page/DocumentationsPage.vue'
import DocColors from '../pages/documentations-page/components/doc-colors/DocColors.vue'
import DocAlerts from '../pages/documentations-page/components/doc-alerts/DocAlerts.vue'
import DocAvatars from '../pages/documentations-page/components/doc-avatars/DocAvatars.vue'
import DocTags from '../pages/documentations-page/components/doc-tags/DocTags.vue'
import DocButtons from '../pages/documentations-page/components/doc-buttons/DocButtons.vue'
import DocCards from '../pages/documentations-page/components/doc-cards/DocCards.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/documentations',
      name: 'DocumentationsPage',
      component: DocumentationsPage,
      children: [
        {
          path: 'alerts',
          name: 'DocAlerts',
          component: DocAlerts
        },
        {
          path: 'colors',
          name: 'DocColors',
          component: DocColors
        },
        {
          path: 'avatars',
          name: 'DocAvatars',
          component: DocAvatars
        },
        {
          path: 'tags',
          name: 'DocTags',
          component: DocTags
        },
        {
          path: 'buttons',
          name: 'DocButtons',
          component: DocButtons
        },
        {
          path: 'cards',
          name: 'DocCards',
          component: DocCards
        },
        {
          path: '/',
          redirect: '/documentations/alerts'
        }
      ]
    }
  ]
})
