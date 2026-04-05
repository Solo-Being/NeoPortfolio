function buy_popup(image, productName, price) {
  var oldpop = document.querySelector(".centre-div");
  if (oldpop) {
    oldpop.remove()
  }

  var main = document.createElement("div");
  main.setAttribute("class", "centre-div-main-parent");
  document.getElementsByTagName("body")[0].appendChild(main)

  var centre = document.createElement("div");
  centre.setAttribute("class", "centre-div");
  main.appendChild(centre);

  var popup = document.createElement("div");
  popup.setAttribute("class", "centre-div-parent");
  centre.appendChild(popup);

  var close = document.createElement("a");
  close.setAttribute("class", "cross");
  var closeText = document.createTextNode("X");
  close.appendChild(closeText);
  close.onclick = function () {
    main.remove()
  }
  popup.appendChild(close);

  var contentwrap = document.createElement("div");
  contentwrap.setAttribute("class", "content_wrap");
  popup.appendChild(contentwrap);

  // Left side
  var left = document.createElement("div");
  left.setAttribute("class", "left_content");
  contentwrap.appendChild(left);

  var img = document.createElement("img");
  img.setAttribute("src", image)
  img.setAttribute("class", "popup-img");
  left.appendChild(img);

  var productnm = document.createElement("p");
  productnm.setAttribute("class", "prname");
  var productnam = document.createTextNode(productName);
  productnm.appendChild(productnam);
  left.appendChild(productnm);

  var productpr = document.createElement("p");
  productpr.setAttribute("class", "prpri");
  var productpri = document.createTextNode("₹" + price);
  productpr.appendChild(productpri);
  left.appendChild(productpr);

  var inde = document.createElement("div");
  inde.setAttribute("class", "incdec");
  left.appendChild(inde);

  var decr = document.createElement("button");
  decr.setAttribute("class", "decrem");
  var decre = document.createTextNode("-");
  decr.appendChild(decre);
  inde.appendChild(decr);
  decr.onclick = function () {
    if (quantit <= 1) {
      document.getElementsByClassName("quant")[0].innerHTML = 1
      document.getElementsByClassName("prpri")[0].innerHTML = "₹" + price
    }
    else {
      quantit--;
      document.getElementsByClassName("quant")[0].innerHTML = quantit
      document.getElementsByClassName("prpri")[0].innerHTML = "₹" + (quantit * price)
    }
  }

  var quan = document.createElement("p");
  quan.setAttribute("class", "quant");
  // var quantit = document.createTextNode("1");
  // quan.appendChild(quantit);
  inde.appendChild(quan);
  var quantit = document.getElementsByClassName("quant")[0].innerHTML = 1

  var incr = document.createElement("button");
  incr.setAttribute("class", "increm");
  var incre = document.createTextNode("+");
  incr.appendChild(incre);
  inde.appendChild(incr);
  incr.onclick = function () {
    quantit++;
    document.getElementsByClassName("quant")[0].innerHTML = quantit
    document.getElementsByClassName("prpri")[0].innerHTML = "₹" + (quantit * price)
  }


  // Right side
  var right = document.createElement("div");
  right.setAttribute("class", "right_content");
  contentwrap.appendChild(right);

  var formhd = document.createElement("p");
  formhd.setAttribute("class", "formhed");
  var formhead = document.createTextNode("Enter Your Details");
  formhd.appendChild(formhead);
  right.appendChild(formhd);

  var formnm = document.createElement("div");
  formnm.setAttribute("class", "formnam");
  right.appendChild(formnm);
  var formname = document.createElement("input")
  formname.setAttribute("placeholder", "Enter Your Name");
  formnm.appendChild(formname)

  var formad = document.createElement("textarea");
  formad.setAttribute("class", "formadr");
  right.appendChild(formad);
  formad.setAttribute("placeholder", "Enter Your Address");

  var buybt = document.createElement("button");
  buybt.setAttribute("class", "buybutton");
  var buytxt = document.createTextNode("Buy Now");
  buybt.appendChild(buytxt);
  right.appendChild(buybt);
  buybt.onclick = function () {
    oldpop = document.querySelector(".centre-div");
    if (oldpop) {
      oldpop.remove()
    }
  }
}

let categr = document.querySelector('.categ')
let mennu = document.querySelector('.menuu')

function cat_drop() {
  mennu.style.display = 'none'
  if (categr.style.display === 'block') {
    categr.style.display = 'none'
  } else {
    categr.style.display = 'block'
  }
}

function menu_drop() {
  categr.style.display = 'none'
  if (mennu.style.display === 'block') {
    mennu.style.display = 'none'
  } else {
    mennu.style.display = 'block'
  }
}
