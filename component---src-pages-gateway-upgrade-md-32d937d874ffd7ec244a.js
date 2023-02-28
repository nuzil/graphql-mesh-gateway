"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[9588],{4702:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return s},default:function(){return l}});var r=n(7462),m=n(3366),t=(n(5007),n(4983)),o=n(1515),d=["components"],s={},p={_frontmatter:s},i=o.Z;function l(e){var a=e.components,n=(0,m.Z)(e,d);return(0,t.mdx)(i,(0,r.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"upgrade-versions"},"Upgrade versions"),(0,t.mdx)("p",null,"This page lists breaking changes between versions of API Mesh for Adobe Developer App Builder. For a list of new features and resolved issues, refer to the ",(0,t.mdx)("a",{parentName:"p",href:"release-notes.md"},"release notes"),"."),(0,t.mdx)("h2",{id:"software-updates"},"Software updates"),(0,t.mdx)("p",null,"If you are upgrading from a beta release to GA, you must update to ",(0,t.mdx)("inlineCode",{parentName:"p"},"nvm")," 18.x.x and update the mesh code."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Update ",(0,t.mdx)("inlineCode",{parentName:"p"},"nvm")," to version 18. The following command shows one way to do this:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"nvm use 18\n"))),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Update the API Mesh plugin."),(0,t.mdx)("p",{parentName:"li"}," To update Adobe I/O and all registered plugins, run the following command:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"aio update\n")),(0,t.mdx)("p",{parentName:"li"},"To update the API Mesh plugin only, run the following command:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"aio plugins:install @adobe/aio-cli-plugin-api-mesh\n")))),(0,t.mdx)("p",null,"If you encounter any issues installing the plugin, try uninstalling any existing plugins first by running ",(0,t.mdx)("inlineCode",{parentName:"p"},"aio plugins:uninstall"),". The ",(0,t.mdx)("inlineCode",{parentName:"p"},"aio plugins")," command will list any installed plugins."),(0,t.mdx)("p",null,"See our ",(0,t.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@adobe/aio-cli-plugin-api-mesh"},"NPM page")," or ",(0,t.mdx)("a",{parentName:"p",href:"getting-started.md#configure-your-environment"},"Getting Started")," for more information."),(0,t.mdx)("h2",{id:"upgrading-to-the-feb-23-2023-release"},"Upgrading to the Feb 23, 2023 release"),(0,t.mdx)("p",null,"If your mesh has multiple sources with the same name, you will need to change them to unique names and then ",(0,t.mdx)("a",{parentName:"p",href:"create-mesh.md#update-an-existing-mesh"},"update your mesh"),"."),(0,t.mdx)("h2",{id:"upgrading-to-the-jan-17-2023-release"},"Upgrading to the Jan 17, 2023 release"),(0,t.mdx)("p",null,"You must modify any previously created meshes to account for the following breaking changes when updating to the new release."),(0,t.mdx)("h3",{id:"deprecated-experimental-features"},"Deprecated experimental features"),(0,t.mdx)("p",null,"The beta release contained two experimental features that are not supported in the GA release."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"The Resolver Composition transform has been deprecated and is no longer supported."),(0,t.mdx)("li",{parentName:"ul"},"The Hook transform requires additional fixes and testing. We intend to re-enable this transform in a subsequent release.")),(0,t.mdx)("h4",{id:"resolver-composition-transform-deprecated"},"Resolver Composition transform deprecated"),(0,t.mdx)("p",null,"The Resolver Composition transform (",(0,t.mdx)("inlineCode",{parentName:"p"},"composeResolvers"),") is no longer supported."),(0,t.mdx)("p",null,"Remove any instances of ",(0,t.mdx)("inlineCode",{parentName:"p"},"composerResolvers")," from your mesh before running a ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshcreate"},"create")," or ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshupdate"},"update")," command."),(0,t.mdx)("h4",{id:"hooks-transform-temporarily-disabled"},"Hooks transform temporarily disabled"),(0,t.mdx)("p",null,"We have temporarily disabled the ",(0,t.mdx)("a",{parentName:"p",href:"hooks.md"},"Hooks transform"),". Hooks will return in an upcoming release."),(0,t.mdx)("p",null,"Remove any ",(0,t.mdx)("inlineCode",{parentName:"p"},"Hook")," transforms from your mesh before running a ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshcreate"},"create")," or ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshupdate"},"update")," command."),(0,t.mdx)("h3",{id:"runtime-headers"},"Runtime headers"),(0,t.mdx)("p",null,"Runtime headers that use the following format are now deprecated:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"GGW-SH-<SourceName>-<HeaderName>\n")),(0,t.mdx)("p",null,"Instead, use the following methods:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"../reference/handlers/openapi.md#headers-from-context"},"OpenAPI handlers")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"../reference/handlers/graphql.md#headers-from-context"},"GraphQL handlers")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"../reference/handlers/json-schema.md#headers-from-context"},"JSON schema handlers"))),(0,t.mdx)("h3",{id:"mesh-create-and-update-time"},"Mesh create and update time"),(0,t.mdx)("p",null,"While most ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshcreate"},"create")," and ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshupdate"},"update")," commands will take a few seconds, complex meshes and meshes with several sources will take a few minutes to fully provision and propagate."),(0,t.mdx)("p",null,"To check the status of your mesh, use the ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshstatus"},(0,t.mdx)("inlineCode",{parentName:"a"},"aio api-mesh:status")," command"),", which allows you to view where your mesh is in the provisioning process."),(0,t.mdx)("p",null,"Additionally, due to our new asynchronous architecture, the create/update commands now add your mesh to a queue where it waits to be processed, which means you will no longer receive an error if your mesh fails to create/update. We have added the ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshstatus"},(0,t.mdx)("inlineCode",{parentName:"a"},"aio api-mesh:status")," command")," to allow you to check the processing status of your mesh and see any errors that occurred during creating/updating."),(0,t.mdx)("h3",{id:"cors-formatting-change"},"CORS formatting change"),(0,t.mdx)("p",null,(0,t.mdx)("a",{parentName:"p",href:"headers.md#cors-headers"},"CORS headers")," now have the following format:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'  "responseConfig": {\n    "CORS": {\n    ...\n    }\n  }\n')),(0,t.mdx)("p",null,"Additionally, the ",(0,t.mdx)("inlineCode",{parentName:"p"},"preflightContinue")," field is no longer needed and will cause an error if used. Refer to the ",(0,t.mdx)("a",{parentName:"p",href:"headers.md#cors-headers"},"CORS headers")," example for more information."),(0,t.mdx)("h3",{id:"update-existing-meshes"},"Update existing meshes"),(0,t.mdx)("p",null,"API Mesh now runs on updated versions of GraphQL Mesh ",(0,t.mdx)("a",{parentName:"p",href:"source-handlers.md"},"handlers")," and ",(0,t.mdx)("a",{parentName:"p",href:"transforms.md"},"transforms"),". To move to the new codebase and enable these upgrades, update your existing meshes."),(0,t.mdx)("ol",null,(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("a",{parentName:"p",href:"create-mesh.md#select-a-project-or-workspace"},"Select the workspace")," that contains the mesh you want to update.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("a",{parentName:"p",href:"create-mesh.md#retrieve-a-previously-created-meshid"},"Retrieve")," your previously created mesh by running the following ",(0,t.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshget"},(0,t.mdx)("inlineCode",{parentName:"a"},"get")," command"),"."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:get download.json\n")),(0,t.mdx)("p",{parentName:"li"},"This command creates a file named ",(0,t.mdx)("inlineCode",{parentName:"p"},"download.json")," that contains a copy of the mesh from the selected workspace.")),(0,t.mdx)("li",{parentName:"ol"},(0,t.mdx)("p",{parentName:"li"},"Run the ",(0,t.mdx)("a",{parentName:"p",href:"create-mesh.md#update-an-existing-mesh"},"update")," command and reference the previously created file."),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"aio api-mesh:update download.json\n")),(0,t.mdx)("p",{parentName:"li"},"It can take a few minutes to fully provision and propagate your mesh."))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-upgrade-md-32d937d874ffd7ec244a.js.map