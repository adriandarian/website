import{o as M,m as _,p as y,d as V,f as S,b as k,v as E,E as L,t as A,l as C,e as R,T,q as x,r as B}from"./index-SIjFYFTC.js";const $={class:"twk-body"},d=16,j={__name:"TweaksPanel",props:{title:{type:String,default:"Tweaks"}},setup(u){const c=x(!1),r=x(null),e=B({x:16,y:16});function i(){const t=r.value;if(!t)return;const n=t.offsetWidth,a=t.offsetHeight;e.x=Math.min(Math.max(d,window.innerWidth-n-d),Math.max(d,e.x)),e.y=Math.min(Math.max(d,window.innerHeight-a-d),Math.max(d,e.y))}function v(){c.value=!1,window.parent.postMessage({type:"__edit_mode_dismissed"},"*")}function m(t){const n=r.value;if(!n)return;const a=n.getBoundingClientRect(),b=t.clientX,o=t.clientY,l=window.innerWidth-a.right,w=window.innerHeight-a.bottom;function f(g){e.x=Math.max(d,Math.min(window.innerWidth-n.offsetWidth-d,l-(g.clientX-b))),e.y=Math.max(d,Math.min(window.innerHeight-n.offsetHeight-d,w-(g.clientY-o)))}function h(){window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",h)}window.addEventListener("mousemove",f),window.addEventListener("mouseup",h)}let s=null;function p(t){var a;const n=(a=t==null?void 0:t.data)==null?void 0:a.type;n==="__activate_edit_mode"?(c.value=!0,setTimeout(i,0)):n==="__deactivate_edit_mode"&&(c.value=!1)}return M(()=>{window.addEventListener("message",p),window.parent.postMessage({type:"__edit_mode_available"},"*"),typeof ResizeObserver<"u"&&(s=new ResizeObserver(i),s.observe(document.documentElement))}),_(()=>{window.removeEventListener("message",p),s&&s.disconnect()}),(t,n)=>(y(),V(T,{to:"body"},[c.value?(y(),S("div",{key:0,ref_key:"panelRef",ref:r,class:"twk-panel","data-noncommentable":"",style:C({right:e.x+"px",bottom:e.y+"px"})},[k("div",{class:"twk-hd",onMousedown:m},[k("b",null,E(u.title),1),k("button",{class:"twk-x","aria-label":"Close tweaks",onMousedown:n[0]||(n[0]=L(()=>{},["stop"])),onClick:v},"✕",32)],32),k("div",$,[A(t.$slots,"default")])],4)):R("",!0)]))}},D={props:{label:String},template:'<div class="twk-sect">{{ label }}</div>'},H={props:{label:String,modelValue:[String,Number,Boolean],options:Array},emits:["update:modelValue"],setup(u,{emit:c}){const{ref:r,computed:e}=Vue,i=r(!1),v=r(null),m=e(()=>u.options.map(o=>typeof o=="object"?o:{value:o,label:o})),s=e(()=>Math.max(0,m.value.findIndex(o=>o.value===u.modelValue))),p=e(()=>m.value.length),t=e(()=>u.options.reduce((o,l)=>Math.max(o,String(typeof l=="object"?l.label:l).length),0)),n=e(()=>t.value<=({2:16,3:10}[p.value]??0));function a(o){const l=v.value.getBoundingClientRect(),w=l.width-4,f=Math.floor((o-l.left-2)/w*p.value);return m.value[Math.max(0,Math.min(p.value-1,f))].value}function b(o){i.value=!0;const l=a(o.clientX);l!==u.modelValue&&c("update:modelValue",l);function w(h){if(!v.value)return;const g=a(h.clientX);g!==u.modelValue&&c("update:modelValue",g)}function f(){i.value=!1,window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",f)}window.addEventListener("pointermove",w),window.addEventListener("pointerup",f)}return{opts:m,idx:s,n:p,fitsAsSegments:n,trackRef:v,dragging:i,onPointerDown:b}},template:`
    <div class="twk-row">
      <div class="twk-lbl"><span>{{ label }}</span></div>
      <select v-if="!fitsAsSegments" class="twk-field" :value="String(modelValue)" @change="$emit('update:modelValue', $event.target.value)">
        <option v-for="o in opts" :key="o.value" :value="o.value">{{ o.label }}</option>
      </select>
      <div v-else ref="trackRef" role="radiogroup" :class="['twk-seg', { dragging }]" @pointerdown="onPointerDown">
        <div class="twk-seg-thumb" :style="{ left: \`calc(2px + \${idx} * (100% - 4px) / \${n})\`, width: \`calc((100% - 4px) / \${n})\` }" />
        <button v-for="o in opts" :key="o.value" type="button" role="radio" :aria-checked="o.value === modelValue">{{ o.label }}</button>
      </div>
    </div>`},W={props:{label:String,modelValue:[String,Array],options:Array},emits:["update:modelValue"],setup(u){function c(i){const v=String(i).replace("#",""),m=v.length===3?v.replace(/./g,a=>a+a):v.padEnd(6,"0"),s=parseInt(m.slice(0,6),16);if(Number.isNaN(s))return!0;const p=s>>16&255,t=s>>8&255,n=s&255;return p*299+t*587+n*114>148e3}function r(i){return String(JSON.stringify(i)).toLowerCase()}function e(i){return r(i)===r(u.modelValue)}return{isLight:c,key:r,isCurrent:e}},template:`
    <div class="twk-row">
      <div class="twk-lbl"><span>{{ label }}</span></div>
      <div v-if="options && options.length" class="twk-chips" role="radiogroup">
        <button v-for="(o, i) in options" :key="i" type="button" class="twk-chip" role="radio"
                :aria-checked="isCurrent(o)" :data-on="isCurrent(o) ? '1' : '0'"
                :style="{ background: Array.isArray(o) ? o[0] : o }"
                @click="$emit('update:modelValue', o)">
          <span v-if="Array.isArray(o) && o.length > 1">
            <i v-for="(c, j) in o.slice(1, 5)" :key="j" :style="{ background: c }" />
          </span>
          <svg v-if="isCurrent(o)" viewBox="0 0 14 14" aria-hidden="true">
            <path d="M3 7.2 5.8 10 11 4.2" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" :stroke="isLight(Array.isArray(o) ? o[0] : o) ? 'rgba(0,0,0,.78)' : '#fff'" />
          </svg>
        </button>
      </div>
      <input v-else type="color" class="twk-swatch" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)" />
    </div>`};export{W as T,j as _,H as a,D as b};
