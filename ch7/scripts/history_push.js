var count = 0;
var result = document.getElementById('result');

document.getElementById('btn').addEventListener('click', function () {
    result.textContent = ++count;
    history.pushState(count, null, '/javascript_introduction/ch7/count/' + count);
});

window.addEventListener('popstate', function (e) {
    count = e.state;
    result.textContent = count;
});