window.addEventListener("load", (event) => { 
    loadData();
});

function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.coinbase.com/v2/currencies", true);
	xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var dataArray = data['data'];
            for (var i = 0; i < dataArray.length; i++) {
                document.getElementById("moneyTable").innerHTML +=  "<tr>" +
                                                                    "<th>" + dataArray[i]['id'] + "</th>" +
                                                                    "<th>" + dataArray[i]['name'] + "</th>" +
                                                                    "<th>" + dataArray[i]['min_size'] + "</th>" +
                                                                    "</tr>";
            }           
        }
    };
}