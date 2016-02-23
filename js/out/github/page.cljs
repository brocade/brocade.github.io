(ns github.page
(:require [reagent.core :as reagent]
          [cljs.reader :refer [read-string]]
          [re-frame.core :refer [register-handler
                                   path
                                   register-sub
                                   dispatch
                                   dispatch-sync
                                   subscribe]]
          [ajax.core :refer [GET] :as ajax]
          [github.state]
          [cljs.core.async :refer [put! chan <! >! close!]]
          )
 (:require-macros [reagent.ratom :refer [reaction]]
 									[cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(declare git-cards)
(declare footer-body)
(declare footer-head)

(def repo-uri "https://raw.githubusercontent.com/gaberger/brocade-github/develop/brocade/resources/public/app/app.edn")

(register-handler
  :get-repo             ;; <-- the button dispatched this id
  (fn
    [db _]
    (GET
      repo-uri
      {:handler       #(dispatch [:process-response %1])   ;; further dispatch !!
       :error-handler #(dispatch [:bad-response %1])})
       db))


(register-handler               ;; when the GET succeeds
  :process-response             ;; the GET callback dispatched this event
  (fn
    [db [_ response]]           ;; extract the response from the dispatch event vector
    (assoc db :app/repo (cljs.reader/read-string response ))
  ))

(register-handler
  :bad-response
  (fn
    [db [_ response]]
    (-> db
        (assoc :app/repo github.state/fail-state))))


(register-sub
  :repo
  (fn [db]
  (reaction (:app/repo @db))))



(defn header-template
      [title items]
        [:nav.brocade-red {:role "navigation"}
                  [:div.nav-wrapper.container
                   [:a.brand-logo {:href "" :id "logo-container"} [:h1.brocade-logo] [:span.sub-title title]]
                   [:ul.right.hide-on-med-and-down (map
                     (fn [{:keys [title href]}]
                         ^{:key title} [:li [:a {:href href} title]])
                     items)]
                   [:ul.side-nav {:id "nav-mobile"} (map
                     (fn [{:keys [title href]}]
                         ^{:key title} [:li [:a {:href href} title]])
                     items)]
                   [:a.button-collapse {:data-activates "nav-mobile"} [:i.material-icons "menu"]]
                  ]
                ])


(defn main-template
      [repos]
        [:div.container
         [:div.section
           [:div.row
             [:div.col.s12
               (git-cards repos)
             ]
           ]
         ]
        ])


(defn repo-template
      [title desc main link]
          ^{:key title} [:div.col.s12.m6
            [:a.card.small.waves-effect.waves-block.waves-brocade {:href link}
              [:div.card-content
               [:span.card-title title]
               [:p desc]
              ]
            ]
          ]
        )



(defn git-cards
      [repos]
            [:div.row
                       (map #(repo-template
                                 (get-in % [:repo :name])
                                 (get-in % [:repo :description])
                                 (get-in % [:repo :author])
                                 (get-in % [:repo :html_url])
                               ) repos)
                       ]
      )

(defn footer-template
      [coll]
        [:footer.page-footer.grey.darken-1
         [:div.container
          [:div.row
           (footer-head coll)
          ]
         ]
         [:div.footer-copyright
          [:div.container]
         ]
        ]
    )


(defn footer-head
      [coll]
      (map (fn [{:keys [heading items checked?]}]
               ^{:key heading} [:div.col.l4.s12
                  [:h5.white-text heading]
                (footer-body items)])
           coll)
      )

(defn footer-body
      [items]
        [:ul
                 (map
                   (fn [{:keys [title href]}]
                      ^{:key title} [:li [:a.white-text {:href href} title]])
                   items)])

(defn Page
  []
  (let [{:keys [app/title app/header app/footer]} github.state/page-state
         repo (subscribe [:repo])]
         [:div
          (header-template title header)
          (main-template @repo)
          (footer-template footer)
          ]))

(defn ^:export init
  []
  (dispatch [:get-repo])
  (reagent/render [Page]
                  (js/document.getElementById "app")))
