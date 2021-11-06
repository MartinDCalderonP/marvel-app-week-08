import { createContext, useReducer, useContext, ReactNode } from 'react';
import { Action, State, Context } from '../common/types';

const initialState = {
	count: 0,
};

const CounterContext = createContext<Context>({} as Context);

function counterReducer(state: State, action: Action) {
	switch (action) {
		case 'increment':
			return {
				...state,
				count: state.count + 1,
			};
		case 'decrement':
			return {
				...state,
				count: state.count - 1,
			};
		default:
			throw new Error();
	}
}

export function CounterProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(counterReducer, initialState);

	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
}

export function useCounter() {
	const context = useContext(CounterContext);

	if (!context) {
		throw new Error('useCounter must be used within a CounterProvider');
	}

	return context;
}
