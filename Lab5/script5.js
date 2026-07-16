let registeredStudents=[];

function registration(){
const firstName = document.getElementById("fname").value;
const lastName = document.getElementById("lname").value;
const studentId = document.getElementById("sid").value;
const email = document.getElementById("email").value;
const credits = document.getElementById("credits").value;
const department = document.getElementById("dept").value;

let hasFnameError = true;
let hasLnameError = true;
let hasSidError = true;
let hasEmailError = true;
let hasCreditsError = true;
let hasDeptError = true;

if (!firstName) {
    document.getElementById("fnameError").innerHTML = "First name can not be empty";
    document.getElementById("fnameError").style.color = "red";
    hasFnameError = true;
  } else {
    document.getElementById("fnameError").innerHTML = "";
    hasFnameError = false;
  }

  if (!lastName) {
    document.getElementById("lnameError").innerHTML = "Last name can not be empty";
    document.getElementById("lnameError").style.color = "red";
    hasLnameError = true;
  } else {
    document.getElementById("lnameError").innerHTML = "";
    hasLnameError = false;
  }

  if (!studentId) {
    document.getElementById("sidError").innerHTML = "Student ID is required";
    document.getElementById("sidError").style.color = "red";
    hasSidError = true;
  } else if (!studentId.includes("-")) {
    document.getElementById("sidError").innerHTML = "Student ID must contain '-'";
    document.getElementById("sidError").style.color = "red";
    hasSidError = true;
  } else {
    document.getElementById("sidError").innerHTML = "";
    hasSidError = false;
  }

  if (!email) {
    document.getElementById("emailError").innerHTML = "Email is a required field";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else if (!email.includes("@student.aiub.edu")) {
    document.getElementById("emailError").innerHTML = "Email must contain @student.aiub.edu";
    document.getElementById("emailError").style.color = "red";
    hasEmailError = true;
  } else {
    document.getElementById("emailError").innerHTML = "";
    hasEmailError = false;
  }

  if (credits === "") {
    document.getElementById("creditsError").innerHTML = "Credit completed is required";
    document.getElementById("creditsError").style.color = "red";
    hasCreditsError = true;
  } else {
    const num = Number(credits);
    if (num < 0 || num >= 148) {
      document.getElementById("creditsError").innerHTML = "Credit must be between 0 and 147";
      document.getElementById("creditsError").style.color = "red";
      hasCreditsError = true;
    } else {
      document.getElementById("creditsError").innerHTML = "";
      hasCreditsError = false;
    }
  }

  if (!department) {
    document.getElementById("deptError").innerHTML = "Please select a department";
    document.getElementById("deptError").style.color = "red";
    hasDeptError = true;
  } else {
    document.getElementById("deptError").innerHTML = "";
    hasDeptError = false;
  }

  if (!hasFnameError && !hasLnameError && !hasSidError && !hasEmailError && !hasCreditsError && !hasDeptError) {
    const newStudent = {
        fname: firstName,
        lname: lastName,
        id: studentId,
        mail: email,
        cred: Number(credits),
        dept: department
      };
      registeredStudents.push(newStudent);
      updateStudentTable();
      document.getElementById("regForm").reset();
    }
return false;
}
    function updateStudentTable(){
        const tableBody = document.getElementById("studentTableBody");
        tableBody.innerHTML = "";
        for (let i = 0; i < registeredStudents.length; i++) {
            const student = registeredStudents[i];
            const row = "<tr>" +
                "<td>" + student.fname + "</td>" +
                "<td>" + student.lname + "</td>" +
                "<td>" + student.id + "</td>" +
                "<td>" + student.mail + "</td>" +
                "<td>" + student.cred + "</td>" +
                "<td>" + student.dept + "</td>" +
                "</tr>";
                tableBody.innerHTML += row;
            }
          }

