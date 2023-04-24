import {createServer, Response} from 'miragejs';

export function startServer() {
  if (window.server) {
    server.shutdown();
  }

  window.server = createServer({
    routes() {
      this.get('/api/movies', () => {
        return new Response(
          400,
          {some: 'header'},
          {errors: ['name cannot be blank']},
        );
      });
    },
  });
}
