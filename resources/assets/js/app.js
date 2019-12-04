require ('./bootstrap');
import VueRouter from 'vue-router';


window.Vue = require('vue');

Vue.use(VueRouter);



const dashboard = require('./components/Dashboard');
const lang = require('./components/Lang');
const home = require('./components/Home');
const checkin = require('./components/Checkin');
const feedback = require('./components/Feedback');
const video = require('./components/Video');
const routes = [
	{
		path: '/',
		component: dashboard
	},
	{
		path: '/lang',
		component: lang
	},
	{
		path: '/home',
		component: home
	},
	{
		path: '/check-in',
		component: checkin
	},
	{
		path: '/video',
		component: video
	},
	{
		path: '/feedback',
		component: feedback
	}
]

const router = new VueRouter({
	routes,
})

const app = new Vue({
	el:'#app',
	router
})