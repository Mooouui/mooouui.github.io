import{_ as n,o as s,c as a,a as e}from"./app-C95d1NCF.js";const t={},p=e(`<h1 id="guess-number-game" tabindex="-1"><a class="header-anchor" href="#guess-number-game"><span>Guess Number Game</span></a></h1><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># Guess Number</span>
<span class="token keyword">import</span> random

logo <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
                __              __        __                                    __
  _____ ____ _ / /_____ __  __ / /____ _ / /_ ___     ____   __  __ ____ ___   / /_   ___   _____
 / ___// __ \`// // ___// / / // // __ \`// __// _ \\   / __ \\ / / / // __ \`__ \\ / __ \\ / _ \\ / ___/
/ /__ / /_/ // // /__ / /_/ // // /_/ // /_ /  __/  / / / // /_/ // / / / / // /_/ //  __// /
\\___/ \\__,_//_/ \\___/ \\__,_//_/ \\__,_/ \\__/ \\___/  /_/ /_/ \\__,_//_/ /_/ /_//_.___/ \\___//_/

&quot;&quot;&quot;</span>
<span class="token comment"># random.randint(1,100)</span>
guess_number <span class="token operator">=</span> random<span class="token punctuation">.</span>choice<span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
easy_try_time <span class="token operator">=</span> <span class="token number">10</span>
hard_try_time <span class="token operator">=</span> <span class="token number">5</span>


<span class="token keyword">def</span> <span class="token function">play_game</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>logo<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome to the Number Guessing Game!&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;I&#39;m thinking of a number between 1 and 100.&quot;</span><span class="token punctuation">)</span>

    <span class="token comment"># print(f&quot;Pssst, the correct answer is {guess_number}&quot;)</span>
    <span class="token builtin">type</span> <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Choose a difficulty. Type &#39;easy&#39; or &#39;hard&#39;&quot;</span><span class="token punctuation">)</span>

    try_nums <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">if</span> <span class="token builtin">type</span> <span class="token operator">==</span> <span class="token string">&quot;easy&quot;</span><span class="token punctuation">:</span>
        try_nums <span class="token operator">=</span> easy_try_time
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        try_nums <span class="token operator">=</span> hard_try_time

    end_game <span class="token operator">=</span> <span class="token boolean">False</span>
    <span class="token keyword">while</span> <span class="token keyword">not</span> end_game<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;You have </span><span class="token interpolation"><span class="token punctuation">{</span>try_nums<span class="token punctuation">}</span></span><span class="token string"> attempts remaining to guess the number.&quot;</span></span><span class="token punctuation">)</span>
        num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Make a guess:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> num <span class="token operator">==</span> guess_number<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;You got it! The answer was </span><span class="token interpolation"><span class="token punctuation">{</span>num<span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span><span class="token punctuation">)</span>
            end_game <span class="token operator">=</span> <span class="token boolean">True</span>
        <span class="token keyword">elif</span> num <span class="token operator">&lt;</span> guess_number<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Too low.&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Too High.&quot;</span><span class="token punctuation">)</span>

        try_nums <span class="token operator">-=</span> <span class="token number">1</span>

        <span class="token keyword">if</span> try_nums <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Guess again.&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;You&#39;ve run out of guesses, you lose, the answer is </span><span class="token interpolation"><span class="token punctuation">{</span>guess_number<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
            end_game <span class="token operator">=</span> <span class="token boolean">True</span>


play_game<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","index.html.vue"]]),_=JSON.parse('{"path":"/","title":"Home","lang":"zh-CN","frontmatter":{"home":true,"title":"Home","heroImage":"/hero.svg","actions":null,"footer":"MIT Licensed | Copyright © 2018-present VuePress Community"},"headers":[],"git":{"updatedTime":1718611692000,"contributors":[{"name":"Moui","email":"alanjingzhixin@gmail.com","commits":1}]},"filePathRelative":"index.md"}');export{r as comp,_ as data};
