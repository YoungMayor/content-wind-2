import S from"./ContentSlot.e9b6e8f9.js";import{d as w,r as i,a6 as $,b as m,c,e as C,g as y,N as t,ab as N,w as T,n as k,a1 as B,t as h,f as F,T as M,l as R}from"./entry.456e00f5.js";import{u as W,o as V,f as z,s as D,a as E}from"./floating-ui.vue.esm.63372678.js";import{a as I,b as K}from"./index.de675691.js";const q=["tabindex","aria-describedby"],O=["id"],P=w({__name:"Tooltip",props:{content:{type:String,required:!0},tabbable:{type:Boolean,default:!1},maxWidth:{type:String,default:"240px"},offset:{type:Number,default:4},delay:{type:Number,default:200},strategy:{type:String,default:"absolute"},placement:{type:String,default:"top"}},setup(n){const s=n,a=i(!1),u=I(o=>{f.value||(a.value=o)},s.delay),r=i(null),d=i(null),{x:g,y:_,strategy:b,placement:v}=W(r,d,{strategy:s.strategy,middleware:[V(s.offset),z(),D({padding:4})],placement:s.placement,whileElementsMounted:E}),{focused:f}=K(r);$(f,o=>{o?a.value=!0:a.value=!1});const p=Math.random().toString(36).slice(2,7);return(o,e)=>{const x=S;return m(),c("span",{class:"tooltip",onMouseenter:e[3]||(e[3]=l=>t(u)(!0)),onMouseleave:e[4]||(e[4]=l=>t(u)(!1))},[C("span",{ref_key:"triggerRef",ref:r,tabindex:n.tabbable?0:-1,class:"trigger","aria-describedby":t(p),onFocus:e[0]||(e[0]=l=>a.value=!0),onBlur:e[1]||(e[1]=l=>a.value=!1),onKeydown:e[2]||(e[2]=N(l=>a.value=!1,["esc"]))},[y(x,{use:o.$slots.default,unwrap:"p"},null,8,["use"])],40,q),y(M,{name:"tooltip"},{default:T(()=>[t(a)?(m(),c("span",{key:0,id:t(p),ref_key:"floatingRef",ref:d,role:"tooltip",class:k(["tooltip-content",t(v)]),style:B({position:t(b),top:`${t(_)??0}px`,left:`${t(g)??0}px`,width:"max-content",maxWidth:n.maxWidth})},h(n.content),15,O)):F("",!0)]),_:1})],32)}}});const H=R(P,[["__scopeId","data-v-5540d119"]]);export{H as default};
