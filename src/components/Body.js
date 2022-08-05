// import React, {useState} from 'react'
import React from 'react'

function AppBody(){
    return(
        <div className="AppBody">
            <div className="App-Body-Note-TextArea"> 
                <br></br>
                <div className="note_main_div">
                    <label>Note:</label>
                    <br></br>
                    <textarea className="an_ta_note" id="autonote_ta_note" onKeyPress={PreventDefault_Note}></textarea>
                </div>{ 
                <div className="note_container_list_main">
                <div className="note_container_ul">
                    <ul id="note_list_holder">
                    </ul>
                </div>
                </div> }
            </div>
        </div>
    )
}

// function for adding note by pressing enter 
const PreventDefault_Note = (e) => {
    console.log('Note Prevent Default')
    console.log(e)
    if(e.charCode === 13 && !e.shiftKey) {
        e.preventDefault()
        add_note();
    }
}
  
const add_note = () => {
  
      // create base parent variables
      var parent = document.getElementById("note_list_holder");
      var notation = document.getElementById('autonote_ta_note').value;
      var notes = [];
  
      // Clear the textarea 
      document.getElementById('autonote_ta_note').value = ""
  
      // create elements 
      var note_container_list_main = document.createElement('div');
      note_container_list_main.classList.add('note_container_list_main');
      var note_container_div = document.createElement('div');
      var note_ul_div = document.createElement('ul');
      note_ul_div.classList.add('note_container_ul');
      var note_li = document.createElement('li');
      var note = document.createElement('p');
      var note_text = document.createTextNode(notation);
  
      // push the notation text into an array
      notes.push(note);
  
      // loop over each notation to create a note_container_div
      // complete with proper formatting and timestamp
      notes.forEach(function(note){

        note.appendChild(note_text);
  
        // adding classes to elements
        note.classList.add('notation');
        note_container_div.classList.add('note_container');
  
        // appending elements to parent element note_container_div
        note_container_div.appendChild(note);
  
        // appending note_container_div to note_li
        note_li.appendChild(note_container_div);
  
        // inserting note_li into parent list at the top
        parent.insertBefore(note_li, parent.childNodes[0]);
  
        // log the note_container_div text to be copied to ensure proper formatting
        console.log(note_container_div.innerText);
  
     });
  
      // create variable that holds the entire note_container_div text
      const note_container_text = note_container_div.innerText
      
      // Copy the div to clipboard
      function listener(e) {
        e.clipboardData.setData("text/plain", note_container_text);
        e.preventDefault();
      } 
      document.addEventListener("copy", listener);
      document.execCommand("copy");
      document.removeEventListener("copy", listener);
  
      // focus on who
      document.getElementById('autonote_ta_note').focus();
      
  }

export default AppBody