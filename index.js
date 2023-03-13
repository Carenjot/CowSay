const infoUser = require('./information');
const cowsay = require ('cowsay');


console.log(cowsay.say({
    text : "Hello i'm " + infoUser.name + " from the campus of " + infoUser.campus,
    e : "oO",
    T : "U "
}));
