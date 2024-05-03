// popover modal button
const button = document.createElement('div');
button.style.float = 'right';
button.style.margin = '0px';
button.style.padding = '0px';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button.style.top = "-285px";
button.style.left= "-15px";
button.style.position= "relative";
button.setAttribute('id', 'firstModalBtn');

const btnImage = document.createElement('img');
btnImage.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20W.png?alt=media&token=8a571dcc-e3c1-4796-bd2f-f6593c991a84");
btnImage.style.width ="30px";

 
 
// first modal
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

// add button
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
 
//  function for table
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
                    
                    let meetingRoomName;
                    let meeting_url = meeting_note.meeting_link;
                    if(meeting_url){
                        let arrayString = meeting_url.split("/");
                        meetingRoomName = arrayString.pop();
                    }
                    var row = `
                        <tr>
                            <td>
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    <p class="date">${meeting_note.day}</p>
                                    <p class="date">${meeting_note.date}</p>
                                    <p class="date">${meeting_note.time}</p>
                                </div>
                            </td>

                            <td>
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}"> 
                                    ${meeting_note.title} 
                                </div>
                            </td>
                            
                            <td>
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    
                                    <!-- <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZIMO%20MEET.png?alt=media&token=5d68415d-17b6-40e0-805a-338590ec4ae4"
                                        alt="CAM_ICON"
                                        class="camIcon"
                                        style="display: inline-block; color:black;"
                                    /> -->
                                    <svg id="meetingCamIcon" 
                                        alt="CAM_ICON"
                                        class="camIcon"
                                        style="display: inline-block;"
                                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.39 75.45">
                                      <path d="M164.95,3.46l-17.18,12.55-11.64,8.51v26.53l12.53,9.14,16.29,11.88c2.07,1.55,4.44,2.07,4.44-2.2V5.66c0-3.75-1.94-4.27-4.44-2.2Z"/>
                                      <path d="M.48,26.31H16.72L.22,49.36c-.15,.21-.22,.43-.22,.66v.68H19.07v-1.56H2.49L18.96,26.15c.17-.24,.26-.49,.26-.75v-.64H.48v1.56Z"/>
                                      <rect x="25.56" y="24.75" width="1.89" height="25.95"/>
                                      <path d="M48.25,43.15l-10.47-18.04c-.1-.16-.2-.26-.3-.29-.1-.04-.24-.06-.41-.06h-1.28v25.95h1.63V28.59c0-.33-.02-.67-.05-1.03l10.49,18.15c.18,.32,.43,.48,.73,.48h.13v-1.98c-.13-.37-.28-.73-.46-1.06Z"/>
                                      <path d="M134.38,23.68l12.38-9.05C144.11,6.11,136.13-.04,126.78,0H52.52C50.41,0,48.71,1.7,48.71,3.76V44.21s.01,.03,.02,.04c.07-.2,.15-.39,.23-.58,.08-.19,.17-.37,.27-.54l10.2-18.03c.1-.16,.2-.26,.29-.29,.1-.04,.23-.06,.4-.06h1.3v25.95h-1.65V28.59c0-.32,.02-.65,.06-1.01l-10.21,18.14c-.17,.32-.42,.48-.73,.48h-.16v8.52c.05,11.52,9.45,20.79,20.93,20.75h74.26c2.11,0,3.81-1.7,3.81-3.76v-10.07l-13.33-9.72V23.68Zm-66.59,43.31h-.52v-6.92c0-.1,0-.2,.02-.32l-3.2,5.68c-.05,.1-.13,.15-.23,.15h-.09c-.1,0-.17-.05-.23-.15l-3.28-5.68c.01,.11,.02,.22,.02,.32v6.92h-.51v-8.12h.4c.05,0,.1,0,.13,.02,.03,.01,.06,.04,.09,.09l3.28,5.65c.06,.11,.11,.22,.15,.34,.02-.06,.05-.12,.07-.18,.03-.06,.05-.12,.08-.17l3.19-5.64s.06-.08,.09-.09c.03-.01,.07-.02,.13-.02h.41v8.12Zm9.57-7.63h-4.28v3.28h3.56v.48h-3.56v3.39h4.28v.49h-4.87v-8.12h4.87v.49Zm9.08,0h-4.27v3.28h3.56v.48h-3.56v3.39h4.27v.49h-4.87v-8.12h4.87v.49Zm9.51,.01h-2.85v7.62h-.59v-7.62h-2.87v-.5h6.31v.5Zm0-13.07c-.31,2.16-1.49,3.84-3.65,4.25-1.31,.25-4.54,.15-4.54,.15h-13.73v-3.06s15.11,.03,15.11,0c1.56,0,2.66,.06,3.21-.94,.84-1.53-.39-3.02-.99-4.15-1.92-3.59-3.88-7.15-5.93-10.86-.76-1.39-1.61-3.41-3.31-3.41-1.12,0-2.08,1.15-2.57,2.02-3.8,6.85-11.46,20.4-11.46,20.4h-3.7s8.02-13.89,11.95-20.79c1.24-2.17,2.37-5.18,5.78-5.14,3.28,.05,4.51,2.99,5.83,5.28,1.6,2.78,3.4,5.98,4.99,8.74,.86,1.49,1.87,2.9,2.47,4.4,.3,.75,.47,1.61,.54,2.57v.54Zm32.62,24.7c-.07,.48-.33,.85-.81,.94-.29,.05-1.01,.03-1.01,.03h-3.05v-.68s3.35,0,3.35,0c.35,0,.59,.01,.71-.21,.19-.34-.09-.67-.22-.92-.43-.8-.86-1.59-1.32-2.41-.17-.31-.36-.76-.73-.76-.25,0-.46,.26-.57,.45-.84,1.52-2.54,4.53-2.54,4.53h-.82s1.78-3.08,2.65-4.61c.27-.48,.53-1.15,1.28-1.14,.73,.01,1,.66,1.29,1.17,.36,.62,.75,1.33,1.11,1.94,.19,.33,.41,.64,.55,.98,.07,.17,.1,.36,.12,.57v.12Zm1.84,.98c-.73-.01-1-.66-1.29-1.17-.36-.62-.75-1.33-1.11-1.94-.19-.33-.41-.64-.55-.98-.07-.17-.1-.36-.12-.57v-.12c.07-.48,.33-.85,.81-.94,.29-.05,1.01-.03,1.01-.03h3.05v.68s-3.35,0-3.35,0c-.35,0-.59-.01-.71,.21-.19,.34,.09,.67,.22,.92,.43,.8,.86,1.59,1.32,2.41,.17,.31,.36,.76,.73,.76,.25,0,.46-.26,.57-.45,.84-1.52,2.54-4.53,2.54-4.53h.82s-1.78,3.08-2.65,4.61c-.27,.48-.53,1.15-1.28,1.14Zm6.81-4.78c.07-.48,.33-.85,.81-.94,.29-.05,1.01-.03,1.01-.03h3.05v.68s-3.35,0-3.35,0c-.35,0-.59-.01-.71,.21-.19,.34,.09,.67,.22,.92,.43,.8,.86,1.59,1.32,2.41,.17,.31,.36,.76,.73,.76,.25,0,.46-.26,.57-.45,.84-1.52,2.54-4.53,2.54-4.53h.82s-1.78,3.08-2.65,4.61c-.27,.48-.53,1.15-1.28,1.14-.73-.01-1-.66-1.29-1.17-.36-.62-.75-1.33-1.11-1.94-.19-.33-.41-.64-.55-.98-.07-.17-.1-.36-.12-.57v-.12Zm-1.84-.98c.73,.01,1,.66,1.29,1.17,.36,.62,.75,1.33,1.11,1.94,.19,.33,.41,.64,.55,.98,.07,.17,.1,.36,.12,.57v.12c-.07,.48-.33,.85-.81,.94-.29,.05-1.01,.03-1.01,.03h-3.05v-.68s3.35,0,3.35,0c.35,0,.59,.01,.71-.21,.19-.34-.09-.67-.22-.92-.43-.8-.86-1.59-1.32-2.41-.17-.31-.36-.76-.73-.76-.25,0-.46,.26-.57,.45-.84,1.52-2.54,4.53-2.54,4.53h-.82s1.78-3.08,2.65-4.61c.27-.48,.53-1.15,1.28-1.14Z"/>
                                    </svg>
                                    
                                    <p class="meetingRoomText greyText">
                                        ${meetingRoomName}
                                    </p>
                                </div>
                            
                            </td>
                            <td>
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    ${meeting_note.meeting_subject}
                                </div>        
                            </td>
                            <td class="notes">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    ${meeting_note.notes}
                                </div>
                            </td>

                            <td>
                                <div style="display: flex; flex-direction: column; align-items: flex-end;">
                                    <p class="creatorNameText greyText">
                                        ${meeting_note.creator_name}
                                    </p>
                                    <div class="actionBtn">                                
                                        <svg id="editIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48.82 74.5" 
                                            width="24" height="24" 
                                            class="editBtn" data-id="${meeting_note.id}">
                                            <path d="M45.95,3.65l-4.99-2.88c-2.75-1.59-6.27-.64-7.86,2.11l-5.75,9.96,14.94,8.63,5.75-9.96c1.59-2.75,.65-6.26-2.09-7.85Z"/>
                                            <polygon points="0 60.21 1.72 74.5 14.94 68.84 40.85 23.97 25.91 15.34 0 60.21"/>
                                        </svg>
                                        <svg id="deleteIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.69 72.16" 
                                            width="24" height="24" 
                                            class="delBtn">
                                            <defs>
                                                <style>
                                                    .cls-1 {
                                                        fill-rule: #900000;
                                                    }
                                                </style>
                                            </defs>
                                            <path id="bin" class="cls-1" d="M4.72,66.43c.61,2.94,2.95,5.21,5.91,5.73H46.07c2.96-.52,5.3-2.79,5.91-5.73V20.61H4.72v45.81ZM56.69,7.55h-12.6L37.79,0H18.87l-6.27,7.55H0v7.55H56.69V7.55Z"/>
                                        </svg>
                                    </div>
                                    <p style="display:none; color: black; font-size: 8px; cursor: pointer; font-weight: 600;letter-spacing: 0.7px;" id="permanentDelBtn" data-id="${meeting_note.id}">
                                        DELETE
                                    </p>
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
 
// listener for opening first modal
$(document).on('click', '#firstModalBtn', function(event){
    event.preventDefault();
    console.log('Modal Open');

    const firstModal = document.getElementById('firstModal');
    firstModal.style.display = "block";
    
    loadTable();  
});


// Get the largeVideoContainer div from zimo meet live
const container = document.getElementById('largeVideoContainer');

button.appendChild(btnImage);

container.appendChild(button);



// details data
function showDetailsDataModal() {

    const container = document.getElementById('largeVideoContainer');

    // Create the modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'detailsDataModal');
    modal.style.display = 'none';
    modal.style.zIndex = "9999"

    modal.innerHTML = `

        <div class="modal-content" style="padding-top: 5px;">
            <div style=" display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex; align-items: center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM-B-200x200.png?alt=media&token=dc458912-71ba-4806-a9cb-1072041c7942" 
                        style="width: 102px;" 
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20B.png?alt=media&token=5fb239ec-80b6-48fa-ac7a-791e7de82601" 
                        style="width: 42px; margin-left: 20px;" 
                    />
                </div>

                <h6 id="detailsTitle" class="detailsHeading"></h6> 

                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20X.png?alt=media&token=fafaedde-2699-48cd-bc65-19460a0ad2c6"  
                        class="detailsDataModalClose"
                    />
                    <div style="display: flex; flex-direction: column; align-items: flex-end; margin-top: 25px; margin-right: 10px;">
                        <p class="detailsModalDate" id="detailsDay"></p>
                        <p class="detailsModalDate" id="detailsDate"></p>
                        <p class="detailsModalDate" id="detailsTime"></p>
                    </div>
                </div>
            </div>
            <div>

                <div style="display: flex; flex-direction: column;">
                    <h6 class="detailsHeading">NOTES</h6>
                    <h6 class="detailsCreator" id="detailsCreator"></h6>
                </div>
            </div>

            <div style="padding: 5px 0px 10px 10px;">
                
                <div id="copyDetailsMeetingLink" style="display: flex; align-items: center; margin: 15px 0px; cursor: pointer;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZIMO%20MEET.png?alt=media&amp;token=7425f0b8-b4c9-4244-ba0d-1dfccc164154" 
                        alt="CAM_ICON" 
                        class="camIcon"
                    />
                    <p class="detailsModalMeetingLink" id="detailsMeetingLink"></p>

                </div>
                
                <p class="detailsSubject" id="details_meeting_subject"></p>
                
                <div id="detailsNotesContainer" style="display: flex; flex-direction: column; height: 140px; overflow-y: auto; position: relative;">
                    <div style="flex: 1; overflow-y: auto;" class="detailsNotesContainer" id="details-notes-container">
                    </div> 
                </div>
                <div style="position: absolute; bottom: 25px; right: 25px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20ZiDoc%20Download%20PDF.png?alt=media&token=9563e0b8-6255-491b-ab02-b0d25a58a80b" 
                        alt="zimoDoc-icon"
                        style="width: 50px; float: right; cursor:pointer;"
                        id="downloadPdfBtn"
                    />
                </div>
            
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add event listener to close the modal
    const closeButton = modal.querySelector('.detailsDataModalClose');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';

        document.getElementById("details-notes-container").innerHTML = " ";


    });

        document.getElementById('copyDetailsMeetingLink').addEventListener('click', function (){
            var meetingLink = document.getElementById('detailsMeetingLink');
            var copiedText = meetingLink.innerText || meetingLink.textContent;
            
            navigator.clipboard.writeText(copiedText).catch(() => {
                console.error('Failed to copy URL');
            });
        });


}

