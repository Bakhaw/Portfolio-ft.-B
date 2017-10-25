// flex panels
const panels = (e) => {
  tar = e.target.parentNode;
  if (tar.style.flex == "1 1 0%") {
    tar.style.flex = "10";
  } else {
    tar.style.flex = "1";
  }
  tar.children['1'].children['0'].classList.toggle('open');
}

const arr = Array.from(document.getElementById('flex-panels').children);
arr.forEach(box => box.addEventListener('click', panels));

// jquery
$(document).ready(function() {
  // presentation
  $('#presentation-box').click(function() {
    $('.title').toggleClass('display');
    $('.presentation').toggle(400);
  });
// skills
  $('#skills-box').click(function() {
    $('.title').toggleClass('display');
    $('.skills').toggle(400);
  });
  // projects
  $('#projects-box').click(function() {
    $('.title').toggleClass('display');
    $('.projects').toggle(400);
  });
});
