const gallery = document.querySelector("#gallery");
const renoButt = document.querySelector(".rennovation");
const interiorButt = document.querySelector(".Interior");
const exteriorButt = document.querySelector(".exterior");
const structuralButt = document.querySelector(".Structural");
const construction = document.querySelector(".construction");
const hiddenButts = document.querySelector("#hiddenButts");
const littleButtz = document.querySelectorAll("#button2");
const preGal = document.querySelector("#preGal");
const preGalButt = preGal.querySelector("a");
const header = document.querySelector("header");
const headButtz = [...header.getElementsByTagName("a")];
// headButtz.push(preGalButt);
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

const lil1 = littleButtz[0];
const lil2 = littleButtz[1];
var allButtz = [];
littleButtz.forEach((butt)=> {
    allButtz.push(butt);
});
allButtz.push(construction,renoButt);
allButtz.forEach((butt) => {
    butt.style.transitionDuration = ".75s";
});

construction.addEventListener("mouseover", () => {
    construction.classList.add("highlightedButt");
    construction.nextElementSibling.style.color = "white";
});
construction.addEventListener("mouseout",()=> {
    construction.classList.remove("highlightedButt");
    construction.nextElementSibling.style.color = "grey";
});
    

let n;
renoButt.addEventListener("mouseover",()=> {
    console.log("working");
    renoButt.classList.add("hidden");
    hiddenButts.classList.remove("hidden");
    hiddenButts.classList.add("showHiddenButts");
        lil1.addEventListener("mouseover", () => {
            lil1.classList.add("highlightedButt");
            lil1.style.color = "white";
        });
        lil1.addEventListener("mouseout", () => {
            lil1.classList.remove("highlightedButt");
            lil1.style.color = "grey";
        });
        lil2.addEventListener("mouseover", () => {
            lil2.classList.add("highlightedButt");
            lil2.style.color = "white";
        });
        lil2.addEventListener("mouseout", () => {
            lil2.classList.remove("highlightedButt");
            lil2.style.color = "grey";
        });
    
})
renoButt.addEventListener("mouseout",()=>{
    setTimeout( () => {
    renoButt.classList.remove("hidden");
    hiddenButts.classList.remove("showHiddenButts");
    hiddenButts.classList.add("hidden");
    }, 15000 );
})


const sendIT = async (p) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type","application/json");
    myHeaders.append("Accept","application/json");
    var body = JSON.stringify(p,3,null);
    var options = {
        method: 'POST',
        headers: myHeaders,
        body,
        redirect: 'follow',
        credentials: 'same-origin',
    };
    console.log(options);
    const pics = await fetch("http://localhost:3000/gallery/pics", options)
    .then(response => response.text())
    .then(result => JSON.parse(result))
    .catch(e => console.log(e));
    return pics;
}
const formattedPics = (pics) => {
    let pictorals = '<div id = "specPics">';
    console.log(pics);
    Object.entries(pics).forEach(([key,value])=>{
        pictorals += `<div><h1>${key}</h1>`;
        // pictorals.concat(title);
        for(var value of pics[key]) {
            pictorals += '<img src="' + value + '"/>';
        };
        pictorals += "</div>";
    });
    pictorals += "</div>"
    console.log(pictorals);
    return pictorals;
}

const finishingTouches = () => {
    preGal.innerHTML.replace("MCD Gallery", "Interior Renovation");
    preGal.innerHTML.replace("/home", "/gallery")
}


const lla = document.querySelector(".leftLineAbsolute");
// const body = document.querySelector("body");
// lla.classList += " hidden";
const resize = () => {
    var body = document.body,
    html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    // if(preGal.getElementsByTagName("h2")[0].textContent.length > 0) {
        // console.log($(document).height());
    // var finalheight = $(document).height()
    // lla.classList -= " hidden";
    lla.style.height = height + window.innerHeight * .2;
    // - (.13*window.innerHeight);
    
}

interiorButt.addEventListener("click", async () => {
    var pics = {pics:"interior"};
    const interiorGallery = await sendIT(pics);
    const finalHTML = formattedPics(interiorGallery);
    
    preGal.innerHTML = "<h2>Interior Renovation</h2>"
    gallery.innerHTML = finalHTML;
    resize();
    // let bodyHeight = window.getComputedStyle()
    // leftLineAbsolute.style.height = `${window.getComputedStyle()}`
});


exteriorButt.addEventListener("click", async () => {
    var pics = {pics: "exterior"};
    const exGallery = await sendIT(pics);
    const finalHTML = formattedPics(exGallery);
    gallery.innerHTML = finalHTML;
    preGal.innerHTML = "<h2>Exterior Renovation</h2>"
    resize();
});
construction.addEventListener("click", async () => {
    var pics = {pics:"construction"};
    const conGallery = await sendIT(pics);
    const finalHTML = formattedPics(conGallery);
    gallery.innerHTML = finalHTML;
    preGal.innerHTML = "<h2>Construction</h2>"
    resize();
});

if (preGal.getElementsByTagName("h2")[0].textContent.length > 0) {
    lla.style.height = window.getComputedStyle(body).height +"px"; 
    console.log(window.getComputedStyle(body).height +"px");
}