const elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
   elem.requestFullscreen();
 } else if (elem.webkitRequestFullscreen) { /* Safari */
   elem.webkitRequestFullscreen();
 } else if (elem.msRequestFullscreen) { /* IE11 */
   elem.msRequestFullscreen();
 }
}

openFullscreen()

screen.orientation.lock('landscape')
