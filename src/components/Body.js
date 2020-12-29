// import React, {useState} from 'react'
import Printer from '../templates/Printer'
import Scanner from '../templates/Scanner'

function AppBody(){
    return(
        <div className="AppBody">
            <div className="App-Body-Note-TextArea"> 
                <div className="App-Body-Template-Selector">
                    <select id="templateselector" onChange={renderYourText}>
                    <option>Select Template</option>
                    <option value="Printer">Printer</option>
                    <option value="Scanner">Scanner</option>
                    </select>
                </div>
                <div className="who_main_div">
                    <label>Who:</label>
                    <br></br>
                    <textarea className="an_ta_who" id="autonote_ta_who" onKeyPress={PreventDefault_Who}></textarea>
                </div>
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

const PreventDefault_Who = (e) => {
    console.log('Who Prevent Default')
    if(e.charCode === 13){
        e.preventDefault()
    }
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
  
const renderYourText = () => {
    var selected = document.getElementById('templateselector').value
    var note = document.getElementById('autonote_ta_note')
    console.log(selected)
    if(selected === "Printer"){
        note.value = Printer
        console.log()
    }

    if(selected === "Scanner"){
        note.value = Scanner
        console.log()
    }

    var ta = document.getElementById("autonote_ta_note")
    ta.style.height = "0px"
    ta.style.height = ((ta.scrollHeight + 50) + "px")
    console.log(ta.style.height)
    // Make textarea height equal scrollheight
}
  
const add_note = () => {
  
      // create base parent variables
      var parent = document.getElementById("note_list_holder");
      var whoNote = document.getElementById("autonote_ta_who").value;
      var notation = document.getElementById('autonote_ta_note').value;
      var notes = [];
  
      // Clear the textarea 
      document.getElementById('autonote_ta_note').value = ""
      document.getElementById('autonote_ta_who').value = ""
  
      
  
      // create elements 
      var note_container_list_main = document.createElement('div');
      note_container_list_main.classList.add('note_container_list_main');
      var note_container_div = document.createElement('div');
      var note_ul_div = document.createElement('ul');
      note_ul_div.classList.add('note_container_ul');
      var note_li = document.createElement('li');
      var topLine = document.createElement('span');
      var midLine = document.createElement('span');
      var bottomLine = document.createElement('span');
      var who_label = document.createElement('p');
      var who_text = document.createElement('p');
      var note_label = document.createElement('p');
      var note = document.createElement('p');
  
      var who_labelTextNode = document.createTextNode('Who: ');
      var who_textNode = document.createTextNode(whoNote);
      var note_labelTextNode = document.createTextNode('Note: ');
      var note_text = document.createTextNode(notation);
      var topL = document.createTextNode('======================');
      var midL = document.createTextNode('----------------------')
      var botL = document.createTextNode('======================');
  
      // push the notation text into an array
      notes.push(note);
  
      // loop over each notation to create a note_container_div
      // complete with proper formatting and timestamp
      notes.forEach(function(note){
  
        // appending text to the elements
  
  
        if(whoNote){
          who_label.appendChild(who_labelTextNode);
          who_label.appendChild(who_textNode);
          midLine.appendChild(midL);
          note_label.appendChild(note_labelTextNode);
        }
        /*
        console.log(who_label);
        console.log(whoNote);
        console.log(note_label);
        console.log(note_labelTextNode) 
        */
  
        topLine.appendChild(topL);
        bottomLine.appendChild(botL);
        note.appendChild(who_label);
        note.appendChild(who_text);
        note.appendChild(midLine);
        note.appendChild(note_label);
        note.appendChild(note_text);
  
        // adding classes to elements
        note.classList.add('notation');
        note_container_div.classList.add('note_container');
  
        // appending elements to parent element note_container_div
        note_container_div.appendChild(topLine);
        note_container_div.appendChild(note);
        note_container_div.appendChild(bottomLine);
  
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
      document.getElementById('autonote_ta_who').focus();
      
  }

export default AppBody