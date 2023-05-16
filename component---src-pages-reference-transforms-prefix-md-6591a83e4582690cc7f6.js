"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[8177],{66098:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return p},default:function(){return f}});var i,r=a(87462),t=a(63366),o=(a(15007),a(64983)),m=a(91515),d=["components"],p={},l=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)}),s={_frontmatter:p},x=m.Z;function f(e){var n=e.components,a=(0,t.Z)(e,d);return(0,o.mdx)(x,(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"prefix-transform"},(0,o.mdx)("inlineCode",{parentName:"h1"},"prefix")," transform"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"prefix")," transform allows you to prefix GraphQL types and GraphQL root operations (under ",(0,o.mdx)("inlineCode",{parentName:"p"},"Query/Mutation"),"). ",(0,o.mdx)("inlineCode",{parentName:"p"},"prefix")," is similar to ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/docs/transforms/rename"},(0,o.mdx)("inlineCode",{parentName:"a"},"rename"))," in that it allows you to modify names to avoid conflicts, simplify complicated names, and change the appearance of your query.\nIn contrast with ",(0,o.mdx)("inlineCode",{parentName:"p"},"rename"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"prefix")," is simpler and only allows you to append a ",(0,o.mdx)("inlineCode",{parentName:"p"},"prefix")," to the existing name."),(0,o.mdx)("p",null,'You can use it to easily "namespace" APIs in your unified API and avoid conflicts.'),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("p",null,"Add the following configuration to your Mesh config file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "transforms": [\n    {\n      "prefix": {\n        "mode": "bare | wrap",\n        "value": "MyApi_"\n      }\n    }\n  ]\n}\n')),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"For information about ",(0,o.mdx)("inlineCode",{parentName:"p"},"bare")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"wrap")," modes, read the ",(0,o.mdx)("a",{parentName:"p",href:"/graphql-mesh-gateway/reference/transforms/index.md#two-different-modes"},"dedicated section"),"."),(0,o.mdx)("h2",{id:"config-api-reference"},"Config API Reference"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"mode")," (type: ",(0,o.mdx)("inlineCode",{parentName:"li"},"String")," (",(0,o.mdx)("inlineCode",{parentName:"li"},"bare")," | ",(0,o.mdx)("inlineCode",{parentName:"li"},"wrap"),")) - Specify to apply prefix transform to bare schema or by wrapping original schema"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"value")," (type: ",(0,o.mdx)("inlineCode",{parentName:"li"},"String"),") - The prefix to apply to the schema types. By default, the prefix is the API name."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"ignore")," (type: ",(0,o.mdx)("inlineCode",{parentName:"li"},"Array of String"),", required) - List of ignored types"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"includeRootOperations")," (type: ",(0,o.mdx)("inlineCode",{parentName:"li"},"Boolean"),") - Changes root types and changes the field names (default: false)"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"includeTypes")," (type: ",(0,o.mdx)("inlineCode",{parentName:"li"},"Boolean"),") - Changes types (default: true)")))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reference-transforms-prefix-md-6591a83e4582690cc7f6.js.map