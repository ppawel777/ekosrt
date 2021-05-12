
// Подсветка пунктов меню
const alinks = document.querySelectorAll('.nav-links');
const linkList = Array.prototype.slice.call(alinks);
// const link_url = window.location.pathname.slice(1);
const link_url = window.location.pathname;
const regexp = /\/.*/g;
console.log(link_url)
console.log(link_url.match(regexp)[0].slice(1))
for (let i=0; i < linkList.length; i++) {
  const link_href = linkList[i].getAttribute('href');
  if (link_href !== null && link_href !== '#') {
    if (link_href == link_url) {
      linkList[i].classList.add('active');
    };

    if (link_href == 'index.html' && link_url == 'state_history_indicators.html') {
      linkList[i].classList.add('active');
    };

    if (link_url == '') {
      linkList[0].classList.add('active');
    }
  }
};
//

// Кнопка назад
const btn_history = document.getElementById('state_history_back');
if (btn_history != null) {
  btn_history.addEventListener('click', () => {
    history.back();
  });
};

