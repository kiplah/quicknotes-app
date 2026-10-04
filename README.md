# QuickNotes

QuickNotes is a simple, responsive note-taking web application built from scratch. It allows users to quickly jot down ideas, categorize them by context (Personal, Work, Study), and manage their notes in a clean, user-friendly interface. All data is saved securely in the browser's local storage to ensure notes are preserved across sessions.

## Features
- **Add Notes:** Create notes with a maximum of 200 characters.
- **Categorization:** Assign categories (Personal, Work, or Study) which add distinct visual indicators to the notes.
- **Validation:** Prevents empty submissions and limits notes to 200 characters, displaying appropriate error messages.
- **Search:** Real-time case-insensitive filtering of notes based on search text.
- **Persistence:** Automatically saves and loads notes from the browser's `localStorage`.
- **Delete Options:** Delete individual notes or clear all notes at once with a confirmation prompt.
- **Responsive Design:** Mobile-friendly layout that stacks form controls vertically on smaller screens.

## How to run locally
1. Clone this repository or download the source code files.
2. Open the folder containing the project files.
3. Double-click on `index.html` to open it in any modern web browser. 
4. No build steps or server are required!

## What I learned
- I learned how to use Flexbox to build responsive forms and manage layout effectively across different screen sizes.
- I practiced directly manipulating the DOM using `createElement` instead of `innerHTML` to securely build HTML structures and prevent potential injection issues.
- I gained experience with the Web Storage API, specifically using `localStorage`, `JSON.stringify()`, and `JSON.parse()` to persist state across browser reloads.
- I improved my understanding of event delegation and handling form submissions, including preventing the default page reload behavior.
