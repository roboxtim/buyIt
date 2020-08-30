(function(t){function e(e){for(var s,o,c=e[0],i=e[1],u=e[2],l=0,h=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&h.push(n[o][0]),n[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"9c0c":function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("md-toolbar",{attrs:{"md-elevation":1}},[a("h3",{staticClass:"md-title",staticStyle:{flex:"1"},domProps:{innerHTML:t._s(t.pageTitle)}}),a("md-button",{staticClass:"md-icon-button md-primary",on:{click:function(e){return t.back()}}},[a("md-icon",[t._v("undo")])],1)],1)],1)},c=[],i=a("9ab4"),u=a("2f62"),d=a("8c4f"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchases"},["loading"===t.status?a("md-progress-spinner",{attrs:{"md-mode":"indeterminate"}}):a("div",{staticClass:"inner"},[a("div",{staticClass:"centered"},[a("md-speed-dial",{staticClass:"add_purchases"},[a("md-speed-dial-target",{on:{click:function(e){t.showCreateDialog=!0}}},[a("md-icon",[t._v("add")])],1)],1)],1),t.purchasesNum?a("div",{staticClass:"purchases_list"},t._l(t.purchases,(function(e,s){return a("md-list",{key:s},[a("md-list-item",[a("span",{staticClass:"md-list-item-text",domProps:{innerHTML:t._s(e.name)}}),a("md-field",[a("md-input",{on:{keyup:function(a){return t.updatePurchases(e)}},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"purchase.name"}})],1),a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){return t.$router.push("/list/"+e._id)}}},[a("md-icon",[t._v("arrow_forward")])],1),a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){return t.deletePurchases(e._id,s)}}},[a("md-icon",[t._v("delete")])],1)],1)],1)})),1):a("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"list","md-label":"Nothing here","md-description":"Create new purchases list."}})],1),a("md-dialog-prompt",{attrs:{"md-active":t.showCreateDialog,"md-title":"Purchase list name","md-input-maxlength":"30","md-input-placeholder":"List name","md-confirm-text":"Save"},on:{"update:mdActive":function(e){t.showCreateDialog=e},"update:md-active":function(e){t.showCreateDialog=e},"md-confirm":t.savePurchases},model:{value:t.purchasesList,callback:function(e){t.purchasesList=e},expression:"purchasesList"}})],1)},h=[],m=a("2ef0"),p=a.n(m),f=s["default"].extend({name:"Purchases",data:function(){return{purchasesList:"",showCreateDialog:!1}},mounted:function(){this.getPurchases()},computed:Object(i["a"])({},Object(u["b"])({status:function(t){return t.purchases.status},purchases:function(t){return t.purchases.purchases},page:function(t){return t.purchases.page},purchasesNum:function(t){return t.purchases.purchases.length}})),methods:{getPurchases:function(){this.$store.dispatch("purchases/getPurchases")},savePurchases:function(){var t=this;t.$store.dispatch("purchases/savePurchases",{name:t.purchasesList}).then((function(e){t.purchasesList=""}))},deletePurchases:function(t,e){var a=this;if(!confirm("Delete this purchases list?"))return!1;a.$store.dispatch("purchases/deletePurchases",{id:t,key:e})},updatePurchases:p.a.throttle((function(t){this.$store.dispatch("purchases/updatePurchases",{id:t._id,name:t.name})}))}}),g=f,v=a("2877"),b=Object(v["a"])(g,l,h,!1,null,null,null),_=b.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"purchase"},["loading"===t.status?a("md-progress-spinner",{attrs:{"md-mode":"indeterminate"}}):a("div",{staticClass:"inner"},[a("div",{staticClass:"centered"},[a("md-speed-dial",{staticClass:"add_purchases"},[a("md-speed-dial-target",{on:{click:function(e){t.showCreateDialog=!0}}},[a("md-icon",[t._v("add")])],1)],1)],1),t.purchasesNum?a("div",{staticClass:"purchases_list"},[a("md-table",{attrs:{"md-card":""}},t._l(t.purchases,(function(e,s){return a("md-table-row",{key:s,class:{"md-selected-single md-primary":e["completed"]},attrs:{"md-selectable":"single"},on:{click:function(a){return t.completePurchase(e)}}},[a("md-table-cell",{attrs:{"md-label":"Name"}},[t._v(t._s(e.name))]),a("md-table-cell",{staticClass:"delete",attrs:{"md-label":"Delete"}},[a("md-button",{staticClass:"md-icon-button md-list-action",on:{click:function(a){return t.deletePurchases(e._id,s)}}},[a("md-icon",[t._v("delete")])],1)],1)],1)})),1)],1):a("md-empty-state",{staticClass:"md-primary",attrs:{"md-icon":"list","md-label":"Nothing here","md-description":"Create new purchase in list."}})],1),a("md-dialog-prompt",{attrs:{"md-active":t.showCreateDialog,"md-title":"Purchase name","md-input-maxlength":"30","md-input-placeholder":"Enter purchase name","md-confirm-text":"Save"},on:{"update:mdActive":function(e){t.showCreateDialog=e},"update:md-active":function(e){t.showCreateDialog=e},"md-confirm":t.savePurchases},model:{value:t.purchasesList,callback:function(e){t.purchasesList=e},expression:"purchasesList"}})],1)},P=[],k=s["default"].extend({name:"Purchases",data:function(){return{purchasesList:"",showCreateDialog:!1}},mounted:function(){this.getPurchases()},computed:Object(i["a"])({},Object(u["b"])({status:function(t){return t.purchase.status},purchases:function(t){return t.purchase.purchases},page:function(t){return t.purchase.page},purchasesNum:function(t){return t.purchase.purchases.length}})),methods:{listID:function(){return this.$route.params.list_id},getPurchases:function(){var t=this;this.$store.dispatch("purchase/getPurchase",{list_id:t.listID()})},savePurchases:function(){var t=this;t.$store.dispatch("purchase/savePurchase",{name:t.purchasesList,list_id:t.listID()}).then((function(e){t.purchasesList=""}))},deletePurchases:function(t,e){var a=this;if(!confirm("Delete this purchases list?"))return!1;a.$store.dispatch("purchase/deletePurchase",{id:t,key:e,list_id:a.listID()})},updatePurchases:p.a.throttle((function(t){var e=this;this.$store.dispatch("purchase/updatePurchase",{id:t._id,name:t.name,list_id:e.listID()})})),completePurchase:function(t){var e=this,a=!t["completed"];this.$store.dispatch("purchase/purchaseStatus",{id:t._id,name:t.name,list_id:e.listID(),completed:a}),e.$set(t,"completed",a)}}}),y=k,C=Object(v["a"])(y,w,P,!1,null,null,null),x=C.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"container",class:[t.status]},[a("div",{staticClass:"md-layout md-gutter"},[a("div",{staticClass:"md-layout-item"},[a("md-field",[a("label",[t._v("Email")]),a("md-input",{attrs:{name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t.isRegistering?a("md-field",[a("label",[t._v("Name")]),a("md-input",{attrs:{name:"name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1):t._e(),a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password",name:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t.isRegistering?a("md-field",[a("label",[t._v("Repeat Password")]),a("md-input",{attrs:{type:"password",name:"password"},model:{value:t.passwordRepeat,callback:function(e){t.passwordRepeat=e},expression:"passwordRepeat"}})],1):t._e(),t.isRegistering?a("md-card-actions",{attrs:{"md-alignment":"space-between"}},[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.register}},[t._v("Register")]),a("md-button",{staticClass:"md-primary",on:{click:t.loginAccount}},[t._v("I have an account")])],1):a("md-card-actions",{attrs:{"md-alignment":"space-between"}},[a("md-button",{staticClass:"md-raised md-primary",on:{click:t.login}},[t._v("Login")]),a("md-button",{staticClass:"md-primary",on:{click:t.createAccount}},[t._v("Create account")])],1)],1)]),a("md-snackbar",{attrs:{"md-position":"center","md-duration":4e3,"md-active":t.showSnackbar,"md-persistent":""},on:{"update:mdActive":function(e){t.showSnackbar=e},"update:md-active":function(e){t.showSnackbar=e}}},[a("span",{domProps:{innerHTML:t._s(t.message)}})])],1)])},O=[],S=a("bc3a"),T=a.n(S);const L={url:"http://5.53.125.129/",token:localStorage.getItem("token")||""};var j=L,D={namespaced:!0,state:{message:"",status:"",token:j.token,user:{}},getters:{},mutations:{clear_state:function(t){t.message=t.status=""},auth_request:function(t){t.status="loading",t.message="Loading"},auth_success:function(t,e){localStorage.setItem("token",e),t.status="success",t.message="Successfully logged in, redirecting",t.token=e},auth_error:function(t,e){t.status="error",t.message=e.data.message,401===e.status&&(localStorage.removeItem("token"),location.reload())},change_message:function(t,e){t.message=e}},actions:{login:function(t,e){var a=t.commit;return a("clear_state"),new Promise((function(t,s){a("auth_request"),T()({url:j.url+"login",data:e,method:"POST"}).then((function(e){var s=e.data.data;T.a.defaults.headers.common["Authorization"]="Bearer "+s,a("auth_success",s),t(e)})).catch((function(t){a("auth_error",t.response),s(t)}))}))},registration:function(t,e){var a=t.commit;return a("clear_state"),new Promise((function(t,s){a("auth_request"),T()({url:j.url+"registration",data:e,method:"POST"}).then((function(e){var s=e.data.data;T.a.defaults.headers.common["Authorization"]="Bearer "+s,a("auth_success",s),t(e)})).catch((function(t){a("auth_error",t.response),s(t)}))}))}}},E=D,R={namespaced:!0,state:{status:"",purchases:[],page:1},getters:{},mutations:{loading:function(t){t.status="loading"},add_purchases:function(t,e){t.status="success",t.purchases.push(e)},get_purchases:function(t,e){t.status="success",t.purchases=e},delete_purchases:function(t,e){t.status="success",t.purchases.splice(e.key,1)}},actions:{getPurchases:function(t,e){var a=t.commit;return a("loading"),new Promise((function(t,s){T()({url:j.url+"purchases",data:e,method:"GET"}).then((function(e){a("get_purchases",e.data.data),t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},savePurchases:function(t,e){var a=t.commit;return a("loading"),new Promise((function(t,s){T()({url:j.url+"purchases",data:e,method:"POST"}).then((function(e){a("add_purchases",e.data.data),t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},deletePurchases:function(t,e){var a=t.commit;return a("loading"),new Promise((function(t,s){T()({url:j.url+"purchases",data:e,method:"DELETE"}).then((function(s){a("delete_purchases",e),t(s)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},updatePurchases:function(t,e){var a=t.commit;return new Promise((function(t,s){T()({url:j.url+"purchases",data:e,method:"PUT"}).then((function(e){t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))}}},A=R,I={namespaced:!0,state:{status:"",purchases:[],page:1},getters:{},mutations:{loading:function(t){t.status="loading"},add_purchase:function(t,e){t.status="success",t.purchases.push(e)},get_purchase:function(t,e){t.status="success",t.purchases=e},delete_purchase:function(t,e){t.status="success",t.purchases.splice(e.key,1)}},actions:{getPurchase:function(t,e){var a=t.commit;return a("loading"),console.log(e),new Promise((function(t,s){T()({url:j.url+"purchase",params:e,method:"GET"}).then((function(e){a("get_purchase",e.data.data),t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},savePurchase:function(t,e){var a=t.commit;return a("loading"),new Promise((function(t,s){T()({url:j.url+"purchase",data:e,method:"POST"}).then((function(e){a("add_purchase",e.data.data),t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},deletePurchase:function(t,e){var a=t.commit;return a("loading"),new Promise((function(t,s){T()({url:j.url+"purchase",data:e,method:"DELETE"}).then((function(s){a("delete_purchase",e),t(s)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},updatePurchase:function(t,e){var a=t.commit;return new Promise((function(t,s){T()({url:j.url+"purchase",data:e,method:"PUT"}).then((function(e){t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))},purchaseStatus:function(t,e){var a=t.commit;return new Promise((function(t,s){T()({url:j.url+"purchase_status",data:e,method:"PUT"}).then((function(e){t(e)})).catch((function(t){a("auth/auth_error",t.response,{root:!0}),s(t)}))}))}}},N=I;s["default"].use(u["a"]);var M=new u["a"].Store({modules:{auth:E,purchases:A,purchase:N},state:{pageTitle:"Purchases",isAppLoading:!1},mutations:{changeTitle:function(t,e){t.pageTitle=e}},actions:{}}),H=s["default"].extend({name:"Login",data:function(){return{isRegistering:!1,showSnackbar:!1,name:"",email:"",password:"",passwordRepeat:""}},mounted:function(){},computed:Object(i["a"])({},Object(u["b"])({status:function(t){return t.auth.status},message:function(t){return t.auth.message}})),methods:{register:function(){var t=this,e=this.email,a=this.name,s=this.password,n=this.passwordRepeat;if(s!==n)return M.commit("auth/change_message","Passwords do not match"),this.showShack(),!1;this.$store.dispatch("auth/registration",{email:e,name:a,password:s}).then((function(){t.$router.push("/")})).catch((function(t){return console.log(t)})),this.showShack()},login:function(){var t=this,e=this.email,a=this.password;this.$store.dispatch("auth/login",{email:e,password:a}).then((function(){t.$router.push("/")})).catch((function(t){return console.log(t)})),this.showShack()},createAccount:function(){this.isRegistering=!0,M.commit("changeTitle","Register")},loginAccount:function(){this.isRegistering=!1,M.commit("changeTitle","Login")},showShack:function(){this.$set(this,"showSnackbar",!0)}}}),q=H,z=Object(v["a"])(q,$,O,!1,null,null,null),B=z.exports;s["default"].use(d["a"]);var F=[{path:"/",name:"Purchases",component:_},{path:"/list/:list_id",meta:{path:"list/"},name:"List purchases",component:x},{path:"/login",name:"Login",component:B}],U=new d["a"]({routes:F});U.beforeEach((function(t,e,a){localStorage.getItem("token")||"/login"===t.path?a():a({path:"/login"})})),U.afterEach((function(t){var e=t["matched"].length?t["matched"][0]:[];e&&M.commit("changeTitle",e.name)}));var G=U,J=s["default"].extend({name:"Header",computed:Object(i["a"])({},Object(u["b"])({pageTitle:function(t){return t.pageTitle}})),methods:{back:function(){G.go(-1)}}}),K=J,Q=Object(v["a"])(K,o,c,!1,null,null,null),V=Q.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("md-bottom-bar",{attrs:{"md-type":"shift"}},[a("md-bottom-bar-item",{attrs:{id:"bottom-bar-item-home","md-icon":"list"},on:{click:function(e){return t.goToRoute("/")}}}),a("md-bottom-bar-item",{attrs:{id:"bottom-bar-item-home","md-icon":"account_box"},on:{click:function(e){return t.goToRoute("/login")}}})],1)],1)},X=[],Y=s["default"].extend({name:"Footer",computed:{currentPath:function(){return this.$route.path}},mounted:function(){},methods:{goToRoute:function(t){t!==this.$route.path&&this.$router.push(t)}}}),Z=Y,tt=Object(v["a"])(Z,W,X,!1,null,null,null),et=tt.exports,at={name:"App",components:{Header:V,Footer:et}},st=at,nt=(a("5c0b"),Object(v["a"])(st,n,r,!1,null,null,null)),rt=nt.exports,ot=a("43f9"),ct=a.n(ot);a("51de"),a("e094");s["default"].use(ct.a),s["default"].prototype.$http=T.a,j.token&&(s["default"].prototype.$http.defaults.headers.common["Authorization"]="Bearer "+j.token),s["default"].config.productionTip=!1,new s["default"]({router:G,store:M,render:function(t){return t(rt)}}).$mount("#app")}});
//# sourceMappingURL=app.b4ca9695.js.map