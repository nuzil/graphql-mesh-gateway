"use strict";(self.webpackChunkgraphql_mesh_gateway=self.webpackChunkgraphql_mesh_gateway||[]).push([[1206],{91515:function(e,n,t){var r=t(42982),i=t(4942),l=(t(38559),t(15007)),o=t(1597),a=t(64983),s=t(86029),d=t(26777),u=t(44264),v=t(42075),p=t(23576),c=t(69679),h=t(56013),m=t(24149),f=t(48261),g=t(31160),b=t(21183),y=t(45553),x=t(47029),w=t(60325),Z=t(1931),P=t(59307);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var C=function(e){for(var n=e.childrenArray,t=e.query,r=e.hasSideNav,i=[],o=null,a=null,s=function(){var e=n[0],s=0;Object.keys(P.a).forEach((function(d){var v;(null==e||null===(v=e.props)||void 0===v?void 0:v.mdxType)===d&&function(){s++;var d=[];if((e.props.slots||e.props.repeat)&&function(){for(var t=Math.max(parseInt(e.props.repeat)||1,1),r=function(r){d=d.concat((e.props.slots||"element").split(",").map((function(e,i){return[""+e.trim()+(1===t?"":r),n[d.length+i+1]]})))},i=0;i<t;i++)r(i)}(),d.length){s+=d.length;var v=Object.fromEntries(d);"Variant"===e.props.mdxType&&(v.query=t),"Hero"===e.props.mdxType&&r&&(v.width="calc("+u.Av+" - "+u.dP+");");var p=(0,l.cloneElement)(e,j({},v));"Hero"===e.props.mdxType?o=o||p:"Resources"===e.props.mdxType?a=a||p:i.push(p)}else i.push(e)}()})),0===s&&(s++,i.push(e)),n=n.splice(s)};n.length;)s();return{filteredChildren:i,heroChild:o,resourcesChild:a}},q={name:"13fp5r9",styles:"display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:var(--spectrum-global-dimension-size-200)"},A={name:"4zleql",styles:"display:block"},k={name:"1ggp1wf",styles:"margin-right:var(--spectrum-global-dimension-size-400)"},z={name:"zjik7",styles:"display:flex"},D={name:"7wiue4",styles:"align-items:center;justify-content:center;display:flex;flex-direction:column"};n.Z=function(e){var n,t=e.children,i=e.pageContext,O=e.query,M=(0,l.useContext)(d.Z),N=M.hasSideNav,S=M.siteMetadata,_=M.location,E=M.allSitePage,T=M.allMdx,B=M.allGithub,L=M.allGithubContributors,X=void 0===i,G=l.Children.toArray(t);if(X||"none"===(null==i||null===(n=i.frontmatter)||void 0===n?void 0:n.layout)){var H=C({childrenArray:(0,w.L)(G),query:O,hasSideNav:N}).filteredChildren;return X?(0,s.tZ)(a.MDXProvider,null,H):(0,s.tZ)(a.MDXProvider,{components:j(j({},Z.t),P.a)},H,(0,s.tZ)(v.$,{hasSideNav:N}))}var Y,J,K,R,$,I,V,F,Q,U,W,ee,ne,te,re,ie,le,oe,ae,se,de=(0,u.kR)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),ue=(0,u.P4)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),ve=(0,u.sl)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),pe=ve.nextPage,ce=ve.previousPage,he=null==i||null===(Y=i.frontmatter)||void 0===Y?void 0:Y.contributor_name,me=null==i||null===(J=i.frontmatter)||void 0===J?void 0:J.contributor_link,fe=null==i||null===(K=i.frontmatter)||void 0===K?void 0:K.edition,ge=null==E?void 0:E.nodes.find((function(e){var n=e.path;return(0,o.dq)(n)===(null==_?void 0:_.pathname)})),be=null!==(R=null==ge?void 0:ge.component)&&void 0!==R?R:"",ye=null==T?void 0:T.nodes.find((function(e){return e.fileAbsolutePath===be})),xe=null!==($=null==ye?void 0:ye.tableOfContents)&&void 0!==$?$:{},we=null==B?void 0:B.nodes[0],Ze=we.repository,Pe=we.default_branch,Oe=we.root,je=null==L?void 0:L.nodes.find((function(e){return e.path===be})),Ce=null!==(I=null==je?void 0:je.contributors)&&void 0!==I?I:[],qe=be.replace(/.*\/src\/pages\//g,""),Ae=void 0!==(null==i||null===(V=i.frontmatter)||void 0===V?void 0:V.hideBreadcrumbNav)&&i.frontmatter.hideBreadcrumbNav;if("boolean"!=typeof Ae)throw new Error("hideBreadcrumbNav is not a boolean. Correct use hideBreadcrumbNav: true");var ke=S.home,ze=(0,u.A6)(_.pathname),De=(0,u.Gh)(null==S?void 0:S.pages),Me=(0,u.Yx)(ze,De),Ne=(0,u.xH)(ze,Me),Se=(0,u.Lh)(null==_?void 0:_.pathname,null==S?void 0:S.subPages),_e=[];if(Se.length)for(var Ee=Se[Se.length-1].level+1,Te=function(e){var n=Se.filter((function(n){return n.level===e}));n.length&&_e.push(n.pop())},Be=0;Be<Ee;Be++)Te(Be);var Le=!1;null!=i&&null!==(F=i.frontmatter)&&void 0!==F&&F.jsDoc&&(Le=!0,G=(0,w.L)(G));var Xe=C({childrenArray:G,hasSideNav:N}),Ge=Xe.filteredChildren,He=Xe.heroChild,Ye=Xe.resourcesChild,Je=null===He,Ke=null!==He&&(!He.props.variant||"default"===He.props.variant),Re=null!==He&&He.props.variant&&"default"!==He.props.variant,$e=null==xe||null===(Q=xe.items)||void 0===Q||null===(U=Q[0])||void 0===U?void 0:U.items,Ie=!He&&(N||Le)&&$e&&($e.length>1||1===$e.length&&(null===(W=$e[0])||void 0===W||null===(ee=W.items)||void 0===ee?void 0:ee.length)>1||(null===(ne=$e[0])||void 0===ne?void 0:ne.title)),Ve=(null==de?void 0:de.pathname)===(null==ue||null===(te=ue[0])||void 0===te?void 0:te.pathname),Fe=[];return Ie&&Fe.push((0,u.MY)(2)+" - var(--spectrum-global-dimension-size-400)"),N&&Fe.push(u.dP),(0,s.tZ)(a.MDXProvider,{components:j(j({},Z.t),P.a)},(0,s.tZ)("main",{css:D},He&&He,(0,s.tZ)("div",{css:(0,s.iv)(Re?"width: var(--spectrum-global-dimension-static-grid-fluid-width);":"\n                max-width: "+u.Av+";\n                margin: 0 var(--spectrum-global-dimension-size-800);\n                "," ",Ke&&"\n                h2:first-of-type {\n                  margin-top: 0 !important;\n                }\n              ","@media screen and (max-width: ",u.Av,"){max-width:none;margin:0 var(--spectrum-global-dimension-size-400);}")},(0,s.tZ)("div",{css:z},(0,s.tZ)("div",{css:(0,s.iv)("width:",Re?"\n                      var(--spectrum-global-dimension-static-grid-fluid-width);\n                      text-align: center;\n                      ":(0,u.MY)(12,Fe),";@media screen and (max-width: ",u.Av,"){width:100%;}")},Je&&(0,s.tZ)("div",{css:(0,s.iv)("display:flex;margin-top:var(--spectrum-global-dimension-size-500);margin-bottom:var(--spectrum-global-dimension-size-500);@media screen and (max-width: ",u.Av,"){flex-direction:column;}")},!Ae&&Me&&(0,s.tZ)("div",{css:k},!0!==(null==ke?void 0:ke.hidden)&&null!=ke&&ke.title&&null!=ke&&ke.href?(0,s.tZ)(m.O,{pages:[u.JK,ke,j(j({},Me),{},{href:(0,o.dq)(Me.href)}),Ne&&j(j({},Ne),{},{href:(0,o.dq)(Ne.href)})].concat((0,r.Z)(_e.map((function(e){return j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))}):(0,s.tZ)(m.O,{pages:[u.JK,(null==S||null===(re=S.pages)||void 0===re?void 0:re.length)>1?j(j({},null==S||null===(ie=S.pages)||void 0===ie?void 0:ie[0]),{},{href:(0,o.dq)(null==S||null===(le=S.pages)||void 0===le||null===(oe=le[0])||void 0===oe?void 0:oe.href)}):null,j(j({},Me),{},{href:(0,o.dq)(Me.href)}),Ne&&j(j({},Ne),{},{href:(0,o.dq)(Ne.href)})].concat((0,r.Z)(_e.map((function(e){return e.title===(null==Me?void 0:Me.title)&&e.href===(null==Me?void 0:Me.href)?null:j(j({},e),{},{href:(0,o.dq)((0,u.Mi)(e.href))})}))))})),(0,s.tZ)("div",{css:(0,s.iv)("margin-left:auto;display:flex;align-items:center;@media screen and (max-width: ",u.Av,"){margin-left:0;margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(h.X,{repository:Ze,branch:Pe,root:Oe,pagePath:qe}))),(0,s.tZ)("div",{css:A},fe&&(0,s.tZ)(g.c,{name:fe}),me&&(0,s.tZ)(f.x,{name:he,link:me})),Ge,Je&&Ve&&(0,s.tZ)(y.x,{pages:ue}),Je&&(0,s.tZ)(x.m,{nextPage:pe,previousPage:ce}),!Re&&(0,s.tZ)("div",{css:q},(0,s.tZ)("div",null,(0,s.tZ)(p.T,{repository:Ze,branch:Pe,root:Oe,pagePath:qe,contributors:Ce,externalContributors:null==i||null===(ae=i.frontmatter)||void 0===ae?void 0:ae.contributors,date:null!==(se=Ce[0])&&void 0!==se&&se.date?new Date(Ce[0].date).toLocaleDateString():""})),(0,s.tZ)("div",{css:(0,s.iv)("@media screen and (max-width: ",u.Av,"){margin-top:var(--spectrum-global-dimension-size-200);}")},(0,s.tZ)(c.x,null)))),Ie&&(0,s.tZ)(b.m,{tableOfContents:xe}),Ye&&Ye)),(0,s.tZ)(v.$,{hasSideNav:N})))}}}]);
//# sourceMappingURL=2dee68d8-473a1449c36e3209b1c0.js.map