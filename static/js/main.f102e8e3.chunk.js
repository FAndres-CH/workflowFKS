(this["webpackJsonpbox-move"]=this["webpackJsonpbox-move"]||[]).push([[0],{63:function(e,t,c){},64:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(47),o=c.n(r),j=(c(63),c(64),c(44)),i=c(6),b=c(10),s=c(9),u=c(110),x=c(111),l=c(108),O=(c(37),c(51)),d=c(27),h=c(24),f=c(100),g=c(101),k=c(102),v=c(25),m=c(103),p=c(104),S=c(112),y=c(113),P=c(109),w=c(114),B=c(106),C=c(1);function A(){var e=Object(n.useState)([0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),o=Object(b.a)(r,2),A=o[0],I=o[1],E=Object(n.useState)([0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0]),F=Object(b.a)(E,2),H=F[0],J=(F[1],Object(n.useState)([0,0,0])),L=Object(b.a)(J,2),W=L[0],G=L[1],K=Object(n.useState)(!1),M=Object(b.a)(K,2),N=M[0],T=M[1],U=Object(n.useState)(!1),q=Object(b.a)(U,2),z=q[0],D=q[1],Q=Object(n.useState)(!1),R=Object(b.a)(Q,2),V=R[0],X=R[1],Y=Object(n.useState)(15),Z=Object(b.a)(Y,2),$=Z[0],_=Z[1],ee=Object(n.useState)(0),te=Object(b.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(!1),re=Object(b.a)(ae,2),oe=re[0],je=re[1],ie=Object(n.useState)(!0),be=Object(b.a)(ie,2),se=be[0],ue=be[1],xe=Object(n.useState)(!1),le=Object(b.a)(xe,2),Oe=le[0],de=le[1],he=Object(n.useState)(!1),fe=Object(b.a)(he,2),ge=fe[0],ke=fe[1],ve=Object(n.useState)(!1),me=Object(b.a)(ve,2),pe=me[0],Se=me[1],ye=23;function Pe(){console.log("update"),2==c[7]&&W[0]<8&&!V&&!Oe?(Ce(7),G((function(e){var t=Object(i.a)(e);return t[0]+=1,t}))):1==c[7]&&T(!0),1==c[23]&&W[2]>0&&(!oe||W[2]>5)&&!ge?(Be(ye),G((function(e){var t=Object(i.a)(e);return t[2]-=1,t}))):2==c[23]&&D(!0),function(){0==W[2]&&W[1]>=8&&!V&&$<=0&&!pe?je(!0):0==W[1]&&W[0]>=8&&!oe&&!pe&&(X(!0),_(15));V&&W[0]>0?G((function(e){var t=Object(i.a)(e);return++t[1],--t[0],t})):V&&X(!1);oe&&W[1]>0?G((function(e){var t=Object(i.a)(e);return++t[2],--t[1],t})):oe&&je(!1)}(),W[1]>=8&&$>=1&&_((function(e){return e-1}))}function we(e){console.log("forwardBox"),a((function(t){var c=Object(i.a)(t);return c[e+1]=c[e],c[e]=0,c}))}Object(n.useEffect)((function(){var e=setInterval((function(){se&&(Fe(),N?(I([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),T(!1)):z?(I([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),D(!1)):I([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]),ce>=5&&(ne(0),Pe()),ne((function(e){return e+1})))}),50);return function(){return clearInterval(e)}}),[c,A,H,W,N,z,V,oe,se,pe]);var Be=function(e){a((function(t){var c=Object(i.a)(t);return c[e]=2,c}))},Ce=function(e){a((function(t){var c=Object(i.a)(t);return c[e]=1,c}))},Ae=function(e){a((function(t){var c=Object(i.a)(t);return c[e]=0,c}))},Ie=function(){a((function(e){var t=Object(i.a)(e);return t[0]=2,t}))},Ee=function(){a((function(e){var t=Object(i.a)(e);return t[31]=0,t}))},Fe=function(){for(var e=!1,t=0;t<31;t++)e?e=!1:void 0!=c[t]?0!=c[t]&&c[t]&&(0!==c[t+1]&&void 0!==c[t+1]||0!==A[t]&&void 0!=A[t]||0!==H[t]&&0!==c[t+2]&&void 0!==c[t+2]||(console.log("updateBox run"),we(t),e=!0)):Ae(t)};var He=Object(s.a)(x.a)((function(e){var t=e.theme;return Object(j.a)(Object(j.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",height:"3vw",maxHeight:"40px",margin:t.spacing(.1),color:t.palette.text.secondary})})),Je=function(e){return void 0===e?Object(C.jsx)(He,{sx:{background:O.a[50]}}):2==c[e]?Object(C.jsx)(He,{sx:{background:d.a[700]}}):1==c[e]?Object(C.jsx)(He,{sx:{background:d.a[200]}}):Object(C.jsx)(He,{sx:{background:h.a[50]}})},Le=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Je(e)})},We=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:f.a[500]}})})},Ge=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:g.a[200]},children:Object(C.jsx)(S.a,{variant:"h4",children:W[e]})})})},Ke=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:k.a[500]}})})},Me=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:v.a[500]}})})},Ne=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:O.a[200]},children:Object(C.jsx)(S.a,{variant:"body1",children:e})})})},Te=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:oe?Object(C.jsx)(He,{sx:{background:m.a[400]}}):Object(C.jsx)(He,{sx:{background:O.a[50]}})})},Ue=function(e){return Object(C.jsx)(l.a,{item:!0,xs:1,children:V?Object(C.jsx)(He,{sx:{background:p.a[400]}}):Object(C.jsx)(He,{sx:{background:O.a[50]}})})},qe=Object(C.jsx)(u.a,{sx:{flexGrow:1,maxWidth:"1400px",m:"auto"},children:Object(C.jsxs)(l.a,{container:!0,columns:20,children:[Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Ke(),Ke(),Ke(),Le(),Le(),Le(),Le(),Le(),Le(),Te(),Te(),Me(),Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(He,{sx:{background:v.a[500]},children:Object(C.jsxs)(S.a,{variant:"body1",children:["Work: ",$]})})}),Me(),Le(),Le(),Le(),Le(),Le(),Le(),Ke(),Ge(2),Ke(),Le(),Te(),Le(),Te(),Te(),Te(),Te(),Te(),Me(),Ge(1),Me(),Le(),Le(),Le(),Le(),Le(),Le(),Ke(),Ke(),Ke(),Le(),Le(),Le(),Le(),Le(),Le(),Te(),Te(),Me(),Me(),Me(),Le(),Le(),Le(),Le(),Le(),Le(25),Le(24),Le(23),Le(22),Le(21),Le(20),Le(19),Le(18),Le(17),Le(16),Le(15),Le(14),Le(13),Le(12),Le(11),Le(10),Le(),Le(),Le(),Le(),Le(26),Le(),Ne("Unload Pos"),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Ue(),Ue(),Ue(),Le(9),Le(),Le(),Le(),Le(),Le(27),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),We(),We(),We(),Le(8),Le(),Le(),Le(),Le(),Le(28),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),We(),Ge(0),We(),Le(7),Ne("load Pos"),Le(),Le(),Le(),Le(29),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),We(),We(),We(),Le(6),Le(),Le(),Le(),Le(),Le(30),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(5),Le(),Le(),Le(),Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(y.a,{sx:{width:"95%",height:"95%"},variant:"extended",onClick:function(){Ee()},children:"Take Box"})}),Le(31),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(4),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(3),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(2),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(1),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Object(C.jsx)(l.a,{item:!0,xs:1,children:Object(C.jsx)(y.a,{sx:{width:"95%",height:"95%"},variant:"extended",onClick:function(){Ie()},children:"Load Box"})}),Le(0),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le(),Le()]})});return Object(C.jsxs)("div",{children:[qe,Object(C.jsx)(P.a,{onClick:function(){Ie()},children:"setStart"}),Object(C.jsx)(P.a,{onClick:function(){Pe()},children:"forward"}),Object(C.jsx)(P.a,{onClick:function(){Ee()},children:"take full box"}),Object(C.jsx)(w.a,{control:Object(C.jsx)(B.a,{checked:se,onChange:function(e){ue(e.target.checked)},value:se,inputProps:{"aria-label":"secondary checkbox"}}),label:"Auto Forward",labelPlacement:"start"}),Object(C.jsx)(w.a,{control:Object(C.jsx)(B.a,{checked:Oe,onChange:function(e){de(e.target.checked)},value:Oe,inputProps:{"aria-label":"secondary checkbox"}}),label:"Block Loading Buffer",labelPlacement:"start"}),Object(C.jsx)(w.a,{control:Object(C.jsx)(B.a,{checked:ge,onChange:function(e){ke(e.target.checked)},value:ge,inputProps:{"aria-label":"secondary checkbox"}}),label:"Block unloading Separation",labelPlacement:"start"}),Object(C.jsx)(w.a,{control:Object(C.jsx)(B.a,{checked:pe,onChange:function(e){Se(e.target.checked)},value:pe,inputProps:{"aria-label":"secondary checkbox"}}),label:"Block FKS Handling",labelPlacement:"start"})]})}var I=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(A,{})})};o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(I,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f102e8e3.chunk.js.map