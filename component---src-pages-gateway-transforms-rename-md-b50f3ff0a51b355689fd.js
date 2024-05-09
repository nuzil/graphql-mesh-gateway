"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[8325],{9191:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return x}});var r=a(87462),i=a(45987),m=(a(35776),a(3905)),t=a(91515);const l=["components"],o={},d=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)});var p;const s={_frontmatter:o},u=t.Z;function x(e){let{components:n}=e,a=(0,i.Z)(e,l);return(0,m.mdx)(u,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"rename-transform"},(0,m.mdx)("inlineCode",{parentName:"h1"},"rename")," transform"),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"rename")," transforms allow you to rename a GraphQL field, type, or field argument. Renaming allows you to avoid conflicting names, simplify complicated names, and make queries look more like mutations. In the example below, we rename a long API field name from ",(0,m.mdx)("inlineCode",{parentName:"p"},"integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost")," to the shorter ",(0,m.mdx)("inlineCode",{parentName:"p"},"CreateCustomerToken"),"."),(0,m.mdx)("p",null,(0,m.mdx)("inlineCode",{parentName:"p"},"rename")," elements can contain arrays of individual renaming operations, defined in separate ",(0,m.mdx)("inlineCode",{parentName:"p"},"renames")," objects. Each of these objects must define the ",(0,m.mdx)("inlineCode",{parentName:"p"},"from")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"to")," values."),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"You can use ","[RegEx flags]"," to enable the use of regular expressions when renaming using this transform. For example, you could use the key-value pair ",(0,m.mdx)("inlineCode",{parentName:"p"},"field: api(.*)")," in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"from"),' object to rename any field of the corresponding type that begins with "api".'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "CommerceREST",\n        "handler": {\n          "openapi": {\n            "source": "https://www.example.com/rest/all/schema?services=all"\n          }\n        },\n          "transforms": [\n            {\n              "rename": {\n              "renames": [\n                {\n                  "from": {\n                    "type": "Mutation",\n                    "field": "integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost"\n                  },\n                  "to": {\n                    "type": "Mutation",\n                    "field": "CreateCustomerToken"\n                  }\n                }\n              ]\n            }\n          }\n        ]\n      }\n    ]\n  },\n}\n')),(0,m.mdx)("h2",{id:"usage"},"Usage"),(0,m.mdx)("p",null,"The following example renames the ",(0,m.mdx)("inlineCode",{parentName:"p"},"currency")," query field to ",(0,m.mdx)("inlineCode",{parentName:"p"},"currencyType")," in the Adobe Commerce source:"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "AdobeCommerce",\n        "transforms": [\n          {\n            "rename": {\n              "renames": [\n                {\n                  "from": {\n                    "type": "Query",\n                    "field": "currency"\n                  },\n                  "to": {\n                    "type": "Query",\n                    "field": "currencyType"\n                  }\n                }\n              ]\n            }\n          }\n        ],\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"The ",(0,m.mdx)("inlineCode",{parentName:"p"},"type")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"field")," values are required when renaming a field ",(0,m.mdx)("inlineCode",{parentName:"p"},"argument"),"."),(0,m.mdx)("p",null,"You can use RegEx flags to enable the use of regular expressions when renaming using this transform. This way you can rename multiple types, fields, or both."),(0,m.mdx)("p",null,"For example, you could use the key-value pair field: ",(0,m.mdx)("inlineCode",{parentName:"p"},"Api(.*)")," in the ",(0,m.mdx)("inlineCode",{parentName:"p"},"from"),' object to rename any field of the corresponding type that begins with "api".'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "rename": {\n      "mode": "bare | wrap",\n      "renames": [\n        {\n          "from": {\n            "type": "Api(.*)"\n          },\n          "to": {\n            "type": "$1"\n          },\n          "useRegExpForTypes": true\n        },\n        {\n          "from": {\n            "type": "Query",\n            "field": "api(.*)"\n          },\n          "to": {\n            "type": "Query",\n            "field": "$1"\n          },\n          "useRegExpForFields": true\n        }\n      ]\n    }\n  }\n]\n')),(0,m.mdx)(d,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,m.mdx)("p",null,"For information about ",(0,m.mdx)("inlineCode",{parentName:"p"},"bare")," and ",(0,m.mdx)("inlineCode",{parentName:"p"},"wrap")," modes, read the ",(0,m.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/index.md#two-different-modes"},"dedicated section"),"."),(0,m.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"mode")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String")," (",(0,m.mdx)("inlineCode",{parentName:"li"},"bare")," | ",(0,m.mdx)("inlineCode",{parentName:"li"},"wrap"),")) - Specify to apply ",(0,m.mdx)("inlineCode",{parentName:"li"},"rename")," transforms to bare schema or by wrapping original schema"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"renames")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Array of Object"),", required) - Array of ",(0,m.mdx)("inlineCode",{parentName:"li"},"rename")," rules:",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"from")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Object"),", required):",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"argument")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"to")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Object"),", required):",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"type")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"field")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"argument")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"useRegExpForTypes")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Boolean"),")  - Use Regular Expression for type names"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"useRegExpForFields")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Boolean"),")  - Use Regular Expression for field names"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"useRegExpForArguments")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"Boolean"),")  - Use Regular Expression for field names"),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"regExpFlags")," (type: ",(0,m.mdx)("inlineCode",{parentName:"li"},"String"),") - Flags to use in the Regular Expression")))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-transforms-rename-md-b50f3ff0a51b355689fd.js.map