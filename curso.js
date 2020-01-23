//let productos = ['Cama1', 'Cama2', 'Cama3'+' color negro', 'Tv1', 'Tv2'];
let productos = [
  {
    name: 'Cama1',
    state: 'Merida',
    quantiy: 3,
    price: '150',
    currency: '4'
  },
  {
    name: 'Cama2',
    state: 'Caracas',
    quantiy: 3,
    price: '120',
    currency: '4'
  },
  {
    name: 'Cama3',
    state: 'Merida',
    quantiy: 3,
    price: '160',
    currency: '4'
  },
  {
    name: 'Tv1',
    state: 'Merida',
    quantiy: 3,
    price: '200',
    currency: '4'
  },
]
const content = document.getElementById('lista');

content.innerHTML =  productos.map(producto => "<div class='producto'> name:"+producto.name+" ,price:"+producto.price+"</div>")

const search = ()  => {
  const val= document.getElementById('input');
  console.log(val.value)
  content.innerHTML = productos.filter(producto => producto.name.toUpperCase().includes(val.value.toUpperCase())).map(producto =>  "<div class='producto'> name:"+producto.name+" ,price:"+producto.price+"</div>")
}

console.log(content)