// Init GitHub
const github = new GitHub();

// Search Input
const searchUser = document.getElementById('search-user');

searchUser.addEventListener('keyup', e => {
  const searchString = e.target.value;

  if (searchString != '') {
    console.log(searchString);

    github.get(searchString).then(data => {
      if (data.profile.message == 'Not Found') {
        //Alert Error
        console.log('NOT FOUND');
      } else {
        console.log(data);
      }
    });
  } else {
    // Clear Profile Data
    console.log('CLEAR PROFILE');
  }
});
