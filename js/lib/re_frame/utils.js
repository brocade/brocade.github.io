// Compiled by ClojureScript 1.7.170 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__18661_SHARP_){
return console.log(p1__18661_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__18662_SHARP_){
return console.warn(p1__18662_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__18663_SHARP_){
return console.error(p1__18663_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__18664_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__18664_SHARP_);
} else {
return console.log(p1__18664_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__17963__auto__ = [];
var len__17956__auto___18666 = arguments.length;
var i__17957__auto___18667 = (0);
while(true){
if((i__17957__auto___18667 < len__17956__auto___18666)){
args__17963__auto__.push((arguments[i__17957__auto___18667]));

var G__18668 = (i__17957__auto___18667 + (1));
i__17957__auto___18667 = G__18668;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((0) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17964__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq18665){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18665));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__17963__auto__ = [];
var len__17956__auto___18670 = arguments.length;
var i__17957__auto___18671 = (0);
while(true){
if((i__17957__auto___18671 < len__17956__auto___18670)){
args__17963__auto__.push((arguments[i__17957__auto___18671]));

var G__18672 = (i__17957__auto___18671 + (1));
i__17957__auto___18671 = G__18672;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((0) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17964__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq18669){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18669));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__17963__auto__ = [];
var len__17956__auto___18674 = arguments.length;
var i__17957__auto___18675 = (0);
while(true){
if((i__17957__auto___18675 < len__17956__auto___18674)){
args__17963__auto__.push((arguments[i__17957__auto___18675]));

var G__18676 = (i__17957__auto___18675 + (1));
i__17957__auto___18675 = G__18676;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((0) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17964__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq18673){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18673));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__17963__auto__ = [];
var len__17956__auto___18678 = arguments.length;
var i__17957__auto___18679 = (0);
while(true){
if((i__17957__auto___18679 < len__17956__auto___18678)){
args__17963__auto__.push((arguments[i__17957__auto___18679]));

var G__18680 = (i__17957__auto___18679 + (1));
i__17957__auto___18679 = G__18680;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((0) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__17964__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq18677){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18677));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__17963__auto__ = [];
var len__17956__auto___18682 = arguments.length;
var i__17957__auto___18683 = (0);
while(true){
if((i__17957__auto___18683 < len__17956__auto___18682)){
args__17963__auto__.push((arguments[i__17957__auto___18683]));

var G__18684 = (i__17957__auto___18683 + (1));
i__17957__auto___18683 = G__18684;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((0) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17964__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq18681){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18681));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map