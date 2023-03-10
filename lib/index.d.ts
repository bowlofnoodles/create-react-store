import { ProviderProps } from 'react';
declare function createStore<T extends Record<string, any>>(
  getValueFunc: () => T
): {
  useStore: () => T;
  Provider: (props: Partial<ProviderProps<T>>) => JSX.Element;
};
export default createStore;
