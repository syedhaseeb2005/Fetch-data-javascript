const uicreate = (data)=>{

    const container = document.querySelector('.container')

    const Mappingthefetchdata = data.map((item)=> {
        const singleAmountOfData = `<div class="main col-6"><img id="image" src="${item.image}" class="card-img-top" alt="...">
                                        <div class="card-body">
                                            <h5 class="card-title">${item.title}</h5>
                                            <p class="card-text">${item.description}</p>
                                        </div>
                                    </div>`
        return singleAmountOfData
     })
     container.innerHTML= Mappingthefetchdata.join('');
    
     console.log(container)
    }
    

const getfetchdata = ()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then(function(response){
        console.log(response ,'==>>fetch response')
        return response.json()
    }).then(function(data){
        uicreate(data)
    })
}
getfetchdata()

const getsproduct = ()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then(res => res.json())
    .then(data => console.log(data ,'==>>allproducts'))
}
getsproduct()
