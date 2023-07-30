const movies = [
	{
		name: "Spiderman",
		year: 2002,
		director: "Sam Raimi",
		picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd4%2Fac%2Fc8%2Fd4acc863d31ab88d4a508976c22162de.jpg&tbnid=_tb7PCpG0qX8CM&vet=12ahUKEwiIzP2ZgreAAxUsm4QIHZAXDk0QMygKegUIARCMAg..i&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F635922409876054658%2F&docid=M2h_A6pfzjwpCM&w=687&h=1280&q=spiderman%201%20pictures&ved=2ahUKEwiIzP2ZgreAAxUsm4QIHZAXDk0QMygKegUIARCMAg"
	},
	{
		name: "Scream",
		year: 1996,
		director: "Wes Craven",
		picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pcmag.com%2Fimagery%2Farticles%2F046lURcqm85v8kSTVGdsnwT-1..v1678733058.jpg&tbnid=xuTk2QEzFjk0NM&vet=12ahUKEwjnoYS2greAAxUrTjABHSptAcEQMygaegUIARCmAg..i&imgrefurl=https%3A%2F%2Fwww.pcmag.com%2Fhow-to%2Fhow-to-stream-all-scream-movies&docid=XbSyszpXBIrQ2M&w=1280&h=720&q=scream%201%20movie%20picture&ved=2ahUKEwjnoYS2greAAxUrTjABHSptAcEQMygaegUIARCmAg"
	},
	{
		name: "Mean Girls",
		year: 2004,
		director: "Mark Waters",
		picture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fntvb.tmsimg.com%2Fassets%2Fp34319_v_h8_av.jpg%3Fw%3D960%26h%3D540&tbnid=iphU3oRHS40QjM&vet=12ahUKEwj-jd7TgreAAxX2l4QIHXuZB1YQMygpegUIARCyAg..i&imgrefurl=https%3A%2F%2Fwww.tvinsider.com%2Fshow%2Fmean-girls%2F&docid=C3vibg22pu1DTM&w=960&h=540&q=mean%20girls&ved=2ahUKEwj-jd7TgreAAxX2l4QIHXuZB1YQMygpegUIARCyAg"
	}
];

const movieList = movies.map(movie => {
	const li = document.createElement('li');
	const img = document.createElement('img');
	const title = document.createElement('h2');
	const year = document.createElement('p');
	const director = document.createElement('p');

	img.src = movie.picture;
	img.alt = `${movie.name} poster`;
	title.textContent = movie.name;
	year.textContent = `Year: ${movie.year}`;
	director.textContent = `Director: ${movie.director}`;

	li.appendChild(img);
	li.appendChild(title);
	li.appendChild(year);
	li.appendChild(director);

	return li;
});

const ol = document.querySelector('ol');
movieList.forEach(movie => {
	ol.appendChild(movie);
});
  