// popover modal
 const button = document.createElement('div');
 button.style.float = 'right';
 button.style.margin = '0px';
 button.style.padding = '0px';
 button.style.cursor = 'pointer';
 button.style.zIndex = '9999';
//  button.style.top = '-300px';
button.style.top = "-285px";
button.style.left= "-15px";
button.style.position= "relative";
button.setAttribute('id', 'firstModalBtn');

 const btnImage = document.createElement('img');
 btnImage.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20W.png?alt=media&token=8a571dcc-e3c1-4796-bd2f-f6593c991a84");
 btnImage.style.width ="30px";

 
 

 function showFirstModal() {

     // Create the modal
     const modal = document.createElement('div');
     modal.className = 'modal';
     modal.setAttribute('id', 'firstModal');
     modal.innerHTML = `

         <div class="modal-content">

             <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                 <div>
                     <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM-B-200x200.png?alt=media&token=0ff103b8-a4f2-46c4-b941-4d2c339cd8d9" 
                         style="width: 80px;" 
                     />
                     <h6 class="heading">NOTES</h6>
                 </div>
                 <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20B.png?alt=media&token=1a71c15c-1aed-44e3-85bd-e85c4174cc75" 
                     style="width: 30px; margin-top: 20px;" 
                 />
                 <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20X.png?alt=media&token=81b70d07-f814-4d45-b1d8-722b9f9f1380" 
                     style="width: 13px; margin-top: 20px;" 
                     class="close"
                 />
             </div>

             <div style="clear: both; margin: 12px 5px 0px 5px;"> 

                 <div class="table-container">
                     <table>
                         <thead>
                             <tr>
                                 <th style="width: 13%;">DATE</th>
                                 <th style="width: 15%;">TITLE</th>
                                 <th style="width: 17%;">LINK</th>
                                 <th style="width: 20%;">MEETING SUBJECT</th>
                                 <th style="width: 22%;">NOTES</th>
                                 <th>
                                     <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20%2B.png?alt=media&token=e87729a3-f8e3-4540-ac1d-55302b916272"
                                         style="width: 15px;" id="newDataBtn" class="newDataBtn"
                                     />
                                 </th>
                             </tr>
                         </thead>

                         <tbody id="meetingData">
                             
                         </tbody>

                     </table>
                 </div>
             </div>
         </div>
     `;
     
    
     // Show the modal
     modal.style.display = 'none';

     const closeButton = modal.querySelector('.close');
     closeButton.addEventListener('click', function() {
         modal.style.display = 'none';
     });

     // Close the modal when the user clicks outside of it
     window.addEventListener('click', function(event) {
         if (event.target === modal) {
             modal.style.display = 'none';
         }
     });

      // Append the modal to the container
     document.body.appendChild(modal);
    
 }

 showFirstModal();
 

 function addCreateButton(tbody){

     var row = `
         <tr>
             <td colspan="6" style="text-align: center; border:none;">
                 <div style="display: inline-block; padding: 10px; cursor: pointer; " id="newDataBtn">
                     <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20%2B.png?alt=media&token=2fc0f662-ca0b-4c75-b482-1ef61314c0d9" 
                         alt="addIcon"
                         style="width: 47px; padding:20px 15px 15px 15px;"
                     />
                     <p style="text-transform: uppercase;letter-spacing: 1.5px;font-size: 11px;">CREATE A NOTE</p>
                 </div>
             </td>
         </tr>
     `;

     tbody.append(row);

 }
 
 function loadTable(){
     $.ajax({
         url: "https://backend.zimomeet.com/api/get-meeting-notes",
         type: "GET",
         headers: {
             "api-key": "786ZM786"
         },
         success: function(response){
             console.log(response);
             var tbody = $('#meetingData');
             tbody.empty();
             
             if(response.error == true){
                 addCreateButton(tbody);
             }
             else if(response.error == false){
                 response.meeting_notes.forEach(function(meeting_note){
                     
                     let meeting_url = meeting_note.meeting_link;
                     let arrayString = meeting_url.split("/");
                     let meetingRoomName = arrayString.pop();

                     var row = `
                         <tr>
                             <td>
                                 <div>
                                     <p class="date">${meeting_note.day}</p>
                                     <p class="date">${meeting_note.date}</p>
                                     <p class="date">${meeting_note.time}</p>
                                 </div>
                             </td>

                             <td>${meeting_note.title}</td>
                             <td>

                                <a href="${meeting_note.meeting_link}" target="_blank" style="text-decoration:none; text-transform:capitalize;">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZIMO%20MEET.png?alt=media&token=5d68415d-17b6-40e0-805a-338590ec4ae4"
                                        alt="CAM_ICON"
                                        class="camIcon"
                                        style="display: inline-block; color:black;"
                                    />
                                    <p style="display: inline-block; vertical-align: super; color:black;">
                                        ${meetingRoomName}
                                    </p>
                                </a>
                                
                             </td>
                             <td>${meeting_note.meeting_subject}</td>
                             <td class="notes">${meeting_note.notes}</td>

                             <td>
                                 <div style="display: flex; flex-direction: column; align-items: flex-end;">
                                     <p style="color: #545353;">${meeting_note.creator_name}</p>
                                     <div class="actionBtn">                                
                                         <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20Edit.png?alt=media&token=ed97f302-c446-4ef2-8dfe-0d474cfbe7ce" 
                                             alt="Edit" 
                                             data-id="${meeting_note.id}" 
                                             class="editBtn"
                                         />
                                         <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Delete.svg?alt=media&token=40c37524-a071-4948-99d9-6b0e04ef4f6a" 
                                             alt="Delete" 
                                             data-id="${meeting_note.id}" 
                                             class="delBtn"
                                         />
                                     </div>
                                 </div>
                         </td>

                         </tr>
                     `;

                     tbody.append(row);

                     if (response.meeting_notes.length == 1) {
                         addCreateButton(tbody);
                     }
                 });

             }

         },
         error: function(xhr, status, error){
             console.error(error);
         }

     });
 }


 

