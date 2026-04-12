//Modern Syntax Features - Practice optional chaining and nullish coalescing, 
const user = {
  attendance: "present",
  profile: {
    name: "Joy",
    age: 50
  }
};

// Optional chaining
console.log(user.profile?.name);
console.log(user.profile?.school);

//nullish coalescing
console.log(user.profile.address ?? "No Address Provided");
console.log(user.business ?? "No Business in the list");
console.log(user.attendance ?? "No attendance provided");

