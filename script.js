


    // DOWNLOAD CV

    function downloadCV(){

      const link = document.createElement('a');

      link.href = 'assets/Moeez-Khalil-One-Page-CV.pdf';

      link.download = 'Moeez-Khalil-One-Page-CV.pdf';

      link.click();

    }

    // SKILL BAR ANIMATION

    const progressBars = document.querySelectorAll('.progress');

    window.addEventListener('scroll', ()=>{

      const skillsSection = document.querySelector('#skills');

      const sectionPosition = skillsSection.getBoundingClientRect().top;

      const screenPosition = window.innerHeight / 1.3;

      if(sectionPosition < screenPosition){

        progressBars.forEach(bar=>{

          bar.style.width = bar.getAttribute('data-width');

        });

      }

    });

const toggler = document.querySelector(".chatbot-toggler");
const chatbot = document.querySelector(".chatbot");
const closeBtn = document.querySelector(".close-chat");

toggler.onclick = () => {
    chatbot.style.display = "flex";
};

closeBtn.onclick = () => {
    chatbot.style.display = "none";
};

function sendMessage(){

    let input = document.getElementById("user-input");
    let message = input.value.trim().toLowerCase();

    if(message === "") return;

    let chatbox = document.getElementById("chatbox");

    // USER MESSAGE

    let userMsg = document.createElement("div");

    userMsg.classList.add("user-message");

    userMsg.innerText = input.value;

    chatbox.appendChild(userMsg);

    // TYPING EFFECT

    let typing = document.createElement("div");

    typing.classList.add("typing");

    typing.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    `;

    chatbox.appendChild(typing);

    chatbox.scrollTop = chatbox.scrollHeight;

    // BOT REPLY

    let botReply = "";

    // GREETING

    if(
        message.includes("hello") ||
        message.includes("hi") ||
        message.includes("hey")
    ){

        botReply = "Hello 👋 Welcome to Moeez's Portfolio Website. How can I help you today?";
    }

    // NAME

    else if(
        message.includes("name") ||
        message.includes("who are you")
    ){

        botReply = "I'm Moeez AI Assistant, created to guide visitors through this portfolio website.";
    }

    // ABOUT

    else if(
        message.includes("about") ||
        message.includes("about moeez")
    ){

        botReply = "Moeez Khalil is a passionate Front-End Developer focused on creating modern, responsive and visually appealing websites.";
    }

    // SKILLS

    else if(
        message.includes("skills") ||
        message.includes("technology") ||
        message.includes("tech stack")
    ){

        botReply = "Moeez specializes in HTML5, CSS3, JavaScript, Bootstrap, Responsive Design and modern UI development.";
    }

    // EXPERIENCE

    else if(
        message.includes("experience")
    ){

        botReply = "Moeez is continuously improving his front-end development skills by building real-world responsive projects and modern user interfaces.";
    }

    // SERVICES

    else if(
        message.includes("services") ||
        message.includes("service")
    ){

        botReply = "Moeez provides portfolio websites, landing pages, responsive websites and modern front-end UI development services.";
    }

    // PROJECTS

    else if(
        message.includes("projects") ||
        message.includes("project")
    ){

        botReply = "Some featured projects include a Task Manager App, Personal Portfolio Website and modern responsive web interfaces.";
    }

    // TASK MANAGER

    else if(
        message.includes("task manager")
    ){

        botReply = "The Task Manager project helps users organize daily tasks with a clean and modern UI experience.";
    }

    // PORTFOLIO

    else if(
        message.includes("portfolio")
    ){

        botReply = "This portfolio website was designed and developed by Moeez using HTML, CSS and JavaScript with a modern premium UI.";
    }

    // CONTACT

    else if(
        message.includes("contact") ||
        message.includes("email")
    ){

        botReply = "You can contact Moeez through email: moeezkhalil12@gmail.com";
    }

    // LOCATION

    else if(
        message.includes("location") ||
        message.includes("where")
    ){

        botReply = "Moeez Khalil is based in Lahore, Pakistan.";
    }

    // CV

    else if(
        message.includes("cv") ||
        message.includes("resume")
    ){

        botReply = "You can download Moeez's professional CV directly from the portfolio website.";
    }

    // HIRE

    else if(
        message.includes("hire") ||
        message.includes("freelance")
    ){

        botReply = "Moeez is available for freelance front-end development and modern website design projects.";
    }

    // EDUCATION

    else if(
        message.includes("education")
    ){

        botReply = "Moeez is continuously learning and improving his development skills through practice, projects and modern web technologies.";
    }

    // SOCIAL MEDIA

    else if(
        message.includes("linkedin") ||
        message.includes("github") ||
        message.includes("social")
    ){

        botReply = "You can connect with Moeez through LinkedIn and GitHub links available in the portfolio website.";
    }

    // THANKS

    else if(
        message.includes("thanks") ||
        message.includes("thank you")
    ){

        botReply = "You're welcome 😊 Feel free to explore the portfolio and ask anything else.";
    }

    // BYE

    else if(
        message.includes("bye")
    ){

        botReply = "Goodbye 👋 Have a great day and thanks for visiting Moeez's portfolio.";
    }

    // DEFAULT

    else{

        botReply = "I'm still learning 🤖 Please ask about Moeez's skills, projects, services, CV or contact information.";
    }

    // BOT MESSAGE

    setTimeout(() => {

        typing.remove();

        let botMsg = document.createElement("div");

        botMsg.classList.add("bot-message");

        botMsg.innerText = botReply;

        chatbox.appendChild(botMsg);

        chatbox.scrollTop = chatbox.scrollHeight;

    }, 1200);

    input.value = "";
}