const profile = {
    userName: 'JohnRodiles',
    link: "https://www.facebook.com/",
    friends: 350,
    profileID: "werk99607fmfdd76",
    posts: 138,
    dateCreated: new Date(),
    getNumberOfFriends: function(){
        return `${this.userName} has ${this.friends} friends on Facebook`
    },
    getGeneralInfo: function(){
      return `The profile ${this.link}${this.userName} was created on ${this.dateCreated}`
    }
   }
   
   console.log("Personal link: " + profile.link + profile.userName)
   console.log("Posts numbers: " + profile.posts)
   console.log(profile.getNumberOfFriends())
   console.log(profile.getGeneralInfo())

   const post = {
    user: "John Rodiles",
    content: '"Hey everyone on Facebook!"',
    contentType: "Text",
    likes: 300,
    dateCreated: new Date(),
    getContentAndLikes: function(){
        return `The comment ${this.content} has ${this.likes} likes and was created on ${this.dateCreated} by`
    },
   }
   
   console.log("Name: " + post.user)
   console.log("Post type: " + post.contentType)
   console.log(post.getContentAndLikes())
   const user = {
    name: "John",
    city: "Yucatán",
    school: "IPN",
    email: "mail@example.com",
    gender: "male",
    dateOfBirth: "29/12/1990",
    getNameAndBirthday: function(){
        return `${this.name} was born on ${this.dateOfBirth}`
    },
    getGeneralInfo: function(){
      return `The user ${this.name} works and lives in ${this.city}`
    }
   }
   
   console.log("User name: " + user.name)
   console.log("email: " + user.email)
   console.log(user.getNameAndBirthday())
   console.log(user.getGeneralInfo())