const phoneLoader = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url)
    const data = await(res.json())
    displayPhones(data.data)
}

const displayPhones = phones =>{
    console.log(phones.length)
    const fullDivPhones = document.getElementById('phone-display');
    fullDivPhones.textContent = '';
    phones = phones.slice(0, 9);

    const noPhone = document.getElementById('no-phone-found')
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }else{
        noPhone.classList.add('d-none');
    }
    phones.forEach(phone => {
        console.log(phone);
        const singleDisplay = document.createElement('div');
        singleDisplay.classList.add('col');
        singleDisplay.innerHTML=`
        <div class="card p-4 h-100">
        <img src="${phone.image}" class="card-img-top p-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.brand}</h5>
          <h6>${phone.phone_name}</h6>
          <p>${phone.slug}</p>
        </div>
      </div>
        `
        fullDivPhones.appendChild(singleDisplay)
    });
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    phoneLoader(searchText)
})
phoneLoader('iphone')