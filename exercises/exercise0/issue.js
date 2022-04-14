const issue = {
    title: 'Live 2 Semana 2',
    repositoryNameAssociated: "LaunchX",
    status: 'open',
    numberOfComments: 12,
    labels: ['LIVE 2', 'SEMANA-2'],
    author: 'carlo gilmar',
    dateCreate: '2020-04-13',
    lastUpdate: '2020-04-13',
    getTitleAndAuthor(){
        return `${this.title} was create by ${this.author}`
    },    
    getGeneralInfo(){
        return `The issue ${this.title} belongs to the repository ${this.repositoryNameAssociated} and is ${this.status}, it was created on ${this.dateCreate} and has ${this.numberOfComments} comments`
    }
}

console.log('The issue ' + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())