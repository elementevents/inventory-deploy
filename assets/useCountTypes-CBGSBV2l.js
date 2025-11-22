import{c as r,j as e,Q as s,T as n,B as o,y as i,z as u,V as c,aT as l,s as p}from"./index-DGcHplxd.js";import{u as m}from"./skeleton-XLJxwfT3.js";import{q as d}from"./constants-CTS4Tt_R.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=r("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);function P({onSelect:t,selected:a}){return e.jsxs(s,{children:[e.jsx(n,{asChild:!0,children:e.jsxs(o,{variant:"outline",className:u("w-[240px] pl-3 text-left font-normal",!a&&"text-muted-foreground"),children:[a?i(a,"PPP"):e.jsx("span",{children:"Pick a date"}),e.jsx(y,{className:"ml-auto h-4 w-4 opacity-50"})]})}),e.jsx(c,{className:"w-auto p-0",align:"start",children:e.jsx(l,{mode:"single",selected:a,onSelect:t,initialFocus:!0})})]})}async function h(){const{data:t,error:a}=await p.from("count_types").select(`
    id,
    name
  `).order("name",{ascending:!0}).returns();if(a)throw a;return t}function g(){return m({queryKey:d.countTypes.all,queryFn:h})}export{P as D,g as u};
