import {createRouter,createWebHistory} from 'vue-router'

    const routes = [
        //mengumpul data yang akan ditampilkan
        {
            path:'/',
            name:'transaction.index',
            component: () => import ("../views/transaction/Index.vue")
        },
        {
            path:'/create',
            name:'transaction.create',
            component: () => import ("../views/transaction/Create.vue")
        },
        {
            path:'/edit/:id',  //add parameter id to path
            name:'transaction.edit',
            component: () => import ("../views/transaction/Edit.vue")
        },
    ];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;