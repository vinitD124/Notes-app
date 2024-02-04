let circle = document.querySelector(".circle");
let fullWidth = document.querySelector(".full-width");
let closeBtn = document.querySelector(".box-icon");
let formContainer = document.querySelector(".container");
let formSubmit = document.querySelector("#btn-submit");
let ulCotainer = document.querySelector(".notes-container");
let url = "https://6523b400ea560a22a4e8b41b.mockapi.io/user";

circle.addEventListener("click", () => {
  fullWidth.classList.add("active");
  formContainer.classList.add("show-form");
});

closeBtn.addEventListener("click", () => {
  fullWidth.classList.remove("active");
  formContainer.classList.remove("show-form");
});

formSubmit.addEventListener("click", noteCreate);

function noteCreate() {
  let str = "";
  let noteTitle = document.querySelector("#note-title").value;
  let noteText = document.querySelector("#note-text").value;
  let liElement = document.createElement("li");

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

  str += `<div class="note-box">
    <h3 class="note-title">${noteTitle}</h3>
    <p class="note-text">
      ${noteText}
    </p>
    <div class="row">
      <span class="note-date">${day}/${month}/${year}</span>
      <div class="btn-container">
        <i  class="del-btn bx bx-trash-alt"></i>
        <i  class="edit-btn bx bxs-edit"></i>
      </div>
    </div>
  </div>`;

  let noteInfo = {
    title: noteTitle,
    text: noteText,
    date: currentDate,
  };

 

  liElement.innerHTML = str;
  liElement.classList.add("notes");

  let currentNote = ulCotainer.querySelector(".notes");
  ulCotainer.insertBefore(liElement, currentNote);

  let editBtn = liElement.querySelector(".edit-btn")
  editBtn.addEventListener("click", () => {


      if (noteTitle && noteText){
        let nn = document.getElementById("neww").value
      liElement.querySelector(".note-title").innerHTML = nn
      document.getElementById("neww").value = ""
      }

    
  });

  const deleteButton = liElement.querySelector(".del-btn");
  deleteButton.addEventListener("click", function () {
    liElement.remove();
  });

  document.querySelector("#note-title").value = "";
  document.querySelector("#note-text").value = "";
  closeBtn.click();
}
