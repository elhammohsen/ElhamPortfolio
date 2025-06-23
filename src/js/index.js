var nameInput=document.getElementById("name");
var emailInput=document.getElementById("email");
var phoneInput=document.getElementById("phone");
var messageInput=document.getElementById("message");

console.log(nameInput);

contactList=[];

function sendMessage(){
  
    contactInfo={
        name:nameInput.value,
        email:emailInput.value,
        phone:phoneInput.value,
        message:messageInput.value
    };

    emailjs.send("service_2xj5ijr","template_5r9b6mb",contactInfo).then(()=>{alert("Email sent")});

    contactList.push(contactInfo);
    console.log(contactList);
    
    // alert(nameInput.value)
    clearForm()
}

function clearForm(){
    nameInput.value=null;
    emailInput.value=null;
    phoneInput.value=null;
    messageInput.value=null;


}

const sections=document.querySelectorAll('section');
const navLinks=document.querySelectorAll('.nav-link');
window.onscroll= () =>{
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            navLinks.forEach(navLink => {
    navLink.classList.remove('active');
    document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active')
})
        }

    })
}
