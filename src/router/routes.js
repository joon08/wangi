import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import Deserve from '../pages/Deserve/Deserve.vue'
import Personal from '../pages/Personal/Personal.vue'
import ShoppingCard from '../pages/ShoppingCard/ShoppingCard.vue'
import CategoryItem from '../pages/Category/CategoryItem/CategoryItem.vue'

const routes = [
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    children: [
      {
        path: '/category/:id',
        component: CategoryItem
      },
      {
        path: '/category',
        redirect:'/category/11'
      }
    ],
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/deserve',
    component: Deserve,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/shoppingcard',
    component: ShoppingCard,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default routes
