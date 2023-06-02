import{S as M,i as Y,s as L,k as _,l as v,m as $,h,n as m,b as S,f as x,g as Z,d as F,t as R,Z as J,q as C,a as b,w as O,r as B,c as k,x as N,C as u,y as W,u as P,z as U,B as Q}from"../../../chunks/index-e1a266ff.js";import{S as X}from"../../../chunks/Seo-123bff72.js";import{A as ee}from"../../../chunks/arrow-up-right-7d8cd01c.js";import{f as G}from"../../../chunks/utils-7d7f714d.js";function H(o,e,l){const a=o.slice();return a[1]=e[l],a}function K(o){let e,l,a,t=o[1].title+"",p,s,n,r,i,c=G("%B %-d, %Y",o[1].date)+"",w,A,y,D=o[1].summary+"",E,j,I,g;return n=new ee({props:{size:18,class:"inline text-neutral-400"}}),{c(){e=_("a"),l=_("div"),a=_("div"),p=C(t),s=b(),O(n.$$.fragment),r=b(),i=_("div"),w=C(c),A=b(),y=_("div"),E=C(D),j=b(),this.h()},l(f){e=v(f,"A",{href:!0,class:!0,target:!0,rel:!0});var d=$(e);l=v(d,"DIV",{class:!0});var T=$(l);a=v(T,"DIV",{class:!0});var V=$(a);p=B(V,t),s=k(V),N(n.$$.fragment,V),V.forEach(h),r=k(T),i=v(T,"DIV",{class:!0});var q=$(i);w=B(q,c),q.forEach(h),T.forEach(h),A=k(d),y=v(d,"DIV",{class:!0});var z=$(y);E=B(z,D),z.forEach(h),j=k(d),d.forEach(h),this.h()},h(){m(a,"class","text-lg text-black"),m(i,"class","sm:ml-auto mb-0.5 text-neutral-500"),m(l,"class","flex flex-col sm:flex-row sm:items-end mb-1.5"),m(y,"class","text-lg leading-snug font-serif italic"),m(e,"href",I=o[1].link),m(e,"class","block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(f,d){S(f,e,d),u(e,l),u(l,a),u(a,p),u(a,s),W(n,a,null),u(l,r),u(l,i),u(i,w),u(e,A),u(e,y),u(y,E),u(e,j),g=!0},p(f,d){(!g||d&1)&&t!==(t=f[1].title+"")&&P(p,t),(!g||d&1)&&c!==(c=G("%B %-d, %Y",f[1].date)+"")&&P(w,c),(!g||d&1)&&D!==(D=f[1].summary+"")&&P(E,D),(!g||d&1&&I!==(I=f[1].link))&&m(e,"href",I)},i(f){g||(x(n.$$.fragment,f),g=!0)},o(f){R(n.$$.fragment,f),g=!1},d(f){f&&h(e),U(n)}}}function te(o){let e,l,a=o[0],t=[];for(let s=0;s<a.length;s+=1)t[s]=K(H(o,a,s));const p=s=>R(t[s],1,1,()=>{t[s]=null});return{c(){e=_("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=v(s,"DIV",{class:!0});var n=$(e);for(let r=0;r<t.length;r+=1)t[r].l(n);n.forEach(h),this.h()},h(){m(e,"class","grid gap-y-4")},m(s,n){S(s,e,n);for(let r=0;r<t.length;r+=1)t[r].m(e,null);l=!0},p(s,[n]){if(n&1){a=s[0];let r;for(r=0;r<a.length;r+=1){const i=H(s,a,r);t[r]?(t[r].p(i,n),x(t[r],1)):(t[r]=K(i),t[r].c(),x(t[r],1),t[r].m(e,null))}for(Z(),r=a.length;r<t.length;r+=1)p(r);F()}},i(s){if(!l){for(let n=0;n<a.length;n+=1)x(t[n]);l=!0}},o(s){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)R(t[n]);l=!1},d(s){s&&h(e),J(t,s)}}}function ae(o,e,l){let{data:a}=e;return o.$$set=t=>{"data"in t&&l(0,a=t.data)},[a]}class re extends M{constructor(e){super(),Y(this,e,ae,te,L,{data:0})}}var se={papers:[{title:"Trajectory Prediction for Telescope Based UAV Tracking",date:new Date(16566336e5),summary:`Bachelor thesis comparing the use of Kalman and Particle filters for object tracking, improving the performance in cases of object occlusion and jumping trackers.
`,link:"/assets/pdf/Vieweg_TrajectoryPrediction.pdf"},{title:"Oceanography Report",date:new Date(16732224e5),summary:`Report from the class 'Oceanography', describing the cast of CTD's and the comparison between simulated drifter advection and data recorded with Ifremer. 
`,link:"/assets/pdf/Vieweg_Oceanography_Trip_Report.pdf"},{title:"Summary - Adaptive missions for underwater vehicles",date:new Date(1685664e6),summary:`Summary of three papers on the topic of adaptive missions for underwater vehicles.
`,link:"/assets/pdf/NTNU_Intro.pdf"},{title:"Transmission Box Report (GER)",date:new Date(16304544e5),summary:`Report from the class 'Machine Design - Project', describing calculations for a transmission box, using DIN and ISO norms
`,link:"/assets/pdf/e11806443_Berechnung.pdf"},{title:"The Cultural Revolution in China (GER)",date:new Date(14859072e5),summary:`High school thesis on the Chinese Cultural Revolution, including an interview held and translated by myself
`,link:"/assets/pdf/Vieweg_DieKulturrevolutionInChina.pdf"}]};function ne(o){let e,l,a,t,p,s,n,r;return e=new X({props:{title:"Maximilian Vieweg – Writing",description:"Past writing: academic papers, presentations, notes, tutorials, and technical blog posts."}}),n=new re({props:{data:se.papers}}),{c(){O(e.$$.fragment),l=b(),a=_("section"),t=_("h2"),p=C("Academic Writing and Reports"),s=b(),O(n.$$.fragment),this.h()},l(i){N(e.$$.fragment,i),l=k(i),a=v(i,"SECTION",{class:!0});var c=$(a);t=v(c,"H2",{class:!0});var w=$(t);p=B(w,"Academic Writing and Reports"),w.forEach(h),s=k(c),N(n.$$.fragment,c),c.forEach(h),this.h()},h(){m(t,"class","heading2"),m(a,"class","layout-md py-12")},m(i,c){W(e,i,c),S(i,l,c),S(i,a,c),u(a,t),u(t,p),u(a,s),W(n,a,null),r=!0},p:Q,i(i){r||(x(e.$$.fragment,i),x(n.$$.fragment,i),r=!0)},o(i){R(e.$$.fragment,i),R(n.$$.fragment,i),r=!1},d(i){U(e,i),i&&h(l),i&&h(a),U(n)}}}class fe extends M{constructor(e){super(),Y(this,e,null,ne,L,{})}}export{fe as default};
