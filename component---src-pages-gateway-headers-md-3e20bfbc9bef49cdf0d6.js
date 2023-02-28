"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[9681],{6325:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return m},default:function(){return u}});var r,t=a(7462),o=a(3366),d=(a(5007),a(4983)),s=a(1515),i=["components"],m={},l=(r="InlineAlert",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),h={_frontmatter:m},p=s.Z;function u(e){var n=e.components,a=(0,o.Z)(e,i);return(0,d.mdx)(p,(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"headers"},"Headers"),(0,d.mdx)("p",null,"To specify headers for your mesh, you can add them inside the ",(0,d.mdx)("inlineCode",{parentName:"p"},"JSON")," file that describes your mesh, or you can add them when querying. Currently, you can add ",(0,d.mdx)("a",{parentName:"p",href:"#request-headers"},"request headers")," and ",(0,d.mdx)("a",{parentName:"p",href:"#response-headers"},"response headers"),", which both can contain ",(0,d.mdx)("a",{parentName:"p",href:"cache-control-headers.md"},"cache-control headers"),"."),(0,d.mdx)("h2",{id:"request-headers"},"Request headers"),(0,d.mdx)("p",null,"Request headers provide more information about the request context. Currently, you can add request headers to your ",(0,d.mdx)("a",{parentName:"p",href:"#add-request-headers-in-your-mesh-file"},"mesh config"),"."),(0,d.mdx)("h3",{id:"add-request-headers-in-your-mesh-file"},"Add request headers in your mesh file"),(0,d.mdx)("p",null,"To add headers directly to a source handler in your mesh JSON file, add the ",(0,d.mdx)("inlineCode",{parentName:"p"},"operationHeaders")," object with key-value pairs for your headers. The following example defines the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Store")," header for the Commerce source and multiple headers for the LiveSearch source."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "Commerce",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<host>/graphql",\n            "operationHeaders": {\n              "Store": "default"\n            }\n          }\n        }\n      },\n      {\n        "name": "LiveSearch",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://<host>/search/graphql",\n            "operationHeaders": {\n              "Magento-Environment-Id": "<environment_id>",\n              "Magento-Website-Code": "base",\n              "Magento-Store-Code": "main_website_store",\n              "Magento-Store-View-Code": "default",\n              "X-Api-Key": "search_gql"\n            }\n          }\n        }\n      }\n    ]\n  },\n}\n')),(0,d.mdx)("p",null,"You can also inject dynamic values from the context into your headers. For examples of dynamic header values, select a handler:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../reference/handlers/openapi.md#headers-from-context"},"OpenAPI handlers")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../reference/handlers/graphql.md#headers-from-context"},"GraphQL handlers")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"../reference/handlers/json-schema.md#headers-from-context"},"JSON schema handlers"))),(0,d.mdx)("h4",{id:"media-types"},"Media types"),(0,d.mdx)("p",null,"Depending on the type of information you are passing in a header, your source might require that you specify a ",(0,d.mdx)("a",{parentName:"p",href:"https://www.iana.org/assignments/media-types/media-types.xhtml"},"media type"),", which tells the mesh and your sources how to interpret the data you are passing. Use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Content-Type")," key-value pair in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"operationHeaders")," object to define your content format."),(0,d.mdx)("p",null,"In the following example, the ",(0,d.mdx)("inlineCode",{parentName:"p"},'"Content-Type": "application/json"')," key-value pair indicates that the content is in JSON format."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"operationHeaders": {\n  "Content-Type": "application/json",\n},\n')),(0,d.mdx)("h2",{id:"response-headers"},"Response headers"),(0,d.mdx)("p",null,"Response headers provide a detailed context of the response. Currently, you can only add response headers from the mesh config."),(0,d.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,"All response header names must be unique. Conflicting header names will result in an error when you try to create or update a mesh."),(0,d.mdx)("h3",{id:"add-response-headers-in-your-mesh-file"},"Add response headers in your mesh file"),(0,d.mdx)("p",null,"Mesh owners can use the ",(0,d.mdx)("inlineCode",{parentName:"p"},"responseConfig.headers")," object to add response headers. Define each header as a key-value pair."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'    { \n      "meshConfig": { \n        "sources": [\n          {\n            "name": "venia", \n            "handler": { \n              "graphql": { \n                "endpoint": "https://venia.magento.com/graphql"\n              } \n            } \n          }\n        ],\n       "responseConfig": {\n        "headers": {\n            "Cache-Control": "max-age=60480",\n            "Vary": "Accept"\n          }\n        }\n      }\n    }\n')),(0,d.mdx)("h4",{id:"return-forwarded-headers"},"Return forwarded headers"),(0,d.mdx)("p",null,"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"responseConfig.headers")," object also allows you to return header values from a source. The following example requests the ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Magento-Cache-Id")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-Cache")," headers from the Venia source."),(0,d.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,d.mdx)("p",null,(0,d.mdx)("a",{parentName:"p",href:"../reference/handlers/json-schema.md"},"JSON schema handlers")," do not support ",(0,d.mdx)("inlineCode",{parentName:"p"},"responseConfig")," functionality."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "meshConfig": {\n    "sources": [\n      {\n        "name": "venia",\n        "handler": {\n          "graphql": {\n            "endpoint": "https://venia.magento.com/graphql"\n          }\n        },\n        "responseConfig": {\n          "headers": [\n            "X-Magento-Cache-Id",\n            "X-Cache"\n          ]\n        }\n      }\n    ]\n  }\n}\n')),(0,d.mdx)("h4",{id:"conflicting-headers"},"Conflicting headers"),(0,d.mdx)("p",null,"When forwarding headers, an error occurs if two or more sources return a header with the same name. To view all headers, regardless of source, add the ",(0,d.mdx)("inlineCode",{parentName:"p"},"x-include-metadata")," header with a value of ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," in your GraphQL client."),(0,d.mdx)("p",null,"Including metadata prefixes the returned response headers with their source name. In the following example, the ",(0,d.mdx)("inlineCode",{parentName:"p"},"cache-control")," header values are returned for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"venia")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"commerce")," sources."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    ...\n    },\n  "_ggw_metadata__": {\n        "responseHeaders": {\n          "x-venia-cache-control": "max-age=3600",\n          "x-commerce-cache-control": "max-age=1800",\n        }\n    }\n}\n')),(0,d.mdx)("h4",{id:"cors-headers"},"CORS headers"),(0,d.mdx)("p",null,"Cross-origin resource sharing (CORS) allows you to pass resources that are usually restricted to an outside domain. Refer to ",(0,d.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"MDN's documentation")," for more information on CORS headers."),(0,d.mdx)("p",null,"To add CORS headers to your mesh, create a ",(0,d.mdx)("inlineCode",{parentName:"p"},"CORS")," object in the ",(0,d.mdx)("inlineCode",{parentName:"p"},"responseConfig")," object, using the following key-value pairs:"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"origin")," (Required) - the scheme and domain of the resource you want to allow to make a CORS request"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"methods")," (Required) - the HTTP request methods allowed in the CORS request, such as GET, POST, and OPTIONS"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"allowedHeaders")," - a string of allowed headers in preflight requests"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"credentials")," - a boolean value that indicates if credentials can be included in CORS request (default: ",(0,d.mdx)("inlineCode",{parentName:"li"},"false"),")"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"exposedHeaders")," - a comma-delimited CORS request that contains headers to expose"),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"maxAge")," - the maximum number of seconds the preflight response (the values of the ",(0,d.mdx)("inlineCode",{parentName:"li"},"origin")," and ",(0,d.mdx)("inlineCode",{parentName:"li"},"methods")," headers) can be cached")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'{\n...\n    "responseConfig": {\n      "CORS": {\n        "origin": "https://www.domain.com",\n        "methods": [\n          "GET",\n          "POST"\n        ],\n        "maxAge": 60480,\n        "credentials": true,\n        "exposedHeaders": [\n          "Content-Range",\n          "X-Content-Range"\n        ]\n      }\n    }\n...\n}\n')),(0,d.mdx)("h2",{id:"retrieving-handler-details"},"Retrieving handler details"),(0,d.mdx)("p",null,"Setting an ",(0,d.mdx)("inlineCode",{parentName:"p"},"httpDetails")," header to ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," no longer returns ",(0,d.mdx)("inlineCode",{parentName:"p"},"httpDetails")," when querying. Instead, the setting is now controlled at the mesh level by the ",(0,d.mdx)("a",{parentName:"p",href:"work-with-mesh.md#include-httpdetails-in-query-responses"},(0,d.mdx)("inlineCode",{parentName:"a"},"includeHTTPDetails")," setting"),"."),(0,d.mdx)("h2",{id:"header-troubleshooting"},"Header troubleshooting"),(0,d.mdx)("p",null,"If you receive a ",(0,d.mdx)("inlineCode",{parentName:"p"},"401")," or similar error when passing headers, add the following content-type specification to your mesh configuration file, as described in ",(0,d.mdx)("a",{parentName:"p",href:"#media-types"},"media types"),". This issue can occur when you pass your authorization credentials, such as username and password, to an endpoint, but the endpoint does not know how to consume that information. Specifying the ",(0,d.mdx)("inlineCode",{parentName:"p"},"Content-Type")," tells your endpoint how to parse the request body."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-json"},'"operationHeaders": {\n  "Content-Type": "application/json",\n},\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-headers-md-3e20bfbc9bef49cdf0d6.js.map