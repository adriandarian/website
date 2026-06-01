import{B as D,o as j,m as L,p as c,d as R,i as H,C as N,f as m,b as n,v,F as P,s as C,k as q,D as U,A as V,E as G,e as J,a as K,T as Y,q as p,c as T,r as W,n as X}from"./index-ChX08N32.js";import{P as O}from"./prism-javascript-C4equ8jR.js";import{_ as Z}from"./_plugin-vue_export-helper-DlAUqK2U.js";Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(s,o){var d={};d["language-"+o]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[o]},d.cdata=/^<!\[CDATA\[|\]\]>$/i;var g={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:d}};g["language-"+o]={pattern:/[\s\S]+/,inside:Prism.languages[o]};var u={};u[s]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return s}),"i"),lookbehind:!0,greedy:!0,inside:g},Prism.languages.insertBefore("markup","cdata",u)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(i,s){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[s,"language-"+s],inside:Prism.languages[s]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(i){var s=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+s.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+s.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+s.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+s.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:s,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var o=i.languages.markup;o&&(o.tag.addInlined("style","css"),o.tag.addAttribute("style","css"))})(Prism);const Q=["aria-label"],ee={class:"pe-panel"},te={class:"pe-header"},ne={class:"pe-header-left"},ae={class:"pe-cat"},ie={class:"pe-title"},se={class:"pe-header-right"},oe=["href"],re={class:"pe-body"},le={class:"pe-code-panel"},de={class:"pe-tab-bar"},ce={class:"pe-tabs",role:"tablist"},pe=["aria-selected","onClick"],ge={class:"pe-editor-wrap"},ue={class:"pe-code-area"},he=["innerHTML"],me={class:"pe-preview-panel"},ve="https://cdn.jsdelivr.net/npm/openseadragon@6/build/openseadragon/openseadragon.min.js",we={__name:"PenEditor",props:{pen:{type:Object,default:null}},emits:["close"],setup(i,{emit:s}){const o=i,d=s,g=["HTML","CSS","JS"],u={HTML:"markup",CSS:"css",JS:"javascript"},l=p("JS"),r=W({html:"",css:"",js:""}),w=p(null),x=p(null),b=p(null),f=p(null);let h=null;const _=T(()=>{const e=r[l.value.toLowerCase()]||"",t=u[l.value],a=O.languages[t];return a?O.highlight(e+`
`,a,t):B(e+`
`)}),z=T(()=>{const e=r[l.value.toLowerCase()]||"";return Math.max(1,e.split(`
`).length)});function B(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function M(){const e=x.value,t=b.value,a=f.value;!e||!t||(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft,a&&(a.scrollTop=e.scrollTop))}function $(){return`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<script>
document.addEventListener('keydown', function(e){
  if (e.key === 'Escape') window.parent.postMessage('pe:escape', '*');
});
<\/script>
<style>
*{box-sizing:border-box}
::-webkit-scrollbar{width:6px;height:6px}
::-webkit-scrollbar-track{background:transparent}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.18);border-radius:99px}
::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.35)}
::-webkit-scrollbar-corner{background:transparent}
*{scrollbar-width:thin;scrollbar-color:rgba(255,255,255,0.18) transparent}
</style>
<style>
${r.css}
</style>
</head>
<body>
${r.html}
<script src="${ve}"><\/script>
<script>
(function(){try{
${r.js}
}catch(e){
var _eb=document.createElement('div');
_eb.style.cssText='position:fixed;bottom:0;left:0;right:0;background:#c0392b;color:#fff;font:12px/1.6 monospace;padding:8px 12px;z-index:9999;white-space:pre-wrap;';
_eb.textContent='Error: '+e.message;
document.body.appendChild(_eb);}})();
<\/script>
</body>
</html>`}function y(){clearTimeout(h);const e=$();w.value&&(w.value.srcdoc=e)}function A(){clearTimeout(h),h=setTimeout(y,700)}function I(){A()}function F(e){if(e.key==="Tab"){e.preventDefault();const t=e.target,a=t.selectionStart,E=t.selectionEnd;t.value=t.value.substring(0,a)+"  "+t.value.substring(E),t.selectionStart=t.selectionEnd=a+2,t.dispatchEvent(new Event("input"))}}function k(e){e.key==="Escape"&&d("close")}function S(e){e.data==="pe:escape"&&d("close")}return D(()=>o.pen,e=>{e&&(r.html=e.html||"",r.css=e.css||"",r.js=e.js||"",l.value="JS",X(y))},{immediate:!0}),j(()=>{document.addEventListener("keydown",k),window.addEventListener("message",S)}),L(()=>{document.removeEventListener("keydown",k),window.removeEventListener("message",S),clearTimeout(h)}),(e,t)=>(c(),R(Y,{to:"body"},[H(K,{name:"pe-fade"},{default:N(()=>[i.pen?(c(),m("div",{key:0,class:"pe-overlay",onClick:t[2]||(t[2]=G(a=>e.$emit("close"),["self"])),role:"dialog","aria-modal":"true","aria-label":i.pen.title},[n("div",ee,[n("div",te,[n("div",ne,[n("button",{class:"pe-close",onClick:t[0]||(t[0]=a=>e.$emit("close")),"aria-label":"Close editor"},[...t[3]||(t[3]=[n("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round"},[n("path",{d:"M18 6 6 18M6 6l12 12"})],-1)])]),n("span",ae,v(i.pen.cat),1),n("span",ie,v(i.pen.title),1)]),n("div",se,[n("a",{href:`https://codepen.io/iangilman/pen/${i.pen.id}`,target:"_blank",rel:"noopener noreferrer",class:"pe-cp-link"}," CodePen ↗ ",8,oe)])]),n("div",re,[n("div",le,[n("div",de,[n("div",ce,[(c(),m(P,null,C(g,a=>n("button",{key:a,role:"tab","aria-selected":l.value===a,class:q(["pe-tab",{active:l.value===a},`pe-tab-${a.toLowerCase()}`]),onClick:E=>l.value=a},v(a),11,pe)),64))])]),n("div",ge,[n("div",{class:"pe-line-nums",ref_key:"lineNumsEl",ref:f,"aria-hidden":"true"},[(c(!0),m(P,null,C(z.value,a=>(c(),m("span",{key:a},v(a),1))),128))],512),n("div",ue,[n("pre",{ref_key:"highlightEl",ref:b,class:"pe-highlight","aria-hidden":"true",innerHTML:_.value},null,8,he),U(n("textarea",{ref_key:"textareaEl",ref:x,class:"pe-textarea","onUpdate:modelValue":t[1]||(t[1]=a=>r[l.value.toLowerCase()]=a),spellcheck:"false",autocomplete:"off",autocorrect:"off",autocapitalize:"off",onInput:I,onScroll:M,onKeydown:F},null,544),[[V,r[l.value.toLowerCase()]]])])])]),n("div",me,[t[4]||(t[4]=n("div",{class:"pe-preview-bar"},[n("span",null,"Result")],-1)),n("iframe",{ref_key:"iframeEl",ref:w,class:"pe-preview",sandbox:"allow-scripts",title:"Live preview"},null,512)])])])],8,Q)):J("",!0)]),_:1})]))}},ke=Z(we,[["__scopeId","data-v-ff536295"]]),xe=[{id:"bdgWBz",title:"Basic OpenSeadragon example",cat:"Basics",desc:"The minimal setup — a div, a tile source, done. The right place to start.",hue:200,html:'<div id="viewer"></div>',css:`body { margin: 0; background: #111; }
#viewer { width: 100vw; height: 100vh; }`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi',
  animationTime: 0.5,
  blendTime: 0.1,
  constrainDuringPan: true,
  maxZoomPixelRatio: 2,
  showNavigator: true,
  navigatorPosition: 'BOTTOM_RIGHT'
});`},{id:"vyWabR",title:"Basic example with Overlay",cat:"Overlays",desc:"Anchor an HTML element in image space. Tracks pan, zoom, and rotation.",hue:260,html:`<div id="viewer">
  <div id="overlay">📍 Overlay</div>
