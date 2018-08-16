var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
	pict: src= "http://imgur.com/n8OYCzR.png"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny'
  },
  {
    id: 3,
    title: 'Gra tajemnic',
    desc: 'Film biograficzny'
  },
  {
    id: 4,
    title: 'Bogowie',
    desc: 'Film biograficzny'
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
	  React.createElement('image', {}, movie.pict)
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)	
 );
 
 ReactDOM.render(element, document.getElementById('app'));