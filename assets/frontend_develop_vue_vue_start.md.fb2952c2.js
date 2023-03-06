import{_ as s,c as n,o as a,d as l}from"./app.2f931ac3.js";const A=JSON.parse('{"title":"Vue 基礎 Part 1.","description":"","frontmatter":{},"headers":[{"level":2,"title":"Option API 與 Composition API 兩種寫法","slug":"option-api-與-composition-api-兩種寫法","link":"#option-api-與-composition-api-兩種寫法","children":[]},{"level":2,"title":"Vue生命週期","slug":"vue生命週期","link":"#vue生命週期","children":[]}],"relativePath":"frontend_develop/vue/vue_start.md","lastUpdated":null}'),p={name:"frontend_develop/vue/vue_start.md"},o=l(`<h1 id="vue-基礎-part-1" tabindex="-1">Vue 基礎 Part 1. <a class="header-anchor" href="#vue-基礎-part-1" aria-hidden="true">#</a></h1><p><code>.vue</code>檔裡面骨架長怎樣? 簡單敘述一下分為三個區塊 :</p><ul><li><code>template</code> HTML模板區</li><li><code>style</code> CSS編譯區 <ul><li><code>&lt;style&gt;</code></li><li><code>&lt;style scope&gt;</code> 加入 scope 屬性或 module 屬性，只對此模板元件。</li></ul></li><li><code>script</code> Vue程式區，這裡還有分兩種寫法 : <ul><li><code>&lt;script&gt;</code> 針對<code>&#39;具名輸出&#39;</code>、<code>&#39;指定Options&#39;</code>、<code>&#39;只執行一次的元件&#39;</code>使用。</li><li><code>&lt;script setup&gt;</code> 加入 setup 屬性，其實就是Composition API寫法<code>&lt;script&gt;</code> + <code>setup()</code>。</li></ul></li></ul><p>也可以在上述的標籤中加入 <code>lang</code> 屬性，針對<code>&#39;ts&#39;</code>|<code>&#39;pug&#39;</code>|<code>&#39;scss&#39;</code>來編譯自己熟悉的項目。</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> html </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> p </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> font</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">size : 10px </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">        </span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="option-api-與-composition-api-兩種寫法" tabindex="-1"><em>Option API</em> 與 <em>Composition API</em> 兩種寫法 <a class="header-anchor" href="#option-api-與-composition-api-兩種寫法" aria-hidden="true">#</a></h2><p>Vue 3之後開始分為兩種寫法，如果一路從Vue 2寫上來，就可以體會兩種差異，也較能適應；不過既然有新寫法，我建議直接從Composition API開始著手。</p><p>以下是兩種寫法的差異 :</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Option API用法 :</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">data</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            data</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">methods</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">fuction</span><span style="color:#F07178;">():</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">使用的方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">computed</span><span style="color:#89DDFF;">:{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">fuction</span><span style="color:#F07178;">():</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">對data計算或加工</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Composition API用法</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">computed</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reactive</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> defualt</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setup</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// data 區</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">reactive</span><span style="color:#F07178;">[]</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// methods 區</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">function</span><span style="color:#F07178;"> xx(){ </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">使用的方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">function</span><span style="color:#F07178;"> xxx</span><span style="color:#89DDFF;">=()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">使用的方法</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// computed 區</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">function</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">computed</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">對data計算或加工</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xx</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">xxx</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Composition API 如果沒有刻意備註，看似比較亂，這是要求coding的人需要架構自主性，做好程式編寫的規則，保持讀碼的乾淨。</p></div><p>通常我會依照Vue 2的方式進行區域編寫，將data、methods、computed放在各自的區塊，這樣在讀碼時，較能對應各自的內容，如上述的寫法。不過這樣的區塊寫法，我覺得是要追溯到 Vue生命週期。</p><p>當然每個人或公司都有各自的編碼原則，主要目的也是為了編碼視覺上不要混亂，否則接手你後續編碼的人會吐血給你看。</p><h2 id="vue生命週期" tabindex="-1">Vue生命週期 <a class="header-anchor" href="#vue生命週期" aria-hidden="true">#</a></h2><p>陸續補上文章...</p>`,15),e=[o];function t(c,r,F,y,D,i){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{A as __pageData,C as default};
