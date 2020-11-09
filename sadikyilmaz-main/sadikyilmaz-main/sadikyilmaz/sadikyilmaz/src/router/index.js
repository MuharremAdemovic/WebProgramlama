import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/sepet",
    name: "Sepet",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Sepet" */ "../components/Sepet")
  },
  {
    path: "/giris",
    name: "Giris",
    component: () =>
    import("../components/Giris")
  },
  {
    path: "/kislikAvantajlar",
    name: "KışlıkAvantajlar",
    component: () =>
    import("../components/KislikAvantajlar")
  },

  {
    path: "/tümkategoriler",
    name: "Tümkategoriler",
    component:() =>
    import("../components/Tümkategoriler")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
