let gallery= document.querySelectorAll('.gallery img');
gallery.forEach(img => {
    img.addEventListener('click' , (e) => {

        // create overlay element
        let overlay = document.createElement('div');

        //add classname to the overlay
        overlay.className = 'popup-overlay';

        //append overlay to the body
        document.body.appendChild(overlay);

        //create the popup
        let popupBox = document.createElement('div');

        //add className
        popupBox.className = 'popup-box';

        if (img.alt !== null  ){

            //create heading to popup
            let imgHeading= document. createElement('h3');

            //create text for heading
            let imgText = document.createTextNode(img.alt);

            //append text to the heading
            imgHeading.appendChild(imgText);

            //append heading to the popup
            popupBox.appendChild(imgHeading);


        }


        //create the image
        let popupImage = document. createElement('img');

        //set image src
        popupImage.src = img.src;
         
        popupBox.style.backgroundImage = ` url("${popupImage.src}")`;

        //add image to popup box
        popupBox.appendChild(popupImage);

        //append popup box to the body
        document.body.appendChild(popupBox);
       
        //create the close span
        let closeButtton = document.createElement('span');

        //create the close button text
        let closeButttonText = document.createTextNode('x')

        //append text to close button
        closeButtton.appendChild(closeButttonText);
         
        //add calss name to the clos eButtton
        closeButtton.className = 'close-buttton';

        //add close Buttton to the popup
        popupBox.appendChild(closeButtton);

    });

});


// close popup
document.addEventListener('click' , function (e){

    if(e.target.className == 'close-buttton')
    {

        //remove close popoup
        e.target.parentNode.remove();

        //remove overlay
        document.querySelector('.popup-overlay').remove();
    }
    
});
