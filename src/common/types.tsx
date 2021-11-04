export type Action = 'increment' | 'decrement';
export type Dispatch = (action: Action) => void;
export type State = { count: number };
export type Context = { state: State; dispatch: Dispatch };
