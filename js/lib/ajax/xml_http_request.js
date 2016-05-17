// Compiled by ClojureScript 1.8.51 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__20361,handler){
var map__20362 = p__20361;
var map__20362__$1 = ((((!((map__20362 == null)))?((((map__20362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20362):map__20362);
var uri = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__20362__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__20362,map__20362__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__20360_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__20360_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__20362,map__20362__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___20370 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___20370)){
var response_type_20371 = temp__4657__auto___20370;
this$__$1.responseType = cljs.core.name.call(null,response_type_20371);
} else {
}

var seq__20364_20372 = cljs.core.seq.call(null,headers);
var chunk__20365_20373 = null;
var count__20366_20374 = (0);
var i__20367_20375 = (0);
while(true){
if((i__20367_20375 < count__20366_20374)){
var vec__20368_20376 = cljs.core._nth.call(null,chunk__20365_20373,i__20367_20375);
var k_20377 = cljs.core.nth.call(null,vec__20368_20376,(0),null);
var v_20378 = cljs.core.nth.call(null,vec__20368_20376,(1),null);
this$__$1.setRequestHeader(k_20377,v_20378);

var G__20379 = seq__20364_20372;
var G__20380 = chunk__20365_20373;
var G__20381 = count__20366_20374;
var G__20382 = (i__20367_20375 + (1));
seq__20364_20372 = G__20379;
chunk__20365_20373 = G__20380;
count__20366_20374 = G__20381;
i__20367_20375 = G__20382;
continue;
} else {
var temp__4657__auto___20383 = cljs.core.seq.call(null,seq__20364_20372);
if(temp__4657__auto___20383){
var seq__20364_20384__$1 = temp__4657__auto___20383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20364_20384__$1)){
var c__19266__auto___20385 = cljs.core.chunk_first.call(null,seq__20364_20384__$1);
var G__20386 = cljs.core.chunk_rest.call(null,seq__20364_20384__$1);
var G__20387 = c__19266__auto___20385;
var G__20388 = cljs.core.count.call(null,c__19266__auto___20385);
var G__20389 = (0);
seq__20364_20372 = G__20386;
chunk__20365_20373 = G__20387;
count__20366_20374 = G__20388;
i__20367_20375 = G__20389;
continue;
} else {
var vec__20369_20390 = cljs.core.first.call(null,seq__20364_20384__$1);
var k_20391 = cljs.core.nth.call(null,vec__20369_20390,(0),null);
var v_20392 = cljs.core.nth.call(null,vec__20369_20390,(1),null);
this$__$1.setRequestHeader(k_20391,v_20392);

var G__20393 = cljs.core.next.call(null,seq__20364_20384__$1);
var G__20394 = null;
var G__20395 = (0);
var G__20396 = (0);
seq__20364_20372 = G__20393;
chunk__20365_20373 = G__20394;
count__20366_20374 = G__20395;
i__20367_20375 = G__20396;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__18455__auto__ = body;
if(cljs.core.truth_(or__18455__auto__)){
return or__18455__auto__;
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
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1463495153009