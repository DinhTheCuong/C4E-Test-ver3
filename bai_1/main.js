
let btn = document.getElementById('btn');

btn.onclick = function() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let res;
    let sum = 0;

    for (let i = a + 1; i < b; i++) {
        res = true;
        for (let j = 2; j <= i/2; j++) {
            if (i % j == 0) {
                res = false;
                break;
            }
        }
        if (res) {
            sum += i;
        }
    }
    document.write(sum);
}