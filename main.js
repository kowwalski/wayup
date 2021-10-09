const tabs = document.getElementById('tabs')
const content = document.querySelectorAll('.content')

const tabsDop = document.getElementById('tabs-dop');
const contentsDop = document.querySelectorAll('.content-dop')

const changeTab = tn => {
  console.log(tn)
  for (let i = 0; i < tabsDop.children.length; i++) {
    tabsDop.children[i].classList.remove('active');
  }
  tn.classList.add('active');

}


tabsDop.addEventListener('click', e => {
  const currDopTab = e.target.dataset.btndop;
  changeTab(e.target);
  for (let i = 0; i < contentsDop.length; i++) {
    console.log(contentsDop[i].dataset.contentsDop)
    contentsDop[i].classList.remove('active');
    if (contentsDop[i].dataset.contentdop === currDopTab) {
      contentsDop[i].classList.add('active')
    }
  }
})



const changeClass = (el) => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active')
  }
  el.classList.add('active')
}


tabs.addEventListener('click', e => {
  const currTab = e.target.dataset.btn;
  changeClass(e.target)
  for (let i = 0; i < content.length; i++) {
    content[i].classList.remove('active')
    if (content[i].dataset.content === currTab) {
      content[i].classList.add('active')
    }
  }
})
