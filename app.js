const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
		'X-RapidAPI-Key': '5e4570244bmsh9542fd2ff48b401p15a947jsnb0ea2339967b'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=spiderman', options)
	.then(response => response.json())
	.then(data => {
        // console.log(data) 
        const arrayMovies = data.d
        arrayMovies.map((e)=>{
            const title = e.l 
            const img = e.i.imageUrl
            const cast = e.s

            const poster = `
              <div>
                  <img src = "${img}"/>
                  <h2>${title}</h2>
                  <small>${cast}</small>
              </div>
            `
            document.getElementById('container').innerHTML += poster

            
        })
        
    })
	.catch(err => console.error(err));