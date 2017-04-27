// Libs
import {Meteor} from 'meteor/meteor';
import Vue from 'vue';

// Main app
import App from '/imports/ui/App.vue';

import VueTracker from 'vue-meteor-tracker';
Vue.use(VueTracker);

Meteor.startup(() => {
  //noinspection JSUnusedGlobalSymbols
  new Vue({
    render: h => h(App),
  }).$mount('app');
});