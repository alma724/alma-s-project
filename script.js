function myFunction() {
    alert("התנתקת בהצלחה");
    }
function saveFavorite(place) {
    let user = JSON.parse(localStorage.getItem('users'));
    let logged = JSON.parse(localStorage.getItem('logged-in'));
    let index = user.findIndex(user => user.username === logged.username);
    let users = user[index]

    console.log(user[0].likes)
    const placeIndex = users.likes.indexOf(place);
    if (placeIndex === -1) {
        users.likes.push(place);
        Swal.fire({
    text: 'נוסף למועדפים',
    confirmButtonText: 'ok',
    confirmButtonColor: '#E24B56',
    timer: 3000
  });
    } else {
        users.likes.splice(placeIndex, 1);
        Swal.fire({
    text: 'הוסר מהמועדפים',
    confirmButtonText: 'ok',
    confirmButtonColor: '#E24B56',
    timer: 3000
  });
    }
 
    localStorage.setItem('users', JSON.stringify(user));
}

document.querySelectorAll('.heart').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.toggle('active'); 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let user = JSON.parse(localStorage.getItem('users'));
    let logged = JSON.parse(localStorage.getItem('logged-in'));
    let index = user.findIndex(user => user.username === logged.username);
    let users = user[index]

    users.likes.forEach(function(place) {
        // console.log(place)
        const element = document.getElementById(place);
        if (element) {
            element.classList.add('active');
        }
    });
});

function togglePopup(e) {
    e.preventDefault();
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var userLink = document.querySelector('.user-link');
    console.log(userLink);
    userLink.addEventListener('click', togglePopup);
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('logged-in');
    });
});

document.getElementById('searchField').addEventListener('input', function (e) {
    const searchValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.places');
    console.log(searchValue)
    listItems.forEach(item => {
        // console.log(item.querySelector('h1').textContent)
        // const name = item.querySelector('.title-bar .title-text h3').textContent.toLowerCase();
        const serviceTitle = item.querySelector('.title-bar .title-text').textContent;
        const desc = item.querySelector('h1').textContent;

        if (serviceTitle.includes(searchValue) || desc.includes(searchValue)) {
            item.style.display = 'inline-block'; // Display as flex container
            // item.style.flexDirection = 'row'; // Ensure row layout
        } else {
            item.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchValue = document.getElementById('searchField').value; //התוכן שהמשתמש הזין בחיפוש
    const listItems = document.querySelectorAll('.places'); //מערך של כל המערכים של המקומות
    console.log(listItems) 
    listItems.forEach(item => { //לולאה שעוברת על כל מערך
        // console.log(item.querySelector('h1').textContent)
        // const name = item.querySelector('.title-bar .title-text h3').textContent.toLowerCase();
        const serviceTitle = item.querySelector('.title-bar .title-text').textContent;//הכותרות של המקומות
        const desc = item.querySelector('h1').textContent;//הטקסקטים של המקומות

        if (serviceTitle.includes(searchValue) || desc.includes(searchValue)) {//בודק אם החיפוש נמצא 
            item.style.display = 'inline-block'; //הדיפולט להצגת דברים

        } else {
            item.style.display = 'none';//לא מציג
        }
    });
});