function book(){
    let patientName = document.getElementById("txtName").value;
    let phone = document.getElementById('phone').value;
    let age = document.getElementById('txtAge').value;
    let doctors = {
        "Arun":"09:30",
        "David":"17:30",
        "Ramkumar":"14:45",
        "Palani":"19:30"
        }
    let status = 'pending';
    let time = document.getElementById('txtTime').value;
    if (patientName === "" || phone === "" || time === ""){
        alert("Patient name and phone number and booking time required!");
        return;
    }
    if (age < 0 || age > 100){
        alert("Age must between 0 to 100");
        return;
    }
    Object.values(doctors).forEach(timeSlot => {
        if (time === timeSlot){
            status = 'done';
        }
    });
    if(status === 'done'){
        alert("Appointment Booked successfully");
    }
    else{
        alert("No doctors available at this time. Please try to book at different schedule. Want to see Schedule? click the blue button..");
    }
}