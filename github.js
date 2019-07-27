class GitHub {
  constructor() {
    this.clientID = '9f8bb57912b03724b492';
    this.clientSecret = '5f136a5f80facf365c51b1c76fc94419be6fc40e';
  }

  async get(user) {
    const userPromise = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.clientID
      }&client_secret=${this.clientSecret}`
    );

    const profile = await userPromise.json();

    const repoPromise = await fetch(
      `https://api.github.com/users/${user}/repos?sort=created?client_id=${
        this.clientID
      }&client_secret=${this.clientSecret}`
    );

    const repos = await repoPromise.json();

    return {
      profile,
      repos
    };
  }
}
