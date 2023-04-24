import {createServer, Server} from 'miragejs';
import {moviesRoutes} from './routes/auth';

let window: Window = {} as {
  server: Server;
};

export function startServer() {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      moviesRoutes(this);
    },
  });
}