$(document).on('click', '#firstModalBtn', function(event){
    event.preventDefault();
    console.log('Modal Open');

    const firstModal = document.getElementById('firstModal');
    firstModal.style.display = "block";
    
    loadTable();  
});


// Get the largeVideoContainer div
const container = document.getElementById('largeVideoContainer');

button.appendChild(btnImage);

container.appendChild(button);


 // save data
 function showSaveDataModal() {

     const container = document.getElementById('largeVideoContainer');

     // Create the modal
     const modal = document.createElement('div');
     modal.className = 'modal';
     modal.setAttribute('id', 'newDataModal');
     modal.style.display = 'none';
     modal.style.zIndex = "9999"

     modal.innerHTML = `

         <div class="new-modal-content">
             <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                 <div style="display: flex; align-items: center;">
                     <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM-B-200x200.png?alt=media&token=dc458912-71ba-4806-a9cb-1072041c7942" 
                         style="width: 60px;" 
                     />
                     <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20B.png?alt=media&token=5fb239ec-80b6-48fa-ac7a-791e7de82601" 
                         style="width: 25px; margin-left: 20px;" 
                     />
                 </div>

                 <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20%2B.png?alt=media&token=598d4421-7999-42de-8f73-38961161f319" 
                     class=""
                     style="width: 18px; margin-top: 22px;" 
                 />
                 <div style="display: flex; align-items: baseline;">
                     <button id="topSaveBtn" class="topSaveBtn" type="button">SAVE</button>
                     <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20X.png?alt=media&token=fafaedde-2699-48cd-bc65-19460a0ad2c6" 
                         style="width: 12px; margin-top: 10px; margin-left:15px;" 
                         class="newDataModalClose"
                     />
                 </div>
             </div>

             <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                 <div style="display: flex; flex-direction: column;">
                     <p class="addModalDate" id="dayDisplay"></p>
                     <p class="addModalDate" id="date"></p>
                     <p class="addModalDate"  id="time"></p>
                 </div>

                 <div style="display: flex; align-items: center;">
                     <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZIMO%20MEET.png?alt=media&amp;token=7425f0b8-b4c9-4244-ba0d-1dfccc164154" 
                         alt="CAM_ICON" 
                         class="camIcon"/>
                     <p class="createModalLink" id="meetingLink" style="color:black;"></p>

                 </div>
             </div>
           
             <div style="clear:both; margin-top: 15px;">
                 <div class="createModalContainer">

                     <div style="display:flex; align-items: flex-start;">
                         <label for="creator_name"> NAME:</label>
                         <input type="text"  class="inputField" id="creator_name" name="creator_name" placeholder="NAME" required>
                     </div>

                     <div style="display:flex; align-items: flex-start; margin-top: 20px;">
                         <label for="title" >TITLE:</label>
                         <input type="text"  class="inputField" id="title" name="title"  placeholder="TITLE" required>
                     </div>

                     <div style="display:flex; align-items: flex-start; margin-top: 20px;">
                         <label for="meetingSubject" >MEETING SUBJECT:</label>
                         <input type="text"  class="inputField" id="meeting_subject" name="meeting_subject"  placeholder="MEETING SUBJECT" required>
                     </div>

                     <div style="display:flex; align-items: flex-start; margin-top: 20px;">

                         <label for="notes">NOTES:</label>                        
                         <input type=text id="notes" class="inputField" name="notes"  placeholder="NOTES..." style="border:none;" required>
                     </div>
                     <div class="notes-container">
                         <label for="notesContainer"></label>                        
                         <div type=text id="notesContainer" name="notesContainer"></div>
                     </div>

                 </div>
                 <button id="submit" class="submit" type="button">SAVE</button>

             </div>
         </div>
     `;

     document.body.appendChild(modal);

     const dayDisplay = document.getElementById('dayDisplay');
     const dateField = document.getElementById('date');
     const timeField = document.getElementById('time');

     const today = new Date();
     const dayOptions = { weekday: 'long' };
     const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
     const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

     dayDisplay.textContent = today.toLocaleDateString('en-US', dayOptions);
     dateField.textContent = today.toLocaleDateString('en-US', dateOptions);
     timeField.textContent = today.toLocaleTimeString('en-US', timeOptions);

     const inputField = document.getElementById('notes');
     const notesContainer = document.getElementById('notesContainer');
     let noteBullets = 1;
     
     const createModalContainer = document.querySelector('.createModalContainer');
     const saveButton = document.getElementById('submit');
     const topSaveButton = document.getElementById('topSaveBtn');


     inputField.addEventListener('keydown', function(event){
         if(event.key === 'Enter'){
             console.log(document.getElementById('notes').value)
             event.preventDefault();
             const text = inputField.value.trim();
             if(text){
                 const note = document.createElement('p');
                 note.classList.add('notePoints')
                 note.innerHTML = `<span class="bullets">${noteBullets}.</span>${text}`;
                 notesContainer.appendChild(note);
                 inputField.value = '';  
                 noteBullets++;              
             }
         }

         // Function to check if scrollbar is visible
         function isScrollbarVisible() {
             return createModalContainer.scrollHeight > createModalContainer.clientHeight;
         }

         if (isScrollbarVisible()){
             saveButton.style.display = "none";
             topSaveButton.style.display = "block";
             topSaveButton.setAttribute('id', 'submit');
         }

     });

     const meetingLinkField = document.getElementById('meetingLink');
     meetingLinkField.textContent = "";
     meetingLinkField.textContent = window.location.href;

     // Add event listener to close the modal
     const closeButton = modal.querySelector('.newDataModalClose');
     closeButton.addEventListener('click', function() {
         modal.style.display = 'none';
     });

 }

 showSaveDataModal();


 $(document).on('click', '#newDataBtn', function(event){
    event.preventDefault();
    const newModal = document.getElementById('newDataModal');
    newModal.style.display = 'block';
});



