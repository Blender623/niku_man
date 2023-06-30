var image=["https://images.unsplash.com/photo-1614360182734-121501b81cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80"
,"https://images.unsplash.com/photo-1569697677626-26e7d32b65aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
,"https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
,"https://images.pexels.com/photos/1579192/pexels-photo-1579192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
,"https://images.unsplash.com/photo-1639605570199-a1ef68617af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"]
//  background-image: url("https://images.pexels.com/photos/2471234/pexels-photo-2471234.jpeg");
//background-image: url("https://images.pexels.com/photos/68558/pexels-photo-68558.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-68558.jpg&fm=jpg");
//background-image:url("https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"); 
//var image = ["Saab", "Volvo", "BMW"];

var rand= Math.floor(Math.random()*image.length);

document.body.style.backgroundImage = `url("${iamge[rand]}")`;
