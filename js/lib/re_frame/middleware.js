// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.middleware');
goog.require('cljs.core');
goog.require('reagent.ratom');
goog.require('re_frame.undo');
goog.require('re_frame.utils');
goog.require('clojure.data');
/**
 * Acts as an adaptor, allowing handlers to be writen as pure functions.
 *   The re-frame router passes the `app-db` atom as the first parameter to any handler.
 *   This middleware adapts that atom to be the value within the atom.
 *   If you strip away the error/efficiency checks, this middleware is doing:
 *   (reset! app-db (handler @app-db event-vec))
 *   You don't have to use this middleware directly. It is automatically applied to
 *   your handler's middleware when you use "register-handler".
 *   In fact, the only way to by-pass automatic use of "pure" in your middleware
 *   is to use the low level registration function "re-frame.handlers/register-base"
 */
re_frame.middleware.pure = (function re_frame$middleware$pure(handler){
return (function re_frame$middleware$pure_$_pure_handler(app_db,event_vec){
if(!(((!((app_db == null)))?(((false) || (app_db.reagent$ratom$IReactiveAtom$))?true:(((!app_db.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,app_db):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IReactiveAtom,app_db)))){
if(cljs.core.map_QMARK_(app_db)){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: Looks like \"pure\" is in the middleware pipeline twice. Ignoring."], 0));
} else {
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"pure\" middleware not given a Ratom.  Got: ",app_db], 0));
}

return handler;
} else {
var db = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app_db) : cljs.core.deref.call(null,app_db));
var new_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,event_vec) : handler.call(null,db,event_vec));
if((new_db == null)){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: your pure handler returned nil. It should return the new db state."], 0));
} else {
if(!((db === new_db))){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(app_db,new_db) : cljs.core.reset_BANG_.call(null,app_db,new_db));
} else {
return null;
}
}
}
});
});
/**
 * Middleware which catches and prints any handler-generated exceptions to console.
 *   Handlers are called from within a core.async go-loop, and core.async produces
 *   a special kind of hell when in comes to stacktraces. By the time an exception
 *   has passed through a go-loop its stack is mangled beyond repair and you'll
 *   have no idea where the exception was thrown.
 *   So this middleware catches and prints to stacktrace before the core.async sausage
 *   machine has done its work.
 *   
 */
re_frame.middleware.log_ex = (function re_frame$middleware$log_ex(handler){
return (function re_frame$middleware$log_ex_$_log_ex_handler(db,v){
re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: use of \"log-ex\" is deprecated. You don't need it any more IF YOU ARE USING CHROME 44. Chrome now seems to now produce good stack traces."], 0));

try{return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
}catch (e11145){var e = e11145;
console.error(e.stack);

throw e;
}});
});
/**
 * Middleware which logs debug information to js/console for each event.
 *   Includes a clojure.data/diff of the db, before vs after, showing the changes
 *   caused by the event.
 */
re_frame.middleware.debug = (function re_frame$middleware$debug(handler){
return (function re_frame$middleware$debug_$_debug_handler(db,v){
re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame event: ",v], 0));

var new_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
var diff = clojure.data.diff(db,new_db);
re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only before: ",cljs.core.first(diff)], 0));

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["only after : ",cljs.core.second(diff)], 0));

re_frame.utils.groupEnd();

return new_db;
});
});
/**
 * Middleware which removes the first element of v, allowing you to write
 *   more aesthetically pleasing handlers. No leading underscore on the event-v!
 *   Your handlers will look like this:
 *    (defn my-handler
 *      [db [x y z]]    ;; <-- instead of [_ x y z]
 *      ....)
 *   
 */
re_frame.middleware.trim_v = (function re_frame$middleware$trim_v(handler){
return (function re_frame$middleware$trim_v_$_trim_v_handler(db,v){
var G__11152 = db;
var G__11153 = cljs.core.vec(cljs.core.rest(v));
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(G__11152,G__11153) : handler.call(null,G__11152,G__11153));
});
});
/**
 * A middleware factory which supplies a sub-tree of `db` to the handler.
 * Works a bit like update-in. Supplies a narrowed data structure for the handler.
 * Afterwards, grafts the result of the handler back into db.
 * Usage:
 *   (path :some :path)
 *   (path [:some :path])
 *   (path [:some :path] :to :here)
 *   (path [:some :path] [:to] :here)
 *   
 */
