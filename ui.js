class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  async displayProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${
              user.html_url
            }" target="_blank" class ="btn btn-primary btn-block mb-4">View profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-primary">Following: ${
              user.following
            }</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  // Show User Repositories
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-secondary">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  clearAlert(className) {
    // Get First Child Element and check class
    const parent = document.querySelector('.search-container');
    const parentChild = parent.firstElementChild;
    // Check Class and Remove
    parentChild.classList.contains(className)
      ? parent.removeChild(parentChild)
      : null;
  }

  displayAlert(message, classes) {
    // Clear any Existing alerts
    this.clearAlert('alert-danger');
    // Create Element
    const div = document.createElement('div');
    // Add Bootstrap Alert Classes
    div.className = classes;
    // Create Alert text
    div.textContent = message;
    // Append to UI
    const searchContainer = document.querySelector('.search-container');
    searchContainer.insertBefore(div, searchContainer.firstChild);
    // Clear Alert after 3 Seconds
    setTimeout(() => this.clearAlert('alert-danger'), 3000);
  }
}
