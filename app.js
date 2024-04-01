var chemMarks = document.querySelector("#chem-marks")
var phyMarks = document.querySelector("#phy-marks")
var mathMarks = document.querySelector("#math-marks")
var comMarks = document.querySelector("#com-marks")
var urduMarks = document.querySelector("#urdu-marks")
var sindhiMarks = document.querySelector("#sindhi-marks")
var engMarks = document.querySelector("#eng-marks")
var studentTotal = document.querySelector("#total-marks")
var percentage = document.querySelector("#percentage")
var grade = document.querySelector("#grade")

function calculatepercentage() {
    console.log(chemMarks.value)
    console.log(phyMarks.value)
    console.log(mathMarks.value)
    console.log(comMarks.value)
    console.log(urduMarks.value)
    console.log(sindhiMarks.value)
    console.log(engMarks.value)

TotalMarks = 700;
obtainedMarks = +chemMarks.value+ +phyMarks.value+ +mathMarks.value+ +comMarks.value+ +urduMarks.value+ +sindhiMarks.value+ +engMarks.value ;
console.log("obtained==>" , obtainedMarks)
studentTotal.innerHTML = obtainedMarks;
var studentPercentage = obtainedMarks/TotalMarks*100
percentage.innerHTML = studentPercentage;


if(studentPercentage > 80){
    grade.innerHTML ="A+"
}
else if(studentPercentage > 70){
    grade.innerHTML ="A"
}
else if(studentPercentage > 60){
    grade.innerHTML = "B"
}
else{
    grade.innerHTML = "FAIL"
}

chemMarks.value=" "
phyMarks.value=" "
mathMarks.value=" "
comMarks.value=" "
urduMarks.value=" "
sindhiMarks.value=" "
engMarks.value=" "




}
