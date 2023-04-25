// auth.js
import {Response, Server} from 'miragejs';

export function moviesRoutes(server: Server) {
  server.get('/api/movies', () => {
    return new Response(200, {some: 'header'});
  });

  server.post('/api/auth', (_, request) => {
    const {password} = JSON.parse(request.requestBody);

    if (password === '12345') {
      return new Response(200, {token: 'some token'});
    } else {
      return new Response(401);
    }
  });
}
