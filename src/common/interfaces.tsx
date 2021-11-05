import { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface ICustomRoute {
	exact?: boolean;
	path: string;
	children: ReactNode;
}
