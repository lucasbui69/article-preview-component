// Main JS file 
const share_btn = document.getElementById('share-btn');
const share_btn_mobile = document.getElementById('share-btn-mobile');
const share_box = document.getElementsByClassName('share-box')[0];
const share_box_tip = document.getElementsByClassName('share-box-tip')[0];
const screenWidth = window.innerWidth;
const user_profile = document.getElementsByClassName('user-profile')[0];
const share_box_mobile = document.getElementsByClassName('share-box-mobile')[0];


// Setup default when loading page. Element will display depoend on screensize
if (screenWidth > 375) {
    share_box_mobile.style.display = 'none';
    share_box_mobile.style.visibility = 'hidden';
} else {
    share_box_mobile.style.display = 'none';
    share_box_mobile.style.visibility = 'hidden';
}

// Event for clicking sharing btn
share_btn.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        let newScreensize = window.innerWidth;

        if (newScreensize <= 375) {
            if (share_box_mobile.style.visibility == 'hidden') {
                share_box_mobile.style.display = 'flex';
                share_box_mobile.style.visibility = 'visible';
                user_profile.style.display = 'none';
            }

        } else {
            if ((share_box.style.visibility == 'visible')) {
                share_box.style.visibility = "hidden";
                share_box_tip.style.visibility = "hidden";
            } else {
                share_box.style.visibility = "visible";
                share_box_tip.style.visibility = "visible";
            }
        }
    }
);

// Add function for MOBILE display btn
share_btn_mobile.addEventListener(
    "click",
    (e) => {
        e.preventDefault();
        let newScreensize = window.innerWidth;

        if ((newScreensize <= 375) & (share_box_mobile.style.visibility = 'hidden')) {
            share_box_mobile.style.display = 'flex'
            share_box_mobile.style.visibility = 'visible';
        } else {
            share_box_mobile.style.visibility = "hidden";
            share_box_mobile.style.display = 'none';
            user_profile.style.display = 'flex';
            user_profile.style.visibility = 'visible';
        }
    }
);

// Reset element when resizing
window.addEventListener("resize", (event) => {
    event.preventDefault();
    let newScreensize = window.innerWidth;
    if (newScreensize > 375) {
        share_box_mobile.style.display = 'none';
        share_box_mobile.style.visibility = 'hidden';
    } else {
        share_box_mobile.style.display = 'none';
        share_box_mobile.style.visibility = 'hidden';
    }
});