showDetailsDataModal();

// deatils Modal Btn
$(document).on('click', '#detailsModalBtn', function(event){
    event.preventDefault();
    
    document.getElementById('newDataModal').style.display = 'none';
    document.getElementById('detailsDataModal').style.display = 'block';

    var meetingNoteId = $(this).data('meeting-note-id');

       
    $.ajax({
        url: 'https://backend.zimomeet.com/api/get-meeting-note?id='+meetingNoteId,
        type: 'GET',
        headers: {
            "api-key": "786ZM786"
        },
        success: function(response){
            console.log(response);

            document.getElementById("detailsTitle").textContent = response.meeting_note.title;
            document.getElementById("detailsCreator").textContent = response.meeting_note.creator_name;
            document.getElementById("details_meeting_subject").textContent = response.meeting_note.meeting_subject;
            document.getElementById("detailsDay").textContent = response.meeting_note.day;
            document.getElementById("detailsDate").textContent = response.meeting_note.date;
            document.getElementById("detailsTime").textContent = response.meeting_note.time;
            document.getElementById("detailsMeetingLink").textContent = response.meeting_note.meeting_link;

            // download pdf 
            document.getElementById("downloadPdfBtn").setAttribute('data-creator-name', response.meeting_note.creator_name);
            document.getElementById("downloadPdfBtn").setAttribute('data-meeting-id', response.meeting_note.meeting_id);
            document.getElementById("downloadPdfBtn").setAttribute('data-meeting-title', response.meeting_note.title);

            
            var deatilsNotesContainer = document.getElementById("details-notes-container");
            var notesArray = response.meeting_note.notes.split('\n');

            
            notesArray.forEach(function(note, index){
                var p = document.createElement('p');
                p.textContent = note.trim();
                p.classList.add('detailsNotes');

                deatilsNotesContainer.appendChild(p);
 
            });

            const inputField = document.getElementById('editNotes');
            const notesContainer = document.getElementById('edit-notes-container');
            let noteBullets;
            
            const editModalContainer = document.querySelector('.editModalContainer');
            const updateButton = document.getElementById('update');
            const topUpdateButton = document.getElementById('topUpdateBtn');

            var lastBulletNumber = 1;
            var lastNoteElement = deatilsNotesContainer.querySelector('.detailsNotes:last-child');
            
            if(lastNoteElement){
                var lastNoteContent = lastNoteElement.textContent;
                var match = lastNoteContent.match(/(\d+)\./);
                if(match){
                    lastBulletNumber = parseInt(match[1]); 
                }
            }
            noteBullets = lastBulletNumber + 1;

            inputField.addEventListener('keydown', function(event){
                if(event.key === 'Enter'){
                    console.log(document.getElementById('editNotes').value)
                    event.preventDefault();
                    const text = inputField.value.trim();
                    if(text){
                        const note = document.createElement('p');
                        note.classList.add('detailsNotes')
                        note.innerHTML = `<span class="bullets">${noteBullets}.</span>${text}`;
                        notesContainer.appendChild(note);
                        inputField.value = '';  
                        noteBullets++;              
                    }
                }

                // Function to check if scrollbar is visible
                function isScrollbarVisible() {
                    return editModalContainer.scrollHeight > editModalContainer.clientHeight;
                }

                if (isScrollbarVisible()){
                    updateButton.style.display = "none";
                    topUpdateButton.style.display = "block";
                    topUpdateButton.setAttribute('id', 'update');
                }

            });

        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });


});



// download pdf
$(document).on('click', '#downloadPdfBtn', function(event){

    creator_name = $(this).attr('data-creator-name');
    meeting_id = $(this).attr('data-meeting-id');
    meeting_title = $(this).attr('data-meeting-title');

    console.log(creator_name + " "+ meeting_id)
    $.ajax({
        url: "https://backend.zimomeet.com/api/download-pdf-notes?meeting_id="+ meeting_id + "&creator_name="+ creator_name,
        type: 'GET',
        headers:{
            "api-key" : "786ZM786"
        },
        xhrFields: {
            responseType: 'blob' 
        },
        success: function(response){
            console.log(response);
            // var blob = new Blob([response], { type: 'application/pdf' }); // Create a Blob object
            // var url = URL.createObjectURL(blob); // Create a URL for the Blob
            // window.open(url);
           var blob = new Blob([response], { type: 'application/pdf' });
            var url = URL.createObjectURL(blob);

            var a = document.createElement('a');
            a.href = url;
            a.download =  meeting_title + " Notes.pdf"; 
            document.body.appendChild(a);

            a.click();

            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);

        },
        error: function(xhr, status, error){
            console.error(error);
        },
        complete: function(){
          
        }
    });

});


