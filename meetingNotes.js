// popover modal button
const button = document.createElement('div');
button.style.float = 'right';
button.style.margin = '0px';
button.style.padding = '0px';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button.style.position= "fixed";
button.setAttribute('id', 'firstModalBtn');

const btnImage = document.createElement('img');
btnImage.classList.add("notesBtn")
btnImage.setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20W.svg?alt=media&token=9d671e06-1f29-4b80-a6ea-57470a584ed8");


const zimoGroupLink = document.createElement('a');
zimoGroupLink.href = "https://zimogroup.org/";
zimoGroupLink.target = "_blank";

const zimoGroupLogo = document.createElement('img');
zimoGroupLogo.className = "zimoGroupLogo";
zimoGroupLogo.src= "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2Fzg%2Bzig%20w.svg?alt=media&amp;token=d99fb544-a89b-412d-bf48-2136c4b10a8e";

zimoGroupLink.appendChild(zimoGroupLogo);
 

const ztfrLink = document.createElement('a');
ztfrLink.href = "https://zitransfer.com/";
ztfrLink.target = "_blank";

const ztfrLogo = document.createElement('img');
ztfrLogo.className = "ztfrLogo";
ztfrLogo.src= "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZTFR%20w%20(1).svg?alt=media&token=48badcb6-26aa-4dc0-bf66-17ea3d1fbca0";

ztfrLink.appendChild(ztfrLogo);



