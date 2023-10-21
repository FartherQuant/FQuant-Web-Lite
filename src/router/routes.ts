
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
    path: '/marketindustry',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/BaseView.vue'),
          LeftSidebar: () => import('components/LeftBaseView.vue'),
          
        }, }
    ]
  },
  {
    path: '/indexscatter',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/IndexScatterView.vue'),
          LeftSidebar: () => import('components/LeftBaseView.vue'),
          
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
    path: '/trend',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/TrendView.vue'),
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
          LeftSidebar: () => import('components/LeftPredataView.vue'), 
        }, }
    ]
  },
  {
    path: '/predata',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/PreDataView.vue'),
          LeftSidebar: () => import('components/LeftPredataView.vue'), 
        }, }
    ]
  }, 
  {
    path: '/predataind',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/PreDataIndView.vue'),
          LeftSidebar: () => import('components/LeftPredataView.vue'), 
        }, }
    ]
  }, 
  {
    path: '/enddata',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/EndDataView.vue'),
          LeftSidebar: () => import('components/LeftPredataView.vue'), 
        }, }
    ]
  }, 
  {
    path: '/industrylists',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/IndustrylistsView.vue'),
          LeftSidebar: () => import('components/LeftMarketView.vue'),
          
        }, }
    ]
  },
  {
    path: '/bond2stocklists',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/Bond2StocklistsView.vue'),
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
    path: '/marketstyle',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/MarketStyleView.vue'),
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
    path: '/exit',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/ExitlistsView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
        }, }
    ]
  },
  {
    path: '/strategydata',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/StrategyDataView.vue'),
          LeftSidebar: () => import('components/LeftWidthindexView.vue'),
          
        }, }
    ]
  },
  {
    path: '/monery',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/MoneryView.vue'),
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
  {
    path: '/fundowner-1',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/FundOwner01View.vue'),
          LeftSidebar: () => import('components/LeftFundOwnerView.vue'), 
        }, }
    ]
  },
  {
    path: '/fundowner-4',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/FundOwner04View.vue'),
          LeftSidebar: () => import('components/LeftFundOwnerView.vue'), 
        }, }
    ]
  },
  {
    path: '/fundowner-all',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/FundOwnerAllView.vue'),
          LeftSidebar: () => import('components/LeftFundOwnerView.vue'), 
        }, }
    ]
  },
  {
    path: '/marketstatus',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', components: {
          Main: () => import('pages/MarketStatusView.vue'),
          LeftSidebar: () => import('components/LeftMstatusView.vue'), 
        }, }
    ]
  },

]

export default routes
