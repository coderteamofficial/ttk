var app = new Vue({
    el: '#app',
    data: {
        verify: false,
        isActive: false,
        success: false,
        loginttk: false,
        no_sms: false,
        call_auth: false,
        speedup: false,
        speedup_next: false,
    },
    methods: {
        activeSection: function() {
            this.isActive = !this.isActive;
        }
    }
});