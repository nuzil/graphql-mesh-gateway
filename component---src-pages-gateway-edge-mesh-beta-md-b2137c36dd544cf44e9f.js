"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[156],{19089:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return m},default:function(){return u}});var n=a(87462),s=a(45987),o=(a(35776),a(3905)),r=a(91515);const d=["components"],m={},i=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var l;const p={_frontmatter:m},h=r.Z;function u(e){let{components:t}=e,a=(0,s.Z)(e,d);return(0,o.mdx)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"edge-mesh-beta"},"Edge mesh BETA"),(0,o.mdx)(i,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This page describes the current status of the API Mesh for Adobe Developer App Builder closed beta program for edge mesh support. This feature is in closed beta and is not accessible to non-beta users. For future updates watch the ",(0,o.mdx)("a",{parentName:"p",href:"./release-notes.md"},"release notes")," page."),(0,o.mdx)("p",null,"The current API Mesh architecture uses a standard configuration spread across several regions. To improve response times and provide better benefits to our users, we are introducing a closed beta using the edge deployment of meshes. These edge meshes are stored closer to your data sources to reduce latency and generally improve the API Mesh experience by making meshes more performant."),(0,o.mdx)("h2",{id:"benefits"},"Benefits"),(0,o.mdx)("p",null,"Using edge deployment provides the following benefits:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Improved response times and enhanced API performance"),(0,o.mdx)("li",{parentName:"ul"},"Easier integration with industry-standard tools and third-party products"),(0,o.mdx)("li",{parentName:"ul"},"Reduce the potential of other hosted meshes to degrade the performance of your mesh"),(0,o.mdx)("li",{parentName:"ul"},"Better security and compliance"),(0,o.mdx)("li",{parentName:"ul"},"Increased observability")),(0,o.mdx)("h2",{id:"using-edge-meshes"},"Using edge meshes"),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Due to compatibility limitations during this closed beta, certain features, such as ",(0,o.mdx)("a",{parentName:"p",href:"./hooks.md"},"Hooks")," and ",(0,o.mdx)("a",{parentName:"p",href:"./source-handlers.md#soap"},"SOAP handlers"),", are not available in edge meshes."),(0,o.mdx)("p",null,"As part of the closed beta program, you will get access to edge mesh URLs. After you have updated to the latest version of the ",(0,o.mdx)("a",{parentName:"p",href:"./getting-started.md#configure-your-environment"},"API Mesh CLI plugin"),", ",(0,o.mdx)("a",{parentName:"p",href:"./create-mesh.md"},"create a mesh")," or ",(0,o.mdx)("a",{parentName:"p",href:"./create-mesh.md#update-an-existing-mesh"},"update an existing mesh")," to trigger the edge deployment. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio api-mesh create")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio api-mesh update")," commands will include the following information."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"Legacy Mesh Endpoint: https://graph.adobe.io/api/123456-123-456-789-1234567890/graphql?api_key=09876543210987654321\nEdge Mesh Endpoint: https://edge-graph.adobe.io/api/123456-123-456-789-1234567890/graphql\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Legacy Mesh Endpoint - contains the standard production-ready mesh URL"),(0,o.mdx)("li",{parentName:"ul"},"Edge Mesh Endpoint - contains the closed beta edge mesh URL")),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"While the beta edge mesh endpoints will be faster and more performant, you should use these URLs for testing and staging purposes only."),(0,o.mdx)("h3",{id:"command-responses"},"Command responses"),(0,o.mdx)("p",null,"In addition to the create and update commands, responses to other commands have changed to accommodate edge mesh information."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio api-mesh:describe")," command contains both the legacy and edge mesh endpoints."),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"aio api-mesh:status")," command describes the status of both the legacy and edge mesh builds. This reflects the success of both building your legacy mesh and deploying the edge mesh. Any failures or errors that appear in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Legacy Mesh Status"),", will subsequently affect the edge mesh. Therefore, you must resolve any errors in your legacy mesh build before using the edge mesh."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-terminal"},"Legacy Mesh Status: \nYour mesh was successfully built.\n*********************************\nEdge Mesh Status:\nYour mesh was successfully built.\n")),(0,o.mdx)(i,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The formatting of responses containing the legacy mesh and edge mesh statuses may change over the course of the beta program."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-edge-mesh-beta-md-b2137c36dd544cf44e9f.js.map