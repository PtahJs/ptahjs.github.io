import{_ as s,c as a,o as i,a8 as t}from"./chunks/framework.D4kDUKjx.js";const E=JSON.parse('{"title":"usePtah()","description":"","frontmatter":{},"headers":[],"relativePath":"zh/api/usePtah.md","filePath":"zh/api/usePtah.md"}'),n={name:"zh/api/usePtah.md"},e=t(`<h1 id="useptah" tabindex="-1">usePtah() <a class="header-anchor" href="#useptah" aria-label="Permalink to &quot;usePtah()&quot;">​</a></h1><p><code>usePtah</code> 用于获取和操作 <code>ptah</code> 实例。以下是该函数的详细信息和使用示例。</p><ul><li><p><strong>详细信息</strong></p><ul><li><strong>id</strong>: 必填参数，用于区分不同的 <code>ptah</code> 实例。</li><li><strong>isProd</strong>: 可选参数，指定是否处于生产环境。默认值为 <code>false</code>。</li><li><strong>data</strong>: 可选参数，传入 JSON 数据，用于将数据回显并渲染成页面。</li></ul></li><li><p><strong>示例</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { usePtah } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ptahjs/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> usePtah</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ve1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  isProd: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // data: pageJson,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></li></ul>`,3),h=[e];function p(l,o,k,r,d,c){return i(),a("div",null,h)}const u=s(n,[["render",p]]);export{E as __pageData,u as default};