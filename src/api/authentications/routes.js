const routes = (handler) => [
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
  },
  {
    method: 'DELETE',
    path: '/authentications',
    handler: handler.postAuthenticationHandler,
  },
];

module.exports = routes;
