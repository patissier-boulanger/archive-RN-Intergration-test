// auth.js
import {Response, Server} from 'miragejs';

export function authRoutes(server: Server) {
  server.post('/api/auth', (_, request) => {
    const {password} = JSON.parse(request.requestBody);

    if (password === '1234') {
      return new Response(200, {token: 'some token'});
    } else {
      return new Response(401);
    }
  });
}
