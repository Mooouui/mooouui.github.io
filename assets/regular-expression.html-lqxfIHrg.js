import{_ as s,o as n,c as a,a as e}from"./app-C95d1NCF.js";const t={},l=e(`<h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>正则表达式通常格式化为 <code>/&lt;rules&gt;/&lt;flags&gt;</code>，通常为了简洁而省略后面的 <code>/&lt;flags&gt;</code></p><blockquote><p>一个正则表达式就是定义一个搜索规则的一串字符集合</p></blockquote><p>正则通常用来:</p><ul><li>对输入进行校验</li><li>查找-替换操作</li><li>高级字符串操作</li><li>文件查找或者重命名</li><li>设置白名单或者黑名单</li><li>...</li></ul><h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集"><span>字符集</span></a></h2><ol><li><code>/[aeiou]/g</code> - 可以用一个字符集合去匹配某个字符</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;avocado&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[aeiou]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;a&quot;, &quot;o&quot;, &quot;a&quot;, &quot;o&quot;]</span>

<span class="token string">&quot;rhythm&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[aeiou]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>/p[aeiou]t/g</code> - 这个正则规则是匹配 p 然后接着是 aeiou 其中一个字符然后接着是 t</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;pat&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">p[aeiou]t</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//  [&quot;pat&quot;]</span>

<span class="token string">&quot;pit&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">p[aeiou]t</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;pit&quot;]</span>

<span class="token string">&quot;bat&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">p[aeiou]t</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>/[a-z]/g</code> - 26 个字母是有顺序的，连续的。用-来表示一段连续的字母</li></ol><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string">&quot;john_s&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&quot;j&quot;, &quot;o&quot;, &quot;h&quot;, &quot;n&quot;, &quot;s&quot;]</span>

<span class="token string">&quot;4952&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>

<span class="token string">&quot;LOUD&quot;</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags"><span>flags</span></a></h2><ul><li><strong>Global(g)</strong> - All examples thus far have had the global flag. When the global flag isn’t enabled, the regex doesn’t match anything beyond the first match.</li><li><strong>(Case) Insensitive (<code>i</code>)</strong> - As the name suggests, enabling this flag makes the regex case-insensitive in its matching.</li><li>...</li></ul><h2 id="需要转义的字符" tabindex="-1"><a class="header-anchor" href="#需要转义的字符"><span>需要转义的字符</span></a></h2><p>以下这些字符在正则表达式中通常有特殊的含义，在需要匹配它们的时候要转义</p><ul><li>|</li><li>{}</li><li>()</li><li>[]</li><li>^ $</li><li><ul><li><ul><li>?</li></ul></li></ul></li><li>\\</li><li>. (这个符号表示匹配任意字符，在字符集合里如果表示要匹配. 则不需要转义)</li><li>- (- 这个符号在字符集合中出现的时候，可能会表示范围)</li></ul><p>当我们想要匹配这些特殊字符的时候，就需要转义啦，就是**在这些字符前面加上**</p>`,19),i=[l];function o(p,c){return n(),a("div",null,i)}const r=s(t,[["render",o],["__file","regular-expression.html.vue"]]),g=JSON.parse('{"path":"/front-end/web/regular-expression.html","title":"正则表达式","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"字符集","slug":"字符集","link":"#字符集","children":[]},{"level":2,"title":"flags","slug":"flags","link":"#flags","children":[]},{"level":2,"title":"需要转义的字符","slug":"需要转义的字符","link":"#需要转义的字符","children":[]}],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"front-end/web/regular-expression.md"}');export{r as comp,g as data};