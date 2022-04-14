const pullRequest = {
    title: '"Add blog"',
    author: 'Omar Ventura',
    branchName: 'main',
    dateCreated: '2020-02-22',
    status: 'closed',
    repositoryNameAssociated: 'launch-x-explorers',

    getStatus(){
        return `The pull request ${this.title} sent to ${this.repositoryNameAssociated} is ${this.status}`
    },
    getTitleAndAuthor(){
        return `${this.title} was created by ${this.author}`
    }
};

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());