webpackJsonp([7],{Ad1w:function(e,t){},HP1N:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"app"},a,!1,function(e){n("Ad1w")},null,null).exports,s=n("/ocq"),i=n("xJsL"),u=n("lO7g");r.default.use(s.a);var l=new s.a({routes:[{path:"/",name:"Login",component:i.default,hidden:!0},{path:"/home",name:"主页",component:u.default,hidden:!0,meta:{requireAuth:!0}}]}),c=n("zL8q"),d=n.n(c),m=(n("tvR6"),n("mvHQ")),p=n.n(m),f=n("NYxO");r.default.use(f.a);var h=new f.a.Store({state:{user:{name:null==window.localStorage.getItem("user")?"未登录":JSON.parse(window.localStorage.getItem("user")).name,userface:null==window.localStorage.getItem("user")?"":JSON.parse(window.localStorage.getItem("user")).userface},routes:[]},mutations:{initMenu:function(e,t){e.routes=t},login:function(e,t){e.user=t,window.localStorage.setItem("user",p()(t))},logout:function(e){window.localStorage.removeItem("user"),e.routes=[]}},actions:{}}),g=n("VsUZ"),v=n("oAV5");r.default.filter("formatDate",function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return r<10&&(r="0"+r),a<10&&(a="0"+a),n+"-"+r+"-"+a}),r.default.filter("formatDateTime",function(e){var t=new Date(e),n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate(),o=t.getHours(),s=t.getMinutes();return r<10&&(r="0"+r),a<10&&(a="0"+a),n+"-"+r+"-"+a+" "+o+":"+s}),r.default.config.productionTip=!1,r.default.use(d.a),r.default.prototype.getRequest=g.b,r.default.prototype.postRequest=g.c,r.default.prototype.deleteRequest=g.a,r.default.prototype.putRequest=g.d,r.default.prototype.isNotNullORBlank=v.b,l.beforeEach(function(e,t,n){if("Login"!=e.name){"未登录"==h.state.user.name?e.meta.requireAuth||null==e.name?n({path:"/",query:{redirect:e.path}}):n():(Object(v.a)(l,h),n())}else n()}),new r.default({el:"#app",router:l,store:h,template:"<App/>",components:{App:o}})},VsUZ:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return d});var r=n("//Fk"),a=n.n(r),o=n("mtWM"),s=n.n(o),i=n("zL8q");n.n(i);s.a.interceptors.request.use(function(e){return e},function(e){return i.Message.error({message:"请求超时!"}),a.a.resolve(e)}),s.a.interceptors.response.use(function(e){if(!e.status||200!=e.status||"error"!=e.data.status)return e;i.Message.error({message:e.data.msg})},function(e){return 504==e.response.status||404==e.response.status?i.Message.error({message:"服务器被吃了⊙﹏⊙∥"}):403==e.response.status?i.Message.error({message:"权限不足,请联系管理员!"}):i.Message.error({message:"未知错误!"}),a.a.resolve(e)});var u=function(e,t){return s()({method:"post",url:""+e,data:t,transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},l=function(e,t){return s()({method:"put",url:""+e,data:t,transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{"Content-Type":"application/x-www-form-urlencoded"}})},c=function(e){return s()({method:"delete",url:""+e})},d=function(e){return s()({method:"get",url:""+e})}},lO7g:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-container",{staticClass:"home-container"},[n("el-header",{staticClass:"home-header"},[n("span",{staticClass:"home_title"},[e._v("微人事")]),e._v(" "),n("div",{staticStyle:{display:"flex","align-items":"center","margin-right":"7px"}},[n("el-dropdown",{on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link home_userinfo",staticStyle:{display:"flex","align-items":"center"}},[e._v("\n  "+e._s(e.user.name)+"\n  "),n("i",[""!=e.user.userface?n("img",{staticStyle:{width:"40px",height:"40px","margin-right":"5px","margin-left":"5px","border-radius":"40px"},attrs:{src:e.user.userface}}):e._e()])]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[e._v("个人中心")]),e._v(" "),n("el-dropdown-item",[e._v("设置")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"logout",divided:""}},[e._v("注销")])],1)],1)],1)]),e._v(" "),n("el-container",[n("el-aside",{staticClass:"home-aside",attrs:{width:"180px"}},[n("div",{staticStyle:{display:"flex","justify-content":"flex-start",width:"180px","text-align":"left"}},[n("el-menu",{staticStyle:{background:"#ececec",width:"180px"},attrs:{"unique-opened":"",router:""}},[e._l(this.routes,function(t,r){return t.hidden?e._e():[n("el-submenu",{key:r,attrs:{index:r+""}},[n("template",{slot:"title"},[n("i",{class:t.iconCls,staticStyle:{color:"#20a0ff",width:"14px"}}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.children,function(t){return n("el-menu-item",{key:t.path,staticStyle:{"padding-left":"30px","padding-right":"0px","margin-left":"0px",width:"170px","text-align":"left"},attrs:{width:"180px",index:t.path}},[e._v(e._s(t.name)+"\n                ")])})],2)]})],2)],1)]),e._v(" "),n("el-container",[n("el-main",[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),e._v(" "),n("el-breadcrumb-item",{domProps:{textContent:e._s(this.$router.currentRoute.name)}})],1),e._v(" "),n("keep-alive",[this.$route.meta.keepAlive?n("router-view"):e._e()],1),e._v(" "),this.$route.meta.keepAlive?e._e():n("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=n("VU/8")({mounted:function(){},methods:{devMsg:function(){var e=this;this.$alert("为了确保所有的小伙伴都能看到完整的数据演示，数据库只开放了查询权限和部分字段的更新权限，其他权限都不具备，完整权限的演示需要大家在自己本地部署后，换一个正常的数据库用户后即可查看，这点请大家悉知!","友情提示",{confirmButtonText:"确定",callback:function(t){e.$notify({title:"重要重要!",type:"warning",message:"小伙伴们需要注意的是，目前只有权限管理模块完工了，因此这个项目中你无法看到所有的功能，除了权限管理相关的模块。权限管理相关的模块主要有两个，分别是 [系统管理->基础信息设置->权限组] 可以管理角色和资源的关系， [系统管理->操作员管理] 可以管理用户和角色的关系。",duration:0})}})},handleCommand:function(e){var t=this;"logout"==e&&this.$confirm("注销登录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.getRequest("/logout"),t.$store.commit("logout"),t.$router.replace({path:"/"})}).catch(function(){t.$message({type:"info",message:"取消"})})}},data:function(){return{}},computed:{user:function(){return this.$store.state.user},routes:function(){return this.$store.state.routes}}},r,!1,function(e){n("HP1N")},null,null);t.default=a.exports},oAV5:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return s});var r=n("VsUZ"),a=n("zL8q"),o=(n.n(a),function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0;r<t.length;r++){var o=t[r];if(null==o||""==o||void 0==o)return a.Message.warning({message:"数据不能为空!"}),!1}return!0}),s=function(e,t){t.state.routes.length>0||Object(r.b)("/config/sysmenu").then(function(n){if(n&&200==n.status){var r=i(n.data);e.addRoutes(r),t.commit("initMenu",r)}})},i=function e(t){var r=[];return t.forEach(function(t){var a=t.path,o=t.component,s=t.name,i=t.meta,u=t.iconCls,l=t.children;l&&l instanceof Array&&(l=e(l));var c={path:a,component:function(e){o.startsWith("Home")?n.e(0).then(function(){var t=[n("2eoi")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Emp")?n.e(5).then(function(){var t=[n("8cST")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Per")?n.e(3).then(function(){var t=[n("sALK")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Sal")?n.e(2).then(function(){var t=[n("9Acn")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Sta")?n.e(4).then(function(){var t=[n("nCU1")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe):o.startsWith("Sys")&&n.e(1).then(function(){var t=[n("LJAE")("./"+o+".vue")];e.apply(null,t)}.bind(this)).catch(n.oe)},name:s,iconCls:u,meta:i,children:l};r.push(c)}),r}},oWFQ:function(e,t){},tvR6:function(e,t){},xJsL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0,loginForm:{username:"admin",password:"123"},loading:!1}},methods:{submitClick:function(){var e=this;this.loading=!0,this.postRequest("/login",{username:this.loginForm.username,password:this.loginForm.password}).then(function(t){if(e.loading=!1,t&&200==t.status){var n=t.data;e.$store.commit("login",n.msg);var r=e.$route.query.redirect;e.$router.replace({path:"/"==r||void 0==r?"/home":r})}})}}},a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"login-container",attrs:{rules:e.rules,"label-position":"left","label-width":"0px"}},[n("h3",{staticClass:"login_title"},[e._v("系统登录")]),e._v(" "),n("el-form-item",{attrs:{prop:"account"}},[n("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),n("el-form-item",{attrs:{prop:"checkPass"}},[n("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),n("el-checkbox",{staticClass:"login_remember",attrs:{"label-position":"left"},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),n("el-form-item",{staticStyle:{width:"100%"}},[n("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){t.preventDefault(),e.submitClick(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("oWFQ")},null,null);t.default=o.exports}},["NHnr"]);
//# sourceMappingURL=app.dfa620b6af45f973da76.js.map