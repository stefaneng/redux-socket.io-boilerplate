import makeStore from './server/store';
import startServer from './server/server';

export const store = makeStore();

startServer(store);
