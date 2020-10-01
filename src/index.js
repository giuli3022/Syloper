
/*--FIXED BUTTON FUNCTION--*/


mybutton = document.querySelector("#myBtn");

window.onscroll = function () { scrollFunction() };

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/*--FORM VALIDATION--*/

const nameVal = () => {
  let name = document.querySelector("#name").value;
  if (name == null || name.length == 0 || /^\s+$/.test(name)) {
    alert("es obligatorio otorgar un nombre");
    return false;
  }
  return true;
}

const msgVal = () => {
  let msg = document.querySelector("#message").value;
  if (msg == null || msg.length == 0 || /^\s+$/.test(msg)) {
    alert("es obligatorio otorgar un mensaje");
    return false;
  }
  return true;
}

const emailVal = () => {
  let email = document.querySelector("#email").value;
  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))) {
    return false;
  }
  return true;
}

const telVal = () => {
  let tel = document.querySelector("#phone").value;
  if (!(/^\d{10}$/.test(tel))) {
    return false;
  }
  return true;
}

const handleValidation = () => {
  if (nameVal() === true && msgVal() === true) {
    if (emailVal() || telVal()) {
      alert("tu consulta fue enviada satisfactoriamente");
    } else {
      alert("el email y/o el teléfono son necesarios para contactarte");
    }
  }
}

document.querySelector("#send-btn").onclick = handleValidation;


/*--OWL CAROUSEL--*/

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: 'URLHash',
  responsive: {
    0: {
      items: 4
    },
    600: {
      items: 4
    },
    1000: {
      items: 4
    }
  }
})
