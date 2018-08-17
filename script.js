var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
	pict: "https://moustique.cdnartwhere.eu/sites/default/files/field/image/harry_potter.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
	pict: "https://vignette.wikia.nocookie.net/fanowska-krol-lew/images/5/55/Talia.png/revision/latest?cb=20170809093905&path-prefix=pl"
  },
  {
    id: 3,
    title: 'Gra tajemnic',
    desc: 'Film biograficzny',
	pict: "https://m.media-amazon.com/images/M/MV5BOTgwMzFiMWYtZDhlNS00ODNkLWJiODAtZDVhNzgyNzJhYjQ4L2ltYWdlXkEyXkFqcGdeQXVyNzEzOTYxNTQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    id: 4,
    title: 'Bogowie',
    desc: 'Film biograficzny',
	pict: "https://1.fwcdn.pl/po/43/78/694378/7632114.3.jpg"
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {alt:"film"}, movie.desc),
	  React.createElement('img', {src: movie.pict})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)	
 );
 
 ReactDOM.render(element, document.getElementById('app'));