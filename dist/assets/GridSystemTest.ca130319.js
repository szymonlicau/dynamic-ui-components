import{d as g,p as y,b as c,h as r,q as k,a as G,u as l,s as w,r as x,f as e,m as t,e as s,l as T,x as D,F as h,y as C,i as b,t as n,n as f}from"./index.530199b0.js";const $={class:"grid-container"},z=g({props:{gutter:{default:20},columns:{default:12}},setup(i){const d=i;G(m=>({"55fb9ee3":l(v),"2341803b":i.columns}));const v=y(()=>`${d.gutter}px`);return(m,o)=>(c(),r("div",$,[k(m.$slots,"default")]))}});const S={class:"grid-row"},_=g({props:{noGutters:{type:Boolean,default:!1}},setup(i){return(d,v)=>(c(),r("div",S,[k(d.$slots,"default")]))}});const u=g({props:{size:null,sizeTablet:null,sizeDesktop:null,offset:{default:0},offsetTablet:{default:0},offsetDesktop:{default:0}},setup(i){return G(d=>({"530e061b":i.size,"7ec327a6":i.offset,"41d41f3e":i.sizeTablet,"547200f3":i.offsetTablet,"85f1c4fe":i.sizeDesktop,"19a5c1a2":i.offsetDesktop})),(d,v)=>(c(),r("div",{class:w(["grid-column",{"grid-column--sized":!!i.size||!!i.sizeTablet||!!i.sizeDesktop,"grid-column--sized-tablet":!!i.sizeTablet,"grid-column--sized-desktop":!!i.sizeDesktop,"grid-column--offseted":i.offset>0||i.offsetTablet>0||i.offsetDesktop>0,"grid-column--offseted-tablet":i.offsetTablet>0,"grid-column--offseted-desktop":i.offsetDesktop>0}])},[k(d.$slots,"default")],2))}});const V=C("<section><h2> Grid System as dynamic components </h2><p> This Grid System is very similar in fashion to what we see in Bootstrap or Vuetify. <br> It consists of three components: <ol><li><code>GridContainer</code> - it sets up the size of the gutter, and the number of columns to base calculations on. </li><li><code>GridRow</code> - it can modify or disable the gutter for a set of columns, and also wraps them nicely. </li><li><code>GridColumn</code> - it defines the size of given column - auto if not defined - with support for media query specific sizes. <br> It also can have it&#39;s own offset (to the left) - also configured optionally on a per device basis </li></ol></p></section>",1),B=e("h2",null," Base auto scaling columns ",-1),M=e("div",{class:"filler"}," 1 / 6 ",-1),F=e("div",{class:"filler"}," 1 / 3 ",-1),N=e("div",{class:"filler"}," 1 / 12 ",-1),q=e("h2",null," Custom gutter ",-1),I=e("label",{for:"gutter"}," Set the size of the gutter (minimum 0) ",-1),O=e("div",{class:"filler"}," 1 / 6 ",-1),R=e("div",{class:"filler"}," 1 / 3 ",-1),U=e("hr",null,null,-1),E=e("label",{for:"columns"}," Set number of columns for the grids (minimum 12) ",-1),L=e("h2",null," Fixed size columns ",-1),j={class:"filler"},A={class:"filler"},H={class:"filler"},J={class:"filler"},K=e("h2",null," Fixed size columns + offsets",-1),P={class:"filler"},Q={class:"filler"},W={class:"filler"},X={class:"filler"},Y=e("h2",null," Fixed size columns + offsets + responsive behavior",-1),Z={class:"filler"},ee=e("br",null,null,-1),te=e("br",null,null,-1),se={class:"filler"},le=e("br",null,null,-1),oe=e("br",null,null,-1),ie={class:"filler"},ne=e("br",null,null,-1),ue=e("br",null,null,-1),fe=g({setup(i){const d=x(50),v=y(()=>Math.max(d.value,0)),m=x(12),o=y(()=>Math.max(m.value,12));return(ae,p)=>(c(),r(h,null,[V,e("section",null,[B,t(z,null,{default:s(()=>[t(_,null,{default:s(()=>[(c(),r(h,null,b(6,a=>t(u,{key:a},{default:s(()=>[M]),_:2},1024)),64))]),_:1}),t(_,null,{default:s(()=>[(c(),r(h,null,b(3,a=>t(u,{key:a},{default:s(()=>[F]),_:2},1024)),64))]),_:1}),t(_,null,{default:s(()=>[(c(),r(h,null,b(12,a=>t(u,{key:a},{default:s(()=>[N]),_:2},1024)),64))]),_:1})]),_:1})]),e("section",null,[q,I,T(e("input",{id:"gutter",type:"number",min:0,placeholder:"Gutter size","onUpdate:modelValue":p[0]||(p[0]=a=>d.value=a)},null,512),[[D,d.value]]),t(z,{gutter:l(v)},{default:s(()=>[t(_,null,{default:s(()=>[(c(),r(h,null,b(6,a=>t(u,{key:a},{default:s(()=>[O]),_:2},1024)),64))]),_:1}),t(_,null,{default:s(()=>[(c(),r(h,null,b(3,a=>t(u,{key:a},{default:s(()=>[R]),_:2},1024)),64))]),_:1})]),_:1},8,["gutter"])]),U,E,T(e("input",{id:"columns",type:"number",min:12,placeholder:"Number of columns","onUpdate:modelValue":p[1]||(p[1]=a=>m.value=a)},null,512),[[D,m.value]]),e("section",null,[L,t(z,{columns:l(o)},{default:s(()=>[t(_,null,{default:s(()=>[t(u,{size:2},{default:s(()=>[e("div",j," 2 / "+n(l(o)),1)]),_:1}),t(u,{size:5},{default:s(()=>[e("div",A," 5 / "+n(l(o)),1)]),_:1}),t(u,{size:4},{default:s(()=>[e("div",H," 4 / "+n(l(o)),1)]),_:1}),t(u,{size:7},{default:s(()=>[e("div",J," 7 / "+n(l(o)),1)]),_:1})]),_:1})]),_:1},8,["columns"])]),e("section",null,[K,t(z,{columns:l(o)},{default:s(()=>[t(_,null,{default:s(()=>[t(u,{size:2,offset:1},{default:s(()=>[e("div",P," 2 / "+n(l(o))+", offset 1 ",1)]),_:1}),t(u,{size:5,offset:4},{default:s(()=>[e("div",Q," 5 / "+n(l(o))+", offset 4 ",1)]),_:1}),t(u,{size:4,offset:8},{default:s(()=>[e("div",W," 4 / "+n(l(o))+", offset 8 ",1)]),_:1}),t(u,{size:7,offset:2},{default:s(()=>[e("div",X," 7 / "+n(l(o))+", offset 2 ",1)]),_:1})]),_:1})]),_:1},8,["columns"])]),e("section",null,[Y,t(z,{columns:l(o)},{default:s(()=>[t(_,null,{default:s(()=>[t(u,{size:l(o),"size-tablet":4,"size-desktop":8},{default:s(()=>[e("div",Z,[f(" Mobile - "+n(l(o))+" / "+n(l(o))+" ",1),ee,f(" Tablet - 4 / "+n(l(o))+" ",1),te,f(" Desktop - 8 / "+n(l(o)),1)])]),_:1},8,["size"]),t(u,{size:l(o),"size-tablet":8,"size-desktop":4},{default:s(()=>[e("div",se,[f(" Mobile - "+n(l(o))+" / "+n(l(o))+" ",1),le,f(" Tablet - 8 / "+n(l(o))+" ",1),oe,f(" Desktop - 4 / "+n(l(o)),1)])]),_:1},8,["size"]),t(u,{size:l(o),"size-tablet":4,"size-desktop":8,"offset-tablet":4,"offset-desktop":2},{default:s(()=>[e("div",ie,[f(" Mobile - "+n(l(o))+" / "+n(l(o))+", offset 0 ",1),ne,f(" Tablet - 4 / "+n(l(o))+", offset 4 ",1),ue,f(" Desktop - 8 / "+n(l(o))+", offset 2 ",1)])]),_:1},8,["size"])]),_:1})]),_:1},8,["columns"])])],64))}});export{fe as default};
