let menuContainer


window.addEventListener('click', () => {
    menuContainer.innerHTML = ''
})

window.addEventListener('DOMContentLoaded', () => {
    menuContainer = document.getElementById('search-menu-container');
    menuContainer.addEventListener('click', (e) => {
        e.stopPropagation();
    })

    const searchInput = document.getElementById('search-input');
    let ref;

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value;
        if(ref) {
            clearTimeout(ref)
        }
        if(value.length) {
            ref = setTimeout(() => {
                axios.get(`/user?search=${value}`)
                    .then(({ data }) => {
                        menuContainer.innerHTML = data;
                    })
                    .catch(error => console.log(error))
            }, 1000)
        } else {
            menuContainer.innerHTML = ''
        }
    })

})
