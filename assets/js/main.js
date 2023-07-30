// $("#btnabrir1").click(function(){
//   $(".logo").html("Hola Ro!");
// });

// function enviado(){
// Swal.fire({
//   position: 'center',
//   icon: 'success',
//   title: 'Mensaje Enviado!',
//   showConfirmButton: false,
//   timer: 1500
// })
// };

// $(document).ready(function(){                  -----> Esta es la manera mas basica
//   $("#btnabrir1").click(function(){
//     $(".fondo1").css('display','block');
//   });
//   $(".cerrar1").click(function(){
//     $(".fondo1").css('display','none');
//   });
//   $("#btnabrir2").click(function(){
//     $(".fondo2").css('display','block');
//   });
//   $(".cerrar2").click(function(){
//     $(".fondo2").css('display','none');
//   });
//   $("#btnabrir3").click(function(){
//     $(".fondo3").css('display','block');
//   });
//   $(".cerrar3").click(function(){
//     $(".fondo3").css('display','none');
//   });
//   $("#btnabrir4").click(function(){
//     $(".fondo4").css('display','block');
//   });
//   $(".cerrar4").click(function(){
//     $(".fondo4").css('display','none');
//   });
//   $("#btnabrir5").click(function(){
//     $(".fondo5").css('display','block');
//   });
//   $(".cerrar5").click(function(){
//     $(".fondo5").css('display','none');
//   });
// });

$(document).ready(function(){
  $('.btn').click(function(){
    var ventana = $(this).attr('ventana');
    
    if(ventana=="uno"){
      $(".fondo1").css('display','block');    
    }if(ventana=="dos"){
      $(".fondo2").css('display','block');    
    }if(ventana=="tres"){
      $(".fondo3").css('display','block');    
    }if(ventana=="cuatro"){
      $(".fondo4").css('display','block');    
    }if(ventana=="cinco"){
      $(".fondo5").css('display','block');    
    }
  });
  
  $('.modal_cerrar').click(function(){
    var modal = $(this).attr('modal');
    
    if(modal=="uno"){
      $(".fondo1").css('display','none');    
    }if(modal=="dos"){
      $(".fondo2").css('display','none');
    }if(modal=="tres"){
      $(".fondo3").css('display','none');    
    }if(modal=="cuatro"){
      $(".fondo4").css('display','none');    
    }if(modal=="cinco"){
      $(".fondo5").css('display','none');    
    }
  });

  $("#enviarmensaje").click(function(){
    alert("Mensaje no enviado, por favor contactarse por WhatsApp o Linkedin!");
  });
});


//Para cambiar el title una vez que salis de la pagina - Inicio //
let previousTitle = document.title;

window.addEventListener('blur', () => {
  previousTitle = document.title;
  document.title = '¡No te vayas! ¡Vuelve! 😎';
})
window.addEventListener('focus', () => {
  document.title = previousTitle;
})
//Para cambiar el title una vez que salis de la pagina - Fin //