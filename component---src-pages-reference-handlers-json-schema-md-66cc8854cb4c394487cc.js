"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[7495],{58179:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return h}});var r,t=a(87462),i=a(63366),m=(a(15007),a(64983)),l=a(91515),p=["components"],d={},o=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),s={_frontmatter:d},u=l.Z;function h(e){var n=e.components,a=(0,i.Z)(e,p);return(0,m.mdx)(u,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"json-schema-handlers"},"JSON schema handlers"),(0,m.mdx)("p",null,"This handler allows you to load any remote REST service, and describe its request/response. With this handler, you can easily customize and control the built GraphQL schema."),(0,m.mdx)("p",null,"For more information on creating JSON schemas, refer to this ",(0,m.mdx)("a",{parentName:"p",href:"https://json-schema.org/learn/getting-started-step-by-step.html"},"JSON schema tutorial"),"."),(0,m.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"JsonSchema")," source in GraphQL Mesh uses a different capitalization scheme than other handlers. Using ",(0,m.mdx)("inlineCode",{parentName:"p"},"JsonSchema")," will result in an error."),(0,m.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"JSON schema handlers do not support ",(0,m.mdx)("inlineCode",{parentName:"p"},"responseConfig")," functionality."),(0,m.mdx)("p",null,"To get started, use the handler in your Mesh config file:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyApi",\n      "handler": {\n        "JsonSchema": {\n          "baseUrl": "https://some-service-url/endpoint-path/",\n          "operations": [\n            {\n              "type": "Query",\n              "field": "users",\n              "path": "/users",\n              "method": "GET",\n              "responseSchema": "https://my-json-schema/users.json"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,m.mdx)("p",null,"JSON Schema handlers can also use local sources, see ",(0,m.mdx)("a",{parentName:"p",href:"../handlers/index.md#reference-local-files-in-handlers"},"Reference local file handlers")," for more information."),(0,m.mdx)("h2",{id:"headers-from-context"},"Headers from context"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "MyGraphQLApi",\n      "handler": {\n        "JsonSchema": {\n          "baseUrl": "https://some-service-url/endpoint-path/",\n          "operationHeaders": {\n            "Authorization": "Bearer {context.headers[\'x-my-api-token\']}"\n          }\n        }\n      }\n    }\n  ]\n}\n')),(0,m.mdx)("h2",{id:"query-parameters"},"Query Parameters"),(0,m.mdx)("p",null,"There are a few methods to define the query parameters, select the one that fits your needs (or combine them):"),(0,m.mdx)("h3",{id:"auto-declare"},"Auto declare"),(0,m.mdx)("p",null,"The mesh automatically generates arguments for operations if needed. Arguments are generated as nullable strings by default."),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "MyGraphQLApi",\n            "handler": {\n                "JsonSchema": {\n                    "baseUrl": "https://some-service-url/endpoint-path/",\n                    "operations": [\n                        {\n                            "type": "Query",\n                            "field": "user",\n                            "path": "/user?id={args.id}",\n                            "method": "GET",\n                            "responseSchema": "./json-schemas/user.json"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n')),(0,m.mdx)("h3",{id:"manual-declare"},"Manual declare"),(0,m.mdx)("p",null,"You can define the arguments of the operation using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"argTypeMap")," config field, according to the JSON Schema spec."),(0,m.mdx)("p",null,"In this example, we declare a ",(0,m.mdx)("inlineCode",{parentName:"p"},"page")," argument as an object with ",(0,m.mdx)("inlineCode",{parentName:"p"},"limit")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"offset")," properties:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "argTypeMap": {\n        "page": {\n            "type": "object",\n            "properties": {\n                "limit": {\n                    "type": "number"\n                },\n                "offset": {\n                    "type": "number"\n                }\n            }\n        }\n    }\n}\n')),(0,m.mdx)("p",null,"In addition, especially for non-primitive types, the arguments should be added to the path using the ",(0,m.mdx)("inlineCode",{parentName:"p"},"queryParamArgMap")," config field."),(0,m.mdx)("p",null,"Here we add the ",(0,m.mdx)("inlineCode",{parentName:"p"},"page")," argument to the query parameters:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "queryParamArgMap": {\n        "page": "page"\n    }\n}\n')),(0,m.mdx)("p",null,"And here is the final config:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "sources": [\n        {\n            "name": "MyGraphQLApi",\n            "handler": {\n                "JsonSchema": {\n                    "baseUrl": "https://some-service-url/endpoint-path/",\n                    "operations": [\n                        {\n                            "type": "Query",\n                            "field": "users",\n                            "path": "/getUsers",\n                            "method": "GET",\n                            "responseSample": "./jsons/MyField.response.json",\n                            "responseTypeName": "MyResponseName",\n                            "argTypeMap": {\n                                "page": {\n                                    "type": "object",\n                                    "properties": {\n                                        "limit": {\n                                            "type": "number"\n                                        },\n                                        "offset": {\n                                            "type": "number"\n                                        }\n                                    }\n                                }\n                            },\n                            "queryParamArgMap": {\n                                "page": "page"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n')),(0,m.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"baseUrl")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"operationHeaders")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"schemaHeaders")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"operations")," - (required) Array of:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"object"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),", required)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"description")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String (Query | Mutation | Subscription)"),", required)"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestSchema")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestSample")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"requestTypeName")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseSchema")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseSample")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Any"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"responseTypeName")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"argTypeMap")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"JSON"),")"))))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"ignoreErrorResponses")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Boolean"),")")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-handlers-json-schema-md-66cc8854cb4c394487cc.js.map