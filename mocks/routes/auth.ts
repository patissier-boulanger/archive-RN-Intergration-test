// auth.js
import {Response, Server} from 'miragejs';

export function moviesRoutes(server: Server) {
  server.get('/api/movies', () => {
    return new Response(200, {some: 'header'});
  });
}
