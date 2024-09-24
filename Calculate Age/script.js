function calculateAge() {
    let birthdate = document.getElementById("birthday").value;           
    let currentDate = new Date();            
    let birthDate = new Date(birthdate);

if (birthdate === "" || birthDate > currentDate) {
    document.getElementById("result").innerHTML = "Please enter a valid date of birth.";
    return;
}
    
    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    document.getElementById("result").innerHTML = ageInYears;
}