async function fetchProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        // Extract title, description, price from products array
        const products = data.products.map((product) => ({
            title: product.title,
            description: product.description,
            price: product.price,
        }))

        console.log(products)
    } catch (err) {
        console.log('ERROR OCCURED: ', err.message)
    }
}

fetchProducts()



// const grandParent = document.getElementById('grandParent')
// const parent = document.getElementById('parent')
// const child = document.getElementById('child')

// grandParent.addEventListener('click', () => {
//     console.log('GRANDPARENT CLICKED')
// })

// parent.addEventListener('click', () => {
//     console.log('PARENT CLICKED')
// })

// child.addEventListener('click', () => {
//     console.log('CHILD CLICKED')
// })




// grandParent.addEventListener(
//     'click',
//     () => {
//         console.log('GRANDPARENT CLICKED')
//     },
//     true
// )

// parent.addEventListener(
//     'click',
//     () => {
//         console.log('PARENT CLICKED')
//     },
//     true
// )

// child.addEventListener('click', () => {
//     console.log('CHILD CLICKED')
// })
