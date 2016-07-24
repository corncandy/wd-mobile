this["WUI"] = this["WUI"] || {};
this["WUI"]["templates"] = this["WUI"]["templates"] || {};
this["WUI"]["templates"]["nav-bar"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<nav class=\"wui-nav-bar\">\n  <span class=\"title\">"
    + this.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n</nav>\n";
},"useData":true});;