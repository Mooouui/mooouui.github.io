import{_ as n,o as s,c as a,a as t}from"./app-C95d1NCF.js";const e={},p=t(`<h1 id="soap-message" tabindex="-1"><a class="header-anchor" href="#soap-message"><span>SOAP Message</span></a></h1><h2 id="sample" tabindex="-1"><a class="header-anchor" href="#sample"><span>Sample</span></a></h2><p>将一个 SOAP API 的 response 作为 attachment 保存</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> sm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">sn_ws<span class="token punctuation">.</span>SOAPMessageV2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sm<span class="token punctuation">.</span><span class="token function">setEndpoint</span><span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sm<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;application/soap+xml&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sm<span class="token punctuation">.</span><span class="token function">setBasicAuth</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pwd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
&lt;soap:Envelope
	xmlns:soap=&quot;http://www.w3.org/2003/05/soap-envelope&quot;
	xmlns:pub=&quot;http://xmlns.oracle.com/oxp/service/PublicReportService&quot;&gt;
    &lt;soap:Header/&gt;
    &lt;soap:Body&gt;
        &lt;pub:runReport&gt;
            &lt;pub:reportRequest&gt;
                &lt;pub:parameterNameValues&gt;
                    &lt;pub:item&gt;
                        &lt;!--Parameter Name:--&gt;
                        &lt;pub:name&gt;p_vendor_number&lt;/pub:name&gt;
                        &lt;pub:values&gt;
                            &lt;!--Parameter Value:--&gt;
                            &lt;pub:item&gt;&lt;/pub:item&gt;
                        &lt;/pub:values&gt;
                    &lt;/pub:item&gt;
                    &lt;pub:item&gt;
                        &lt;!--Parameter Name:--&gt;
                        &lt;pub:name&gt;p_vendor_name&lt;/pub:name&gt;
                        &lt;pub:values&gt;
                            &lt;!--Parameter Value:--&gt;
                            &lt;pub:item&gt;&lt;/pub:item&gt;
                        &lt;/pub:values&gt;
                    &lt;/pub:item&gt;
                &lt;/pub:parameterNameValues&gt;
            &lt;/pub:reportRequest&gt;
        &lt;/pub:runReport&gt;
    &lt;/soap:Body&gt;
&lt;/soap:Envelope&gt;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
sm<span class="token punctuation">.</span><span class="token function">setRequestBody</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> response <span class="token operator">=</span> sm<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

gs<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">haveError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> responseBody <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getBody</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> xmlDoc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLDocument2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
xmlDoc<span class="token punctuation">.</span><span class="token function">parseXML</span><span class="token punctuation">(</span>responseBody<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> base64Encodedcontent <span class="token operator">=</span> xmlDoc<span class="token punctuation">.</span><span class="token function">getNodeText</span><span class="token punctuation">(</span><span class="token string">&quot;//ns2:reportBytes&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> attachment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlideSysAttachment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> rec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GlideRecord</span><span class="token punctuation">(</span><span class="token string">&quot;xxx&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> incidentSysID <span class="token operator">=</span> <span class="token string">&quot;3e6831d51b0d421087378550f54bcbe1&quot;</span><span class="token punctuation">;</span>
rec<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>incidentSysID<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fileName <span class="token operator">=</span> <span class="token string">&quot;example.csv&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> contentType <span class="token operator">=</span> <span class="token string">&quot;text/csv&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> agr <span class="token operator">=</span> attachment<span class="token punctuation">.</span><span class="token function">writeBase64</span><span class="token punctuation">(</span>
  rec<span class="token punctuation">,</span>
  fileName<span class="token punctuation">,</span>
  contentType<span class="token punctuation">,</span>
  base64Encodedcontent
<span class="token punctuation">)</span><span class="token punctuation">;</span>

gs<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;The attachment sys_id is: &quot;</span> <span class="token operator">+</span> agr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(e,[["render",i],["__file","soap-message.html.vue"]]),d=JSON.parse('{"path":"/service-now/server-script/soap-message.html","title":"SOAP Message","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Sample","slug":"sample","link":"#sample","children":[]}],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"service-now/server-script/soap-message.md"}');export{r as comp,d as data};
