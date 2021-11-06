import { ReactNode } from 'react';

export interface ICustomRoute {
	exact?: boolean;
	path: string;
	children: ReactNode;
}

export interface IUseFetch<T> {
	data: T | undefined;
	loading: boolean;
}

export interface ICardsContainer {
	className?: string;
	loading: boolean;
	posts: ICharacter[];
}

export interface IPaginationButtons {
	totalPosts: number;
	postsPerPage: number;
	paginate: (paginate: number) => void;
}

export interface ICard {
	id: number;
	name: string;
	thumbnail: string;
}

export interface ICharacter {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Thumbnail;
	resourceURI: string;
	comics: Comics;
	series: Comics;
	stories: Stories;
	events: Comics;
	urls: URL[];
}

export interface Comics {
	available: number;
	collectionURI: string;
	items: ComicsItem[];
	returned: number;
}

export interface ComicsItem {
	resourceURI: string;
	name: string;
}

export interface Stories {
	available: number;
	collectionURI: string;
	items: StoriesItem[];
	returned: number;
}

export interface StoriesItem {
	resourceURI: string;
	name: string;
	type: Type;
}

export enum Type {
	Cover = 'cover',
	InteriorStory = 'interiorStory',
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface URL {
	type: string;
	url: string;
}

export interface ISuggestionsList {
	searchedTerm: string;
	suggestionSelected: (suggestionSelected: string) => void;
	closeSuggestions: (closeSuggestions: boolean) => void;
	pressedKey: any;
}
