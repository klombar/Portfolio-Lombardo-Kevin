export function scrollToSection(id) {
   const section = document.getElementById(id);
   if (section) {
     window.scrollTo({
       top: section.offsetTop,
       behavior: 'smooth',
     });
   }
 }