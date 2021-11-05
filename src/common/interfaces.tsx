import { ReactNode } from 'react';

export interface ContextProviderProps {
	children: ReactNode;
}

export interface ICustomRoute {
	children: ReactNode;
	path: string;
}
