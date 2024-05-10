const containerRegisterPage = document.querySelector(".container-first-page");
const containerTopicsPage = document.querySelector(".container-second-page");
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const registerPageContinueBtn = document.getElementById("continue-btn");

//First page of register
registerPageContinueBtn.addEventListener("click", function(event){
    const nameValidation = /^[a-zA-Z\s-]+$/;
     let isValid = true;

    if(!nameValidation.test(nameInput.value)){
        nameInput.style.border = "2px solid red";
        isValid = false;
    } else {
        nameInput.style.border = "2px solid green";
    }
    
    const emailValidation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!emailValidation.test(emailInput.value)){
        emailInput.style.border = "2px solid red";
        isValid = false;
    } else {
        emailInput.style.border = "2px solid green";
    }

    if(!isValid){
        event.preventDefault();
    } else{
        containerRegisterPage.style.display = "none";
        containerTopicsPage.style.display = "block";
    }
});

//Second page of topics selection
const softwareDevelopmentBtn = document.getElementById("softwareDev-Btn");
const userExperienceBtn = document.getElementById("userExperience-Btn");
const graphicDesignBtn = document.getElementById("graphicDesign-Btn");
const continueTopicsBtn = document.getElementById("continue-topics-btn");


let softwareDevelopmentToggled = false;
let userExperienceToggled = false;
let graphicDesignToggled = false;

softwareDevelopmentBtn.addEventListener("click", function(){
    softwareDevelopmentToggled = !softwareDevelopmentToggled;
    if (softwareDevelopmentToggled) {
        softwareDevelopmentBtn.style.background = "#652CD1";
        softwareDevelopmentBtn.style.color = "#E5E7EB";
        softwareDevelopmentBtn.style.border = "1px solid #845EEE";
    } else {
        softwareDevelopmentBtn.style.background = "";
        softwareDevelopmentBtn.style.color = "";
        softwareDevelopmentBtn.style.border = "";
    }
});

userExperienceBtn.addEventListener("click", function(){
    userExperienceToggled = !userExperienceToggled;
    if (userExperienceToggled) {
        userExperienceBtn.style.background = "#652CD1";
        userExperienceBtn.style.color = "#E5E7EB";
        userExperienceBtn.style.border = "1px solid #845EEE";
    } else {
        userExperienceBtn.style.background = "";
        userExperienceBtn.style.color = "";
        userExperienceBtn.style.border = "";
    }
});

graphicDesignBtn.addEventListener("click", function(){
    graphicDesignToggled = !graphicDesignToggled;
    if (graphicDesignToggled) {
        graphicDesignBtn.style.background = "#652CD1";
        graphicDesignBtn.style.color = "#E5E7EB";
        graphicDesignBtn.style.border = "1px solid #845EEE";
    } else {
        graphicDesignBtn.style.background = "";
        graphicDesignBtn.style.color = "";
        graphicDesignBtn.style.border = "";
    }
});

//Topics continue button
const containerSummaryPage = document.querySelector(".container-summary-page");

continueTopicsBtn.addEventListener("click", function(event) {
    if (softwareDevelopmentToggled || userExperienceToggled || graphicDesignToggled) {
        containerTopicsPage.style.display = "none";
        containerSummaryPage.style.display = "block";
    } else {
        event.preventDefault(); // Prevent continuing if no topics are selected
    }
});


//Third page of summary that displays the user input and selection of topics. 
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const softwareDevTopic = document.getElementById("software-topic");
const userExperienceTopic = document.getElementById("userexperience-topic");
const graphicDesignTopic = document.getElementById("graphicdesign-topic");


function userInfo(){
    const name = nameInput.value;
    const email = emailInput.value;
    const softwareDevelopmentPick = softwareDevelopmentBtn.innerText
    const userExperiencePick = userExperienceBtn.innerText;
    const graphicDesignPick = graphicDesignBtn.innerText;

    userName.textContent = name;
    userEmail.textContent = email;
    softwareDevTopic.textContent = softwareDevelopmentPick;
    userExperienceTopic.textContent = userExperiencePick;
    graphicDesignTopic.textContent = graphicDesignPick;

    softwareDevTopic.textContent = "";
    userExperienceTopic.textContent = "";
    graphicDesignTopic.textContent = "";

    if (softwareDevelopmentToggled) {
        softwareDevTopic.textContent = softwareDevelopmentPick;
        softwareDevTopic.innerHTML = `<li>${softwareDevelopmentPick}</li>`;
    }
    if (userExperienceToggled) {
        userExperienceTopic.textContent = userExperiencePick;
        userExperienceTopic.innerHTML = `<li>${userExperiencePick}</li>`;
    }
    if (graphicDesignToggled) {
        graphicDesignTopic.textContent = graphicDesignPick;
        graphicDesignTopic.innerHTML = `<li>${graphicDesignPick}</li>`;
    }

}
registerPageContinueBtn.addEventListener("click", userInfo);
softwareDevelopmentBtn.addEventListener("click", userInfo);
userExperienceBtn.addEventListener("click", userInfo);
graphicDesignBtn.addEventListener("click", userInfo);
continueTopicsBtn.addEventListener("click", userInfo);


//Thank you page.
const summaryConfirmBtn = document.getElementById("confirm-summary-btn");
const thankYouPage = document.querySelector(".thank-you-page");

summaryConfirmBtn.addEventListener("click", function(){
    containerSummaryPage.style.display = "none";
    thankYouPage.style.display = "flex";
});