// create data modal
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
                        style="width: 64px;" 
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20%2B%20(1).png?alt=media&token=bd894b14-9762-4457-aed1-db8f4933b706" 
                        style="width: 26px; margin-left: 15px;" 
                    />
                </div>

            
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

                <div id="copyMeetingLink" style="display: flex; align-items: center; cursor:pointer;">
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
                    
                        <div type=text id="notesContainer" name="notesContainer"></div>
                        <button id="submit" class="submit" type="button">SAVE</button>

                    </div>

                </div>
                <button id="submit" class="submitWithoutScroll" type="button">SAVE</button>


            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const notesInputField = document.getElementById('notes');
    const notesContainer = document.getElementById('notesContainer');
    let noteBullets = 1;
    
    const createModalContainer = document.querySelector('.createModalContainer');
    const saveButton = document.getElementById('submit');
    const topSaveButton = document.getElementById('topSaveBtn');


    notesInputField.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            const text = notesInputField.value.trim();
            if(text){
                const note = document.createElement('p');
                note.classList.add('notePoints')
                note.innerHTML = `<span class="bullets">${noteBullets}.</span>${text}`;
                notesContainer.appendChild(note);
                notesInputField.value = '';  
                noteBullets++;              
            }
        }

        // Function to check if scrollbar is visible
        function isScrollbarVisible() {
            return createModalContainer.scrollHeight > createModalContainer.clientHeight;
        }

        if (isScrollbarVisible()){
            document.querySelector('.submitWithoutScroll').style.display = "none";
            saveButton.style.display = "block";
            topSaveButton.style.display = "block";
            topSaveButton.setAttribute('id', 'submit');
        }

    });

  
    // Add event listener to close the modal
    const closeButton = modal.querySelector('.newDataModalClose');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        var creatorNameInput = document.getElementById('creator_name');
        creatorNameInput.classList.remove('placeholder-red');
        creatorNameInput.value = "";
        creatorNameInput.placeholder = 'NAME';

        var titleInput = document.getElementById('title');
        titleInput.classList.remove('placeholder-red');
        titleInput.value = "";
        titleInput.placeholder = 'TITLE';

        var meetingSubjectInput = document.getElementById('meeting_subject');
        meetingSubjectInput.classList.remove('placeholder-red');
        meetingSubjectInput.value = "";
        meetingSubjectInput.placeholder = 'MEETING SUBJECT';

        // var notesInput = document.getElementById('notes');
        notesInputField.classList.remove('placeholder-red');
        notesInputField.placeholder = 'NOTES...';

        notesContainer.innerHTML = "";
        
        noteBullets = 1;

    });

    // for copying meeting link in create modal
    document.getElementById('copyMeetingLink').addEventListener('click', function (){
        var meetingLink = document.getElementById('meetingLink');
        var copiedText = meetingLink.innerText || meetingLink.textContent;

        navigator.clipboard.writeText(copiedText).catch(() => {
            console.error('Failed to copy URL');
        });
    });

}





