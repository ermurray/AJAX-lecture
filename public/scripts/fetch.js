fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits').then(res => res.json()).then(data => console.log(data));