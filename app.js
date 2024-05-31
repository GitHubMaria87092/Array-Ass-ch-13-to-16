// question 1
let futureStudentNames = [];

// question 2
let futureStudents = {
    name:[]
};
// question 3
let names = ["Lamborgani ", " Buggati ", " Farrari ", " Audi"];
document.write(names + "<br>");

// question 4
let num1 = [2 , 4 , 5 , 7];
document.write(num1 + "<br>");

// question 5
let  boolean = [true , false];
document.write(boolean + "<br>");

// question 6
let mixed = [true , "babar" , 3];
document.write(mixed + "<br>");

// question 7
let pakistanEducation = ["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil" , "PhD"];
document.write("<h2>Educational Qualification in Pakistan</h2>");

document.write("01)" + pakistanEducation[0] + "<br>")
document.write("02)" + pakistanEducation[1] + "<br>")
document.write("03)" + pakistanEducation[2] + "<br>")
document.write("04)" + pakistanEducation[3] + "<br>")
document.write("05)" + pakistanEducation[4] + "<br>")
document.write("06)" + pakistanEducation[5] + "<br>")
document.write("07)" + pakistanEducation[6] + "<br>")
document.write("08)" + pakistanEducation[7] + "<br>" + "<br>")

// question 8
document.write("<h2>Marksheet</h2>");
let studentsName = ["Jack" , "Oggy" , "Dazy"];

let obtainedMarks = [290 , 360 , 440];

const totalMarks = 500;

let percentage1 = (obtainedMarks[0]/totalMarks)*100;
let percentage2 = (obtainedMarks[1]/totalMarks)*100;
let percentage3 = (obtainedMarks[2]/totalMarks)*100;

document.write("Score of" + " " + studentsName[0] + " " + "is" + " " + obtainedMarks[0] + " " + "percentage is" + " " + percentage1 + "<br>")
document.write("Score of" + " " + studentsName[1] + " " + "is" + " " + obtainedMarks[1] + " " + "percentage is" + " " + percentage2 + "<br>")
document.write("Score of" + " " + studentsName[2] + " " + "is" + " " + obtainedMarks[2] + " " + "percentage is" + " " + percentage3 + "<br>")

// question 9
document.write("<h2>Question no 09</h2>");
let colorName = ["Red " , " Blue " , " Green " , " Black "];
document.write(colorName + "<br>");

// a)
let colorAddbeginning = prompt("Enter Color You Want to add at beginning");
colorName.unshift(colorAddbeginning);
document.write("a) Add your color at biginning" + colorName + "<br>")

// b)
let colorAddEnd = prompt("Enter Color You Want to add at End");
colorName.push(colorAddEnd);
document.write("b) Add your color at End " + colorName + "<br>");

// c)
let colorAddbeginning1 = prompt("Enter First Color You Want to add at beginning");
let colorAddbeginning2 = prompt("Enter Second Color You Want to add at beginning");
colorName.unshift(colorAddbeginning1 , colorAddbeginning2)
document.write("c) Add your two color at biginning " + colorName + "<br>")

// d)
colorName.shift()
document.write("d) Remove First color " + colorName + "<br>");

// e)
colorName.pop()
document.write("e) Remove Last color " + colorName + "<br>");

// f)
let indexToAdd = +prompt("Enter the index at which you want to add a color:");
let colorToAddAtIndex = prompt("Enter the color to add at the specified index:");
colorName.splice(indexToAdd, 0,  colorToAddAtIndex);
document.write("f) Add your color at the index you want " + colorName + "<br>");

// g)
let indexToDelete = +prompt("Enter the index from which you want to delete color(s):");
let numberOfColorsToDelete = +prompt("Enter the number of colors you want to delete:");
colorName.splice(indexToDelete, numberOfColorsToDelete);
document.write("g) Remove color at the index you want " + colorName + "<br>");

// question 10
document.write("<h2>Use Sort Method</h2>");
let Score = [320 , 230 , 480 , 120]
document.write("Score of Students " + Score + "<br>")
Score.sort()
document.write("Orederd Score of Students " + Score + "<br>")


// question 11
let cities = ["Karachi " , " Islamabad " , " Lahore " , " Quetta "]
document.write("<h3> City List </h3>")
document.write(cities)

document.write("<h3> Selected City List </h3>")
document.write(cities[1])
document.write(cities[2] + "<br>")

// question 12 
let join = ["This " , " is " , " my " , " cat "];

document.write("<h3> Join Metod </h3>")
document.write(join + "<br>");

let mergeArr = join.join(" ");

document.write(mergeArr + "<br>");

// question 13
let deviceNames = []

deviceNames.push("Keyboard ")
deviceNames.push(" Mouse ")
deviceNames.push(" Printer ")
deviceNames.push(" Moniter")

document.write("<h3> Devices: </h3>");
document.write(deviceNames + "<br>");

let startOut = deviceNames.shift()
let startOut1 = deviceNames.shift()
let startOut2 = deviceNames.shift()
let startOut3 = deviceNames.shift()

document.write(deviceNames)
document.write("<br>" + "Out:" + "<br>" + startOut + "<br>" + "Out:" + "<br>" + startOut1 + "<br>" + "Out:" + "<br>" + startOut2 + "<br>" + "Out:" + "<br>" + startOut3)

// question 14

let deviceName = [];

deviceName.push("Keyboard ")
deviceName.push(" Mouse ")
deviceName.push(" Printer ")
deviceName.push(" Moniter")

document.write("<h3> Devices: </h3>");
document.write(deviceName + "<br>");

let out =  deviceName.pop()
let out1 = deviceName.pop()
let out2 = deviceName.pop()
let out3 = deviceName.pop()

document.write(deviceName)
document.write("<br>" + "Out:" + "<br>" + out + "<br>" + "Out:" + "<br>" + out1 + "<br>" + "Out:" + "<br>" + out2 + "<br>" + "Out:" + "<br>" + out3 + "<br>" + "<br>")

// question 15
document.write("<h2>Dropdown</h2>");
let mobManufacturers = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]

document.write("<select>")

document.write('<option value="' + mobManufacturers[0] + '">' + mobManufacturers[0] + '</option>')
document.write('<option value="' + mobManufacturers[1] + '">' + mobManufacturers[1] + '</option>')
document.write('<option value="' + mobManufacturers[2] + '">' + mobManufacturers[2] + '</option>')
document.write('<option value="' + mobManufacturers[3] + '">' + mobManufacturers[3] + '</option>')
document.write('<option value="' + mobManufacturers[4] + '">' + mobManufacturers[4] + '</option>')
document.write('<option value="' + mobManufacturers[5] + '">' + mobManufacturers[5] + '</option>')

document.write("</select>")