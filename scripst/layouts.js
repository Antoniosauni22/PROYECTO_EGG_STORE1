const navSelector = document.getElementById("nav");

console.log(navSelector);

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "como comprar", linkTo: "./how.html" },
    { title: "costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

console.log(options);
/* vamos a iterar con un for */

for( let option of options) {
    const anchor =document.createElement("a");
    anchor.className="nav-a";
    anchor.textContent=option.title;
    anchor.href=option.linkTo;
    navSelector.appendChild(anchor);
}


// vamos a renderizar el pie de pagina 
const footerSelector= document.querySelector("#footer");
console.log(footerSelector);
/*
const options =[
    {"ofertas", opts:"Laptos","audio","audifonos"};
]

*/




const options2 = [
      { title :"ofertas", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
      { title:"como comprar", linkTo: "./how.html", opts: ["Formas de pago", "Envios", "Devoluciones"] },
      { title:"costos y tarifas", linkTo: "./taxs.html", opts: ["Impuestos", "Facturación"] },
      { title:" mis pedidos", linkTo: "./orders.html", opts: ["pedir nuevamente", "lista de deseos"] },
      { title:"garantia", linkTo: "./warranty.html", opts: [" devolucion de 80 %"] }
    ];
    

    console.log(options2);