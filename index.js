// 初始化物件
const rect = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    color: 'rgba(255,0,0,0.2)'
}
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 清空画布
function clear() {
    ctx.clearRect(0, 0, canvas.height, canvas.width)
}

// 这一步, 对矩形进行修改操作
function update() {
    // todo 这里可以设置一下，当x 等于canvas的大小之后怎么处理？反弹如何？
    rect.x++;
    rect.y++;
}

/**
 * render 渲染，展示矩形
 */
function render() {
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color
}

// 主循环的执行逻辑
function run() {
    clear()
    update();
    render();
}

// 想想，为什么我这里填16，以及尝试修改这个16
var myInterval = setInterval(run, 16);