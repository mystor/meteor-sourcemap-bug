(defproject project "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojurescript "0.0-2156"]]
  :plugins [[lein-cljsbuild "1.0.1"]]
  :cljsbuild {
    :builds {
      :client
      {:source-paths ["client"]
       :compiler {:output-to "client.cjs"
                  :output-dir ".ignore-me/client"
                  :source-map "client.cjs.map"
                  :optimizations :simple
                  :pretty-print true}}}})