re_frame.middleware.path = cljs.core.with_meta((function() { 
var re_frame$middleware$path__delegate = function (args){
var path__$1 = cljs.core.flatten(args);
if(cljs.core.empty_QMARK_(path__$1)){
re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"path\" middleware given no params."], 0));
} else {
}

return ((function (path__$1){
return (function re_frame$middleware$path_$_path_middleware(handler){
return ((function (path__$1){
return (function re_frame$middleware$path_$_path_middleware_$_path_handler(db,v){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db,path__$1,handler,v);
});
;})(path__$1))
});
;})(path__$1))
};
var re_frame$middleware$path = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11154__i = 0, G__11154__a = new Array(arguments.length -  0);
while (G__11154__i < G__11154__a.length) {G__11154__a[G__11154__i] = arguments[G__11154__i + 0]; ++G__11154__i;}
  args = new cljs.core.IndexedSeq(G__11154__a,0);
} 
return re_frame$middleware$path__delegate.call(this,args);};
re_frame$middleware$path.cljs$lang$maxFixedArity = 0;
re_frame$middleware$path.cljs$lang$applyTo = (function (arglist__11155){
var args = cljs.core.seq(arglist__11155);
return re_frame$middleware$path__delegate(args);
});
re_frame$middleware$path.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$path__delegate;
return re_frame$middleware$path;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name,"path"], null));
/**
 * A Middleware factory which stores an undo checkpoint.
 *   "explanation" can be either a string or a function. If it is a
 *   function then must be:  (db event-vec) -> string.
 *   "explanation" can be nil. in which case "" is recorded.
 *   
 */
re_frame.middleware.undoable = cljs.core.with_meta((function re_frame$middleware$undoable(explanation){
return (function re_frame$middleware$undoable_$_undoable_middleware(handler){
return (function re_frame$middleware$undoable_$_undoable_middleware_$_undoable_handler(db,event_vec){
var explanation__$1 = ((cljs.core.fn_QMARK_(explanation))?(explanation.cljs$core$IFn$_invoke$arity$2 ? explanation.cljs$core$IFn$_invoke$arity$2(db,event_vec) : explanation.call(null,db,event_vec)):((typeof explanation === 'string')?explanation:(((explanation == null))?"":re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["re-frame: \"undoable\" middleware given a bad parameter. Got: ",explanation], 0))
)));
re_frame.undo.store_now_BANG_(explanation__$1);

return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,event_vec) : handler.call(null,db,event_vec));
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name,"undoable"], null));
/**
 * Middleware factory which runs a given function "f" in the after position.
 *   "f" is (db v) -> db
 *   Unlike "after" which is about side effects, "enrich" expects f to process and alter
 *   db in some useful way, contributing to the derived data, flowing vibe.
 *   Imagine that todomvc needed to do duplicate detection - if any two todos had
 *   the same text, then highlight their background, and report them in a warning
 *   down the bottom.
 *   Almost any action (edit text, add new todo, remove a todo) requires a
 *   complete reassesment of duplication errors and warnings. Eg: that edit
 *   update might have introduced a new duplicate or removed one. Same with a
 *   todo removal.
 *   And to perform this enrichment, a function has to inspect all the todos,
 *   possibly set flags on each, and set some overall list of duplicates.
 *   And this duplication check might just be one check among many.
 *   "f" would need to be both adding and removing the duplicate warnings.
 *   By applying "f" in middleware, we keep the handlers simple and yet we
 *   ensure this important step is not missed.
 */
