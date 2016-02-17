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
var G__23695__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23695 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23696__i = 0, G__23696__a = new Array(arguments.length -  0);
while (G__23696__i < G__23696__a.length) {G__23696__a[G__23696__i] = arguments[G__23696__i + 0]; ++G__23696__i;}
  args = new cljs.core.IndexedSeq(G__23696__a,0);
} 
return G__23695__delegate.call(this,args);};
G__23695.cljs$lang$maxFixedArity = 0;
G__23695.cljs$lang$applyTo = (function (arglist__23697){
var args = cljs.core.seq(arglist__23697);
return G__23695__delegate(args);
});
G__23695.cljs$core$IFn$_invoke$arity$variadic = G__23695__delegate;
return G__23695;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__23698__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__23698 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23699__i = 0, G__23699__a = new Array(arguments.length -  0);
while (G__23699__i < G__23699__a.length) {G__23699__a[G__23699__i] = arguments[G__23699__i + 0]; ++G__23699__i;}
  args = new cljs.core.IndexedSeq(G__23699__a,0);
} 
return G__23698__delegate.call(this,args);};
G__23698.cljs$lang$maxFixedArity = 0;
G__23698.cljs$lang$applyTo = (function (arglist__23700){
var args = cljs.core.seq(arglist__23700);
return G__23698__delegate(args);
});
G__23698.cljs$core$IFn$_invoke$arity$variadic = G__23698__delegate;
return G__23698;
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

//# sourceMappingURL=debug.js.map?rel=1455751531298