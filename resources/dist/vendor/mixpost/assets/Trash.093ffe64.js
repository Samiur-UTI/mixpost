import{s as _,x as $,y as B,i as g,o as l,m as p,a as d,w as c,j as w,z as x,b as s,T as v,n as m,u as f,g as n,h,A as k,c as u,E as C,l as S,C as z,_ as E}from"./app.cba077cd.js";const W={class:"fixed inset-0 overflow-y-auto px-sm py-lg sm:px-0 z-50","scroll-region":""},L=s("div",{class:"absolute inset-0 bg-indigo-900 opacity-60"},null,-1),M=[L],j={class:"flex flex-col h-full"},T={__name:"Modal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},dialogClass:{type:String}},emits:["close"],setup(e,{emit:a}){const o=e;_(()=>o.show,()=>{o.show?document.body.style.overflow="hidden":document.body.style.overflow=null});const t=()=>{o.closeable&&a("close")},r=i=>{i.key==="Escape"&&o.show&&t()};$(()=>document.addEventListener("keydown",r)),B(()=>{document.removeEventListener("keydown",r),document.body.style.overflow=null});const y=g(()=>({sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"})[o.maxWidth]);return(i,b)=>(l(),p(k,{to:"body"},[d(v,{"leave-active-class":"duration-200"},{default:c(()=>[w(s("div",W,[d(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:c(()=>[w(s("div",{class:"fixed inset-0 transform transition-all",onClick:t},M,512),[[x,e.show]])]),_:1}),d(v,{"enter-active-class":"ease-out duration-300","enter-from-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-from-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:c(()=>[w(s("div",j,[s("div",{class:m(["bg-white rounded-lg transform transition-all sm:w-full sm:mx-auto",[f(y),e.dialogClass]])},[e.show?n(i.$slots,"default",{key:0}):h("",!0)],2)],512),[[x,e.show]])]),_:3})],512),[[x,e.show]])]),_:3})]))}},I={class:"w-full h-full min-h-full max-h-max relative overflow-x-hidden overflow-y-auto"},V={class:"flex flex-col h-full w-full"},D={key:0,class:"px-lg py-md text-lg"},N={key:1,class:"flex flex-row justify-end px-lg py-md border-t border-gray-200 text-right"},A={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0},scrollableBody:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:a}){const o=()=>{a("close")};return(t,r)=>(l(),p(T,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,"dialog-class":e.scrollableBody?"overflow-hidden":"",onClose:o},{default:c(()=>[s("div",I,[s("div",V,[t.$slots.header?(l(),u("div",D,[n(t.$slots,"header")])):h("",!0),s("div",{class:m(["p-lg h-full overflow-x-hidden overflow-y-auto",{"pt-0":t.$slots.header}])},[n(t.$slots,"body")],2),t.$slots.footer?(l(),u("div",N,[n(t.$slots,"footer")])):h("",!0)])])]),_:3},8,["show","max-width","closeable","dialog-class"]))}},H={class:"sm:flex sm:items-start"},O={class:"flex flex-col text-center sm:mt-0 sm:ml-md mt-md sm:mt-0 sm:text-left"},U={class:"text-lg"},q={class:"mt-xs"},Y={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"md"},closeable:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},emits:["close"],setup(e,{emit:a}){const o=e,t=g(()=>({warning:"bg-orange-100",danger:"bg-red-100"})[o.variant]),r=g(()=>({warning:"text-orange-600",danger:"text-red-600"})[o.variant]),y=()=>{a("close")};return(i,b)=>(l(),p(A,{show:e.show,"max-width":e.maxWidth,closeable:e.closeable,onClose:y},{body:c(()=>[s("div",H,[s("div",{class:m([f(t),"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"])},[d(C,{class:m(f(r))},null,8,["class"])],2),s("div",O,[s("div",U,[n(i.$slots,"header")]),s("div",q,[n(i.$slots,"body")])])])]),footer:c(()=>[n(i.$slots,"footer")]),_:3},8,["show","max-width","closeable"]))}},F=["type"],G={key:0,class:"absolute left-0 top-0 flex justify-center items-center w-full h-full bg-red-500"},Z={__name:"DangerButton",props:{type:{type:String,default:"button"},size:{type:String,default:"lg"},isLoading:{type:Boolean,default:!1}},setup(e){const a=e,{sizeClass:o}=S(a.size);return(t,r)=>(l(),u("button",{type:e.type,class:m([f(o),"relative inline-flex items-center bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:border-red-700 focus:shadow-outline-red disabled:bg-red-400 transition ease-in-out duration-200"])},[n(t.$slots,"default"),e.isLoading?(l(),u("span",G,[d(z,{class:"animate-spin text-white"})])):h("",!0)],10,F))}},J={},K={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},P=s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),Q=[P];function R(e,a){return l(),u("svg",K,Q)}const ee=E(J,[["render",R]]);export{ee as T,Y as _,T as a,Z as b,A as c};
