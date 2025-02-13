// Define an object representing Gujarat state
const gujarat = {   
  population: "30 lakh",   
  district: 33,   
  capital: "Gandhinagar",   
  largestCity: "Ahmadabad", 
};
console.log(gujarat); // Output the Gujarat object

// Define an object representing a social media post
const post = {   
  username: "@mayurthakor",   
  content: "this is my #firstPost",   
  likes: 150,   
  1: 5,   // Numeric key
  tags: ["@apnacollege", "@delta"], // Array of tags
};
console.log(post); // Output the post object
console.log(post["likes"]); // Access and output the likes property
console.log(post.tags); // Access and output the tags array
console.log(post.tags[0]); // Access and output the first tag
console.log(post[1]); // Access and output the value of the numeric key

// Define a student object
const student = {   
  name: "mayur",   
  age: 21,   
  marks: 89.1,   
  city: "Gujarat", 
};
console.log(student); // Output the student object

// Update the city property of the student object
student.city = "Mumbai"; 
console.log(student); // Output the updated student object

// Add a new property, gender, to the student object
student.gender = "Male";
console.log(student); // Output the student object with the new property

// Change the marks property to "A"
student.marks = "A";
console.log(student); // Output the updated student object

// Delete the city property from the student object
delete student.city;
console.log(student); // Output the student object after deletion

// Define an object of objects representing class information
const classInfo = {   
  mayur: {     // Object for student Mayur
    grade: "A",     
    city: "kadi",   
  },   
  naresh: {    // Object for student Naresh
    grade: "A+",     
    city: "modasha",   
  },   
  rohit: {     // Object for student Rohit
    grade: "O",     
    city: "Gandhinagar",   
  },   
  antrral: {   // Object for student Antrral
    grade: "O+",     
    city: "kadi",   
  }, 
};
console.log(classInfo); // Output the class information object
console.log(classInfo.rohit); // Access and output the object for Rohit
console.log(classInfo.rohit.city); // Access and output the city of Rohit

// Update the city property of Rohit's object
classInfo.rohit.city = "kalol";
console.log(classInfo.rohit); // Output the updated Rohit's object

// Define an array of objects representing class information
const clsInfo = [   
  {     // Object for student Mayur
    name: "mayur",     
    grade: "A",     
    city: "kadi",   
  },   
  {     // Object for student Naresh
    name: "naresh",     
    grade: "A+",     
    city: "modasha",   
  },   
  {     // Object for student Rohit
    name: "rohit",     
    grade: "O",     
    city: "Gandhinagar",   
  },   
  {     // Object for student Antrral
    name: "Antrral",     
    grade: "O+",     
    city: "kadi",   
  }, 
];
console.log(clsInfo); // Output the array of class information objects
console.log(clsInfo[0].name); // Access and output the name of the first student

// Update the city property of the first student's object
clsInfo[0].city = "Sonvad";
console.log(clsInfo[0]); // Output the updated first student's object