window.addEventListener('DOMContentLoaded', () => {
    const deleteBtns = document.querySelectorAll('.fa-trash')
    const tweetsContainer = document.getElementById('tweets-container')

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const tweetId = event.target.getAttribute('tweetId')
            axios.delete(`/tweet/${tweetId}`)
                    .then(response => {
                        btn.parentNode.parentNode.remove();
                    })
                    .catch(error => {
                        console.log(error)
                    })
        })
    })
})