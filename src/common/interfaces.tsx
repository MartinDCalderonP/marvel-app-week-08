import { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface ICustomRoute {
	exact?: boolean;
	path: string;
	children: ReactNode;
}

export interface IUseFetch<T> {
	data: T | undefined;
	loading: boolean;
}

export interface ICard {
	id: number;
	name: string;
	thumbnail: string;
}
