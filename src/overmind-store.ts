
import { createOvermind, Action, IConfig } from "overmind";
import { createHook } from "overmind-react";


declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
type State = {
  count: number;
};

type StatePart = {
  state: State;
};

const increaseCount:Action<void, void> = ({ state }: StatePart) => {
  state.count++;
};

const decreaseCount:Action<void, void> = ({ state }: StatePart) => {
  state.count--;
};

export const config = {
  state: {
    count: 0,
  } as State,
  actions: {
    increaseCount,
    decreaseCount,
  },
};


// hook to provide access in components
export const useApp = createHook<typeof config>();
export const overmind = createOvermind(config);