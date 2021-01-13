# What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

### Advantages of GraphQL.

* Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are **fast** and **stable** because they control the data they get, not the server.
  
* GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a **single request.** Apps using GraphQL can be quick even on slow mobile network connections.
  
* GraphQL APIs are organized in terms of types and fields, not endpoints. Access the full capabilities of your data from a single endpoint. GraphQL uses types to ensure Apps only ask for what’s possible and provide clear and helpful errors. Apps can **use types to avoid writing manual parsing code.**

# Difference between GraphQL and Rest.?

* **Data Fectching with Rest vs GraphQL**

**In Rest API**, Users typically gather the data by accessing multiple endpoints.

![](https://imgur.com/VRyV7Jh.png)

**In GraphQL**, This can be achive by using single query.

![](https://imgur.com/z9VKnHs.png)

* **No more Over- and Underfetching**

One of the most common problems with REST is that of over- and underfetching. This happens because the only way for a client to download data is by hitting endpoints that return fixed data structures. It’s very difficult to design the API in a way that it’s able to provide clients with their exact data needs.

* **Insightful Analytics on the Backend**

GraphQL allows you to have fine-grained insights about the data that’s requested on the backend. As each client specifies exactly what information it’s interested in, it is possible to gain a deep understanding of how the available data is being used. This can for example help in evolving an API and deprecating specific fields that are not requested by any clients any more.

With GraphQL, you can also do low-level performance monitoring of the requests that are processed by your server. GraphQL uses the concept of resolver functions to collect the data that’s requested by a client. Instrumenting and measuring performance of these resolvers provides crucial insights about bottlenecks in your system.



# What is a GraphQL schema?
- GraphQL server uses a schema to describe the shape of your data graph. This schema defines a hierarchy of types with fields that are populated from your back-end data stores. The schema also specifies exactly which queries and mutations are available for clients to execute against your data graph.

# What are resolvers?
- A resolver is a function that resolves a value for a type or field in a schema. Resolvers can return objects or scalars like Strings, Numbers, Booleans, etc. If an Object is returned, execution continues to the next child field. If a scalar is returned execution completes.