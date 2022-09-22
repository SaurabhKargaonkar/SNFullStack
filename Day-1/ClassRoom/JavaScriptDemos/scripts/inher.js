let person={
    name: 'admin',
    greet: function(){
        return "hello " + this.name
    }
}
let user = Object.create(person)
user.name = 'manager'
user.doWork = function(task){
    return "I can do this " + task
}


console.log(user);
console.log(user.doWork('teaching'))