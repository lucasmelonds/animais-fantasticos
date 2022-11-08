/*
// Retorne no console todas as imagens do site
const imagens = document.getElementsByTagName('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log(imagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]')
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2')
console.log(primeiroH2)

// Selecione o último p do site
const ultP = document.querySelectorAll('p')
console.log(ultP[ultP.length-1])

const imgs = document.querySelectorAll('img')
imgs.forEach(function(){})

// Mostre no console cada parágrafo do site e mostre os textos
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach(function(item, index){
  console.log(item)
  console.log(item.innerText)
})

// Como corrigir os erros abaixo:
const imgs1 = document.querySelectorAll('img');

imgs1.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs1.forEach(() => {
  console.log(i++);
});

imgs1.forEach(() => i++);


// Verifique a distância da primeira imagem em relação ao topo da página
const primeiraImg = document.querySelector('img')
const rect = primeiraImg.getBoundingClientRect()
console.log(rect.top)

// Retorne a soma da largura de todas as imagens
window.onload = function() {
  const tdsImg = document.querySelectorAll('img')
  let soma = 0;
  const imgWidth = tdsImg.forEach((item) => {
    soma += item.width
  });
  console.log(soma)
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
const links2 = document.querySelectorAll('a')
links2.forEach((links2) => {
  const linksHeigth = links2.offsetHeight
  const linksWidth = links2.offsetWidth
  if (linksHeigth >= 48 && linksWidth >= 48){
    console.log(true);
  } else console.log(false);
})

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)');

if(small.matches) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}*/

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo')
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
}

initTabNav()

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion() {
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion()

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  linksInternos.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

initScrollSuave()

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6

    function animaScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = sectionTop - windowMetade < 0
        if (isSectionVisible) section.classList.add('ativo')
      })
    }

    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}

initAnimacaoScroll()
