import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({});

new Vue({
    el: '#app',
    store,
    template:
        '<div>Hello Vue(x) World! - Finished on page 95</div>'
});