</div>`,css:`body { margin: 0; background: #111; }
#viewer { width: 100vw; height: 100vh; }
#overlay {
  background: rgba(255, 100, 100, 0.85);
  color: white;
  font-family: sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.4);
}`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi'
});

viewer.addHandler('open', () => {
  viewer.addOverlay({
    element: document.getElementById('overlay'),
    location: new OpenSeadragon.Rect(0.25, 0.2, 0.3, 0.08)
  });
});`},{id:"PoqpqmL",title:"Annotations + SVG Overlay",cat:"Overlays",desc:"Draw SVG annotation shapes directly over a zoomable image.",hue:140,html:`<div id="viewer">
  <!-- SVG elements work as overlays too -->
  <svg id="ann-a" xmlns="http://www.w3.org/2000/svg"
       width="200" height="120" style="pointer-events:none">
    <rect width="200" height="120" rx="4"
          fill="rgba(255,140,0,0.35)" stroke="orange" stroke-width="3"/>
    <text x="10" y="22" fill="white" font-size="14" font-family="sans-serif"
          font-weight="600">Region A</text>
  </svg>
  <svg id="ann-b" xmlns="http://www.w3.org/2000/svg"
       width="140" height="140" style="pointer-events:none">
    <circle cx="70" cy="70" r="66"
            fill="rgba(100,200,255,0.3)" stroke="#67d6ee" stroke-width="3"/>
    <text x="70" y="76" fill="white" font-size="14" font-family="sans-serif"
          font-weight="600" text-anchor="middle">Region B</text>
  </svg>
</div>`,css:`body { margin: 0; background: #111; }
#viewer { width: 100vw; height: 100vh; }`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi'
});

