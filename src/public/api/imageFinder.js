const daddy = "../images/dadPics/"
var classifiers = {
     construction : "Additions/",
     interior : "InteriorRenovation/",
     exterior : "ExteriorRenovation/",
    //  structural : "images/StructuralImprovements/"

}

// var pics = {
//     construction:{
//         fence:"/IMG_4407",
//         addition:"/IMG_4414",
//         marilyn1:"/marilynshouse",
//         marilyn2:"/marilynshouse2",
//         deck1:"/deck1",
//         deck2:"/deck2",
//         deck3:"/deck3",
//         deck4:"/deck4"
//     },
//     interior:{
//         kitchen1:"IMG_4415",
//         kitchen2:"IMG_4416",
//         kitchen3:"IMG_4417",
//         kitchen4:"IMG_4418",
//         bath1:"bath",
//         bath2:"bath2",
//         stairs:"stairway",
//         window:"window",
//         window2:"window2",
//         pillar:"pillar2",
//         kitchenb:"kitchenb2",
//         kitchenb2:"kitchenb3"
//     },
//     exterior:{

//     },
//     structural:{

//     },
    
// }
// const theFixer = (classifier) => {
//     const classyBitch = `${classifier}`
//     Object.entries(pics[classyBitch]).forEach(([key, value]) => {
//         pics[classifier][key] = daddy + `${classifiers[classyBitch]}` + value + ".JPG"
//     })
// };
// for (var key in classifiers){
//  theFixer(key);
// };

var pics = {
    construction:{
        "Cape Style": [ "whole1", "whole2", "whole3", "whole4", "whole5", "whole6", "whole7", "whole8"],
        "Bostonian": [ "marilynshouse", "marilynshouse2"],
        Additions:["IMG_4414","deck1", "deck2", "deck3", "deck4","IMG_0347", "IMG_4399","IMG_0322", "IMG_4407"],
    },
    interior:{
        "Whole Houses": ["IMG_0441", "IMG_0442", "IMG_4412", "IMG_4413" ],
        Kitchens: [ "IMG_4415", "IMG_4416", "IMG_4417", "IMG_4418", "kitchenb2", "kitchenb3" ],
        Baths:[ "bath", "bath2",],
        "Misc.": ["stairway", "pillar2"],
    },    
    exterior:{
        // whole: [ "whole1", "whole2", "whole3", "whole4", "whole5", "whole6", "whole7", "whole8"],
        Siding: [ "IMG_4391", "IMG_4396", ],
        custom: ["IMG_4402"],
        "Skylights & Windows": ["window", "window2","IMG_4405", "IMG_4403","IMG_4406"]
    },
    // structural:{
    //     windows:[ "window", "window2", ],
    //     skylights: [ "IMG_4405", "IMG_4403","IMG_4406", ],
    // },
}

const jpegs = ["IMG_0441","IMG_0442","IMG_0347","IMG_0322"]
const finisher = (classifier,picClass) => {
    Object.keys(picClass).forEach((key) => {
        if(!picClass[key].length >1) {
            picClass[key] = daddy + classifier + `${picClass[key]}` +".JPG"
        } else {
            const newFiles = new Array
           for(var value of picClass[key]) {
               if(value === "IMG_0441"|| value === "IMG_0442" 
               || value === "IMG_0347" || value === "IMG_0322") {
                var newFile = daddy + classifier + value + ".JPEG"
               } else {
               var newFile = daddy + classifier + value + ".JPG"
               }
               newFiles.push(newFile)
           }
           picClass[key] = newFiles
        }
    })
}

Object.entries(classifiers).forEach(([key,value]) => {
    const classifier = `${classifiers[key]}`
    const picClass = pics[key]
    return finisher(classifier,picClass)
})





// Object.entries(pics).forEach(([key,value]) => {
//     const buttz = key
//     Object.entries(pics[key]).forEach(([keyd,value]) => {
//         const buttz2 = keyd
//         pics[buttz[buttz2]] = classifiers[buttz] + 
//     })
    
// })


// Object.keys(pics).forEach((Daddykey) => {
//     const pacifier = Object.keys(classifiers).filter((key)=>{
//         if(key === Daddykey) {
//             return key
//         }
//     })
    
//     return Object.entries(pics.Daddykey).forEach(([key,value]) => {
//        return Daddykey[key] = pacifier + value + ".JPG"
//     })
// })



// Object.entries(pics.construction).forEach(([key,value])=> {
//     pics.construction[key]= construction + value + ".JPG"
// })
// Object.entries(pics.interior).forEach(([key,value])=>{
//     pics.interior[key] = interior + value
// })

// console.log(pics, "\nworking??")//I wasted HOURS because this was "pics +", instead of "pics," LIKE WTFinFFFFFFFFFFFFFFFFFFFFFFF


console.log(pics, "\nworking??")//I wasted HOURS because this was "pics +", instead of "pics," LIKE WTFinFFFFFFFFFFFFFFFFFFFFFFF
module.exports = {pics}