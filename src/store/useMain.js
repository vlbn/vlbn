import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {

    state: () => ({
        user: {
            id: "007",
            name: "vlbn",
            avatar: "https://picsum.photos/200",
            email: "cf.valbuena@gmail.com",
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
