// CONTROLLER
function runSubmit() {

    // Reset alert & results table to invisible
    let resultsDiv = document.getElementById("resultsDiv");
    resultsDiv.innerHTML = "";

    // get handle to runtime span
    let runtimeSpan = document.getElementById("runtime");
    runtimeSpan.innerHTML = "";
    
    // obtain user values
    let testPhrase = document.getElementById("testPhrase").value;

    let errorMsg = "";

    if(!testPhrase) {
        errorMsg += `${errorMsg} You can't race in the Palindrome with nothing to ride.<br>Enter a value please.`;
    }

    if( errorMsg == "") {

        let result = false;

        const start = performance.now();
        result = IsPalindronme(testPhrase);
        const end = performance.now();

        runtimeSpan.innerHTML = `Execution time for solution selected was ${roundNumber(end-start,4)} ms`;

        displayResults(result, resultsDiv);

    } else {

        displayErrorMessage(errorMsg, resultsDiv);

    }

}

// LOGIC
function IsPalindronme(testPhrase) {

//    let re =  /[^A-Za-z0–9]/g;
    let rex =  /[\W_]/g;
    let phrase = testPhrase.toLowerCase().replace(rex,'');
    let rPhrase = phrase.split('').reverse().join('');

    return phrase == rPhrase;

}

// UI
function displayErrorMessage(errorMsg, resultsDiv) {

    // get handle to template
    let alertTemplate = document.getElementById("alertTemplate");

    // get handle to p tag via importNode
    let template = document.importNode(alertTemplate.content,true);
    let p = template.querySelector("p");

    // clear p tag
    p.innerHTML = "";

    // add new message
    p.innerHTML = errorMsg;

    // append template to results div
    resultsDiv.appendChild(template);

}

function displayResults(result, resultsDiv) {

    if( result == true) {
        // get handle to template
        let successTemplate = document.getElementById("successTemplate");

        // get handle to p tag via importNode
        let template = document.importNode(successTemplate.content,true);
        let p = template.querySelector("p");

        // clear p tag
        p.innerHTML = "";

        // add new message
        p.innerHTML = `Congratulations!!! You found yourself a Palindrome.`

        // append template to results div
        resultsDiv.appendChild(template);
    }
    else {
        displayErrorMessage("Sorry, that is not a Palindrome",resultsDiv);
    }


}

// SUPPORT LOGIC
function roundNumber(rnum, rlength) { 
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
}

// SUPPORT UI
function toggleViewCode() {
    
}