showSaveDataModal();

// new data Btn
$(document).on('click', '#newDataBtn', function(event){
    event.preventDefault();
    
    const newModal = document.getElementById('newDataModal');

    const dayDisplay = document.getElementById('dayDisplay');
    const dateField = document.getElementById('date');
    const timeField = document.getElementById('time');

    // fetch date, time & day
    const today = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

    dayDisplay.textContent = today.toLocaleDateString('en-US', dayOptions);
    dateField.textContent = today.toLocaleDateString('en-US', dateOptions);
    timeField.textContent = today.toLocaleTimeString('en-US', timeOptions);


    // fetch meeting link
    const meetingLinkField = document.getElementById('meetingLink');
    meetingLinkField.textContent = "";
    // meetingLinkField.textContent = window.location.href;
    meetingLinkField.textContent = "https://zimomeet.live/dev-test";

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


// edit modal
function showEditModal() {

    const container = document.getElementById('largeVideoContainer');

    // Create the modal
    const modal = document.createElement('div');
    modal.className = 'editModal modal';
    modal.setAttribute('id', 'editModal');
    modal.style.zIndex = "9999";
    modal.style.display = 'none';

    modal.innerHTML = `

        <div class="edit-modal-content">
            <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; align-items: center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM-B-200x200.png?alt=media&token=dc458912-71ba-4806-a9cb-1072041c7942" 
                        style="width: 64px;" 
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20%2B%20(1).png?alt=media&token=bd894b14-9762-4457-aed1-db8f4933b706" 
                        style="width: 26px; margin-left: 15px;" 
                    />
                </div>

                <div style="display: flex; align-items: baseline;">
                    <button id="topUpdateBtn" class="topUpdateBtn" type="button">UPDATE</button>
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20X.png?alt=media&token=fafaedde-2699-48cd-bc65-19460a0ad2c6" 
                        style="width: 12px; margin-top: 10px; margin-left:15px;" 
                        class="editClose"
                    />
                </div>
            </div>
           
            <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; flex-direction: column;">
                    <p class="addModalDate" id="editDay"></p>
                    <p class="addModalDate" id="editDate"></p>
                    <p class="addModalDate"  id="editTime"></p>
                </div>

                <div id="copyEditMeetingLink" style="display: flex; align-items: center; cursor: pointer;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZIMO%20MEET.png?alt=media&amp;token=7425f0b8-b4c9-4244-ba0d-1dfccc164154" 
                        alt="CAM_ICON" 
                        class="camIcon"/>
                    <p class="createModalLink" id="editMeetingLink" name="editMeetingLink"></p>

                </div>
            </div>

            <input type="hidden" id="pointId" name="pointId">

            <div style="clear:both; margin-top: 15px;">
                <div class="editModalContainer">

                    <div style="display:flex; align-items: flex-start;">
                        <label for="edit_creator_name"> NAME:</label>
                        <input type="text"  class="inputField" id="edit_creator_name" name="edit_creator_name" placeholder="NAME">
                    </div>

                    <div style="display:flex; align-items: flex-start; margin-top: 20px;">
                        <label for="editTitle" >TITLE:</label>
                        <input type="text"  class="inputField" id="editTitle" name="editTitle"  placeholder="TITLE">
                    </div>

                    <div style="display:flex; align-items: flex-start; margin-top: 20px;">
                        <label for="editMeetingSubject" >MEETING SUBJECT:</label>
                        <input type="text"  class="inputField" id="edit_meeting_subject" name="edit_meeting_subject"  placeholder="MEETING SUBJECT">
                    </div>

                    <div style="display:flex; align-items: flex-start; margin-top: 20px;">

                        <label for="editNotes">NOTES:</label>                        
                        <input type=text id="editNotes" class="inputField" name="neditNotes"  placeholder="NOTES..." style="border:none;">
                    </div>
                    <div class="edit-notes-container">
                        <div id="edit-notes-container"></div>
                        <button id="update" class="update" type="button">UPDATE</button>
                    </div>

                </div>
                <button id="update" class="updateWithoutScroll" type="button">UPDATE</button>

            </div>

        </div>
    `;

    // Append the modal to the container
    document.body.appendChild(modal);

    // Add event listener to close the modal
    const closeButton = modal.querySelector('.editClose');

    closeButton.addEventListener('click', function() {
        document.getElementById("pointId").value = '';
        document.getElementById("edit_creator_name").value = '';
        document.getElementById("editTitle").value = '';
        document.getElementById("edit_meeting_subject").value = '';
        document.getElementById("editDay").textContent = '';
        document.getElementById("editDate").textContent = '';
        document.getElementById("editTime").textContent = '';
        document.getElementById("editMeetingLink").textContent = '';
        
        var editNotesContainer = document.getElementById("edit-notes-container");
        editNotesContainer.innerHTML = ' ';


        modal.style.display = 'none';

    });


    document.getElementById('copyEditMeetingLink').addEventListener('click', function (){
        var meetingLink = document.getElementById('editMeetingLink');
        var copiedText = meetingLink.innerText || meetingLink.textContent;
        
        navigator.clipboard.writeText(copiedText).catch(() => {
            console.error('Failed to copy URL');
        });
    });


}

showEditModal();

$(document).on('click', '.editBtn', function(event){
    event.preventDefault();

    const editModal = document.getElementById('editModal');
    editModal.style.display = "block";
    var pointId = $(this).attr('data-id');



    $.ajax({
        url: 'https://backend.zimomeet.com/api/get-meeting-note?id='+pointId,
        type: 'GET',
        headers: {
            "api-key": "786ZM786"
        },
        success: function(response){
            console.log(response);

            document.getElementById("pointId").value = pointId;
            document.getElementById("edit_creator_name").value = response.meeting_note.creator_name;
            document.getElementById("editTitle").value = response.meeting_note.title;
            document.getElementById("edit_meeting_subject").value = response.meeting_note.meeting_subject;
            document.getElementById("editDay").textContent = response.meeting_note.day;
            document.getElementById("editDate").textContent = response.meeting_note.date;
            document.getElementById("editTime").textContent = response.meeting_note.time;
            document.getElementById("editMeetingLink").textContent = response.meeting_note.meeting_link;
            
            var editNotesContainer = document.getElementById("edit-notes-container");
            var notesArray = response.meeting_note.notes.split('\n');

            
            notesArray.forEach(function(note, index){
                var p = document.createElement('p');
                p.textContent = note.trim();
                p.classList.add('editNotePoints');

                editNotesContainer.appendChild(p);
 
            });

            const inputField = document.getElementById('editNotes');
            const notesContainer = document.getElementById('edit-notes-container');
            let noteBullets;
            
            const editModalContainer = document.querySelector('.editModalContainer');
            const updateButton = document.getElementById('update');
            const topUpdateButton = document.getElementById('topUpdateBtn');

            var lastBulletNumber = 1;
            var lastNoteElement = editNotesContainer.querySelector('.editNotePoints:last-child');
            
            if(lastNoteElement){
                var lastNoteContent = lastNoteElement.textContent;
                var match = lastNoteContent.match(/(\d+)\./);
                if(match){
                    lastBulletNumber = parseInt(match[1]); 
                }
            }
            noteBullets = lastBulletNumber + 1;

            inputField.addEventListener('keydown', function(event){
                if(event.key === 'Enter'){
                    console.log(document.getElementById('editNotes').value)
                    event.preventDefault();
                    const text = inputField.value.trim();
                    if(text){
                        const note = document.createElement('p');
                        note.classList.add('editNotePoints')
                        note.innerHTML = `<span class="bullets">${noteBullets}.</span>${text}`;
                        notesContainer.appendChild(note);
                        inputField.value = '';  
                        noteBullets++;              
                    }
                }


                // Function to check if scrollbar is visible
                function isScrollbarVisible() {
                    return editModalContainer.scrollHeight > editModalContainer.clientHeight;
                }
                console.log(isScrollbarVisible());

                if (isScrollbarVisible()){
                    document.querySelector('.updateWithoutScroll').style.display = "none";
                    updateButton.style.display = "block";
                    topUpdateButton.style.display = "block";
                    topUpdateButton.setAttribute('id', 'update');
                }

            });

            
            // Function to check if scrollbar is visible
            function isScrollbarVisible() {
                return editModalContainer.scrollHeight > editModalContainer.clientHeight;
            }
            console.log(isScrollbarVisible());

            if (isScrollbarVisible()){
                document.querySelector('.updateWithoutScroll').style.display = "none";
                updateButton.style.display = "block";
                topUpdateButton.style.display = "block";
                topUpdateButton.setAttribute('id', 'update');
            }

        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });

});


$(document).on('click', '#update', function(event){
    event.preventDefault();

    var pointId = document.getElementById("pointId").value;
    var day = document.getElementById("editDay").textContent;
    var date = document.getElementById("editDate").textContent;
    var time = document.getElementById("editTime").textContent;
    var title = document.getElementById("editTitle").value;
    var meeting_subject = document.getElementById("edit_meeting_subject").value;
    var updateMeetingLink = document.getElementById("editMeetingLink").textContent;
    var creator_name = document.getElementById("edit_creator_name").value;
    var editNotes = [];

    document.querySelectorAll('.editNotePoints').forEach(function(note){
        editNotes.push(note.textContent);
    });


    $.ajax({
        url: 'https://backend.zimomeet.com/api/update-meeting-note?id='+ pointId,
        type: 'POST',
        headers: {
            "api-key" : "786ZM786"
        },
        data: {
            title: title,
            creator_name: creator_name,
            day: day,
            date: date,
            time: time,
            meeting_subject: meeting_subject,
            meetingLink: updateMeetingLink,
            notes: editNotes.join('\n')
        },
        success: function(response){
            console.log(response);

        },
        error: function(xhr, status, error){
            console.error(error);
        },
        complete: function(){
            $('#editModal').css('display', 'none');  
            loadTable();                  
        }
    });

});





// del data
    $(document).on('click', '.delBtn', function(event){
        event.preventDefault();

        var $row = $(this).closest('tr'); 

        var permanentDelBtn = $row.find('#permanentDelBtn')[0];
        permanentDelBtn.style.display = "block";

        var editIcon = $row.find('#editIcon')[0];
        var deleteIcon = $row.find('#deleteIcon')[0];
        var meetingCamIcon = $row.find('#meetingCamIcon')[0];


        deleteIcon.addEventListener('mouseover', function(){
            deleteIcon.style.fill = "black";
        });
        
        $row.find('td .date, td .greyText, td div').css('color', '#bfbfbf');
        editIcon.style.fill = '#bfbfbf';
        meetingCamIcon.style.fill = '#bfbfbf';
    });

$(document).on('click', '#permanentDelBtn', function(event){
    event.preventDefault();

    var pointId = $(this).attr('data-id');

      
    $.ajax({
        url: 'https://backend.zimomeet.com/api/delete-meeting-note?id='+ pointId,
        type: 'DELETE',
        headers:{
            "api-key" : "786ZM786"
        },
        success: function(response){
            console.log(response)
        },
        error: function(xhr, status, error){
            console.error(error);
        },
        complete: function(){

            loadTable();
        }

    });

});