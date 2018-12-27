$(document).foundation()

function myClosRewardsValidate() {
    var serials = {
        "christmas": "<a target='_blank' href='images/ChristmasCard.jpg'>Merry <i>[Censored: Religious]</i> from the Mr. <strong>Clos</strong> Fan Club Staff!</a>",
        "chemistry": "Mr. <strong>Clos</strong>",
        "bold": "Prepare for the only (intentional) unbolded <strong>Clos</strong> on the site!</br>3...</br>2...</br>1...</br>CLOS!!!!!!!!!!</br>Oooh boy, I cannot handle the strain of doing that again",
        "cl054lph4": "<div class='callout alert'>    <h5 class='center'><strong>Clos</strong>Replace is in very early alpha versions! (v0.0.1a)</h5>    <p class='center'>The <strong>Clos</strong>Replace extension is currently in it's alpha version, and carries some risks. It may inhibit user experience and currently has limited functionality. Use at your own risk.</p></div><p>Most Recent Version: <i>v0.0.1a</i></p><p><strong>Clos</strong>Replace is now released! Currently (as of v0.0.1a) all it does is bold all instances of <strong>Clos</strong> in a webpage unobtrusively (hopefully). It is currently an alpha because 1) it doesn't do much else; and 2) it might break links and stuff (although it shouldn't). It still needs some testing, which is why I'm releasing it now. Be sure to check this page regularly to recieve new updates. <a target='_blank' href='https://github.com/RAND-bytes/ClosReplace'>View the source code here.</a></p><p>I will be releasing both <strong>Clos</strong>Replace and <strong>Clos</strong>Theme on the Chrome Web Store once <strong>Clos</strong>Replace enters the beta version. Keep watching the site to hear about when it will be released!</p><p>Chrome is hecking stupid and doesn't allow you to install extensions not from the Chrome Web Store so you have to install it weirdly manually.</p><strong>Instructions to install on chrome:</strong><ol>    <li>Download the Chrome Version</li>    <li>Unzip the file using WinZip, included utility, etc. (Must be <strong><i>EXTRACTED</i></strong> into it's own folder, not simply viewed)</li>    <li>Open Chrome and go to <code>chrome://extensions</code></li>    <li>Check the 'Developer Mode' switch in the upper left hand corner</li>    <li>Click 'Load Unpacked'</li>    <li>Navigate to the '<strong>Clos</strong>Replace' folder and select it</li>    <li><strong>Clos</strong>Replace should now be installed, and you can delete the downloaded zip and extracted folder</li></ol><a href='firefox/closreplace-0.0.1-fx.xpi'><button type='button' class='success button'>Install <strong>Clos</strong>Replace (Firefox)</button></a>&nbsp;<a href='chrome/ClosReplace.zip'><button type='button' class='success button'>Download <strong>Clos</strong>Replace (Chrome)</button></a></br><a target='_blank' href='https://www.virustotal.com/#/file/2a5b3507d3419a019aa2f9543c21867f8a0ffde7ab8200dcffa2644d4e73b26c/detection'>Virustotal Link (Firefox)</a> <a target='_blank' href='https://www.virustotal.com/#/file/48a6a5b19a88d54542ae0463a6108fed4e447cafa9aa7543915204f666a02509/detection'>Virustotal link (Chrome)</a>",
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

//window.onload = myClosRewardsReset();
