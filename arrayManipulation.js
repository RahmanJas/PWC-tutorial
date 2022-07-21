// Array of numbers
const studentScores = [80, 90, 70, 60, 50];
// array of strings

const studentsNames = ['Oluwakemi','James', 'Timilehin', 'oluwafemi'];

//Array of objects
const studentActivities= [
    {
        id:1,
        description: 'Having the induction session',
        isDone: true,
    },
    {
        id:2,
        description: "Starting the Javascript,HTML, CSS, React class",
        isDone: false
    },
    {
        id:3,
        description: 'Starting the c#.NET classes',
        isDone : false,
    },
];

//accessing the array elements

console.log(studentScores[0]);
console.log(studentScores[1]);
console.log(studentsNames[0]);
console.log(studentsNames[3]);
// console.log(studentActivities[3].description);
// console.log(studentActivities[0].isDone);

//converting the array of objects to JSON format

// const studentActivitiesId=studentActivities.map(  (activity)=> activity.Id);
// const studentActivitiesDescription=studentActivities.map(
//     (activity)=> activity.description
// );
//const studentActivitiesJSON = JSON.stringify(studentActivities)


const customerAccountInfo= [
    {
        id:1,
        accountNumber: "123456789",
        fullName: "Oluwakemi Ogunjobi",
        address: "24, ajose lagos",
        canDebit: true,
    },
    {
        id:2,
        accountNumber: "123456789",
        fullName: "Abdulrahman Ogunjobi",
        address: "24, ajose lagos",
        canDebit: true,
    },
    {
        id:3,
        accountNumber: "123456789",
        fullName: "Oluwakemi Ogunjobi",
        address: "24, ajose lagos",
        canDebit: false,
    },
];




//Map



const customerAccountInfoAccountNumber=customerAccountInfo.map(function(customerAccountInfo) {
    return customerAccountInfo.accountNumber
});
const customerAccountInfoFullName=customerAccountInfo.map(function(customerAccountInfo) {
    return customerAccountInfo.fullName
});
const customerAccountInfoAddress=customerAccountInfo.map(function(customerAccountInfo) {
    return customerAccountInfo.address
});
const customerAccountInfoCanDebit=customerAccountInfo.map(function(customerAccountInfo) {
    return customerAccountInfo.canDebit
});

console.log(customerAccountInfoAccountNumber);
console.log(customerAccountInfoFullName);
console.log(customerAccountInfoAddress);
console.log(customerAccountInfoCanDebit);

//create new array and multiply the score by 2


const studentGrade = [80, 90, 70, 60, 50];
const newStudentGrade=studentGrade.map(function(studentGrade){
     const  multipliedNum= studentGrade * 2;
      return ( "The result gives " + multipliedNum)
});

console.log(newStudentGrade);
//filter()

const studentActivitiesDone = studentActivities.filter(
    (activity) => activity.isDone 
);
console.log(studentActivitiesDone);

const studentActivities3 = studentActivities.filter(
    (activity) => activity.id === 3
);
console.log(studentActivities3);


