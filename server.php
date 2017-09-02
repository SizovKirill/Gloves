<?php 

   $name = $_POST['user-name'];
   $phone = $_POST['user-phone'];
   $time = $_POST['time'];

   $mail_message = '
   <html>
        <head>
                <title>Заявка с сайта</title>
        </head>
        <body>
            <h2>Обратный звонок с сайта</h2>
                <ul>
                    <li>Имя: '. $name .'</li>
                    <li>Телефон: '. $phone .'</li>
                    <li>Удобное время: '. $time .'</li>
                </ul>
        </body>
   </html>
   ';

   $headers = "From: Сайт Profperchatka <info@profperchatka.ru>\r\n".
   "MIME-Version: 1.0" . "\r\n" .
   "Content-type: text/html; charset=UTF-8" . "\r\n";

   $mail = mail('sizov.msk@gmail.com', 'Обратный звонок с сайта', $mail_message, $headers);

   $data = [];

   if ($mail) {
       $data['status'] = "OK";
       $data['mes'] = "Письмо успешно отправлено";
   }else{
       $data['status'] = "NO";
       $data['mes'] = "На сервере произошла ошибка";
   }

   echo json_encode($data);

?>  