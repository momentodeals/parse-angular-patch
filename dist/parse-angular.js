!function(t,e){var r=t.angular;if(r!==e){var n=r.module("parse-angular",[]);n.run(["$q","$window",function(t,e){if(!r.isUndefined(e.Parse)&&r.isObject(e.Parse)){var n=e.Parse,o={Object:{prototype:["save","fetch","destroy"],"static":["saveAll","destroyAll"]},Collection:{prototype:["fetch"],"static":[]},Query:{prototype:["find","first","count","get"],"static":[]},Cloud:{prototype:[],"static":["run"]},User:{prototype:["signUp"],"static":["requestPasswordReset","logIn"]},FacebookUtils:{prototype:[],"static":["logIn","link","unlink"]}};for(var i in o){var a=i,s=o[i],c=s.prototype,u=s.static;c.forEach(function(e){var r=n[a].prototype[e];n[a].prototype[e]=function(){return r.apply(this,arguments).then(function(e){var r=t.defer();return r.resolve(e),r.promise},function(e){var r=t.defer();return r.reject(e),r.promise})}}),u.forEach(function(e){var r=n[a][e];n[a][e]=function(){return r.apply(this,arguments).then(function(e){var r=t.defer();return r.resolve(e),r.promise},function(e){var r=t.defer();return r.reject(e),r.promise})}})}}}]),r.module("parse-angular.enhance",["parse-angular"]).run(["$q","$window",function(t,e){if(!r.isUndefined(e.Parse)&&r.isObject(e.Parse)){var n=e.Parse;n.Object.getClass=function(t){return n.Object._classMap[t]};var o=n.Object.extend;n.Object.extend=function(t){var e=o.apply(this,arguments);if(n._.isObject(t)&&n._.isArray(t.attrs)){var r=t.attrs;n._.each(r,function(t){Object.defineProperty(deal.prototype,t,{get:function(){return this.get(t)},set:function(e){this.set(t,e)}})})}return e},n.Collection._classMap={};var i=n.Collection.extend;n.Collection.extend=function(t){var e=i.apply(this,arguments);return t&&t.className&&(n.Collection._classMap[t.className]=e),e},n.Collection.getClass=function(t){return n.Collection._classMap[t]},n.Collection.prototype=r.extend(n.Collection.prototype,{loadMore:function(t){if(!r.isUndefined(this.query)){var e=-1==this.query._limit?100:this.query._limit,n=this.query._skip;n+=e,this.query.skip(n);var o=this;return this.query.find().then(function(r){return t&&t.add===!1||o.add(r),r.length<e&&(o.hasMoreToLoad=!1),r})}}})}}])}}(this);