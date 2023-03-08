const inputForm = document.getElementById('input-form');

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('name').value;
  const userDob = document.getElementById('dob').value;
  const currentDate = new Date().toISOString().slice(0, 10)
  const data = {
    name: userName,
    dob: userDob
  };

  sessionStorage.setItem('birthdayData', JSON.stringify(data));

  const { dob } = JSON.parse(sessionStorage.getItem('birthdayData'));

  if(currentDate.slice(5) === dob.slice(5)) {
    window.location = 'birthday.html';
  } else {
    window.location = 'not-your-day.html';
  }
 
});