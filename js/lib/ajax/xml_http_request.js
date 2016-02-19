// Compiled by ClojureScript 1.7.170 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__18886,handler){
var map__18887 = p__18886;
var map__18887__$1 = ((((!((map__18887 == null)))?((((map__18887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18887):map__18887);
var uri = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__18887__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__18887,map__18887__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__18885_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__18885_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__18887,map__18887__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___18895 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___18895)){
var response_type_18896 = temp__4425__auto___18895;
this$__$1.responseType = cljs.core.name.call(null,response_type_18896);
} else {
}

var seq__18889_18897 = cljs.core.seq.call(null,headers);
var chunk__18890_18898 = null;
var count__18891_18899 = (0);
var i__18892_18900 = (0);
while(true){
if((i__18892_18900 < count__18891_18899)){
var vec__18893_18901 = cljs.core._nth.call(null,chunk__18890_18898,i__18892_18900);
var k_18902 = cljs.core.nth.call(null,vec__18893_18901,(0),null);
var v_18903 = cljs.core.nth.call(null,vec__18893_18901,(1),null);
this$__$1.setRequestHeader(k_18902,v_18903);

var G__18904 = seq__18889_18897;
var G__18905 = chunk__18890_18898;
var G__18906 = count__18891_18899;
var G__18907 = (i__18892_18900 + (1));
seq__18889_18897 = G__18904;
chunk__18890_18898 = G__18905;
count__18891_18899 = G__18906;
i__18892_18900 = G__18907;
continue;
} else {
var temp__4425__auto___18908 = cljs.core.seq.call(null,seq__18889_18897);
if(temp__4425__auto___18908){
var seq__18889_18909__$1 = temp__4425__auto___18908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18889_18909__$1)){
var c__17608__auto___18910 = cljs.core.chunk_first.call(null,seq__18889_18909__$1);
var G__18911 = cljs.core.chunk_rest.call(null,seq__18889_18909__$1);
var G__18912 = c__17608__auto___18910;
var G__18913 = cljs.core.count.call(null,c__17608__auto___18910);
var G__18914 = (0);
seq__18889_18897 = G__18911;
chunk__18890_18898 = G__18912;
count__18891_18899 = G__18913;
i__18892_18900 = G__18914;
continue;
} else {
var vec__18894_18915 = cljs.core.first.call(null,seq__18889_18909__$1);
var k_18916 = cljs.core.nth.call(null,vec__18894_18915,(0),null);
var v_18917 = cljs.core.nth.call(null,vec__18894_18915,(1),null);
this$__$1.setRequestHeader(k_18916,v_18917);

var G__18918 = cljs.core.next.call(null,seq__18889_18909__$1);
var G__18919 = null;
var G__18920 = (0);
var G__18921 = (0);
seq__18889_18897 = G__18918;
chunk__18890_18898 = G__18919;
count__18891_18899 = G__18920;
i__18892_18900 = G__18921;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16805__auto__ = body;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
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

//# sourceMappingURL=xml_http_request.js.map