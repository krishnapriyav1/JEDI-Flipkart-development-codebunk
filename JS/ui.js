function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#5733FF", "#33A1FF", "#FF33DD"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}