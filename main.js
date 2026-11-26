const catalog = document.getElementById('catalog')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close')
const imageModal = document.getElementById('img')
const nameModal = document.getElementById('title')
const priceModal = document.getElementById('price')
const descModal = document.getElementById('desc')




const product = [
    {
        img: '/img/catalog/1.png',
        title: 'Аккумуляторный шуруповерт 3.6 В',
        price: 15000,
        desc: 'Аккумулятор 1300 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/2.png',
        title: 'Аккумуляторная отвертка 4 В',
        price: 15000,
        desc: 'Аккумулятор 1500 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/3.png',
        title: 'Аккумуляторный шуруповерт 4 В',
        price: 15000,
        desc: 'Аккумулятор 1500 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/4.png',
        title: 'Аккумуляторная отвертка 3.6 В',
        price: 15000,
        desc: 'Аккумулятор 800 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/5.png',
        title: 'Аккумуляторная отвертка, патрон 1/4',
        price: 15000,
        desc: 'Аккумулятор 1300 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/6.png',
        title: 'Комплект прецизионных отверток 3.6 В',
        price: 15000,
        desc: 'Размер патрона: 1/6Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/7.png',
        title: 'Аккумуляторный мини-джиндер 4 В',
        price: 15000,
        desc: 'Аккумулятор 2000 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/8.png',
        title: 'Аккумуляторный клеевой пистолет 3.6 В',
        price: 15000,
        desc: 'Аккумулятор 1500 мАч Литий-ионный аккумулятор'
    },
    {
        img: '/img/catalog/9.png',
        title: ',Беспроводное рабочее освещение 3.7 В',
        price: 15000,
        desc: 'Аккумулятор 8800 мАч Литий-ионный аккумулятор'
    },
]

product.forEach((item, index) => {
    catalog.innerHTML += `
    <div class="item">
      <img src="${item.img}" alt=""/>
      <h3>${item.title}</h3>
      <P>${item.desc}</p>
      <P>Цена:${item.price}</P>
      <div>
      <button id="btn${index}">Подробнее</button>
      <button>Вы корзину</button>
      </div>
    </div>`
    console.log()
})


product.forEach((item, index) => {
    const btn = document.getElementById(`btn${index}`)

    btn.addEventListener('click', () => {
        modal.style.display = 'flex'
        imageModal.src = item.img
        nameModal.innerText = item.title
        descModal.innerText = item.desc
        priceModal.innerText = item.price

    })
})

closeModal.addEventListener('click', () => {
        modal.style.display = 'none'


})