// save data
$(document).on('click', '#submit', function(event){
    event.preventDefault();
    console.log('Form submitted');

    var date = document.getElementById("date").textContent;
    var currentDay = document.getElementById("dayDisplay").textContent;
    var time = document.getElementById("time").textContent;
    var meetingLink = document.getElementById('meetingLink').textContent;
    var title = document.getElementById('title').value;
    var meeting_subject = document.getElementById('meeting_subject').value; 
    var creator_name = document.getElementById('creator_name').value;
    var notes = [];

    document.querySelectorAll('.notePoints').forEach(function(note){
        notes.push(note.textContent);
    });


    var isValid = true;
    var creatorNameInput = document.getElementById('creator_name');
    var titleInput = document.getElementById('title');
    var meetingSubjectInput = document.getElementById('meeting_subject');
    var notesInput = document.getElementById('notes');

    creatorNameInput.addEventListener('input', function() {
        if (creatorNameInput.value.trim()) {
            creatorNameInput.classList.remove('placeholder-red');
            creatorNameInput.placeholder = 'NAME';
        }
    });
    
    titleInput.addEventListener('input', function() {
        if (titleInput.value.trim()) {
            titleInput.classList.remove('placeholder-red');
            titleInput.placeholder = 'TITLE';
        }
    });
    
    meetingSubjectInput.addEventListener('input', function() {
        if (meetingSubjectInput.value.trim()) {
            meetingSubjectInput.classList.remove('placeholder-red');
            meetingSubjectInput.placeholder = 'MEETING SUBJECT';
        }
    });
    
    notesInput.addEventListener('input', function() {
        if (notesInput.value.trim()) {
            notesInput.classList.remove('placeholder-red');
            notesInput.placeholder = 'NOTES...';
        }
    });
    

   // Validate required fields
    if (!creator_name.trim()) {
        creatorNameInput.placeholder = 'NAME IS REQUIRED.';
        creatorNameInput.classList.add('placeholder-red');
        isValid = false;
    } 
    
    if (!title.trim()) {
        titleInput.placeholder = 'TITLE IS REQUIRED.';
        titleInput.classList.add('placeholder-red');  
        isValid = false;
    }

    if (!meeting_subject.trim()) {
        meetingSubjectInput.placeholder = 'MEETING SUBJECT IS REQUIRED.';
        meetingSubjectInput.classList.add('placeholder-red');  
        isValid = false;

    }

    if (notes.length == 0) {
        notesInput.placeholder = 'NOTES ARE REQUIRED.';
        notesInput.classList.add('placeholder-red');  
        isValid = false;

    } 

    if(isValid){

        // console.log(date + " " + day + meetingLink + " " + pointName + " "+ pointDescription);
        $.ajax({
            url: 'https://backend.zimomeet.com/api/save-meeting-notes',
            type: 'POST',
            headers:{
                "api-key" : "786ZM786"
            },
            data: {
                date: date,
                day: currentDay,
                time: time,
                title: title,
                creator_name:creator_name,
                meetingLink: meetingLink,
                meeting_subject: meeting_subject,
                notes: notes.join('\n')
            },
            success: function(response){
                console.log(response);
            },
            error: function(xhr, status, error){
                console.error(error);
            },
            complete: function(){
                document.getElementById("title").value = '';
                document.getElementById("notes").value = '';
                document.getElementById("meeting_subject").value = '';
                document.getElementById("creator_name").value = '';
                document.getElementById("notesContainer").innerHTML = '';

                $('#newDataModal').css('display', 'none');

                loadTable();
            }
        });
    }
});

$(document).on('click', '.delBtn', function(event){
    event.preventDefault();

    var $row = $(this).closest('tr'); 

    var pointId = $(this).attr('data-id');

    $row.find('td, td p').css('color', '#900000');

    $.ajax({
        url: 'https://backend.zimomeet.com/api/delete-meeting-note/?id='+ pointId,
        type: 'GET',
        headers:{
            "api-key" : "786ZM786"
        },
        success: function(response){

        },
        error: function(xhr, status, error){
            console.error(error);
        },
        complete: function(){
            
            setTimeout(function(){
                $row.find('td, td p').css('color', '#707070');
        
                setTimeout(function(){
                    $row.remove();
                }, 1000); 
            }, 1000); 
            loadTable();
        }

    });
});
