import{_ as U}from"./nuxt-link.98429ca3.js";import{O as R,P as q,_ as S,g as $,o as g,k as v,w as B,r as C,l as b,s as H,a as M,Q as V,R as J,S as D,c as h,n as x,U as Q,x as W,i as f,V as w,m as F,f as z,h as G,j as m,B as X,W as Y,t as k,q as N}from"./entry.ab3c3227.js";var _=R(q);function Z(e,a){const n={...e};for(const t of a)delete n[t];return n}function ee(e,a,n){typeof a=="string"&&(a=a.split(".").map(r=>{const i=Number(r);return isNaN(i)?r:i}));let t=e;for(const r of a){if(t==null)return n;t=t[r]}return t!==void 0?t:n}const O=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function j(e,a){a?a={...O,...a}:a=O;const n=K(a);return n.dispatch(e),n.toString()}const re=Object.freeze(["prototype","__proto__","constructor"]);function K(e){let a="",n=new Map;const t=r=>{a+=r};return{toString(){return a},getContext(){return n},dispatch(r){return e.replacer&&(r=e.replacer(r)),this[r===null?"null":typeof r](r)},object(r){if(r&&typeof r.toJSON=="function")return this.object(r.toJSON());const i=Object.prototype.toString.call(r);let o="";const d=i.length;d<10?o="unknown:["+i+"]":o=i.slice(8,d-1),o=o.toLowerCase();let u=null;if((u=n.get(r))===void 0)n.set(r,n.size);else return this.dispatch("[CIRCULAR:"+u+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(r))return t("buffer:"),t(r.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](r):e.ignoreUnknown||this.unkown(r,o);else{let s=Object.keys(r);e.unorderedObjects&&(s=s.sort());let c=[];e.respectType!==!1&&!P(r)&&(c=re),e.excludeKeys&&(s=s.filter(l=>!e.excludeKeys(l)),c=c.filter(l=>!e.excludeKeys(l))),t("object:"+(s.length+c.length)+":");const p=l=>{this.dispatch(l),t(":"),e.excludeValues||this.dispatch(r[l]),t(",")};for(const l of s)p(l);for(const l of c)p(l)}},array(r,i){if(i=i===void 0?e.unorderedArrays!==!1:i,t("array:"+r.length+":"),!i||r.length<=1){for(const u of r)this.dispatch(u);return}const o=new Map,d=r.map(u=>{const s=K(e);s.dispatch(u);for(const[c,p]of s.getContext())o.set(c,p);return s.toString()});return n=o,d.sort(),this.array(d,!1)},date(r){return t("date:"+r.toJSON())},symbol(r){return t("symbol:"+r.toString())},unkown(r,i){if(t(i),!!r&&(t(":"),r&&typeof r.entries=="function"))return this.array(Array.from(r.entries()),!0)},error(r){return t("error:"+r.toString())},boolean(r){return t("bool:"+r)},string(r){t("string:"+r.length+":"),t(r)},function(r){t("fn:"),P(r)?this.dispatch("[native]"):this.dispatch(r.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(r.name)),e.respectFunctionProperties&&this.object(r)},number(r){return t("number:"+r)},xml(r){return t("xml:"+r.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(r){return t("regex:"+r.toString())},uint8array(r){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(r))},uint8clampedarray(r){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(r))},int8array(r){return t("int8array:"),this.dispatch(Array.prototype.slice.call(r))},uint16array(r){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(r))},int16array(r){return t("int16array:"),this.dispatch(Array.prototype.slice.call(r))},uint32array(r){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(r))},int32array(r){return t("int32array:"),this.dispatch(Array.prototype.slice.call(r))},float32array(r){return t("float32array:"),this.dispatch(Array.prototype.slice.call(r))},float64array(r){return t("float64array:"),this.dispatch(Array.prototype.slice.call(r))},arraybuffer(r){return t("arraybuffer:"),this.dispatch(new Uint8Array(r))},url(r){return t("url:"+r.toString())},map(r){t("map:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},set(r){t("set:");const i=[...r];return this.array(i,e.unorderedSets!==!1)},file(r){return t("file:"),this.dispatch([r.name,r.size,r.type,r.lastModfied])},blob(){if(e.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(r){return t("bigint:"+r.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const T="[native code] }",te=T.length;function P(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-te)===T}function ae(e,a,n={}){return e===a||j(e,n)===j(a,n)}const ne=$({inheritAttrs:!1,props:{...U.props,as:{type:String,default:"button"},disabled:{type:Boolean,default:null},active:{type:Boolean,default:!1},exact:{type:Boolean,default:!1},exactQuery:{type:Boolean,default:!1},exactHash:{type:Boolean,default:!1},inactiveClass:{type:String,default:void 0}},setup(e){function a(n,t,{isActive:r,isExactActive:i}){return e.active?e.activeClass:e.exactQuery&&!ae(n.query,t.query)||e.exactHash&&n.hash!==t.hash?e.inactiveClass:e.exact&&i||!e.exact&&r?e.activeClass:e.inactiveClass}return{resolveLinkClass:a}}}),ie=["href","aria-disabled","role","rel","target","onClick"];function se(e,a,n,t,r,i){const o=U;return e.to?(g(),v(o,b({key:1},e.$props,{custom:""}),{default:B(({route:d,href:u,target:s,rel:c,navigate:p,isActive:l,isExactActive:A,isExternal:L})=>[M("a",b(e.$attrs,{href:e.disabled?void 0:u,"aria-disabled":e.disabled?"true":void 0,role:e.disabled?"link":void 0,rel:c,target:s,class:e.resolveLinkClass(d,e._.provides[V]||e.$route,{isActive:l,isExactActive:A}),onClick:E=>!L&&p(E)}),[C(e.$slots,"default",J(D({isActive:e.exact?A:l})))],16,ie)]),_:3},16)):(g(),v(H(e.as),b({key:0,disabled:e.disabled},e.$attrs,{class:e.inactiveClass}),{default:B(()=>[C(e.$slots,"default")]),_:3},16,["disabled","class"]))}const me=S(ne,[["render",se]]),oe=$({props:{name:{type:String,required:!0}}});function le(e,a,n,t,r,i){return g(),h("span",{class:x(e.name)},null,2)}const I=S(oe,[["render",le]]),de=(e,a,n,t,r=!1)=>{const i=Q(),o=W(),d=f(()=>{var l;const s=w(a),c=w(n),p=w(t);return F((s==null?void 0:s.strategy)||((l=o.ui)==null?void 0:l.strategy),p?{wrapper:p}:{},s||{},r?ee(o.ui,e,{}):{},c||{})}),u=f(()=>Z(i,["class"]));return{ui:d,attrs:u}},ce={base:"before:w-2 before:h-2",ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-800",rounded:"before:rounded-sm",background:"before:bg-gray-200 dark:before:bg-gray-800",shadow:"before:shadow",placement:'group-data-[popper-placement*="right"]:-left-1 group-data-[popper-placement*="left"]:-right-1 group-data-[popper-placement*="top"]:-bottom-1 group-data-[popper-placement*="bottom"]:-top-1'},ue={wrapper:"relative inline-flex items-center justify-center flex-shrink-0",background:"bg-gray-100 dark:bg-gray-800",rounded:"rounded-full",text:"font-medium leading-none text-gray-900 dark:text-white truncate",placeholder:"font-medium leading-none text-gray-500 dark:text-gray-400 truncate",size:{"3xs":"h-4 w-4 text-[8px]","2xs":"h-5 w-5 text-[10px]",xs:"h-6 w-6 text-xs",sm:"h-8 w-8 text-sm",md:"h-10 w-10 text-base",lg:"h-12 w-12 text-lg",xl:"h-14 w-14 text-xl","2xl":"h-16 w-16 text-2xl","3xl":"h-20 w-20 text-3xl"},chip:{base:"absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium",background:"bg-{color}-500 dark:bg-{color}-400",position:{"top-right":"top-0 right-0","bottom-right":"bottom-0 right-0","top-left":"top-0 left-0","bottom-left":"bottom-0 left-0"},size:{"3xs":"h-[4px] min-w-[4px] text-[4px] p-px","2xs":"h-[5px] min-w-[5px] text-[5px] p-px",xs:"h-1.5 min-w-[0.375rem] text-[6px] p-px",sm:"h-2 min-w-[0.5rem] text-[7px] p-0.5",md:"h-2.5 min-w-[0.625rem] text-[8px] p-0.5",lg:"h-3 min-w-[0.75rem] text-[10px] p-0.5",xl:"h-3.5 min-w-[0.875rem] text-[11px] p-1","2xl":"h-4 min-w-[1rem] text-[12px] p-1","3xl":"h-5 min-w-[1.25rem] text-[14px] p-1"}},icon:{base:"text-gray-500 dark:text-gray-400 flex-shrink-0",size:{"3xs":"h-2 w-2","2xs":"h-2.5 w-2.5",xs:"h-3 w-3",sm:"h-4 w-4",md:"h-5 w-5",lg:"h-6 w-6",xl:"h-7 w-7","2xl":"h-8 w-8","3xl":"h-10 w-10"}},default:{size:"sm",icon:null,chipColor:null,chipPosition:"top-right"}},be={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},we={wrapper:"relative inline-flex text-left rtl:text-right",container:"z-20 group",width:"w-48",height:"",background:"bg-white dark:bg-gray-800",shadow:"shadow-lg",rounded:"rounded-md",ring:"ring-1 ring-gray-200 dark:ring-gray-700",base:"relative focus:outline-none overflow-y-auto scroll-py-1",divide:"divide-y divide-gray-200 dark:divide-gray-700",padding:"p-1",item:{base:"group flex items-center gap-2 w-full",rounded:"rounded-md",padding:"px-2 py-1.5",size:"text-sm",active:"bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white",inactive:"text-gray-700 dark:text-gray-200",disabled:"cursor-not-allowed opacity-50",icon:{base:"flex-shrink-0 h-4 w-4",active:"text-gray-500 dark:text-gray-400",inactive:"text-gray-400 dark:text-gray-500"},avatar:{base:"flex-shrink-0",size:"3xs"},shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto"},transition:{enterActiveClass:"transition duration-100 ease-out",enterFromClass:"transform scale-95 opacity-0",enterToClass:"transform scale-100 opacity-100",leaveActiveClass:"transition duration-75 ease-in",leaveFromClass:"transform scale-100 opacity-100",leaveToClass:"transform scale-95 opacity-0"},popper:{placement:"bottom-end",strategy:"fixed"},arrow:{...ce,ring:"before:ring-1 before:ring-gray-200 dark:before:ring-gray-700",background:"before:bg-white dark:before:bg-gray-700"}},ke={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},pe={wrapper:"relative",base:"relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",rounded:"rounded-md",placeholder:"placeholder-gray-400 dark:placeholder-gray-500",size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},gap:{"2xs":"gap-x-1",xs:"gap-x-1.5",sm:"gap-x-1.5",md:"gap-x-2",lg:"gap-x-2.5",xl:"gap-x-2.5"},padding:{"2xs":"px-2 py-1",xs:"px-2.5 py-1.5",sm:"px-2.5 py-1.5",md:"px-3 py-2",lg:"px-3.5 py-2.5",xl:"px-3.5 py-2.5"},leading:{padding:{"2xs":"ps-7",xs:"ps-8",sm:"ps-9",md:"ps-10",lg:"ps-11",xl:"ps-12"}},trailing:{padding:{"2xs":"pe-7",xs:"pe-8",sm:"pe-9",md:"pe-10",lg:"pe-11",xl:"pe-12"}},color:{white:{outline:"shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"},gray:{outline:"shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"}},variant:{outline:"shadow-sm bg-transparent text-gray-900 dark:text-white ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 focus:ring-2 focus:ring-{color}-500 dark:focus:ring-{color}-400",none:"bg-transparent focus:ring-0 focus:shadow-none"},icon:{base:"flex-shrink-0 text-gray-400 dark:text-gray-500",color:"text-{color}-500 dark:text-{color}-400",size:{"2xs":"h-4 w-4",xs:"h-4 w-4",sm:"h-5 w-5",md:"h-5 w-5",lg:"h-5 w-5",xl:"h-6 w-6"},leading:{wrapper:"absolute inset-y-0 start-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"ps-2",xs:"ps-2.5",sm:"ps-2.5",md:"ps-3",lg:"ps-3.5",xl:"ps-3.5"}},trailing:{wrapper:"absolute inset-y-0 end-0 flex items-center",pointer:"pointer-events-none",padding:{"2xs":"pe-2",xs:"pe-2.5",sm:"pe-2.5",md:"pe-3",lg:"pe-3.5",xl:"pe-3.5"}}},default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid"}},ve={...pe,placeholder:"text-gray-900 dark:text-white",default:{size:"sm",color:"white",variant:"outline",loadingIcon:"i-heroicons-arrow-path-20-solid",trailingIcon:"i-heroicons-chevron-down-20-solid"}},Ce={base:"overflow-hidden",background:"bg-white dark:bg-gray-900",divide:"divide-y divide-gray-200 dark:divide-gray-800",ring:"ring-1 ring-gray-200 dark:ring-gray-800",rounded:"rounded-lg",shadow:"shadow",body:{base:"",background:"",padding:"px-4 py-5 sm:p-6"},header:{base:"",background:"",padding:"px-4 py-5 sm:px-6"},footer:{base:"",background:"",padding:"px-4 py-4 sm:px-6"}},ze={wrapper:{base:"flex items-center align-center text-center w-full",horizontal:"flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:"border-t",vertical:"border-s"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm"},y=F(z.ui.strategy,z.ui.avatar,ue),ge=$({components:{UIcon:I},inheritAttrs:!1,props:{src:{type:[String,Boolean],default:null},alt:{type:String,default:null},text:{type:String,default:null},icon:{type:String,default:()=>y.default.icon},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(y.size).includes(e)}},chipColor:{type:String,default:()=>y.default.chipColor,validator(e){return["gray",...z.ui.colors].includes(e)}},chipPosition:{type:String,default:()=>y.default.chipPosition,validator(e){return Object.keys(y.chip.position).includes(e)}},chipText:{type:[String,Number],default:null},imgClass:{type:String,default:""},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:n}=de("avatar",G(e,"ui"),y),t=f(()=>typeof e.src=="boolean"?null:e.src),r=f(()=>(e.alt||"").split(" ").map(p=>p.charAt(0)).join("").substring(0,2)),i=f(()=>_(m(a.value.wrapper,(s.value||!t.value)&&a.value.background,a.value.rounded,a.value.size[e.size]),e.class)),o=f(()=>_(m(a.value.rounded,a.value.size[e.size]),e.imgClass)),d=f(()=>m(a.value.icon.base,a.value.icon.size[e.size])),u=f(()=>m(a.value.chip.base,a.value.chip.size[e.size],a.value.chip.position[e.chipPosition],a.value.chip.background.replaceAll("{color}",e.chipColor))),s=X(!1);Y(()=>e.src,()=>{s.value&&(s.value=!1)});function c(){s.value=!0}return{ui:a,attrs:n,wrapperClass:i,imgClass:o,iconClass:d,chipClass:u,url:t,placeholder:r,error:s,onError:c}}}),fe=["alt","src"];function ye(e,a,n,t,r,i){const o=I;return g(),h("span",{class:x(e.wrapperClass)},[e.url&&!e.error?(g(),h("img",b({key:0,class:e.imgClass,alt:e.alt,src:e.url},e.attrs,{onError:a[0]||(a[0]=(...d)=>e.onError&&e.onError(...d))}),null,16,fe)):e.text?(g(),h("span",{key:1,class:x(e.ui.text)},k(e.text),3)):e.icon?(g(),v(o,{key:2,name:e.icon,class:x(e.iconClass)},null,8,["name","class"])):e.placeholder?(g(),h("span",{key:3,class:x(e.ui.placeholder)},k(e.placeholder),3)):N("",!0),e.chipColor?(g(),h("span",{key:4,class:x(e.chipClass)},k(e.chipText),3)):N("",!0),C(e.$slots,"default")],2)}const Se=S(ge,[["render",ye]]);export{I as _,Se as a,be as b,Ce as c,ze as d,me as e,we as f,ee as g,ke as k,Z as o,ve as s,_ as t,de as u};
