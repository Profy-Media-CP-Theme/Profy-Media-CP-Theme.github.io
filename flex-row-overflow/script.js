
document.addEventListener('DOMContentLoaded', function() {

    let pos = { left: 0, x: 0};
    const ele = document.getElementById('row-overflow-wrapper');

    const mouseDownHandler = function (e) {
        pos = {
            left: ele.scrollLeft,
            x: e.clientX,
        };
        ele.style.userSelect = 'none';
    
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    
    
    const mouseMoveHandler = function (e) {
        const dx = e.clientX - pos.x;
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);

        ele.style.removeProperty('user-select');
    };

    ele.addEventListener('mousedown', mouseDownHandler);
});






