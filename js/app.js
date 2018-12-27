$(document).foundation()

function myClosRewardsValidate() {
    var serials = {
        "christmas": "<a target='_blank' href='images/ChristmasCard.jpg'>Merry <i>[Censored: Religious]</i> from the Mr. <strong>Clos</strong> Fan Club Staff!</a>",
        "chemistry": "Mr. <strong>Clos</strong>",
        "bold": "Prepare for the only (intentional) unbolded <strong>Clos</strong> on the site!</br>3...</br>2...</br>1...</br>CLOS!!!!!!!!!!</br>Oooh boy, I cannot handle the strain of doing that again",
        "cl054lph4": "Hey! How did you get this? The <strong>Clos</strong>Replace alpha version hasn't even been released yet!",
        "clos": "<strong>ClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClosClos</strong>",
        "alex": "Haha like I'd get a special message or anything... Wait...",
        "jake bridge": "He is an anonymous boi, so this message is secret",
        "censored": "Censorship is fine as long as it can be used for comedic effect. The <i>[Censored: Political]</i> censorship is abhorrent though."
    }
    var key = document.getElementById("myclosrewardskey").value.toLowerCase();
    if (serials.hasOwnProperty(key)) {
        document.getElementById("closrewardsoutput").innerHTML = serials[key];
        document.getElementById("closrewardsoutput").innerHTML += "</br></br>";
        document.getElementById("myclosrewardskey").value = "";
    } else if (key == "") {
        myClosRewardsReset();
    } else {
        document.getElementById("closrewardsoutput").innerHTML = "Not a valid serial. Please verify that it is entered correctly. </br></br>";
    }
    document.getElementById("resetButton").style.display = "block";
    return false;
}

function myClosRewardsReset() {
    document.getElementById("myclosrewardskey").value = "";
    document.getElementById("closrewardsoutput").innerHTML = "";
    document.getElementById("resetButton").style.display = "none";
}

window.onload = myClosRewardsReset();
