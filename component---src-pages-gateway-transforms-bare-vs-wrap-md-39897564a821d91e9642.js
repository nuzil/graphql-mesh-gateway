"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[9905],{80476:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return c}});var r=n(87462),t=n(45987),o=(n(35776),n(3905)),m=n(91515);const i=["components"],d={},s=(p="InlineAlert",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var p;const l={_frontmatter:d},h=m.Z;function c(e){let{components:a}=e,n=(0,t.Z)(e,i);return(0,o.mdx)(h,(0,r.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"bare-vs-wrap-transforms"},(0,o.mdx)("inlineCode",{parentName:"h1"},"bare")," vs ",(0,o.mdx)("inlineCode",{parentName:"h1"},"wrap")," transforms"),(0,o.mdx)("p",null,"By default, most transforms work by wrapping the original schema. ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode replaces the original schema with the transformed one."),(0,o.mdx)("p",null,"Although both ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," modes achieve the same result, their behaviors are very different."),(0,o.mdx)("h2",{id:"supported-modes"},"Supported modes"),(0,o.mdx)("p",null,"The following table illustrates how ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," modes are supported across different transforms:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Transform"),(0,o.mdx)("th",{parentName:"tr",align:"center"},"Bare"),(0,o.mdx)("th",{parentName:"tr",align:"center"},"Wrap"),(0,o.mdx)("th",{parentName:"tr",align:"center"},"Docs"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Encapsulate"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"❌"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"encapsulate.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Federation"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"❌"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"federation.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Filter Schema"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"filter-schema.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Naming Convention"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"❌"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"naming-convention.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Prefix"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"prefix.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Rename"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"rename.md"},"docs"))),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"Replace Field"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"✅"),(0,o.mdx)("td",{parentName:"tr",align:"center"},"❌"),(0,o.mdx)("td",{parentName:"tr",align:"center"},(0,o.mdx)("a",{parentName:"td",href:"replace-field.md"},"docs"))))),(0,o.mdx)("h2",{id:"bare"},(0,o.mdx)("inlineCode",{parentName:"h2"},"bare")),(0,o.mdx)("p",null,"Bare mode works by replacing the original schema. The handler generates a GraphQL schema and passes it to the transform. When in ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode, the transform, receives the schema generated by your handler, applies the defined transform rules, and returns an updated version of the original schema."),(0,o.mdx)("p",null,"The transformed schema replaces the original schema from the handler, so API Mesh deals with the transformed schema only, as opposed to an original schema plus one or more wrapping layers."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode is recommended, however, there are a few restrictions to consider."),(0,o.mdx)("h3",{id:"restrictions"},"Restrictions"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode does provide performance improvements over ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode, however, it needs to access the bare schema. Here are some reasons this might not work:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},'Your data source already "speaks" GraphQL\n',(0,o.mdx)("inlineCode",{parentName:"p"},"bare"),' won\'t work since it cannot replace a native GraphQL schema. This is not the same as transforming a "translated" GraphQL schema (e.g. from JSON-schema, OpenApi, SOAP, etc.).\nInstead, we suggest that you apply the ',(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," transforms to your GraphQL data source and ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare"),' transforms to sources "translated" into GraphQL.')),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You are applying transforms at the all-sources (root) level\nThis means that ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare"),' would receive a composed GraphQL schema, rather than a bare and "translated" schema. If you do want to use ',(0,o.mdx)("inlineCode",{parentName:"p"},"bare"),' at the root level, your only choice is to opt into merger-bare, which lets transforms access the bare schemas; because it merges sources without wrapping them. This works when you don\'t have (or you take care of) conflicts between your sources, and you are not applying root-level transforms to data sources that already "speak" GraphQL.')),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"You are mixing transforms that support ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," with transforms that don't\nAgain, ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode always needs to access the bare schema. If you define other transforms that don't support ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode, you will most likely have trouble, because those transforms will apply a wrapping layer that provides the ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," transforms, instead of the original bare schema."),(0,o.mdx)("p",{parentName:"li"},"To take advantage of ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," performance improvements, the suggestion here is to apply ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," transforms at the all-sources (root) level and ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," transforms within the data sources level; so you can reduce the number of wrapping layers that would otherwise be created if not using ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," at all."))),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "Countries",\n      "handler": {\n        "soap": {\n          "wsdl": "https://webservices.../wso?WSDL"\n        }\n      }\n    },\n    {\n      "name": "Users",\n      "handler": {\n        "openapi": {\n          "source": "https://api.../swagger.yaml"\n        }\n      },\n      "transforms": [\n        {\n          "rename": {\n            "mode": "bare",\n            "renames": [\n              {\n                "from": {\n                  "type": "User",\n                  "field": "lastName"\n                },\n                "to": {\n                  "type": "User",\n                  "field": "surname"\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "merger": "bare",\n  "transforms": [\n    {\n      "rename": {\n        "mode": "bare",\n        "renames": [\n          {\n            "from": {\n              "type": "Country",\n              "field": "ISO-3166_Code"\n            },\n            "to": {\n              "type": "Country",\n              "field": "code"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.mdx)("h2",{id:"wrap"},(0,o.mdx)("inlineCode",{parentName:"h2"},"wrap")),(0,o.mdx)(s,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode adds significant overhead and can cause longer processing times. When using API Mesh, we strongly recommend using ",(0,o.mdx)("a",{parentName:"p",href:"#bare"},"Bare")," mode."),(0,o.mdx)("p",null,"The wrap mode applies transformations by adding a wrapping layer to the original GraphQL schema. The handler generates a GraphQL\nschema and passes it to the transform. When in ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode, the transform receives this schema. Rather than updating it, it will apply a layer on top of it, with the scope of serving your transformations as an addition to the original schema generated by the handler."),(0,o.mdx)("p",null,"This approach is safe as we have used it extensively in ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql-tools"),"; however, be mindful of the implications below."),(0,o.mdx)("h3",{id:"implications"},"Implications"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode is the default mode for schema manipulation transforms because it is safe and works across all data sources. However, you might want to be aware of the following implications."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Runtime implications"),(0,o.mdx)("p",{parentName:"li"},"Schema wrapping is performed during initialization only and so won't affect runtime GraphQL operations. However, transforms that alter the original schema shape using ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode, achieve this by intercepting both the incoming request and the original response to do the mapping required to transform the original schema into the desired shape."),(0,o.mdx)("p",{parentName:"li"},"Not all transforms require interception of both request and response. Some require straightforward mapping, so the runtime overhead could hopefully be negligible; however, there will always be some.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Multiple wrapping layers"),(0,o.mdx)("p",{parentName:"li"},"When using ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," mode, the required transformation can be achieved by adding at least one wrapping layer per each transform rule defined. We cannot have a wrapping layer per transform, but we need one per rule since each rule is unique in the way it transforms different parts of the schema. Some rules might even require multiple wrapping layers, f.i. When transforming a field, the transform needs to be applied to RootFields, ObjectFields, and InputObjectFields."),(0,o.mdx)("p",{parentName:"li"},"As explained in the previous point, the wrapping layers are registered during initialization only. However, each wrapping layer will always have some runtime implications, even if hopefully negligible.")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("p",{parentName:"li"},"Working with fixed-schema sources"),(0,o.mdx)("p",{parentName:"li"}," As mentioned, ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap"),' is the only mode that works for sources that "speak" GraphQL natively. However, when you work with fixed schema sources, such as JSON-schema, OpenApi, or SOAP. Schema wrapping might have some undesired effects. For example, you won\'t have access to the original "fixed-contract" response from your data source.'),(0,o.mdx)("p",{parentName:"li"}," This might not be ideal, for example, when implementing custom resolvers, where you might want to access several properties returned by your REST service to compute custom data. Still, you will only be able to access properties requested with the GraphQL query."),(0,o.mdx)("p",{parentName:"li"}," If you don't want/can't opt into ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode, this can be easily solved by explicitly declaring a ",(0,o.mdx)("inlineCode",{parentName:"p"},"SelectionSet"),", within your custom resolver to list all properties required to compute your custom data."))),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"wrap"),' is the only approach that works with data sources that already "speaks" GraphQL, or when you want to transform all sources at the (root) level unless you\'re using ',(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/docs/api/modules/merger-bare"},"merger-bare"),". If you want to remove the possible runtime implications, consider either moving your transforms from the data source level or opting into ",(0,o.mdx)("inlineCode",{parentName:"p"},"merger-bare")," to take advantage of ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," mode."),(0,o.mdx)("p",null,"Example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "sources": [\n    {\n      "name": "Countries",\n      "handler": {\n        "graphql": {\n          "endpoint": "https://api.../graphql"\n        }\n      },\n      "transforms": [\n        {\n          "rename": {\n            "mode": "wrap",\n            "renames": [\n              {\n                "from": {\n                  "type": "Country",\n                  "field": "admin1Admins"\n                },\n                "to": {\n                  "type": "Country",\n                  "field": "admin1"\n                }\n              }\n            ]\n          }\n        }\n      ]\n    },\n    {\n      "name": "Users",\n      "handler": {\n        "openapi": {\n          "source": "https://api.../swagger.yaml"\n        }\n      },\n      "transforms": [\n        {\n          "rename": {\n            "mode": "wrap",\n            "renames": [\n              {\n                "from": {\n                  "type": "User",\n                  "field": "lastName"\n                },\n                "to": {\n                  "type": "User",\n                  "field": "surname"\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  ],\n  "transforms": [\n    {\n      "rename": {\n        "mode": "wrap",\n        "renames": [\n          {\n            "from": {\n              "type": "Country",\n              "field": "ISO-3166_Code"\n            },\n            "to": {\n              "type": "Country",\n              "field": "code"\n            }\n          }\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"When you want to use ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap"),", you can omit the ",(0,o.mdx)("inlineCode",{parentName:"p"},"mode")," property since this is already applied by default."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-transforms-bare-vs-wrap-md-39897564a821d91e9642.js.map