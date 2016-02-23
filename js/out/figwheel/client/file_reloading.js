// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16819__auto__){
return or__16819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23447_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23447_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23452 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23453 = null;
var count__23454 = (0);
var i__23455 = (0);
while(true){
if((i__23455 < count__23454)){
var n = cljs.core._nth.call(null,chunk__23453,i__23455);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23456 = seq__23452;
var G__23457 = chunk__23453;
var G__23458 = count__23454;
var G__23459 = (i__23455 + (1));
seq__23452 = G__23456;
chunk__23453 = G__23457;
count__23454 = G__23458;
i__23455 = G__23459;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23452);
if(temp__4425__auto__){
var seq__23452__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23452__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__23452__$1);
var G__23460 = cljs.core.chunk_rest.call(null,seq__23452__$1);
var G__23461 = c__17622__auto__;
var G__23462 = cljs.core.count.call(null,c__17622__auto__);
var G__23463 = (0);
seq__23452 = G__23460;
chunk__23453 = G__23461;
count__23454 = G__23462;
i__23455 = G__23463;
continue;
} else {
var n = cljs.core.first.call(null,seq__23452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23464 = cljs.core.next.call(null,seq__23452__$1);
var G__23465 = null;
var G__23466 = (0);
var G__23467 = (0);
seq__23452 = G__23464;
chunk__23453 = G__23465;
count__23454 = G__23466;
i__23455 = G__23467;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23506_23513 = cljs.core.seq.call(null,deps);
var chunk__23507_23514 = null;
var count__23508_23515 = (0);
var i__23509_23516 = (0);
while(true){
if((i__23509_23516 < count__23508_23515)){
var dep_23517 = cljs.core._nth.call(null,chunk__23507_23514,i__23509_23516);
topo_sort_helper_STAR_.call(null,dep_23517,(depth + (1)),state);

var G__23518 = seq__23506_23513;
var G__23519 = chunk__23507_23514;
var G__23520 = count__23508_23515;
var G__23521 = (i__23509_23516 + (1));
seq__23506_23513 = G__23518;
chunk__23507_23514 = G__23519;
count__23508_23515 = G__23520;
i__23509_23516 = G__23521;
continue;
} else {
var temp__4425__auto___23522 = cljs.core.seq.call(null,seq__23506_23513);
if(temp__4425__auto___23522){
var seq__23506_23523__$1 = temp__4425__auto___23522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23506_23523__$1)){
var c__17622__auto___23524 = cljs.core.chunk_first.call(null,seq__23506_23523__$1);
var G__23525 = cljs.core.chunk_rest.call(null,seq__23506_23523__$1);
var G__23526 = c__17622__auto___23524;
var G__23527 = cljs.core.count.call(null,c__17622__auto___23524);
var G__23528 = (0);
seq__23506_23513 = G__23525;
chunk__23507_23514 = G__23526;
count__23508_23515 = G__23527;
i__23509_23516 = G__23528;
continue;
} else {
var dep_23529 = cljs.core.first.call(null,seq__23506_23523__$1);
topo_sort_helper_STAR_.call(null,dep_23529,(depth + (1)),state);

var G__23530 = cljs.core.next.call(null,seq__23506_23523__$1);
var G__23531 = null;
var G__23532 = (0);
var G__23533 = (0);
seq__23506_23513 = G__23530;
chunk__23507_23514 = G__23531;
count__23508_23515 = G__23532;
i__23509_23516 = G__23533;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23510){
var vec__23512 = p__23510;
var x = cljs.core.nth.call(null,vec__23512,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23512,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23512,x,xs,get_deps__$1){
return (function (p1__23468_SHARP_){
return clojure.set.difference.call(null,p1__23468_SHARP_,x);
});})(vec__23512,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23546 = cljs.core.seq.call(null,provides);
var chunk__23547 = null;
var count__23548 = (0);
var i__23549 = (0);
while(true){
if((i__23549 < count__23548)){
var prov = cljs.core._nth.call(null,chunk__23547,i__23549);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23550_23558 = cljs.core.seq.call(null,requires);
var chunk__23551_23559 = null;
var count__23552_23560 = (0);
var i__23553_23561 = (0);
while(true){
if((i__23553_23561 < count__23552_23560)){
var req_23562 = cljs.core._nth.call(null,chunk__23551_23559,i__23553_23561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23562,prov);

var G__23563 = seq__23550_23558;
var G__23564 = chunk__23551_23559;
var G__23565 = count__23552_23560;
var G__23566 = (i__23553_23561 + (1));
seq__23550_23558 = G__23563;
chunk__23551_23559 = G__23564;
count__23552_23560 = G__23565;
i__23553_23561 = G__23566;
continue;
} else {
var temp__4425__auto___23567 = cljs.core.seq.call(null,seq__23550_23558);
if(temp__4425__auto___23567){
var seq__23550_23568__$1 = temp__4425__auto___23567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23550_23568__$1)){
var c__17622__auto___23569 = cljs.core.chunk_first.call(null,seq__23550_23568__$1);
var G__23570 = cljs.core.chunk_rest.call(null,seq__23550_23568__$1);
var G__23571 = c__17622__auto___23569;
var G__23572 = cljs.core.count.call(null,c__17622__auto___23569);
var G__23573 = (0);
seq__23550_23558 = G__23570;
chunk__23551_23559 = G__23571;
count__23552_23560 = G__23572;
i__23553_23561 = G__23573;
continue;
} else {
var req_23574 = cljs.core.first.call(null,seq__23550_23568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23574,prov);

var G__23575 = cljs.core.next.call(null,seq__23550_23568__$1);
var G__23576 = null;
var G__23577 = (0);
var G__23578 = (0);
seq__23550_23558 = G__23575;
chunk__23551_23559 = G__23576;
count__23552_23560 = G__23577;
i__23553_23561 = G__23578;
continue;
}
} else {
}
}
break;
}

var G__23579 = seq__23546;
var G__23580 = chunk__23547;
var G__23581 = count__23548;
var G__23582 = (i__23549 + (1));
seq__23546 = G__23579;
chunk__23547 = G__23580;
count__23548 = G__23581;
i__23549 = G__23582;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23546);
if(temp__4425__auto__){
var seq__23546__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23546__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__23546__$1);
var G__23583 = cljs.core.chunk_rest.call(null,seq__23546__$1);
var G__23584 = c__17622__auto__;
var G__23585 = cljs.core.count.call(null,c__17622__auto__);
var G__23586 = (0);
seq__23546 = G__23583;
chunk__23547 = G__23584;
count__23548 = G__23585;
i__23549 = G__23586;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23546__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23554_23587 = cljs.core.seq.call(null,requires);
var chunk__23555_23588 = null;
var count__23556_23589 = (0);
var i__23557_23590 = (0);
while(true){
if((i__23557_23590 < count__23556_23589)){
var req_23591 = cljs.core._nth.call(null,chunk__23555_23588,i__23557_23590);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23591,prov);

var G__23592 = seq__23554_23587;
var G__23593 = chunk__23555_23588;
var G__23594 = count__23556_23589;
var G__23595 = (i__23557_23590 + (1));
seq__23554_23587 = G__23592;
chunk__23555_23588 = G__23593;
count__23556_23589 = G__23594;
i__23557_23590 = G__23595;
continue;
} else {
var temp__4425__auto___23596__$1 = cljs.core.seq.call(null,seq__23554_23587);
if(temp__4425__auto___23596__$1){
var seq__23554_23597__$1 = temp__4425__auto___23596__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23554_23597__$1)){
var c__17622__auto___23598 = cljs.core.chunk_first.call(null,seq__23554_23597__$1);
var G__23599 = cljs.core.chunk_rest.call(null,seq__23554_23597__$1);
var G__23600 = c__17622__auto___23598;
var G__23601 = cljs.core.count.call(null,c__17622__auto___23598);
var G__23602 = (0);
seq__23554_23587 = G__23599;
chunk__23555_23588 = G__23600;
count__23556_23589 = G__23601;
i__23557_23590 = G__23602;
continue;
} else {
var req_23603 = cljs.core.first.call(null,seq__23554_23597__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23603,prov);

var G__23604 = cljs.core.next.call(null,seq__23554_23597__$1);
var G__23605 = null;
var G__23606 = (0);
var G__23607 = (0);
seq__23554_23587 = G__23604;
chunk__23555_23588 = G__23605;
count__23556_23589 = G__23606;
i__23557_23590 = G__23607;
continue;
}
} else {
}
}
break;
}

