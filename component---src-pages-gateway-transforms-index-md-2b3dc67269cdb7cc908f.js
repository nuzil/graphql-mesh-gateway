"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[5141],{35350:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return p}});var r=a(87462),t=a(45987),m=(a(35776),a(3905)),l=a(91515);const d=["components"],o={},i={_frontmatter:o},s=l.Z;function p(e){let{components:n}=e,a=(0,t.Z)(e,d);return(0,m.mdx)(s,(0,r.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"transforms"},"Transforms"),(0,m.mdx)("p",null,"While ",(0,m.mdx)("a",{parentName:"p",href:"../handlers/index.md"},"handlers")," let you bring outside sources into API Mesh for Adobe Developer App Builder, transforms allow you to modify the schema to control the contents of your GraphQL requests and responses."),(0,m.mdx)("p",null,"Transforms are specified as a list of objects, and they are executed in order. You can apply them ",(0,m.mdx)("a",{parentName:"p",href:"#handler-vs-mesh-transforms"},"to a specific handler or the entire mesh"),"."),(0,m.mdx)("h2",{id:"transforms-available"},"Transforms available"),(0,m.mdx)("p",null,"API Mesh currently supports the following ","[transforms]",":"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./rename.md"},"Rename")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./prefix.md"},"Prefix")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./filter-schema.md"},"Filter Schema")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./replace-field.md"},"Replace Field")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./type-merging.md"},"Type Merging")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./naming-convention.md"},"Naming Convention")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"../hooks.md"},"Hooks"))),(0,m.mdx)("p",null,"Additionally, the following transforms are available but are not fully supported by API Mesh at this time. This means that your mesh will accept the transform, but we have not tested the transform thoroughly, and you could encounter errors. Additionally, certain transform options may be disabled due to security concerns."),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./encapsulate.md"},"Encapsulate")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./federation.md"},"Federation")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"./replace-field.md#scope-hoistvalue"},"Hoist field"))),(0,m.mdx)("p",null,"Other transforms are not supported."),(0,m.mdx)("h2",{id:"handler-vs-mesh-transforms"},"Handler vs mesh transforms"),(0,m.mdx)("p",null,"When adding a transform to your mesh, you can choose to have the transform affect a single source (handler) or the entire mesh. The following examples use ",(0,m.mdx)("a",{parentName:"p",href:"./prefix.md"},(0,m.mdx)("inlineCode",{parentName:"a"},"prefix")," transforms"),", which are the preferred method of avoiding conflicting object names across multiple schemas."),(0,m.mdx)("p",null,"The following example uses the ",(0,m.mdx)("inlineCode",{parentName:"p"},"prefix"),' transform to prefix "REST_" to all queries and mutations from the REST source.'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "REST",\n        "handler": {\n          "openapi": {\n            "source": "https://venia.magento.com/rest/all/schema"\n          }\n        },\n        "transforms": [\n          {\n            "prefix": {\n              "includeRootOperations": true,\n              "value": "REST_"\n            }\n          }\n        ]\n      },\n      {\n        "name": "GraphQL",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,m.mdx)("p",null,"Conversely, the following example uses ",(0,m.mdx)("inlineCode",{parentName:"p"},"prefix"),' to apply the "ADOBE_" prefix to every source in the mesh.'),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "REST",\n        "handler": {\n          "openapi": {\n            "source": "https://venia.magento.com/rest/all/schema"\n          }\n        }\n      },\n      {\n        "name": "GraphQL",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        }\n      }\n    ],\n    "transforms": [\n      {\n        "prefix": {\n          "includeRootOperations": true,\n          "value": "ADOBE_"\n        }\n      }\n    ]\n  }\n}\n')),(0,m.mdx)("h2",{id:"working-with-transforms"},"Working with transforms"),(0,m.mdx)("p",null,"When working with transforms, consider the following:"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Transforms are processed in order"),(0,m.mdx)("li",{parentName:"ul"},"Having many transforms in a mesh should not impact performance"),(0,m.mdx)("li",{parentName:"ul"},"Transforms at the mesh level will impact ",(0,m.mdx)("inlineCode",{parentName:"li"},"additionalResolvers"))),(0,m.mdx)("h3",{id:"transform-order"},"Transform order"),(0,m.mdx)("p",null,"The following transform will fail. The mesh will not find the ",(0,m.mdx)("inlineCode",{parentName:"p"},"Customer")," type to filter by, because the ",(0,m.mdx)("inlineCode",{parentName:"p"},"namingConvetion")," transform converted it to lowercase (",(0,m.mdx)("inlineCode",{parentName:"p"},"customer"),"):"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-json"},'...\n    "transforms": [\n      {\n        "namingConvention": {\n          "typeNames": "lowerCase",\n        }\n      },\n      {\n        "filterSchema": [\n          "Query.Customer"\n        ]\n      }\n    ]\n...\n')),(0,m.mdx)("h3",{id:"transforms-and-additionalresolvers"},"Transforms and ",(0,m.mdx)("inlineCode",{parentName:"h3"},"additionalResolvers")),(0,m.mdx)("p",null,"Use caution when applying mesh-level transforms; modifying the schema at this level will impact any ",(0,m.mdx)("inlineCode",{parentName:"p"},"additionalResolvers"),". For example, if you use ",(0,m.mdx)("inlineCode",{parentName:"p"},"filterSchema")," to remove a type, an ",(0,m.mdx)("inlineCode",{parentName:"p"},"additionalResolver")," will not be able to access that type."),(0,m.mdx)("h2",{id:"versions"},"Versions"),(0,m.mdx)("p",null,"The following table specifies the GraphQL Mesh versions of each transform supported by API Mesh for Adobe Developer App Builder:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Transform"),(0,m.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./encapsulate.md"},"encapsulate")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.4.21"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./federation.md"},"federation")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.11.14"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./filter-schema.md"},"filterSchema")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.15.23"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./naming-convention.md"},"namingConvention")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.13.22"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./prefix.md"},"prefix")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.12.22"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./rename.md"},"rename")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.14.22"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./replace-field.md"},"replaceField")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.4.20"))),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("a",{parentName:"td",href:"./type-merging.md"},"typeMerging")),(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"0.5.20"))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-transforms-index-md-2b3dc67269cdb7cc908f.js.map