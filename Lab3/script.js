console.log("Connected");

function validateForm(){
    const fName = document.getElementById("firstName").value;
    const lName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    console.log(fName, lName, email, phone);

    if(!fName){
        document.getElementById("fnameError").innerHTML = "First Name is required";
    }else if(fName.length < 4){
    document.getElementById("fnameError").innerHTML = "First Name should be at least 4 char long";
    }else{
        document.getElementById("fnameError").innerHTML ="";
    }

    if(!lName){
        document.getElementById("lnameError").innerHTML = "Last Name is required";
    }else{
        document.getElementById("lnameError").innerHTML ="";
    }

    if(!email){
        document.getElementById("emailError").innerHTML = "Email is required";
    
    }
    else{
        document.getElementById("emailError").innerHTML ="";
    }

    if(!phone){
        document.getElementById("phoneError").innerHTML = "Phone no is required";
    }
    else if(phoneError.length !=11 ){
    document.getElementById("phoneError").innerHTML = "Phone no should be 11 char long";
    }else{
        document.getElementById("phoneError").innerHTML ="";
    }
    return false;

}