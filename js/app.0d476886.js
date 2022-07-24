(function(){"use strict";var e={920:function(e,t,i){var n=i(9963),o=i(6252),s=i(3577);const r={class:"wrapper"},a={class:"wrapper-content"},l={id:"app"},c={class:"uk-container-small uk-container"},d={class:"flex-between uk-margin-medium-top uk-flex-wrap","uk-grid":""},u=(0,o._)("div",{class:"uk-width-1-5@s"},[(0,o._)("h1",{class:"color-purple"},"Все заметки")],-1),h={class:"uk-width-2-5@s uk-width-1-1"},p={class:"uk-flex uk-flex-middle uk-flex-right@m uk-width-1-5@s"},m={class:"mg-right"},g=(0,o._)("rect",{x:"3",y:"3",width:"7",height:"7"},null,-1),w=(0,o._)("rect",{x:"14",y:"3",width:"7",height:"7"},null,-1),v=(0,o._)("rect",{x:"14",y:"14",width:"7",height:"7"},null,-1),k=(0,o._)("rect",{x:"3",y:"14",width:"7",height:"7"},null,-1),f=[g,w,v,k],_=(0,o.uE)('<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',6),y=[_];function x(e,t,i,g,w,v){const k=(0,o.up)("newNote"),_=(0,o.up)("search"),x=(0,o.up)("notes");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",a,[(0,o._)("section",l,[(0,o.Wm)(k,{onAddNewNote:v.addNewNote,note:w.note,title:w.title},null,8,["onAddNewNote","note","title"]),(0,o._)("div",c,[(0,o._)("div",d,[u,(0,o._)("div",h,[(0,o.Wm)(_,{onSearch:t[0]||(t[0]=e=>w.search=e),value:w.search,placeholder:"Найти заметку"},null,8,["value"])]),(0,o._)("div",p,[(0,o._)("a",{onClick:t[1]||(t[1]=(0,n.iM)(((...e)=>v.sortNotes&&v.sortNotes(...e)),["prevent"])),class:"mg-right",href:""},[(0,o._)("i",{class:(0,s.C_)([{active:w.isSorted},"fa-solid fa-arrow-down-short-wide sort-icon"])},null,2)]),(0,o._)("p",m,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[2]||(t[2]=(0,n.iM)(((...e)=>v.changeToGrid&&v.changeToGrid(...e)),["prevent"])),style:{cursor:"pointer"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:(0,s.C_)({active:w.isGrid})},f,2))]),(0,o._)("p",null,[((0,o.wg)(),(0,o.iD)("svg",{onClick:t[3]||(t[3]=(0,n.iM)(((...e)=>v.changeToColumn&&v.changeToColumn(...e)),["prevent"])),style:{cursor:"pointer"},xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:(0,s.C_)({active:!w.isGrid})},y,2))])])]),(0,o.Wm)(x,{notes:v.filteredNotes,onRemoveNote:v.removeNote,isGrid:w.isGrid,onEditText:v.editText},null,8,["notes","onRemoveNote","isGrid","onEditText"])])])])])}i(6699);const N={class:"uk-position-relative"},C=["onUpdate:modelValue"],b=["onClick"],S=["onClick"],G=(0,o._)("i",{class:"fa-solid fa-xmark"},null,-1),O=[G],T={class:"mg-20"},U=["onUpdate:modelValue"],E=["onClick"],D={class:"mg-20 uk-position-relative"},I=["onClick"];function j(e,t,i,r,a,l){return(0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["mg-50",{"uk-child-width-1-2@s":i.isGrid,"uk-grid":i.isGrid,"uk-child-width-1-1":!i.isGrid,"uk-text-center":!i.isGrid}]),"uk-grid":""},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.notes,((e,r)=>((0,o.wg)(),(0,o.iD)("div",{key:r},[(0,o._)("div",{class:(0,s.C_)(["custom-card note",{"note-importance-2":2==e.importance,"note-importance-3":3==e.importance}])},[(0,o._)("div",N,[(0,o.wy)((0,o._)("h2",{class:"note-title"},(0,s.zw)(e.title),513),[[n.F8,!e.isEditing]]),(0,o.wy)((0,o._)("form",{onSubmit:t[0]||(t[0]=(0,n.iM)((()=>{}),["prevent"])),class:(0,s.C_)(["width-90 uk-search uk-search-default uk-width-1-1 input-focus uk-position-relative input-focus",{"width-60":!i.isGrid}])},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t=>e.title=t,class:"uk-input"},null,8,C),[[n.nr,e.title]]),(0,o._)("button",{onClick:(0,n.iM)((e=>l.editText(r,e)),["prevent"]),class:"edit-icon uk-position-center-right","uk-icon":"check"},null,8,b)],34),[[n.F8,e.isEditing]]),(0,o._)("a",{onClick:(0,n.iM)((e=>l.removeNote(r)),["prevent"]),class:"uk-position-center-right",href:""},O,8,S)]),(0,o._)("div",T,[(0,o.wy)((0,o._)("p",null,(0,s.zw)(e.descr),513),[[n.F8,!e.isEditing]]),(0,o.wy)((0,o._)("form",{onSubmit:t[1]||(t[1]=(0,n.iM)((()=>{}),["prevent"])),class:(0,s.C_)(["width-90 uk-search uk-search-default uk-width-1-1 input-focus uk-position-relative input-focus",{"width-60":!i.isGrid}])},[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t=>e.descr=t,class:"uk-input"},null,8,U),[[n.nr,e.descr]]),(0,o._)("button",{onClick:(0,n.iM)((e=>l.editText(r,e)),["prevent"]),class:"edit-icon uk-position-center-right","uk-icon":"check"},null,8,E)],34),[[n.F8,e.isEditing]])]),(0,o._)("div",D,[(0,o._)("p",null,(0,s.zw)(e.date),1),(0,o._)("a",{class:"uk-position-center-right",onClick:(0,n.iM)((e=>l.editText(r,e)),["prevent"]),href:""},[(0,o._)("i",{class:(0,s.C_)([{active:e.isEditing},"fa-solid fa-file-pen"])},null,2)],8,I)])],2)])))),128))],2)}var L={props:{notes:{type:Array,required:!0},isGrid:{type:Boolean,required:!0}},methods:{removeNote(e){this.$emit("removeNote",e)},editText(e,t){this.$emit("editText",e,t)}}},M=i(3744);const V=(0,M.Z)(L,[["render",j]]);var J=V;const q=e=>((0,o.dD)("data-v-2d23a61a"),e=e(),(0,o.Cn)(),e),A={class:"uk-container-small uk-container"},F={class:"text-center color-purple"},$={class:"text-center"},z={class:"uk-child-width-1-2@m","uk-grid":""},B=q((()=>(0,o._)("h3",{class:"headers-margin"},"Название",-1))),W=q((()=>(0,o._)("h3",{class:"headers-margin"},"Важность",-1))),Z={class:"radio-color uk-margin uk-flex-center uk-grid-small uk-child-width-auto uk-grid custom-radio-bt"},P=(0,o.Uk)(" 1"),R=(0,o.Uk)(" 2"),H=(0,o.Uk)(" 3"),K=q((()=>(0,o._)("h3",{class:"headers-margin"},"Описание",-1))),Y={class:"mg-20"};function Q(e,t,i,r,a,l){return(0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("h2",F,(0,s.zw)(i.title),1),(0,o._)("form",$,[(0,o._)("div",z,[(0,o._)("div",null,[(0,o._)("label",null,[B,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.note.title=e),class:"custom-input"},null,512),[[n.nr,i.note.title]])])]),(0,o._)("div",null,[W,(0,o._)("div",Z,[(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{class:"uk-radio",type:"radio",name:"1",checked:"","onUpdate:modelValue":t[1]||(t[1]=e=>i.note.importance=e),value:"1"},null,512),[[n.G2,i.note.importance]]),P]),(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{class:"uk-radio",type:"radio",name:"2","onUpdate:modelValue":t[2]||(t[2]=e=>i.note.importance=e),value:"2"},null,512),[[n.G2,i.note.importance]]),R]),(0,o._)("label",null,[(0,o.wy)((0,o._)("input",{class:"uk-radio",type:"radio",name:"3","onUpdate:modelValue":t[3]||(t[3]=e=>i.note.importance=e),value:"3"},null,512),[[n.G2,i.note.importance]]),H])])])]),(0,o._)("label",null,[K,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[4]||(t[4]=e=>i.note.descr=e),class:"custom-input",name:"",id:"",cols:"92",rows:"8"},null,512),[[n.nr,i.note.descr]])]),(0,o._)("div",Y,[(0,o._)("button",{onClick:t[5]||(t[5]=(0,n.iM)(((...e)=>l.addNewNote&&l.addNewNote(...e)),["prevent"])),class:"btn btnPrimary"}," NEW NOTE ")])])])}var X={props:{note:{type:Object,required:!0},title:{type:String,required:!0}},methods:{addNewNote(){this.$emit("addNewNote",this.note)}}};const ee=(0,M.Z)(X,[["render",Q],["__scopeId","data-v-2d23a61a"]]);var te=ee;const ie=e=>((0,o.dD)("data-v-6b803520"),e=e(),(0,o.Cn)(),e),ne={class:"uk-search uk-search-default uk-width-1-1 input-focus"},oe=ie((()=>(0,o._)("span",{"uk-search-icon":""},null,-1))),se=["placeholder"];function re(e,t,i,s,r,a){return(0,o.wg)(),(0,o.iD)("form",ne,[oe,(0,o.wy)((0,o._)("input",{class:"uk-search-input",type:"search",placeholder:i.placeholder,"onUpdate:modelValue":t[0]||(t[0]=e=>r.search=e)},null,8,se),[[n.nr,r.search]])])}var ae={props:{value:{type:String,required:!0},placeholder:{type:String,default:"Поиск"}},data(){return{search:this.value}},watch:{search(e){this.$emit("search",e)}}};const le=(0,M.Z)(ae,[["render",re],["__scopeId","data-v-6b803520"]]);var ce=le,de={components:{notes:J,newNote:te,search:ce},data(){return{search:"",isGrid:!0,isSorted:!1,title:"Notes App",note:{title:"",descr:"",importance:"",isEditing:!1},notes:[]}},methods:{editText(e,t){let i=t.target;this.notes[e].isEditing=!this.notes[e].isEditing;let n=JSON.parse(localStorage.getItem("noteList"));n[e].title==this.notes[e].title&&n[e].descr==this.notes[e].descr||(i.classList.contains("active")||"A"==i.tagName||"BUTTON"==i.tagName)&&(this.notes[e].date=new Date(Date.now()).toLocaleString(),localStorage.setItem("noteList",JSON.stringify(this.notes)))},addNewNote(){let{title:e,descr:t,importance:i}=this.note;""===this.note.title?UIkit.notification({message:"Вы ввели неполные данные…",status:"danger",timeout:1500}):(this.notes.push({title:e,descr:t,importance:i,date:new Date(Date.now()).toLocaleString()}),this.note.title="",this.note.descr="",this.note.importance="1",localStorage.setItem("noteList",JSON.stringify(this.notes)),UIkit.notification({message:"Добавлена новая заметка",status:"warning",timeout:1500}))},removeNote(e){UIkit.notification({message:`Удалена запись ${this.notes[e].title}`,status:"warning",timeout:1500}),this.notes.splice(e,1),localStorage.setItem("noteList",JSON.stringify(this.notes))},changeToColumn(){this.isGrid=!1,localStorage.setItem("isGrid",!1)},changeToGrid(){this.isGrid=!0,localStorage.setItem("isGrid",!0)},sortNotes(){this.isSorted=!this.isSorted,this.isSorted&&(this.notes=this.notes.map((e=>e)).sort(((e,t)=>t.importance-e.importance))),this.isSorted||(this.notes=this.notes.map((e=>e)).sort(((e,t)=>(e.date=e.date.split("/").reverse().join(""),t.date=t.date.split("/").reverse().join(""),e.date>t.date?1:e.date<t.date?-1:0))))}},created(){const e=JSON.parse(localStorage.getItem("noteList"));e&&(this.notes=e,this.notes.forEach((e=>{e.isEditing=!1})));const t=JSON.parse(localStorage.getItem("isGrid"));this.isGrid=t||!1},computed:{filteredNotes(){return this.notes.filter((e=>e.title.toLowerCase().includes(this.search.toLowerCase())))}}};const ue=(0,M.Z)(de,[["render",x]]);var he=ue;(0,n.ri)(he).mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,s){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],s=e[d][2];for(var a=!0,l=0;l<n.length;l++)(!1&s||r>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(a=!1,s<r&&(r=s));if(a){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,o,s]}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,s,r=n[0],a=n[1],l=n[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(l)var d=l(i)}for(t&&t(n);c<r.length;c++)s=r[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self["webpackChunknotes_app"]=self["webpackChunknotes_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(920)}));n=i.O(n)})();
//# sourceMappingURL=app.0d476886.js.map