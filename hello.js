fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((data) => {
    document.getElementById('p').innerHTML = data.title;
})
.catch(err => console.log(err))