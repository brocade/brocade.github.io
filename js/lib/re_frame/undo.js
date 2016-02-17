// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.undo');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.utils');
goog.require('re_frame.db');
goog.require('re_frame.handlers');
goog.require('re_frame.subs');
/**
 * Maximum number of undo states maintained
 */
re_frame.undo.max_undos = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((50)) : cljs.core.atom.call(null,(50)));
re_frame.undo.set_max_undos_BANG_ = (function re_frame$undo$set_max_undos_BANG_(n){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.undo.max_undos,n) : cljs.core.reset_BANG_.call(null,re_frame.undo.max_undos,n));
});
/**
 * A list of history states
 */
re_frame.undo.undo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * A list of future states, caused by undoing
 */
re_frame.undo.redo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors app-db
 */
re_frame.undo.app_explain = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
/**
 * Mirrors undo-list
 */
re_frame.undo.undo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Mirrors redo-list
 */
re_frame.undo.redo_explain_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_frame.undo.clear_undos_BANG_ = (function re_frame$undo$clear_undos_BANG_(){
var G__11058_11062 = re_frame.undo.undo_list;
var G__11059_11063 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11058_11062,G__11059_11063) : cljs.core.reset_BANG_.call(null,G__11058_11062,G__11059_11063));

var G__11060 = re_frame.undo.undo_explain_list;
var G__11061 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11060,G__11061) : cljs.core.reset_BANG_.call(null,G__11060,G__11061));
});
re_frame.undo.clear_redos_BANG_ = (function re_frame$undo$clear_redos_BANG_(){
var G__11068_11072 = re_frame.undo.redo_list;
var G__11069_11073 = cljs.core.PersistentVector.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11068_11072,G__11069_11073) : cljs.core.reset_BANG_.call(null,G__11068_11072,G__11069_11073));

var G__11070 = re_frame.undo.redo_explain_list;
var G__11071 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11070,G__11071) : cljs.core.reset_BANG_.call(null,G__11070,G__11071));
});
re_frame.undo.clear_history_BANG_ = (function re_frame$undo$clear_history_BANG_(){
re_frame.undo.clear_undos_BANG_();

re_frame.undo.clear_redos_BANG_();

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.undo.app_explain,"") : cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,""));
});
/**
 * Stores the value currently in app-db, so the user can later undo
 */
re_frame.undo.store_now_BANG_ = (function re_frame$undo$store_now_BANG_(explanation){
re_frame.undo.clear_redos_BANG_();

var G__11078_11082 = re_frame.undo.undo_list;
var G__11079_11083 = cljs.core.vec(cljs.core.take_last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.max_undos) : cljs.core.deref.call(null,re_frame.undo.max_undos)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.undo_list) : cljs.core.deref.call(null,re_frame.undo.undo_list)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.db.app_db) : cljs.core.deref.call(null,re_frame.db.app_db)))));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11078_11082,G__11079_11083) : cljs.core.reset_BANG_.call(null,G__11078_11082,G__11079_11083));

var G__11080_11084 = re_frame.undo.undo_explain_list;
var G__11081_11085 = cljs.core.vec(cljs.core.take_last((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.max_undos) : cljs.core.deref.call(null,re_frame.undo.max_undos)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.undo_explain_list) : cljs.core.deref.call(null,re_frame.undo.undo_explain_list)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.app_explain) : cljs.core.deref.call(null,re_frame.undo.app_explain)))));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11080_11084,G__11081_11085) : cljs.core.reset_BANG_.call(null,G__11080_11084,G__11081_11085));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.undo.app_explain,explanation) : cljs.core.reset_BANG_.call(null,re_frame.undo.app_explain,explanation));
});
/**
 * Returns true if undos exist, false otherwise
 */
re_frame.undo.undos_QMARK_ = (function re_frame$undo$undos_QMARK_(){
return (cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.undo_list) : cljs.core.deref.call(null,re_frame.undo.undo_list))) > (0));
});
/**
 * Returns true if redos exist, false otherwise
 */
re_frame.undo.redos_QMARK_ = (function re_frame$undo$redos_QMARK_(){
return (cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.redo_list) : cljs.core.deref.call(null,re_frame.undo.redo_list))) > (0));
});
/**
 * Returns list of undo descriptions or empty list if no undos
 */
