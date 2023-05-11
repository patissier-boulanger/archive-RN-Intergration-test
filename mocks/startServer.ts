import {createServer, Server} from 'miragejs';
import {authRoutes} from './routes/auth';
import {profileRoutes} from './routes/profile';

let window: Window = {} as {
  server: Server;
};

export function startServer() {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      authRoutes(this);
      profileRoutes(this);
    },
  });
}
