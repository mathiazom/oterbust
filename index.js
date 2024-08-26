let app = new Vue({
    el: "#app",
    computed: {
        greeting() {
            let hour = new Date().getHours();
            if (hour < 6) {
                return "Morgenfugl eller nattdyr? Hei uansett!"
            } else if (hour < 9) {
                return "God morgen!"
            } else if (hour < 18) {
                return "God dag!"
            } else {
                return "God kveld!"
            }
        }
    }
})
