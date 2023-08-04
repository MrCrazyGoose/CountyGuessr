counties = ["Allegany County", "Carroll County", "Harford County", "St. Mary's County", "Anne Arundel County", "Cecil County", 
"Howard County", "Somerset County", "Baltimore City", "Charles County", "Kent County", "Talbot County", "Baltimore County", 
"Dorchester County", "Montgomery County", "Washington County", "Calvert County", "Frederick County", "Prince George's County", 
"Wicomico County", "Caroline County", "Garrett County", "Queen Anne's County", "Worcester County"];
let answered = 0;
let correct = 0;
let buttons = [];
let county = null;
let accuracy = 0;
let countyCompare;
let timer = 0;

// create buttons
let btnContainer = document.querySelector("#map");
for (let c of counties) {
    let btn = document.createElement("button");
    btn.id =  String(c).replace("County", "").replaceAll(" ", "").replace("'", "").replace(".", "").toLowerCase();
    btn.addEventListener("click", buttonClick);
    btn.innerText = "?";
    btnContainer.append(btn);
}

function question() {
    let arrayEle = Math.floor(Math.random() * counties.length);
    county = counties[arrayEle];
    document.querySelector("#instructions").innerText = "Click on " + county + "!";
    counties.splice(arrayEle, 1);
    console.log(county);
}

let intId = setInterval(() => {
    timer = timer + 1;
    document.querySelector("#timer").innerText = "Timer: " + timer + " seconds";
}, 1000);

question();

function buttonClick(event) {
    let clickedID = event.currentTarget.id;
    // function changeColor(animateClass) {
    //     $(function() {
    //         $("#" + clickedID)
    //           .on("animationbegin", function(){
    //           $(this).addClass(animateClass);
    //         })
    //           .on("animationend", function(){
    //           $(this).removeClass(animateClass);
    //         });
    //         });
    // }
    if (counties.length > 0) {
        // document.getElementByID(clickedID).addEventListener("click", function() {
        countyCompare = String(county).replace("County", "").replaceAll(" ", "").replace("'", "").replace(".", "").toLowerCase();
        console.log("activated");
        answered = answered + 1;
        console.log(county);
        console.log("match?" + clickedID);
        console.log("match?" + countyCompare);
        if (clickedID == countyCompare) {
            // changeColor("animateCorrect");
            alert("Correct! You guessed " + county);
            // changeColor("animateReset");
            console.log("??" + county);
            correct = correct + 1;
            console.log(correct);
            question();
        }
        else if (clickedID != countyCompare) {
            // changeColor("animateCorrect")
            // $(clickedID).addClass("colorTrans")
            document.getElementById(countyCompare).style.backgroundColor = "lime";
            alert("Incorrect! Instead of clicking on " + county + ", you clicked on " + clickedID + " county :( Excuse the miscapitalization and stuff.");
            setTimeout(function() {
                document.getElementById(countyCompare).style.backgroundColor = "white";
            }, 1000);
            // changeColor("animateReset");
            // $(clickedID).removeClass("colorTrans");
            question();
            console.log(clickedID);
        };
        console.log(answered)
    }
    else {
        accuracy = (correct/24)*100;
        document.querySelector("#instructions").innerText = "Game over! Your answered " + correct + " questions correctly with an accuracy of around " + Math.round(accuracy) + "% in " + timer + " seconds!";
        alert("Game over! Your answered " + correct + " questions correctly with an accuracy of around " + Math.round(accuracy) + "% in " + timer + " seconds!");
        clearInterval(intId);
        return;
    };
        
};