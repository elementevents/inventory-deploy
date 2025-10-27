import{s}from"./index-BMUnmdqr.js";import{D as v,a as p}from"./constants-BmjxfpbN.js";async function g({pageIndex:e=v,pageSize:i=p,q:t,sortBy:o,countIds:a}){const _=e*i,m=_+i-1;let n=s.rpc("get_user_count_details",void 0,{count:"exact"}).range(_,m);if(t&&t.trim()&&(n=n.or(`inventory_name.ilike.%${t}%,id.ilike.%${t}%`)),a&&a.trim().length>0){const c=a.split(",").map(r=>r.trim()).filter(Boolean);c.length>0&&(n=n.in("count_id",c))}o&&o.length>0?o.split(",").forEach(c=>{const[r,y]=c.split(".");let d=r;r==="bin"&&(d="bin_name"),r==="count"&&(d="count_name"),r==="creator"&&(d="creator_first_name"),n=n.order(d,{ascending:y==="asc"})}):n=n.order("created_at",{ascending:!1});const{data:l,error:u,count:f}=await n;if(u)throw u;return{result:l,total:f??0}}async function h(e){const{data:i,error:t}=await s.from("count_details").select(`
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
  `).eq("count_id",e);if(t)throw t;return i}async function E(e){const{data:i,error:t}=await s.from("count_details").select(`
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
  `).eq("id",e).single().overrideTypes();if(t)throw t;return i}async function A(e,i,t,o){const{error:a}=await s.from("count_details").insert({count_id:e,inventory_name:t,...i,count_status:o});if(a)throw a;return i}async function D(e,i){const{error:t}=await s.from("count_details").update(i).eq("id",e);if(t)throw t;return i}export{h as a,A as c,g as l,E as r,D as u};