// first modal
function showFirstModal() {

    // modal creation
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'firstModal');
  
    // modal content
    modal.innerHTML = `

        <div class="modal-content">
            <div style="padding: 5px;">
                <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                    <div style="display: flex; flex-direction: column; align-items: flex-start;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZigM.svg?alt=media&token=91fab9c4-451f-43dd-9efb-817b63d19fa1" 
                            class="ZMLogo" 
                        />
                        <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FNotes%20Text.svg?alt=media&token=e35e9086-6a45-4cc0-aab9-9e7531549760" 
                            class="notes-heading" 
                        />
                    </div>
                    
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20B.svg?alt=media&token=27db0d8b-923e-44ad-b0db-012b49cf963e" 
                        class="notePadLogo"
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20X.svg?alt=media&token=3e9d200b-cd77-4be0-8e3d-24b656d4ddf1" 
                        class="close"
                    />
                </div>

                <div style="clear: both; margin-top: 25px;"> 

                    <div class="table-container">
                        <table class="notesTable">
                            <thead>
                                <tr>
                                    <th class="notesTableHeading" style="width: 13%;">DATE</th>
                                    <th class="notesTableHeading" style="width: 15%;">TITLE</th>
                                    <th class="notesTableHeading" style="width: 17%;">LINK</th>
                                    <th class="notesTableHeading" style="width: 20%;">MEETING SUBJECT</th>
                                    <th class="notesTableHeading" style="width: 22%;">NOTES</th>
                                    <th class="notesTableHeading">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20%2B.svg?alt=media&token=b8558a25-0713-438d-b6da-6bbeabbcf563"
                                            id="newDataBtn" class="newDataBtn"
                                        />
                                    </th>
                                </tr>
                            </thead>

                            <tbody id="meetingData" class="notesTableBody">

                                <div id="table-loader" ></div> 
                                
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // modal hidden initially
    modal.style.display = 'none';

    // modal close button
    const closeButton = modal.querySelector('.close');

    // close modal when clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.getElementById('firstModalBtn').disabled = false;
        document.querySelector('.notesBtn').style.opacity = "100%";
    });

    // // Close the modal when the user clicks outside of it
    // window.addEventListener('click', function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = 'none';
    //         document.getElementById('firstModalBtn').disabled = false;
    //         document.querySelector('.notesBtn').style.opacity = "100%";
    //     }
    // });

    // Append the modal to the container
    document.body.appendChild(modal);

}


// show first modal
showFirstModal();

//create button fucntion --  when no data or a row exits
function addCreateButton(tbody){

    var row = `
        <tr>
            <td colspan="6" style="text-align: center; border:none; padding-right: 0px;">
                <div style="display: inline-block; padding: 10px; cursor: pointer; " id="newDataBtn">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20A%20Note%20%2B.svg?alt=media&token=f26770e4-4c66-4a5e-989b-968bf3988776" 
                        alt="addIcon"
                        class="dynamicCreateBtn"
                    />
                </div>
            </td>
        </tr>
    `;

    tbody.append(row);

}
 
// function for generating rows for table
function loadTable(){
    
    var tbody = $('#meetingData');
    if (tbody.children().length > 0) {
        document.getElementById('table-loader').style.display = "none";
    }

    
    $.ajax({
        url: "https://backend.zimomeet.com/api/get-meeting-notes",
        type: "GET",
        headers: {
            "api-key": "786ZM786"
        },
        success: function(response){
            document.getElementById('table-loader').style.display = "none";

            console.log(response);
            // var tbody = $('#meetingData');
            tbody.empty();
            
            // if(response.error == true){
            //     addCreateButton(tbody);
            // }
            // else if(response.error == false){
            if(response.error == false){

                response.meeting_notes.forEach(function(meeting_note){
                    
                    let meetingRoomName;
                    let meeting_url = meeting_note.meeting_link;
                    if(meeting_url){
                        let arrayString = meeting_url.split("/");
                        meetingRoomName = arrayString.pop();
                    }
                    var row = `
                        <tr data-greyed-out="false" data-id="${meeting_note.id}">
                            <td class="notesTableData">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    <p class="date">${meeting_note.day}</p>
                                    <p class="date">${meeting_note.date}</p>
                                    <p class="date">${meeting_note.time}</p>
                                </div>
                            </td>

                            <td class="notesTableData">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}"> 
                                    ${meeting_note.title} 
                                </div>
                            </td>
                            
                            <td class="notesTableData">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    <svg id="meetingCamIcon" 
                                        alt="CAM_ICON"
                                        class="tableCamIcon"
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
                            <td class="notesTableData">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    ${meeting_note.meeting_subject}
                                </div>        
                            </td>
                            <td class="notes notesTableData">
                                <div id="detailsModalBtn" data-meeting-note-id="${meeting_note.id}">
                                    ${meeting_note.notes}
                                </div>
                            </td>

                            <td class="notesTableData" style="vertical-align: baseline; padding-right: 0px;">
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
                                            data-id="${meeting_note.id}" 
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
                                    <p style="display:none; color: black; font-size: 8px; cursor: pointer; font-weight: 600;letter-spacing: 0.7px;" 
                                        id="permanentDelBtn-${meeting_note.id}" 
                                        class="permanentDelBtn"
                                        data-id="${meeting_note.id}">
                                        DELETE
                                    </p>
                                </div>
                            </td>

                        </tr>
                    `;

                    tbody.append(row);

                    // if(tbody.children().length == 0){
                    //     addCreateButton(tbody);
                    // }
                    // if (response.meeting_notes.length == 1) {
                    //     addCreateButton(tbody);
                    // }
                });

                addCreateButton(tbody);
            }
            // }
            else{
                addCreateButton(tbody);
            }

        },
        error: function(xhr, status, error){
            document.getElementById('table-loader').style.display = "block";
            console.error(error);
        }

    });

}
 
// listener for opening first modal --  loadTable fucntion is called here
$(document).on('click', '#firstModalBtn', function(event){
    event.preventDefault();
    console.log('Modal Open');
    document.getElementById('firstModalBtn').disabled = true;
    document.querySelector('.notesBtn').style.opacity = "50%";

    document.getElementById('table-loader').style.display = "block";

    loadTable();  

    const firstModal = document.getElementById('firstModal');
    firstModal.style.display = "block";
    
});


// get the largeVideoContainer div from zimo meet live
const container = document.getElementById('largeVideoContainer');

button.appendChild(btnImage);   //appended buttonImage in its parent container created above 

document.body.appendChild(button);   //appended button in body

document.body.appendChild(zimoGroupLink);  //appended zimo group logo  in body

document.body.appendChild(ztfrLink);  //appended ztfr logo  in body




//fucntion for details modal
function showDetailsDataModal() {

    const container = document.getElementById('largeVideoContainer');

    // Create the modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'detailsDataModal');
    modal.style.display = 'none';
    modal.style.zIndex = "9999"

    modal.innerHTML = `

        <div class="modal-content" style="padding-right: 5px;">
            <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; align-items: center; padding: 6px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZigM.svg?alt=media&token=91fab9c4-451f-43dd-9efb-817b63d19fa1" 
                        class="detailsZMLogo" 
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20B.svg?alt=media&token=27db0d8b-923e-44ad-b0db-012b49cf963e" 
                        class="detailsNoteLogo" 
                    />
                </div>

                <h6 id="detailsTitle" class="detailsHeading" style="padding-top: 18px;"></h6> 

                <div style="display: flex; flex-direction: column; align-items: center;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20X.svg?alt=media&token=3e9d200b-cd77-4be0-8e3d-24b656d4ddf1"  
                        class="detailsDataModalClose"
                    />
                    <div class="detailsModalDateContainer">
                        <p class="detailsModalDate" id="detailsDay"></p>
                        <p class="detailsModalDate" id="detailsDate"></p>
                        <p class="detailsModalDate" id="detailsTime"></p>
                    </div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; margin-top: -35px">
                <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FNotes%20Text.svg?alt=media&amp;token=e35e9086-6a45-4cc0-aab9-9e7531549760" 
                    class="notes-heading detailsNotesHeading"
                    style="padding-left: 10px;"
                />                    
                <h6 class="detailsCreator" id="detailsCreator"></h6>
            </div>

            <div class="detailsNotesContainer" style="padding: 5px 0px 10px 10px;">
                
                <div id="copyDetailsMeetingLink" style="display: flex; align-items: center; margin: 15px 0px; cursor: pointer;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZIMO%20MEET%20Cam%20Logo.svg?alt=media&token=bd0597e6-0336-43be-94c8-ef4c5e4a2c75" 
                        alt="CAM_ICON" 
                        class="detailsCamIcon"
                    />
                    <p class="detailsModalMeetingLink" id="detailsMeetingLink"></p>
                    <span class="custom-tooltip" id="details-custom-tooltip">Copied</sapn>

                </div>
                
                <p class="detailsSubject" id="details_meeting_subject"></p>
                
                <div id="detailsNotesContainer">
                    <div style="flex: 1; overflow-y: auto;" class="detailsNotesContainer" id="details-notes-container">
                    </div> 
                </div>
               
            
            </div>
            <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20ZiDoc%20Download%20PDF.svg?alt=media&token=80df85bd-01b4-46a6-a0e6-16c6b7209ac4" 
                alt="zimoDoc-icon"
                id="downloadPdfBtn"
            />
        </div>
    `;

    document.body.appendChild(modal);

    // event listener to close the modal
    const closeButton = modal.querySelector('.detailsDataModalClose');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';

        document.getElementById("details-notes-container").innerHTML = " ";


    });


    // click event for copying meeting link in details modal 
    document.getElementById('copyDetailsMeetingLink').addEventListener('click', function (){
        var meetingLink = document.getElementById('detailsMeetingLink');
        var copiedText = meetingLink.innerText || meetingLink.textContent;
        
        navigator.clipboard.writeText(copiedText).then(function() {
            document.getElementById("details-custom-tooltip").style.display = "block";
            setTimeout( function() {
                document.getElementById("details-custom-tooltip").style.display = "none";
            }, 1000);
        }).catch(() => {
            // Failed to copy text
            console.error('Failed to copy URL');
        });
    });

}

// show details modal
showDetailsDataModal();



// on click event for opening details modal 
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
            document.getElementById("downloadPdfBtn").setAttribute('data-note-id', response.meeting_note.id);
            document.getElementById("downloadPdfBtn").setAttribute('data-meeting-title', response.meeting_note.title);
            document.getElementById("downloadPdfBtn").setAttribute('data-meeting-date', response.meeting_note.date);
            document.getElementById("downloadPdfBtn").setAttribute('data-meeting-time', response.meeting_note.time);


            
            var deatilsNotesContainer = document.getElementById("details-notes-container");
            var notesArray = response.meeting_note.notes.split('\n');

            
            notesArray.forEach(function(note, index){
                var p = document.createElement('p');
                p.textContent = note.trim();
                p.classList.add('detailsNotes');

                deatilsNotesContainer.appendChild(p);
 
            });

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

        
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });


});



// download pdf  
$(document).on('click', '#downloadPdfBtn', function(event){

    note_id = $(this).attr('data-note-id');
    meeting_title = $(this).attr('data-meeting-title');
    meeting_date = $(this).attr('data-meeting-date');
    meeting_time = $(this).attr('data-meeting-time');

    meeting_time = meeting_time.replace(':', '.');

    meeting_title = meeting_title.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
    console.log(meeting_title);
    console.log(meeting_time);
    console.log(meeting_title);

    var parts = meeting_date.split('/');
    // Rearrange the parts and join them using '.' as separator
    var formattedDate = parts[0] + '.' + parts[1] + '.' + parts[2];




    console.log(creator_name + " "+ note_id)
    $.ajax({
        url: "https://backend.zimomeet.com/api/download-pdf-notes?note_id="+ note_id,
        type: 'GET',
        headers:{
            "api-key" : "786ZM786"
        },
        xhrFields: {
            responseType: 'blob' 
        },
        success: function(response){
            console.log(response);

           var blob = new Blob([response], { type: 'application/pdf' });
            var url = URL.createObjectURL(blob);

            var a = document.createElement('a');
            a.href = url;
            a.download =  "ZM Notes "+ formattedDate + " "+ meeting_time + " - "+meeting_title + ".pdf"; 
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


// create modal
function showSaveDataModal() {

    const container = document.getElementById('largeVideoContainer');

    // Create the modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('id', 'newDataModal');
    modal.style.display = 'none';
    modal.style.zIndex = "9999"

    modal.innerHTML = `
    <div class="modal-overlay">
        <div class="new-modal-content">
        
            <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; align-items: center; margin-left:5px; padding: 0px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZigM.svg?alt=media&token=91fab9c4-451f-43dd-9efb-817b63d19fa1" 
                        class="createZMLogo" 
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20%2B.svg?alt=media&token=bfee8b4a-b78f-4dd2-8ff2-02e2d13b9163" 
                        class="createNotePadLogo" 
                    />
                </div>

            
                <div style="display: flex; align-items: center; padding-right: 8px;">
                    <div class="loader" id="topLoader"></div>
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20SAVE.svg?alt=media&token=948e6d91-3d0a-4f1f-b430-9099b1381fea"
                        id="topSaveBtn" 
                        class="topSaveBtn"
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20X.svg?alt=media&token=3e9d200b-cd77-4be0-8e3d-24b656d4ddf1" 
                        class="newDataModalClose"
                    />
                </div>
            </div>

            <div class="addDateContainer">
                <div style="display: flex; flex-direction: column;">
                    <p class="addModalDate" id="dayDisplay"></p>
                    <p class="addModalDate" id="date"></p>
                    <p class="addModalDate"  id="time"></p>
                </div>

                <div id="copyMeetingLink" style="display: flex; align-items: center; cursor:pointer; padding-right: 8px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZIMO%20MEET%20Cam%20Logo.svg?alt=media&token=bd0597e6-0336-43be-94c8-ef4c5e4a2c75" 
                        alt="CAM_ICON" 
                        class="camIcon"/>
                    <p class="createModalLink" id="meetingLink" style="color:black;"></p>
                    <span class="custom-tooltip"  id="custom-tooltip">Copied</sapn>

                </div>
            </div>

            <div class="createModalContainer">
        
                <div style="padding-right: 8px;" >
                    <div style="display:flex; align-items: flex-start;">
                        <label for="creator_name" class="notesLabel"> NAME</label>
                        <input type="text"  class="inputField" id="creator_name" name="creator_name" placeholder="NAME" required>
                    </div>

                    <div class="mt" style="display:flex; align-items: flex-start;">
                        <label for="title"  class="notesLabel">TITLE</label>
                        <input type="text"  class="inputField" id="title" name="title"  placeholder="TITLE" required>
                    </div>

                    <div class="mt" style="display:flex; align-items: flex-start;">
                        <label for="meetingSubject"  class="notesLabel">MEETING SUBJECT</label>
                        <input type="text"  class="inputField" id="meeting_subject" name="meeting_subject"  placeholder="MEETING SUBJECT" required>
                    </div>

                    <div class="mt" style="display:flex; align-items: flex-start;">

                        <label for="notes"  class="notesLabel">NOTES</label>   
                        <div id="notesContainer">
                            <input type=text id="notes" class="inputField" name="notes"  placeholder="NOTES..." style="border:none;" required>

                        </div>

                    </div>
        
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.appendChild(modal);

   
  
    // event listener to close the modal
    const closeButton = modal.querySelector('.newDataModalClose');
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';

        // resetting place holders and removing validation class ----- code starts here

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

        var notesInput = document.getElementById('notes');
        notesInput.value = "";
        notesInput.classList.remove('placeholder-red');
        notesInput.placeholder = 'NOTES...';

        notesContainer.innerHTML = "";
        notesContainer.innerHTML = '<input type=text id="notes" class="inputField" name="notes"  placeholder="NOTES..." style="border:none;" required>';
        
        // resetting place holders and removing validation class ----- code ends here

        // set bullets count to 1 when modal closed
        noteBullets = 1;

    });


    // for copying meeting link in create modal
    document.getElementById('copyMeetingLink').addEventListener('click', function (){
        var meetingLink = document.getElementById('meetingLink');
        var copiedText = meetingLink.innerText || meetingLink.textContent;

        navigator.clipboard.writeText(copiedText).then(function() {
            document.getElementById("custom-tooltip").style.display = "block";
            setTimeout( function() {
                document.getElementById("custom-tooltip").style.display = "none";
            }, 1000);
        }).catch(() => {
            // Failed to copy text
            console.error('Failed to copy URL');
        });
    });

}


