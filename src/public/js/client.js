const header = document.querySelector("header");
// const headerButtz = document.querySelectorAll("a");
// for(let i = 0; i <headerButtz.length; i ++) {
//     headerButtz[i].style.textDecoration = "none";
//     headerButtz[i].addEventListener("hover", () => {

//     })
// }
const footer = document.querySelector("footer");
const nav = document.querySelector("#nav");
const content = document.querySelector("#contact");
// for(let i = 0;i<nav.children.length;i++){
//     nav.children[i].style.transitionDuration = "1s";
// }

const headButtz = [...header.getElementsByTagName("a")];
headButtz.forEach((HB)=> {
    HB.addEventListener("mouseover", () => {
        HB.style.backgroundColor = "rgb(193, 214, 226)";
        HB.style.color = "grey";
    })
    HB.addEventListener("mouseout", () => {
        HB.style.backgroundColor =  "grey";
        HB.style.color = "rgb(193, 214, 226)";
    })
})
console.log(headButtz);
const modalWindow = document.querySelector('#modalWindow');
const navButts = 
`<div id = "modalNav"> 
<a href = "/home">Home</a>
<a href = "/about">About</a>
<a href = "/gallery">Gallery</a>
<a href = "/contact">Contact Us</a>`;

Survey
    .StylesManager
    .applyTheme("bootstrap");

var json = {
"title":"Contact Matt and the team here; after you submit, you'll receive a confirmation email and a note. Have a great day!",
"pages": [
{
    "name": "customerSurvey",
    "elements": [
        {
        "type": "text",
        "name": "firstName",
        "title": "First Name:",
        // "placeHolder": "Joe",
        "isRequired": true,
        }, {
        "type": "text",
        "name": "lastName",
        "title":"Last Name:",
        // "placeHolder": "Blow",
        "isRequired": true,
        startWithNewLine:false,
        },
        {
            type:"text",
            name:"email",
            title:"Email:",
            validators:[{
                type:"email",
            }],
            inputType: "email",
            isRequired: true,
            inputMask:"email",
            // placeHolder: "joe.blow@gmail.com",
        },{
            type:"text",
            placeHolder: "+#(###)-###-####",
            inputMask: "phone",
            inputFormat: "+#(###)-###-####",
            // validators:[{
                //     type:"tel"
                // }],
            name:"phone",
            title:"Phone:",
            isRequired:true,
            startWithNewLine:false,
        },
        {
            name: "subject",
            type:"text",
            isRequired:true,
            title:"Subject:",
            placeHolder:"i.e., New home, siding, skylights, etc."
        }, {
            name: "msg",
            type:"comment",
            title: "Message:",
            isRequired: true,
            placeHolder: "I would like to...",
        },
    ],
    "showQuestionNumbers": "off",
},
]

};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add( async () => {
        var body = JSON.stringify(survey.data,3,null)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        myHeaders.append("Accept","application/json");
        
        var requestOptions = {
            method:'POST',
            headers: myHeaders,
            body:body,
            redirect: 'follow',
            credentials:'same-origin',
        };
        // const sendMail = 
        fetch("http://localhost:3000/mailer",requestOptions)
        .then(res => res.json())
        .then(msg => console.log(msg))
        .catch(e => console.log(e,"sheet smmthing gottt fuckkedd"))
        // sendMail;
        content.innerHTML = `<h2> Thank you for reaching out ${body.firstName},\n
        Your message was just sent to my email and I will get back to you shortly!\n
        In the meantime, check out my recent work here if you haven't already.</h2>
        <a id = "allDone" href = "/gallery">Gallery</a>`
});

var myCss = {
    page: {
        root:"pRoot"
    },
    "headerText":"sHeaderText",
    "header":"sHeader",
    
    "body": "sBody",
    // cssNavigationComplete: "sComplete",
    navigation: {
            complete: "sComplete",
    },
    navigationButton:"button btn-lg",
    //contact information and space to red area
    element:{
        cssTitle: "eCssTitle",
    },
    container:"sContainer",
    footer: "sFooter",
    // navigationButton: "sNavButt",
    row: "sRow",
    "question": {
		"header": "h3",
		mainRoot: "qMainRoot",
        
		"flowRoot": "sv_q_flow sv_qstn",
		"headerLeft": "title-left",
		"content": "",
		"contentLeft": "content-left",
		"titleLeftRoot": "sv_qstn_left",
		"title": "qTitle",
		"titleExpandable": "sv_q_title_expandable",
		"number": "qNumber",
	},
}
$("#surveyElement").Survey({model: survey,css: myCss});