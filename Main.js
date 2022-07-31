const Prices = Vue.createApp({
    data(){
        return {
            // Price
            PrizeLowest: "Free",
            PrizeLow: "5R+",
            PrizeMedium:  "50R+",
            PrizeHigh: "100R+",
            // Jobs
            PrizeLowestJobs: "Building",
            PrizeLowJobs: "Building",
            PrizeMediumJobs: "Building, Scripting",
            PrizeHighJobs: "Building, Scripting, Composing"
        }
    }
})

const PricesCreditLine = Vue.createApp({
    data(){
        return {
            // Price
            PrizeLowest: "Free",
            PrizeLow: "5R+",
            PrizeMedium:  "50R+",
            PrizeHigh: "100R+",
        }
    }
})

Prices.mount(".PaymentTable")
PricesCreditLine.mount(".CreditLine")