// show create modal
showSaveDataModal();


// globally defined noteBullets
let noteBullets = 1; 

    
// function to register the notes input field listener
function registerNoteListener() {
    const notesInputField = document.getElementById('notes');
    const notesContainer = document.getElementById('notesContainer');

    // Function to remove empty input fields
    function removeEmptyInputs() {
        let index = 1;
        let prevInput = null;
        document.querySelectorAll('.notePoints').forEach(function(input) {
            if (input.value.trim() === `${index}.`) {
                if (prevInput) {
                    prevInput.focus(); // Focus on the previous input
                }
                input.remove();
            } 
            else if (input.value.trim() === '') {
                if (prevInput) {
                    prevInput.focus(); // Focus on the previous input
                }
                input.remove();
            } 
            else {
                input.value = `${index}. ${input.value.trim().substring(input.value.indexOf('.') + 2)}`;
                index++;
            }
            prevInput = input; // Save the current input for the next iteration
        });
        noteBullets = index;    


        if (noteBullets > 50) {
            notesInputField.style.display = 'none';
        } else {
            notesInputField.style.display = 'block';
        }
    }




    // Listen for keyup event to remove empty inputs
    notesContainer.addEventListener('keyup', function(event) {
        if (event.target.classList.contains('notePoints') && event.key !== ' ') {
            removeEmptyInputs();
        }
    });


    // Listener for adding points
    notesInputField.addEventListener('input', function(event){
        const text = notesInputField.value.trim();
        if (text.length > 119) { // Check if trimmed text length exceeds 119 characters
            notesInputField.value = text.substring(0, 119); // Trim the input to 119 characters
            event.preventDefault(); // Prevent further input
        }
    });

    //  listener for adding points
    notesInputField.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            if (noteBullets <= 50){   //check for only 50 points
                const text = notesInputField.value.trim();
                if(text){
                    const note = document.createElement('input');
                    note.type = "text";
                    note.classList.add('notePoints');
                    note.value = `${noteBullets}. ${text}`;
                    notesContainer.insertBefore(note, notesInputField)
                    // note.focus();
                    // notesContainer.appendChild(note);

                    note.addEventListener('keydown', function(event){
                        if(event.key == 'Enter'){
                            event.preventDefault();


                            const currentIndex = Array.from(notesContainer.children).indexOf(note);
                            const nextNote = notesContainer.children[currentIndex + 1];
                            if (nextNote) {
                                nextNote.focus();
                            }
                            
                        }
                    });
                    notesInputField.value = '';
                    noteBullets++;      
                    
                    if (noteBullets > 50) {
                        notesInputField.style.display = 'none';
                    }
                }
            }
            
           
        }
        else if(event.key === 'Backspace' && notesInputField.value === '') {
            const currentIndex = Array.from(notesContainer.children).indexOf(notesInputField);
            const prevNote = notesContainer.children[currentIndex - 1];
            if (prevNote) {
                event.preventDefault(); // Prevent default Backspace behavior
                prevNote.focus();
            }
        }
    });
    
    console.log(noteBullets);

}



