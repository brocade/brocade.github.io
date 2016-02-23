(ns github.state)

(def page-state
  {:app/title "OSS"
   :app/header
              [{:title "Brocade" :href "http://www.brocade.com"}
              ]
   :app/footer
              [{:heading "Projects" :items [{:title "Repositories" :href "https://www.github.com/brocade"}
                                            {:title "OpenDaylight" :href "https://www.opendaylight.org/"}
                                            {:title "OpenStack" :href "https://www.openstack.org/brocade"}]}
               {:heading "Technology" :items [{:title "SDN Controller and Applications" :href "https://www.brocade.com/en/products-services/software-networking/sdn-controllers-applications.html"}
                                              {:title "Network Function Virtualization" :href "https://www.brocade.com/en/products-services/software-networking/network-functions-virtualization.html"}]}
               {:heading "Resources" :items [{:title "Getting Started" :href "https://community.brocade.com/t5/SDN-NFV/ct-p/SdnNfv"}
                                             {:title "Brocade OpenSource Code" :href "https://www.brocade.com/en/support/support-tools/oscd.html"}
                                             {:title "DevNet" :href "https://community.brocade.com/t5/DevNet/ct-p/APISupport"}]}
               {:heading "Contact" :items [{:title "Contact Us" :href "https://www.brocade.com/en/forms/contact-us.html"}]}]
   }
  )

(def fail-state
[{:repo
             {:name "Brocade",
              :html_url "https://github.com/brocade",
              :forks 1,
              :description "Brocade GitHub Repository",
              :commiters [],
              :lastcommit "4123372a06aa2d26889f2987303b0634198f5807",
              :date "2013-06-03T18:39:46Z",
              :author "Brocade Communications",
              :email "noreply@brocade.com"}}]
  )
