import{_ as s,o as a,c as n,a as c,t as _,b as r}from"./index-5bd2ae85.js";const i={data(){return{data:{}}},mounted(){console.log("產品環境");const e="https://randomuser.me/api/";this.$http.get(e).then(t=>{console.log(t),this.data=t.data.results}).catch(t=>{console.log(t)})}},l={class:"about"},d=r("h1",null,"This is an about page",-1);function u(e,t,p,h,o,g){return a(),n("div",l,[d,c(" "+_(o.data),1)])}const f=s(i,[["render",u]]);export{f as default};