re_frame.undo.undo_explanations = (function re_frame$undo$undo_explanations(){
if(cljs.core.truth_(re_frame.undo.undos_QMARK_())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.undo_explain_list) : cljs.core.deref.call(null,re_frame.undo.undo_explain_list)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.app_explain) : cljs.core.deref.call(null,re_frame.undo.app_explain)));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.subs.register(cljs.core.cst$kw$undos_QMARK_,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.cst$kw$redos_QMARK_,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.redos_QMARK_();
}));
}));
re_frame.subs.register(cljs.core.cst$kw$undo_DASH_explanations,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return re_frame.undo.undo_explanations();
}));
}));
re_frame.subs.register(cljs.core.cst$kw$redo_DASH_explanations,(function re_frame$undo$handler(_,___$1){
return reagent.ratom.make_reaction((function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(re_frame.undo.redo_explain_list) : cljs.core.deref.call(null,re_frame.undo.redo_explain_list));
}));
}));
re_frame.undo.undo = (function re_frame$undo$undo(undos,cur,redos){
var u = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(undos) : cljs.core.deref.call(null,undos));
var r = cljs.core.cons((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur) : cljs.core.deref.call(null,cur)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(redos) : cljs.core.deref.call(null,redos)));
var G__11090_11094 = cur;
var G__11091_11095 = cljs.core.last(u);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11090_11094,G__11091_11095) : cljs.core.reset_BANG_.call(null,G__11090_11094,G__11091_11095));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(redos,r) : cljs.core.reset_BANG_.call(null,redos,r));

var G__11092 = undos;
var G__11093 = cljs.core.pop(u);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11092,G__11093) : cljs.core.reset_BANG_.call(null,G__11092,G__11093));
});
/**
 * undo n steps or until we run out of undos
 */
re_frame.undo.undo_n = (function re_frame$undo$undo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__4659__auto__ = (n > (0));
if(and__4659__auto__){
return re_frame.undo.undos_QMARK_();
} else {
return and__4659__auto__;
}
})())){
re_frame.undo.undo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.undo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__11096 = (n - (1));
n = G__11096;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$undo,(function re_frame$undo$handler(_,p__11097){
var vec__11099 = p__11097;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11099,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11099,(1),null);
if(cljs.core.not(re_frame.undo.undos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:undo]), but there is nothing to undo."], 0));
} else {
return re_frame.undo.undo_n((function (){var or__4671__auto__ = n;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.undo.redo = (function re_frame$undo$redo(undos,cur,redos){
var u = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(undos) : cljs.core.deref.call(null,undos)),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cur) : cljs.core.deref.call(null,cur)));
var r = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(redos) : cljs.core.deref.call(null,redos));
var G__11104_11108 = cur;
var G__11105_11109 = cljs.core.first(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11104_11108,G__11105_11109) : cljs.core.reset_BANG_.call(null,G__11104_11108,G__11105_11109));

var G__11106_11110 = redos;
var G__11107_11111 = cljs.core.rest(r);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11106_11110,G__11107_11111) : cljs.core.reset_BANG_.call(null,G__11106_11110,G__11107_11111));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(undos,u) : cljs.core.reset_BANG_.call(null,undos,u));
});
/**
 * redo n steps or until we run out of redos
 */
re_frame.undo.redo_n = (function re_frame$undo$redo_n(n){
while(true){
if(cljs.core.truth_((function (){var and__4659__auto__ = (n > (0));
if(and__4659__auto__){
return re_frame.undo.redos_QMARK_();
} else {
return and__4659__auto__;
}
})())){
re_frame.undo.redo(re_frame.undo.undo_list,re_frame.db.app_db,re_frame.undo.redo_list);

re_frame.undo.redo(re_frame.undo.undo_explain_list,re_frame.undo.app_explain,re_frame.undo.redo_explain_list);

var G__11112 = (n - (1));
n = G__11112;
continue;
} else {
return null;
}
break;
}
});
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$redo,(function re_frame$undo$handler(_,p__11113){
var vec__11115 = p__11113;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11115,(1),null);
if(cljs.core.not(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:redo]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.redo_n((function (){var or__4671__auto__ = n;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return (1);
}
})());
}
}));
re_frame.handlers.register_base.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$purge_DASH_redos,(function re_frame$undo$handler(_,___$1){
if(cljs.core.not(re_frame.undo.redos_QMARK_())){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: you did a (dispatch [:purge-redos]), but there is nothing to redo."], 0));
} else {
return re_frame.undo.clear_redos_BANG_();
}
}));
