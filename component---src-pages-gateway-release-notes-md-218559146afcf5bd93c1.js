"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[2022],{78287:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t=a(87462),i=a(45987),r=(a(35776),a(3905)),d=a(91515);const m=["components"],o={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const p={_frontmatter:o},h=d.Z;function u(e){let{components:n}=e,a=(0,i.Z)(e,m);return(0,r.mdx)(h,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"release-notes"},"Release notes"),(0,r.mdx)("p",null,"The following sections indicate when updates were made to API Mesh for Adobe Developer App Builder. Refer to the ",(0,r.mdx)("a",{parentName:"p",href:"upgrade.md"},"Upgrade version")," for more information on upgrading versions."),(0,r.mdx)("h2",{id:"april-23-2024"},"April 23, 2024"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,r.mdx)("p",null,"Resolved an issue that could cause operation headers to be exposed as query string parameters in the source URL when ",(0,r.mdx)("inlineCode",{parentName:"p"},"useGETForQueries")," was set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,r.mdx)("h2",{id:"april-04-2024"},"April 04, 2024"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,r.mdx)("p",null,"Resolved an issue that prevented resolvers from updating when updating a mesh."),(0,r.mdx)("h2",{id:"january-30-2024"},"January 30, 2024"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-2"},"Bug fixes"),(0,r.mdx)("p",null,"Resolved a ",(0,r.mdx)("inlineCode",{parentName:"p"},"MODULE_NOT_FOUND")," error in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@adobe/aio-cli-plugin-api-mesh")," CLI. If you encounter this error, upgrade to version ",(0,r.mdx)("inlineCode",{parentName:"p"},"3.2.2 (latest)"),"."),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"To update to the newest version of the CLI, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio-update")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio plugins:update @adobe/aio-cli-plugin-api-mesh"),"."),(0,r.mdx)("h2",{id:"january-11-2023"},"January 11, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"A ",(0,r.mdx)("inlineCode",{parentName:"p"},"--select")," argument is now available for the ",(0,r.mdx)("a",{parentName:"p",href:"./command-reference.md#aio-api-meshrun"},(0,r.mdx)("inlineCode",{parentName:"a"},"run")," command"),". By providing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"--select")," argument, you can run a mesh based on the mesh artifact in the selected workspace instead of rebuilding the mesh.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Various improvements to server performance."))),(0,r.mdx)("h2",{id:"november-14-2023"},"November 14, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-1"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Internal monitoring and optimization upgrades.")),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Due to an internal upgrade, to get CORS response headers when querying your mesh, you must provide an ",(0,r.mdx)("inlineCode",{parentName:"p"},"origin")," request header with the origin URL as the value. For example, ",(0,r.mdx)("inlineCode",{parentName:"p"},"origin: https://graph.adobe.io"),"."),(0,r.mdx)("h3",{id:"bug-fixes-3"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Resolved an issue in the CLI where using the ",(0,r.mdx)("inlineCode",{parentName:"li"},"aio api-mesh get --json")," command in a workspace with no mesh configuration would return an inconsistent error.")),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"To update to the newest version of the CLI, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio-update")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio plugins:update @adobe/aio-cli-plugin-api-mesh"),"."),(0,r.mdx)("h2",{id:"october-18-2023"},"October 18, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-4"},"Bug fixes"),(0,r.mdx)("p",null,"Performance fixes."),(0,r.mdx)("h2",{id:"october-09-2023"},"October 09, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-2"},"Enhancements"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("a",{parentName:"p",href:"./command-reference.md#aio-api-meshrun"},(0,r.mdx)("inlineCode",{parentName:"a"},"run")," command")," beta is now available, which allows you to ",(0,r.mdx)("a",{parentName:"p",href:"./developer-tools.md#create-a-local-environment"},"create a local API Mesh environment")," for development and testing purposes. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"run")," command works in concert with the ",(0,r.mdx)("a",{parentName:"p",href:"./command-reference.md#aio-api-meshinit"},(0,r.mdx)("inlineCode",{parentName:"a"},"init")," command")," and ",(0,r.mdx)("a",{parentName:"p",href:"./developer-tools.md#environment-variables"},"environment variables")," to provide more robust developer tooling."),(0,r.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Beta features may not be fully supported."),(0,r.mdx)("p",null,"To update to the newest version of the CLI, run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio-update")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio plugins:update @adobe/aio-cli-plugin-api-mesh"),"."),(0,r.mdx)("h2",{id:"september-21-2023"},"September 21, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-3"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://graphql.org/learn/queries/"},"GraphQL aliasing")," is now enabled.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"As a part of this enhancement, several ",(0,r.mdx)("a",{parentName:"li",href:"../reference/handlers/index.md"},"handler")," and ",(0,r.mdx)("a",{parentName:"li",href:"../reference/transforms/index.md"},"transform")," packages have been updated.")))),(0,r.mdx)("h2",{id:"august-30-2023"},"August 30, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-4"},"Enhancements"),(0,r.mdx)("p",null,"Due to upcoming changes in the ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/runtime/docs/guides/tools/cli_install/"},"Adobe I/O Extensible CLI"),", the ",(0,r.mdx)("a",{parentName:"p",href:"./getting-started.md#configure-your-environment"},"API Mesh CLI")," may encounter an ",(0,r.mdx)("inlineCode",{parentName:"p"},"Unable to create API key")," error when running an ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio api-mesh create")," command on a workspace that has an existing API key. To resolve this run ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio-update")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"aio plugins:update @adobe/aio-cli-plugin-api-mesh")," to ensure you have version ",(0,r.mdx)("inlineCode",{parentName:"p"},"3.0.0")," of the API Mesh plugin."),(0,r.mdx)("p",null,"Alternatively, if updating your plugin is not an option, you can manually ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/credentials/#api-key"},"delete the credential")," from Adobe Developer Console by navigating to ",(0,r.mdx)("strong",{parentName:"p"},"API Keys")," in the appropriate workspace and clicking ",(0,r.mdx)("strong",{parentName:"p"},"Delete Credential"),"."),(0,r.mdx)("h2",{id:"august-17-2023"},"August 17, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-5"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for ",(0,r.mdx)("a",{parentName:"li",href:"./work-with-mesh.md#aliasing"},"aliasing"),"."),(0,r.mdx)("li",{parentName:"ul"},"Added internal caching improvements. You may notice improvements to response time.")),(0,r.mdx)("h2",{id:"july-31-2023"},"July 31, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-6"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added the ",(0,r.mdx)("a",{parentName:"li",href:"../reference/handlers/soap.md"},"SOAP handler")," to API Mesh.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The SOAP handler is experimental and should not be used in production deployments."))),(0,r.mdx)("li",{parentName:"ul"},"Added internal logging improvements.")),(0,r.mdx)("h3",{id:"bug-fixes-5"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Removed a configuration option that was enabled but not supported."),(0,r.mdx)("li",{parentName:"ul"},"Resolved a ",(0,r.mdx)("inlineCode",{parentName:"li"},"500 Internal Server Error")," that could occur when deleting a mesh."),(0,r.mdx)("li",{parentName:"ul"},"Resolved a ",(0,r.mdx)("inlineCode",{parentName:"li"},"400 Bad Request")," that could occur when updating a mesh.")),(0,r.mdx)("h2",{id:"june-29-2023"},"June 29, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-6"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A previous release introduced an issue that could cause unnecessary delays on GraphQL requests. This issue has been resolved and could result in improved performance.")),(0,r.mdx)("h2",{id:"june-27-2023"},"June 27, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-7"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Resolved an issue where error details from GraphQL sources appeared as a generic error. API Mesh now forwards the error details from the GraphQL source.")),(0,r.mdx)("h2",{id:"june-15-2023"},"June 15, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-7"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added support for automatically importing files for ",(0,r.mdx)("a",{parentName:"li",href:"./hooks.md#local-composers"},"local ",(0,r.mdx)("inlineCode",{parentName:"a"},"hooks")),".")),(0,r.mdx)("h2",{id:"june-6-2023"},"June 6, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-8"},"Enhancements"),(0,r.mdx)("p",null,"Fastly headers for Adobe Commerce sources no longer prefix headers with their source name. For more information, refer to ",(0,r.mdx)("a",{parentName:"p",href:"./headers.md#fastly-prefixing"},"Fastly prefixing"),". This enhancement introduces ",(0,r.mdx)("a",{parentName:"p",href:"./upgrade.md#upgrading-to-the-june-1-2023-release"},"breaking changes")," for a narrow use case where the modified headers were being consumed."),(0,r.mdx)("h3",{id:"bug-fixes-8"},"Bug fixes"),(0,r.mdx)("p",null,"Resolved an issue that caused meshes to not update immediately."),(0,r.mdx)("h2",{id:"june-1-2023"},"June 1, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"bug-fixes-9"},"Bug fixes"),(0,r.mdx)("p",null,'Resolved an issue that caused a "job stalled more than allowable limit" error when provisioning a mesh.'),(0,r.mdx)("h2",{id:"may-16-2023"},"May 16, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-9"},"Enhancements"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"./hooks.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"hooks")," plugin")," allows you to invoke a composable ",(0,r.mdx)("a",{parentName:"p",href:"./hooks.md#local-vs-remote-functions"},"local or remote")," function on a targeted node."),(0,r.mdx)("h2",{id:"may-4-2023"},"May 4, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-10"},"Enhancements"),(0,r.mdx)("p",null,"Added several new tools for local development. We will continue to enhance developer tooling in future releases."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Added an ",(0,r.mdx)("a",{parentName:"li",href:"./developer-tools.md#create-a-local-environment"},(0,r.mdx)("inlineCode",{parentName:"a"},"init")," command")," to set up a local environment."),(0,r.mdx)("li",{parentName:"ul"},"Enabled the use of a ",(0,r.mdx)("inlineCode",{parentName:"li"},".env")," file to supply your mesh with ",(0,r.mdx)("a",{parentName:"li",href:"./developer-tools.md#environment-variables"},"environment variables"),"."),(0,r.mdx)("li",{parentName:"ul"},"Added the ability to ",(0,r.mdx)("a",{parentName:"li",href:"./developer-tools.md#reference-files-directly"},"reference local files directly")," in your mesh, which removes the need to stringify and minify file attachments.")),(0,r.mdx)("h3",{id:"bug-fixes-10"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Resolved an issue where the ",(0,r.mdx)("inlineCode",{parentName:"li"},"useGETForQueries")," flag was not respected."),(0,r.mdx)("li",{parentName:"ul"},"Operational headers are now converted to ",(0,r.mdx)("inlineCode",{parentName:"li"},"lowercase")," at runtime to prevent capitalization mismatches.")),(0,r.mdx)("h2",{id:"april-20-2023"},"April 20, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-11"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Internal autoscaling updates.")),(0,r.mdx)("h3",{id:"bug-fixes-11"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'Resolved an issue that could cause a "Module Not Found" error.')),(0,r.mdx)("h2",{id:"mar-31-2023"},"Mar 31, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-12"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Improved performance."),(0,r.mdx)("li",{parentName:"ul"},"Updated logging protocols to support backend server updates.")),(0,r.mdx)("h2",{id:"mar-16-2023"},"Mar 16, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-13"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Improved API Mesh performance and response times.")),(0,r.mdx)("h3",{id:"bug-fixes-12"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Resolved an issue where ",(0,r.mdx)("inlineCode",{parentName:"li"},"access-control-allow-origin")," header would not respect the ",(0,r.mdx)("inlineCode",{parentName:"li"},"responseConfig"),".")),(0,r.mdx)("h2",{id:"feb-23-2023"},"Feb 23, 2023"),(0,r.mdx)("p",null,"This release contains the following changes to API Mesh:"),(0,r.mdx)("h3",{id:"enhancements-14"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The new ",(0,r.mdx)("a",{parentName:"li",href:"work-with-mesh.md#include-httpdetails-in-query-responses"},(0,r.mdx)("inlineCode",{parentName:"a"},"includeHTTPDetails")," option")," controls whether users who query the mesh receive ",(0,r.mdx)("inlineCode",{parentName:"li"},"httpDetails")," in their responses.")),(0,r.mdx)("h3",{id:"bug-fixes-13"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Resolved an issue that allowed meshes to have multiple ",(0,r.mdx)("inlineCode",{parentName:"li"},"sources")," with the same name.")),(0,r.mdx)("h3",{id:"breaking-changes"},"Breaking changes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"If your mesh has multiple sources with the same name, you will need to change them to unique names and then ",(0,r.mdx)("a",{parentName:"p",href:"create-mesh.md#update-an-existing-mesh"},"update your mesh"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"httpDetails")," header has been deprecated in favor of ",(0,r.mdx)("a",{parentName:"p",href:"work-with-mesh.md#include-httpdetails-in-query-responses"},(0,r.mdx)("inlineCode",{parentName:"a"},"includeHTTPDetails")),"."))),(0,r.mdx)("h2",{id:"jan-17-2023"},"Jan 17, 2023"),(0,r.mdx)("p",null,"We have made the following changes since the API Mesh beta:"),(0,r.mdx)("h3",{id:"enhancements-15"},"Enhancements"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"The new ",(0,r.mdx)("a",{parentName:"p",href:"command-reference.md#aio-api-meshstatus"},(0,r.mdx)("inlineCode",{parentName:"a"},"aio api-mesh:status")," command")," allows you to:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"View where your mesh is in the provisioning process")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"See any provisioning errors associated with your mesh")))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Error messages will now contain ",(0,r.mdx)("inlineCode",{parentName:"p"},"RequestIds"),". You can provide these IDs to support when troubleshooting errors.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Responses now include response time information for each source in your mesh.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Use the ",(0,r.mdx)("a",{parentName:"p",href:"headers.md#retrieving-handler-details"},(0,r.mdx)("inlineCode",{parentName:"a"},"httpdetails"))," header to see response times and other information from your source handlers.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"nvm")," 18.x.x is required to upgrade API mesh. See ",(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#software-updates"},"Software updates")," for details."))),(0,r.mdx)("h3",{id:"bug-fixes-14"},"Bug fixes"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Resolved an issue that previously prevented mesh updates from propagating.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},"Mesh updates that result in errors no longer overwrite the mesh in the selected workspace."))),(0,r.mdx)("h3",{id:"breaking-changes-1"},"Breaking changes"),(0,r.mdx)("p",null,"The following ",(0,r.mdx)("a",{parentName:"p",href:"upgrade.md"},"breaking changes")," must be addressed to make previously created meshes compatible with the new version."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#update-existing-meshes"},"Mesh updates")," - All previously created meshes will need to be ",(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#update-existing-meshes"},"updated")," to use the new version.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#runtime-headers"},"Runtime headers")," - Runtime headers using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"GGW-SH-")," format are no longer supported. Instead, use ",(0,r.mdx)("a",{parentName:"p",href:"../reference/handlers/openapi.md#headers-from-context"},"dynamic header values"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#mesh-create-and-update-time"},"Mesh create and update time changes")," - The ",(0,r.mdx)("inlineCode",{parentName:"p"},"create")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"update")," processes now run asynchronously and will typically take a few seconds to process. However, complex meshes, may take longer.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#cors-formatting-change"},"CORS formatting")," - CORS headers format has changed."))),(0,r.mdx)("p",null,"Additionally, the beta release contained two experimental features that are not supported in the GA release:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#resolver-composition-transform-deprecated"},"composeResolvers deprecation")," - The Resolver Composition transform has been deprecated.")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"upgrade.md#hooks-transform-temporarily-disabled"},"Hook transform deprecation")," - The Hook transform requires additional fixes and testing. We intend to re-enable this transform in a subsequent release."))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-gateway-release-notes-md-218559146afcf5bd93c1.js.map