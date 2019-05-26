$(document).ready(function() {
   
   $('.admin-button a').click(function() {

      $('.admin-auth').slideToggle();

   });

   $('.action-form form').submit(function(e) {
      e.preventDefault();

      $('.action-form .form-error').html('');
      $('.action-form .form-success').html('');

      var office = $('.action-form form input[name="office-number"]').val();
      var fio = $('.action-form form input[name="fio"]').val();
      var phone = $('.action-form form input[name="phone"]').val();
      var problem = $('.action-form form textarea[name="problem"]').val();

      var error = false;

      if (office == '' || office.match(/[^0-9]/g) != null) {
         error = 'Номер офиса указан не верно!';
      } else if (fio == '' || fio.match(/^[a-zA-Zа-яА-Я\s]*$/) == null) {
         error = 'ФИО указано не верно!';
      } else if (phone.length < 10 || phone.match(/[^0-9]/g) != null) {
         error = 'Телефон указан не верно!';
      } else if (problem.length < 10) {
         error = 'Описание проблемы не меньше 10 символов!';
      }

      if (error !== false) {
         $('.action-form .form-error').html(error);
      } else {
         $('.action-form .form-success').html('Заявка успешно отправлена!');
      }

   });

   $('.admin-auth form').submit(function(e) {
      e.preventDefault();

      $('.admin-auth .form-error').html('');
      $('.admin-auth .form-success').html('');

      var login = $('.admin-auth form input[name="login"]').val();
      var pass = $('.admin-auth form input[name="pass"]').val();

      var error = false;

      if (login == '') {
         error = 'Логин указан не верно!';
      } else if (pass == '') {
         error = 'Пароль указан не верно!';
      }

      if (error !== false) {
         $('.admin-auth .form-error').html(error);
      } else {
         $('.admin-auth .form-success').html('Заявка успешно отправлена!');
      }

   });
   
});