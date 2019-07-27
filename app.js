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
        //Alert Error for only 3 seconds
        ui.displayAlert('User not found', 'alert alert-danger');
      } else {
        console.log(data);
        // Display User Profile
        ui.displayProfile(data.profile).then(data => {});
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile Data
    console.log('CLEAR PROFILE');
  }
});
