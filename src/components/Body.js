// import React, {useState} from 'react'
import AppPreventDefault from '../Utilities/AppPreventDefault'
import Printer from '../templates/Printer'
import Scanner from '../templates/Scanner'
import PricingCalls from '../templates/PricingCalls'
import Robot from '../templates/Robot'
import React from 'react';
import ReactDOM from 'react-dom';

const AppBody = () => {
    return(
        <div className="AppBody">
            <div className="App-Body-Note-TextArea"> 
                <div className="App-Body-Template-Selector">
                    <select id="templateselector" onChange={renderYourText}>
                    <option>Select Template</option>
                    <option value="Printer">Printer</option>
                    <option value="Scanner">Scanner</option>
                    <option value="Robot">Robot</option>
                    <option value="Pricing Calls">Pricing Calls</option>
                    </select>
                </div>
                <div className="who_main_div" id="who_main_div">
                    <label>Who:</label>
                    <textarea className="an_ta_who" class="thin_ta" id="autonote_ta_who" onKeyPress={AppPreventDefault}></textarea>
                </div>
                <div className="note_main_div">
                    <label>Note:</label>
                    <textarea onChange={updateNoteTA} className="an_ta_note" id="autonote_ta_note" onKeyPress={PreventDefault_Note}></textarea>
                </div>
                {/* <div className="note_container_list_main"> */}
                <div className="note_list_container">
                    <ul id="note_list_holder">
                    </ul>
                </div>
                {/* </div>  */}
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

const updateNoteTA = () => {
    var ta = document.getElementById("autonote_ta_note")
    let numberOfLineBreaks = (ta.value.match(/\r\n/g) || []).length;
    ta.style.height = "0px"
    ta.style.height = ((10 + ta.scrollHeight + numberOfLineBreaks * 20 + 12 + 2) + "px")
}
  
const renderYourText = (e) => {
    var selected = document.getElementById('templateselector')
    var note = document.getElementById('autonote_ta_note')

    const resetSelection = (selected) => {
        selected.selectedIndex = 0
    }

    if(selected.value === "Printer"){
        InsertExtraPrinterElements()
        console.log(selected)
        resetSelection(selected)
        updateNoteTA()
    }

    if(selected.value === "Scanner"){
        RemoveExtraElements()
        InsertExtraScannerElements()
        console.log(selected)
        resetSelection(selected)
        updateNoteTA()
    }

    if(selected.value === "Robot"){
        RemoveExtraElements()
        InsertExtraRobotElements()
        console.log(selected)
        resetSelection(selected)
        updateNoteTA()
    }

    if(selected.value === "Pricing Calls"){
        // add text to textarea
        note.value = PricingCalls
        // press enter
        
        // log selected
        console.log(selected)
        // resetSelection
        resetSelection(selected)

        var value = note.value

        add_note(value)

        updateNoteTA()
    }
}

const InsertExtraPrinterElements = () => {
    const printerElement = <Printer/>
    ReactDOM.render(printerElement, document.getElementById('who_main_div'));
}

const InsertExtraScannerElements = () => {
    const printerElement = <Scanner/>
    ReactDOM.render(printerElement, document.getElementById('who_main_div'));
}

const InsertExtraRobotElements = () => {
    const printerElement = <Robot/>
    ReactDOM.render(printerElement, document.getElementById('who_main_div'));
}

const RemoveExtraElements = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('who_main_div'));
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
      //var note_container_list_main = document.createElement('div');
      //note_container_list_main.classList.add('note_container_list_main');
      var note_container_div = document.createElement('div');
      // var note_ul_div = document.createElement('ul');
      // note_ul_div.classList.add('note_list_container');
      var note_li = document.createElement('li');
      note_li.classList.add('an_note_list_ul_li')
      var topLine = document.createElement('span');
      topLine.classList.add('an_note_container_topLine')
      var midLine = document.createElement('span');
      midLine.classList.add('an_note_container_midLine')
      var bottomLine = document.createElement('span');
      bottomLine.classList.add('an_note_container_bottomLine')
      var who_label = document.createElement('p');
      who_label.classList.add('an_note_container_who_label')
      var who_text = document.createElement('p');
      who_text.classList.add('an_note_container_who_text')
      var note_label = document.createElement('p');
      note_label.classList.add('an_note_container_note_label')
      var note = document.createElement('p');
      note.classList.add('an_note_container_note')
  
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
  
        topLine.appendChild(topL);
        bottomLine.appendChild(botL);
        note.appendChild(who_label);
        note.appendChild(who_text);
        note.appendChild(midLine);
        note.appendChild(note_label);
        note.appendChild(note_text);
  
        // adding classes to elements
        note_container_div.classList.add('note_container_div');
  
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