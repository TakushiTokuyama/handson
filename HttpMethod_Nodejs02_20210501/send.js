var sendDeleteMethod = document.getElementById('sendDeleteMethod');
var request = new XMLHttpRequest();

sendDeleteMethod.addEventListener('click', function () {
    request.open("DELETE", "/delete", true);
    request.send("delete");
});

var sendPutMethod = document.getElementById('sendPutMethod');

sendPutMethod.addEventListener('click', function () {
    request.open("PUT", "/put", true);
    request.send("put");
});