// click event for opening create data modal
$(document).on('click', '#newDataBtn', function(event){
    event.preventDefault();

    noteBullets = 1;
    
    document.getElementById('topSaveBtn').disabled = false;


    const newModal = document.getElementById('newDataModal');

    const dayDisplay = document.getElementById('dayDisplay');
    const dateField = document.getElementById('date');
    const timeField = document.getElementById('time');

    // function to update the time display
    function updateTime() {
        const today = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        timeField.textContent = today.toLocaleTimeString('en-GB', timeOptions);
        
        // request the next animation frame
        requestAnimationFrame(updateTime);
    }

    // update the time display initially
    updateTime();


    // fetch date & day
    const today = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    dayDisplay.textContent = today.toLocaleDateString('en-GB', dayOptions);
    dateField.textContent = today.toLocaleDateString('en-GB', dateOptions);

    registerNoteListener();

    // fetch meeting link from browser
    const meetingLinkField = document.getElementById('meetingLink');
    meetingLinkField.textContent = "";
    // meetingLinkField.textContent = window.location.href;                 
    meetingLinkField.textContent = "https://zimomeet.live/dev-test";
    newModal.style.display = 'block';
});



// save data on clicking btn 
$(document).on('click', '#topSaveBtn', function(event){

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
        notes.push(note.value);
    });
    console.log(notes);


    var isValid = true;
    var creatorNameInput = document.getElementById('creator_name');
    var titleInput = document.getElementById('title');
    var meetingSubjectInput = document.getElementById('meeting_subject');
    var notesInput = document.getElementById('notes');


    // resetting place holders and removing validation class to the input fields when the user starts typing after validation errors  ---- start
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
    // resetting place holders and removing validation class to the input fields when the user starts typing after validation errors  ---- end


   // Validate required fields
    if (!creator_name.trim()) {
        creatorNameInput.placeholder = 'NAME IS REQUIRED';
        creatorNameInput.classList.add('placeholder-red');
        isValid = false;
    } 
    
    if (!title.trim()) {
        titleInput.placeholder = 'TITLE IS REQUIRED';
        titleInput.classList.add('placeholder-red');  
        isValid = false;
    }

    if (!meeting_subject.trim()) {
        meetingSubjectInput.placeholder = 'MEETING SUBJECT IS REQUIRED';
        meetingSubjectInput.classList.add('placeholder-red');  
        isValid = false;

    }

    // if (notesInput.value.trim()) {
    //     notes.push(notesInput.value.trim());
    //     notesInput.value = ''; // Clear the input field after adding to array
    // }

    const text = notesInput.value.trim();
    if(text){
        const note = document.createElement('input');
        note.type = "text";
        note.classList.add('notePoints');
        note.value = `${noteBullets}. ${text}`;
        document.getElementById('notesContainer').appendChild(note);
        notes.push(notesInput.value.trim());
        notesInput.value = '';
        noteBullets++;
    }

    if (notes.length == 0) {
        notesInput.placeholder = 'NOTES ARE REQUIRED';
        notesInput.classList.add('placeholder-red');  
        isValid = false;

    } 

    if(isValid){
        document.getElementById('topSaveBtn').disabled = true;

        console.log(isValid)

        document.getElementById('topSaveBtn').style.display = "none";
        document.querySelector('.newDataModalClose').style.display = "none";
        document.getElementById('topLoader').style.display = "block";
        
        // console.log(date + " " + day + meetingLink + " " + pointName + " "+ pointDescription);
        setTimeout(function(){

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
                    console.log(noteBullets);
                    if(noteBullets > 50){
                        document.getElementById("editNotes").style.display = "none";
                    }
                    noteBullets = 1;
                    console.log("after success : "+noteBullets);
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

                    document.getElementById("notesContainer").innerHTML = '<input type=text id="notes" class="inputField" name="notes"  placeholder="NOTES..." style="border:none;" >';

                    $('#newDataModal').css('display', 'none');

                    document.querySelector('.newDataModalClose').style.display = "block";

                    document.getElementById('topSaveBtn').style.display = "block";
                    document.getElementById('topLoader').style.display = "none";
                
                    loadTable();
                }
            });


        }, 1000);
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
    <div class="modal-overlay">

        <div class="edit-modal-content">

            <div style=" display: flex; justify-content: space-between; align-items: flex-start;">
                <div style="display: flex; align-items: center;  margin-left:5px;">
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZigM.svg?alt=media&token=91fab9c4-451f-43dd-9efb-817b63d19fa1"
                        class="createZMLogo"
                    />
                    <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZM%20Notes%20Create%20%2B.svg?alt=media&token=bfee8b4a-b78f-4dd2-8ff2-02e2d13b9163" 
                        class="createNotePadLogo"
                    />
                </div>

                <div style="display: flex; align-items: center; padding-right: 8px;">
                    <div class="loader" id="editTopLoader"></div>
                    <button id="topUpdateBtn" class="updateBtn" type="button">UPDATE</button>
                    <img src="https://firebasestorage.googleapis.com/v0/b/uploadimage-6caaa.appspot.com/o/ZM%20Live%20Meeting%20Notes%20Icons%2FZM%20Notes%20X.png?alt=media&token=fafaedde-2699-48cd-bc65-19460a0ad2c6" 
                        class="editClose"
                    />
                </div>
            </div>

            <div id="edit-loader" style="display: block;" ></div> 

            
            <div id="editModalContent" style="display: none;" >

                <div class="editDateContainer">
                    <div style="display: flex; flex-direction: column;">
                        <p class="addModalDate" id="editDay"></p>
                        <p class="addModalDate" id="editDate"></p>
                        <p class="addModalDate"  id="editTime"></p>
                    </div>

                    <div id="copyEditMeetingLink" style="display: flex; align-items: center; cursor:pointer; padding-right: 8px;">
                        <img src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimomeet_live%2Fmeeting_notes%2Flogos%2FZIMO%20MEET%20Cam%20Logo.svg?alt=media&token=bd0597e6-0336-43be-94c8-ef4c5e4a2c75" 
                            alt="CAM_ICON" 
                            class="camIcon"/>
                        <p class="createModalLink" id="editMeetingLink" name="editMeetingLink"></p>
                        <span class="custom-tooltip" id="edit-custom-tooltip">Copied</sapn>

                    </div>
                </div>

                <input type="hidden" id="pointId" name="pointId">


                <div class="editModalContainer">
                    <div style="padding-right: 8px;">

                        <div class="mt" style="display:flex; align-items: flex-start;">
                            <label for="edit_creator_name" class="notesLabel"> NAME</label>
                            <input type="text"  class="inputField" id="edit_creator_name" name="edit_creator_name" placeholder="NAME">
                        </div>

                        <div class="mt" style="display:flex; align-items: flex-start;">
                            <label for="editTitle"  class="notesLabel">TITLE</label>
                            <input type="text"  class="inputField" id="editTitle" name="editTitle"  placeholder="TITLE">
                        </div>

                        <div class="mt" style="display:flex; align-items: flex-start;">
                            <label for="editMeetingSubject"  class="notesLabel">MEETING SUBJECT</label>
                            <input type="text"  class="inputField" id="edit_meeting_subject" name="edit_meeting_subject"  placeholder="MEETING SUBJECT">
                        </div>

                        <div class="mt" style="display:flex; align-items: flex-start;">

                            <label for="editNotesLabel"  class="notesLabel">NOTES</label>      
                            <div id="edit-notes-container">
                                <input type=text id="editNotes" class="inputField" name="editNotes"  placeholder="NOTES..." style="border:none;">
                            </div>        
                  
                        </div>
        
                    </div>    
                </div>
            </div>
        </div>
    </div>
    `;

    // append the modal to the container
    document.body.appendChild(modal);

    // event listener to close the modal
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
        
        editNotesContainer.innerHTML = '<input type="text" id="editNotes" class="inputField" name="editNotes" placeholder="NOTES..." style="border:none;">';


        document.getElementById('editModalContent').style.display = "none";


        modal.style.display = 'none';

    });


    document.getElementById('copyEditMeetingLink').addEventListener('click', function (){
        var meetingLink = document.getElementById('editMeetingLink');
        var copiedText = meetingLink.innerText || meetingLink.textContent;
        
        navigator.clipboard.writeText(copiedText).then(function() {
            document.getElementById("edit-custom-tooltip").style.display = "block";
            setTimeout( function() {
                document.getElementById("edit-custom-tooltip").style.display = "none";
            }, 1000);
        }).catch(() => {
            // Failed to copy text
            console.error('Failed to copy URL');
        });
    });


}

showEditModal();


// function to register the notes input field listener for edit/update
function registerEditNoteListener(noteBullets) {
    console.log("i am in edit")
    const editNotesInputField = document.getElementById('editNotes');
    // console.log(editNotesInputField);
    const editNotesContainer = document.getElementById('edit-notes-container');


    // Function to remove empty input fields
    function removeEditEmptyInputs() {
        let index = 1;
        let prevInput = null;
        document.querySelectorAll('.editNotePoints').forEach(function(input) {
            if (input.value.trim() === `${index}.`) {
                if(prevInput){
                    prevInput.focus();
                }
                input.remove();
            } 
            else if (input.value.trim() === '') {
                if(prevInput){
                    prevInput.focus();
                }
                input.remove();
            }
            else {
                input.value = `${index}. ${input.value.trim().substring(input.value.indexOf('.') + 2)}`;
                index++;
            }

            prevInput = input;
        });
        noteBullets = index;  
        
        console.log(noteBullets)
        if (noteBullets > 50) {
            editNotesInputField.style.display = 'none';
        } else {
            editNotesInputField.style.display = 'block';
        }
    }

    // Listen for keyup event to remove empty inputs
    editNotesContainer.addEventListener('keyup', function(event) {
        if (event.target.classList.contains('editNotePoints') && event.key !== ' ') {
            removeEditEmptyInputs();
        }
    });


    // Listener for editing points
    editNotesInputField.addEventListener('input', function(event){
        const text = editNotesInputField.value.trim();
        if (text.length > 119) { // Check if trimmed text length exceeds 119 characters
            editNotesInputField.value = text.substring(0, 119); // Trim the input to 130 characters
            event.preventDefault(); // Prevent further input
        }
    });


    if(editNotesInputField){
        //  listener for adding points
        editNotesInputField.addEventListener('keydown', function(event){
            if(event.key == 'Enter'){
                event.preventDefault();
                if (noteBullets <= 50){   //check for only 50 points

                    const editText = editNotesInputField.value.trim();
                    if(editText){
                        const editNote = document.createElement('input');
                        editNote.type = "text";
                        editNote.classList.add('editNotePoints');
                        editNote.value = `${noteBullets}. ${editText}`;
                        // editNotesContainer.appendChild(note);

                   
                        editNotesContainer.insertBefore(editNote, editNotesInputField);

                        
                        editNote.addEventListener('keydown', function(event){
                            if(event.key == 'Enter'){
                                event.preventDefault();
                                const currentIndex = Array.from(editNotesContainer.children).indexOf(editNote);
                                const nextNote = editNotesContainer.children[currentIndex + 1];
                                if (nextNote) {
                                    nextNote.focus();
                                }
                                
                            }
                        });
                        editNotesInputField.value = '';

                        noteBullets++;
                        console.log(noteBullets)

                        if (noteBullets > 50) {
                            editNotesInputField.style.display = 'none';
                        }
        
                    }
                }
            }
            else if(event.key === 'Backspace' && editNotesInputField.value === '') {
                const currentIndex = Array.from(editNotesContainer.children).indexOf(editNotesInputField);
                const prevNote = editNotesContainer.children[currentIndex - 1];
                if (prevNote) {
                    event.preventDefault(); // Prevent default Backspace behavior
                    prevNote.focus();
                }
            }
        
        });
    }
    
}




$(document).on('click', '.editBtn', function(event){
    event.preventDefault();

    var tbody = $('#meetingData');
    if (tbody.children().length > 0) {
        document.getElementById('table-loader').style.display = "none";
    }

    const editModal = document.getElementById('editModal');
    var pointId = $(this).attr('data-id');


    const editDay = document.getElementById('editDay');
    const editDate = document.getElementById('editDate');
    const editTime = document.getElementById('editTime');

    // fetch date, time & day

    // function to update the time display
    function updateTime() {
        const today = new Date();
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };
        editTime.textContent = today.toLocaleTimeString('en-GB', timeOptions);
        
        // request the next animation frame
        requestAnimationFrame(updateTime);
    }

    // update the time display initially
    updateTime();


    // fetch date & day
    const today = new Date();
    const dayOptions = { weekday: 'long' };
    const dateOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    editDay.textContent = today.toLocaleDateString('en-GB', dayOptions);
    editDate.textContent = today.toLocaleDateString('en-GB', dateOptions);

    editModal.style.display = "block";

    document.getElementById('edit-loader').style.display = "block";

    $.ajax({
        url: 'https://backend.zimomeet.com/api/get-meeting-note?id='+pointId,
        type: 'GET',
        headers: {
            "api-key": "786ZM786"
        },
        success: function(response){
            // console.log(response);
            console.log("noteBullets: "+noteBullets);

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
        
            var inputFieldEdit = document.getElementById('editNotes');
            notesArray.forEach(function(note, index){
                var input = document.createElement('input');
                input.type = "text";
                
                var match = note.match(/^\d+/);
                var noteNumber = match ? match[0] : '';
                
                var textWithoutNumbering = note.replace(/^\d+\.\s*/, '');
                
                input.value = `${noteNumber}. ${textWithoutNumbering}`;
                // console.log(input.value);
                input.classList.add('editNotePoints');

                if(noteNumber == 50){
                    inputFieldEdit.style.display = "none";
                }
                // Listener for editing points
                input.addEventListener('input', function(event){
                console.log("testing");
                let text = input.value.trim();
                const prefixMatch = text.match(/^\d+\.\s/); // Matches any number followed by a period and space
                let prefix = "";
                if (prefixMatch) {
                    prefix = prefixMatch[0];
                    text = text.substring(prefix.length); 
                }
                if (text.length > 119) { // Check if trimmed text length exceeds 119 characters
                    input.value = text.substring(0, 119); // Trim the input to 130 characters
                    event.preventDefault(); // Prevent further input
                }

            });
                    

                editNotesContainer.insertBefore(input, inputFieldEdit);
                // editNotesContainer.appendChild(input);
                input.addEventListener('keydown', function(event){
                    if(event.key == 'Enter'){
                        event.preventDefault();
                        const currentIndex = Array.from(editNotesContainer.children).indexOf(input);
                        const nextNote = editNotesContainer.children[currentIndex + 1];
                        if (nextNote) {
                            nextNote.focus();
                        }
                        
                    }
                });

                
                noteBullets++;
            
            });
            
            registerEditNoteListener(noteBullets);

            document.getElementById('edit-loader').style.display = "none";
            document.getElementById('editModalContent').style.display = "block";
        },
        error: function(xhr, status, error){
            console.error(error);
        }
    });

});


$(document).on('click', '#topUpdateBtn', function(event){
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
        editNotes.push(note.value);
    });


    document.getElementById('topUpdateBtn').style.display = "none";
    document.querySelector('.editClose').style.display = "none";
    document.getElementById('editTopLoader').style.display = "block";
        

    setTimeout(function(){
        console.log("1 sec")

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

                document.getElementById('edit-notes-container').innerHTML = "";
                document.getElementById('edit-notes-container').innerHTML = '<input type="text" id="editNotes" class="inputField" name="editNotes" placeholder="NOTES..." style="border:none;">';

                
                document.querySelector('.editClose').style.display = "block";

                document.getElementById('editTopLoader').style.display = "none";

                document.getElementById('editModalContent').style.display = "none";

                loadTable();                  
            }
        });

    }, 1000);

});




// del data
$(document).on('click', '.delBtn', function(event){
        event.preventDefault();

        var $row = $(this).closest('tr'); 
        console.log($row.attr('data-greyed-out')); 
        var pointId = $(this).attr('data-id');

        if($row.attr('data-greyed-out') == 'true'){
            console.log("point id: "+ pointId)
            $row.remove();  

            deleteRow(pointId);
        }
        
            
        var permanentDelBtn = document.getElementById(`permanentDelBtn-${pointId}`);
        if(permanentDelBtn){
            console.log(permanentDelBtn);

            permanentDelBtn.style.display = "block";
        }

        var editIcon = $row.find('#editIcon')[0];
        var deleteIcon = $row.find('#deleteIcon')[0];
        var meetingCamIcon = $row.find('#meetingCamIcon')[0];
    
        $row.find('td .date, td .greyText, td div').css('color', '#bfbfbf');
        editIcon.style.fill = '#bfbfbf';
        meetingCamIcon.style.fill = '#bfbfbf';
        deleteIcon.style.fill = '#000000';


        $row.attr('data-greyed-out', 'true')
      
        if($row.attr('data-greyed-out') == 'false'){
            var pointId = $(this).attr('data-id');
            console.log("point id: "+ pointId)
            var $row = $(this).closest('tr');
            $row.remove();  
            
            deleteRow(pointId);
        }

});

document.addEventListener('click', function(event) {
    var clickedRow = event.target.closest('tr[data-greyed-out="true"]');
    var rows = document.querySelectorAll('tr[data-greyed-out="true"]');

    if (clickedRow) {
        rows.forEach(function(row) {
            if (row !== clickedRow) {
                const id = row.getAttribute('data-id');
                Array.from(row.querySelectorAll('.date, .greyText, div')).forEach(function(element) {
                    element.style.color = ''; 
                });
                row.querySelector('#deleteIcon').style.fill = '';
                row.querySelector('#editIcon').style.fill = '';
                row.querySelector('#meetingCamIcon').style.fill = '';
                row.querySelector(`#permanentDelBtn-${id}`).style.display = 'none'; 
                row.removeAttribute('data-greyed-out');
            }
        });
    } else {
        rows.forEach(function(row) {
            const id = row.getAttribute('data-id');
            Array.from(row.querySelectorAll('.date, .greyText, div')).forEach(function(element) {
                element.style.color = ''; 
            });
            row.querySelector('#deleteIcon').style.fill = '';
            row.querySelector('#editIcon').style.fill = '';
            row.querySelector('#meetingCamIcon').style.fill = '';
            row.querySelector(`#permanentDelBtn-${id}`).style.display = 'none'; 
            row.removeAttribute('data-greyed-out');
        });
    }
});