viewer.addHandler('open', () => {
  viewer.addOverlay({
    element: document.getElementById('ann-a'),
    location: new OpenSeadragon.Rect(0.08, 0.1, 0.28, 0.17),
    rotationMode: OpenSeadragon.OverlayRotationMode.EXACT
  });

  viewer.addOverlay({
    element: document.getElementById('ann-b'),
    location: new OpenSeadragon.Rect(0.6, 0.55, 0.22, 0.22),
    rotationMode: OpenSeadragon.OverlayRotationMode.EXACT
  });
});`},{id:"mEZKaY",title:"Overlay click",cat:"Overlays",desc:"Handle click events on overlaid DOM elements in image coordinates.",hue:280,html:`<div id="viewer">
  <button id="hotspot">Click me!</button>
</div>
<div id="log">Click the hotspot above.</div>`,css:`body { margin: 0; background: #111; color: #eee; font-family: sans-serif; }
#viewer { width: 100vw; height: calc(100vh - 44px); }
#hotspot {
  background: rgba(103, 214, 238, 0.9);
  color: #0a1a22;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
#hotspot:hover { background: rgba(103, 214, 238, 1); }
#log {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  border-top: 1px solid #333;
}`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi'
});

viewer.addHandler('open', () => {
  const btn = document.getElementById('hotspot');

  viewer.addOverlay({
    element: btn,
    location: new OpenSeadragon.Point(0.5, 0.4)
  });

  const tracker = new OpenSeadragon.MouseTracker({
    element: btn,
    clickHandler(e) {
      const vp = viewer.viewport.pointFromPixel(e.position);
      document.getElementById('log').textContent =
        \`Clicked at image coords: x=\${vp.x.toFixed(4)}, y=\${vp.y.toFixed(4)}\`;
    }
  });
  tracker.setTracking(true);
});`},{id:"poeqovO",title:"Center on click",cat:"Navigation",desc:"Click anywhere to smoothly pan and center the viewport on that point.",hue:220,html:`<div id="viewer"></div>
<div id="log">Click anywhere on the image to pan there.</div>`,css:`body { margin: 0; background: #111; color: #eee; font-family: sans-serif; }
#viewer { width: 100vw; height: calc(100vh - 44px); cursor: crosshair; }
#log {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  border-top: 1px solid #333;
}`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi'
});

