 switch (!0) {
     case /kit/.test(window.location.pathname):
         document.getElementById("product").classList.add("active");
         break;
     case /about/.test(window.location.pathname):
         document.getElementById("about").classList.add("active");
         break;
     case /coconut_coir/.test(window.location.pathname):
         document.getElementById("coconut_coir").classList.add("active");
         break;
     case /product/.test(window.location.pathname):
         document.getElementById("product").classList.add("active");
         break;
     case /blog/.test(window.location.pathname):
         document.getElementById("blog").classList.add("active");
         break;
     case /contact_us/.test(window.location.pathname):
         document.getElementById("contact_us").classList.add("active");
         break;
     case /faq/.test(window.location.pathname):
         document.getElementById("faq").classList.add("active");
         break;
     default:
         document.getElementById("index").classList.add("active");
 }