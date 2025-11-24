import{s as c}from"./index-8T-MMjvt.js";import{D as p,a as g}from"./constants-CTS4Tt_R.js";async function w({pageIndex:n=p,pageSize:i=g,q:t,sortBy:s,countIds:o,creatorIds:d}){const u=n*i,l=u+i-1;let e=c.rpc("get_user_count_details",void 0,{count:"exact"}).range(u,l);if(t&&t.trim()&&(e=e.or(`inventory_name.ilike.%${t}%,inventory_id.ilike.%${t}%,bin_name.ilike.%${t}%`)),o&&o.trim().length>0){const r=o.split(",").map(a=>a.trim()).filter(Boolean);r.length>0&&(e=e.in("count_id",r))}if(d&&d.trim().length>0){const r=d.split(",").map(a=>a.trim()).filter(Boolean);r.length>0&&(e=e.in("creator_id",r))}s&&s.length>0?s.split(",").forEach(r=>{const[a,v]=r.split(".");let _=a;a==="bin"&&(_="bin_name"),a==="count"&&(_="count_name"),a==="creator"&&(_="creator_first_name"),e=e.order(_,{ascending:v==="asc"})}):e=e.order("created_at",{ascending:!1});const{data:f,error:m,count:y}=await e;if(m)throw m;return{result:f,total:y??0}}async function E(n){const{data:i,error:t}=await c.from("count_details").select(`
    id,
    inventory_id,
    inventory_name,
    quantity,
    comments,
    is_active,
    is_damaged,
    count_status,
    created_at,
    bin:bin_id (
      id,
      name,
      is_active
    ),
    count:count_id (
      id,
      name,
      status
    ),
    unit:unit_id (
      id,
      name,
      is_active
    ),
    creator:created_by (
      id,
      email,
      employee_number,
      first_name,
      last_name
    )
  `).eq("count_id",n);if(t)throw t;return i}async function A(n){const{data:i,error:t}=await c.from("count_details").select(`
    id,
    inventory_id,
    inventory_name,
    quantity,
    comments,
    is_active,
    is_damaged,
    count_status,
    created_at,
    bin:bin_id (
      id,
      name,
      is_active
    ),
    count:count_id (
      id,
      name,
      status
    ),
    unit:unit_id (
      id,
      name,
      is_active
    )
  `).eq("id",n).single().overrideTypes();if(t)throw t;return i}async function D(n,i,t,s){const{error:o}=await c.from("count_details").insert({count_id:n,inventory_name:t,...i,count_status:s});if(o)throw o;return i}async function k(n,i){const{error:t}=await c.from("count_details").update(i).eq("id",n);if(t)throw t;return i}export{E as a,D as c,w as l,A as r,k as u};
