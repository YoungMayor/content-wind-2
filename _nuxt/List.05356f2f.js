import{d as i,a4 as c,I as u,M as t,Y as p,a5 as _,l as d}from"./entry.456e00f5.js";import m from"./ContentSlot.e9b6e8f9.js";const f=i({props:{icon:{type:String,default:null},type:{type:String,default:"primary",validator:s=>["primary","secondary","info","success","warning","danger","neutral"].includes(s)}},setup(s){const n=c(),{flatUnwrap:a,unwrap:o}=_(),l=u(()=>s.icon||`list:${s.type}`);return()=>{const r=a((n.default&&n.default())??[],["ul"]).map(e=>o(e,["li"]));return t("ul",r.map(e=>t("li",[t("span",{class:`list-icon ${s.type}`},t(p,{name:l.value,class:"icon"})),t("span",t(m,{use:()=>e}))])))}}});const v=d(f,[["__scopeId","data-v-852f5092"]]);export{v as default};
