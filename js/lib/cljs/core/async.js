// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20534 = [];
var len__17956__auto___20540 = arguments.length;
var i__17957__auto___20541 = (0);
while(true){
if((i__17957__auto___20541 < len__17956__auto___20540)){
args20534.push((arguments[i__17957__auto___20541]));

var G__20542 = (i__17957__auto___20541 + (1));
i__17957__auto___20541 = G__20542;
continue;
} else {
}
break;
}

var G__20536 = args20534.length;
switch (G__20536) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20534.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20537 = (function (f,blockable,meta20538){
this.f = f;
this.blockable = blockable;
this.meta20538 = meta20538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20539,meta20538__$1){
var self__ = this;
var _20539__$1 = this;
return (new cljs.core.async.t_cljs$core$async20537(self__.f,self__.blockable,meta20538__$1));
});

cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20539){
var self__ = this;
var _20539__$1 = this;
return self__.meta20538;
});

cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20538","meta20538",-1056122890,null)], null);
});

cljs.core.async.t_cljs$core$async20537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20537";

cljs.core.async.t_cljs$core$async20537.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async20537");
});

cljs.core.async.__GT_t_cljs$core$async20537 = (function cljs$core$async$__GT_t_cljs$core$async20537(f__$1,blockable__$1,meta20538){
return (new cljs.core.async.t_cljs$core$async20537(f__$1,blockable__$1,meta20538));
});

}

