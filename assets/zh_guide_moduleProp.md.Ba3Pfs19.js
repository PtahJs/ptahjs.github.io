import{_ as i,c as a,o as n,af as l}from"./chunks/framework.D6bkN3-B.js";const o=JSON.parse('{"title":"创建一个模块配置项","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/moduleProp.md","filePath":"zh/guide/moduleProp.md"}'),p={name:"zh/guide/moduleProp.md"};function t(h,s,e,k,r,E){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="创建一个模块配置项" tabindex="-1">创建一个模块配置项 <a class="header-anchor" href="#创建一个模块配置项" aria-label="Permalink to &quot;创建一个模块配置项&quot;">​</a></h1><h2 id="创建一个字符串配置项" tabindex="-1">创建一个字符串配置项 <a class="header-anchor" href="#创建一个字符串配置项" aria-label="Permalink to &quot;创建一个字符串配置项&quot;">​</a></h2><p>要创建一个字符串类型的配置项，可以使用 <code>createStringProp</code> 函数。以下是一个字符串配置项的示例：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createStringProp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    component: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;PropString&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    field: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;field1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;label field1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    defaultValue: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>在这个配置中，<code>PropString</code> 是一个 Vue 组件，你需要自己开发这个组件，或者可以使用以下示例代码作为参考：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { usePropsFormModel, configProps } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@ptahjs/creative-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;PropString&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    props: configProps,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> usePropsFormModel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(props);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{model.value} </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">placeholder</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{props.config.placeholder} /&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="为什么配置项需要自己开发" tabindex="-1">为什么配置项需要自己开发? <a class="header-anchor" href="#为什么配置项需要自己开发" aria-label="Permalink to &quot;为什么配置项需要自己开发?&quot;">​</a></h2><p>不同项目的 UI 组件可能会有不同的实现方式和样式。为了确保符合各自项目的设计规范，我们鼓励开发者自行创建和自定义这些配置项组件。这不仅允许开发者根据项目需求进行调整，还能确保统一性和一致性。</p><p>通过这种方式，你可以：</p><ul><li><strong>适应特定需求</strong>：根据项目的 UI 组件需求自定义配置项，以符合特定设计规范。</li><li><strong>提升灵活性</strong>：允许开发者更好地适应项目的不同需求和变化。</li><li><strong>优化用户体验</strong>：根据用户的反馈和需求不断改进和优化配置项组件。</li></ul><p>这种自定义的方式能够为开发者提供更大的创作空间和灵活性，让每个项目的 UI 组件都能精确符合其要求。</p>`,11)]))}const g=i(p,[["render",t]]);export{o as __pageData,g as default};
