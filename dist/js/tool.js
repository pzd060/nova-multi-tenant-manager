!function(t){var e={};function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(11)},function(t,e,n){Nova.booting(function(t,e,a){e.addRoutes([{name:"tenants",path:"/tenants",component:n(2)}])})},function(t,e,n){var a=n(8)(n(9),n(10),!1,function(t){n(3)},null,null);t.exports=a.exports},function(t,e,n){var a=n(4);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(6)("17cb73bc",a,!0,{})},function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var s=(i=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),r=a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"});return[n].concat(r).concat([s]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var a={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(a[r]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&a[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(7),r={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t){for(var e=0;e<t.length;e++){var n=t[e],a=r[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(h(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var i=[];for(s=0;s<n.parts.length;s++)i.push(h(n.parts[s]));r[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function h(t){var e,n,a=document.querySelector("style["+p+'~="'+t.id+'"]');if(a){if(c)return d;a.parentNode.removeChild(a)}if(f){var s=l++;a=o||(o=v()),e=g.bind(null,a,s,!1),n=g.bind(null,a,s,!0)}else a=v(),e=function(t,e){var n=e.css,a=e.media,s=e.sourceMap;a&&t.setAttribute("media",a);u.ssrId&&t.setAttribute(p,e.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,a),n=function(){a.parentNode.removeChild(a)};return e(t),function(a){if(a){if(a.css===t.css&&a.media===t.media&&a.sourceMap===t.sourceMap)return;e(t=a)}else n()}}t.exports=function(t,e,n,a){c=n,u=a||{};var i=s(t,e);return m(i),function(e){for(var n=[],a=0;a<i.length;a++){var o=i[a];(l=r[o.id]).refs--,n.push(l)}e?m(i=s(t,e)):i=[];for(a=0;a<n.length;a++){var l;if(0===(l=n[a]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete r[l.id]}}}};var x,_=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function g(t,e,n,a){var s=n?"":a.css;if(t.styleSheet)t.styleSheet.cssText=_(e,s);else{var r=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}},function(t,e){t.exports=function(t,e){for(var n=[],a={},s=0;s<e.length;s++){var r=e[s],i=r[0],o={id:t+":"+s,css:r[1],media:r[2],sourceMap:r[3]};a[i]?a[i].parts.push(o):n.push(a[i]={id:i,parts:[o]})}return n}},function(t,e){t.exports=function(t,e,n,a,s,r){var i,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(i=t,o=t.default);var c,d="function"==typeof o?o.options:o;if(e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId=s),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},d._ssrRegister=c):a&&(c=a),c){var u=d.functional,p=u?d.render:d.beforeCreate;u?(d._injectStyles=c,d.render=function(t,e){return c.call(e),p(t,e)}):d.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:o,options:d}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{adminEmail:"",adminName:"",domain:"",name:"",tenants:[]}},created:function(){this.getTenants()},methods:{createTenant:function(){var t=this;axios.post("/nova-vendor/tenants",{adminEmail:this.adminEmail,adminName:this.adminName,domain:this.domain,name:this.name}).then(function(e){t.$toasted.show("Tenant successfully created.",{type:"success"}),t.tenants=Object.assign([],t.tenants,e.data),window.location.href="//"+e.data.domain+"/dashboard/tenants"}).catch(function(e){console.error(e,e.response),t.$toasted.show("Error "+e.response.status+": "+e.response.statusText,{type:"error"})})},deleteTenant:function(t){var e=this;axios.delete("/nova-vendor/tenants/"+t).then(function(n){if(e.$toasted.show("Tenant successfully deleted.",{type:"success"}),204==n.status){var a=_.reject(e.tenants,function(e){return e.id==t});e.tenants=Object.assign([],a)}}).catch(function(t){console.error(t,t.response),e.$toasted.show("Error "+t.response.status+": "+t.response.statusText,{type:"error"})})},getTenants:function(){var t=this;axios.get("/nova-vendor/tenants").then(function(e){t.tenants=Object.assign([],e.data)}).catch(function(e){console.error(e,e.response),t.$toasted.show("Error "+e.response.status+": "+e.response.statusText,{type:"error"})})},isCurrentTenant:function(t){return t==window.location.hostname},isNotCurrentTenant:function(t){return!this.isCurrentTenant(t)}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Tenant Management")]),t._v(" "),n("div",{staticClass:"relative"},[n("h2",{staticClass:"mb-3 text-90 font-normal text-2xl"},[t._v("Add Tenant")]),t._v(" "),n("div",{staticClass:"card overflow-hidden"},[n("div",[n("div",{staticClass:"flex border-b border-40",attrs:{"via-resource":"","via-resource-id":"","via-relationship":""}},[t._m(0),t._v(" "),n("div",{staticClass:"py-6 px-8 w-1/2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{id:"name",type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("div",{staticClass:"help-text help-text mt-2"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.domain,expression:"domain"}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{id:"domain",type:"text",placeholder:"Domain"},domProps:{value:t.domain},on:{input:function(e){e.target.composing||(t.domain=e.target.value)}}}),t._v(" "),n("div",{staticClass:"help-text help-text mt-2"})])])]),t._v(" "),n("div",[n("div",{staticClass:"flex border-b border-40"},[t._m(1),t._v(" "),n("div",{staticClass:"py-6 px-8 w-1/2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.adminEmail,expression:"adminEmail"}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{id:"adminEmail",type:"text",placeholder:"Email"},domProps:{value:t.adminEmail},on:{input:function(e){e.target.composing||(t.adminEmail=e.target.value)}}}),t._v(" "),n("div",{staticClass:"help-text help-text mt-2"}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.adminName,expression:"adminName"}],staticClass:"w-full form-control form-input form-input-bordered",attrs:{id:"adminName",type:"text",placeholder:"First & Last Name"},domProps:{value:t.adminName},on:{input:function(e){e.target.composing||(t.adminName=e.target.value)}}}),t._v(" "),n("div",{staticClass:"help-text help-text mt-2"})])])]),t._v(" "),n("div",{staticClass:"bg-30 flex px-8 py-4 pb-1"},[n("div",{staticClass:"w-1/5 py-6 px-8"}),t._v(" "),n("button",{staticClass:"ml-4 btn btn-default btn-primary",on:{click:t.createTenant}},[t._v("\n                        Create Tenant\n                    ")])])])]),t._v(" "),n("div",{staticClass:"card relative mt-8"},[n("div",{staticClass:"overflow-hidden overflow-x-auto relative"},[n("table",{staticClass:"table w-full",attrs:{cellpadding:"0",cellspacing:"0","data-testid":"resource-table"}},[t._m(2),t._v(" "),n("tbody",t._l(t.tenants,function(e){return n("tr",{key:e.id},[n("td",[n("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                                "+t._s(e.name)+"\n                            ")])]),t._v(" "),n("td",[n("span",{staticClass:"whitespace-no-wrap text-left"},[t._v("\n                                "+t._s(e.domain)+"\n                            ")])]),t._v(" "),n("td",{staticClass:"td-fit text-right pr-6"},[n("a",{staticClass:"cursor-pointer text-70 hover:text-primary mr-3",attrs:{href:"//"+e.domain+"/dashboard/site-settings",title:"Site Settings"}},[n("i",{staticClass:"fas fa-tools"})]),t._v(" "),t.isNotCurrentTenant(e.domain)?n("span",[n("a",{staticClass:"cursor-pointer text-70 hover:text-primary mr-3",attrs:{href:"//"+e.domain+"/dashboard/tenants",title:"Switch"}},[n("i",{staticClass:"fal fa-toggle-off"})])]):t._e(),t._v(" "),t.isCurrentTenant(e.domain)?n("span",{staticClass:"mr-3"},[n("i",{staticClass:"far fa-toggle-on"})]):t._e(),t._v(" "),n("button",{staticClass:"appearance-none cursor-pointer text-70 hover:text-primary mr-3",attrs:{title:"Delete"},on:{click:function(n){return t.deleteTenant(e.id)}}},[n("i",{staticClass:"far fa-trash-alt"})])])])}),0)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/5 py-6 px-8"},[e("label",{staticClass:"inline-block text-80 pt-2 leading-tight",attrs:{for:"name"}},[this._v("\n                                Tenant\n                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-1/5 py-6 px-8"},[e("label",{staticClass:"inline-block text-80 pt-2 leading-tight",attrs:{for:"adminEmail"}},[this._v("\n                                Admin\n                            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticClass:"text-left"},[this._v("\n                            Name\n                        ")]),this._v(" "),e("th",{staticClass:"text-left"},[this._v("\n                            URL\n                        ")]),this._v(" "),e("th")])])}]}},function(t,e){}]);