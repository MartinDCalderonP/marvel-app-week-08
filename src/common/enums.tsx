export enum paths {
	home = '/home',
	characters = '/characters',
	comics = '/comics',
	stories = '/stories',
	search = '/search_query=',
	page = '&page=',
	comic = '&comic=',
	story = '&story=',
}

export enum API {
	charactersUrl = 'https://gateway.marvel.com/v1/public/characters',
	comicsUrl = 'https://gateway.marvel.com/v1/public/comics',
	storiesUrl = 'https://gateway.marvel.com/v1/public/stories',
	limit = 'limit=',
	offset = 'offset=',
	search = 'nameStartsWith=',
	comics = 'comics=',
	stories = 'stories=',
}