return (new cljs.core.async.t_cljs$core$async20537(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20546 = [];
var len__17956__auto___20549 = arguments.length;
var i__17957__auto___20550 = (0);
while(true){
if((i__17957__auto___20550 < len__17956__auto___20549)){
args20546.push((arguments[i__17957__auto___20550]));

var G__20551 = (i__17957__auto___20550 + (1));
i__17957__auto___20550 = G__20551;
continue;
} else {
}
break;
}

var G__20548 = args20546.length;
switch (G__20548) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20546.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20553 = [];
var len__17956__auto___20556 = arguments.length;
var i__17957__auto___20557 = (0);
while(true){
if((i__17957__auto___20557 < len__17956__auto___20556)){
args20553.push((arguments[i__17957__auto___20557]));

var G__20558 = (i__17957__auto___20557 + (1));
i__17957__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var G__20555 = args20553.length;
switch (G__20555) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20553.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20560 = [];
var len__17956__auto___20563 = arguments.length;
var i__17957__auto___20564 = (0);
while(true){
if((i__17957__auto___20564 < len__17956__auto___20563)){
args20560.push((arguments[i__17957__auto___20564]));

var G__20565 = (i__17957__auto___20564 + (1));
i__17957__auto___20564 = G__20565;
continue;
} else {
}
break;
}

var G__20562 = args20560.length;
switch (G__20562) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20560.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20567 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20567);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20567,ret){
return (function (){
return fn1.call(null,val_20567);
});})(val_20567,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20568 = [];
var len__17956__auto___20571 = arguments.length;
var i__17957__auto___20572 = (0);
while(true){
if((i__17957__auto___20572 < len__17956__auto___20571)){
args20568.push((arguments[i__17957__auto___20572]));

var G__20573 = (i__17957__auto___20572 + (1));
i__17957__auto___20572 = G__20573;
continue;
} else {
}
break;
}

var G__20570 = args20568.length;
switch (G__20570) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20568.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17801__auto___20575 = n;
var x_20576 = (0);
while(true){
if((x_20576 < n__17801__auto___20575)){
(a[x_20576] = (0));

var G__20577 = (x_20576 + (1));
x_20576 = G__20577;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20578 = (i + (1));
i = G__20578;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20582 = (function (alt_flag,flag,meta20583){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20583 = meta20583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20584,meta20583__$1){
var self__ = this;
var _20584__$1 = this;
return (new cljs.core.async.t_cljs$core$async20582(self__.alt_flag,self__.flag,meta20583__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20584){
var self__ = this;
var _20584__$1 = this;
return self__.meta20583;
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20583","meta20583",-1539570619,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20582";

cljs.core.async.t_cljs$core$async20582.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async20582");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20582 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20582(alt_flag__$1,flag__$1,meta20583){
return (new cljs.core.async.t_cljs$core$async20582(alt_flag__$1,flag__$1,meta20583));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20582(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20588 = (function (alt_handler,flag,cb,meta20589){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20589 = meta20589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20590,meta20589__$1){
var self__ = this;
var _20590__$1 = this;
return (new cljs.core.async.t_cljs$core$async20588(self__.alt_handler,self__.flag,self__.cb,meta20589__$1));
});

cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20590){
var self__ = this;
var _20590__$1 = this;
return self__.meta20589;
});

cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20589","meta20589",-17628065,null)], null);
});

cljs.core.async.t_cljs$core$async20588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20588";

cljs.core.async.t_cljs$core$async20588.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async20588");
});

cljs.core.async.__GT_t_cljs$core$async20588 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20588(alt_handler__$1,flag__$1,cb__$1,meta20589){
return (new cljs.core.async.t_cljs$core$async20588(alt_handler__$1,flag__$1,cb__$1,meta20589));
});

}

return (new cljs.core.async.t_cljs$core$async20588(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20591_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20591_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20592_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20592_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16898__auto__ = wport;
if(cljs.core.truth_(or__16898__auto__)){
return or__16898__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20593 = (i + (1));
i = G__20593;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16898__auto__ = ret;
if(cljs.core.truth_(or__16898__auto__)){
return or__16898__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16886__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16886__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16886__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17963__auto__ = [];
var len__17956__auto___20599 = arguments.length;
var i__17957__auto___20600 = (0);
while(true){
if((i__17957__auto___20600 < len__17956__auto___20599)){
args__17963__auto__.push((arguments[i__17957__auto___20600]));

var G__20601 = (i__17957__auto___20600 + (1));
i__17957__auto___20600 = G__20601;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((1) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17964__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20596){
var map__20597 = p__20596;
var map__20597__$1 = ((((!((map__20597 == null)))?((((map__20597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20597):map__20597);
var opts = map__20597__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20594){
var G__20595 = cljs.core.first.call(null,seq20594);
var seq20594__$1 = cljs.core.next.call(null,seq20594);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20595,seq20594__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20602 = [];
var len__17956__auto___20652 = arguments.length;
var i__17957__auto___20653 = (0);
while(true){
if((i__17957__auto___20653 < len__17956__auto___20652)){
args20602.push((arguments[i__17957__auto___20653]));

var G__20654 = (i__17957__auto___20653 + (1));
i__17957__auto___20653 = G__20654;
continue;
} else {
}
break;
}

var G__20604 = args20602.length;
switch (G__20604) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20602.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20489__auto___20656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___20656){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___20656){
return (function (state_20628){
var state_val_20629 = (state_20628[(1)]);
if((state_val_20629 === (7))){
var inst_20624 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20630_20657 = state_20628__$1;
(statearr_20630_20657[(2)] = inst_20624);

(statearr_20630_20657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (1))){
var state_20628__$1 = state_20628;
var statearr_20631_20658 = state_20628__$1;
(statearr_20631_20658[(2)] = null);

(statearr_20631_20658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (4))){
var inst_20607 = (state_20628[(7)]);
var inst_20607__$1 = (state_20628[(2)]);
var inst_20608 = (inst_20607__$1 == null);
var state_20628__$1 = (function (){var statearr_20632 = state_20628;
(statearr_20632[(7)] = inst_20607__$1);

return statearr_20632;
})();
if(cljs.core.truth_(inst_20608)){
var statearr_20633_20659 = state_20628__$1;
(statearr_20633_20659[(1)] = (5));

} else {
var statearr_20634_20660 = state_20628__$1;
(statearr_20634_20660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (13))){
var state_20628__$1 = state_20628;
var statearr_20635_20661 = state_20628__$1;
(statearr_20635_20661[(2)] = null);

(statearr_20635_20661[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (6))){
var inst_20607 = (state_20628[(7)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20628__$1,(11),to,inst_20607);
} else {
if((state_val_20629 === (3))){
var inst_20626 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20628__$1,inst_20626);
} else {
if((state_val_20629 === (12))){
var state_20628__$1 = state_20628;
var statearr_20636_20662 = state_20628__$1;
(statearr_20636_20662[(2)] = null);

(statearr_20636_20662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (2))){
var state_20628__$1 = state_20628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20628__$1,(4),from);
} else {
if((state_val_20629 === (11))){
var inst_20617 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
if(cljs.core.truth_(inst_20617)){
var statearr_20637_20663 = state_20628__$1;
(statearr_20637_20663[(1)] = (12));

} else {
var statearr_20638_20664 = state_20628__$1;
(statearr_20638_20664[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (9))){
var state_20628__$1 = state_20628;
var statearr_20639_20665 = state_20628__$1;
(statearr_20639_20665[(2)] = null);

(statearr_20639_20665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (5))){
var state_20628__$1 = state_20628;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20640_20666 = state_20628__$1;
(statearr_20640_20666[(1)] = (8));

} else {
var statearr_20641_20667 = state_20628__$1;
(statearr_20641_20667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (14))){
var inst_20622 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20642_20668 = state_20628__$1;
(statearr_20642_20668[(2)] = inst_20622);

(statearr_20642_20668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (10))){
var inst_20614 = (state_20628[(2)]);
var state_20628__$1 = state_20628;
var statearr_20643_20669 = state_20628__$1;
(statearr_20643_20669[(2)] = inst_20614);

(statearr_20643_20669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20629 === (8))){
var inst_20611 = cljs.core.async.close_BANG_.call(null,to);
var state_20628__$1 = state_20628;
var statearr_20644_20670 = state_20628__$1;
(statearr_20644_20670[(2)] = inst_20611);

(statearr_20644_20670[(1)] = (10));


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
});})(c__20489__auto___20656))
;
return ((function (switch__20377__auto__,c__20489__auto___20656){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_20648 = [null,null,null,null,null,null,null,null];
(statearr_20648[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_20648[(1)] = (1));

return statearr_20648;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_20628){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_20628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e20649){if((e20649 instanceof Object)){
var ex__20381__auto__ = e20649;
var statearr_20650_20671 = state_20628;
(statearr_20650_20671[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20672 = state_20628;
state_20628 = G__20672;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_20628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_20628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___20656))
})();
var state__20491__auto__ = (function (){var statearr_20651 = f__20490__auto__.call(null);
(statearr_20651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___20656);

return statearr_20651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___20656))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__20856){
var vec__20857 = p__20856;
var v = cljs.core.nth.call(null,vec__20857,(0),null);
var p = cljs.core.nth.call(null,vec__20857,(1),null);
var job = vec__20857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20489__auto___21039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results){
return (function (state_20862){
var state_val_20863 = (state_20862[(1)]);
if((state_val_20863 === (1))){
var state_20862__$1 = state_20862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20862__$1,(2),res,v);
} else {
if((state_val_20863 === (2))){
var inst_20859 = (state_20862[(2)]);
var inst_20860 = cljs.core.async.close_BANG_.call(null,res);
var state_20862__$1 = (function (){var statearr_20864 = state_20862;
(statearr_20864[(7)] = inst_20859);

return statearr_20864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20862__$1,inst_20860);
} else {
return null;
}
}
});})(c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results))
;
return ((function (switch__20377__auto__,c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_20868 = [null,null,null,null,null,null,null,null];
(statearr_20868[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__);

(statearr_20868[(1)] = (1));

return statearr_20868;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1 = (function (state_20862){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_20862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e20869){if((e20869 instanceof Object)){
var ex__20381__auto__ = e20869;
var statearr_20870_21040 = state_20862;
(statearr_20870_21040[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21041 = state_20862;
state_20862 = G__21041;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = function(state_20862){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1.call(this,state_20862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results))
})();
var state__20491__auto__ = (function (){var statearr_20871 = f__20490__auto__.call(null);
(statearr_20871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21039);

return statearr_20871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___21039,res,vec__20857,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20872){
var vec__20873 = p__20872;
var v = cljs.core.nth.call(null,vec__20873,(0),null);
var p = cljs.core.nth.call(null,vec__20873,(1),null);
var job = vec__20873;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17801__auto___21042 = n;
var __21043 = (0);
while(true){
if((__21043 < n__17801__auto___21042)){
var G__20874_21044 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20874_21044) {
case "compute":
var c__20489__auto___21046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21043,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (__21043,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function (state_20887){
var state_val_20888 = (state_20887[(1)]);
if((state_val_20888 === (1))){
var state_20887__$1 = state_20887;
var statearr_20889_21047 = state_20887__$1;
(statearr_20889_21047[(2)] = null);

(statearr_20889_21047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20888 === (2))){
var state_20887__$1 = state_20887;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20887__$1,(4),jobs);
} else {
if((state_val_20888 === (3))){
var inst_20885 = (state_20887[(2)]);
var state_20887__$1 = state_20887;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20887__$1,inst_20885);
} else {
if((state_val_20888 === (4))){
var inst_20877 = (state_20887[(2)]);
var inst_20878 = process.call(null,inst_20877);
var state_20887__$1 = state_20887;
if(cljs.core.truth_(inst_20878)){
var statearr_20890_21048 = state_20887__$1;
(statearr_20890_21048[(1)] = (5));

} else {
var statearr_20891_21049 = state_20887__$1;
(statearr_20891_21049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20888 === (5))){
var state_20887__$1 = state_20887;
var statearr_20892_21050 = state_20887__$1;
(statearr_20892_21050[(2)] = null);

(statearr_20892_21050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20888 === (6))){
var state_20887__$1 = state_20887;
var statearr_20893_21051 = state_20887__$1;
(statearr_20893_21051[(2)] = null);

(statearr_20893_21051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20888 === (7))){
var inst_20883 = (state_20887[(2)]);
var state_20887__$1 = state_20887;
var statearr_20894_21052 = state_20887__$1;
(statearr_20894_21052[(2)] = inst_20883);

(statearr_20894_21052[(1)] = (3));


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
});})(__21043,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
;
return ((function (__21043,switch__20377__auto__,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_20898 = [null,null,null,null,null,null,null];
(statearr_20898[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__);

(statearr_20898[(1)] = (1));

return statearr_20898;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1 = (function (state_20887){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_20887);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e20899){if((e20899 instanceof Object)){
var ex__20381__auto__ = e20899;
var statearr_20900_21053 = state_20887;
(statearr_20900_21053[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20887);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21054 = state_20887;
state_20887 = G__21054;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = function(state_20887){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1.call(this,state_20887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__;
})()
;})(__21043,switch__20377__auto__,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
})();
var state__20491__auto__ = (function (){var statearr_20901 = f__20490__auto__.call(null);
(statearr_20901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21046);

return statearr_20901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(__21043,c__20489__auto___21046,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
);


break;
case "async":
var c__20489__auto___21055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21043,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (__21043,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function (state_20914){
var state_val_20915 = (state_20914[(1)]);
if((state_val_20915 === (1))){
var state_20914__$1 = state_20914;
var statearr_20916_21056 = state_20914__$1;
(statearr_20916_21056[(2)] = null);

(statearr_20916_21056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (2))){
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20914__$1,(4),jobs);
} else {
if((state_val_20915 === (3))){
var inst_20912 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20914__$1,inst_20912);
} else {
if((state_val_20915 === (4))){
var inst_20904 = (state_20914[(2)]);
var inst_20905 = async.call(null,inst_20904);
var state_20914__$1 = state_20914;
if(cljs.core.truth_(inst_20905)){
var statearr_20917_21057 = state_20914__$1;
(statearr_20917_21057[(1)] = (5));

} else {
var statearr_20918_21058 = state_20914__$1;
(statearr_20918_21058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (5))){
var state_20914__$1 = state_20914;
var statearr_20919_21059 = state_20914__$1;
(statearr_20919_21059[(2)] = null);

(statearr_20919_21059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (6))){
var state_20914__$1 = state_20914;
var statearr_20920_21060 = state_20914__$1;
(statearr_20920_21060[(2)] = null);

(statearr_20920_21060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20915 === (7))){
var inst_20910 = (state_20914[(2)]);
var state_20914__$1 = state_20914;
var statearr_20921_21061 = state_20914__$1;
(statearr_20921_21061[(2)] = inst_20910);

(statearr_20921_21061[(1)] = (3));


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
});})(__21043,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
;
return ((function (__21043,switch__20377__auto__,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_20925 = [null,null,null,null,null,null,null];
(statearr_20925[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__);

(statearr_20925[(1)] = (1));

return statearr_20925;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1 = (function (state_20914){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_20914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e20926){if((e20926 instanceof Object)){
var ex__20381__auto__ = e20926;
var statearr_20927_21062 = state_20914;
(statearr_20927_21062[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21063 = state_20914;
state_20914 = G__21063;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = function(state_20914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1.call(this,state_20914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__;
})()
;})(__21043,switch__20377__auto__,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
})();
var state__20491__auto__ = (function (){var statearr_20928 = f__20490__auto__.call(null);
(statearr_20928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21055);

return statearr_20928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(__21043,c__20489__auto___21055,G__20874_21044,n__17801__auto___21042,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21064 = (__21043 + (1));
__21043 = G__21064;
continue;
} else {
}
break;
}

var c__20489__auto___21065 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___21065,jobs,results,process,async){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___21065,jobs,results,process,async){
return (function (state_20950){
var state_val_20951 = (state_20950[(1)]);
if((state_val_20951 === (1))){
var state_20950__$1 = state_20950;
var statearr_20952_21066 = state_20950__$1;
(statearr_20952_21066[(2)] = null);

(statearr_20952_21066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (2))){
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20950__$1,(4),from);
} else {
if((state_val_20951 === (3))){
var inst_20948 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20950__$1,inst_20948);
} else {
if((state_val_20951 === (4))){
var inst_20931 = (state_20950[(7)]);
var inst_20931__$1 = (state_20950[(2)]);
var inst_20932 = (inst_20931__$1 == null);
var state_20950__$1 = (function (){var statearr_20953 = state_20950;
(statearr_20953[(7)] = inst_20931__$1);

return statearr_20953;
})();
if(cljs.core.truth_(inst_20932)){
var statearr_20954_21067 = state_20950__$1;
(statearr_20954_21067[(1)] = (5));

} else {
var statearr_20955_21068 = state_20950__$1;
(statearr_20955_21068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (5))){
var inst_20934 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20950__$1 = state_20950;
var statearr_20956_21069 = state_20950__$1;
(statearr_20956_21069[(2)] = inst_20934);

(statearr_20956_21069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (6))){
var inst_20936 = (state_20950[(8)]);
var inst_20931 = (state_20950[(7)]);
var inst_20936__$1 = cljs.core.async.chan.call(null,(1));
var inst_20937 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20938 = [inst_20931,inst_20936__$1];
var inst_20939 = (new cljs.core.PersistentVector(null,2,(5),inst_20937,inst_20938,null));
var state_20950__$1 = (function (){var statearr_20957 = state_20950;
(statearr_20957[(8)] = inst_20936__$1);

return statearr_20957;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20950__$1,(8),jobs,inst_20939);
} else {
if((state_val_20951 === (7))){
var inst_20946 = (state_20950[(2)]);
var state_20950__$1 = state_20950;
var statearr_20958_21070 = state_20950__$1;
(statearr_20958_21070[(2)] = inst_20946);

(statearr_20958_21070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20951 === (8))){
var inst_20936 = (state_20950[(8)]);
var inst_20941 = (state_20950[(2)]);
var state_20950__$1 = (function (){var statearr_20959 = state_20950;
(statearr_20959[(9)] = inst_20941);

return statearr_20959;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20950__$1,(9),results,inst_20936);
} else {
if((state_val_20951 === (9))){
var inst_20943 = (state_20950[(2)]);
var state_20950__$1 = (function (){var statearr_20960 = state_20950;
(statearr_20960[(10)] = inst_20943);

return statearr_20960;
})();
var statearr_20961_21071 = state_20950__$1;
(statearr_20961_21071[(2)] = null);

(statearr_20961_21071[(1)] = (2));


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
});})(c__20489__auto___21065,jobs,results,process,async))
;
return ((function (switch__20377__auto__,c__20489__auto___21065,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_20965 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20965[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__);

(statearr_20965[(1)] = (1));

return statearr_20965;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1 = (function (state_20950){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_20950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e20966){if((e20966 instanceof Object)){
var ex__20381__auto__ = e20966;
var statearr_20967_21072 = state_20950;
(statearr_20967_21072[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21073 = state_20950;
state_20950 = G__21073;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = function(state_20950){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1.call(this,state_20950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___21065,jobs,results,process,async))
})();
var state__20491__auto__ = (function (){var statearr_20968 = f__20490__auto__.call(null);
(statearr_20968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21065);

return statearr_20968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___21065,jobs,results,process,async))
);


var c__20489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto__,jobs,results,process,async){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto__,jobs,results,process,async){
return (function (state_21006){
var state_val_21007 = (state_21006[(1)]);
if((state_val_21007 === (7))){
var inst_21002 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21008_21074 = state_21006__$1;
(statearr_21008_21074[(2)] = inst_21002);

(statearr_21008_21074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (20))){
var state_21006__$1 = state_21006;
var statearr_21009_21075 = state_21006__$1;
(statearr_21009_21075[(2)] = null);

(statearr_21009_21075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (1))){
var state_21006__$1 = state_21006;
var statearr_21010_21076 = state_21006__$1;
(statearr_21010_21076[(2)] = null);

(statearr_21010_21076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (4))){
var inst_20971 = (state_21006[(7)]);
var inst_20971__$1 = (state_21006[(2)]);
var inst_20972 = (inst_20971__$1 == null);
var state_21006__$1 = (function (){var statearr_21011 = state_21006;
(statearr_21011[(7)] = inst_20971__$1);

return statearr_21011;
})();
if(cljs.core.truth_(inst_20972)){
var statearr_21012_21077 = state_21006__$1;
(statearr_21012_21077[(1)] = (5));

} else {
var statearr_21013_21078 = state_21006__$1;
(statearr_21013_21078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (15))){
var inst_20984 = (state_21006[(8)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21006__$1,(18),to,inst_20984);
} else {
if((state_val_21007 === (21))){
var inst_20997 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21014_21079 = state_21006__$1;
(statearr_21014_21079[(2)] = inst_20997);

(statearr_21014_21079[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (13))){
var inst_20999 = (state_21006[(2)]);
var state_21006__$1 = (function (){var statearr_21015 = state_21006;
(statearr_21015[(9)] = inst_20999);

return statearr_21015;
})();
var statearr_21016_21080 = state_21006__$1;
(statearr_21016_21080[(2)] = null);

(statearr_21016_21080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (6))){
var inst_20971 = (state_21006[(7)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(11),inst_20971);
} else {
if((state_val_21007 === (17))){
var inst_20992 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
if(cljs.core.truth_(inst_20992)){
var statearr_21017_21081 = state_21006__$1;
(statearr_21017_21081[(1)] = (19));

} else {
var statearr_21018_21082 = state_21006__$1;
(statearr_21018_21082[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (3))){
var inst_21004 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21006__$1,inst_21004);
} else {
if((state_val_21007 === (12))){
var inst_20981 = (state_21006[(10)]);
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(14),inst_20981);
} else {
if((state_val_21007 === (2))){
var state_21006__$1 = state_21006;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21006__$1,(4),results);
} else {
if((state_val_21007 === (19))){
var state_21006__$1 = state_21006;
var statearr_21019_21083 = state_21006__$1;
(statearr_21019_21083[(2)] = null);

(statearr_21019_21083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (11))){
var inst_20981 = (state_21006[(2)]);
var state_21006__$1 = (function (){var statearr_21020 = state_21006;
(statearr_21020[(10)] = inst_20981);

return statearr_21020;
})();
var statearr_21021_21084 = state_21006__$1;
(statearr_21021_21084[(2)] = null);

(statearr_21021_21084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (9))){
var state_21006__$1 = state_21006;
var statearr_21022_21085 = state_21006__$1;
(statearr_21022_21085[(2)] = null);

(statearr_21022_21085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (5))){
var state_21006__$1 = state_21006;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21023_21086 = state_21006__$1;
(statearr_21023_21086[(1)] = (8));

} else {
var statearr_21024_21087 = state_21006__$1;
(statearr_21024_21087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (14))){
var inst_20984 = (state_21006[(8)]);
var inst_20986 = (state_21006[(11)]);
var inst_20984__$1 = (state_21006[(2)]);
var inst_20985 = (inst_20984__$1 == null);
var inst_20986__$1 = cljs.core.not.call(null,inst_20985);
var state_21006__$1 = (function (){var statearr_21025 = state_21006;
(statearr_21025[(8)] = inst_20984__$1);

(statearr_21025[(11)] = inst_20986__$1);

return statearr_21025;
})();
if(inst_20986__$1){
var statearr_21026_21088 = state_21006__$1;
(statearr_21026_21088[(1)] = (15));

} else {
var statearr_21027_21089 = state_21006__$1;
(statearr_21027_21089[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (16))){
var inst_20986 = (state_21006[(11)]);
var state_21006__$1 = state_21006;
var statearr_21028_21090 = state_21006__$1;
(statearr_21028_21090[(2)] = inst_20986);

(statearr_21028_21090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (10))){
var inst_20978 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21029_21091 = state_21006__$1;
(statearr_21029_21091[(2)] = inst_20978);

(statearr_21029_21091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (18))){
var inst_20989 = (state_21006[(2)]);
var state_21006__$1 = state_21006;
var statearr_21030_21092 = state_21006__$1;
(statearr_21030_21092[(2)] = inst_20989);

(statearr_21030_21092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21007 === (8))){
var inst_20975 = cljs.core.async.close_BANG_.call(null,to);
var state_21006__$1 = state_21006;
var statearr_21031_21093 = state_21006__$1;
(statearr_21031_21093[(2)] = inst_20975);

(statearr_21031_21093[(1)] = (10));


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
});})(c__20489__auto__,jobs,results,process,async))
;
return ((function (switch__20377__auto__,c__20489__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_21035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__);

(statearr_21035[(1)] = (1));

return statearr_21035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1 = (function (state_21006){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_21006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e21036){if((e21036 instanceof Object)){
var ex__20381__auto__ = e21036;
var statearr_21037_21094 = state_21006;
(statearr_21037_21094[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21095 = state_21006;
state_21006 = G__21095;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__ = function(state_21006){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1.call(this,state_21006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto__,jobs,results,process,async))
})();
var state__20491__auto__ = (function (){var statearr_21038 = f__20490__auto__.call(null);
(statearr_21038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto__);

return statearr_21038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto__,jobs,results,process,async))
);

return c__20489__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21096 = [];
var len__17956__auto___21099 = arguments.length;
var i__17957__auto___21100 = (0);
while(true){
if((i__17957__auto___21100 < len__17956__auto___21099)){
args21096.push((arguments[i__17957__auto___21100]));

var G__21101 = (i__17957__auto___21100 + (1));
i__17957__auto___21100 = G__21101;
continue;
} else {
}
break;
}

var G__21098 = args21096.length;
switch (G__21098) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21096.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21103 = [];
var len__17956__auto___21106 = arguments.length;
var i__17957__auto___21107 = (0);
while(true){
if((i__17957__auto___21107 < len__17956__auto___21106)){
args21103.push((arguments[i__17957__auto___21107]));

var G__21108 = (i__17957__auto___21107 + (1));
i__17957__auto___21107 = G__21108;
continue;
} else {
}
break;
}

var G__21105 = args21103.length;
switch (G__21105) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21103.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21110 = [];
var len__17956__auto___21163 = arguments.length;
var i__17957__auto___21164 = (0);
while(true){
if((i__17957__auto___21164 < len__17956__auto___21163)){
args21110.push((arguments[i__17957__auto___21164]));

var G__21165 = (i__17957__auto___21164 + (1));
i__17957__auto___21164 = G__21165;
continue;
} else {
}
break;
}

var G__21112 = args21110.length;
switch (G__21112) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21110.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20489__auto___21167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___21167,tc,fc){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___21167,tc,fc){
return (function (state_21138){
var state_val_21139 = (state_21138[(1)]);
if((state_val_21139 === (7))){
var inst_21134 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
var statearr_21140_21168 = state_21138__$1;
(statearr_21140_21168[(2)] = inst_21134);

(statearr_21140_21168[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (1))){
var state_21138__$1 = state_21138;
var statearr_21141_21169 = state_21138__$1;
(statearr_21141_21169[(2)] = null);

(statearr_21141_21169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (4))){
var inst_21115 = (state_21138[(7)]);
var inst_21115__$1 = (state_21138[(2)]);
var inst_21116 = (inst_21115__$1 == null);
var state_21138__$1 = (function (){var statearr_21142 = state_21138;
(statearr_21142[(7)] = inst_21115__$1);

return statearr_21142;
})();
if(cljs.core.truth_(inst_21116)){
var statearr_21143_21170 = state_21138__$1;
(statearr_21143_21170[(1)] = (5));

} else {
var statearr_21144_21171 = state_21138__$1;
(statearr_21144_21171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (13))){
var state_21138__$1 = state_21138;
var statearr_21145_21172 = state_21138__$1;
(statearr_21145_21172[(2)] = null);

(statearr_21145_21172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (6))){
var inst_21115 = (state_21138[(7)]);
var inst_21121 = p.call(null,inst_21115);
var state_21138__$1 = state_21138;
if(cljs.core.truth_(inst_21121)){
var statearr_21146_21173 = state_21138__$1;
(statearr_21146_21173[(1)] = (9));

} else {
var statearr_21147_21174 = state_21138__$1;
(statearr_21147_21174[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (3))){
var inst_21136 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21138__$1,inst_21136);
} else {
if((state_val_21139 === (12))){
var state_21138__$1 = state_21138;
var statearr_21148_21175 = state_21138__$1;
(statearr_21148_21175[(2)] = null);

(statearr_21148_21175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (2))){
var state_21138__$1 = state_21138;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21138__$1,(4),ch);
} else {
if((state_val_21139 === (11))){
var inst_21115 = (state_21138[(7)]);
var inst_21125 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21138__$1,(8),inst_21125,inst_21115);
} else {
if((state_val_21139 === (9))){
var state_21138__$1 = state_21138;
var statearr_21149_21176 = state_21138__$1;
(statearr_21149_21176[(2)] = tc);

(statearr_21149_21176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (5))){
var inst_21118 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21119 = cljs.core.async.close_BANG_.call(null,fc);
var state_21138__$1 = (function (){var statearr_21150 = state_21138;
(statearr_21150[(8)] = inst_21118);

return statearr_21150;
})();
var statearr_21151_21177 = state_21138__$1;
(statearr_21151_21177[(2)] = inst_21119);

(statearr_21151_21177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (14))){
var inst_21132 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
var statearr_21152_21178 = state_21138__$1;
(statearr_21152_21178[(2)] = inst_21132);

(statearr_21152_21178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (10))){
var state_21138__$1 = state_21138;
var statearr_21153_21179 = state_21138__$1;
(statearr_21153_21179[(2)] = fc);

(statearr_21153_21179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21139 === (8))){
var inst_21127 = (state_21138[(2)]);
var state_21138__$1 = state_21138;
if(cljs.core.truth_(inst_21127)){
var statearr_21154_21180 = state_21138__$1;
(statearr_21154_21180[(1)] = (12));

} else {
var statearr_21155_21181 = state_21138__$1;
(statearr_21155_21181[(1)] = (13));

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
});})(c__20489__auto___21167,tc,fc))
;
return ((function (switch__20377__auto__,c__20489__auto___21167,tc,fc){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_21159 = [null,null,null,null,null,null,null,null,null];
(statearr_21159[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_21159[(1)] = (1));

return statearr_21159;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_21138){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_21138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e21160){if((e21160 instanceof Object)){
var ex__20381__auto__ = e21160;
var statearr_21161_21182 = state_21138;
(statearr_21161_21182[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21183 = state_21138;
state_21138 = G__21183;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_21138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_21138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___21167,tc,fc))
})();
var state__20491__auto__ = (function (){var statearr_21162 = f__20490__auto__.call(null);
(statearr_21162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21167);

return statearr_21162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___21167,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto__){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto__){
return (function (state_21247){
var state_val_21248 = (state_21247[(1)]);
if((state_val_21248 === (7))){
var inst_21243 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
var statearr_21249_21270 = state_21247__$1;
(statearr_21249_21270[(2)] = inst_21243);

(statearr_21249_21270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (1))){
var inst_21227 = init;
var state_21247__$1 = (function (){var statearr_21250 = state_21247;
(statearr_21250[(7)] = inst_21227);

return statearr_21250;
})();
var statearr_21251_21271 = state_21247__$1;
(statearr_21251_21271[(2)] = null);

(statearr_21251_21271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (4))){
var inst_21230 = (state_21247[(8)]);
var inst_21230__$1 = (state_21247[(2)]);
var inst_21231 = (inst_21230__$1 == null);
var state_21247__$1 = (function (){var statearr_21252 = state_21247;
(statearr_21252[(8)] = inst_21230__$1);

return statearr_21252;
})();
if(cljs.core.truth_(inst_21231)){
var statearr_21253_21272 = state_21247__$1;
(statearr_21253_21272[(1)] = (5));

} else {
var statearr_21254_21273 = state_21247__$1;
(statearr_21254_21273[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (6))){
var inst_21227 = (state_21247[(7)]);
var inst_21234 = (state_21247[(9)]);
var inst_21230 = (state_21247[(8)]);
var inst_21234__$1 = f.call(null,inst_21227,inst_21230);
var inst_21235 = cljs.core.reduced_QMARK_.call(null,inst_21234__$1);
var state_21247__$1 = (function (){var statearr_21255 = state_21247;
(statearr_21255[(9)] = inst_21234__$1);

return statearr_21255;
})();
if(inst_21235){
var statearr_21256_21274 = state_21247__$1;
(statearr_21256_21274[(1)] = (8));

} else {
var statearr_21257_21275 = state_21247__$1;
(statearr_21257_21275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (3))){
var inst_21245 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21247__$1,inst_21245);
} else {
if((state_val_21248 === (2))){
var state_21247__$1 = state_21247;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21247__$1,(4),ch);
} else {
if((state_val_21248 === (9))){
var inst_21234 = (state_21247[(9)]);
var inst_21227 = inst_21234;
var state_21247__$1 = (function (){var statearr_21258 = state_21247;
(statearr_21258[(7)] = inst_21227);

return statearr_21258;
})();
var statearr_21259_21276 = state_21247__$1;
(statearr_21259_21276[(2)] = null);

(statearr_21259_21276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (5))){
var inst_21227 = (state_21247[(7)]);
var state_21247__$1 = state_21247;
var statearr_21260_21277 = state_21247__$1;
(statearr_21260_21277[(2)] = inst_21227);

(statearr_21260_21277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (10))){
var inst_21241 = (state_21247[(2)]);
var state_21247__$1 = state_21247;
var statearr_21261_21278 = state_21247__$1;
(statearr_21261_21278[(2)] = inst_21241);

(statearr_21261_21278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21248 === (8))){
var inst_21234 = (state_21247[(9)]);
var inst_21237 = cljs.core.deref.call(null,inst_21234);
var state_21247__$1 = state_21247;
var statearr_21262_21279 = state_21247__$1;
(statearr_21262_21279[(2)] = inst_21237);

(statearr_21262_21279[(1)] = (10));


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
});})(c__20489__auto__))
;
return ((function (switch__20377__auto__,c__20489__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20378__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20378__auto____0 = (function (){
var statearr_21266 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21266[(0)] = cljs$core$async$reduce_$_state_machine__20378__auto__);

(statearr_21266[(1)] = (1));

return statearr_21266;
});
var cljs$core$async$reduce_$_state_machine__20378__auto____1 = (function (state_21247){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_21247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e21267){if((e21267 instanceof Object)){
var ex__20381__auto__ = e21267;
var statearr_21268_21280 = state_21247;
(statearr_21268_21280[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21281 = state_21247;
state_21247 = G__21281;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20378__auto__ = function(state_21247){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20378__auto____1.call(this,state_21247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20378__auto____0;
cljs$core$async$reduce_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20378__auto____1;
return cljs$core$async$reduce_$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto__))
})();
var state__20491__auto__ = (function (){var statearr_21269 = f__20490__auto__.call(null);
(statearr_21269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto__);

return statearr_21269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto__))
);

return c__20489__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21282 = [];
var len__17956__auto___21334 = arguments.length;
var i__17957__auto___21335 = (0);
while(true){
if((i__17957__auto___21335 < len__17956__auto___21334)){
args21282.push((arguments[i__17957__auto___21335]));

var G__21336 = (i__17957__auto___21335 + (1));
i__17957__auto___21335 = G__21336;
continue;
} else {
}
break;
}

var G__21284 = args21282.length;
switch (G__21284) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21282.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto__){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto__){
return (function (state_21309){
var state_val_21310 = (state_21309[(1)]);
if((state_val_21310 === (7))){
var inst_21291 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21311_21338 = state_21309__$1;
(statearr_21311_21338[(2)] = inst_21291);

(statearr_21311_21338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (1))){
var inst_21285 = cljs.core.seq.call(null,coll);
var inst_21286 = inst_21285;
var state_21309__$1 = (function (){var statearr_21312 = state_21309;
(statearr_21312[(7)] = inst_21286);

return statearr_21312;
})();
var statearr_21313_21339 = state_21309__$1;
(statearr_21313_21339[(2)] = null);

(statearr_21313_21339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (4))){
var inst_21286 = (state_21309[(7)]);
var inst_21289 = cljs.core.first.call(null,inst_21286);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21309__$1,(7),ch,inst_21289);
} else {
if((state_val_21310 === (13))){
var inst_21303 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21314_21340 = state_21309__$1;
(statearr_21314_21340[(2)] = inst_21303);

(statearr_21314_21340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (6))){
var inst_21294 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21294)){
var statearr_21315_21341 = state_21309__$1;
(statearr_21315_21341[(1)] = (8));

} else {
var statearr_21316_21342 = state_21309__$1;
(statearr_21316_21342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (3))){
var inst_21307 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21309__$1,inst_21307);
} else {
if((state_val_21310 === (12))){
var state_21309__$1 = state_21309;
var statearr_21317_21343 = state_21309__$1;
(statearr_21317_21343[(2)] = null);

(statearr_21317_21343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (2))){
var inst_21286 = (state_21309[(7)]);
var state_21309__$1 = state_21309;
if(cljs.core.truth_(inst_21286)){
var statearr_21318_21344 = state_21309__$1;
(statearr_21318_21344[(1)] = (4));

} else {
var statearr_21319_21345 = state_21309__$1;
(statearr_21319_21345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (11))){
var inst_21300 = cljs.core.async.close_BANG_.call(null,ch);
var state_21309__$1 = state_21309;
var statearr_21320_21346 = state_21309__$1;
(statearr_21320_21346[(2)] = inst_21300);

(statearr_21320_21346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (9))){
var state_21309__$1 = state_21309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21321_21347 = state_21309__$1;
(statearr_21321_21347[(1)] = (11));

} else {
var statearr_21322_21348 = state_21309__$1;
(statearr_21322_21348[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (5))){
var inst_21286 = (state_21309[(7)]);
var state_21309__$1 = state_21309;
var statearr_21323_21349 = state_21309__$1;
(statearr_21323_21349[(2)] = inst_21286);

(statearr_21323_21349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (10))){
var inst_21305 = (state_21309[(2)]);
var state_21309__$1 = state_21309;
var statearr_21324_21350 = state_21309__$1;
(statearr_21324_21350[(2)] = inst_21305);

(statearr_21324_21350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21310 === (8))){
var inst_21286 = (state_21309[(7)]);
var inst_21296 = cljs.core.next.call(null,inst_21286);
var inst_21286__$1 = inst_21296;
var state_21309__$1 = (function (){var statearr_21325 = state_21309;
(statearr_21325[(7)] = inst_21286__$1);

return statearr_21325;
})();
var statearr_21326_21351 = state_21309__$1;
(statearr_21326_21351[(2)] = null);

(statearr_21326_21351[(1)] = (2));


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
});})(c__20489__auto__))
;
return ((function (switch__20377__auto__,c__20489__auto__){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_21330 = [null,null,null,null,null,null,null,null];
(statearr_21330[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_21330[(1)] = (1));

return statearr_21330;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_21309){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_21309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e21331){if((e21331 instanceof Object)){
var ex__20381__auto__ = e21331;
var statearr_21332_21352 = state_21309;
(statearr_21332_21352[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21353 = state_21309;
state_21309 = G__21353;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_21309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_21309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto__))
})();
var state__20491__auto__ = (function (){var statearr_21333 = f__20490__auto__.call(null);
(statearr_21333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto__);

return statearr_21333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto__))
);

return c__20489__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17553__auto__ = (((_ == null))?null:_);
var m__17554__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,_);
} else {
var m__17554__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17554__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,ch);
} else {
var m__17554__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m);
} else {
var m__17554__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21575 = (function (mult,ch,cs,meta21576){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21576 = meta21576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21577,meta21576__$1){
var self__ = this;
var _21577__$1 = this;
return (new cljs.core.async.t_cljs$core$async21575(self__.mult,self__.ch,self__.cs,meta21576__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21577){
var self__ = this;
var _21577__$1 = this;
return self__.meta21576;
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21576","meta21576",1529136269,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21575";

cljs.core.async.t_cljs$core$async21575.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async21575");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21575 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21575(mult__$1,ch__$1,cs__$1,meta21576){
return (new cljs.core.async.t_cljs$core$async21575(mult__$1,ch__$1,cs__$1,meta21576));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21575(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20489__auto___21796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___21796,cs,m,dchan,dctr,done){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___21796,cs,m,dchan,dctr,done){
return (function (state_21708){
var state_val_21709 = (state_21708[(1)]);
if((state_val_21709 === (7))){
var inst_21704 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21710_21797 = state_21708__$1;
(statearr_21710_21797[(2)] = inst_21704);

(statearr_21710_21797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (20))){
var inst_21609 = (state_21708[(7)]);
var inst_21619 = cljs.core.first.call(null,inst_21609);
var inst_21620 = cljs.core.nth.call(null,inst_21619,(0),null);
var inst_21621 = cljs.core.nth.call(null,inst_21619,(1),null);
var state_21708__$1 = (function (){var statearr_21711 = state_21708;
(statearr_21711[(8)] = inst_21620);

return statearr_21711;
})();
if(cljs.core.truth_(inst_21621)){
var statearr_21712_21798 = state_21708__$1;
(statearr_21712_21798[(1)] = (22));

} else {
var statearr_21713_21799 = state_21708__$1;
(statearr_21713_21799[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (27))){
var inst_21656 = (state_21708[(9)]);
var inst_21649 = (state_21708[(10)]);
var inst_21580 = (state_21708[(11)]);
var inst_21651 = (state_21708[(12)]);
var inst_21656__$1 = cljs.core._nth.call(null,inst_21649,inst_21651);
var inst_21657 = cljs.core.async.put_BANG_.call(null,inst_21656__$1,inst_21580,done);
var state_21708__$1 = (function (){var statearr_21714 = state_21708;
(statearr_21714[(9)] = inst_21656__$1);

return statearr_21714;
})();
if(cljs.core.truth_(inst_21657)){
var statearr_21715_21800 = state_21708__$1;
(statearr_21715_21800[(1)] = (30));

} else {
var statearr_21716_21801 = state_21708__$1;
(statearr_21716_21801[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (1))){
var state_21708__$1 = state_21708;
var statearr_21717_21802 = state_21708__$1;
(statearr_21717_21802[(2)] = null);

(statearr_21717_21802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (24))){
var inst_21609 = (state_21708[(7)]);
var inst_21626 = (state_21708[(2)]);
var inst_21627 = cljs.core.next.call(null,inst_21609);
var inst_21589 = inst_21627;
var inst_21590 = null;
var inst_21591 = (0);
var inst_21592 = (0);
var state_21708__$1 = (function (){var statearr_21718 = state_21708;
(statearr_21718[(13)] = inst_21590);

(statearr_21718[(14)] = inst_21589);

(statearr_21718[(15)] = inst_21592);

(statearr_21718[(16)] = inst_21591);

(statearr_21718[(17)] = inst_21626);

return statearr_21718;
})();
var statearr_21719_21803 = state_21708__$1;
(statearr_21719_21803[(2)] = null);

(statearr_21719_21803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (39))){
var state_21708__$1 = state_21708;
var statearr_21723_21804 = state_21708__$1;
(statearr_21723_21804[(2)] = null);

(statearr_21723_21804[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (4))){
var inst_21580 = (state_21708[(11)]);
var inst_21580__$1 = (state_21708[(2)]);
var inst_21581 = (inst_21580__$1 == null);
var state_21708__$1 = (function (){var statearr_21724 = state_21708;
(statearr_21724[(11)] = inst_21580__$1);

return statearr_21724;
})();
if(cljs.core.truth_(inst_21581)){
var statearr_21725_21805 = state_21708__$1;
(statearr_21725_21805[(1)] = (5));

} else {
var statearr_21726_21806 = state_21708__$1;
(statearr_21726_21806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (15))){
var inst_21590 = (state_21708[(13)]);
var inst_21589 = (state_21708[(14)]);
var inst_21592 = (state_21708[(15)]);
var inst_21591 = (state_21708[(16)]);
var inst_21605 = (state_21708[(2)]);
var inst_21606 = (inst_21592 + (1));
var tmp21720 = inst_21590;
var tmp21721 = inst_21589;
var tmp21722 = inst_21591;
var inst_21589__$1 = tmp21721;
var inst_21590__$1 = tmp21720;
var inst_21591__$1 = tmp21722;
var inst_21592__$1 = inst_21606;
var state_21708__$1 = (function (){var statearr_21727 = state_21708;
(statearr_21727[(13)] = inst_21590__$1);

(statearr_21727[(14)] = inst_21589__$1);

(statearr_21727[(15)] = inst_21592__$1);

(statearr_21727[(18)] = inst_21605);

(statearr_21727[(16)] = inst_21591__$1);

return statearr_21727;
})();
var statearr_21728_21807 = state_21708__$1;
(statearr_21728_21807[(2)] = null);

(statearr_21728_21807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (21))){
var inst_21630 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21732_21808 = state_21708__$1;
(statearr_21732_21808[(2)] = inst_21630);

(statearr_21732_21808[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (31))){
var inst_21656 = (state_21708[(9)]);
var inst_21660 = done.call(null,null);
var inst_21661 = cljs.core.async.untap_STAR_.call(null,m,inst_21656);
var state_21708__$1 = (function (){var statearr_21733 = state_21708;
(statearr_21733[(19)] = inst_21660);

return statearr_21733;
})();
var statearr_21734_21809 = state_21708__$1;
(statearr_21734_21809[(2)] = inst_21661);

(statearr_21734_21809[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (32))){
var inst_21649 = (state_21708[(10)]);
var inst_21650 = (state_21708[(20)]);
var inst_21648 = (state_21708[(21)]);
var inst_21651 = (state_21708[(12)]);
var inst_21663 = (state_21708[(2)]);
var inst_21664 = (inst_21651 + (1));
var tmp21729 = inst_21649;
var tmp21730 = inst_21650;
var tmp21731 = inst_21648;
var inst_21648__$1 = tmp21731;
var inst_21649__$1 = tmp21729;
var inst_21650__$1 = tmp21730;
var inst_21651__$1 = inst_21664;
var state_21708__$1 = (function (){var statearr_21735 = state_21708;
(statearr_21735[(10)] = inst_21649__$1);

(statearr_21735[(20)] = inst_21650__$1);

(statearr_21735[(21)] = inst_21648__$1);

(statearr_21735[(22)] = inst_21663);

(statearr_21735[(12)] = inst_21651__$1);

return statearr_21735;
})();
var statearr_21736_21810 = state_21708__$1;
(statearr_21736_21810[(2)] = null);

(statearr_21736_21810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (40))){
var inst_21676 = (state_21708[(23)]);
var inst_21680 = done.call(null,null);
var inst_21681 = cljs.core.async.untap_STAR_.call(null,m,inst_21676);
var state_21708__$1 = (function (){var statearr_21737 = state_21708;
(statearr_21737[(24)] = inst_21680);

return statearr_21737;
})();
var statearr_21738_21811 = state_21708__$1;
(statearr_21738_21811[(2)] = inst_21681);

(statearr_21738_21811[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (33))){
var inst_21667 = (state_21708[(25)]);
var inst_21669 = cljs.core.chunked_seq_QMARK_.call(null,inst_21667);
var state_21708__$1 = state_21708;
if(inst_21669){
var statearr_21739_21812 = state_21708__$1;
(statearr_21739_21812[(1)] = (36));

} else {
var statearr_21740_21813 = state_21708__$1;
(statearr_21740_21813[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (13))){
var inst_21599 = (state_21708[(26)]);
var inst_21602 = cljs.core.async.close_BANG_.call(null,inst_21599);
var state_21708__$1 = state_21708;
var statearr_21741_21814 = state_21708__$1;
(statearr_21741_21814[(2)] = inst_21602);

(statearr_21741_21814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (22))){
var inst_21620 = (state_21708[(8)]);
var inst_21623 = cljs.core.async.close_BANG_.call(null,inst_21620);
var state_21708__$1 = state_21708;
var statearr_21742_21815 = state_21708__$1;
(statearr_21742_21815[(2)] = inst_21623);

(statearr_21742_21815[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (36))){
var inst_21667 = (state_21708[(25)]);
var inst_21671 = cljs.core.chunk_first.call(null,inst_21667);
var inst_21672 = cljs.core.chunk_rest.call(null,inst_21667);
var inst_21673 = cljs.core.count.call(null,inst_21671);
var inst_21648 = inst_21672;
var inst_21649 = inst_21671;
var inst_21650 = inst_21673;
var inst_21651 = (0);
var state_21708__$1 = (function (){var statearr_21743 = state_21708;
(statearr_21743[(10)] = inst_21649);

(statearr_21743[(20)] = inst_21650);

(statearr_21743[(21)] = inst_21648);

(statearr_21743[(12)] = inst_21651);

return statearr_21743;
})();
var statearr_21744_21816 = state_21708__$1;
(statearr_21744_21816[(2)] = null);

(statearr_21744_21816[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (41))){
var inst_21667 = (state_21708[(25)]);
var inst_21683 = (state_21708[(2)]);
var inst_21684 = cljs.core.next.call(null,inst_21667);
var inst_21648 = inst_21684;
var inst_21649 = null;
var inst_21650 = (0);
var inst_21651 = (0);
var state_21708__$1 = (function (){var statearr_21745 = state_21708;
(statearr_21745[(27)] = inst_21683);

(statearr_21745[(10)] = inst_21649);

(statearr_21745[(20)] = inst_21650);

(statearr_21745[(21)] = inst_21648);

(statearr_21745[(12)] = inst_21651);

return statearr_21745;
})();
var statearr_21746_21817 = state_21708__$1;
(statearr_21746_21817[(2)] = null);

(statearr_21746_21817[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (43))){
var state_21708__$1 = state_21708;
var statearr_21747_21818 = state_21708__$1;
(statearr_21747_21818[(2)] = null);

(statearr_21747_21818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (29))){
var inst_21692 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21748_21819 = state_21708__$1;
(statearr_21748_21819[(2)] = inst_21692);

(statearr_21748_21819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (44))){
var inst_21701 = (state_21708[(2)]);
var state_21708__$1 = (function (){var statearr_21749 = state_21708;
(statearr_21749[(28)] = inst_21701);

return statearr_21749;
})();
var statearr_21750_21820 = state_21708__$1;
(statearr_21750_21820[(2)] = null);

(statearr_21750_21820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (6))){
var inst_21640 = (state_21708[(29)]);
var inst_21639 = cljs.core.deref.call(null,cs);
var inst_21640__$1 = cljs.core.keys.call(null,inst_21639);
var inst_21641 = cljs.core.count.call(null,inst_21640__$1);
var inst_21642 = cljs.core.reset_BANG_.call(null,dctr,inst_21641);
var inst_21647 = cljs.core.seq.call(null,inst_21640__$1);
var inst_21648 = inst_21647;
var inst_21649 = null;
var inst_21650 = (0);
var inst_21651 = (0);
var state_21708__$1 = (function (){var statearr_21751 = state_21708;
(statearr_21751[(30)] = inst_21642);

(statearr_21751[(29)] = inst_21640__$1);

(statearr_21751[(10)] = inst_21649);

(statearr_21751[(20)] = inst_21650);

(statearr_21751[(21)] = inst_21648);

(statearr_21751[(12)] = inst_21651);

return statearr_21751;
})();
var statearr_21752_21821 = state_21708__$1;
(statearr_21752_21821[(2)] = null);

(statearr_21752_21821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (28))){
var inst_21648 = (state_21708[(21)]);
var inst_21667 = (state_21708[(25)]);
var inst_21667__$1 = cljs.core.seq.call(null,inst_21648);
var state_21708__$1 = (function (){var statearr_21753 = state_21708;
(statearr_21753[(25)] = inst_21667__$1);

return statearr_21753;
})();
if(inst_21667__$1){
var statearr_21754_21822 = state_21708__$1;
(statearr_21754_21822[(1)] = (33));

} else {
var statearr_21755_21823 = state_21708__$1;
(statearr_21755_21823[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (25))){
var inst_21650 = (state_21708[(20)]);
var inst_21651 = (state_21708[(12)]);
var inst_21653 = (inst_21651 < inst_21650);
var inst_21654 = inst_21653;
var state_21708__$1 = state_21708;
if(cljs.core.truth_(inst_21654)){
var statearr_21756_21824 = state_21708__$1;
(statearr_21756_21824[(1)] = (27));

} else {
var statearr_21757_21825 = state_21708__$1;
(statearr_21757_21825[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (34))){
var state_21708__$1 = state_21708;
var statearr_21758_21826 = state_21708__$1;
(statearr_21758_21826[(2)] = null);

(statearr_21758_21826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (17))){
var state_21708__$1 = state_21708;
var statearr_21759_21827 = state_21708__$1;
(statearr_21759_21827[(2)] = null);

(statearr_21759_21827[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (3))){
var inst_21706 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21708__$1,inst_21706);
} else {
if((state_val_21709 === (12))){
var inst_21635 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21760_21828 = state_21708__$1;
(statearr_21760_21828[(2)] = inst_21635);

(statearr_21760_21828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (2))){
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21708__$1,(4),ch);
} else {
if((state_val_21709 === (23))){
var state_21708__$1 = state_21708;
var statearr_21761_21829 = state_21708__$1;
(statearr_21761_21829[(2)] = null);

(statearr_21761_21829[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (35))){
var inst_21690 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21762_21830 = state_21708__$1;
(statearr_21762_21830[(2)] = inst_21690);

(statearr_21762_21830[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (19))){
var inst_21609 = (state_21708[(7)]);
var inst_21613 = cljs.core.chunk_first.call(null,inst_21609);
var inst_21614 = cljs.core.chunk_rest.call(null,inst_21609);
var inst_21615 = cljs.core.count.call(null,inst_21613);
var inst_21589 = inst_21614;
var inst_21590 = inst_21613;
var inst_21591 = inst_21615;
var inst_21592 = (0);
var state_21708__$1 = (function (){var statearr_21763 = state_21708;
(statearr_21763[(13)] = inst_21590);

(statearr_21763[(14)] = inst_21589);

(statearr_21763[(15)] = inst_21592);

(statearr_21763[(16)] = inst_21591);

return statearr_21763;
})();
var statearr_21764_21831 = state_21708__$1;
(statearr_21764_21831[(2)] = null);

(statearr_21764_21831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (11))){
var inst_21589 = (state_21708[(14)]);
var inst_21609 = (state_21708[(7)]);
var inst_21609__$1 = cljs.core.seq.call(null,inst_21589);
var state_21708__$1 = (function (){var statearr_21765 = state_21708;
(statearr_21765[(7)] = inst_21609__$1);

return statearr_21765;
})();
if(inst_21609__$1){
var statearr_21766_21832 = state_21708__$1;
(statearr_21766_21832[(1)] = (16));

} else {
var statearr_21767_21833 = state_21708__$1;
(statearr_21767_21833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (9))){
var inst_21637 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21768_21834 = state_21708__$1;
(statearr_21768_21834[(2)] = inst_21637);

(statearr_21768_21834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (5))){
var inst_21587 = cljs.core.deref.call(null,cs);
var inst_21588 = cljs.core.seq.call(null,inst_21587);
var inst_21589 = inst_21588;
var inst_21590 = null;
var inst_21591 = (0);
var inst_21592 = (0);
var state_21708__$1 = (function (){var statearr_21769 = state_21708;
(statearr_21769[(13)] = inst_21590);

(statearr_21769[(14)] = inst_21589);

(statearr_21769[(15)] = inst_21592);

(statearr_21769[(16)] = inst_21591);

return statearr_21769;
})();
var statearr_21770_21835 = state_21708__$1;
(statearr_21770_21835[(2)] = null);

(statearr_21770_21835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (14))){
var state_21708__$1 = state_21708;
var statearr_21771_21836 = state_21708__$1;
(statearr_21771_21836[(2)] = null);

(statearr_21771_21836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (45))){
var inst_21698 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21772_21837 = state_21708__$1;
(statearr_21772_21837[(2)] = inst_21698);

(statearr_21772_21837[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (26))){
var inst_21640 = (state_21708[(29)]);
var inst_21694 = (state_21708[(2)]);
var inst_21695 = cljs.core.seq.call(null,inst_21640);
var state_21708__$1 = (function (){var statearr_21773 = state_21708;
(statearr_21773[(31)] = inst_21694);

return statearr_21773;
})();
if(inst_21695){
var statearr_21774_21838 = state_21708__$1;
(statearr_21774_21838[(1)] = (42));

} else {
var statearr_21775_21839 = state_21708__$1;
(statearr_21775_21839[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (16))){
var inst_21609 = (state_21708[(7)]);
var inst_21611 = cljs.core.chunked_seq_QMARK_.call(null,inst_21609);
var state_21708__$1 = state_21708;
if(inst_21611){
var statearr_21776_21840 = state_21708__$1;
(statearr_21776_21840[(1)] = (19));

} else {
var statearr_21777_21841 = state_21708__$1;
(statearr_21777_21841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (38))){
var inst_21687 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21778_21842 = state_21708__$1;
(statearr_21778_21842[(2)] = inst_21687);

(statearr_21778_21842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (30))){
var state_21708__$1 = state_21708;
var statearr_21779_21843 = state_21708__$1;
(statearr_21779_21843[(2)] = null);

(statearr_21779_21843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (10))){
var inst_21590 = (state_21708[(13)]);
var inst_21592 = (state_21708[(15)]);
var inst_21598 = cljs.core._nth.call(null,inst_21590,inst_21592);
var inst_21599 = cljs.core.nth.call(null,inst_21598,(0),null);
var inst_21600 = cljs.core.nth.call(null,inst_21598,(1),null);
var state_21708__$1 = (function (){var statearr_21780 = state_21708;
(statearr_21780[(26)] = inst_21599);

return statearr_21780;
})();
if(cljs.core.truth_(inst_21600)){
var statearr_21781_21844 = state_21708__$1;
(statearr_21781_21844[(1)] = (13));

} else {
var statearr_21782_21845 = state_21708__$1;
(statearr_21782_21845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (18))){
var inst_21633 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21783_21846 = state_21708__$1;
(statearr_21783_21846[(2)] = inst_21633);

(statearr_21783_21846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (42))){
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21708__$1,(45),dchan);
} else {
if((state_val_21709 === (37))){
var inst_21676 = (state_21708[(23)]);
var inst_21580 = (state_21708[(11)]);
var inst_21667 = (state_21708[(25)]);
var inst_21676__$1 = cljs.core.first.call(null,inst_21667);
var inst_21677 = cljs.core.async.put_BANG_.call(null,inst_21676__$1,inst_21580,done);
var state_21708__$1 = (function (){var statearr_21784 = state_21708;
(statearr_21784[(23)] = inst_21676__$1);

return statearr_21784;
})();
if(cljs.core.truth_(inst_21677)){
var statearr_21785_21847 = state_21708__$1;
(statearr_21785_21847[(1)] = (39));

} else {
var statearr_21786_21848 = state_21708__$1;
(statearr_21786_21848[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (8))){
var inst_21592 = (state_21708[(15)]);
var inst_21591 = (state_21708[(16)]);
var inst_21594 = (inst_21592 < inst_21591);
var inst_21595 = inst_21594;
var state_21708__$1 = state_21708;
if(cljs.core.truth_(inst_21595)){
var statearr_21787_21849 = state_21708__$1;
(statearr_21787_21849[(1)] = (10));

} else {
var statearr_21788_21850 = state_21708__$1;
(statearr_21788_21850[(1)] = (11));

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
});})(c__20489__auto___21796,cs,m,dchan,dctr,done))
;
return ((function (switch__20377__auto__,c__20489__auto___21796,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20378__auto__ = null;
var cljs$core$async$mult_$_state_machine__20378__auto____0 = (function (){
var statearr_21792 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21792[(0)] = cljs$core$async$mult_$_state_machine__20378__auto__);

(statearr_21792[(1)] = (1));

return statearr_21792;
});
var cljs$core$async$mult_$_state_machine__20378__auto____1 = (function (state_21708){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_21708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e21793){if((e21793 instanceof Object)){
var ex__20381__auto__ = e21793;
var statearr_21794_21851 = state_21708;
(statearr_21794_21851[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21852 = state_21708;
state_21708 = G__21852;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20378__auto__ = function(state_21708){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20378__auto____1.call(this,state_21708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20378__auto____0;
cljs$core$async$mult_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20378__auto____1;
return cljs$core$async$mult_$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___21796,cs,m,dchan,dctr,done))
})();
var state__20491__auto__ = (function (){var statearr_21795 = f__20490__auto__.call(null);
(statearr_21795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___21796);

return statearr_21795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___21796,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args21853 = [];
var len__17956__auto___21856 = arguments.length;
var i__17957__auto___21857 = (0);
while(true){
if((i__17957__auto___21857 < len__17956__auto___21856)){
args21853.push((arguments[i__17957__auto___21857]));

var G__21858 = (i__17957__auto___21857 + (1));
i__17957__auto___21857 = G__21858;
continue;
} else {
}
break;
}

var G__21855 = args21853.length;
switch (G__21855) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21853.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,ch);
} else {
var m__17554__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,ch);
} else {
var m__17554__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m);
} else {
var m__17554__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,state_map);
} else {
var m__17554__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17553__auto__ = (((m == null))?null:m);
var m__17554__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,m,mode);
} else {
var m__17554__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17963__auto__ = [];
var len__17956__auto___21870 = arguments.length;
var i__17957__auto___21871 = (0);
while(true){
if((i__17957__auto___21871 < len__17956__auto___21870)){
args__17963__auto__.push((arguments[i__17957__auto___21871]));

var G__21872 = (i__17957__auto___21871 + (1));
i__17957__auto___21871 = G__21872;
continue;
} else {
}
break;
}

var argseq__17964__auto__ = ((((3) < args__17963__auto__.length))?(new cljs.core.IndexedSeq(args__17963__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17964__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21864){
var map__21865 = p__21864;
var map__21865__$1 = ((((!((map__21865 == null)))?((((map__21865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21865):map__21865);
var opts = map__21865__$1;
var statearr_21867_21873 = state;
(statearr_21867_21873[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__21865,map__21865__$1,opts){
return (function (val){
var statearr_21868_21874 = state;
(statearr_21868_21874[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21865,map__21865__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_21869_21875 = state;
(statearr_21869_21875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21860){
var G__21861 = cljs.core.first.call(null,seq21860);
var seq21860__$1 = cljs.core.next.call(null,seq21860);
var G__21862 = cljs.core.first.call(null,seq21860__$1);
var seq21860__$2 = cljs.core.next.call(null,seq21860__$1);
var G__21863 = cljs.core.first.call(null,seq21860__$2);
var seq21860__$3 = cljs.core.next.call(null,seq21860__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21861,G__21862,G__21863,seq21860__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22039 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22040){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22040 = meta22040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22041,meta22040__$1){
var self__ = this;
var _22041__$1 = this;
return (new cljs.core.async.t_cljs$core$async22039(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22040__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22041){
var self__ = this;
var _22041__$1 = this;
return self__.meta22040;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22040","meta22040",-78388382,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22039";

cljs.core.async.t_cljs$core$async22039.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22039");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22039 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22040){
return (new cljs.core.async.t_cljs$core$async22039(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22040));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22039(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20489__auto___22202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22139){
var state_val_22140 = (state_22139[(1)]);
if((state_val_22140 === (7))){
var inst_22057 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22141_22203 = state_22139__$1;
(statearr_22141_22203[(2)] = inst_22057);

(statearr_22141_22203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (20))){
var inst_22069 = (state_22139[(7)]);
var state_22139__$1 = state_22139;
var statearr_22142_22204 = state_22139__$1;
(statearr_22142_22204[(2)] = inst_22069);

(statearr_22142_22204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (27))){
var state_22139__$1 = state_22139;
var statearr_22143_22205 = state_22139__$1;
(statearr_22143_22205[(2)] = null);

(statearr_22143_22205[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (1))){
var inst_22045 = (state_22139[(8)]);
var inst_22045__$1 = calc_state.call(null);
var inst_22047 = (inst_22045__$1 == null);
var inst_22048 = cljs.core.not.call(null,inst_22047);
var state_22139__$1 = (function (){var statearr_22144 = state_22139;
(statearr_22144[(8)] = inst_22045__$1);

return statearr_22144;
})();
if(inst_22048){
var statearr_22145_22206 = state_22139__$1;
(statearr_22145_22206[(1)] = (2));

} else {
var statearr_22146_22207 = state_22139__$1;
(statearr_22146_22207[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (24))){
var inst_22092 = (state_22139[(9)]);
var inst_22099 = (state_22139[(10)]);
var inst_22113 = (state_22139[(11)]);
var inst_22113__$1 = inst_22092.call(null,inst_22099);
var state_22139__$1 = (function (){var statearr_22147 = state_22139;
(statearr_22147[(11)] = inst_22113__$1);

return statearr_22147;
})();
if(cljs.core.truth_(inst_22113__$1)){
var statearr_22148_22208 = state_22139__$1;
(statearr_22148_22208[(1)] = (29));

} else {
var statearr_22149_22209 = state_22139__$1;
(statearr_22149_22209[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (4))){
var inst_22060 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22060)){
var statearr_22150_22210 = state_22139__$1;
(statearr_22150_22210[(1)] = (8));

} else {
var statearr_22151_22211 = state_22139__$1;
(statearr_22151_22211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (15))){
var inst_22086 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22086)){
var statearr_22152_22212 = state_22139__$1;
(statearr_22152_22212[(1)] = (19));

} else {
var statearr_22153_22213 = state_22139__$1;
(statearr_22153_22213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (21))){
var inst_22091 = (state_22139[(12)]);
var inst_22091__$1 = (state_22139[(2)]);
var inst_22092 = cljs.core.get.call(null,inst_22091__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22093 = cljs.core.get.call(null,inst_22091__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22094 = cljs.core.get.call(null,inst_22091__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22139__$1 = (function (){var statearr_22154 = state_22139;
(statearr_22154[(9)] = inst_22092);

(statearr_22154[(13)] = inst_22093);

(statearr_22154[(12)] = inst_22091__$1);

return statearr_22154;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22139__$1,(22),inst_22094);
} else {
if((state_val_22140 === (31))){
var inst_22121 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22121)){
var statearr_22155_22214 = state_22139__$1;
(statearr_22155_22214[(1)] = (32));

} else {
var statearr_22156_22215 = state_22139__$1;
(statearr_22156_22215[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (32))){
var inst_22098 = (state_22139[(14)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22139__$1,(35),out,inst_22098);
} else {
if((state_val_22140 === (33))){
var inst_22091 = (state_22139[(12)]);
var inst_22069 = inst_22091;
var state_22139__$1 = (function (){var statearr_22157 = state_22139;
(statearr_22157[(7)] = inst_22069);

return statearr_22157;
})();
var statearr_22158_22216 = state_22139__$1;
(statearr_22158_22216[(2)] = null);

(statearr_22158_22216[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (13))){
var inst_22069 = (state_22139[(7)]);
var inst_22076 = inst_22069.cljs$lang$protocol_mask$partition0$;
var inst_22077 = (inst_22076 & (64));
var inst_22078 = inst_22069.cljs$core$ISeq$;
var inst_22079 = (inst_22077) || (inst_22078);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22079)){
var statearr_22159_22217 = state_22139__$1;
(statearr_22159_22217[(1)] = (16));

} else {
var statearr_22160_22218 = state_22139__$1;
(statearr_22160_22218[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (22))){
var inst_22099 = (state_22139[(10)]);
var inst_22098 = (state_22139[(14)]);
var inst_22097 = (state_22139[(2)]);
var inst_22098__$1 = cljs.core.nth.call(null,inst_22097,(0),null);
var inst_22099__$1 = cljs.core.nth.call(null,inst_22097,(1),null);
var inst_22100 = (inst_22098__$1 == null);
var inst_22101 = cljs.core._EQ_.call(null,inst_22099__$1,change);
var inst_22102 = (inst_22100) || (inst_22101);
var state_22139__$1 = (function (){var statearr_22161 = state_22139;
(statearr_22161[(10)] = inst_22099__$1);

(statearr_22161[(14)] = inst_22098__$1);

return statearr_22161;
})();
if(cljs.core.truth_(inst_22102)){
var statearr_22162_22219 = state_22139__$1;
(statearr_22162_22219[(1)] = (23));

} else {
var statearr_22163_22220 = state_22139__$1;
(statearr_22163_22220[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (36))){
var inst_22091 = (state_22139[(12)]);
var inst_22069 = inst_22091;
var state_22139__$1 = (function (){var statearr_22164 = state_22139;
(statearr_22164[(7)] = inst_22069);

return statearr_22164;
})();
var statearr_22165_22221 = state_22139__$1;
(statearr_22165_22221[(2)] = null);

(statearr_22165_22221[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (29))){
var inst_22113 = (state_22139[(11)]);
var state_22139__$1 = state_22139;
var statearr_22166_22222 = state_22139__$1;
(statearr_22166_22222[(2)] = inst_22113);

(statearr_22166_22222[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (6))){
var state_22139__$1 = state_22139;
var statearr_22167_22223 = state_22139__$1;
(statearr_22167_22223[(2)] = false);

(statearr_22167_22223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (28))){
var inst_22109 = (state_22139[(2)]);
var inst_22110 = calc_state.call(null);
var inst_22069 = inst_22110;
var state_22139__$1 = (function (){var statearr_22168 = state_22139;
(statearr_22168[(15)] = inst_22109);

(statearr_22168[(7)] = inst_22069);

return statearr_22168;
})();
var statearr_22169_22224 = state_22139__$1;
(statearr_22169_22224[(2)] = null);

(statearr_22169_22224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (25))){
var inst_22135 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22170_22225 = state_22139__$1;
(statearr_22170_22225[(2)] = inst_22135);

(statearr_22170_22225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (34))){
var inst_22133 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22171_22226 = state_22139__$1;
(statearr_22171_22226[(2)] = inst_22133);

(statearr_22171_22226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (17))){
var state_22139__$1 = state_22139;
var statearr_22172_22227 = state_22139__$1;
(statearr_22172_22227[(2)] = false);

(statearr_22172_22227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (3))){
var state_22139__$1 = state_22139;
var statearr_22173_22228 = state_22139__$1;
(statearr_22173_22228[(2)] = false);

(statearr_22173_22228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (12))){
var inst_22137 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22139__$1,inst_22137);
} else {
if((state_val_22140 === (2))){
var inst_22045 = (state_22139[(8)]);
var inst_22050 = inst_22045.cljs$lang$protocol_mask$partition0$;
var inst_22051 = (inst_22050 & (64));
var inst_22052 = inst_22045.cljs$core$ISeq$;
var inst_22053 = (inst_22051) || (inst_22052);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22053)){
var statearr_22174_22229 = state_22139__$1;
(statearr_22174_22229[(1)] = (5));

} else {
var statearr_22175_22230 = state_22139__$1;
(statearr_22175_22230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (23))){
var inst_22098 = (state_22139[(14)]);
var inst_22104 = (inst_22098 == null);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22104)){
var statearr_22176_22231 = state_22139__$1;
(statearr_22176_22231[(1)] = (26));

} else {
var statearr_22177_22232 = state_22139__$1;
(statearr_22177_22232[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (35))){
var inst_22124 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
if(cljs.core.truth_(inst_22124)){
var statearr_22178_22233 = state_22139__$1;
(statearr_22178_22233[(1)] = (36));

} else {
var statearr_22179_22234 = state_22139__$1;
(statearr_22179_22234[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (19))){
var inst_22069 = (state_22139[(7)]);
var inst_22088 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22069);
var state_22139__$1 = state_22139;
var statearr_22180_22235 = state_22139__$1;
(statearr_22180_22235[(2)] = inst_22088);

(statearr_22180_22235[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (11))){
var inst_22069 = (state_22139[(7)]);
var inst_22073 = (inst_22069 == null);
var inst_22074 = cljs.core.not.call(null,inst_22073);
var state_22139__$1 = state_22139;
if(inst_22074){
var statearr_22181_22236 = state_22139__$1;
(statearr_22181_22236[(1)] = (13));

} else {
var statearr_22182_22237 = state_22139__$1;
(statearr_22182_22237[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (9))){
var inst_22045 = (state_22139[(8)]);
var state_22139__$1 = state_22139;
var statearr_22183_22238 = state_22139__$1;
(statearr_22183_22238[(2)] = inst_22045);

(statearr_22183_22238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (5))){
var state_22139__$1 = state_22139;
var statearr_22184_22239 = state_22139__$1;
(statearr_22184_22239[(2)] = true);

(statearr_22184_22239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (14))){
var state_22139__$1 = state_22139;
var statearr_22185_22240 = state_22139__$1;
(statearr_22185_22240[(2)] = false);

(statearr_22185_22240[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (26))){
var inst_22099 = (state_22139[(10)]);
var inst_22106 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22099);
var state_22139__$1 = state_22139;
var statearr_22186_22241 = state_22139__$1;
(statearr_22186_22241[(2)] = inst_22106);

(statearr_22186_22241[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (16))){
var state_22139__$1 = state_22139;
var statearr_22187_22242 = state_22139__$1;
(statearr_22187_22242[(2)] = true);

(statearr_22187_22242[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (38))){
var inst_22129 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22188_22243 = state_22139__$1;
(statearr_22188_22243[(2)] = inst_22129);

(statearr_22188_22243[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (30))){
var inst_22092 = (state_22139[(9)]);
var inst_22093 = (state_22139[(13)]);
var inst_22099 = (state_22139[(10)]);
var inst_22116 = cljs.core.empty_QMARK_.call(null,inst_22092);
var inst_22117 = inst_22093.call(null,inst_22099);
var inst_22118 = cljs.core.not.call(null,inst_22117);
var inst_22119 = (inst_22116) && (inst_22118);
var state_22139__$1 = state_22139;
var statearr_22189_22244 = state_22139__$1;
(statearr_22189_22244[(2)] = inst_22119);

(statearr_22189_22244[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (10))){
var inst_22045 = (state_22139[(8)]);
var inst_22065 = (state_22139[(2)]);
var inst_22066 = cljs.core.get.call(null,inst_22065,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22067 = cljs.core.get.call(null,inst_22065,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22068 = cljs.core.get.call(null,inst_22065,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22069 = inst_22045;
var state_22139__$1 = (function (){var statearr_22190 = state_22139;
(statearr_22190[(16)] = inst_22066);

(statearr_22190[(17)] = inst_22068);

(statearr_22190[(18)] = inst_22067);

(statearr_22190[(7)] = inst_22069);

return statearr_22190;
})();
var statearr_22191_22245 = state_22139__$1;
(statearr_22191_22245[(2)] = null);

(statearr_22191_22245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (18))){
var inst_22083 = (state_22139[(2)]);
var state_22139__$1 = state_22139;
var statearr_22192_22246 = state_22139__$1;
(statearr_22192_22246[(2)] = inst_22083);

(statearr_22192_22246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (37))){
var state_22139__$1 = state_22139;
var statearr_22193_22247 = state_22139__$1;
(statearr_22193_22247[(2)] = null);

(statearr_22193_22247[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22140 === (8))){
var inst_22045 = (state_22139[(8)]);
var inst_22062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22045);
var state_22139__$1 = state_22139;
var statearr_22194_22248 = state_22139__$1;
(statearr_22194_22248[(2)] = inst_22062);

(statearr_22194_22248[(1)] = (10));


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
});})(c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20377__auto__,c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20378__auto__ = null;
var cljs$core$async$mix_$_state_machine__20378__auto____0 = (function (){
var statearr_22198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22198[(0)] = cljs$core$async$mix_$_state_machine__20378__auto__);

(statearr_22198[(1)] = (1));

return statearr_22198;
});
var cljs$core$async$mix_$_state_machine__20378__auto____1 = (function (state_22139){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22199){if((e22199 instanceof Object)){
var ex__20381__auto__ = e22199;
var statearr_22200_22249 = state_22139;
(statearr_22200_22249[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22250 = state_22139;
state_22139 = G__22250;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20378__auto__ = function(state_22139){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20378__auto____1.call(this,state_22139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20378__auto____0;
cljs$core$async$mix_$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20378__auto____1;
return cljs$core$async$mix_$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20491__auto__ = (function (){var statearr_22201 = f__20490__auto__.call(null);
(statearr_22201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22202);

return statearr_22201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22202,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17553__auto__ = (((p == null))?null:p);
var m__17554__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17554__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17553__auto__ = (((p == null))?null:p);
var m__17554__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,p,v,ch);
} else {
var m__17554__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22251 = [];
var len__17956__auto___22254 = arguments.length;
var i__17957__auto___22255 = (0);
while(true){
if((i__17957__auto___22255 < len__17956__auto___22254)){
args22251.push((arguments[i__17957__auto___22255]));

var G__22256 = (i__17957__auto___22255 + (1));
i__17957__auto___22255 = G__22256;
continue;
} else {
}
break;
}

var G__22253 = args22251.length;
switch (G__22253) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22251.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17553__auto__ = (((p == null))?null:p);
var m__17554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,p);
} else {
var m__17554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17553__auto__ = (((p == null))?null:p);
var m__17554__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17553__auto__)]);
if(!((m__17554__auto__ == null))){
return m__17554__auto__.call(null,p,v);
} else {
var m__17554__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17554__auto____$1 == null))){
return m__17554__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22259 = [];
var len__17956__auto___22384 = arguments.length;
var i__17957__auto___22385 = (0);
while(true){
if((i__17957__auto___22385 < len__17956__auto___22384)){
args22259.push((arguments[i__17957__auto___22385]));

var G__22386 = (i__17957__auto___22385 + (1));
i__17957__auto___22385 = G__22386;
continue;
} else {
}
break;
}

var G__22261 = args22259.length;
switch (G__22261) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22259.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16898__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16898__auto__)){
return or__16898__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16898__auto__,mults){
return (function (p1__22258_SHARP_){
if(cljs.core.truth_(p1__22258_SHARP_.call(null,topic))){
return p1__22258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16898__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22262 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22263){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22263 = meta22263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22264,meta22263__$1){
var self__ = this;
var _22264__$1 = this;
return (new cljs.core.async.t_cljs$core$async22262(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22263__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22264){
var self__ = this;
var _22264__$1 = this;
return self__.meta22263;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22263","meta22263",591115201,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22262";

cljs.core.async.t_cljs$core$async22262.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22262");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22262 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22263){
return (new cljs.core.async.t_cljs$core$async22262(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22263));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22262(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20489__auto___22388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22388,mults,ensure_mult,p){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22388,mults,ensure_mult,p){
return (function (state_22336){
var state_val_22337 = (state_22336[(1)]);
if((state_val_22337 === (7))){
var inst_22332 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22338_22389 = state_22336__$1;
(statearr_22338_22389[(2)] = inst_22332);

(statearr_22338_22389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (20))){
var state_22336__$1 = state_22336;
var statearr_22339_22390 = state_22336__$1;
(statearr_22339_22390[(2)] = null);

(statearr_22339_22390[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (1))){
var state_22336__$1 = state_22336;
var statearr_22340_22391 = state_22336__$1;
(statearr_22340_22391[(2)] = null);

(statearr_22340_22391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (24))){
var inst_22315 = (state_22336[(7)]);
var inst_22324 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22315);
var state_22336__$1 = state_22336;
var statearr_22341_22392 = state_22336__$1;
(statearr_22341_22392[(2)] = inst_22324);

(statearr_22341_22392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (4))){
var inst_22267 = (state_22336[(8)]);
var inst_22267__$1 = (state_22336[(2)]);
var inst_22268 = (inst_22267__$1 == null);
var state_22336__$1 = (function (){var statearr_22342 = state_22336;
(statearr_22342[(8)] = inst_22267__$1);

return statearr_22342;
})();
if(cljs.core.truth_(inst_22268)){
var statearr_22343_22393 = state_22336__$1;
(statearr_22343_22393[(1)] = (5));

} else {
var statearr_22344_22394 = state_22336__$1;
(statearr_22344_22394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (15))){
var inst_22309 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22345_22395 = state_22336__$1;
(statearr_22345_22395[(2)] = inst_22309);

(statearr_22345_22395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (21))){
var inst_22329 = (state_22336[(2)]);
var state_22336__$1 = (function (){var statearr_22346 = state_22336;
(statearr_22346[(9)] = inst_22329);

return statearr_22346;
})();
var statearr_22347_22396 = state_22336__$1;
(statearr_22347_22396[(2)] = null);

(statearr_22347_22396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (13))){
var inst_22291 = (state_22336[(10)]);
var inst_22293 = cljs.core.chunked_seq_QMARK_.call(null,inst_22291);
var state_22336__$1 = state_22336;
if(inst_22293){
var statearr_22348_22397 = state_22336__$1;
(statearr_22348_22397[(1)] = (16));

} else {
var statearr_22349_22398 = state_22336__$1;
(statearr_22349_22398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (22))){
var inst_22321 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
if(cljs.core.truth_(inst_22321)){
var statearr_22350_22399 = state_22336__$1;
(statearr_22350_22399[(1)] = (23));

} else {
var statearr_22351_22400 = state_22336__$1;
(statearr_22351_22400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (6))){
var inst_22267 = (state_22336[(8)]);
var inst_22317 = (state_22336[(11)]);
var inst_22315 = (state_22336[(7)]);
var inst_22315__$1 = topic_fn.call(null,inst_22267);
var inst_22316 = cljs.core.deref.call(null,mults);
var inst_22317__$1 = cljs.core.get.call(null,inst_22316,inst_22315__$1);
var state_22336__$1 = (function (){var statearr_22352 = state_22336;
(statearr_22352[(11)] = inst_22317__$1);

(statearr_22352[(7)] = inst_22315__$1);

return statearr_22352;
})();
if(cljs.core.truth_(inst_22317__$1)){
var statearr_22353_22401 = state_22336__$1;
(statearr_22353_22401[(1)] = (19));

} else {
var statearr_22354_22402 = state_22336__$1;
(statearr_22354_22402[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (25))){
var inst_22326 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22355_22403 = state_22336__$1;
(statearr_22355_22403[(2)] = inst_22326);

(statearr_22355_22403[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (17))){
var inst_22291 = (state_22336[(10)]);
var inst_22300 = cljs.core.first.call(null,inst_22291);
var inst_22301 = cljs.core.async.muxch_STAR_.call(null,inst_22300);
var inst_22302 = cljs.core.async.close_BANG_.call(null,inst_22301);
var inst_22303 = cljs.core.next.call(null,inst_22291);
var inst_22277 = inst_22303;
var inst_22278 = null;
var inst_22279 = (0);
var inst_22280 = (0);
var state_22336__$1 = (function (){var statearr_22356 = state_22336;
(statearr_22356[(12)] = inst_22302);

(statearr_22356[(13)] = inst_22279);

(statearr_22356[(14)] = inst_22277);

(statearr_22356[(15)] = inst_22278);

(statearr_22356[(16)] = inst_22280);

return statearr_22356;
})();
var statearr_22357_22404 = state_22336__$1;
(statearr_22357_22404[(2)] = null);

(statearr_22357_22404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (3))){
var inst_22334 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22336__$1,inst_22334);
} else {
if((state_val_22337 === (12))){
var inst_22311 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22358_22405 = state_22336__$1;
(statearr_22358_22405[(2)] = inst_22311);

(statearr_22358_22405[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (2))){
var state_22336__$1 = state_22336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22336__$1,(4),ch);
} else {
if((state_val_22337 === (23))){
var state_22336__$1 = state_22336;
var statearr_22359_22406 = state_22336__$1;
(statearr_22359_22406[(2)] = null);

(statearr_22359_22406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (19))){
var inst_22267 = (state_22336[(8)]);
var inst_22317 = (state_22336[(11)]);
var inst_22319 = cljs.core.async.muxch_STAR_.call(null,inst_22317);
var state_22336__$1 = state_22336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22336__$1,(22),inst_22319,inst_22267);
} else {
if((state_val_22337 === (11))){
var inst_22277 = (state_22336[(14)]);
var inst_22291 = (state_22336[(10)]);
var inst_22291__$1 = cljs.core.seq.call(null,inst_22277);
var state_22336__$1 = (function (){var statearr_22360 = state_22336;
(statearr_22360[(10)] = inst_22291__$1);

return statearr_22360;
})();
if(inst_22291__$1){
var statearr_22361_22407 = state_22336__$1;
(statearr_22361_22407[(1)] = (13));

} else {
var statearr_22362_22408 = state_22336__$1;
(statearr_22362_22408[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (9))){
var inst_22313 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22363_22409 = state_22336__$1;
(statearr_22363_22409[(2)] = inst_22313);

(statearr_22363_22409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (5))){
var inst_22274 = cljs.core.deref.call(null,mults);
var inst_22275 = cljs.core.vals.call(null,inst_22274);
var inst_22276 = cljs.core.seq.call(null,inst_22275);
var inst_22277 = inst_22276;
var inst_22278 = null;
var inst_22279 = (0);
var inst_22280 = (0);
var state_22336__$1 = (function (){var statearr_22364 = state_22336;
(statearr_22364[(13)] = inst_22279);

(statearr_22364[(14)] = inst_22277);

(statearr_22364[(15)] = inst_22278);

(statearr_22364[(16)] = inst_22280);

return statearr_22364;
})();
var statearr_22365_22410 = state_22336__$1;
(statearr_22365_22410[(2)] = null);

(statearr_22365_22410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (14))){
var state_22336__$1 = state_22336;
var statearr_22369_22411 = state_22336__$1;
(statearr_22369_22411[(2)] = null);

(statearr_22369_22411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (16))){
var inst_22291 = (state_22336[(10)]);
var inst_22295 = cljs.core.chunk_first.call(null,inst_22291);
var inst_22296 = cljs.core.chunk_rest.call(null,inst_22291);
var inst_22297 = cljs.core.count.call(null,inst_22295);
var inst_22277 = inst_22296;
var inst_22278 = inst_22295;
var inst_22279 = inst_22297;
var inst_22280 = (0);
var state_22336__$1 = (function (){var statearr_22370 = state_22336;
(statearr_22370[(13)] = inst_22279);

(statearr_22370[(14)] = inst_22277);

(statearr_22370[(15)] = inst_22278);

(statearr_22370[(16)] = inst_22280);

return statearr_22370;
})();
var statearr_22371_22412 = state_22336__$1;
(statearr_22371_22412[(2)] = null);

(statearr_22371_22412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (10))){
var inst_22279 = (state_22336[(13)]);
var inst_22277 = (state_22336[(14)]);
var inst_22278 = (state_22336[(15)]);
var inst_22280 = (state_22336[(16)]);
var inst_22285 = cljs.core._nth.call(null,inst_22278,inst_22280);
var inst_22286 = cljs.core.async.muxch_STAR_.call(null,inst_22285);
var inst_22287 = cljs.core.async.close_BANG_.call(null,inst_22286);
var inst_22288 = (inst_22280 + (1));
var tmp22366 = inst_22279;
var tmp22367 = inst_22277;
var tmp22368 = inst_22278;
var inst_22277__$1 = tmp22367;
var inst_22278__$1 = tmp22368;
var inst_22279__$1 = tmp22366;
var inst_22280__$1 = inst_22288;
var state_22336__$1 = (function (){var statearr_22372 = state_22336;
(statearr_22372[(17)] = inst_22287);

(statearr_22372[(13)] = inst_22279__$1);

(statearr_22372[(14)] = inst_22277__$1);

(statearr_22372[(15)] = inst_22278__$1);

(statearr_22372[(16)] = inst_22280__$1);

return statearr_22372;
})();
var statearr_22373_22413 = state_22336__$1;
(statearr_22373_22413[(2)] = null);

(statearr_22373_22413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (18))){
var inst_22306 = (state_22336[(2)]);
var state_22336__$1 = state_22336;
var statearr_22374_22414 = state_22336__$1;
(statearr_22374_22414[(2)] = inst_22306);

(statearr_22374_22414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22337 === (8))){
var inst_22279 = (state_22336[(13)]);
var inst_22280 = (state_22336[(16)]);
var inst_22282 = (inst_22280 < inst_22279);
var inst_22283 = inst_22282;
var state_22336__$1 = state_22336;
if(cljs.core.truth_(inst_22283)){
var statearr_22375_22415 = state_22336__$1;
(statearr_22375_22415[(1)] = (10));

} else {
var statearr_22376_22416 = state_22336__$1;
(statearr_22376_22416[(1)] = (11));

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
});})(c__20489__auto___22388,mults,ensure_mult,p))
;
return ((function (switch__20377__auto__,c__20489__auto___22388,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_22380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22380[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_22380[(1)] = (1));

return statearr_22380;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_22336){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22381){if((e22381 instanceof Object)){
var ex__20381__auto__ = e22381;
var statearr_22382_22417 = state_22336;
(statearr_22382_22417[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22418 = state_22336;
state_22336 = G__22418;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_22336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_22336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22388,mults,ensure_mult,p))
})();
var state__20491__auto__ = (function (){var statearr_22383 = f__20490__auto__.call(null);
(statearr_22383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22388);

return statearr_22383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22388,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22419 = [];
var len__17956__auto___22422 = arguments.length;
var i__17957__auto___22423 = (0);
while(true){
if((i__17957__auto___22423 < len__17956__auto___22422)){
args22419.push((arguments[i__17957__auto___22423]));

var G__22424 = (i__17957__auto___22423 + (1));
i__17957__auto___22423 = G__22424;
continue;
} else {
}
break;
}

var G__22421 = args22419.length;
switch (G__22421) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22419.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22426 = [];
var len__17956__auto___22429 = arguments.length;
var i__17957__auto___22430 = (0);
while(true){
if((i__17957__auto___22430 < len__17956__auto___22429)){
args22426.push((arguments[i__17957__auto___22430]));

var G__22431 = (i__17957__auto___22430 + (1));
i__17957__auto___22430 = G__22431;
continue;
} else {
}
break;
}

var G__22428 = args22426.length;
switch (G__22428) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22426.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22433 = [];
var len__17956__auto___22504 = arguments.length;
var i__17957__auto___22505 = (0);
while(true){
if((i__17957__auto___22505 < len__17956__auto___22504)){
args22433.push((arguments[i__17957__auto___22505]));

var G__22506 = (i__17957__auto___22505 + (1));
i__17957__auto___22505 = G__22506;
continue;
} else {
}
break;
}

var G__22435 = args22433.length;
switch (G__22435) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22433.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20489__auto___22508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22474){
var state_val_22475 = (state_22474[(1)]);
if((state_val_22475 === (7))){
var state_22474__$1 = state_22474;
var statearr_22476_22509 = state_22474__$1;
(statearr_22476_22509[(2)] = null);

(statearr_22476_22509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (1))){
var state_22474__$1 = state_22474;
var statearr_22477_22510 = state_22474__$1;
(statearr_22477_22510[(2)] = null);

(statearr_22477_22510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (4))){
var inst_22438 = (state_22474[(7)]);
var inst_22440 = (inst_22438 < cnt);
var state_22474__$1 = state_22474;
if(cljs.core.truth_(inst_22440)){
var statearr_22478_22511 = state_22474__$1;
(statearr_22478_22511[(1)] = (6));

} else {
var statearr_22479_22512 = state_22474__$1;
(statearr_22479_22512[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (15))){
var inst_22470 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22480_22513 = state_22474__$1;
(statearr_22480_22513[(2)] = inst_22470);

(statearr_22480_22513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (13))){
var inst_22463 = cljs.core.async.close_BANG_.call(null,out);
var state_22474__$1 = state_22474;
var statearr_22481_22514 = state_22474__$1;
(statearr_22481_22514[(2)] = inst_22463);

(statearr_22481_22514[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (6))){
var state_22474__$1 = state_22474;
var statearr_22482_22515 = state_22474__$1;
(statearr_22482_22515[(2)] = null);

(statearr_22482_22515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (3))){
var inst_22472 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22474__$1,inst_22472);
} else {
if((state_val_22475 === (12))){
var inst_22460 = (state_22474[(8)]);
var inst_22460__$1 = (state_22474[(2)]);
var inst_22461 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22460__$1);
var state_22474__$1 = (function (){var statearr_22483 = state_22474;
(statearr_22483[(8)] = inst_22460__$1);

return statearr_22483;
})();
if(cljs.core.truth_(inst_22461)){
var statearr_22484_22516 = state_22474__$1;
(statearr_22484_22516[(1)] = (13));

} else {
var statearr_22485_22517 = state_22474__$1;
(statearr_22485_22517[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (2))){
var inst_22437 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22438 = (0);
var state_22474__$1 = (function (){var statearr_22486 = state_22474;
(statearr_22486[(9)] = inst_22437);

(statearr_22486[(7)] = inst_22438);

return statearr_22486;
})();
var statearr_22487_22518 = state_22474__$1;
(statearr_22487_22518[(2)] = null);

(statearr_22487_22518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (11))){
var inst_22438 = (state_22474[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22474,(10),Object,null,(9));
var inst_22447 = chs__$1.call(null,inst_22438);
var inst_22448 = done.call(null,inst_22438);
var inst_22449 = cljs.core.async.take_BANG_.call(null,inst_22447,inst_22448);
var state_22474__$1 = state_22474;
var statearr_22488_22519 = state_22474__$1;
(statearr_22488_22519[(2)] = inst_22449);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (9))){
var inst_22438 = (state_22474[(7)]);
var inst_22451 = (state_22474[(2)]);
var inst_22452 = (inst_22438 + (1));
var inst_22438__$1 = inst_22452;
var state_22474__$1 = (function (){var statearr_22489 = state_22474;
(statearr_22489[(7)] = inst_22438__$1);

(statearr_22489[(10)] = inst_22451);

return statearr_22489;
})();
var statearr_22490_22520 = state_22474__$1;
(statearr_22490_22520[(2)] = null);

(statearr_22490_22520[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (5))){
var inst_22458 = (state_22474[(2)]);
var state_22474__$1 = (function (){var statearr_22491 = state_22474;
(statearr_22491[(11)] = inst_22458);

return statearr_22491;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22474__$1,(12),dchan);
} else {
if((state_val_22475 === (14))){
var inst_22460 = (state_22474[(8)]);
var inst_22465 = cljs.core.apply.call(null,f,inst_22460);
var state_22474__$1 = state_22474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22474__$1,(16),out,inst_22465);
} else {
if((state_val_22475 === (16))){
var inst_22467 = (state_22474[(2)]);
var state_22474__$1 = (function (){var statearr_22492 = state_22474;
(statearr_22492[(12)] = inst_22467);

return statearr_22492;
})();
var statearr_22493_22521 = state_22474__$1;
(statearr_22493_22521[(2)] = null);

(statearr_22493_22521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (10))){
var inst_22442 = (state_22474[(2)]);
var inst_22443 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22474__$1 = (function (){var statearr_22494 = state_22474;
(statearr_22494[(13)] = inst_22442);

return statearr_22494;
})();
var statearr_22495_22522 = state_22474__$1;
(statearr_22495_22522[(2)] = inst_22443);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22474__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22475 === (8))){
var inst_22456 = (state_22474[(2)]);
var state_22474__$1 = state_22474;
var statearr_22496_22523 = state_22474__$1;
(statearr_22496_22523[(2)] = inst_22456);

(statearr_22496_22523[(1)] = (5));


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
});})(c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20377__auto__,c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_22500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22500[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_22500[(1)] = (1));

return statearr_22500;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_22474){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22501){if((e22501 instanceof Object)){
var ex__20381__auto__ = e22501;
var statearr_22502_22524 = state_22474;
(statearr_22502_22524[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22525 = state_22474;
state_22474 = G__22525;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_22474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_22474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20491__auto__ = (function (){var statearr_22503 = f__20490__auto__.call(null);
(statearr_22503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22508);

return statearr_22503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22508,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22527 = [];
var len__17956__auto___22583 = arguments.length;
var i__17957__auto___22584 = (0);
while(true){
if((i__17957__auto___22584 < len__17956__auto___22583)){
args22527.push((arguments[i__17957__auto___22584]));

var G__22585 = (i__17957__auto___22584 + (1));
i__17957__auto___22584 = G__22585;
continue;
} else {
}
break;
}

var G__22529 = args22527.length;
switch (G__22529) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22527.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___22587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22587,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22587,out){
return (function (state_22559){
var state_val_22560 = (state_22559[(1)]);
if((state_val_22560 === (7))){
var inst_22539 = (state_22559[(7)]);
var inst_22538 = (state_22559[(8)]);
var inst_22538__$1 = (state_22559[(2)]);
var inst_22539__$1 = cljs.core.nth.call(null,inst_22538__$1,(0),null);
var inst_22540 = cljs.core.nth.call(null,inst_22538__$1,(1),null);
var inst_22541 = (inst_22539__$1 == null);
var state_22559__$1 = (function (){var statearr_22561 = state_22559;
(statearr_22561[(7)] = inst_22539__$1);

(statearr_22561[(9)] = inst_22540);

(statearr_22561[(8)] = inst_22538__$1);

return statearr_22561;
})();
if(cljs.core.truth_(inst_22541)){
var statearr_22562_22588 = state_22559__$1;
(statearr_22562_22588[(1)] = (8));

} else {
var statearr_22563_22589 = state_22559__$1;
(statearr_22563_22589[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (1))){
var inst_22530 = cljs.core.vec.call(null,chs);
var inst_22531 = inst_22530;
var state_22559__$1 = (function (){var statearr_22564 = state_22559;
(statearr_22564[(10)] = inst_22531);

return statearr_22564;
})();
var statearr_22565_22590 = state_22559__$1;
(statearr_22565_22590[(2)] = null);

(statearr_22565_22590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (4))){
var inst_22531 = (state_22559[(10)]);
var state_22559__$1 = state_22559;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22559__$1,(7),inst_22531);
} else {
if((state_val_22560 === (6))){
var inst_22555 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22566_22591 = state_22559__$1;
(statearr_22566_22591[(2)] = inst_22555);

(statearr_22566_22591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (3))){
var inst_22557 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22559__$1,inst_22557);
} else {
if((state_val_22560 === (2))){
var inst_22531 = (state_22559[(10)]);
var inst_22533 = cljs.core.count.call(null,inst_22531);
var inst_22534 = (inst_22533 > (0));
var state_22559__$1 = state_22559;
if(cljs.core.truth_(inst_22534)){
var statearr_22568_22592 = state_22559__$1;
(statearr_22568_22592[(1)] = (4));

} else {
var statearr_22569_22593 = state_22559__$1;
(statearr_22569_22593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (11))){
var inst_22531 = (state_22559[(10)]);
var inst_22548 = (state_22559[(2)]);
var tmp22567 = inst_22531;
var inst_22531__$1 = tmp22567;
var state_22559__$1 = (function (){var statearr_22570 = state_22559;
(statearr_22570[(10)] = inst_22531__$1);

(statearr_22570[(11)] = inst_22548);

return statearr_22570;
})();
var statearr_22571_22594 = state_22559__$1;
(statearr_22571_22594[(2)] = null);

(statearr_22571_22594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (9))){
var inst_22539 = (state_22559[(7)]);
var state_22559__$1 = state_22559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22559__$1,(11),out,inst_22539);
} else {
if((state_val_22560 === (5))){
var inst_22553 = cljs.core.async.close_BANG_.call(null,out);
var state_22559__$1 = state_22559;
var statearr_22572_22595 = state_22559__$1;
(statearr_22572_22595[(2)] = inst_22553);

(statearr_22572_22595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (10))){
var inst_22551 = (state_22559[(2)]);
var state_22559__$1 = state_22559;
var statearr_22573_22596 = state_22559__$1;
(statearr_22573_22596[(2)] = inst_22551);

(statearr_22573_22596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22560 === (8))){
var inst_22531 = (state_22559[(10)]);
var inst_22539 = (state_22559[(7)]);
var inst_22540 = (state_22559[(9)]);
var inst_22538 = (state_22559[(8)]);
var inst_22543 = (function (){var cs = inst_22531;
var vec__22536 = inst_22538;
var v = inst_22539;
var c = inst_22540;
return ((function (cs,vec__22536,v,c,inst_22531,inst_22539,inst_22540,inst_22538,state_val_22560,c__20489__auto___22587,out){
return (function (p1__22526_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22526_SHARP_);
});
;})(cs,vec__22536,v,c,inst_22531,inst_22539,inst_22540,inst_22538,state_val_22560,c__20489__auto___22587,out))
})();
var inst_22544 = cljs.core.filterv.call(null,inst_22543,inst_22531);
var inst_22531__$1 = inst_22544;
var state_22559__$1 = (function (){var statearr_22574 = state_22559;
(statearr_22574[(10)] = inst_22531__$1);

return statearr_22574;
})();
var statearr_22575_22597 = state_22559__$1;
(statearr_22575_22597[(2)] = null);

(statearr_22575_22597[(1)] = (2));


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
});})(c__20489__auto___22587,out))
;
return ((function (switch__20377__auto__,c__20489__auto___22587,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_22579 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22579[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_22579[(1)] = (1));

return statearr_22579;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_22559){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22580){if((e22580 instanceof Object)){
var ex__20381__auto__ = e22580;
var statearr_22581_22598 = state_22559;
(statearr_22581_22598[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22599 = state_22559;
state_22559 = G__22599;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_22559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_22559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22587,out))
})();
var state__20491__auto__ = (function (){var statearr_22582 = f__20490__auto__.call(null);
(statearr_22582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22587);

return statearr_22582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22587,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22600 = [];
var len__17956__auto___22649 = arguments.length;
var i__17957__auto___22650 = (0);
while(true){
if((i__17957__auto___22650 < len__17956__auto___22649)){
args22600.push((arguments[i__17957__auto___22650]));

var G__22651 = (i__17957__auto___22650 + (1));
i__17957__auto___22650 = G__22651;
continue;
} else {
}
break;
}

var G__22602 = args22600.length;
switch (G__22602) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22600.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___22653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22653,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22653,out){
return (function (state_22626){
var state_val_22627 = (state_22626[(1)]);
if((state_val_22627 === (7))){
var inst_22608 = (state_22626[(7)]);
var inst_22608__$1 = (state_22626[(2)]);
var inst_22609 = (inst_22608__$1 == null);
var inst_22610 = cljs.core.not.call(null,inst_22609);
var state_22626__$1 = (function (){var statearr_22628 = state_22626;
(statearr_22628[(7)] = inst_22608__$1);

return statearr_22628;
})();
if(inst_22610){
var statearr_22629_22654 = state_22626__$1;
(statearr_22629_22654[(1)] = (8));

} else {
var statearr_22630_22655 = state_22626__$1;
(statearr_22630_22655[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (1))){
var inst_22603 = (0);
var state_22626__$1 = (function (){var statearr_22631 = state_22626;
(statearr_22631[(8)] = inst_22603);

return statearr_22631;
})();
var statearr_22632_22656 = state_22626__$1;
(statearr_22632_22656[(2)] = null);

(statearr_22632_22656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (4))){
var state_22626__$1 = state_22626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22626__$1,(7),ch);
} else {
if((state_val_22627 === (6))){
var inst_22621 = (state_22626[(2)]);
var state_22626__$1 = state_22626;
var statearr_22633_22657 = state_22626__$1;
(statearr_22633_22657[(2)] = inst_22621);

(statearr_22633_22657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (3))){
var inst_22623 = (state_22626[(2)]);
var inst_22624 = cljs.core.async.close_BANG_.call(null,out);
var state_22626__$1 = (function (){var statearr_22634 = state_22626;
(statearr_22634[(9)] = inst_22623);

return statearr_22634;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22626__$1,inst_22624);
} else {
if((state_val_22627 === (2))){
var inst_22603 = (state_22626[(8)]);
var inst_22605 = (inst_22603 < n);
var state_22626__$1 = state_22626;
if(cljs.core.truth_(inst_22605)){
var statearr_22635_22658 = state_22626__$1;
(statearr_22635_22658[(1)] = (4));

} else {
var statearr_22636_22659 = state_22626__$1;
(statearr_22636_22659[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (11))){
var inst_22603 = (state_22626[(8)]);
var inst_22613 = (state_22626[(2)]);
var inst_22614 = (inst_22603 + (1));
var inst_22603__$1 = inst_22614;
var state_22626__$1 = (function (){var statearr_22637 = state_22626;
(statearr_22637[(10)] = inst_22613);

(statearr_22637[(8)] = inst_22603__$1);

return statearr_22637;
})();
var statearr_22638_22660 = state_22626__$1;
(statearr_22638_22660[(2)] = null);

(statearr_22638_22660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (9))){
var state_22626__$1 = state_22626;
var statearr_22639_22661 = state_22626__$1;
(statearr_22639_22661[(2)] = null);

(statearr_22639_22661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (5))){
var state_22626__$1 = state_22626;
var statearr_22640_22662 = state_22626__$1;
(statearr_22640_22662[(2)] = null);

(statearr_22640_22662[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (10))){
var inst_22618 = (state_22626[(2)]);
var state_22626__$1 = state_22626;
var statearr_22641_22663 = state_22626__$1;
(statearr_22641_22663[(2)] = inst_22618);

(statearr_22641_22663[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22627 === (8))){
var inst_22608 = (state_22626[(7)]);
var state_22626__$1 = state_22626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22626__$1,(11),out,inst_22608);
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
});})(c__20489__auto___22653,out))
;
return ((function (switch__20377__auto__,c__20489__auto___22653,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_22645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22645[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_22645[(1)] = (1));

return statearr_22645;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_22626){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22646){if((e22646 instanceof Object)){
var ex__20381__auto__ = e22646;
var statearr_22647_22664 = state_22626;
(statearr_22647_22664[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22665 = state_22626;
state_22626 = G__22665;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_22626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_22626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22653,out))
})();
var state__20491__auto__ = (function (){var statearr_22648 = f__20490__auto__.call(null);
(statearr_22648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22653);

return statearr_22648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22653,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22673 = (function (map_LT_,f,ch,meta22674){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22674 = meta22674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22675,meta22674__$1){
var self__ = this;
var _22675__$1 = this;
return (new cljs.core.async.t_cljs$core$async22673(self__.map_LT_,self__.f,self__.ch,meta22674__$1));
});

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22675){
var self__ = this;
var _22675__$1 = this;
return self__.meta22674;
});

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22676 = (function (map_LT_,f,ch,meta22674,_,fn1,meta22677){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22674 = meta22674;
this._ = _;
this.fn1 = fn1;
this.meta22677 = meta22677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22678,meta22677__$1){
var self__ = this;
var _22678__$1 = this;
return (new cljs.core.async.t_cljs$core$async22676(self__.map_LT_,self__.f,self__.ch,self__.meta22674,self__._,self__.fn1,meta22677__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22678){
var self__ = this;
var _22678__$1 = this;
return self__.meta22677;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22666_SHARP_){
return f1.call(null,(((p1__22666_SHARP_ == null))?null:self__.f.call(null,p1__22666_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22674","meta22674",-445502295,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22673","cljs.core.async/t_cljs$core$async22673",-1876011015,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22677","meta22677",-1101138949,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22676.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22676.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22676";

cljs.core.async.t_cljs$core$async22676.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22676");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22676 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22676(map_LT___$1,f__$1,ch__$1,meta22674__$1,___$2,fn1__$1,meta22677){
return (new cljs.core.async.t_cljs$core$async22676(map_LT___$1,f__$1,ch__$1,meta22674__$1,___$2,fn1__$1,meta22677));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22676(self__.map_LT_,self__.f,self__.ch,self__.meta22674,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16886__auto__ = ret;
if(cljs.core.truth_(and__16886__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16886__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22673.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22674","meta22674",-445502295,null)], null);
});

cljs.core.async.t_cljs$core$async22673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22673";

cljs.core.async.t_cljs$core$async22673.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22673");
});

cljs.core.async.__GT_t_cljs$core$async22673 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22673(map_LT___$1,f__$1,ch__$1,meta22674){
return (new cljs.core.async.t_cljs$core$async22673(map_LT___$1,f__$1,ch__$1,meta22674));
});

}

return (new cljs.core.async.t_cljs$core$async22673(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22682 = (function (map_GT_,f,ch,meta22683){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22683 = meta22683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22684,meta22683__$1){
var self__ = this;
var _22684__$1 = this;
return (new cljs.core.async.t_cljs$core$async22682(self__.map_GT_,self__.f,self__.ch,meta22683__$1));
});

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22684){
var self__ = this;
var _22684__$1 = this;
return self__.meta22683;
});

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22683","meta22683",579692608,null)], null);
});

cljs.core.async.t_cljs$core$async22682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22682";

cljs.core.async.t_cljs$core$async22682.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22682");
});

cljs.core.async.__GT_t_cljs$core$async22682 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22682(map_GT___$1,f__$1,ch__$1,meta22683){
return (new cljs.core.async.t_cljs$core$async22682(map_GT___$1,f__$1,ch__$1,meta22683));
});

}

return (new cljs.core.async.t_cljs$core$async22682(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22688 = (function (filter_GT_,p,ch,meta22689){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22689 = meta22689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22690,meta22689__$1){
var self__ = this;
var _22690__$1 = this;
return (new cljs.core.async.t_cljs$core$async22688(self__.filter_GT_,self__.p,self__.ch,meta22689__$1));
});

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22690){
var self__ = this;
var _22690__$1 = this;
return self__.meta22689;
});

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22688.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22689","meta22689",-1687018339,null)], null);
});

cljs.core.async.t_cljs$core$async22688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22688";

cljs.core.async.t_cljs$core$async22688.cljs$lang$ctorPrWriter = (function (this__17496__auto__,writer__17497__auto__,opt__17498__auto__){
return cljs.core._write.call(null,writer__17497__auto__,"cljs.core.async/t_cljs$core$async22688");
});

cljs.core.async.__GT_t_cljs$core$async22688 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22688(filter_GT___$1,p__$1,ch__$1,meta22689){
return (new cljs.core.async.t_cljs$core$async22688(filter_GT___$1,p__$1,ch__$1,meta22689));
});

}

return (new cljs.core.async.t_cljs$core$async22688(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22691 = [];
var len__17956__auto___22735 = arguments.length;
var i__17957__auto___22736 = (0);
while(true){
if((i__17957__auto___22736 < len__17956__auto___22735)){
args22691.push((arguments[i__17957__auto___22736]));

var G__22737 = (i__17957__auto___22736 + (1));
i__17957__auto___22736 = G__22737;
continue;
} else {
}
break;
}

var G__22693 = args22691.length;
switch (G__22693) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22691.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___22739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___22739,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___22739,out){
return (function (state_22714){
var state_val_22715 = (state_22714[(1)]);
if((state_val_22715 === (7))){
var inst_22710 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22716_22740 = state_22714__$1;
(statearr_22716_22740[(2)] = inst_22710);

(statearr_22716_22740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (1))){
var state_22714__$1 = state_22714;
var statearr_22717_22741 = state_22714__$1;
(statearr_22717_22741[(2)] = null);

(statearr_22717_22741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (4))){
var inst_22696 = (state_22714[(7)]);
var inst_22696__$1 = (state_22714[(2)]);
var inst_22697 = (inst_22696__$1 == null);
var state_22714__$1 = (function (){var statearr_22718 = state_22714;
(statearr_22718[(7)] = inst_22696__$1);

return statearr_22718;
})();
if(cljs.core.truth_(inst_22697)){
var statearr_22719_22742 = state_22714__$1;
(statearr_22719_22742[(1)] = (5));

} else {
var statearr_22720_22743 = state_22714__$1;
(statearr_22720_22743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (6))){
var inst_22696 = (state_22714[(7)]);
var inst_22701 = p.call(null,inst_22696);
var state_22714__$1 = state_22714;
if(cljs.core.truth_(inst_22701)){
var statearr_22721_22744 = state_22714__$1;
(statearr_22721_22744[(1)] = (8));

} else {
var statearr_22722_22745 = state_22714__$1;
(statearr_22722_22745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (3))){
var inst_22712 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22714__$1,inst_22712);
} else {
if((state_val_22715 === (2))){
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22714__$1,(4),ch);
} else {
if((state_val_22715 === (11))){
var inst_22704 = (state_22714[(2)]);
var state_22714__$1 = state_22714;
var statearr_22723_22746 = state_22714__$1;
(statearr_22723_22746[(2)] = inst_22704);

(statearr_22723_22746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (9))){
var state_22714__$1 = state_22714;
var statearr_22724_22747 = state_22714__$1;
(statearr_22724_22747[(2)] = null);

(statearr_22724_22747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (5))){
var inst_22699 = cljs.core.async.close_BANG_.call(null,out);
var state_22714__$1 = state_22714;
var statearr_22725_22748 = state_22714__$1;
(statearr_22725_22748[(2)] = inst_22699);

(statearr_22725_22748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (10))){
var inst_22707 = (state_22714[(2)]);
var state_22714__$1 = (function (){var statearr_22726 = state_22714;
(statearr_22726[(8)] = inst_22707);

return statearr_22726;
})();
var statearr_22727_22749 = state_22714__$1;
(statearr_22727_22749[(2)] = null);

(statearr_22727_22749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22715 === (8))){
var inst_22696 = (state_22714[(7)]);
var state_22714__$1 = state_22714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22714__$1,(11),out,inst_22696);
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
});})(c__20489__auto___22739,out))
;
return ((function (switch__20377__auto__,c__20489__auto___22739,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_22731 = [null,null,null,null,null,null,null,null,null];
(statearr_22731[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_22731[(1)] = (1));

return statearr_22731;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_22714){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22732){if((e22732 instanceof Object)){
var ex__20381__auto__ = e22732;
var statearr_22733_22750 = state_22714;
(statearr_22733_22750[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22751 = state_22714;
state_22714 = G__22751;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_22714){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_22714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___22739,out))
})();
var state__20491__auto__ = (function (){var statearr_22734 = f__20490__auto__.call(null);
(statearr_22734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___22739);

return statearr_22734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___22739,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22752 = [];
var len__17956__auto___22755 = arguments.length;
var i__17957__auto___22756 = (0);
while(true){
if((i__17957__auto___22756 < len__17956__auto___22755)){
args22752.push((arguments[i__17957__auto___22756]));

var G__22757 = (i__17957__auto___22756 + (1));
i__17957__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22754 = args22752.length;
switch (G__22754) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22752.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20489__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto__){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto__){
return (function (state_22924){
var state_val_22925 = (state_22924[(1)]);
if((state_val_22925 === (7))){
var inst_22920 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22926_22967 = state_22924__$1;
(statearr_22926_22967[(2)] = inst_22920);

(statearr_22926_22967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (20))){
var inst_22890 = (state_22924[(7)]);
var inst_22901 = (state_22924[(2)]);
var inst_22902 = cljs.core.next.call(null,inst_22890);
var inst_22876 = inst_22902;
var inst_22877 = null;
var inst_22878 = (0);
var inst_22879 = (0);
var state_22924__$1 = (function (){var statearr_22927 = state_22924;
(statearr_22927[(8)] = inst_22901);

(statearr_22927[(9)] = inst_22877);

(statearr_22927[(10)] = inst_22878);

(statearr_22927[(11)] = inst_22876);

(statearr_22927[(12)] = inst_22879);

return statearr_22927;
})();
var statearr_22928_22968 = state_22924__$1;
(statearr_22928_22968[(2)] = null);

(statearr_22928_22968[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (1))){
var state_22924__$1 = state_22924;
var statearr_22929_22969 = state_22924__$1;
(statearr_22929_22969[(2)] = null);

(statearr_22929_22969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (4))){
var inst_22865 = (state_22924[(13)]);
var inst_22865__$1 = (state_22924[(2)]);
var inst_22866 = (inst_22865__$1 == null);
var state_22924__$1 = (function (){var statearr_22930 = state_22924;
(statearr_22930[(13)] = inst_22865__$1);

return statearr_22930;
})();
if(cljs.core.truth_(inst_22866)){
var statearr_22931_22970 = state_22924__$1;
(statearr_22931_22970[(1)] = (5));

} else {
var statearr_22932_22971 = state_22924__$1;
(statearr_22932_22971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (15))){
var state_22924__$1 = state_22924;
var statearr_22936_22972 = state_22924__$1;
(statearr_22936_22972[(2)] = null);

(statearr_22936_22972[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (21))){
var state_22924__$1 = state_22924;
var statearr_22937_22973 = state_22924__$1;
(statearr_22937_22973[(2)] = null);

(statearr_22937_22973[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (13))){
var inst_22877 = (state_22924[(9)]);
var inst_22878 = (state_22924[(10)]);
var inst_22876 = (state_22924[(11)]);
var inst_22879 = (state_22924[(12)]);
var inst_22886 = (state_22924[(2)]);
var inst_22887 = (inst_22879 + (1));
var tmp22933 = inst_22877;
var tmp22934 = inst_22878;
var tmp22935 = inst_22876;
var inst_22876__$1 = tmp22935;
var inst_22877__$1 = tmp22933;
var inst_22878__$1 = tmp22934;
var inst_22879__$1 = inst_22887;
var state_22924__$1 = (function (){var statearr_22938 = state_22924;
(statearr_22938[(9)] = inst_22877__$1);

(statearr_22938[(10)] = inst_22878__$1);

(statearr_22938[(11)] = inst_22876__$1);

(statearr_22938[(12)] = inst_22879__$1);

(statearr_22938[(14)] = inst_22886);

return statearr_22938;
})();
var statearr_22939_22974 = state_22924__$1;
(statearr_22939_22974[(2)] = null);

(statearr_22939_22974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (22))){
var state_22924__$1 = state_22924;
var statearr_22940_22975 = state_22924__$1;
(statearr_22940_22975[(2)] = null);

(statearr_22940_22975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (6))){
var inst_22865 = (state_22924[(13)]);
var inst_22874 = f.call(null,inst_22865);
var inst_22875 = cljs.core.seq.call(null,inst_22874);
var inst_22876 = inst_22875;
var inst_22877 = null;
var inst_22878 = (0);
var inst_22879 = (0);
var state_22924__$1 = (function (){var statearr_22941 = state_22924;
(statearr_22941[(9)] = inst_22877);

(statearr_22941[(10)] = inst_22878);

(statearr_22941[(11)] = inst_22876);

(statearr_22941[(12)] = inst_22879);

return statearr_22941;
})();
var statearr_22942_22976 = state_22924__$1;
(statearr_22942_22976[(2)] = null);

(statearr_22942_22976[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (17))){
var inst_22890 = (state_22924[(7)]);
var inst_22894 = cljs.core.chunk_first.call(null,inst_22890);
var inst_22895 = cljs.core.chunk_rest.call(null,inst_22890);
var inst_22896 = cljs.core.count.call(null,inst_22894);
var inst_22876 = inst_22895;
var inst_22877 = inst_22894;
var inst_22878 = inst_22896;
var inst_22879 = (0);
var state_22924__$1 = (function (){var statearr_22943 = state_22924;
(statearr_22943[(9)] = inst_22877);

(statearr_22943[(10)] = inst_22878);

(statearr_22943[(11)] = inst_22876);

(statearr_22943[(12)] = inst_22879);

return statearr_22943;
})();
var statearr_22944_22977 = state_22924__$1;
(statearr_22944_22977[(2)] = null);

(statearr_22944_22977[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (3))){
var inst_22922 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22924__$1,inst_22922);
} else {
if((state_val_22925 === (12))){
var inst_22910 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22945_22978 = state_22924__$1;
(statearr_22945_22978[(2)] = inst_22910);

(statearr_22945_22978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (2))){
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22924__$1,(4),in$);
} else {
if((state_val_22925 === (23))){
var inst_22918 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22946_22979 = state_22924__$1;
(statearr_22946_22979[(2)] = inst_22918);

(statearr_22946_22979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (19))){
var inst_22905 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22947_22980 = state_22924__$1;
(statearr_22947_22980[(2)] = inst_22905);

(statearr_22947_22980[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (11))){
var inst_22876 = (state_22924[(11)]);
var inst_22890 = (state_22924[(7)]);
var inst_22890__$1 = cljs.core.seq.call(null,inst_22876);
var state_22924__$1 = (function (){var statearr_22948 = state_22924;
(statearr_22948[(7)] = inst_22890__$1);

return statearr_22948;
})();
if(inst_22890__$1){
var statearr_22949_22981 = state_22924__$1;
(statearr_22949_22981[(1)] = (14));

} else {
var statearr_22950_22982 = state_22924__$1;
(statearr_22950_22982[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (9))){
var inst_22912 = (state_22924[(2)]);
var inst_22913 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22924__$1 = (function (){var statearr_22951 = state_22924;
(statearr_22951[(15)] = inst_22912);

return statearr_22951;
})();
if(cljs.core.truth_(inst_22913)){
var statearr_22952_22983 = state_22924__$1;
(statearr_22952_22983[(1)] = (21));

} else {
var statearr_22953_22984 = state_22924__$1;
(statearr_22953_22984[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (5))){
var inst_22868 = cljs.core.async.close_BANG_.call(null,out);
var state_22924__$1 = state_22924;
var statearr_22954_22985 = state_22924__$1;
(statearr_22954_22985[(2)] = inst_22868);

(statearr_22954_22985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (14))){
var inst_22890 = (state_22924[(7)]);
var inst_22892 = cljs.core.chunked_seq_QMARK_.call(null,inst_22890);
var state_22924__$1 = state_22924;
if(inst_22892){
var statearr_22955_22986 = state_22924__$1;
(statearr_22955_22986[(1)] = (17));

} else {
var statearr_22956_22987 = state_22924__$1;
(statearr_22956_22987[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (16))){
var inst_22908 = (state_22924[(2)]);
var state_22924__$1 = state_22924;
var statearr_22957_22988 = state_22924__$1;
(statearr_22957_22988[(2)] = inst_22908);

(statearr_22957_22988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22925 === (10))){
var inst_22877 = (state_22924[(9)]);
var inst_22879 = (state_22924[(12)]);
var inst_22884 = cljs.core._nth.call(null,inst_22877,inst_22879);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(13),out,inst_22884);
} else {
if((state_val_22925 === (18))){
var inst_22890 = (state_22924[(7)]);
var inst_22899 = cljs.core.first.call(null,inst_22890);
var state_22924__$1 = state_22924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22924__$1,(20),out,inst_22899);
} else {
if((state_val_22925 === (8))){
var inst_22878 = (state_22924[(10)]);
var inst_22879 = (state_22924[(12)]);
var inst_22881 = (inst_22879 < inst_22878);
var inst_22882 = inst_22881;
var state_22924__$1 = state_22924;
if(cljs.core.truth_(inst_22882)){
var statearr_22958_22989 = state_22924__$1;
(statearr_22958_22989[(1)] = (10));

} else {
var statearr_22959_22990 = state_22924__$1;
(statearr_22959_22990[(1)] = (11));

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
});})(c__20489__auto__))
;
return ((function (switch__20377__auto__,c__20489__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____0 = (function (){
var statearr_22963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__);

(statearr_22963[(1)] = (1));

return statearr_22963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____1 = (function (state_22924){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_22924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e22964){if((e22964 instanceof Object)){
var ex__20381__auto__ = e22964;
var statearr_22965_22991 = state_22924;
(statearr_22965_22991[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22992 = state_22924;
state_22924 = G__22992;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__ = function(state_22924){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____1.call(this,state_22924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20378__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto__))
})();
var state__20491__auto__ = (function (){var statearr_22966 = f__20490__auto__.call(null);
(statearr_22966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto__);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto__))
);

return c__20489__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22993 = [];
var len__17956__auto___22996 = arguments.length;
var i__17957__auto___22997 = (0);
while(true){
if((i__17957__auto___22997 < len__17956__auto___22996)){
args22993.push((arguments[i__17957__auto___22997]));

var G__22998 = (i__17957__auto___22997 + (1));
i__17957__auto___22997 = G__22998;
continue;
} else {
}
break;
}

var G__22995 = args22993.length;
switch (G__22995) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22993.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23000 = [];
var len__17956__auto___23003 = arguments.length;
var i__17957__auto___23004 = (0);
while(true){
if((i__17957__auto___23004 < len__17956__auto___23003)){
args23000.push((arguments[i__17957__auto___23004]));

var G__23005 = (i__17957__auto___23004 + (1));
i__17957__auto___23004 = G__23005;
continue;
} else {
}
break;
}

var G__23002 = args23000.length;
switch (G__23002) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23000.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23007 = [];
var len__17956__auto___23058 = arguments.length;
var i__17957__auto___23059 = (0);
while(true){
if((i__17957__auto___23059 < len__17956__auto___23058)){
args23007.push((arguments[i__17957__auto___23059]));

var G__23060 = (i__17957__auto___23059 + (1));
i__17957__auto___23059 = G__23060;
continue;
} else {
}
break;
}

var G__23009 = args23007.length;
switch (G__23009) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23007.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___23062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___23062,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___23062,out){
return (function (state_23033){
var state_val_23034 = (state_23033[(1)]);
if((state_val_23034 === (7))){
var inst_23028 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23035_23063 = state_23033__$1;
(statearr_23035_23063[(2)] = inst_23028);

(statearr_23035_23063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (1))){
var inst_23010 = null;
var state_23033__$1 = (function (){var statearr_23036 = state_23033;
(statearr_23036[(7)] = inst_23010);

return statearr_23036;
})();
var statearr_23037_23064 = state_23033__$1;
(statearr_23037_23064[(2)] = null);

(statearr_23037_23064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (4))){
var inst_23013 = (state_23033[(8)]);
var inst_23013__$1 = (state_23033[(2)]);
var inst_23014 = (inst_23013__$1 == null);
var inst_23015 = cljs.core.not.call(null,inst_23014);
var state_23033__$1 = (function (){var statearr_23038 = state_23033;
(statearr_23038[(8)] = inst_23013__$1);

return statearr_23038;
})();
if(inst_23015){
var statearr_23039_23065 = state_23033__$1;
(statearr_23039_23065[(1)] = (5));

} else {
var statearr_23040_23066 = state_23033__$1;
(statearr_23040_23066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (6))){
var state_23033__$1 = state_23033;
var statearr_23041_23067 = state_23033__$1;
(statearr_23041_23067[(2)] = null);

(statearr_23041_23067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (3))){
var inst_23030 = (state_23033[(2)]);
var inst_23031 = cljs.core.async.close_BANG_.call(null,out);
var state_23033__$1 = (function (){var statearr_23042 = state_23033;
(statearr_23042[(9)] = inst_23030);

return statearr_23042;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23033__$1,inst_23031);
} else {
if((state_val_23034 === (2))){
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23033__$1,(4),ch);
} else {
if((state_val_23034 === (11))){
var inst_23013 = (state_23033[(8)]);
var inst_23022 = (state_23033[(2)]);
var inst_23010 = inst_23013;
var state_23033__$1 = (function (){var statearr_23043 = state_23033;
(statearr_23043[(10)] = inst_23022);

(statearr_23043[(7)] = inst_23010);

return statearr_23043;
})();
var statearr_23044_23068 = state_23033__$1;
(statearr_23044_23068[(2)] = null);

(statearr_23044_23068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (9))){
var inst_23013 = (state_23033[(8)]);
var state_23033__$1 = state_23033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23033__$1,(11),out,inst_23013);
} else {
if((state_val_23034 === (5))){
var inst_23010 = (state_23033[(7)]);
var inst_23013 = (state_23033[(8)]);
var inst_23017 = cljs.core._EQ_.call(null,inst_23013,inst_23010);
var state_23033__$1 = state_23033;
if(inst_23017){
var statearr_23046_23069 = state_23033__$1;
(statearr_23046_23069[(1)] = (8));

} else {
var statearr_23047_23070 = state_23033__$1;
(statearr_23047_23070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (10))){
var inst_23025 = (state_23033[(2)]);
var state_23033__$1 = state_23033;
var statearr_23048_23071 = state_23033__$1;
(statearr_23048_23071[(2)] = inst_23025);

(statearr_23048_23071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23034 === (8))){
var inst_23010 = (state_23033[(7)]);
var tmp23045 = inst_23010;
var inst_23010__$1 = tmp23045;
var state_23033__$1 = (function (){var statearr_23049 = state_23033;
(statearr_23049[(7)] = inst_23010__$1);

return statearr_23049;
})();
var statearr_23050_23072 = state_23033__$1;
(statearr_23050_23072[(2)] = null);

(statearr_23050_23072[(1)] = (2));


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
});})(c__20489__auto___23062,out))
;
return ((function (switch__20377__auto__,c__20489__auto___23062,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_23054 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23054[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_23054[(1)] = (1));

return statearr_23054;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_23033){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_23033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e23055){if((e23055 instanceof Object)){
var ex__20381__auto__ = e23055;
var statearr_23056_23073 = state_23033;
(statearr_23056_23073[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23074 = state_23033;
state_23033 = G__23074;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_23033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_23033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___23062,out))
})();
var state__20491__auto__ = (function (){var statearr_23057 = f__20490__auto__.call(null);
(statearr_23057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___23062);

return statearr_23057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___23062,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23075 = [];
var len__17956__auto___23145 = arguments.length;
var i__17957__auto___23146 = (0);
while(true){
if((i__17957__auto___23146 < len__17956__auto___23145)){
args23075.push((arguments[i__17957__auto___23146]));

var G__23147 = (i__17957__auto___23146 + (1));
i__17957__auto___23146 = G__23147;
continue;
} else {
}
break;
}

var G__23077 = args23075.length;
switch (G__23077) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23075.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___23149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___23149,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___23149,out){
return (function (state_23115){
var state_val_23116 = (state_23115[(1)]);
if((state_val_23116 === (7))){
var inst_23111 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23117_23150 = state_23115__$1;
(statearr_23117_23150[(2)] = inst_23111);

(statearr_23117_23150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (1))){
var inst_23078 = (new Array(n));
var inst_23079 = inst_23078;
var inst_23080 = (0);
var state_23115__$1 = (function (){var statearr_23118 = state_23115;
(statearr_23118[(7)] = inst_23080);

(statearr_23118[(8)] = inst_23079);

return statearr_23118;
})();
var statearr_23119_23151 = state_23115__$1;
(statearr_23119_23151[(2)] = null);

(statearr_23119_23151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (4))){
var inst_23083 = (state_23115[(9)]);
var inst_23083__$1 = (state_23115[(2)]);
var inst_23084 = (inst_23083__$1 == null);
var inst_23085 = cljs.core.not.call(null,inst_23084);
var state_23115__$1 = (function (){var statearr_23120 = state_23115;
(statearr_23120[(9)] = inst_23083__$1);

return statearr_23120;
})();
if(inst_23085){
var statearr_23121_23152 = state_23115__$1;
(statearr_23121_23152[(1)] = (5));

} else {
var statearr_23122_23153 = state_23115__$1;
(statearr_23122_23153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (15))){
var inst_23105 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23123_23154 = state_23115__$1;
(statearr_23123_23154[(2)] = inst_23105);

(statearr_23123_23154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (13))){
var state_23115__$1 = state_23115;
var statearr_23124_23155 = state_23115__$1;
(statearr_23124_23155[(2)] = null);

(statearr_23124_23155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (6))){
var inst_23080 = (state_23115[(7)]);
var inst_23101 = (inst_23080 > (0));
var state_23115__$1 = state_23115;
if(cljs.core.truth_(inst_23101)){
var statearr_23125_23156 = state_23115__$1;
(statearr_23125_23156[(1)] = (12));

} else {
var statearr_23126_23157 = state_23115__$1;
(statearr_23126_23157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (3))){
var inst_23113 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23115__$1,inst_23113);
} else {
if((state_val_23116 === (12))){
var inst_23079 = (state_23115[(8)]);
var inst_23103 = cljs.core.vec.call(null,inst_23079);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23115__$1,(15),out,inst_23103);
} else {
if((state_val_23116 === (2))){
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23115__$1,(4),ch);
} else {
if((state_val_23116 === (11))){
var inst_23095 = (state_23115[(2)]);
var inst_23096 = (new Array(n));
var inst_23079 = inst_23096;
var inst_23080 = (0);
var state_23115__$1 = (function (){var statearr_23127 = state_23115;
(statearr_23127[(10)] = inst_23095);

(statearr_23127[(7)] = inst_23080);

(statearr_23127[(8)] = inst_23079);

return statearr_23127;
})();
var statearr_23128_23158 = state_23115__$1;
(statearr_23128_23158[(2)] = null);

(statearr_23128_23158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (9))){
var inst_23079 = (state_23115[(8)]);
var inst_23093 = cljs.core.vec.call(null,inst_23079);
var state_23115__$1 = state_23115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23115__$1,(11),out,inst_23093);
} else {
if((state_val_23116 === (5))){
var inst_23080 = (state_23115[(7)]);
var inst_23079 = (state_23115[(8)]);
var inst_23088 = (state_23115[(11)]);
var inst_23083 = (state_23115[(9)]);
var inst_23087 = (inst_23079[inst_23080] = inst_23083);
var inst_23088__$1 = (inst_23080 + (1));
var inst_23089 = (inst_23088__$1 < n);
var state_23115__$1 = (function (){var statearr_23129 = state_23115;
(statearr_23129[(12)] = inst_23087);

(statearr_23129[(11)] = inst_23088__$1);

return statearr_23129;
})();
if(cljs.core.truth_(inst_23089)){
var statearr_23130_23159 = state_23115__$1;
(statearr_23130_23159[(1)] = (8));

} else {
var statearr_23131_23160 = state_23115__$1;
(statearr_23131_23160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (14))){
var inst_23108 = (state_23115[(2)]);
var inst_23109 = cljs.core.async.close_BANG_.call(null,out);
var state_23115__$1 = (function (){var statearr_23133 = state_23115;
(statearr_23133[(13)] = inst_23108);

return statearr_23133;
})();
var statearr_23134_23161 = state_23115__$1;
(statearr_23134_23161[(2)] = inst_23109);

(statearr_23134_23161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (10))){
var inst_23099 = (state_23115[(2)]);
var state_23115__$1 = state_23115;
var statearr_23135_23162 = state_23115__$1;
(statearr_23135_23162[(2)] = inst_23099);

(statearr_23135_23162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23116 === (8))){
var inst_23079 = (state_23115[(8)]);
var inst_23088 = (state_23115[(11)]);
var tmp23132 = inst_23079;
var inst_23079__$1 = tmp23132;
var inst_23080 = inst_23088;
var state_23115__$1 = (function (){var statearr_23136 = state_23115;
(statearr_23136[(7)] = inst_23080);

(statearr_23136[(8)] = inst_23079__$1);

return statearr_23136;
})();
var statearr_23137_23163 = state_23115__$1;
(statearr_23137_23163[(2)] = null);

(statearr_23137_23163[(1)] = (2));


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
});})(c__20489__auto___23149,out))
;
return ((function (switch__20377__auto__,c__20489__auto___23149,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_23141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23141[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_23141[(1)] = (1));

return statearr_23141;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_23115){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_23115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e23142){if((e23142 instanceof Object)){
var ex__20381__auto__ = e23142;
var statearr_23143_23164 = state_23115;
(statearr_23143_23164[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23165 = state_23115;
state_23115 = G__23165;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_23115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_23115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___23149,out))
})();
var state__20491__auto__ = (function (){var statearr_23144 = f__20490__auto__.call(null);
(statearr_23144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___23149);

return statearr_23144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___23149,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23166 = [];
var len__17956__auto___23240 = arguments.length;
var i__17957__auto___23241 = (0);
while(true){
if((i__17957__auto___23241 < len__17956__auto___23240)){
args23166.push((arguments[i__17957__auto___23241]));

var G__23242 = (i__17957__auto___23241 + (1));
i__17957__auto___23241 = G__23242;
continue;
} else {
}
break;
}

var G__23168 = args23166.length;
switch (G__23168) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23166.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20489__auto___23244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20489__auto___23244,out){
return (function (){
var f__20490__auto__ = (function (){var switch__20377__auto__ = ((function (c__20489__auto___23244,out){
return (function (state_23210){
var state_val_23211 = (state_23210[(1)]);
if((state_val_23211 === (7))){
var inst_23206 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23212_23245 = state_23210__$1;
(statearr_23212_23245[(2)] = inst_23206);

(statearr_23212_23245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (1))){
var inst_23169 = [];
var inst_23170 = inst_23169;
var inst_23171 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23210__$1 = (function (){var statearr_23213 = state_23210;
(statearr_23213[(7)] = inst_23171);

(statearr_23213[(8)] = inst_23170);

return statearr_23213;
})();
var statearr_23214_23246 = state_23210__$1;
(statearr_23214_23246[(2)] = null);

(statearr_23214_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (4))){
var inst_23174 = (state_23210[(9)]);
var inst_23174__$1 = (state_23210[(2)]);
var inst_23175 = (inst_23174__$1 == null);
var inst_23176 = cljs.core.not.call(null,inst_23175);
var state_23210__$1 = (function (){var statearr_23215 = state_23210;
(statearr_23215[(9)] = inst_23174__$1);

return statearr_23215;
})();
if(inst_23176){
var statearr_23216_23247 = state_23210__$1;
(statearr_23216_23247[(1)] = (5));

} else {
var statearr_23217_23248 = state_23210__$1;
(statearr_23217_23248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (15))){
var inst_23200 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23218_23249 = state_23210__$1;
(statearr_23218_23249[(2)] = inst_23200);

(statearr_23218_23249[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (13))){
var state_23210__$1 = state_23210;
var statearr_23219_23250 = state_23210__$1;
(statearr_23219_23250[(2)] = null);

(statearr_23219_23250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (6))){
var inst_23170 = (state_23210[(8)]);
var inst_23195 = inst_23170.length;
var inst_23196 = (inst_23195 > (0));
var state_23210__$1 = state_23210;
if(cljs.core.truth_(inst_23196)){
var statearr_23220_23251 = state_23210__$1;
(statearr_23220_23251[(1)] = (12));

} else {
var statearr_23221_23252 = state_23210__$1;
(statearr_23221_23252[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (3))){
var inst_23208 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23210__$1,inst_23208);
} else {
if((state_val_23211 === (12))){
var inst_23170 = (state_23210[(8)]);
var inst_23198 = cljs.core.vec.call(null,inst_23170);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23210__$1,(15),out,inst_23198);
} else {
if((state_val_23211 === (2))){
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23210__$1,(4),ch);
} else {
if((state_val_23211 === (11))){
var inst_23178 = (state_23210[(10)]);
var inst_23174 = (state_23210[(9)]);
var inst_23188 = (state_23210[(2)]);
var inst_23189 = [];
var inst_23190 = inst_23189.push(inst_23174);
var inst_23170 = inst_23189;
var inst_23171 = inst_23178;
var state_23210__$1 = (function (){var statearr_23222 = state_23210;
(statearr_23222[(7)] = inst_23171);

(statearr_23222[(8)] = inst_23170);

(statearr_23222[(11)] = inst_23190);

(statearr_23222[(12)] = inst_23188);

return statearr_23222;
})();
var statearr_23223_23253 = state_23210__$1;
(statearr_23223_23253[(2)] = null);

(statearr_23223_23253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (9))){
var inst_23170 = (state_23210[(8)]);
var inst_23186 = cljs.core.vec.call(null,inst_23170);
var state_23210__$1 = state_23210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23210__$1,(11),out,inst_23186);
} else {
if((state_val_23211 === (5))){
var inst_23171 = (state_23210[(7)]);
var inst_23178 = (state_23210[(10)]);
var inst_23174 = (state_23210[(9)]);
var inst_23178__$1 = f.call(null,inst_23174);
var inst_23179 = cljs.core._EQ_.call(null,inst_23178__$1,inst_23171);
var inst_23180 = cljs.core.keyword_identical_QMARK_.call(null,inst_23171,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23181 = (inst_23179) || (inst_23180);
var state_23210__$1 = (function (){var statearr_23224 = state_23210;
(statearr_23224[(10)] = inst_23178__$1);

return statearr_23224;
})();
if(cljs.core.truth_(inst_23181)){
var statearr_23225_23254 = state_23210__$1;
(statearr_23225_23254[(1)] = (8));

} else {
var statearr_23226_23255 = state_23210__$1;
(statearr_23226_23255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (14))){
var inst_23203 = (state_23210[(2)]);
var inst_23204 = cljs.core.async.close_BANG_.call(null,out);
var state_23210__$1 = (function (){var statearr_23228 = state_23210;
(statearr_23228[(13)] = inst_23203);

return statearr_23228;
})();
var statearr_23229_23256 = state_23210__$1;
(statearr_23229_23256[(2)] = inst_23204);

(statearr_23229_23256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (10))){
var inst_23193 = (state_23210[(2)]);
var state_23210__$1 = state_23210;
var statearr_23230_23257 = state_23210__$1;
(statearr_23230_23257[(2)] = inst_23193);

(statearr_23230_23257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23211 === (8))){
var inst_23178 = (state_23210[(10)]);
var inst_23174 = (state_23210[(9)]);
var inst_23170 = (state_23210[(8)]);
var inst_23183 = inst_23170.push(inst_23174);
var tmp23227 = inst_23170;
var inst_23170__$1 = tmp23227;
var inst_23171 = inst_23178;
var state_23210__$1 = (function (){var statearr_23231 = state_23210;
(statearr_23231[(14)] = inst_23183);

(statearr_23231[(7)] = inst_23171);

(statearr_23231[(8)] = inst_23170__$1);

return statearr_23231;
})();
var statearr_23232_23258 = state_23210__$1;
(statearr_23232_23258[(2)] = null);

(statearr_23232_23258[(1)] = (2));


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
});})(c__20489__auto___23244,out))
;
return ((function (switch__20377__auto__,c__20489__auto___23244,out){
return (function() {
var cljs$core$async$state_machine__20378__auto__ = null;
var cljs$core$async$state_machine__20378__auto____0 = (function (){
var statearr_23236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23236[(0)] = cljs$core$async$state_machine__20378__auto__);

(statearr_23236[(1)] = (1));

return statearr_23236;
});
var cljs$core$async$state_machine__20378__auto____1 = (function (state_23210){
while(true){
var ret_value__20379__auto__ = (function (){try{while(true){
var result__20380__auto__ = switch__20377__auto__.call(null,state_23210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20380__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object)){
var ex__20381__auto__ = e23237;
var statearr_23238_23259 = state_23210;
(statearr_23238_23259[(5)] = ex__20381__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20379__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23260 = state_23210;
state_23210 = G__23260;
continue;
} else {
return ret_value__20379__auto__;
}
break;
}
});
cljs$core$async$state_machine__20378__auto__ = function(state_23210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20378__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20378__auto____1.call(this,state_23210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20378__auto____0;
cljs$core$async$state_machine__20378__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20378__auto____1;
return cljs$core$async$state_machine__20378__auto__;
})()
;})(switch__20377__auto__,c__20489__auto___23244,out))
})();
var state__20491__auto__ = (function (){var statearr_23239 = f__20490__auto__.call(null);
(statearr_23239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20489__auto___23244);

return statearr_23239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20491__auto__);
});})(c__20489__auto___23244,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map