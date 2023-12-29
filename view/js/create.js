let fname= document.getElementById('name');
let femail= document.getElementById('email');
let fmobile= document.getElementById('mobile');
let fwebsite= document.getElementById('website');
let fimage= document.getElementById('image');
let faddress= document.getElementById('address');

function submitHandler(event) {
    event.preventDefault();
    let data = {
        name : fname.value,
        email: femail.value,
        mobile: fmobile.value,
        website: fwebsite.value,
        image: fimage.value,
        address: faddress.value
    };

    console.log('data', data);

    fetch(`./api/contact/add`, {
        method: "POST",
        headers: {
            "Content-Type" : "Application/json"
        }, 
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(res => {
        alert(res.msg);
        window.location.href = "/";
    }).catch(err => console.log(err.message))
}