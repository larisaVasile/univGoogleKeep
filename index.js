const localNotesList = JSON.parse(localStorage.getItem("notesList"));
const arrNotesList = localStorage.getItem("notesList") ||  [] ;
function addNoteToLocalStorage(noteValues) {
  arrNotesList.push(noteValues);
window.localStorage.setItem("notesList", JSON.stringify(arrNotesList) );
};
console.log(localStorage.getItem("notesList"));
const notesListSection = document.getElementsByClassName("notes_list")[0];

const createNote = () => {
  const noteContainer = document.createElement("div");
  noteContainer.classList.add("list-group-item")
  const noteTitleComponent = document.createElement("div");
  const noteDescriptionComponent = document.createElement("div");
  const noteValues = getNoteValue();
  noteTitleComponent.innerHTML = noteValues.title;
  console.log(noteValues);
  noteDescriptionComponent.innerHTML = noteValues.description;
  notesListSection.appendChild(noteContainer);
  noteContainer.appendChild(noteTitleComponent);
  noteContainer.appendChild(noteDescriptionComponent);
  noteContainer.style.backgroundColor = noteValues.color;
  addNoteToLocalStorage(noteValues);
};

const getNoteValue = () => {
  const noteTitle = document.getElementsByClassName("note_title")[0];
  const noteDescription = document.getElementsByClassName("note_description")[0];
  const noteBackgroundColor = document.getElementsByClassName("color_btn")[0];

  return { title: noteTitle.value, description: noteDescription.value, color:noteBackgroundColor.value };
};

const addNoteListener = () => {
  const addButton = document.getElementsByClassName("btn-success")[0];
  addButton.addEventListener("click", createNote);
};



addNoteListener();
