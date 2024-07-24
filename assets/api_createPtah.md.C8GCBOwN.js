import{_ as s,s as i,f as a,ag as e}from"./chunks/framework.66Bsmkk4.js";const g=JSON.parse('{"title":"Application Instance API","description":"","frontmatter":{},"headers":[],"relativePath":"api/createPtah.md","filePath":"api/createPtah.md"}'),t={name:"api/createPtah.md"},n=e(`<h1 id="application-instance-api" tabindex="-1">Application Instance API <a class="header-anchor" href="#application-instance-api" aria-label="Permalink to &quot;Application Instance API&quot;">​</a></h1><h2 id="createptah" tabindex="-1">createPtah() <a class="header-anchor" href="#createptah" aria-label="Permalink to &quot;createPtah()&quot;">​</a></h2><p>Creates a new application instance.</p><ul><li><p><strong>Details</strong><br> The <code>id</code> parameter is required and is used to distinguish different instances.</p></li><li><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createPtah } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ptahjs/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ptah</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createPtah</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ve1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></li></ul><h3 id="vue" tabindex="-1">$vue() <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;$vue()&quot;">​</a></h3><p>The <code>$vue</code> method is used to bind a Vue instance. This allows automatic registration of Vue components and other Vue-related operations within the application.</p><ul><li><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> App </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./App.vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptah.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(app);</span></span></code></pre></div></li></ul><h3 id="proxydata" tabindex="-1">$proxyData() <a class="header-anchor" href="#proxydata" aria-label="Permalink to &quot;$proxyData()&quot;">​</a></h3><p>The <code>$proxyData</code> method is used to convert data into reactive data, enabling effective two-way data binding in Vue.</p><ul><li><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { reactive } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptah.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$proxyData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data));</span></span></code></pre></div></li></ul><h3 id="mode" tabindex="-1">$mode() <a class="header-anchor" href="#mode" aria-label="Permalink to &quot;$mode()&quot;">​</a></h3><p>The <code>$mode</code> method is used to set different scene modes. You can choose from the following built-in mode extensions:</p><ul><li><code>@ptahjs/mode-web</code>: For Web scene</li><li><code>@ptahjs/mode-mobile</code>: For Mobile scene</li><li><code>@ptahjs/mode-canvas</code>: For DOM Canvas scene</li><li><code>@ptahjs/mode-3d</code>: For 3D scene</li><li><code>@ptahjs/mode-flow</code>: For Flow scene</li></ul><p>To use these extensions, you need to install the corresponding packages via <code>pnpm</code>:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ptahjs/mode-web</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ptahjs/mode-mobile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ptahjs/mode-canvas</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ptahjs/mode-3d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @ptahjs/mode-flow</span></span></code></pre></div><ul><li><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ModeWeb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ptahjs/mode-web&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptah.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ModeWeb);</span></span></code></pre></div></li></ul><h3 id="load" tabindex="-1">$load() <a class="header-anchor" href="#load" aria-label="Permalink to &quot;$load()&quot;">​</a></h3><p>The <code>$load</code> method is used to load resources. Supported built-in resource types include:</p><ul><li><p><code>ResourceType.SceneProps</code>: Scene parameters</p></li><li><p><code>ResourceType.Modules</code>: Modules</p></li><li><p><code>ResourceType.ModuleProps</code>: Module parameters</p></li><li><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ResourceType } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@ptahjs/core&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ptah.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ResourceType.Modules, []);</span></span></code></pre></div><p>Note: You can customize resource names and data.</p></li></ul><h3 id="mount" tabindex="-1">mount() <a class="header-anchor" href="#mount" aria-label="Permalink to &quot;mount()&quot;">​</a></h3><p>The <code>mount</code> method is used to mount and start the application.</p><div class="tip custom-block"><p class="custom-block-title">Note</p><p>Methods with the <code>$</code> prefix are built-in plugin extension features and support chaining to simplify configuration.</p></div><h3 id="chaining" tabindex="-1">Chaining <a class="header-anchor" href="#chaining" aria-label="Permalink to &quot;Chaining&quot;">​</a></h3><p>Using chaining allows you to complete multiple configuration and initialization steps in one go:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createPtah</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ve1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vueInstance)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$proxyData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> reactive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ModeWeb)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ResourceType.Modules, [])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div>`,25),p=[n];function l(h,o,k,d,r,c){return a(),i("div",null,p)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};