re_frame.middleware.enrich = cljs.core.with_meta((function re_frame$middleware$enrich(f){
return (function re_frame$middleware$enrich_$_enrich_middleware(handler){
return (function re_frame$middleware$enrich_$_enrich_middleware_$_enrich_handler(db,v){
var G__11170 = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
var G__11171 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11170,G__11171) : f.call(null,G__11170,G__11171));
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name,"enrich"], null));
/**
 * Middleware factory which runs a function "f" in the "after handler"
 *   position presumably for side effects.
 *   "f" is given the new value of "db". It's return value is ignored.
 *   Examples: "f" can run schema validation. Or write current state to localstorage. etc.
 *   In effect, "f" is meant to sideeffect. It gets no chance to change db. See "enrich"
 *   (if you need that.)
 */
re_frame.middleware.after = cljs.core.with_meta((function re_frame$middleware$after(f){
return (function re_frame$middleware$after_$_after_middleware(handler){
return (function re_frame$middleware$after_$_after_middleware_$_after_handler(db,v){
var new_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(new_db,v) : f.call(null,new_db,v));

return new_db;
});
});
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name,"after"], null));
/**
 * Middleware factory which acts a bit like "reaction"  (but it flows into db , rather than out)
 *   It observes N  inputs (paths into db) and if any of them change (as a result of the
 *   handler being run) then it runs 'f' to compute a new value, which is
 *   then assoced into the given out-path within app-db.
 * 
 *   Usage:
 * 
 *   (defn my-f
 *  [a-val b-val]
 *  ... some computation on a and b in here)
 * 
 *   (on-changes my-f [:c]  [:a] [:b])
 * 
 *   Put the middlware above on the right handlers (ones which might change :a or :b).
 *   It will:
 *   - call 'f' each time the value at path [:a] or [:b] changes
 *   - call 'f' with the values extracted from [:a] [:b]
 *   - assoc the return value from 'f' into the path  [:c]
 *   
 */
re_frame.middleware.on_changes = cljs.core.with_meta((function() { 
var re_frame$middleware$on_changes__delegate = function (f,out_path,in_paths){
return (function re_frame$middleware$on_changes_$_on_changed_middleware(handler){
return (function re_frame$middleware$on_changes_$_on_changed_middleware_$_on_changed_handler(db,v){
var new_db = (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,v) : handler.call(null,db,v));
var new_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db){
return (function (p1__11172_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_db,p1__11172_SHARP_);
});})(new_db))
,in_paths);
var old_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (new_db,new_ins){
return (function (p1__11173_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,p1__11173_SHARP_);
});})(new_db,new_ins))
,in_paths);
var changed_ins_QMARK_ = cljs.core.some(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.identical_QMARK_,new_ins,old_ins));
if(cljs.core.truth_(changed_ins_QMARK_)){
return cljs.core.assoc_in(new_db,out_path,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,new_ins));
} else {
return new_db;
}
});
});
};
var re_frame$middleware$on_changes = function (f,out_path,var_args){
var in_paths = null;
if (arguments.length > 2) {
var G__11174__i = 0, G__11174__a = new Array(arguments.length -  2);
while (G__11174__i < G__11174__a.length) {G__11174__a[G__11174__i] = arguments[G__11174__i + 2]; ++G__11174__i;}
  in_paths = new cljs.core.IndexedSeq(G__11174__a,0);
} 
return re_frame$middleware$on_changes__delegate.call(this,f,out_path,in_paths);};
re_frame$middleware$on_changes.cljs$lang$maxFixedArity = 2;
re_frame$middleware$on_changes.cljs$lang$applyTo = (function (arglist__11175){
var f = cljs.core.first(arglist__11175);
arglist__11175 = cljs.core.next(arglist__11175);
var out_path = cljs.core.first(arglist__11175);
var in_paths = cljs.core.rest(arglist__11175);
return re_frame$middleware$on_changes__delegate(f,out_path,in_paths);
});
re_frame$middleware$on_changes.cljs$core$IFn$_invoke$arity$variadic = re_frame$middleware$on_changes__delegate;
return re_frame$middleware$on_changes;
})()
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$re_DASH_frame_DASH_factory_DASH_name,"on-changes"], null));
