// auth.js
import {Response, Server} from 'miragejs';

export function profileRoutes(server: Server) {
  server.post('/api/profile/age', (_, request) => {
    const {age} = JSON.parse(request.requestBody);

    if (age === '1234') {
      return new Response(200, {token: 'some token'});
    } else {
      return new Response(401);
    }
  });
}
