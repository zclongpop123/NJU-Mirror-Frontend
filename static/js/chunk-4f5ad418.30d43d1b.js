(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f5ad418"],{5022:function(t,n,e){"use strict";e("6d2f")},"6d2f":function(t,n,e){},"70ba":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("el-page-header",{staticClass:"doc-header",attrs:{content:t.name},on:{back:function(n){return t.$router.back()}}}),e("div",{staticClass:"markdown-body",domProps:{innerHTML:t._s(t.help)}})],1)},i=[],r=(e("7db0"),e("b0c0"),e("2b0e")),o=e("bc3a"),c=e.n(o),s=e("0e54"),u=e.n(s),d=e("9f13"),h=r["default"].extend({name:"Doc",data:function(){return{help:"Loading..."}},computed:{name:function(){return this.$route.params.distro},path:function(){var t,n=this;return null===(t=this.$store.state.docConfig.find((function(t){return t.name==n.name})))||void 0===t?void 0:t.path}},watch:{path:{immediate:!0,handler:function(){var t=this;if(void 0==this.path)return this.$message.warning("No such mirror"),void(this.help="Sorry, but mirror ".concat(this.name," is not included"));c.a.get(d["c"]+"documentations/"+this.path).then((function(n){return t.help=u()(n.data)}),(function(){t.$message.warning("No help available for this mirror"),t.help="No help available"}))}}}}),l=h,f=(e("5022"),e("2877")),p=Object(f["a"])(l,a,i,!1,null,"1cc9c00a",null);n["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4f5ad418.30d43d1b.js.map