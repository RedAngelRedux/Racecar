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

        let results = "";

        const start = performance.now();
        results = generateResults(testPhrase);
        const end = performance.now();

        runtimeSpan.innerHTML = `Execution time for solution selected was ${roundNumber(end-start,4)} ms`;

        displayResults(results, resultsDiv);

    } else {

        displayErrorMessage(errorMsg, resultsDiv);

    }

}

// LOGIC
function generateResults(testPhrase) {

    let strArray = [];

    // reverse the string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {  
        
        strArray += userString[index];   
    }

    return strArray;

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

function displayResults(results, resultsDiv) {

    // get handle to template
    let successTemplate = document.getElementById("successTemplate");

    // get handle to p tag via importNode
    let template = document.importNode(successTemplate.content,true);
    let p = template.querySelector("p");

    // clear p tag
    p.innerHTML = "";

    // add new message
    p.innerHTML = results;

    // append template to results div
    resultsDiv.appendChild(template);

}

// SUPPORT LOGIC
function roundNumber(rnum, rlength) { 
    var newnumber = Math.round(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
    return newnumber;
}

// SUPPORT UI
function toggleViewCode() {
    
}
