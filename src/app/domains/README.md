This is used for shared integration entities grouped by domain, noted as module in terms of angular

- services (api)
- models 
- facades (middlewares)
- guards ( as they are part of auth domain)
- mocks ( yes mocks, bcz they are mocking backend response so we maintain realistic approach)

If you will Redux/ngrx use same domain folder to add
- state
- reducer
- middleware
- actions
- selectors