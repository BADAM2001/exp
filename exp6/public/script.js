function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/data", true); // Request data from server
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}