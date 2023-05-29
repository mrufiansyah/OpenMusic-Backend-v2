const routes = (handler) => [
  {
    method: 'POST',
    path: '/authentications',
    handler: handler.postAuthenticationsHandler,
  },
  {
    method: 'PUT',
    path: '/authentications',
    handler: handler.postAuthenticationsHandler,
  },
  {
    method: 'DELETE',
    path: '/authentications',
    handler: handler.postAuthenticationsHandler,
  },
];

module.exports = routes;
