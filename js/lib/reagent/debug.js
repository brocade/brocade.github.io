// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__18109__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18110__i = 0, G__18110__a = new Array(arguments.length -  0);
while (G__18110__i < G__18110__a.length) {G__18110__a[G__18110__i] = arguments[G__18110__i + 0]; ++G__18110__i;}
  args = new cljs.core.IndexedSeq(G__18110__a,0);
} 
return G__18109__delegate.call(this,args);};
G__18109.cljs$lang$maxFixedArity = 0;
G__18109.cljs$lang$applyTo = (function (arglist__18111){
var args = cljs.core.seq(arglist__18111);
return G__18109__delegate(args);
});
G__18109.cljs$core$IFn$_invoke$arity$variadic = G__18109__delegate;
return G__18109;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18112__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18113__i = 0, G__18113__a = new Array(arguments.length -  0);
while (G__18113__i < G__18113__a.length) {G__18113__a[G__18113__i] = arguments[G__18113__i + 0]; ++G__18113__i;}
  args = new cljs.core.IndexedSeq(G__18113__a,0);
} 
return G__18112__delegate.call(this,args);};
G__18112.cljs$lang$maxFixedArity = 0;
G__18112.cljs$lang$applyTo = (function (arglist__18114){
var args = cljs.core.seq(arglist__18114);
return G__18112__delegate(args);
});
G__18112.cljs$core$IFn$_invoke$arity$variadic = G__18112__delegate;
return G__18112;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map