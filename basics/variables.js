const studentId = 121//Fixed 

let studentEmail="student123@gmail.com"//not fixed and have scope within a method

var studentPassword="123"//var doesnot have any scope 

studentAddress="Hyderabad"
//studentId=1121 //not allowed because studentId is fixed
studentEmail="xyz@gmail.com"
studentPassword="098"
studentAddress="Banglore"
/*
Perfer not to use the var
because of issue in block scope and functional scope

*/

console.table([studentEmail,studentId,studentPassword,studentAddress])//it prints the values in a table format ,in index and values
