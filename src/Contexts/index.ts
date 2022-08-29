import {createContext} from 'react';

export const AUthContext = createContext<any>({
  value: {},
  setValue: () => {},
});
