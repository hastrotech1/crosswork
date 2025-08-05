let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access granted!";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted!";
} else {
    accessLevel = "No access granted!!";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else{
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCat;

switch (userType){
    case "admin":
        userCat = "Administrator";
        break;
    case "manager":
        userCat = "Manager";
        break;
    case "subscriber":
        userCat = "Subscriber";
        break;
    default:
        userCat = "Unknown";
}
console.log("User Category:", userCategory);

let isAuth = true;
let authStat = isAuth ? "Authenticated" : "Not authenticated";

console.log("Authenticaton Status:", authStat);

let role;

switch(role) {
    case "employee":
        console.log("Access granted: You are eligible for full access to Dietary Services.");
        break;
    case "enrolled member":
        console.log("Access granted: You are eligible for full access to Dietary Services and one-on-one interaction with a dietician.");
        break;
    case "subscriber":
        console.log("Access granted: You have partial access to facilitate Dietary Services.");
        break;
    case "non-subscriber":
        console.log("Access denied: You need to enroll or subscribe first to avail the Dietary Services.");
        break;
    default:
        console.log("Invalid role: Please enter a valid role (Employee, Enrolled Member, Subscriber, Non-Subscriber).");
}