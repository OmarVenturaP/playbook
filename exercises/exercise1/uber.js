const user = {
    name: "Elon Musk",
    rewards: 222,
    payMethod: "Credit Card",
    rate: 4.5,
    email: "mail@example.com",
    address: "street 123",
    getRate: function(){
        return `${this.name} has ${this.rate}/5 stars`
    },
    getGeneralInfo: function(){
      return `The user ${this.name} lives in ${this.address}`
    }
   }
const travel = {
    clientName: "Elon Musk",
    fromAddress: "Baja Sur address 1",
    toAddress: "Baja Sur address 2",
    hasMiddleStops: false,
    tripType: "Uber",
    price: 494,
    getTypeAndPrice: function(){
        return `The trip is ${this.tripType} with a price of $${this.price}`
    },
    getGeneralInfo: function(){
      return `The user ${this.clientName} will go from ${this.fromAddress} to ${this.toAddress}`
    }
   }
   
   console.log("User name: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getRate())
   console.log(user.getGeneralInfo())

   console.log("User name: " + travel.clientName)
   console.log(travel.getTypeAndPrice())
   console.log(travel.getGeneralInfo())