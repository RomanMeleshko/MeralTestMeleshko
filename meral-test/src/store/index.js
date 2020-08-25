import Vue from 'vue';
import Vuex from 'vuex';
import Home from '@/store/Home/Home';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Home

    }
})
