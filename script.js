const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
        const config = {
            headers: {
                'Accept': 'application/JSON'
        }
    }
    
    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();
    jokeEl.innerHTML = data.joke;

}

//USING .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept': 'application/JSON'
//     }
// }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(resp => resp.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     })
        
//}