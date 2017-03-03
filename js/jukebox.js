const parseNote = function(note) {
  let obj = {};
  if (note.length > 2) {
    let noteArray = note.split('*');
    obj.pitch = noteArray[0];
    obj.beats = noteArray[1];
  } else {
    obj.pitch = note;
    obj.beats = 1;
  }
  return obj;
};

const parseSong = function(notes) {
  let noteArray = notes.trim().split(' ');
  let output = [];
  for (let note in noteArray) {
    output.push(parseNote(noteArray[note]));
  }
  return output;
};

// First we need to be able to parse individual notes. Write a function called parseNote, that takes a string representing a single note (e.g. "C#*2" or "A") and returns a note object (e.g. {pitch: "C#", beats: 2}). If the user doesn't provide a number of beats (e.g. "C#") then set beats to 1.
//
// // Example usage
// console.log(parseNote("C#*2")); //=> { pitch: 'C#', beats: 2}
// console.log(parseNote("D")); //=> { pitch: 'D', beats: 1}

// Now let's parse a whole song string. Write a function called parse Song that takes a song string as above, and returns an array of note objects. The parseSong function should use the parseNote function.
//
// // Example usage
// console.log(parseSong("Ab B")); // =>; [{pitch: 'Ab', beats: 1}, {pitch: 'B', beats: 1}]
