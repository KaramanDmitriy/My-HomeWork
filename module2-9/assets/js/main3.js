const resizable = document.getElementById('resizable');
const handle = document.getElementById('handle');

let isResizing = false;

handle.addEventListener('mousedown', function(e) {
    e.preventDefault();
    isResizing = true;
});

document.addEventListener('mousemove', function(e) {
    if (isResizing) {
    const newWidth = e.clientX - resizable.getBoundingClientRect().left;
    const newHeight = e.clientY - resizable.getBoundingClientRect().top;
    resizable.style.width = newWidth + 'px';
    resizable.style.height = newHeight + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isResizing = false;
});
