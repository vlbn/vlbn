import API from "./API"

export default {
    getQuote() {
        return API().get("/")
    }
}
