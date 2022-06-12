const $titleNote = $(".note-title");
const $textNote = $(".note-textarea");
const $saveNoteButton = $(".save-note");
const $createNoteButton = $(".new-note");
const $listNote = $(".list-container .list-group");

var selectedNote = {};

var returnNote = function() {
  return $.ajax({
    url: "/api/notes",
    method: "GET"
  });
};

var saveNote = function(note) {
  return $.ajax({
    url: "/api/notes",
    data: note,
    method: "POST"
  });
};

var deleteNote = function(id) {
  return $.ajax({
    url: "api/notes/" + id,
    method: "DELETE"
  });
};

var renderSelectedNote = function() {
  $saveNoteButton.hide();

  if (selectedNote.id) {
    $titleNote.attr("readonly", true);
    $textNote.attr("readonly", true);
    $titleNote.val(selectedNote.title);
    $textNote.val(selectedNote.text);
  } else {
    $titleNote.attr("readonly", false);
    $textNote.attr("readonly", false);
    $titleNote.val("");
    $textNote.val("");
  }
};

var handleNoteSave = function() {
  var newNote = {
    title: $titleNote.val(),
    text: $textNote.val()
  };

  saveNote(newNote).then(function(data) {
    getDisplayNotes();
    renderSelectedNote();
  });
};

var handleNoteDelete = function(event) {
  event.stopPropagation();

  var note = $(this)
    .parent(".list-group-item")
    .data();

  if (selectedNote.id === note.id) {
    selectedNote = {};
  }

  deleteNote(note.id).then(function() {
    getDisplayNotes();
    renderSelectedNote();
  });
};

var handleNoteView = function() {
  selectedNote = $(this).data();
  renderSelectedNote();
};

var handleNewNoteView = function() {
  selectedNote = {};
  renderSelectedNote();
};

var handleRenderSaveBtn = function() {
  if (!$titleNote.val().trim() || !$textNote.val().trim()) {
    $saveNoteButton.hide();
  } else {
    $saveNoteButton.show();
  }
};

var renderListNote = function(notes) {
  $listNote.empty();

  var listNoteItems = [];

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var $li = $("<li class='list-group-item'>").data(note);
    var $span = $("<span>").text(note.title);
    var $delBtn = $(
      "<i class='fas fa-trash-alt float-right text-danger delete-note'>"
    );

    $li.append($span, $delBtn);
    listNoteItems.push($li);
  }

  $listNote.append(listNoteItems);
};

var getDisplayNotes = function() {
  return returnNote().then(function(data) {
    renderListNote(data);
  });
};

$saveNoteButton.on("click", handleNoteSave);
$listNote.on("click", ".list-group-item", handleNoteView);
$createNoteButton.on("click", handleNewNoteView);
$listNote.on("click", ".delete-note", handleNoteDelete);
$titleNote.on("keyup", handleRenderSaveBtn);
$textNote.on("keyup", handleRenderSaveBtn);

getDisplayNotes();