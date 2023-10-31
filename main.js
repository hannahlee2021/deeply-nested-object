// const day = {
//     day1: {
//         time: "5:22pm",
//         num: 1,
//         texture: ["coarse", "slightly curly"],
//         color:"black",
//         hairLength: "long",
//         strandLength: "long",
//         emotionBefore: {
//             leadingEvent:{
//                 location: "d12 core lab",
//                 people: "classmates",
//                 mood: "bored"
//             }
//         },
//         emotionDuring: {
//             awareness: false,
//             instantGratification: true
//         },
//         emotionAfter: {
//             negative: false
//         },
//         alot: function(alotOfHairs) {
//             if (this.num > 15) {
//                 console.log("don't be sad it is okay");
//             }
//             else {
//                 console.log("good job! not too bad this time!");
//             }
//         },
//         mood: function(bored) {
//             if (!bored) {
//                 console.log("as always");
//                 return;
//             }
//             console.log(bored + ", the classic mood");
//         }
//     },


//initializing variable where dynamic data will be stored

//101623
const day_1_info = {
    title: "101623",
    time: "5:22pm",
    num: 1,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "D12",
            people: "classmates",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "no",
        instant_gratification: "yes"
    },
    emotion_after: {
        negative: "no"
    }
}

//101723
const day_2_info = {
    title: "101723",
    time: "1:30am",
    num: 20,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "bed",
            people: "none",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "yes",
        instant_gratification: "yes"
    },
    emotion_after: {
        negative: "yes"
    }


}

//101823
const day_3_info = {
    title: "101823",
    time: "10:36pm",
    num: 5,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "bobst library",
            people: "sebin, hailey",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "yes",
        instant_gratification: "yes"
    },
    emotion_after: {
        negative: "no"
    }
}

//101923
const day_4_info = {
    title: "101923",
    time: "2:00am",
    num: 30,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "bed",
            people: "none",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "no",
        instant_gratification: "yes"
    },
    emotion_after: {
        negative: "yes"
    }
}

//102023
const day_5_info = {
    title: "102023",
    time: "4:30pm",
    num: 6,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "dorm desk",
            people: "none",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "yes",
        instant_gratification: "no"
    },
    emotion_after: {
        negative: "no"
    }
}

//102123
const day_6_info = {
    title: "102123",
    time: "7:00pm",
    num: 3,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "m14 bus",
            people: "passengers",
            mood: "bored"
        }

    },
    emotion_during: {
        awareness: "yes",
        instant_gratification: "yes"
    },
    emotion_after: {
        negative: "yes"
    }
}

//102223
const day_7_info = {
    title: "102223",
    time: "6:10pm",
    num: 40,
    texture:["coarse", " slightly curly"],
    color: "black",
    emotion_before: {
        leading_event: {
            location: "bobst library",
            people: "students",
            mood: ["bored", " stressed"]
        }

    },
    emotion_during: {
        awareness: "no",
        instant_gratification: "no"
    },
    emotion_after: {
        negative: "no"
    }
}

//this is where the data from the initialized variable storing the data gets injected into the html container
//*the framework for all the days are the same

//101623

//displaying the title element by first selecting the class in which it is stored and then using innerHTML to add it to the html container
const titleElement = document.querySelector('.day_title_1')
titleElement.innerHTML = day_1_info.title

//directly using innerHTML to add the specified categroy within the initialized variable holding the data
document.querySelector('.time_1').innerHTML = "time: " + day_1_info.time
document.querySelector('.num-1').innerHTML = "num: " + day_1_info.num
document.querySelector('.texture-1').innerHTML = "texture: " + day_1_info.texture
document.querySelector('.emotion-before-1').innerHTML = "emotion [before]: " + "location: " +  day_1_info.emotion_before.leading_event.location + "people: " + day_1_info.emotion_before.leading_event.people + " mood: " + day_1_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-1').innerHTML = "emotion [during]: " + "awareness: " + day_1_info.emotion_during.awareness + " instant gratification: " + day_1_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-1').innerHTML = "emotion [after]: " + day_1_info.emotion_after.negative

//101723
const titleElement2 = document.querySelector('.day_title_2')
titleElement2.innerHTML = day_2_info.title

document.querySelector('.time_2').innerHTML = "time: " + day_2_info.time
document.querySelector('.num-2').innerHTML = "num: " + day_2_info.num
document.querySelector('.texture-2').innerHTML = "texture: " + day_2_info.texture
document.querySelector('.emotion-before-2').innerHTML = "emotion [before]: " + "location: " +  day_2_info.emotion_before.leading_event.location + "people: " + day_2_info.emotion_before.leading_event.people + " mood: " + day_2_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-2').innerHTML = "emotion [during]: " + "awareness: " + day_2_info.emotion_during.awareness + " instant gratification: " + day_2_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-2').innerHTML = "emotion [after]: " + day_2_info.emotion_after.negative

//101823 info
const titleElement3 = document.querySelector('.day_title_3')
titleElement3.innerHTML = day_3_info.title

document.querySelector('.time_3').innerHTML = "time: " + day_3_info.time
document.querySelector('.num-3').innerHTML = "num: " + day_3_info.num
document.querySelector('.texture-3').innerHTML = "texture: " + day_3_info.texture
document.querySelector('.emotion-before-3').innerHTML = "emotion [before]: " + "location: " +  day_3_info.emotion_before.leading_event.location + "people: " + day_3_info.emotion_before.leading_event.people + " mood: " + day_3_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-3').innerHTML = "emotion [during]: " + "awareness: " + day_3_info.emotion_during.awareness + " instant gratification: " + day_3_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-3').innerHTML = "emotion [after]: " + day_3_info.emotion_after.negative

