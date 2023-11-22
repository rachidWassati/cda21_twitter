window.addEventListener('DOMContentLoaded', () => {
    const imageProfile = document.getElementById('profile-image');
    const inputAvatar = document.querySelector('#input-avatar');
    const formContainer = document.querySelector('#form-container');

    imageProfile.addEventListener('click', () => {
        inputAvatar.click();
    })

    inputAvatar.addEventListener('change', () => {
        formContainer.submit();
    })
})