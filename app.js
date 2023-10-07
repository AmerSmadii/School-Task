document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentTableBody = document.querySelector("#student-table tbody");

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        let fullName = document.getElementById("full-name").value;
        let dob = document.getElementById("dob").value;
        let gender = document.getElementById("gender").value;
        let phoneNumber = document.getElementById("phone-number").value;
        let grade = document.getElementById("grade").value;

        // Create a new row in the table
        const newRow = studentTableBody.insertRow();
        newRow.innerHTML = `
            <td>${fullName}</td>
            <td>${dob}</td>
            <td>${gender}</td>
            <td>${phoneNumber}</td>
            <td>${grade}</td>
        `;

        // Clear the form fields
        // studentForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentContainer = document.getElementById("student-Container");

    // Constructor function for creating student objects
    function Student(fullName, dob, gender, major, imageUrl, phoneNumber) {
        this.fullName = fullName;
        this.dob = dob;
        this.gender = gender;
        this.major = major;
        this.imageUrl = imageUrl;
        this.phoneNumber = phoneNumber;
    }

    // Function to render a student card
    // function renderStudentCard(fullName, dob, gender, major, imageUrl, phoneNumber) {
    //     const card = document.createElement("div");
    //     card.classList.add("student-card");

    //     card.innerHTML = `
    //         <img src="${imageUrl}" alt="${student.fullName}">
    //         <h3>${fullName}</h3>
    //         <p>Date of Birth: ${dob}</p>
    //         <p>Gender: ${gender}</p>
    //         <p>Major: ${major}</p>
    //         <p>Phone Number: ${phoneNumber}</p>
    //     `;

    //    Student.studentContainer.appendChild(card);
    // }

    // // Load students from local storage or initialize an empty array
    // let students = JSON.parse(localStorage.getItem("students")) || [];

    // // Render existing students
    // students.forEach((student) => {
    //     renderStudentCard(student);
    // });

    studentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        // const fullName = document.getElementById("full-name").value;
        // const dob = document.getElementById("dob").value;
        // const gender = document.getElementById("gender").value;
        // // const major = document.querySelector("major").value;
        // const imageUrl = document.getElementById("image-url").value;
        // const phoneNumber = document.getElementById("phone-number").value;

        // Create a new student object
        
      
        // Add the student to the array
        

        // Save the updated array in local storage
        

        // Render the new student card
        let card=document.createElement("div");
        let imgs=document.createElement("img");
        let fname=document.createElement("span");
        let lname=document.createElement("span");
        let date=document.createElement("span");
        let gender1=document.createElement("span");
        let nump=document.createElement("span");

        fname.innerHTML=document.querySelector("#full-name").value;
        date.innerHTML=document.querySelector("#dob").value;
        imgs.src="114579-mario-hd-image-free.png";

        gender1.innerHTML=document.querySelector("#gender").value;
        nump.innerHTML=document.querySelector("#phone-number").value;
        const newStudent = new Student(fname,date, gender1,nump);
        // Student.push(newStudent);
        localStorage.setItem("students", JSON.stringify(newStudent));
        card.appendChild(imgs);
        card.appendChild(fname);
        card.appendChild(date);
        card.appendChild(gender1);
        card.appendChild(nump);
        
        // div.appendChild(full-name);
        console.log(card);
        let cont =document.querySelector(".new1");
        cont.appendChild(card);
        // Clear the form fields
        // studentForm.reset();
    });
});
