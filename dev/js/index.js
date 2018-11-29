Vue.directive('mask', VueMask.VueMaskDirective);

var app = new Vue({
    el: '#app',
    data: {
        verify: false,
        success: false,
        loginttk: false,
        no_sms: false,
        call_auth: false,
        speedup: false,
        speedup_next: false,
        checkButton: false,
        code: null,
        yourCode: '',
        maskCode: '#####',
        yourPhone: '',
        maskPhone: '+7 (###) ?##########',
        placePhone: '+7 (___) _______'
    }
});