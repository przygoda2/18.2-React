var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://cdn.pixabay.com/photo/2016/09/02/22/59/harry-potter-1640525_1280.jpg'
    },
    {
        id: 2,
        title: 'Król lew',
        desc: 'Film o królu sawanny',
        image: 'https://media.gettyimages.com/photos/the-lion-guard-return-of-the-roar-the-epic-storytelling-of-disneys-picture-id494748808'
    },
    {
        id: 3,
        title: 'Rambo 1',
        desc: 'Narodziny Rambo',
        image: 'https://i.pinimg.com/originals/f5/33/9d/f5339dc841878e6479d9e8cff91942e3.jpg'
    },
    {
        id: 4,
        title: 'Rambo 2',
        desc: 'Powrót Rambo',
        image: 'http://www.twilight-zone.nl/WebRoot/Store/Shops/Twilightzone/5B2E/5B9A/C634/5673/F18A/515D/3429/06FA/rambo-3-quarter-scale-premium-statue-phicen-903654-02.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image, style: {width:"300px", height:"auto"}})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements),
        React.createElement('img')
    );

ReactDOM.render(element, document.getElementById('app'));

/*
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, 'Harry Potter'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );
*/