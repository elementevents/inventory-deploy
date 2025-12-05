import{r as u,j as y,s as c,aD as g}from"./index-D8216wL9.js";import{D as h,a as E}from"./constants-CTS4Tt_R.js";const v="https://elementeventscanada.com/product_images/productsku_";function k(n){return`${v}${n}_100.jpg`}function x({src:n,alt:o,...t}){const[e,a]=u.useState(n);u.useEffect(()=>{a(n)},[n]);const i=()=>{a("/placeholder.jpg")};return y.jsx("img",{src:e,alt:o,onError:i,...t})}async function D({pageIndex:n=h,pageSize:o=E,q:t,sortBy:e}){const a=n*o,i=a+o-1;let r=c.from("inventories_by_header").select("*",{count:"exact"}).range(a,i);t&&t.trim()&&(r=r.or(`name.ilike.%${t}%,id.ilike.%${t}%`)),e&&e.length>0?e.split(",").forEach(p=>{const[l,_]=p.split(".");let m=l;l==="count_type"&&(m="count_type(name)"),r=r.order(m,{ascending:_==="asc"})}):r=r.order("name",{ascending:!0});const{data:s,error:d,count:f}=await r;if(d)throw d;return{result:g.array().parse(s),total:f??0}}async function $(n,o){let t=c.from("inventories").select(`
   id, 
   header_code,
    category,
    quantity,
    is_active,
    name,
    count_type:count_type_id (
        id,
        name
    )
  `).eq("count_type_id",n);if(o&&o.trim()){const i=o.trim().split(/\s+/).map(r=>r.trim()).filter(r=>r.length>0);for(const r of i){const s=r.replace(/%/g,"\\%").replace(/,/g,"\\,");t=t.or(`name.ilike.%${s}%,id.ilike.%${s}%`)}}const{data:e,error:a}=await t.order("name",{ascending:!0}).limit(50);if(a)throw a;return e}async function b(n){const{error:o}=await c.from("inventories").delete().not("id","is",null);if(o)throw o;const{error:t}=await c.from("inventories").insert(n.map(e=>({category:e.category,id:e.id.toString(),header_code:e.header_code.toString(),is_active:e.is_active,name:e.name,count_type_id:e.count_type_id.toString(),quantity:e.quantity})));if(t)throw t}export{x as I,$ as a,k as b,b as i,D as l};
