(ns core)

(defn say-hi
  []
  (.log js/console "HI!")
  (set! (.-innerHTML (.-body js/Document)) "Hello!"))

(.startup js/Meteor say-hi)
