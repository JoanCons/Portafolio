<?php
 $destinatario = 'joan.consuegra@usach.cl';

 $nombre= $_POST['nombre'];
 $email = $_POST['email'];
 $mensaje = $_POST['mensaje'];

 $header = "Mensaje desde el Portafolio web";
 $mensajeCompleto = $mensaje . "\n Atentamente: . $nombre  ";


 mail($destinatario, $mensajeCompleto, $header);  

 echo "<script> alert ('Correo enviado exitosamentre') </script>";
 echo "<script> setTimeout(\"location.href='index.html'\",1000 )  </script>";





?>