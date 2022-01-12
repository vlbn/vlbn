import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {

    state: () => ({
        user: {
            id: "007",
            name: "starlord",
            avatar: "https://picsum.photos/200",
            email: "starlord@xandar",
            role: "a"
        },
        isLoggedIn: false,
    }),

    actions: {
        setUser(value) {
            this.user = value
        },
        setIsLoggedIn(value) {
            this.isLoggedIn = value
        }
    }

});
