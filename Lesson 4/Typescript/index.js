var user = {
    name: 'Danu',
    age: 50,
    jobs: ['a', 'b'],
    getJobs: function () {
        return this.jobs;
    },
    LogName: function () {
        console.log(this.name);
    }
};
var user2 = {
    name: "Olesea",
    age: 25,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
