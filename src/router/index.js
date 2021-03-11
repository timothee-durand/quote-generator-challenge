import Vue from 'vue'
import VueRouter from 'vue-router'
import RandomQuotePage from "@/views/RandomQuotePage.vue";
import QuoteFromAuthor from "@/views/QuoteFromAuthor.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RandomQuote',
    component: RandomQuotePage
  },
  {
    path: '/author:name',
    name: 'QuoteFromAuthor',
    component: QuoteFromAuthor
  },
]

const router = new VueRouter({
  routes
})

export default router
