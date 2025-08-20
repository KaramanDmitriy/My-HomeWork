let isEditing = false;

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.key === 'e') {
    e.preventDefault();
    if (!isEditing) {
      const div = document.getElementById('textDisplay');
      const text = div.innerText;
      const textarea = document.createElement('textarea');
      textarea.id = 'editor';
      textarea.value = text;
      div.replaceWith(textarea);
      isEditing = true;
    }
  }

  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    if (isEditing) {
      const textarea = document.getElementById('editor');
      const newText = textarea.value;
      const div = document.createElement('div');
      div.id = 'textDisplay';
      div.innerText = newText;
      textarea.replaceWith(div);
      isEditing = false;
    }
  }
});