$(document).on('click', '.permanentDelBtn', function(event){
    event.preventDefault();

    var pointId = $(this).attr('data-id');

    var $row = $(this).closest('tr');
    $row.remove();
 
    deleteRow(pointId);
   

});


function deleteRow(pointId){

    $.ajax({
        url: 'https://backend.zimomeet.com/api/delete-meeting-note?id='+ pointId,
        type: 'DELETE',
        headers:{
            "api-key" : "786ZM786"
        },
        success: function(response){
            console.log(response)
            loadTable();
            clickCount = 0;
        },
        error: function(xhr, status, error){
            console.error(error);
        },
        complete: function(){

        }

    });
}


const toolbarButtons = document.querySelectorAll('.toolbar-button-with-badge');
const lastToolbarButton = toolbarButtons[toolbarButtons.length - 1];
const childButton = lastToolbarButton.querySelector('.toolbox-button');

lastToolbarButton.addEventListener('click', function() {
    var isOpen = childButton.getAttribute('aria-pressed');
    console.log("aria-pressed: " + isOpen);
    if(isOpen == 'false'){
        if(window.innerWidth == 1024){
            document.querySelector('.zimoGroupLogo').style.display = "none";
            document.querySelector('.ztfrLogo').style.display = "none";
        }
    }
    if(isOpen == 'true'){
        if(window.innerWidth == 1024){
            document.querySelector('.zimoGroupLogo').style.display = "block";
            document.querySelector('.ztfrLogo').style.display = "block";                
        }

    }
});


    const toolbarButtonChat = document.querySelector('.toolbar-button-with-badge');
    const toolbarButtonChatLabel  = toolbarButtonChat .querySelector('.toolbox-button');
    toolbarButtonChat.addEventListener('click', function(){
        var isOpen = toolbarButtonChatLabel.getAttribute('aria-pressed');


        console.log("aria-pressed: " + isOpen);
        // if(isOpen == 'false'){
            console.log("okay");
            document.getElementById("firstModalBtn").style.display = "none";
            document.querySelector(".zimoGroupLogo").style.display = "none";
            document.querySelector(".ztfrLogo").style.display = "none";

            
            setTimeout(function() {
                const chatCloseBtn = document.querySelector('.chat-header');
                console.log(chatCloseBtn);
                
                if(chatCloseBtn){
                    console.log(chatCloseLabel);
                    chatCloseBtn.addEventListener('click', function() {
                        document.getElementById("firstModalBtn").style.display = "block";
                        document.querySelector(".zimoGroupLogo").style.display = "block";
                        document.querySelector(".ztfrLogo").style.display = "block";
                    });
                }
            }, 2000);


        // }
        // else if(isOpen == "true"){
        if(isOpen == "true"){
            document.getElementById("firstModalBtn").style.display = "block";
            document.querySelector(".zimoGroupLogo").style.display = "block";
            document.querySelector(".ztfrLogo").style.display = "block";
        }
    });



// const chatCloseBtn = document.querySelector('.chat-header');
// if(chatCloseBtn){
//     console.log(chatCloseLabel);
//     chatCloseBtn.addEventListener('click', function() {
//         document.getElementById("firstModalBtn").style.display = "block";
//         document.querySelector(".zimoGroupLogo").style.display = "block";
//         document.querySelector(".ztfrLogo").style.display = "block";
//     });
// }