var G__23608 = cljs.core.next.call(null,seq__23546__$1);
var G__23609 = null;
var G__23610 = (0);
var G__23611 = (0);
seq__23546 = G__23608;
chunk__23547 = G__23609;
count__23548 = G__23610;
i__23549 = G__23611;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23616_23620 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23617_23621 = null;
var count__23618_23622 = (0);
var i__23619_23623 = (0);
while(true){
if((i__23619_23623 < count__23618_23622)){
var ns_23624 = cljs.core._nth.call(null,chunk__23617_23621,i__23619_23623);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23624);

var G__23625 = seq__23616_23620;
var G__23626 = chunk__23617_23621;
var G__23627 = count__23618_23622;
var G__23628 = (i__23619_23623 + (1));
seq__23616_23620 = G__23625;
chunk__23617_23621 = G__23626;
count__23618_23622 = G__23627;
i__23619_23623 = G__23628;
continue;
} else {
var temp__4425__auto___23629 = cljs.core.seq.call(null,seq__23616_23620);
if(temp__4425__auto___23629){
var seq__23616_23630__$1 = temp__4425__auto___23629;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23616_23630__$1)){
var c__17622__auto___23631 = cljs.core.chunk_first.call(null,seq__23616_23630__$1);
var G__23632 = cljs.core.chunk_rest.call(null,seq__23616_23630__$1);
var G__23633 = c__17622__auto___23631;
var G__23634 = cljs.core.count.call(null,c__17622__auto___23631);
var G__23635 = (0);
seq__23616_23620 = G__23632;
chunk__23617_23621 = G__23633;
count__23618_23622 = G__23634;
i__23619_23623 = G__23635;
continue;
} else {
var ns_23636 = cljs.core.first.call(null,seq__23616_23630__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23636);

var G__23637 = cljs.core.next.call(null,seq__23616_23630__$1);
var G__23638 = null;
var G__23639 = (0);
var G__23640 = (0);
seq__23616_23620 = G__23637;
chunk__23617_23621 = G__23638;
count__23618_23622 = G__23639;
i__23619_23623 = G__23640;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16819__auto__ = goog.require__;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23641__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23641 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23642__i = 0, G__23642__a = new Array(arguments.length -  0);
while (G__23642__i < G__23642__a.length) {G__23642__a[G__23642__i] = arguments[G__23642__i + 0]; ++G__23642__i;}
  args = new cljs.core.IndexedSeq(G__23642__a,0);
} 
return G__23641__delegate.call(this,args);};
G__23641.cljs$lang$maxFixedArity = 0;
G__23641.cljs$lang$applyTo = (function (arglist__23643){
var args = cljs.core.seq(arglist__23643);
return G__23641__delegate(args);
});
G__23641.cljs$core$IFn$_invoke$arity$variadic = G__23641__delegate;
return G__23641;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23645 = cljs.core._EQ_;
var expr__23646 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23645.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23646))){
var path_parts = ((function (pred__23645,expr__23646){
return (function (p1__23644_SHARP_){
return clojure.string.split.call(null,p1__23644_SHARP_,/[\/\\]/);
});})(pred__23645,expr__23646))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23645,expr__23646){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23648){if((e23648 instanceof Error)){
var e = e23648;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23648;

}
}})());
});
;})(path_parts,sep,root,pred__23645,expr__23646))
} else {
if(cljs.core.truth_(pred__23645.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23646))){
return ((function (pred__23645,expr__23646){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23645,expr__23646){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23645,expr__23646))
);

return deferred.addErrback(((function (deferred,pred__23645,expr__23646){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23645,expr__23646))
);
});
;})(pred__23645,expr__23646))
} else {
return ((function (pred__23645,expr__23646){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23645,expr__23646))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23649,callback){
var map__23652 = p__23649;
var map__23652__$1 = ((((!((map__23652 == null)))?((((map__23652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23652):map__23652);
var file_msg = map__23652__$1;
var request_url = cljs.core.get.call(null,map__23652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23652,map__23652__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23652,map__23652__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__){
return (function (state_23676){
var state_val_23677 = (state_23676[(1)]);
if((state_val_23677 === (7))){
var inst_23672 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
var statearr_23678_23698 = state_23676__$1;
(statearr_23678_23698[(2)] = inst_23672);

(statearr_23678_23698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (1))){
var state_23676__$1 = state_23676;
var statearr_23679_23699 = state_23676__$1;
(statearr_23679_23699[(2)] = null);

(statearr_23679_23699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (4))){
var inst_23656 = (state_23676[(7)]);
var inst_23656__$1 = (state_23676[(2)]);
var state_23676__$1 = (function (){var statearr_23680 = state_23676;
(statearr_23680[(7)] = inst_23656__$1);

return statearr_23680;
})();
if(cljs.core.truth_(inst_23656__$1)){
var statearr_23681_23700 = state_23676__$1;
(statearr_23681_23700[(1)] = (5));

} else {
var statearr_23682_23701 = state_23676__$1;
(statearr_23682_23701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (6))){
var state_23676__$1 = state_23676;
var statearr_23683_23702 = state_23676__$1;
(statearr_23683_23702[(2)] = null);

(statearr_23683_23702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (3))){
var inst_23674 = (state_23676[(2)]);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23676__$1,inst_23674);
} else {
if((state_val_23677 === (2))){
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23676__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23677 === (11))){
var inst_23668 = (state_23676[(2)]);
var state_23676__$1 = (function (){var statearr_23684 = state_23676;
(statearr_23684[(8)] = inst_23668);

return statearr_23684;
})();
var statearr_23685_23703 = state_23676__$1;
(statearr_23685_23703[(2)] = null);

(statearr_23685_23703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (9))){
var inst_23662 = (state_23676[(9)]);
var inst_23660 = (state_23676[(10)]);
var inst_23664 = inst_23662.call(null,inst_23660);
var state_23676__$1 = state_23676;
var statearr_23686_23704 = state_23676__$1;
(statearr_23686_23704[(2)] = inst_23664);

(statearr_23686_23704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (5))){
var inst_23656 = (state_23676[(7)]);
var inst_23658 = figwheel.client.file_reloading.blocking_load.call(null,inst_23656);
var state_23676__$1 = state_23676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23676__$1,(8),inst_23658);
} else {
if((state_val_23677 === (10))){
var inst_23660 = (state_23676[(10)]);
var inst_23666 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23660);
var state_23676__$1 = state_23676;
var statearr_23687_23705 = state_23676__$1;
(statearr_23687_23705[(2)] = inst_23666);

(statearr_23687_23705[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23677 === (8))){
var inst_23662 = (state_23676[(9)]);
var inst_23656 = (state_23676[(7)]);
var inst_23660 = (state_23676[(2)]);
var inst_23661 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23662__$1 = cljs.core.get.call(null,inst_23661,inst_23656);
var state_23676__$1 = (function (){var statearr_23688 = state_23676;
(statearr_23688[(9)] = inst_23662__$1);

(statearr_23688[(10)] = inst_23660);

return statearr_23688;
})();
if(cljs.core.truth_(inst_23662__$1)){
var statearr_23689_23706 = state_23676__$1;
(statearr_23689_23706[(1)] = (9));

} else {
var statearr_23690_23707 = state_23676__$1;
(statearr_23690_23707[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20428__auto__))
;
return ((function (switch__20316__auto__,c__20428__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20317__auto__ = null;
var figwheel$client$file_reloading$state_machine__20317__auto____0 = (function (){
var statearr_23694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23694[(0)] = figwheel$client$file_reloading$state_machine__20317__auto__);

(statearr_23694[(1)] = (1));

return statearr_23694;
});
var figwheel$client$file_reloading$state_machine__20317__auto____1 = (function (state_23676){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_23676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e23695){if((e23695 instanceof Object)){
var ex__20320__auto__ = e23695;
var statearr_23696_23708 = state_23676;
(statearr_23696_23708[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23709 = state_23676;
state_23676 = G__23709;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20317__auto__ = function(state_23676){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20317__auto____1.call(this,state_23676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20317__auto____0;
figwheel$client$file_reloading$state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20317__auto____1;
return figwheel$client$file_reloading$state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__))
})();
var state__20430__auto__ = (function (){var statearr_23697 = f__20429__auto__.call(null);
(statearr_23697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_23697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__))
);

return c__20428__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23710,callback){
var map__23713 = p__23710;
var map__23713__$1 = ((((!((map__23713 == null)))?((((map__23713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23713):map__23713);
var file_msg = map__23713__$1;
var namespace = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23713,map__23713__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23713,map__23713__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23715){
var map__23718 = p__23715;
var map__23718__$1 = ((((!((map__23718 == null)))?((((map__23718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23718):map__23718);
var file_msg = map__23718__$1;
var namespace = cljs.core.get.call(null,map__23718__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16807__auto__){
var or__16819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var or__16819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto____$1)){
return or__16819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23720,callback){
var map__23723 = p__23720;
var map__23723__$1 = ((((!((map__23723 == null)))?((((map__23723.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23723.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23723):map__23723);
var file_msg = map__23723__$1;
var request_url = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20428__auto___23811 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto___23811,out){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto___23811,out){
return (function (state_23793){
var state_val_23794 = (state_23793[(1)]);
if((state_val_23794 === (1))){
var inst_23771 = cljs.core.nth.call(null,files,(0),null);
var inst_23772 = cljs.core.nthnext.call(null,files,(1));
var inst_23773 = files;
var state_23793__$1 = (function (){var statearr_23795 = state_23793;
(statearr_23795[(7)] = inst_23773);

(statearr_23795[(8)] = inst_23772);

(statearr_23795[(9)] = inst_23771);

return statearr_23795;
})();
var statearr_23796_23812 = state_23793__$1;
(statearr_23796_23812[(2)] = null);

(statearr_23796_23812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (2))){
var inst_23773 = (state_23793[(7)]);
var inst_23776 = (state_23793[(10)]);
var inst_23776__$1 = cljs.core.nth.call(null,inst_23773,(0),null);
var inst_23777 = cljs.core.nthnext.call(null,inst_23773,(1));
var inst_23778 = (inst_23776__$1 == null);
var inst_23779 = cljs.core.not.call(null,inst_23778);
var state_23793__$1 = (function (){var statearr_23797 = state_23793;
(statearr_23797[(11)] = inst_23777);

(statearr_23797[(10)] = inst_23776__$1);

return statearr_23797;
})();
if(inst_23779){
var statearr_23798_23813 = state_23793__$1;
(statearr_23798_23813[(1)] = (4));

} else {
var statearr_23799_23814 = state_23793__$1;
(statearr_23799_23814[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (3))){
var inst_23791 = (state_23793[(2)]);
var state_23793__$1 = state_23793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23793__$1,inst_23791);
} else {
if((state_val_23794 === (4))){
var inst_23776 = (state_23793[(10)]);
var inst_23781 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23776);
var state_23793__$1 = state_23793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23793__$1,(7),inst_23781);
} else {
if((state_val_23794 === (5))){
var inst_23787 = cljs.core.async.close_BANG_.call(null,out);
var state_23793__$1 = state_23793;
var statearr_23800_23815 = state_23793__$1;
(statearr_23800_23815[(2)] = inst_23787);

(statearr_23800_23815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (6))){
var inst_23789 = (state_23793[(2)]);
var state_23793__$1 = state_23793;
var statearr_23801_23816 = state_23793__$1;
(statearr_23801_23816[(2)] = inst_23789);

(statearr_23801_23816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23794 === (7))){
var inst_23777 = (state_23793[(11)]);
var inst_23783 = (state_23793[(2)]);
var inst_23784 = cljs.core.async.put_BANG_.call(null,out,inst_23783);
var inst_23773 = inst_23777;
var state_23793__$1 = (function (){var statearr_23802 = state_23793;
(statearr_23802[(7)] = inst_23773);

(statearr_23802[(12)] = inst_23784);

return statearr_23802;
})();
var statearr_23803_23817 = state_23793__$1;
(statearr_23803_23817[(2)] = null);

(statearr_23803_23817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20428__auto___23811,out))
;
return ((function (switch__20316__auto__,c__20428__auto___23811,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____0 = (function (){
var statearr_23807 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23807[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__);

(statearr_23807[(1)] = (1));

return statearr_23807;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____1 = (function (state_23793){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_23793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e23808){if((e23808 instanceof Object)){
var ex__20320__auto__ = e23808;
var statearr_23809_23818 = state_23793;
(statearr_23809_23818[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23819 = state_23793;
state_23793 = G__23819;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__ = function(state_23793){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____1.call(this,state_23793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto___23811,out))
})();
var state__20430__auto__ = (function (){var statearr_23810 = f__20429__auto__.call(null);
(statearr_23810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto___23811);

return statearr_23810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto___23811,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23820,opts){
var map__23824 = p__23820;
var map__23824__$1 = ((((!((map__23824 == null)))?((((map__23824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
var eval_body__$1 = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23826){var e = e23826;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23827_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23827_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23832){
var vec__23833 = p__23832;
var k = cljs.core.nth.call(null,vec__23833,(0),null);
var v = cljs.core.nth.call(null,vec__23833,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23834){
var vec__23835 = p__23834;
var k = cljs.core.nth.call(null,vec__23835,(0),null);
var v = cljs.core.nth.call(null,vec__23835,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23839,p__23840){
var map__24087 = p__23839;
var map__24087__$1 = ((((!((map__24087 == null)))?((((map__24087.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24087.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087):map__24087);
var opts = map__24087__$1;
var before_jsload = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24088 = p__23840;
var map__24088__$1 = ((((!((map__24088 == null)))?((((map__24088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24088):map__24088);
var msg = map__24088__$1;
var files = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20428__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20429__auto__ = (function (){var switch__20316__auto__ = ((function (c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24241){
var state_val_24242 = (state_24241[(1)]);
if((state_val_24242 === (7))){
var inst_24103 = (state_24241[(7)]);
var inst_24105 = (state_24241[(8)]);
var inst_24102 = (state_24241[(9)]);
var inst_24104 = (state_24241[(10)]);
var inst_24110 = cljs.core._nth.call(null,inst_24103,inst_24105);
var inst_24111 = figwheel.client.file_reloading.eval_body.call(null,inst_24110,opts);
var inst_24112 = (inst_24105 + (1));
var tmp24243 = inst_24103;
var tmp24244 = inst_24102;
var tmp24245 = inst_24104;
var inst_24102__$1 = tmp24244;
var inst_24103__$1 = tmp24243;
var inst_24104__$1 = tmp24245;
var inst_24105__$1 = inst_24112;
var state_24241__$1 = (function (){var statearr_24246 = state_24241;
(statearr_24246[(7)] = inst_24103__$1);

(statearr_24246[(8)] = inst_24105__$1);

(statearr_24246[(9)] = inst_24102__$1);

(statearr_24246[(11)] = inst_24111);

(statearr_24246[(10)] = inst_24104__$1);

return statearr_24246;
})();
var statearr_24247_24333 = state_24241__$1;
(statearr_24247_24333[(2)] = null);

(statearr_24247_24333[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (20))){
var inst_24145 = (state_24241[(12)]);
var inst_24153 = figwheel.client.file_reloading.sort_files.call(null,inst_24145);
var state_24241__$1 = state_24241;
var statearr_24248_24334 = state_24241__$1;
(statearr_24248_24334[(2)] = inst_24153);

(statearr_24248_24334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (27))){
var state_24241__$1 = state_24241;
var statearr_24249_24335 = state_24241__$1;
(statearr_24249_24335[(2)] = null);

(statearr_24249_24335[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (1))){
var inst_24094 = (state_24241[(13)]);
var inst_24091 = before_jsload.call(null,files);
var inst_24092 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24093 = (function (){return ((function (inst_24094,inst_24091,inst_24092,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23836_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23836_SHARP_);
});
;})(inst_24094,inst_24091,inst_24092,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24094__$1 = cljs.core.filter.call(null,inst_24093,files);
var inst_24095 = cljs.core.not_empty.call(null,inst_24094__$1);
var state_24241__$1 = (function (){var statearr_24250 = state_24241;
(statearr_24250[(13)] = inst_24094__$1);

(statearr_24250[(14)] = inst_24091);

(statearr_24250[(15)] = inst_24092);

return statearr_24250;
})();
if(cljs.core.truth_(inst_24095)){
var statearr_24251_24336 = state_24241__$1;
(statearr_24251_24336[(1)] = (2));

} else {
var statearr_24252_24337 = state_24241__$1;
(statearr_24252_24337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (24))){
var state_24241__$1 = state_24241;
var statearr_24253_24338 = state_24241__$1;
(statearr_24253_24338[(2)] = null);

(statearr_24253_24338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (39))){
var inst_24195 = (state_24241[(16)]);
var state_24241__$1 = state_24241;
var statearr_24254_24339 = state_24241__$1;
(statearr_24254_24339[(2)] = inst_24195);

(statearr_24254_24339[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (46))){
var inst_24236 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24255_24340 = state_24241__$1;
(statearr_24255_24340[(2)] = inst_24236);

(statearr_24255_24340[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (4))){
var inst_24139 = (state_24241[(2)]);
var inst_24140 = cljs.core.List.EMPTY;
var inst_24141 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24140);
var inst_24142 = (function (){return ((function (inst_24139,inst_24140,inst_24141,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23837_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23837_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23837_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_24139,inst_24140,inst_24141,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24143 = cljs.core.filter.call(null,inst_24142,files);
var inst_24144 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24145 = cljs.core.concat.call(null,inst_24143,inst_24144);
var state_24241__$1 = (function (){var statearr_24256 = state_24241;
(statearr_24256[(17)] = inst_24139);

(statearr_24256[(12)] = inst_24145);

(statearr_24256[(18)] = inst_24141);

return statearr_24256;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24257_24341 = state_24241__$1;
(statearr_24257_24341[(1)] = (16));

} else {
var statearr_24258_24342 = state_24241__$1;
(statearr_24258_24342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (15))){
var inst_24129 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24259_24343 = state_24241__$1;
(statearr_24259_24343[(2)] = inst_24129);

(statearr_24259_24343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (21))){
var inst_24155 = (state_24241[(19)]);
var inst_24155__$1 = (state_24241[(2)]);
var inst_24156 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24155__$1);
var state_24241__$1 = (function (){var statearr_24260 = state_24241;
(statearr_24260[(19)] = inst_24155__$1);

return statearr_24260;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24241__$1,(22),inst_24156);
} else {
if((state_val_24242 === (31))){
var inst_24239 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24241__$1,inst_24239);
} else {
if((state_val_24242 === (32))){
var inst_24195 = (state_24241[(16)]);
var inst_24200 = inst_24195.cljs$lang$protocol_mask$partition0$;
var inst_24201 = (inst_24200 & (64));
var inst_24202 = inst_24195.cljs$core$ISeq$;
var inst_24203 = (inst_24201) || (inst_24202);
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24203)){
var statearr_24261_24344 = state_24241__$1;
(statearr_24261_24344[(1)] = (35));

} else {
var statearr_24262_24345 = state_24241__$1;
(statearr_24262_24345[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (40))){
var inst_24216 = (state_24241[(20)]);
var inst_24215 = (state_24241[(2)]);
var inst_24216__$1 = cljs.core.get.call(null,inst_24215,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24217 = cljs.core.get.call(null,inst_24215,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24218 = cljs.core.not_empty.call(null,inst_24216__$1);
var state_24241__$1 = (function (){var statearr_24263 = state_24241;
(statearr_24263[(20)] = inst_24216__$1);

(statearr_24263[(21)] = inst_24217);

return statearr_24263;
})();
if(cljs.core.truth_(inst_24218)){
var statearr_24264_24346 = state_24241__$1;
(statearr_24264_24346[(1)] = (41));

} else {
var statearr_24265_24347 = state_24241__$1;
(statearr_24265_24347[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (33))){
var state_24241__$1 = state_24241;
var statearr_24266_24348 = state_24241__$1;
(statearr_24266_24348[(2)] = false);

(statearr_24266_24348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (13))){
var inst_24115 = (state_24241[(22)]);
var inst_24119 = cljs.core.chunk_first.call(null,inst_24115);
var inst_24120 = cljs.core.chunk_rest.call(null,inst_24115);
var inst_24121 = cljs.core.count.call(null,inst_24119);
var inst_24102 = inst_24120;
var inst_24103 = inst_24119;
var inst_24104 = inst_24121;
var inst_24105 = (0);
var state_24241__$1 = (function (){var statearr_24267 = state_24241;
(statearr_24267[(7)] = inst_24103);

(statearr_24267[(8)] = inst_24105);

(statearr_24267[(9)] = inst_24102);

(statearr_24267[(10)] = inst_24104);

return statearr_24267;
})();
var statearr_24268_24349 = state_24241__$1;
(statearr_24268_24349[(2)] = null);

(statearr_24268_24349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (22))){
var inst_24155 = (state_24241[(19)]);
var inst_24163 = (state_24241[(23)]);
var inst_24159 = (state_24241[(24)]);
var inst_24158 = (state_24241[(25)]);
var inst_24158__$1 = (state_24241[(2)]);
var inst_24159__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24158__$1);
var inst_24160 = (function (){var all_files = inst_24155;
var res_SINGLEQUOTE_ = inst_24158__$1;
var res = inst_24159__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24155,inst_24163,inst_24159,inst_24158,inst_24158__$1,inst_24159__$1,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23838_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23838_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24155,inst_24163,inst_24159,inst_24158,inst_24158__$1,inst_24159__$1,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24161 = cljs.core.filter.call(null,inst_24160,inst_24158__$1);
var inst_24162 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24163__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24162);
var inst_24164 = cljs.core.not_empty.call(null,inst_24163__$1);
var state_24241__$1 = (function (){var statearr_24269 = state_24241;
(statearr_24269[(23)] = inst_24163__$1);

(statearr_24269[(24)] = inst_24159__$1);

(statearr_24269[(26)] = inst_24161);

(statearr_24269[(25)] = inst_24158__$1);

return statearr_24269;
})();
if(cljs.core.truth_(inst_24164)){
var statearr_24270_24350 = state_24241__$1;
(statearr_24270_24350[(1)] = (23));

} else {
var statearr_24271_24351 = state_24241__$1;
(statearr_24271_24351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (36))){
var state_24241__$1 = state_24241;
var statearr_24272_24352 = state_24241__$1;
(statearr_24272_24352[(2)] = false);

(statearr_24272_24352[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (41))){
var inst_24216 = (state_24241[(20)]);
var inst_24220 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24221 = cljs.core.map.call(null,inst_24220,inst_24216);
var inst_24222 = cljs.core.pr_str.call(null,inst_24221);
var inst_24223 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24222)].join('');
var inst_24224 = figwheel.client.utils.log.call(null,inst_24223);
var state_24241__$1 = state_24241;
var statearr_24273_24353 = state_24241__$1;
(statearr_24273_24353[(2)] = inst_24224);

(statearr_24273_24353[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (43))){
var inst_24217 = (state_24241[(21)]);
var inst_24227 = (state_24241[(2)]);
var inst_24228 = cljs.core.not_empty.call(null,inst_24217);
var state_24241__$1 = (function (){var statearr_24274 = state_24241;
(statearr_24274[(27)] = inst_24227);

return statearr_24274;
})();
if(cljs.core.truth_(inst_24228)){
var statearr_24275_24354 = state_24241__$1;
(statearr_24275_24354[(1)] = (44));

} else {
var statearr_24276_24355 = state_24241__$1;
(statearr_24276_24355[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (29))){
var inst_24155 = (state_24241[(19)]);
var inst_24195 = (state_24241[(16)]);
var inst_24163 = (state_24241[(23)]);
var inst_24159 = (state_24241[(24)]);
var inst_24161 = (state_24241[(26)]);
var inst_24158 = (state_24241[(25)]);
var inst_24191 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24194 = (function (){var all_files = inst_24155;
var res_SINGLEQUOTE_ = inst_24158;
var res = inst_24159;
var files_not_loaded = inst_24161;
var dependencies_that_loaded = inst_24163;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24195,inst_24163,inst_24159,inst_24161,inst_24158,inst_24191,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24193){
var map__24277 = p__24193;
var map__24277__$1 = ((((!((map__24277 == null)))?((((map__24277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24277):map__24277);
var namespace = cljs.core.get.call(null,map__24277__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24195,inst_24163,inst_24159,inst_24161,inst_24158,inst_24191,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24195__$1 = cljs.core.group_by.call(null,inst_24194,inst_24161);
var inst_24197 = (inst_24195__$1 == null);
var inst_24198 = cljs.core.not.call(null,inst_24197);
var state_24241__$1 = (function (){var statearr_24279 = state_24241;
(statearr_24279[(16)] = inst_24195__$1);

(statearr_24279[(28)] = inst_24191);

return statearr_24279;
})();
if(inst_24198){
var statearr_24280_24356 = state_24241__$1;
(statearr_24280_24356[(1)] = (32));

} else {
var statearr_24281_24357 = state_24241__$1;
(statearr_24281_24357[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (44))){
var inst_24217 = (state_24241[(21)]);
var inst_24230 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24217);
var inst_24231 = cljs.core.pr_str.call(null,inst_24230);
var inst_24232 = [cljs.core.str("not required: "),cljs.core.str(inst_24231)].join('');
var inst_24233 = figwheel.client.utils.log.call(null,inst_24232);
var state_24241__$1 = state_24241;
var statearr_24282_24358 = state_24241__$1;
(statearr_24282_24358[(2)] = inst_24233);

(statearr_24282_24358[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (6))){
var inst_24136 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24283_24359 = state_24241__$1;
(statearr_24283_24359[(2)] = inst_24136);

(statearr_24283_24359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (28))){
var inst_24161 = (state_24241[(26)]);
var inst_24188 = (state_24241[(2)]);
var inst_24189 = cljs.core.not_empty.call(null,inst_24161);
var state_24241__$1 = (function (){var statearr_24284 = state_24241;
(statearr_24284[(29)] = inst_24188);

return statearr_24284;
})();
if(cljs.core.truth_(inst_24189)){
var statearr_24285_24360 = state_24241__$1;
(statearr_24285_24360[(1)] = (29));

} else {
var statearr_24286_24361 = state_24241__$1;
(statearr_24286_24361[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (25))){
var inst_24159 = (state_24241[(24)]);
var inst_24175 = (state_24241[(2)]);
var inst_24176 = cljs.core.not_empty.call(null,inst_24159);
var state_24241__$1 = (function (){var statearr_24287 = state_24241;
(statearr_24287[(30)] = inst_24175);

return statearr_24287;
})();
if(cljs.core.truth_(inst_24176)){
var statearr_24288_24362 = state_24241__$1;
(statearr_24288_24362[(1)] = (26));

} else {
var statearr_24289_24363 = state_24241__$1;
(statearr_24289_24363[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (34))){
var inst_24210 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24210)){
var statearr_24290_24364 = state_24241__$1;
(statearr_24290_24364[(1)] = (38));

} else {
var statearr_24291_24365 = state_24241__$1;
(statearr_24291_24365[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (17))){
var state_24241__$1 = state_24241;
var statearr_24292_24366 = state_24241__$1;
(statearr_24292_24366[(2)] = recompile_dependents);

(statearr_24292_24366[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (3))){
var state_24241__$1 = state_24241;
var statearr_24293_24367 = state_24241__$1;
(statearr_24293_24367[(2)] = null);

(statearr_24293_24367[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (12))){
var inst_24132 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24294_24368 = state_24241__$1;
(statearr_24294_24368[(2)] = inst_24132);

(statearr_24294_24368[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (2))){
var inst_24094 = (state_24241[(13)]);
var inst_24101 = cljs.core.seq.call(null,inst_24094);
var inst_24102 = inst_24101;
var inst_24103 = null;
var inst_24104 = (0);
var inst_24105 = (0);
var state_24241__$1 = (function (){var statearr_24295 = state_24241;
(statearr_24295[(7)] = inst_24103);

(statearr_24295[(8)] = inst_24105);

(statearr_24295[(9)] = inst_24102);

(statearr_24295[(10)] = inst_24104);

return statearr_24295;
})();
var statearr_24296_24369 = state_24241__$1;
(statearr_24296_24369[(2)] = null);

(statearr_24296_24369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (23))){
var inst_24155 = (state_24241[(19)]);
var inst_24163 = (state_24241[(23)]);
var inst_24159 = (state_24241[(24)]);
var inst_24161 = (state_24241[(26)]);
var inst_24158 = (state_24241[(25)]);
var inst_24166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24168 = (function (){var all_files = inst_24155;
var res_SINGLEQUOTE_ = inst_24158;
var res = inst_24159;
var files_not_loaded = inst_24161;
var dependencies_that_loaded = inst_24163;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24166,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24167){
var map__24297 = p__24167;
var map__24297__$1 = ((((!((map__24297 == null)))?((((map__24297.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24297.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24297):map__24297);
var request_url = cljs.core.get.call(null,map__24297__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24166,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24169 = cljs.core.reverse.call(null,inst_24163);
var inst_24170 = cljs.core.map.call(null,inst_24168,inst_24169);
var inst_24171 = cljs.core.pr_str.call(null,inst_24170);
var inst_24172 = figwheel.client.utils.log.call(null,inst_24171);
var state_24241__$1 = (function (){var statearr_24299 = state_24241;
(statearr_24299[(31)] = inst_24166);

return statearr_24299;
})();
var statearr_24300_24370 = state_24241__$1;
(statearr_24300_24370[(2)] = inst_24172);

(statearr_24300_24370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (35))){
var state_24241__$1 = state_24241;
var statearr_24301_24371 = state_24241__$1;
(statearr_24301_24371[(2)] = true);

(statearr_24301_24371[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (19))){
var inst_24145 = (state_24241[(12)]);
var inst_24151 = figwheel.client.file_reloading.expand_files.call(null,inst_24145);
var state_24241__$1 = state_24241;
var statearr_24302_24372 = state_24241__$1;
(statearr_24302_24372[(2)] = inst_24151);

(statearr_24302_24372[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (11))){
var state_24241__$1 = state_24241;
var statearr_24303_24373 = state_24241__$1;
(statearr_24303_24373[(2)] = null);

(statearr_24303_24373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (9))){
var inst_24134 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24304_24374 = state_24241__$1;
(statearr_24304_24374[(2)] = inst_24134);

(statearr_24304_24374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (5))){
var inst_24105 = (state_24241[(8)]);
var inst_24104 = (state_24241[(10)]);
var inst_24107 = (inst_24105 < inst_24104);
var inst_24108 = inst_24107;
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24108)){
var statearr_24305_24375 = state_24241__$1;
(statearr_24305_24375[(1)] = (7));

} else {
var statearr_24306_24376 = state_24241__$1;
(statearr_24306_24376[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (14))){
var inst_24115 = (state_24241[(22)]);
var inst_24124 = cljs.core.first.call(null,inst_24115);
var inst_24125 = figwheel.client.file_reloading.eval_body.call(null,inst_24124,opts);
var inst_24126 = cljs.core.next.call(null,inst_24115);
var inst_24102 = inst_24126;
var inst_24103 = null;
var inst_24104 = (0);
var inst_24105 = (0);
var state_24241__$1 = (function (){var statearr_24307 = state_24241;
(statearr_24307[(7)] = inst_24103);

(statearr_24307[(8)] = inst_24105);

(statearr_24307[(9)] = inst_24102);

(statearr_24307[(32)] = inst_24125);

(statearr_24307[(10)] = inst_24104);

return statearr_24307;
})();
var statearr_24308_24377 = state_24241__$1;
(statearr_24308_24377[(2)] = null);

(statearr_24308_24377[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (45))){
var state_24241__$1 = state_24241;
var statearr_24309_24378 = state_24241__$1;
(statearr_24309_24378[(2)] = null);

(statearr_24309_24378[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (26))){
var inst_24155 = (state_24241[(19)]);
var inst_24163 = (state_24241[(23)]);
var inst_24159 = (state_24241[(24)]);
var inst_24161 = (state_24241[(26)]);
var inst_24158 = (state_24241[(25)]);
var inst_24178 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24180 = (function (){var all_files = inst_24155;
var res_SINGLEQUOTE_ = inst_24158;
var res = inst_24159;
var files_not_loaded = inst_24161;
var dependencies_that_loaded = inst_24163;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24178,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24179){
var map__24310 = p__24179;
var map__24310__$1 = ((((!((map__24310 == null)))?((((map__24310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24310):map__24310);
var namespace = cljs.core.get.call(null,map__24310__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24178,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24181 = cljs.core.map.call(null,inst_24180,inst_24159);
var inst_24182 = cljs.core.pr_str.call(null,inst_24181);
var inst_24183 = figwheel.client.utils.log.call(null,inst_24182);
var inst_24184 = (function (){var all_files = inst_24155;
var res_SINGLEQUOTE_ = inst_24158;
var res = inst_24159;
var files_not_loaded = inst_24161;
var dependencies_that_loaded = inst_24163;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24178,inst_24180,inst_24181,inst_24182,inst_24183,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24155,inst_24163,inst_24159,inst_24161,inst_24158,inst_24178,inst_24180,inst_24181,inst_24182,inst_24183,state_val_24242,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24185 = setTimeout(inst_24184,(10));
var state_24241__$1 = (function (){var statearr_24312 = state_24241;
(statearr_24312[(33)] = inst_24183);

(statearr_24312[(34)] = inst_24178);

return statearr_24312;
})();
var statearr_24313_24379 = state_24241__$1;
(statearr_24313_24379[(2)] = inst_24185);

(statearr_24313_24379[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (16))){
var state_24241__$1 = state_24241;
var statearr_24314_24380 = state_24241__$1;
(statearr_24314_24380[(2)] = reload_dependents);

(statearr_24314_24380[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (38))){
var inst_24195 = (state_24241[(16)]);
var inst_24212 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24195);
var state_24241__$1 = state_24241;
var statearr_24315_24381 = state_24241__$1;
(statearr_24315_24381[(2)] = inst_24212);

(statearr_24315_24381[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (30))){
var state_24241__$1 = state_24241;
var statearr_24316_24382 = state_24241__$1;
(statearr_24316_24382[(2)] = null);

(statearr_24316_24382[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (10))){
var inst_24115 = (state_24241[(22)]);
var inst_24117 = cljs.core.chunked_seq_QMARK_.call(null,inst_24115);
var state_24241__$1 = state_24241;
if(inst_24117){
var statearr_24317_24383 = state_24241__$1;
(statearr_24317_24383[(1)] = (13));

} else {
var statearr_24318_24384 = state_24241__$1;
(statearr_24318_24384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (18))){
var inst_24149 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24149)){
var statearr_24319_24385 = state_24241__$1;
(statearr_24319_24385[(1)] = (19));

} else {
var statearr_24320_24386 = state_24241__$1;
(statearr_24320_24386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (42))){
var state_24241__$1 = state_24241;
var statearr_24321_24387 = state_24241__$1;
(statearr_24321_24387[(2)] = null);

(statearr_24321_24387[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (37))){
var inst_24207 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24322_24388 = state_24241__$1;
(statearr_24322_24388[(2)] = inst_24207);

(statearr_24322_24388[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (8))){
var inst_24102 = (state_24241[(9)]);
var inst_24115 = (state_24241[(22)]);
var inst_24115__$1 = cljs.core.seq.call(null,inst_24102);
var state_24241__$1 = (function (){var statearr_24323 = state_24241;
(statearr_24323[(22)] = inst_24115__$1);

return statearr_24323;
})();
if(inst_24115__$1){
var statearr_24324_24389 = state_24241__$1;
(statearr_24324_24389[(1)] = (10));

} else {
var statearr_24325_24390 = state_24241__$1;
(statearr_24325_24390[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20316__auto__,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____0 = (function (){
var statearr_24329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24329[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__);

(statearr_24329[(1)] = (1));

return statearr_24329;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____1 = (function (state_24241){
while(true){
var ret_value__20318__auto__ = (function (){try{while(true){
var result__20319__auto__ = switch__20316__auto__.call(null,state_24241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20319__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20319__auto__;
}
break;
}
}catch (e24330){if((e24330 instanceof Object)){
var ex__20320__auto__ = e24330;
var statearr_24331_24391 = state_24241;
(statearr_24331_24391[(5)] = ex__20320__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20318__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24392 = state_24241;
state_24241 = G__24392;
continue;
} else {
return ret_value__20318__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__ = function(state_24241){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____1.call(this,state_24241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20317__auto__;
})()
;})(switch__20316__auto__,c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20430__auto__ = (function (){var statearr_24332 = f__20429__auto__.call(null);
(statearr_24332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20428__auto__);

return statearr_24332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20430__auto__);
});})(c__20428__auto__,map__24087,map__24087__$1,opts,before_jsload,on_jsload,reload_dependents,map__24088,map__24088__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20428__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24395,link){
var map__24398 = p__24395;
var map__24398__$1 = ((((!((map__24398 == null)))?((((map__24398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24398):map__24398);
var file = cljs.core.get.call(null,map__24398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24398,map__24398__$1,file){
return (function (p1__24393_SHARP_,p2__24394_SHARP_){
if(cljs.core._EQ_.call(null,p1__24393_SHARP_,p2__24394_SHARP_)){
return p1__24393_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24398,map__24398__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24404){
var map__24405 = p__24404;
var map__24405__$1 = ((((!((map__24405 == null)))?((((map__24405.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24405.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24405):map__24405);
var match_length = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24405__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24400_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24400_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24407 = [];
var len__17877__auto___24410 = arguments.length;
var i__17878__auto___24411 = (0);
while(true){
if((i__17878__auto___24411 < len__17877__auto___24410)){
args24407.push((arguments[i__17878__auto___24411]));

var G__24412 = (i__17878__auto___24411 + (1));
i__17878__auto___24411 = G__24412;
continue;
} else {
}
break;
}

var G__24409 = args24407.length;
switch (G__24409) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24407.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24414_SHARP_,p2__24415_SHARP_){
return cljs.core.assoc.call(null,p1__24414_SHARP_,cljs.core.get.call(null,p2__24415_SHARP_,key),p2__24415_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24416){
var map__24419 = p__24416;
var map__24419__$1 = ((((!((map__24419 == null)))?((((map__24419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24419):map__24419);
var f_data = map__24419__$1;
var file = cljs.core.get.call(null,map__24419__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24421,files_msg){
var map__24428 = p__24421;
var map__24428__$1 = ((((!((map__24428 == null)))?((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var opts = map__24428__$1;
var on_cssload = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24430_24434 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24431_24435 = null;
var count__24432_24436 = (0);
var i__24433_24437 = (0);
while(true){
if((i__24433_24437 < count__24432_24436)){
var f_24438 = cljs.core._nth.call(null,chunk__24431_24435,i__24433_24437);
figwheel.client.file_reloading.reload_css_file.call(null,f_24438);

var G__24439 = seq__24430_24434;
var G__24440 = chunk__24431_24435;
var G__24441 = count__24432_24436;
var G__24442 = (i__24433_24437 + (1));
seq__24430_24434 = G__24439;
chunk__24431_24435 = G__24440;
count__24432_24436 = G__24441;
i__24433_24437 = G__24442;
continue;
} else {
var temp__4425__auto___24443 = cljs.core.seq.call(null,seq__24430_24434);
if(temp__4425__auto___24443){
var seq__24430_24444__$1 = temp__4425__auto___24443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24430_24444__$1)){
var c__17622__auto___24445 = cljs.core.chunk_first.call(null,seq__24430_24444__$1);
var G__24446 = cljs.core.chunk_rest.call(null,seq__24430_24444__$1);
var G__24447 = c__17622__auto___24445;
var G__24448 = cljs.core.count.call(null,c__17622__auto___24445);
var G__24449 = (0);
seq__24430_24434 = G__24446;
chunk__24431_24435 = G__24447;
count__24432_24436 = G__24448;
i__24433_24437 = G__24449;
continue;
} else {
var f_24450 = cljs.core.first.call(null,seq__24430_24444__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24450);

var G__24451 = cljs.core.next.call(null,seq__24430_24444__$1);
var G__24452 = null;
var G__24453 = (0);
var G__24454 = (0);
seq__24430_24434 = G__24451;
chunk__24431_24435 = G__24452;
count__24432_24436 = G__24453;
i__24433_24437 = G__24454;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24428,map__24428__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24428,map__24428__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1456199289724