//101923 info
const titleElement4 = document.querySelector('.day_title_4')
titleElement4.innerHTML = day_4_info.title

document.querySelector('.time_4').innerHTML = "time: " + day_4_info.time
document.querySelector('.num-4').innerHTML = "num: " + day_4_info.num
document.querySelector('.texture-4').innerHTML = "texture: " + day_4_info.texture
document.querySelector('.emotion-before-4').innerHTML = "emotion [before]: " + "location: " +  day_4_info.emotion_before.leading_event.location + "people: " + day_4_info.emotion_before.leading_event.people + " mood: " + day_4_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-4').innerHTML = "emotion [during]: " + "awareness: " + day_4_info.emotion_during.awareness + " instant gratification: " + day_4_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-4').innerHTML = "emotion [after]: " + day_4_info.emotion_after.negative

//102023 info
const titleElement5 = document.querySelector('.day_title_5')
titleElement5.innerHTML = day_5_info.title

document.querySelector('.time_5').innerHTML = "time: " + day_5_info.time
document.querySelector('.num-5').innerHTML = "num: " + day_5_info.num
document.querySelector('.texture-5').innerHTML = "texture: " + day_5_info.texture
document.querySelector('.emotion-before-5').innerHTML = "emotion [before]: " + "location: " +  day_5_info.emotion_before.leading_event.location + "people: " + day_5_info.emotion_before.leading_event.people + " mood: " + day_5_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-5').innerHTML = "emotion [during]: " + "awareness: " + day_5_info.emotion_during.awareness + " instant gratification: " + day_5_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-5').innerHTML = "emotion [after]: " + day_5_info.emotion_after.negative

//102123 info
const titleElement6 = document.querySelector('.day_title_6')
titleElement6.innerHTML = day_6_info.title

document.querySelector('.time_6').innerHTML = "time: " + day_6_info.time
document.querySelector('.num-6').innerHTML = "num: " + day_6_info.num
document.querySelector('.texture-6').innerHTML = "texture: " + day_6_info.texture
document.querySelector('.emotion-before-6').innerHTML = "emotion [before]: " + "location: " +  day_6_info.emotion_before.leading_event.location + "people: " + day_6_info.emotion_before.leading_event.people + " mood: " + day_6_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-6').innerHTML = "emotion [during]: " + "awareness: " + day_6_info.emotion_during.awareness + " instant gratification: " + day_6_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-6').innerHTML = "emotion [after]: " + day_6_info.emotion_after.negative

//102223 info
const titleElement7 = document.querySelector('.day_title_7')
titleElement7.innerHTML = day_7_info.title

document.querySelector('.time_7').innerHTML = "time: " + day_7_info.time
document.querySelector('.num-7').innerHTML = "num: " + day_7_info.num
document.querySelector('.texture-7').innerHTML = "texture: " + day_7_info.texture
document.querySelector('.emotion-before-7').innerHTML = "emotion [before]: " + "location: " +  day_7_info.emotion_before.leading_event.location + "people: " + day_7_info.emotion_before.leading_event.people + " mood: " + day_7_info.emotion_before.leading_event.mood
document.querySelector('.emotion-during-7').innerHTML = "emotion [during]: " + "awareness: " + day_7_info.emotion_during.awareness + " instant gratification: " + day_7_info.emotion_during.instant_gratification
document.querySelector('.emotion-after-7').innerHTML = "emotion [after]: " + day_7_info.emotion_after.negative


//101623 container

//defining what goes on when mouse hovers over strand image (mouseover event)
//container follows the movement of the mouse and falling strand image so that it shows up next to it
function showContainer1() {
var container1 = document.getElementById("container1");
container1.style.display = "block";
container1.style.left = (event.clientX+10) + "px";
container1.style.top = event.clientY+"px";
}

function hideContainer1() {
var container1 = document.getElementById("container1");
container1.style.display = "none";
}

//101723 container
function showContainer2() {
    var container2 = document.getElementById("container2");
    container2.style.display = "block";
    container2.style.left = (event.clientX+10) + "px";
    container2.style.top = event.clientY+"px";  
}
    
function hideContainer2() {
var container2 = document.getElementById("container2");
container2.style.display = "none";
}

//101823 container
function showContainer3() {
    var container3 = document.getElementById("container3");
    container3.style.display = "block";
    container3.style.left = (event.clientX+10) + "px";
    container3.style.top = event.clientY+"px";  
}
    
function hideContainer3() {
var container3 = document.getElementById("container3");
container3.style.display = "none";
}

//101923 container
function showContainer4() {
    var container4 = document.getElementById("container4");
    container4.style.display = "block";
    container4.style.left = (event.clientX+10) + "px";
    container4.style.top = event.clientY+"px";  
}
    
function hideContainer4() {
var container4 = document.getElementById("container4");
container4.style.display = "none";
}

//102023 container
function showContainer5() {
    var container5 = document.getElementById("container5");
    container5.style.display = "block";
    container5.style.left = (event.clientX+10) + "px";
    container5.style.top = event.clientY+"px";  
}
    
function hideContainer5() {
var container5 = document.getElementById("container5");
container5.style.display = "none";
}

//102123 container
function showContainer6() {
    var container6 = document.getElementById("container6");
    container6.style.display = "block";
    container6.style.left = (event.clientX+10) + "px";
    container6.style.top = event.clientY+"px";  
}
    
function hideContainer6() {
var container6 = document.getElementById("container6");
container6.style.display = "none";
}

//102223 container
function showContainer7() {
    var container7 = document.getElementById("container7");
    container7.style.display = "block";
    container7.style.left = (event.clientX+10) + "px";
    container7.style.top = event.clientY+"px";  
}
    
function hideContainer7() {
var container7 = document.getElementById("container7");
container7.style.display = "none";
}


