//Init Github
const github = new Github;

//Init UI
const ui = new UI;


//Search Input
const searchUser = document.getElementById('searchUser');

//Search input event listner
searchUser.addEventListener('keyup', (e) => {
   //Get user input
    const  userText = e.target.value;

    if(userText !== ''){
        //Make a http call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //Show alert
                ui.showAlert('User not Found!!!', 'alert alert-danger');

            }else{
                //Show profile
                ui.showProfile(data.profile);

                //Show Repos
                ui.showRepos(data.repos);
            }
        })
    }else{
        //Clear Profile
        ui.clearProfile();
    }
});