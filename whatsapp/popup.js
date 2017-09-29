function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "jquery2.1.4.js"});
        chrome.tabs.executeScript(tabs[0].id, {file: "sendKeys.js"});
        chrome.tabs.executeScript({code: 'var veces ='+ document.getElementById("veces").value+ '; var mensaje ="'+document.getElementById("mensaje").value+'";'},function() {
          chrome.tabs.executeScript(tabs[0].id, {file: "content_script.js"});
        });

    });
}

  $("#botonRun").click(function() {injectTheScript();});
