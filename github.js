class Github {
    constructor() {
        this.client_id = "231c3fe1fa3ecad764da";
        this.client_secret = "f1c5870a942e70da8fb67e06a66f207b5bc6cc8e";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
                  `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
                );

        const repoResponse = await fetch(
                  `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
                );


        const profile = await profileResponse.json();
        const repos= await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}