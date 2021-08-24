var users = []

var showData =  document.getElementById('show-data')

class User{
    constructor(name, summary, number, email, dob, gender, education, address){
        this.name = name,
        this.summary = summary,
        this.number = number,
        this.email = email,
        this.dob = dob,
        this.gender = gender,
        this.education = education,
        this.address = address
    }

    renderToElement(){
        // var a = `<h1>Hello World</h1>`;
        // var a = `<h1>${this.name}</h1>`;
        var data = `
        <h1 class="display-name">${this.name}</h1>
        <h3 id="display-summary" class="summary">${this.summary}</h3>
            <div class="display-data">
                <img src="src/icon/telephone.png" alt="phone-number" class="icon-img">
                <span class="text-sm" id="display-number"><strong>${this.number}</strong></span>
            </div>
            <div class="display-data">
                <img src="src/icon/email.png" alt="email-address" class="icon-img">
                <span class="text-sm" id="display-email"><strong>${this.email}</strong></span>
            </div>
            <div class="display-data">
                <img src="src/icon/calendar.png" alt="dob" class="icon-img">
                <span class="text-sm" id="display-dob"><strong>${this.dob}</strong></span>
            </div>
            <div class="display-data">
                <img src="src/icon/sex.png" alt="gender" class="icon-img">
                <span class="text-sm" id="display-gender"><strong>${this.gender}</strong></span>
            </div>
            <div class="display-data">
                <img src="src/icon/graduation-hat.png" alt="education" class="icon-img">
                <span class="text-sm" id="display-education"><strong>${this.education}</strong></span>
            </div>
            <div class="display-data">
                <img src="src/icon/pin.png" alt="address" class="icon-img">
                <span class="text-sm" id="display-address"><strong>${this.address}</strong></span>
            </div>`
        return data;
    }

}

function renderData(){
    let HTMLElement = ''
    for(var user of users){
        console.log(user)
        HTMLElement += user.renderToElement()
    }
    showData.innerHTML = HTMLElement
}

function addUser(){
    var inputName = document.getElementById('input-name').value
    var inputSummar = document.getElementById('input-summary').value
    var inputNumber = document.getElementById('input-number').value
    var inputEmail = document.getElementById('input-email').value
    var inputDob = document.getElementById('input-dob').value

    if(document.getElementById('gender-male').checked) { 
      var inputGender =  document.getElementById("gender-male").value 
    } else if (document.getElementById('gender-female').checked) {
        var inputGender = document.getElementById("gender-female").value
    }

    var inputEducation = document.getElementById('input-education').value;
    var inputAddress = document.getElementById('input-address').value

    var user = new User(
        inputName,
        inputSummar,
        inputNumber,
        inputEmail,
        inputDob,
        inputGender,
        inputEducation,
        inputAddress
    )
    users.push(user)
    renderData()
}

renderData()















// function handleInputForm(){
//     var name = document.getElementById("input-name").value;
//     var summary = document.getElementById("input-summary").value;
//     var number = document.getElementById("input-number").value;
//     var email = document.getElementById("input-email").value;
//     var dob = document.getElementById("input-dob").value;
//     // var male = document.getElementById("gener-male").cheked;
    
//     if(document.getElementById('gender-male').checked) { 
//         document.getElementById("display-gender").innerHTML = document.getElementById("gender-male").value 
//     } else if (document.getElementById('gender-female').checked) {
//         document.getElementById("display-gender").innerHTML = document.getElementById("gender-female").value
//     }


//     var education = document.getElementById("input-education").value;
//     var address = document.getElementById("input-address").value;

//     document.getElementById("display-name").innerText = name;
//     document.getElementById("display-summary").innerText = summary;
//     document.getElementById("display-number").innerText = number;
//     document.getElementById("display-email").innerText = email;
//     document.getElementById("display-dob").innerText = dob;
//     document.getElementById("display-education").innerText = education;
//     document.getElementById("display-address").innerText = address;



//     console.log(name);
//     console.log(summary);
//     console.log(number);
//     console.log(email);
//     console.log(dob);
//     console.log(education)
//     console.log(address);
//     // console.log(male);
// }

