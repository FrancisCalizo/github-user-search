// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search Input
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', e => {
  const searchString = e.target.value;

  if (searchString != '') {
    github.get(searchString).then(data => {
      if (data.profile.message == 'Not Found') {
        //Alert Error
        console.log('NOT FOUND');
      } else {
        console.log(data.profile);
        ui.displayProfile(data.profile).then(data => {});
      }
    });
  } else {
    // Clear Profile Data
    console.log('CLEAR PROFILE');
  }
});
