const noteForm = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const noteCategory = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');

let notes = [];

function render() {
    notesList.innerHTML = ''; // We can't use innerHTML for user text, but we can clear it this way or with textContent = ''
    
    notes.forEach(note => {
        const li = document.createElement('li');
        li.className = `note-card category-${note.category}`;
        
        const pText = document.createElement('p');
        pText.textContent = note.text;
        
        const metaDiv = document.createElement('div');
        metaDiv.className = 'note-meta';
        
        const catDateSpan = document.createElement('span');
        catDateSpan.textContent = `[${note.category}] - ${note.createdAt}`;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        
        metaDiv.appendChild(catDateSpan);
        metaDiv.appendChild(deleteBtn);
        
        li.appendChild(pText);
        li.appendChild(metaDiv);
        
        notesList.appendChild(li);
    });
}

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = noteInput.value;
    const category = noteCategory.value;
    
    const newNote = {
        id: Date.now(),
        text: text,
        category: category,
        createdAt: new Date().toLocaleString()
    };
    
    notes.push(newNote);
    noteInput.value = '';
    
    render();
});

render();
