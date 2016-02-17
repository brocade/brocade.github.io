// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('github.page');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('github.state');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
github.page.git_cards;
github.page.footer_body;
github.page.footer_head;
github.page.repo_uri = "https://raw.githubusercontent.com/gaberger/brocade-github/develop/brocade/resources/public/app/app.edn";
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$get_DASH_repo,(function (db,_){
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(github.page.repo_uri,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$handler,(function (p1__16101_SHARP_){
var G__16103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$process_DASH_response,p1__16101_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16103) : re_frame.core.dispatch.call(null,G__16103));
}),cljs.core.cst$kw$error_DASH_handler,(function (p1__16102_SHARP_){
var G__16104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bad_DASH_response,p1__16102_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16104) : re_frame.core.dispatch.call(null,G__16104));
})], null)], 0));

return db;
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$process_DASH_response,(function (db,p__16105){
var vec__16106 = p__16105;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16106,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16106,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$app_SLASH_repo,(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 ? cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(response) : cljs.reader.read_string.call(null,response)));
}));
re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bad_DASH_response,(function (db,p__16107){
var vec__16108 = p__16107;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16108,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16108,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$app_SLASH_repo,github.state.fail_state);
}));
var G__16109_16111 = cljs.core.cst$kw$repo;
var G__16110_16112 = ((function (G__16109_16111){
return (function (db){
return reagent.ratom.make_reaction(((function (G__16109_16111){
return (function (){
return cljs.core.cst$kw$app_SLASH_repo.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(db) : cljs.core.deref.call(null,db)));
});})(G__16109_16111))
);
});})(G__16109_16111))
;
(re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.register_sub.cljs$core$IFn$_invoke$arity$2(G__16109_16111,G__16110_16112) : re_frame.core.register_sub.call(null,G__16109_16111,G__16110_16112));
github.page.header_template = (function github$page$header_template(title,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nav$brocade_DASH_red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$role,"navigation"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$nav_DASH_wrapper$container,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$brand_DASH_logo,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"",cljs.core.cst$kw$id,"logo-container"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$brocade_DASH_logo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$sub_DASH_title,title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$right$hide_DASH_on_DASH_med_DASH_and_DASH_down,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16119){
var map__16120 = p__16119;
var map__16120__$1 = ((((!((map__16120 == null)))?((((map__16120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16120):map__16120);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,cljs.core.cst$kw$title);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16120__$1,cljs.core.cst$kw$href);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,href], null),title__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title__$1], null));
}),items)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$side_DASH_nav,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"nav-mobile"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16122){
var map__16123 = p__16122;
var map__16123__$1 = ((((!((map__16123 == null)))?((((map__16123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16123):map__16123);
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16123__$1,cljs.core.cst$kw$title);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16123__$1,cljs.core.cst$kw$href);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,href], null),title__$1], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title__$1], null));
}),items)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$button_DASH_collapse,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$data_DASH_activates,"nav-mobile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"menu"], null)], null)], null)], null);
});
github.page.main_template = (function github$page$main_template(repos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$section,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$s12,(github.page.git_cards.cljs$core$IFn$_invoke$arity$1 ? github.page.git_cards.cljs$core$IFn$_invoke$arity$1(repos) : github.page.git_cards.call(null,repos))], null)], null)], null)], null);
});
github.page.repo_template = (function github$page$repo_template(title,desc,main,link){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$s12$m6,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card$small,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$card_DASH_title,title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,desc], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_action,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,link], null),title], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title], null));
});
github.page.git_cards = (function github$page$git_cards(repos){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16125_SHARP_){
return github.page.repo_template(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__16125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repo,cljs.core.cst$kw$name], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__16125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repo,cljs.core.cst$kw$description], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__16125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repo,cljs.core.cst$kw$author], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__16125_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repo,cljs.core.cst$kw$html_url], null)));
}),repos)], null);
});
github.page.footer_template = (function github$page$footer_template(coll){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$footer$page_DASH_footer$grey$darken_DASH_1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$row,(github.page.footer_head.cljs$core$IFn$_invoke$arity$1 ? github.page.footer_head.cljs$core$IFn$_invoke$arity$1(coll) : github.page.footer_head.call(null,coll))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$footer_DASH_copyright,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container], null)], null)], null);
});
github.page.footer_head = (function github$page$footer_head(coll){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16129){
var map__16130 = p__16129;
var map__16130__$1 = ((((!((map__16130 == null)))?((((map__16130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16130):map__16130);
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16130__$1,cljs.core.cst$kw$heading);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16130__$1,cljs.core.cst$kw$items);
var checked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16130__$1,cljs.core.cst$kw$checked_QMARK_);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$col$l4$s12,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5$white_DASH_text,heading], null),(github.page.footer_body.cljs$core$IFn$_invoke$arity$1 ? github.page.footer_body.cljs$core$IFn$_invoke$arity$1(items) : github.page.footer_body.call(null,items))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,heading], null));
}),coll);
});
github.page.footer_body = (function github$page$footer_body(items){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16135){
var map__16136 = p__16135;
var map__16136__$1 = ((((!((map__16136 == null)))?((((map__16136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16136):map__16136);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16136__$1,cljs.core.cst$kw$title);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16136__$1,cljs.core.cst$kw$href);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$white_DASH_text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,href], null),title], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,title], null));
}),items)], null);
});
github.page.Page = (function github$page$Page(){
var map__16141 = github.state.page_state;
var map__16141__$1 = ((((!((map__16141 == null)))?((((map__16141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16141):map__16141);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16141__$1,cljs.core.cst$kw$app_SLASH_title);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16141__$1,cljs.core.cst$kw$app_SLASH_header);
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16141__$1,cljs.core.cst$kw$app_SLASH_footer);
var repo = (function (){var G__16143 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repo], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__16143) : re_frame.core.subscribe.call(null,G__16143));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,github.page.header_template(title,header),github.page.main_template((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(repo) : cljs.core.deref.call(null,repo))),github.page.footer_template(footer)], null);
});
github.page.init = (function github$page$init(){
var G__16145_16146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$get_DASH_repo], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__16145_16146) : re_frame.core.dispatch.call(null,G__16145_16146));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [github.page.Page], null),document.getElementById("app"));
});
goog.exportSymbol('github.page.init', github.page.init);
