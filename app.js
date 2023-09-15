//                   Chapter (12-13)

// ? Question 1:-
// function checkCharacterType(char) {

//     if (/[0-9]/.test(char)) {
//         alert("number")
//     }
//     else if (/[A-Z]/.test(char)) {
//         alert("uppercase letter")
//     }
//     else if (/[a-z]/.test(char)) {
//         alert("lowercase letter")
//     }
//     else {
//         alert("other")
//     }}

//     const char = prompt("Enter a Character")
//     console.log(checkCharacterType(char))

// ? Question 2:-
// var a= 10
// var b= 5

// if(a>b){
//     document.write("10 is larger than 5" +"<br>")
// }
// var x= 10
// var y= 10
// if(x==y){
//     document.write("10 is equal to 10" +"<br><br>")
// }

// ? Question 3:-
// var number= prompt("Enter a Number")

// if(number > 0){
//     document.write("Number is Positive" +"<br><br>")
// }
// else if(number < 0){
//     document.write("Number is Negative" +"<br><br>")
// }
// else{
//     document.write("Number is Zero" +"<br><br>")
// }

// ? Question 4:-
// var character= prompt("Enter a Character")
// var vowel= "aeiou"

// if(vowel>character){
//     document.write("The Character is Vowel")
// }
// else{
//     document.write("The Character is not Vowel")
// }

// ? Question 5:-
// a)var CorrectPass= "pakistan zindabad"
// var UserPass= prompt("Enter your Password")

// if(UserPass === ""){
//     alert("Please Enter your Password")
// }
// else if(UserPass === CorrectPass){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect Password")
// }

// ? Question 6:-
// var greet= greeting
// var hour = 13
// if (hour < 18)
// greeting = "Good day"
// else{
// greeting = "Good evening"
// }

// ? Question 7:-
// var time= prompt("Enter time in 24 hours clock format")

// if(time == "0"){
//     alert("Its 12:00 AM")
// }
// else if(time == "1"){
//     alert("Its 01:00 AM")
// }
// else if(time == "2"){
//     alert("Its 02:00 AM")
// }
// else if(time == "3"){
//     alert("Its 03:00 AM")
// }
// else if(time == "4"){
//     alert("Its 04:00 AM")
// }
// else if(time == "5"){
//     alert("Its 05:00 AM")
// }
// else if(time == "6"){
//     alert("Its 06:00 AM")
// }
// else if(time == "7"){
//     alert("Its 07:00 AM")
// }
// else if(time == "8"){
//     alert("Its 08:00 AM")
// }
// else if(time == "9"){
//     alert("Its 09:00 AM")
// }
// else if(time == "10"){
//     alert("Its 10:00 AM")
// }
// else if(time == "11"){
//     alert("Its 11:00 AM")
// }
// else if(time == "12"){
//     alert("Its 12:00 PM")
// }
// else if(time == "13"){
//     alert("Its 01:00 PM")
// }
// else if(time == "14"){
//     alert("Its 02:00 PM")
// }
// else if(time == "15"){
//     alert("Its 03:00 PM")
// }
// else if(time == "16"){
//     alert("Its 04:00 PM")
// }
// else if(time == "17"){
//     alert("Its 05:00 PM")
// }
// else if(time == "18"){
//     alert("Its 06:00 PM")
// }
// else if(time == "19"){
//     alert("Its 07:00 PM")
// }
// else if(time == "20"){
//     alert("Its 08:00 PM")
// }
// else if(time == "21"){
//     alert("Its 9:00 PM")
// }
// else if(time == "22"){
//     alert("Its 10:00 PM")
// }
// else if(time == "23"){
//     alert("Its 11:00 PM")
// }
// else{
//     alert("Invalid Time")
// }

//                   Chapter (14-16)

// ? Question 1:-
// var studentnames= []

// ? Question 2:-
// var studentnames= new Array()

// ? Question 3:-
// var stringarray= ["Sufyan","Qazi"]

// ? Question 4:-
// var numberarray= [10,20,30]

// ? Question 5:-
// var booleanarray= [true,false]

// ? Question 6:-
// var mixarray= ["sufyan",10,true]

// ? Question 7:-
// var heading = "Qualifications:"
// document.write("<h4>" + heading)

// var qualifications = ["SSC", "HSC", "BCS",
//     "BS", "BCOM", "MS", "M.Phil", "PhD"]

// document.write("<ol>")
// for(var a =0; +a<=7; ++a)
// document.write("<li>" +qualifications[a] +"</li>")
// document.write("</ol>")

// ? Question 8:-
// var studnames= ["Sufyan","Abdullah","Haseeb"]
// var studscore= [460,420,369]
// var totalmarks= [500]
// var studpercentage= studscore.map(studscore => studscore / totalmarks * 100)

// document.write("<ol>")
// for (var b =0; b <=2; ++b)
// document.write ("<li>" +"Score of " +studnames[b] +" is " +studpercentage[b] +"%" +"</li>")
// document.write("</ol>")

// ? Question 9:-
// var colorarr= ["white","black","blue","green","red"]

// a)
// var addcolor= prompt("What color do you want to add in the beginning?")
// colorarr.unshift(addcolor)

// b)
// var addcolorend= prompt("What color do you want to add in the end?")
// colorarr.push(addcolorend)

// c)
// var addcolor2= prompt("Add two more colors in the begining")
// colorarr.unshift(addcolor2)

// d)
// colorarr.shift()

// e)
// colorarr.pop()

// f)
// var index= prompt("Enter the index at which you want to add a color:")
// var addcolor3= prompt("Enter the color you want to add:")
// colorarr.splice(index,0,addcolor3)

// g)
// var startindexdelete= prompt("Enter the index at which you want to start deleting colors:")
// var endindexdelete= prompt("Enter the number of colors you want to delete:")
// colorarr.splice (startindexdelete,endindexdelete)

// Display in Browser
// document.write(colorarr)

// ? Question 10:-
// var studscores= [320,230,480,120]
// document.write ("Scores of Students: " +studscores +"<br>")

// studscores.sort()
// document.write ("Ordered Scores of Students: " +studscores)

// ? Question 11:-
// var citynames= ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.write ("Cities List:" +"<br>" +citynames +"<br><br>")

// var selectcities= citynames.slice(0,3)
// document.write ("Selected Cities List:" +"<br>" +selectcities)

// ? Question 12:-
// var arr= ["This","is","my","cat"]
// document.write ("Array:" +"<br>" +arr +"<br>")

// var stringarr=arr.join(" ")
// document.write("String: " +"<br>" +stringarr)

// ? Question 13:-

// ? Question 14:-

// ? Question 15:-
// var phones= ["Apple","Samsung","Motorolla","Sony","Nokia","Haier"]
// document.write("<select>")
// for(var i =0; i < phones.length; i++){
//     document.write("<option>" +phones[i] +"</option>")
// }
// document.write("</select>")