import{s as a}from"./index-Dkc07M4j.js";import{D as w,a as p}from"./constants-BmjxfpbN.js";async function v(){const{data:r,error:e}=await a.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `).order("name",{ascending:!0});if(e)throw e;return r}async function E({pageIndex:r=w,pageSize:e=p,q:t,sortBy:s}){const n=r*e,f=n+e-1;let i=a.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `,{count:"exact"}).range(n,f);t&&t.trim()&&(i=i.or(`name.ilike.%${t}%,id.ilike.%${t}%`)),s&&s.length>0?s.split(",").forEach(u=>{const[c,_]=u.split(".");let d=c;c==="store"&&(d="store(name)"),i=i.order(d,{ascending:_==="asc"})}):i=i.order("name",{ascending:!0});const{data:m,error:o,count:l}=await i;if(o)throw o;return{result:m,total:l??0}}async function g(r){const{data:e,error:t}=await a.from("bins").select(`
    id,
    name,
    is_active,
    store:store_id (
      id,
      name,
      is_active
    )
  `).eq("id",r).single();if(t)throw t;return e}async function y(r){const{error:e}=await a.from("bins").insert(r);if(e)throw e}async function A(r,e){const{error:t}=await a.from("bins").update(e).eq("id",r);if(t)throw t}async function D(r){const{error:e}=await a.from("bins").upsert(r.map(t=>({id:t.id,is_active:t.is_active,name:t.name,store_id:t.store_id})));if(e)throw e}export{E as a,A as b,y as c,v as l,g as r,D as u};
