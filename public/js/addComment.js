window.addEventListener('DOMContentLoaded', () => {
    addNewComment();
})


function addNewComment() {
    const commentsContainer = document.getElementById('comment-list');
    const form = document.getElementById('commentForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const tweetId = location.pathname.split('/')[2]
        
        const formData = new FormData(form);
        const entries = formData.entries();
        const data = Object.fromEntries(entries);

        const comment = JSON.stringify(data);
        console.log(comment)

        const response = await fetch(`/comment/new/${tweetId}`, {
            method: 'POST',
            body: comment,
            headers: {'Content-Type' : 'application/json'}
        })
        
        const card = await response.text()
        
        commentsContainer.insertAdjacentHTML('beforebegin', card)
    })
}