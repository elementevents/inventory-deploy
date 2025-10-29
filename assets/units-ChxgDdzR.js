import{s as i}from"./index-CpGbhIT2.js";import{D as w,a as _}from"./constants-CRsvxbNR.js";async function E(){const{data:t,error:a}=await i.from("units").select(`
    id,
    name,
    is_active,
    is_default
  `).order("name",{ascending:!0});if(a)throw a;return t}async function A({pageIndex:t=w,pageSize:a=_,q:e,sortBy:n}){const s=t*a,c=s+a-1;let r=i.from("units").select(`
    id,
    name,
    is_active,
    is_default
  `,{count:"exact"}).range(s,c);e&&e.trim()&&(r=r.or(`name.ilike.%${e}%,id.ilike.%${e}%`)),n&&n.length>0?n.split(",").forEach(l=>{const[d,m]=l.split(".");r=r.order(d,{ascending:m==="asc"})}):r=r.order("name",{ascending:!0});const{data:u,error:o,count:f}=await r;if(o)throw o;return{result:u,total:f??0}}async function g(t){const{data:a,error:e}=await i.from("units").select(`
    id,
    name,
    is_active,
    is_default
  `).eq("id",t).returns().single();if(e)throw e;return a}async function y(t){const{error:a}=await i.from("units").insert(t);if(a)throw a}async function D(t,a){const{error:e}=await i.from("units").update(a).eq("id",t);if(e)throw e}async function v(){const{error:t}=await i.from("units").update({is_default:!1}).not("id","is",null);if(t)throw t}export{g as a,A as b,y as c,E as l,v as r,D as u};
