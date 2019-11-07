import Home from "./js/home/hindex.vue"
import Money from "./js/money/index.vue"

const routers = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/money',
        name: 'money',
        component: Money
    }
]
export default routers

// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'home',
//             component: Home,
//         },
//         {
//             path: '/money',
//             name: 'money',
//             component: Money
//         }
//     ],
// })
