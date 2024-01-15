

let user = {}

user.name = "Jonas";

user.surName = "The great";

user.name = "Helene";

delete user.name;

console.log(user);


// key is foreks name:
function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true;
};

const isMyObjectEmpty = isEmpty({});
console.log("isMyObjectEmpty: ", isMyObjectEmpty);


// q3 :

