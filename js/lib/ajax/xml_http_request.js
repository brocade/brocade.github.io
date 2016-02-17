// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__11189,handler){
var map__11190 = p__11189;
var map__11190__$1 = ((((!((map__11190 == null)))?((((map__11190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11190):map__11190);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11190__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11190__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11190__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11190__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11190__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11190__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11190__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__11190,map__11190__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__11188_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__11188_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__11190,map__11190__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___11198 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___11198)){
var response_type_11199 = temp__4425__auto___11198;
this$__$1.responseType = cljs.core.name(response_type_11199);
} else {
}

var seq__11192_11200 = cljs.core.seq(headers);
var chunk__11193_11201 = null;
var count__11194_11202 = (0);
var i__11195_11203 = (0);
while(true){
if((i__11195_11203 < count__11194_11202)){
var vec__11196_11204 = chunk__11193_11201.cljs$core$IIndexed$_nth$arity$2(null,i__11195_11203);
var k_11205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11196_11204,(0),null);
var v_11206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11196_11204,(1),null);
this$__$1.setRequestHeader(k_11205,v_11206);

var G__11207 = seq__11192_11200;
var G__11208 = chunk__11193_11201;
var G__11209 = count__11194_11202;
var G__11210 = (i__11195_11203 + (1));
seq__11192_11200 = G__11207;
chunk__11193_11201 = G__11208;
count__11194_11202 = G__11209;
i__11195_11203 = G__11210;
continue;
} else {
var temp__4425__auto___11211 = cljs.core.seq(seq__11192_11200);
if(temp__4425__auto___11211){
var seq__11192_11212__$1 = temp__4425__auto___11211;
if(cljs.core.chunked_seq_QMARK_(seq__11192_11212__$1)){
var c__5474__auto___11213 = cljs.core.chunk_first(seq__11192_11212__$1);
var G__11214 = cljs.core.chunk_rest(seq__11192_11212__$1);
var G__11215 = c__5474__auto___11213;
var G__11216 = cljs.core.count(c__5474__auto___11213);
var G__11217 = (0);
seq__11192_11200 = G__11214;
chunk__11193_11201 = G__11215;
count__11194_11202 = G__11216;
i__11195_11203 = G__11217;
continue;
} else {
var vec__11197_11218 = cljs.core.first(seq__11192_11212__$1);
var k_11219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197_11218,(0),null);
var v_11220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11197_11218,(1),null);
this$__$1.setRequestHeader(k_11219,v_11220);

var G__11221 = cljs.core.next(seq__11192_11212__$1);
var G__11222 = null;
var G__11223 = (0);
var G__11224 = (0);
seq__11192_11200 = G__11221;
chunk__11193_11201 = G__11222;
count__11194_11202 = G__11223;
i__11195_11203 = G__11224;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4671__auto__ = body;
if(cljs.core.truth_(or__4671__auto__)){
return or__4671__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
