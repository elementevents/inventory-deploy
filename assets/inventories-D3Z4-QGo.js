import{r as l,j as y,s as i,aC as g}from"./index-CpGbhIT2.js";import{D as h,a as E}from"./constants-CRsvxbNR.js";const v="https://elementeventscanada.com/product_images/productsku_";function k(t){return`${v}${t}_100.jpg`}function x({src:t,alt:n,...r}){const[e,a]=l.useState(t);l.useEffect(()=>{a(t)},[t]);const s=()=>{a("/placeholder.jpg")};return y.jsx("img",{src:e,alt:n,onError:s,...r})}async function $({pageIndex:t=h,pageSize:n=E,q:r,sortBy:e}){const a=t*n,s=a+n-1;let o=i.from("inventories_by_header").select("*",{count:"exact"}).range(a,s);r&&r.trim()&&(o=o.or(`name.ilike.%${r}%,id.ilike.%${r}%`)),e&&e.length>0?e.split(",").forEach(f=>{const[d,p]=f.split(".");let u=d;d==="count_type"&&(u="count_type(name)"),o=o.order(u,{ascending:p==="asc"})}):o=o.order("name",{ascending:!0});const{data:m,error:c,count:_}=await o;if(c)throw c;return{result:g.array().parse(m),total:_??0}}async function b(t,n){const{data:r,error:e}=await i.from("inventories").select(`
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
  `).eq("count_type_id",t).or(`name.ilike.%${n}%,id.ilike.%${n}%`).order("name",{ascending:!0}).limit(50);if(e)throw e;return r}async function j(t){const{error:n}=await i.from("inventories").delete().not("id","is",null);if(n)throw n;const{error:r}=await i.from("inventories").insert(t.map(e=>({category:e.category,id:e.id.toString(),header_code:e.header_code.toString(),is_active:e.is_active,name:e.name,count_type_id:e.count_type_id.toString(),quantity:e.quantity})));if(r)throw r}export{x as I,b as a,k as b,j as i,$ as l};
