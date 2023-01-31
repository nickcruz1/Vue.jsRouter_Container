<!-- Once routes are configured/finished.... -->
<!-- Start using Vue.js functionality (v-for, v-if etc.) -->

// 1. Define route components.
// These can be imported from other files
// Using 'this.[Name Of Route]' allows you to call templates from html
const Home = { template: this.Home}
const About = { template: this.About }
const Settings = {template: this.Settings}

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/settings', component: Settings}
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router)

app.mount('#app')

// Now the app has started!
