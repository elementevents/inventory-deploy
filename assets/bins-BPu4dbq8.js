import{s}from"./index-DGcHplxd.js";import{D as w,a as p}from"./constants-CTS4Tt_R.js";async function v(i){let t=s.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `);i&&(t=t.eq("store_id",i));const{data:e,error:a}=await t.order("name",{ascending:!0});if(a)throw a;return e}async function E({pageIndex:i=w,pageSize:t=p,q:e,sortBy:a}){const n=i*t,f=n+t-1;let r=s.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `,{count:"exact"}).range(n,f);e&&e.trim()&&(r=r.or(`name.ilike.%${e}%,id.ilike.%${e}%`)),a&&a.length>0?a.split(",").forEach(u=>{const[c,_]=u.split(".");let d=c;c==="store"&&(d="store(name)"),r=r.order(d,{ascending:_==="asc"})}):r=r.order("name",{ascending:!0});const{data:m,error:o,count:l}=await r;if(o)throw o;return{result:m,total:l??0}}async function y(i){const{data:t,error:e}=await s.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `).eq("id",i).single();if(e)throw e;return t}async function g(i){const{error:t}=await s.from("bins").insert(i);if(t)throw t}async function A(i,t){const{error:e}=await s.from("bins").update(t).eq("id",i);if(e)throw e}async function D(i){const{error:t}=await s.from("bins").upsert(i.map(e=>({id:e.id,is_active:e.is_active,name:e.name,store_id:e.store_id})));if(t)throw t}export{E as a,A as b,g as c,v as l,y as r,D as u};
