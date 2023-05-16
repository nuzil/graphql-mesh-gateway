"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[6945],{44842:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return h}});var r,l=a(87462),m=a(63366),o=(a(15007),a(64983)),t=a(91515),i=["components"],d={},p=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),s={_frontmatter:d},u=t.Z;function h(e){var n=e.components,a=(0,m.Z)(e,i);return(0,o.mdx)(u,(0,l.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-source-handlers"},"Add source handlers"),(0,o.mdx)("p",null,"API Mesh for Adobe Developer App Builder only supports the following ",(0,o.mdx)("a",{parentName:"p",href:"source-handlers.md"},"source handlers"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#openapi"},"OpenAPI"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#api-handler-configuration"},"API Handler Configuration")))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#graphql-endpoints"},"GraphQL endpoints"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#graphql-handler-configuration"},"GraphQL Handler Configuration")))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#json-schemas"},"JSON schemas"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#json-schema-handler-configuration"},"JSON Schema Handler Configuration"))))),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"We will add support for additional handlers in future releases."),(0,o.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Only alphanumerical characters are allowed in source handler names."),(0,o.mdx)("h2",{id:"openapi"},"OpenAPI"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/openapi.md"},"OpenAPI")," handler allows you to connect to an OpenAPI-complaint REST service endpoint or static Swagger schemas using a ",(0,o.mdx)("inlineCode",{parentName:"p"},".json")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},".yaml")," file."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "CommerceREST",\n        "handler": {\n          "openapi": {\n            "source": "your_Commerce_API"\n          }\n        },\n      }\n    ]\n  },\n}\n')),(0,o.mdx)("h3",{id:"api-handler-configuration"},"API Handler Configuration"),(0,o.mdx)("p",null," The API Mesh currently supports the following configuration options for API handlers."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"source")," - Your API source or endpoint"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"sourceFormat")," - The format of the source file (",(0,o.mdx)("inlineCode",{parentName:"li"},"json")," | ",(0,o.mdx)("inlineCode",{parentName:"li"},"yaml"),")"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"schemaHeaders")," - JSON Headers to fetch your schema"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"operationHeaders")," - JSON headers for your API calls"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"baseUrl")," - Your base URL"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"qs")," - JSON object for query search parameters"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"includeHttpDetails")," - A boolean flag to include HTTP Response details")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/openapi.md#config-api-reference"},"OpenAPI Config API Reference"),"."),(0,o.mdx)("h2",{id:"graphql-endpoints"},"GraphQL endpoints"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/graphql.md"},"GraphQL")," handler allows you to connect to a GraphQL endpoint."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "PWA",\n        "handler": {\n          "graphql": {\n            "endpoint": "your_Venia_url"\n          }\n        }\n      },\n      {\n        "name": "AEM",\n        "handler": {\n          "graphql": {\n            "endpoint": "<your_AEM_url>"\n          }\n        }\n      }\n    ]\n  },\n}\n')),(0,o.mdx)("h3",{id:"graphql-handler-configuration"},"GraphQL Handler Configuration"),(0,o.mdx)("p",null," The API Mesh currently supports the following configuration options for GraphQL handlers."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"endpoint")," - The URL or path of your GraphQL endpoint"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"schemaHeaders")," - JSON Headers to fetch your schema"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"operationHeaders")," - JSON headers for your calls"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"useGETForQueries")," - A boolean option to use HTTP GET"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"method")," - HTTP method used (",(0,o.mdx)("inlineCode",{parentName:"li"},"GET")," | ",(0,o.mdx)("inlineCode",{parentName:"li"},"POST"),")")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/graphql.md#config-api-reference"},"GraphQL Config API Reference"),"."),(0,o.mdx)("h2",{id:"json-schemas"},"JSON schemas"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/json-schema.md"},"JSON")," handler allows you to load a single remote REST endpoint and define the request and response structures using pre-defined JSON schema files."),(0,o.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"JsonSchema")," source in GraphQL Mesh uses a different capitalization scheme than other handlers. Using ",(0,o.mdx)("inlineCode",{parentName:"p"},"jsonSchema")," will result in an error."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n      "sources": [\n          {\n              "name": "carts",\n              "handler": {\n                  "JsonSchema": {\n                      "baseUrl": "<your_Commerce_url>",\n                      "operations": [\n                          {\n                              "type": "Query",\n                              "field": "data",\n                              "path": "/cart",\n                              "method": "GET",\n                              "responseSchema": "./carts-response-schema.json"\n                          }\n                      ]\n                  }\n              }\n          }\n      ]\n  },\n}\n')),(0,o.mdx)("h3",{id:"json-schema-handler-configuration"},"JSON Schema Handler Configuration"),(0,o.mdx)("p",null," The API Mesh currently supports the following configuration options for JSON Schema handlers."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"baseurl")," - The URL or path of your JSON Schema"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"schemaHeaders")," - JSON Headers to fetch your schema"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"operationHeaders")," - JSON headers for your calls"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"operations")," - An array that contains:",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"field"),(0,o.mdx)("li",{parentName:"ul"},"description"),(0,o.mdx)("li",{parentName:"ul"},"type (",(0,o.mdx)("inlineCode",{parentName:"li"},"Query")," | ",(0,o.mdx)("inlineCode",{parentName:"li"},"Mutation")," | ",(0,o.mdx)("inlineCode",{parentName:"li"},"Subscription"),")"),(0,o.mdx)("li",{parentName:"ul"},"requestSchema"),(0,o.mdx)("li",{parentName:"ul"},"requestSample"),(0,o.mdx)("li",{parentName:"ul"},"requestTypeName"),(0,o.mdx)("li",{parentName:"ul"},"requestBaseBody - This body will merge with the request body sent with the HTTP request"),(0,o.mdx)("li",{parentName:"ul"},"responseSchema"),(0,o.mdx)("li",{parentName:"ul"},"responseSample"),(0,o.mdx)("li",{parentName:"ul"},"responseTypeName"),(0,o.mdx)("li",{parentName:"ul"},"argTypeMap"),(0,o.mdx)("li",{parentName:"ul"},"pubsubTopic"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"ignoreErrorResponses")," - A Boolean option to ignore errors")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For more information, see the ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/handlers/json-schema.md#config-api-reference"},"JSON Schema Config API Reference"),"."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-source-handlers-md-8cfdb3a282d4affd3774.js.map