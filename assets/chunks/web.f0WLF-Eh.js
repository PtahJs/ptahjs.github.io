import{P as l,W as u,S as W,M as m,a as v,E as g,b as h,u as P}from"./theme.CwWZtUYJ.js";import{_ as S,l as e,f,h as w,A as M,H as o,e as s}from"./framework.66Bsmkk4.js";const k={name:"Editorlayout",components:{Provider:l,Workspace:u,SourceModulesWidget:W,ModulePropsWidget:m,ScenesWidget:v,EventsWidget:g,ScenePropsWidget:h},setup(){const t=P({id:"ve-test-web",isProd:!1});return t.$store.addScene({active:!0,props:{title:"test"}}),{app:t}}},E={class:"lowcode"},b=o("div",{class:"lowcode-header"},"Header",-1),x={class:"lowcode-layout"},$={class:"lowcode-sidebar"},y={class:"lowcode-workspace"},B={class:"lowcode-aside"},C=o("div",{class:"lowcode-footer"},"Footer",-1);function H(t,N,V,c,A,F){const d=e("SourceModulesWidget"),n=e("Workspace"),a=e("ScenesWidget"),r=e("ScenePropsWidget"),i=e("ModulePropsWidget"),p=e("EventsWidget"),_=e("Provider");return f(),w(_,{app:c.app},{default:M(()=>[o("div",E,[b,o("div",x,[o("div",$,[s(d)]),o("div",y,[s(n)]),o("div",B,[s(a),s(r),s(i),s(p,{type:"module"})])]),C])]),_:1},8,["app"])}const z=S(k,[["render",H]]);export{z as c};