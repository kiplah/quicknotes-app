const noteForm = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const noteCategory = document.querySelector('#note-category');
const notesList = document.querySelector('#notes-list');
const errorMessage = document.querySelector('#error-message');
const noteCount = document.querySelector('#note-count');
const searchInput = document.querySelector('#search-input');
const clearAllBtn = document.querySelector('#clear-all-btn');

let notes = JSON.parse(localStorage.getItem('quicknotes_data')) || [];

function saveNotes() {
    localStorage.setItem('quicknotes_data', JSON.stringify(notes));
}

function updateNoteCount() {
    if (notes.length === 0) {
        noteCount.textContent = "You have no notes yet.";
    } else if (notes.length === 1) {
        noteCount.textContent = "You have 1 note.";
    } else {
        noteCount.textContent = `You have ${notes.length} notes.`;
    }
}

function render(filterText = '') {
    notesList.textContent = ''; // clear without using innerHTML
    
    // Toggle clear all button visibility based on whether there are ANY notes at all
    clearAllBtn.style.display = notes.length > 0 ? 'inline-block' : 'none';
    
    const filteredNotes = notes.filter(note => 
        note.text.toLowerCase().includes(filterText.toLowerCase())
    );
    
    if (filterText && filteredNotes.length === 0) {
        const li = document.createElement('li');
        li.textContent = "No notes match your search.";
        notesList.appendChild(li);
    } else {
        filteredNotes.forEach(note => {
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
            deleteBtn.addEventListener('click', () => {
                notes = notes.filter(n => n.id !== note.id);
                saveNotes();
                render(searchInput.value);
            });
            
            metaDiv.appendChild(catDateSpan);
            metaDiv.appendChild(deleteBtn);
            
            li.appendChild(pText);
            li.appendChild(metaDiv);
            
            notesList.appendChild(li);
        });
    }
    
    updateNoteCount();
}

noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const text = noteInput.value;
    const category = noteCategory.value;
    
    if (text.trim().length === 0) {
        errorMessage.textContent = "Please type a note first.";
        return;
    }
    
    if (text.length > 200) {
        errorMessage.textContent = "Notes must be 200 characters or fewer.";
        return;
    }
    
    errorMessage.textContent = ""; // clear error
    
    const newNote = {
        id: Date.now(),
        text: text.trim(),
        category: category,
        createdAt: new Date().toLocaleString()
    };
    
    notes.push(newNote);
    saveNotes();
    noteInput.value = '';
    
    render(searchInput.value);
});

searchInput.addEventListener('input', (e) => {
    render(e.target.value);
});

clearAllBtn.addEventListener('click', () => {
    if (confirm("Delete all notes?")) {
        notes = [];
        saveNotes();
        searchInput.value = '';
        render();
    }
});

render();
