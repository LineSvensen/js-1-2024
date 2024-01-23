const carName = "     h   j h    ";
console.log(carName);
// trim removes space before and after hjh.  // replace(/[^a-zA-Z0-9]/g, '') means it takes away all space
const trimmedName = carName.trim().replace(/[^a-zA-Z0-9]/g, '');  //if you want ooo to replace. place in the ''
console.log(trimmedName);

