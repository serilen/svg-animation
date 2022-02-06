
; (function () {
   "use strict";

   function isWebp() {
      // Проверка поддержки webP
      function testWebp(callback) {
         let webP = new Image();
         webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
         };
         webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
      }
      //Добавление класса webp или no-webp для HTML
      testWebp(function (support) {
         let className = support === true ? 'webp' : 'no-webp';
         document.documentElement.classList.add(className);
      });
   }

   isWebp();

   // gsap.registerPlugin(MotionPathPlugin);
   // gsap.to('#logo', {
   //    duration: 5,
   //     motionPath: {
   //       path: "#path1",
   //       align: "#path1",
   //       autoRotate: true,
   //       alignOrigin: [0.5, 0.5]
   //    }
   // });
})();

