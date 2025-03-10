"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{5845:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(12115),o=n(39033);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,i=r.useRef(a),u=(0,o.c)(t);return r.useEffect(()=>{i.current!==a&&(u(a),i.current=a)},[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,l=u?e:a,c=(0,o.c)(n);return[l,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[u,e,i,c])]}},6101:(e,t,n)=>{n.d(t,{s:()=>i,t:()=>a});var r=n(12115);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function i(...e){return r.useCallback(a(...e),e)}},15452:(e,t,n)=>{n.d(t,{UC:()=>et,VY:()=>er,ZL:()=>Q,bL:()=>H,bm:()=>eo,hE:()=>en,hJ:()=>ee,l9:()=>J});var r=n(12115),o=n(85185),a=n(6101),i=n(46081),u=n(61285),l=n(5845),c=n(19178),s=n(25519),d=n(34378),f=n(28905),v=n(63655),p=n(92293),m=n(93795),h=n(38168),g=n(99708),y=n(95155),E="Dialog",[b,w]=(0,i.A)(E),[N,C]=b(E),O=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:c=!0}=e,s=r.useRef(null),d=r.useRef(null),[f=!1,v]=(0,l.i)({prop:o,defaultProp:a,onChange:i});return(0,y.jsx)(N,{scope:t,triggerRef:s,contentRef:d,contentId:(0,u.B)(),titleId:(0,u.B)(),descriptionId:(0,u.B)(),open:f,onOpenChange:v,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),modal:c,children:n})};O.displayName=E;var x="DialogTrigger",R=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(x,n),u=(0,a.s)(t,i.triggerRef);return(0,y.jsx)(v.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":G(i.open),...r,ref:u,onClick:(0,o.m)(e.onClick,i.onOpenToggle)})});R.displayName=x;var S="DialogPortal",[A,D]=b(S,{forceMount:void 0}),L=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=C(S,t);return(0,y.jsx)(A,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,y.jsx)(f.C,{present:n||i.open,children:(0,y.jsx)(d.Z,{asChild:!0,container:a,children:e})}))})};L.displayName=S;var P="DialogOverlay",k=r.forwardRef((e,t)=>{let n=D(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=C(P,e.__scopeDialog);return a.modal?(0,y.jsx)(f.C,{present:r||a.open,children:(0,y.jsx)(j,{...o,ref:t})}):null});k.displayName=P;var j=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(P,n);return(0,y.jsx)(m.A,{as:g.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(v.sG.div,{"data-state":G(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),M="DialogContent",T=r.forwardRef((e,t)=>{let n=D(M,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=C(M,e.__scopeDialog);return(0,y.jsx)(f.C,{present:r||a.open,children:a.modal?(0,y.jsx)(I,{...o,ref:t}):(0,y.jsx)(F,{...o,ref:t})})});T.displayName=M;var I=r.forwardRef((e,t)=>{let n=C(M,e.__scopeDialog),i=r.useRef(null),u=(0,a.s)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,h.Eq)(e)},[]),(0,y.jsx)(W,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault())})}),F=r.forwardRef((e,t)=>{let n=C(M,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,y.jsx)(W,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),W=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:u,...l}=e,d=C(M,n),f=r.useRef(null),v=(0,a.s)(t,f);return(0,p.Oh)(),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:u,children:(0,y.jsx)(c.qW,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":G(d.open),...l,ref:v,onDismiss:()=>d.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Y,{titleId:d.titleId}),(0,y.jsx)(z,{contentRef:f,descriptionId:d.descriptionId})]})]})}),_="DialogTitle",B=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(_,n);return(0,y.jsx)(v.sG.h2,{id:o.titleId,...r,ref:t})});B.displayName=_;var U="DialogDescription",$=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(U,n);return(0,y.jsx)(v.sG.p,{id:o.descriptionId,...r,ref:t})});$.displayName=U;var X="DialogClose",q=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(X,n);return(0,y.jsx)(v.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>a.onOpenChange(!1))})});function G(e){return e?"open":"closed"}q.displayName=X;var K="DialogTitleWarning",[Z,V]=(0,i.q)(K,{contentName:M,titleName:_,docsSlug:"dialog"}),Y=e=>{let{titleId:t}=e,n=V(K),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},z=e=>{let{contentRef:t,descriptionId:n}=e,o=V("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},H=O,J=R,Q=L,ee=k,et=T,en=B,er=$,eo=q},19178:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(12115),a=n(85185),i=n(63655),u=n(6101),l=n(39033),c=n(95155),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:E,onDismiss:b,...w}=e,N=o.useContext(d),[C,O]=o.useState(null),x=null!==(f=null==C?void 0:C.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=o.useState({}),S=(0,u.s)(t,e=>O(e)),A=Array.from(N.layers),[D]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),L=A.indexOf(D),P=C?A.indexOf(C):-1,k=N.layersWithOutsidePointerEventsDisabled.size>0,j=P>=L,M=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,l.c)(e),a=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!a.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);a.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>a.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));!j||n||(null==g||g(e),null==E||E(e),e.defaultPrevented||null==b||b())},x),T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,l.c)(e),a=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!a.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}(e=>{let t=e.target;[...N.branches].some(e=>e.contains(t))||(null==y||y(e),null==E||E(e),e.defaultPrevented||null==b||b())},x);return!function(e,t=globalThis?.document){let n=(0,l.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P===N.layers.size-1&&(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},x),o.useEffect(()=>{if(C)return m&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(C)),N.layers.add(C),v(),()=>{m&&1===N.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=r)}},[C,x,m,N]),o.useEffect(()=>()=>{C&&(N.layers.delete(C),N.layersWithOutsidePointerEventsDisabled.delete(C),v())},[C,N]),o.useEffect(()=>{let e=()=>R({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,c.jsx)(i.sG.div,{...w,ref:S,style:{pointerEvents:k?j?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.m)(e.onFocusCapture,T.onFocusCapture),onBlurCapture:(0,a.m)(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:(0,a.m)(e.onPointerDownCapture,M.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,i.hO)(a,u):a.dispatchEvent(u)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),a=(0,u.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(i.sG.div,{...e,ref:a})}).displayName="DismissableLayerBranch"},19946:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(12115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let u=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:u=2,absoluteStrokeWidth:l,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...i,width:o,height:o,stroke:n,strokeWidth:l?24*Number(u)/Number(o):u,className:a("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),l=(e,t)=>{let n=(0,r.forwardRef)((n,i)=>{let{className:l,...c}=n;return(0,r.createElement)(u,{ref:i,iconNode:t,className:a("lucide-".concat(o(e)),l),...c})});return n.displayName="".concat(e),n}},25519:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(12115),o=n(6101),a=n(63655),i=n(39033),u=n(95155),l="focusScope.autoFocusOnMount",c="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...y}=e,[E,b]=r.useState(null),w=(0,i.c)(h),N=(0,i.c)(g),C=r.useRef(null),O=(0,o.s)(t,e=>b(e)),x=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(x.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:p(C.current,{select:!0})},t=function(e){if(x.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||p(C.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[d,E,x.paused]),r.useEffect(()=>{if(E){m.add(x);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,s);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(f(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(c,s);E.addEventListener(c,N),E.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),E.removeEventListener(c,N),m.remove(x)},0)}}},[E,w,N,x]);let R=r.useCallback(e=>{if(!n&&!d||x.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&p(a,{select:!0})):(e.preventDefault(),n&&p(o,{select:!0})):r===t&&e.preventDefault()}},[n,d,x.paused]);return(0,u.jsx)(a.sG.div,{tabIndex:-1,...y,ref:O,onKeyDown:R})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}d.displayName="FocusScope";var m=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null===(n=(e=h(e,t))[0])||void 0===n||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},28905:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(12115),o=n(6101),a=n(52712),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=r.useState(),l=r.useRef({}),c=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(l.current);s.current="mounted"===d?e:"none"},[d]),(0,a.N)(()=>{let t=l.current,n=c.current;if(n!==e){let r=s.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(l.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!c.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(s.current=u(l.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(l.current=getComputedStyle(e)),i(e)},[])}}(t),l="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),c=(0,o.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(l));return"function"==typeof n||i.isPresent?r.cloneElement(l,{ref:c}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},34378:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(12115),o=n(47650),a=n(63655),i=n(52712),u=n(95155),l=r.forwardRef((e,t)=>{var n,l;let{container:c,...s}=e,[d,f]=r.useState(!1);(0,i.N)(()=>f(!0),[]);let v=c||d&&(null===(l=globalThis)||void 0===l?void 0:null===(n=l.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,u.jsx)(a.sG.div,{...s,ref:t}),v):null});l.displayName="Portal"},38168:(e,t,n)=>{n.d(t,{Eq:()=>s});var r=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},o=new WeakMap,a=new WeakMap,i={},u=0,l=function(e){return e&&(e.host||l(e.parentNode))},c=function(e,t,n,r){var c=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=l(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});i[n]||(i[n]=new WeakMap);var s=i[n],d=[],f=new Set,v=new Set(c),p=function(e){!(!e||f.has(e))&&(f.add(e),p(e.parentNode))};c.forEach(p);var m=function(e){!(!e||v.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(r),i=null!==t&&"false"!==t,u=(o.get(e)||0)+1,l=(s.get(e)||0)+1;o.set(e,u),s.set(e,l),d.push(e),1===u&&i&&a.set(e,!0),1===l&&e.setAttribute(n,"true"),i||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),u++,function(){d.forEach(function(e){var t=o.get(e)-1,i=s.get(e)-1;o.set(e,t),s.set(e,i),t||(a.has(e)||e.removeAttribute(r),a.delete(e)),i||e.removeAttribute(n)}),--u||(o=new WeakMap,o=new WeakMap,a=new WeakMap,i={})}},s=function(e,t,n){void 0===n&&(n="data-aria-hidden");var o=Array.from(Array.isArray(e)?e:[e]),a=t||r(e);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),c(o,a,n,"aria-hidden")):function(){return null}}},39033:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(12115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},46081:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>a});var r=n(12115),o=n(95155);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,i=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let i=r.createContext(a),u=n.length;n=[...n,a];let l=t=>{let{scope:n,children:a,...l}=t,c=n?.[e]?.[u]||i,s=r.useMemo(()=>l,Object.values(l));return(0,o.jsx)(c.Provider,{value:s,children:a})};return l.displayName=t+"Provider",[l,function(n,o){let l=o?.[e]?.[u]||i,c=r.useContext(l);if(c)return c;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},52712:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(12115),o=globalThis?.document?r.useLayoutEffect:()=>{}},54416:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(19946).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},61285:(e,t,n)=>{n.d(t,{B:()=>l});var r,o=n(12115),a=n(52712),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function l(e){let[t,n]=o.useState(i());return(0,a.N)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},63655:(e,t,n)=>{n.d(t,{hO:()=>l,sG:()=>u});var r=n(12115),o=n(47650),a=n(99708),i=n(95155),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},74466:(e,t,n)=>{n.d(t,{F:()=>i});var r=n(52596);let o=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,a=r.$,i=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return a(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:i,defaultVariants:u}=t,l=Object.keys(i).map(e=>{let t=null==n?void 0:n[e],r=null==u?void 0:u[e];if(null===t)return null;let a=o(t)||o(r);return i[e][a]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return a(e,l,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...o}=t;return Object.entries(o).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...u,...c}[t]):({...u,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},85185:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},92293:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(12115),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},93795:(e,t,n)=>{n.d(t,{A:()=>G});var r,o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var i=("function"==typeof SuppressedError&&SuppressedError,n(12115)),u="right-scroll-bar-position",l="width-before-scroll-bar";function c(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var s="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,d=new WeakMap;function f(e){return e}var v=function(e){void 0===e&&(e={});var t,n,r,a,i=(t=null,void 0===n&&(n=f),r=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,a);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){a=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}});return i.options=o({async:!0,ssr:!1},e),i}(),p=function(){},m=i.forwardRef(function(e,t){var n,r,u,l,f=i.useRef(null),m=i.useState({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:p}),h=m[0],g=m[1],y=e.forwardProps,E=e.children,b=e.className,w=e.removeScrollBar,N=e.enabled,C=e.shards,O=e.sideCar,x=e.noIsolation,R=e.inert,S=e.allowPinchZoom,A=e.as,D=e.gapMode,L=a(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[f,t],r=function(e){return n.forEach(function(t){return c(t,e)})},(u=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return u.value},set current(value){var e=u.value;e!==value&&(u.value=value,u.callback(value,e))}}}})[0]).callback=r,l=u.facade,s(function(){var e=d.get(l);if(e){var t=new Set(e),r=new Set(n),o=l.current;t.forEach(function(e){r.has(e)||c(e,null)}),r.forEach(function(e){t.has(e)||c(e,o)})}d.set(l,n)},[n]),l),k=o(o({},L),h);return i.createElement(i.Fragment,null,N&&i.createElement(O,{sideCar:v,removeScrollBar:w,shards:C,noIsolation:x,inert:R,setCallbacks:g,allowPinchZoom:!!S,lockRef:f,gapMode:D}),y?i.cloneElement(i.Children.only(E),o(o({},k),{ref:P})):i.createElement(void 0===A?"div":A,o({},k,{className:b,ref:P}),E))});m.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},m.classNames={fullWidth:l,zeroRight:u};var h=function(e){var t=e.sideCar,n=a(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,o({},n))};h.isSideCarExport=!0;var g=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},y=function(){var e=g();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},E=function(){var e=y();return function(t){return e(t.styles,t.dynamic),null}},b={left:0,top:0,right:0,gap:0},w=function(e){return parseInt(e||"",10)||0},N=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[w(n),w(r),w(o)]},C=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return b;var t=N(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},O=E(),x="data-scroll-locked",R=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(x,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(u," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(l," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u," .").concat(u," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(l," .").concat(l," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(x,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},S=function(){var e=parseInt(document.body.getAttribute(x)||"0",10);return isFinite(e)?e:0},A=function(){i.useEffect(function(){return document.body.setAttribute(x,(S()+1).toString()),function(){var e=S()-1;e<=0?document.body.removeAttribute(x):document.body.setAttribute(x,e.toString())}},[])},D=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;A();var a=i.useMemo(function(){return C(o)},[o]);return i.createElement(O,{styles:R(a,!t,o,n?"":"!important")})},L=!1;if("undefined"!=typeof window)try{var P=Object.defineProperty({},"passive",{get:function(){return L=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch(e){L=!1}var k=!!L&&{passive:!1},j=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},M=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),T(e,r)){var o=I(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},T=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},I=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},F=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,v=0;do{var p=I(e,l),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&T(e,l)&&(f+=h,v+=m),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},W=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_=function(e){return[e.deltaX,e.deltaY]},B=function(e){return e&&"current"in e?e.current:e},U=0,$=[];let X=(v.useMedium(function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(U++)[0],a=i.useState(E)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(B),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=W(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=M(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=M(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var v=r.current||o;return F(v,t,e,"h"===v?l:c,!0)},[]),c=i.useCallback(function(e){if($.length&&$[$.length-1]===a){var n="deltaY"in e?_(e):W(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(B).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=W(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,_(t),t.target,l(t,e.lockRef.current))},[]),v=i.useCallback(function(t){s(t.type,W(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return $.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:v}),document.addEventListener("wheel",c,k),document.addEventListener("touchmove",c,k),document.addEventListener("touchstart",d,k),function(){$=$.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,k),document.removeEventListener("touchmove",c,k),document.removeEventListener("touchstart",d,k)}},[]);var p=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?i.createElement(D,{gapMode:e.gapMode}):null)}),h);var q=i.forwardRef(function(e,t){return i.createElement(m,o({},e,{ref:t,sideCar:X}))});q.classNames=m.classNames;let G=q},99708:(e,t,n)=>{n.d(t,{DX:()=>i});var r=n(12115),o=n(6101),a=n(95155),i=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),l=i.find(c);if(l){let e=l.props.children,n=i.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(u,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,a.jsx)(u,{...o,ref:t,children:n})});i.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),i=function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...e)=>{a(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props);return n.type!==r.Fragment&&(i.ref=t?(0,o.t)(t,e):e),r.cloneElement(n,i)}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var l=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function c(e){return r.isValidElement(e)&&e.type===l}}}]);