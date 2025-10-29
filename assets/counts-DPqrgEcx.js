import{s}from"./index-CcPo3f9H.js";import{D as p,a as g}from"./constants-CRsvxbNR.js";async function h(){const{data:e,error:t}=await s.rpc("get_user_counts");if(t)throw t;return e}async function E({pageIndex:e=p,pageSize:t=g,q:r,sortBy:a}){const n=e*t,d=n+t-1;let o=s.rpc("get_user_counts",void 0,{count:"exact"}).range(n,d);r&&r.trim()&&(o=o.or(`name.ilike.%${r}%`)),a&&a.length>0?a.split(",").forEach(l=>{const[i,m]=l.split(".");let c=i;i==="store"&&(c="store_name"),i==="count_type"&&(c="count_type_name"),o=o.order(c,{ascending:m==="asc"})}):o=o.order("created_at",{ascending:!1});const{data:f,error:u,count:_}=await o;if(u)throw u;return{result:f,total:_??0}}async function T(e){const{data:t,error:r}=await s.from("counts").select(`
    id,
    name,
    start_at,
    status,
    end_at,
    store:store_id (
      id,
      name
    ),
    count_type:count_type_id (
      id,
      name
    )
  `).eq("id",e).single().overrideTypes();if(r)throw r;return t}async function U({end_at:e,start_at:t,...r}){const{error:a}=await s.from("counts").insert({end_at:e.toUTCString(),start_at:t.toUTCString(),...r});if(a)throw a}async function A(e,{end_at:t,start_at:r,...a}){const{error:n}=await s.from("counts").update({end_at:t.toUTCString(),start_at:r.toUTCString(),...a}).eq("id",e);if(n)throw n}export{E as a,U as c,h as l,T as r,A as u};
