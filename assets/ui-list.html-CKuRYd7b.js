import{_ as r,r as s,o as n,c as i,b as e,d as o,e as c,a as t}from"./app-C95d1NCF.js";const l={},d=t('<h1 id="ui-list" tabindex="-1"><a class="header-anchor" href="#ui-list"><span>UI List</span></a></h1><h2 id="限制-list-面包屑的-filter" tabindex="-1"><a class="header-anchor" href="#限制-list-面包屑的-filter"><span>限制 List 面包屑的 Filter</span></a></h2><ol><li>编辑 Module</li><li>在 <strong>Link Type</strong> 中选择<code>List of Records</code></li><li>在 <strong>Arguments</strong> 中添加<code>&amp;sysparm_fixed_query=active=true</code></li></ol><h2 id="通过-url-parameters-导出-table-的记录-并且将他们转换为想要的-类型-json-xml-pdf-xls" tabindex="-1"><a class="header-anchor" href="#通过-url-parameters-导出-table-的记录-并且将他们转换为想要的-类型-json-xml-pdf-xls"><span>通过 URL parameters 导出 table 的记录 并且将他们转换为想要的 类型（JSON，XML，PDF，XLS）</span></a></h2>',4),p={href:"https://docs.servicenow.com/en-US/bundle/vancouver-api-reference/page/integrate/inbound-soap/reference/store-retrieve-records-complex-data-type.html",target:"_blank",rel:"noopener noreferrer"},m=t("<p>The general syntax is: <code>https://&lt;serviceNow-instance-name&gt;/&lt;table-name&gt;.do?&lt;Data-type-parameter&gt;</code></p><p>GET request examples:</p><table><thead><tr><th>Data type</th><th>Example query</th></tr></thead><tbody><tr><td>CSV</td><td><code>https://instance_name.service-now.com/incident.do?CSV&amp;sysparm_query=active=true</code></td></tr><tr><td>Excel</td><td><code>https://instance_name.service-now.com/incident.do?XLS&amp;sysparm_query=active=true</code></td></tr><tr><td>PDF</td><td><code>https://instance_name.service-now.com/incident.do?PDF&amp;sysparm_view=ess</code></td></tr><tr><td>RSS</td><td><code>https://instance_name.service-now.com/incident.do?RSS&amp;sysparm_view=ess</code></td></tr><tr><td>XML</td><td><code>https://instance_name.service-now.com/incident.do?XML&amp;sysparm_query=active=true</code></td></tr></tbody></table>",3);function h(u,_){const a=s("ExternalLinkIcon");return n(),i("div",null,[d,e("p",null,[e("a",p,[o("引用资源"),c(a)])]),m])}const v=r(l,[["render",h],["__file","ui-list.html.vue"]]),x=JSON.parse('{"path":"/service-now/client-script/ui-list.html","title":"UI List","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"限制 List 面包屑的 Filter","slug":"限制-list-面包屑的-filter","link":"#限制-list-面包屑的-filter","children":[]},{"level":2,"title":"通过 URL parameters 导出 table 的记录 并且将他们转换为想要的 类型（JSON，XML，PDF，XLS）","slug":"通过-url-parameters-导出-table-的记录-并且将他们转换为想要的-类型-json-xml-pdf-xls","link":"#通过-url-parameters-导出-table-的记录-并且将他们转换为想要的-类型-json-xml-pdf-xls","children":[]}],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"service-now/client-script/ui-list.md"}');export{v as comp,x as data};