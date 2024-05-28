"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[7369],{17107:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return x}});var i=a(87462),m=a(45987),t=(a(35776),a(3905)),r=a(91515);const l=["components"],d={},p={_frontmatter:d},o=r.Z;function x(e){let{components:n}=e,a=(0,m.Z)(e,l);return(0,t.mdx)(o,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"federation-transform"},(0,t.mdx)("inlineCode",{parentName:"h1"},"federation")," transform"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"federation")," transform allows you to add resolvers and directives to conform to the federation specification. Much of the federation source code could be reused to ensure that it is compliant to the specification. This transform uses the ",(0,t.mdx)("a",{parentName:"p",href:"https://github.com/0xR/graphql-transform-federation"},(0,t.mdx)("inlineCode",{parentName:"a"},"graphql-transform-federation"))," package."),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("p",null,"Add the following configuration to your Mesh config file:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "transforms": [\n    {\n      "federation": {\n        "types": [\n          {\n            "name": "Query",\n            "config": {\n              "extend": true\n            }\n          },\n          {\n            "name": "Product",\n            "config": {\n              "extend": true,\n              "key": {\n                "Fields": [\n                  "id"\n              ],\n            },\n              "fields": [\n                {\n                  "name": "id",\n                  "external": true\n                }\n              ],\n              "resolveReference": {\n                "queryFieldName": "user"\n              }\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n\n')),(0,t.mdx)("h3",{id:"add-reference-resolver-as-a-code-file"},"Add Reference Resolver as a Code File"),(0,t.mdx)("p",null,"To add more complex business logic, you can point to a code file that exports a resolver function."),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "resolveReference": "https://my-site.com/userResolveReference.js"\n}\n')),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"./userResolveReference.js")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"// So we can point to an existing query field to resolve that entity\nexport default function (root, context, info)  {\n  return context.accounts.Query.user({ root, args: { id: root.id }, context, info })\n}\n")),(0,t.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"types")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Array of Object"),", required):"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"name")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"String"),", required)")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"config")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Object"),"):"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"key")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Array of Object"),"):"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"fields")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"shareable")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Boolean"),")")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"extend")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Boolean"),")")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"fields")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"Array of Object"),", required):"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"name")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),", required)"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"config")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"Object"),", required):",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"external")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"provides")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"fields")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"requires")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"fields")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"tag")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"Object"),"):",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"name")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"inaccessible")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"Boolean"),")"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"override")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"Object"),"):",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"from")," (type: ",(0,t.mdx)("inlineCode",{parentName:"li"},"String"),")"))))))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"resolveReference")," - One of the following:"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"String"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"object"),":"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"queryFieldName")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"String"),", required) - Name of root field name that resolves the reference")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"args")," (type: ",(0,t.mdx)("inlineCode",{parentName:"p"},"JSON"),") - Configure the arguments for the field:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "args": {\n        "someArg": "{root.someKeyValue}"\n    }\n}\n')))))))))))))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-transforms-federation-md-83e79ea14570d746bfbb.js.map