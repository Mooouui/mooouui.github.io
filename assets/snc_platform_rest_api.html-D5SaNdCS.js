import{_ as a,r as s,o as n,c as i,b as e,d as r,e as o,a as l}from"./app-C95d1NCF.js";const c={},p=e("h1",{id:"snc-platform-rest-api-access",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#snc-platform-rest-api-access"},[e("span",null,"snc_platform_rest_api_access")])],-1),h={href:"https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0822211",target:"_blank",rel:"noopener noreferrer"},_=l('<h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h2><p>&#39;Table API&#39; ACL is an OOB ACL which is in inactive state and available in all the instances.</p><p>Please find the below link for the ACL:</p><p>https://instance.service-now.com/nav_to.do?uri=sys_security_acl.do?sys_id=9ef8bc918733320025fbd1a936cb0bdd</p><h2 id="release-or-environment" tabindex="-1"><a class="header-anchor" href="#release-or-environment"><span>Release or Environment</span></a></h2><p>Starting from Kingston release</p><h2 id="resolution" tabindex="-1"><a class="header-anchor" href="#resolution"><span>Resolution</span></a></h2><ol><li><p>Table API is used to make inbound calls to the instance to fetch data from the instance and there will be no impact on OOB scripts etc.</p></li><li><p>Any inbound integrations which use Table API will have to be reviewed. The user who is making the API calls must have &quot;snc_platform_rest_api_access&quot; role.</p></li><li><p>If the REST_Endpoint ACL is activated for a platform REST API, the snc_platform_rest_api_access role is required to call the API.</p></li><li><p>If users are getting &quot;Unauthorized access&quot; error in Service Portal when REST API level ACLs are in place, and the resolution to such common issues was granting <code>snc_platform_rest_api_access</code> role to the user.</p></li></ol>',8);function d(m,u){const t=s("ExternalLinkIcon");return n(),i("div",null,[p,e("p",null,[e("a",h,[r("Uses of activating OOB 'Table API' ACL"),o(t)])]),_])}const v=a(c,[["render",d],["__file","snc_platform_rest_api.html.vue"]]),b=JSON.parse('{"path":"/service-now/server-script/snc_platform_rest_api.html","title":"snc_platform_rest_api_access","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Description","slug":"description","link":"#description","children":[]},{"level":2,"title":"Release or Environment","slug":"release-or-environment","link":"#release-or-environment","children":[]},{"level":2,"title":"Resolution","slug":"resolution","link":"#resolution","children":[]}],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"service-now/server-script/snc_platform_rest_api.md"}');export{v as comp,b as data};