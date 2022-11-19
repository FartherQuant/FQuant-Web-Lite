
const routes = [
  {
    path: '/',redirect: '/market'
  },
  {
    path: '/market',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/MarketView.vue'),
          LeftSidebar: () => import('components/LeftMarketView.vue'),
          
        }, }
    ]
  },
  {
    path: '/emotion',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/EmotionView.vue'),
          LeftSidebar: () => import('components/LeftMarketView.vue'),
          
        }, }
    ]
  },
  {
    path: '/prestock',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/PreStockDataView.vue'),
          LeftSidebar: () => import('components/LeftMarketView.vue'), 
        }, }
    ]
  },
  {
    path: '/widthindex',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/WidthindexView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/industry',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/IndustryView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/concept',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/ConceptView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/detail',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/DetailView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/outer',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/OuterView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/stock',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/StockView.vue'),
          LeftSidebar: () => import('components/LeftFundOwnerView.vue'), 
        }, }
    ]
  },
  {
    path: '/fundowner',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/FundOwnerView.vue'),
          LeftSidebar: () => import('components/LeftFundOwnerView.vue'), 
        }, }
    ]
  },
  

]

export default routes
