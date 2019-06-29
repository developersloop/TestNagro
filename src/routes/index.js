import Vue from 'vue';
import Router from 'vue-router';
import Grid from '../components/Grid/Grid.vue';
Vue.use(Router);
const router = new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'Grid',
            component:Grid,
            meta:{
                guest:true
            }
        }
    ]
});


export default router;