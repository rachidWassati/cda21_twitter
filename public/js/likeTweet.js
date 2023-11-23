window.addEventListener('DOMContentLoaded', () => {
    likeTweets();
})

const likeTweets = () => {
    const allLikeBtns = document.querySelectorAll('.fa-heart.clickable');

    allLikeBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            const tweetId = event.target.getAttribute('tweetid')
            axios.get(`/tweet/like/${tweetId}`)
                .then(response => {
                    btn.parentNode.parentNode.parentNode.innerHTML = response.data;
                    likeTweets();
                })
                .catch(error => console.log(error))
        })
    })
}