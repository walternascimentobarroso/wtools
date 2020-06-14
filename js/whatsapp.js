$(function () {
  "use strict";
  let whatsapp = `
  <div class="whatsapp-icon">
    <svg id="whatsapp-msng-icon" data-name="whatsapp icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800">
    <path d="M519 454c4 2 7 10-1 31-6 16-33 29-49 29-96 0-189-113-189-167 0-26 9-39 18-48 8-9 14-10 18-10h12c4 0 9 0 13 10l19 44c5 11-9 25-15 31-3 3-6 7-2 13 25 39 41 51 81 71 6 3 10 1 13-2l19-24c5-6 9-4 13-2zM401 200c-110 0-199 90-199 199 0 68 35 113 35 113l-20 74 76-20s42 32 108 32c110 0 199-89 199-199 0-111-89-199-199-199zm0-40c133 0 239 108 239 239 0 132-108 239-239 239-67 0-114-29-114-29l-127 33 34-124s-32-49-32-119c0-131 108-239 239-239z" /></svg>
    <svg id="whatsapp-close-icon" data-name="close icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.98 39.99">
    <path d="M48.88,11.14a3.87,3.87,0,0,0-5.44,0L30,24.58,16.58,11.14a3.84,3.84,0,1,0-5.44,5.44L24.58,30,11.14,43.45a3.87,3.87,0,0,0,0,5.44,3.84,3.84,0,0,0,5.44,0L30,35.45,43.45,48.88a3.84,3.84,0,0,0,5.44,0,3.87,3.87,0,0,0,0-5.44L35.45,30,48.88,16.58A3.87,3.87,0,0,0,48.88,11.14Z" transform="translate(-10.02 -10.02)"/></svg>
  </div>
  <div class="whatsapp-container">
    <div class="whatsapp-container-header"><span>WhatsApp</span></div>
    <div class="whatsapp-container-inner">
      <textarea class="whatsapp-container-textarea" placeholder="Olá! Use esta caixa para nos enviar uma mensagem via WhatsApp..."></textarea>
    </div>
    <div class="whatsapp-container-footer">Enviar</div>
  </div>`;
  $('body').append(whatsapp);

  $(document).ready(function () {
    let mobileDetect = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    let phone = '5595991712790';
    if (mobileDetect) {
      $('.whatsapp-container').css('display', 'none');
      $('.whatsapp-icon').on('click', function () {
        window.location = `whatsapp://send?text=&phone=+${phone}&abid=+${phone}`;
      });
    } else {
      $('.whatsapp-icon').on('click', function () {
        if ($('.whatsapp-icon').hasClass('open')) {
          $('.whatsapp-icon, .whatsapp-container').removeClass('open');
        } else {
          $('.whatsapp-icon, .whatsapp-container').addClass('open');
          $('.whatsapp-container-textarea').focus();
        }
      });
      $('.whatsapp-container-footer').click(function () {
        let baseUrl = `https://web.whatsapp.com/send?phone=+${phone}&text=`;
        let textEncode = encodeURIComponent($('.whatsapp-container-textarea').val());
        window.open(baseUrl + textEncode, '_blank');
      });
    }
  });
});
