let btn = document.getElementById('btn');

btn.onclick = function() {
    let n = document.getElementById('n').value;
   
    let line = '';

    for (let i = 0; i < n; i++) {
        line += '*';

        document.writeln(line);
        document.writeln("<br/>");
    }
}