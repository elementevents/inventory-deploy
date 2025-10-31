import{s as a}from"./index-DBk3o_Wl.js";import{D as w,a as h}from"./constants-CRsvxbNR.js";async function _(){const{data:t,error:r}=await a.from("stores").select(`
    id,
    address,
    name,
    is_active
  `).order("name",{ascending:!0});if(r)throw r;return t}async function g({pageIndex:t=w,pageSize:r=h,q:e,sortBy:i}){const o=t*r,c=o+r-1;let s=a.from("stores").select(`
    id,
    address,
    name,
    is_active
  `,{count:"exact"}).range(o,c);e&&e.trim()&&(s=s.or(`name.ilike.%${e}%,address.ilike.%${e}%,id.ilike.%${e}%`)),i&&i.length>0?i.split(",").forEach(l=>{const[u,m]=l.split(".");s=s.order(u,{ascending:m==="asc"})}):s=s.order("name",{ascending:!0});const{data:d,error:n,count:f}=await s;if(n)throw n;return{result:d,total:f??0}}async function A(t){const{data:r,error:e}=await a.from("stores").select(`
    id,
    address,
    name,
    is_active
  `).eq("id",t).returns().single();if(e)throw e;return r}async function y(t){const{error:r}=await a.from("stores").insert(t);if(r)throw r}async function D(t,r){const{error:e}=await a.from("stores").update(r).eq("id",t);if(e)throw e}export{g as a,y as c,_ as l,A as r,D as u};
