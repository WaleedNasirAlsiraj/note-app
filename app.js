

function addtask() {
    let newNote = document.getElementById("new-note");
    let btn = document.getElementById("add-btn");
    let title = document.getElementById("title")
    let note = document.getElementById("note")
    if (newNote.classList == "hide") {
        newNote.classList.add("active")
        btn.classList.add("rotate")
    } else {
        btn.classList.remove("rotate")
        newNote.classList.remove("active")
        title.value = ""
        note.value = ""
    }
}

function add() {
    let title = document.getElementById("title")
    let note = document.getElementById("note")
    let btn = document.getElementById("add-btn");
    let newNote = document.getElementById("new-note");
    let list = document.getElementById("list")
    let titleValue = document.getElementById("title").value
    if (title.value != "" && note.value != "") {
        newNote.classList.add("hide")
        newNote.classList.remove("active")
        btn.classList.remove("rotate")
        title.value = ""
        note.value = ""
        addNote = document.createElement("div")
        addNote.classList.add("note")
        addNote.innerHTML = `<h1>${titleValue}</h1>`
        list.append(addNote)
        let colorCollection = ["#546EFF","#FF7220","#FF133F","#00BC58","#4657CE","#FC4422","#F9C811"]
        let colorSelect = document.getElementById("color").value
        if(colorSelect == "#ffffff"){
            let i = Math.floor(Math.random() * colorCollection.length)
            addNote.style.backgroundColor = colorCollection[i]
        }else {
            addNote.style.backgroundColor = colorSelect
        }
    } else if (title.value == "") {
        alert("Please Enter The Title")
    } else if (note.value == "") {
        alert("Please Enter The Note")
    }

}

function clearnote() {
    let note = document.getElementById("note")
    if (note.value != "") {
        note.value = ""
    }else alert("Note is already empty")
}

function search() {
    alert("Working on it :)")
}