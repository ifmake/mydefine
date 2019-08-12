function remModule () {
    const width = document.documentElement.getBoundingClientRect().width;
    let rem = parseInt(width / 75);
    document.documentElement.style.fontSize = rem + 'px';
}