viewer.addHandler('canvas-click', e => {
  if (!e.quick) return; // ignore drags
  const point = viewer.viewport.pointFromPixel(e.position);
  viewer.viewport.panTo(point);
  document.getElementById('log').textContent =
    \`Panned to image coords: x=\${point.x.toFixed(4)}, y=\${point.y.toFixed(4)}\`;
});`},{id:"oVWNxJ",title:"Collection Next/Previous",cat:"Navigation",desc:"Step through a collection of images with next/previous controls.",hue:180,html:`<div id="viewer"></div>
<div id="controls">
  <button id="prev">← Prev</button>
  <span id="idx">1 / 3</span>
  <button id="next">Next →</button>
</div>`,css:`body { margin: 0; background: #111; color: #eee; font-family: sans-serif; }
#viewer { width: 100vw; height: calc(100vh - 52px); }
#controls {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-top: 1px solid #333;
}
button {
  background: #222;
  color: #eee;
  border: 1px solid #444;
  padding: 6px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
}
button:hover { background: #333; }
#idx { font-size: 13px; color: rgba(255,255,255,0.5); min-width: 48px; text-align: center; }`,js:`const sources = [
  'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi',
  'https://openseadragon.github.io/example-images/duomo/duomo.dzi',
  'https://openseadragon.github.io/example-images/pnp/pnp.dzi'
];

const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: sources,
  sequenceMode: true,
  showSequenceControl: false
});

function updateIdx() {
  document.getElementById('idx').textContent =
    (viewer.currentPage() + 1) + ' / ' + sources.length;
}

document.getElementById('prev').onclick = () => {
  viewer.goToPreviousPage();
  setTimeout(updateIdx, 100);
};
document.getElementById('next').onclick = () => {
  viewer.goToNextPage();
  setTimeout(updateIdx, 100);
};`},{id:"wvVaXwd",title:"Canvas drawer",cat:"Advanced",desc:"Render tiles using a custom canvas-based drawer and post-process with 2D context.",hue:30,html:`<div id="viewer"></div>
<div id="controls">
  <label>Effect:
    <select id="effect">
      <option value="none">None</option>
      <option value="sepia">Sepia</option>
      <option value="invert">Invert</option>
      <option value="grayscale">Grayscale</option>
    </select>
  </label>
</div>`,css:`body { margin: 0; background: #111; color: #eee; font-family: sans-serif; }
#viewer { width: 100vw; height: calc(100vh - 52px); }
#controls {
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-top: 1px solid #333;
  font-size: 13px;
}
select {
  background: #222;
  color: #eee;
  border: 1px solid #444;
  padding: 4px 8px;
  border-radius: 4px;
  margin-left: 8px;
}`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi',
  drawer: 'canvas'
});

const select = document.getElementById('effect');

viewer.addHandler('update-viewport', () => {
  const canvas = viewer.drawer.canvas;
  if (!canvas) return;
  // CSS filters are the simplest way to post-process the canvas output
  canvas.style.filter = {
    none:      '',
    sepia:     'sepia(1)',
    invert:    'invert(1)',
    grayscale: 'grayscale(1)'
  }[select.value] || '';
});`},{id:"qBdabGM",title:"Selection Rectangle",cat:"Advanced",desc:"Interactive selection rectangle that reports coordinates in image space.",hue:0,html:`<div id="viewer"></div>
<div id="log">Drag on the image to select a region.</div>`,css:`body { margin: 0; background: #111; color: #eee; font-family: sans-serif; }
#viewer { width: 100vw; height: calc(100vh - 44px); cursor: crosshair; user-select: none; }
#sel {
  position: absolute;
  border: 2px solid #67d6ee;
  background: rgba(103, 214, 238, 0.12);
  pointer-events: none;
  box-shadow: 0 0 0 1px rgba(103, 214, 238, 0.3);
}
#log {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  border-top: 1px solid #333;
}`,js:`const viewer = OpenSeadragon({
  id: 'viewer',
  prefixUrl: 'https://openseadragon.github.io/openseadragon/images/',
  tileSources: 'https://openseadragon.github.io/example-images/highsmith/highsmith.dzi'
});

// Inject the selection div into OSD's canvas wrapper
viewer.addHandler('open', () => {
  const sel = document.createElement('div');
  sel.id = 'sel';
  sel.style.display = 'none';
  viewer.canvas.appendChild(sel);
});

let start = null;

viewer.addHandler('canvas-press', e => {
  start = e.position.clone();
  const sel = document.getElementById('sel');
  if (sel) { sel.style.display = 'block'; sel.style.width = sel.style.height = '0'; }
});

viewer.addHandler('canvas-drag', e => {
  if (!start) return;
  const sel = document.getElementById('sel');
  if (!sel) return;
  const x = Math.min(start.x, e.position.x);
  const y = Math.min(start.y, e.position.y);
  sel.style.left   = x + 'px';
  sel.style.top    = y + 'px';
  sel.style.width  = Math.abs(e.position.x - start.x) + 'px';
  sel.style.height = Math.abs(e.position.y - start.y) + 'px';
  e.preventDefaultAction = true; // stop OSD from panning
});

viewer.addHandler('canvas-release', e => {
  if (!start) return;
  const p1 = viewer.viewport.pointFromPixel(start);
  const p2 = viewer.viewport.pointFromPixel(e.position);
  const x = Math.min(p1.x, p2.x), y = Math.min(p1.y, p2.y);
  const w = Math.abs(p1.x - p2.x), h = Math.abs(p1.y - p2.y);
  document.getElementById('log').textContent =
    \`x=\${x.toFixed(4)} y=\${y.toFixed(4)} w=\${w.toFixed(4)} h=\${h.toFixed(4)}\`;
  start = null;
});`}];xe.slice(0,3);export{xe as C,ke as P};
