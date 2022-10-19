$(function(){
    const animateCSS = (element, animation, prefix = 'animate__') =>// Promise を作成して返します
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);
  
      node.classList.add(`${prefix}animated`, animationName);
  
      // アニメーションが終了したら、クラスを消去してPromiseを解決します
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

    animateCSS('.img','heartBeat');

    $('.img').click(function(){
        animateCSS('.title','heartBeat');
        $(this).css('width','500px');


    });

    animateCSS('.title','jello');

    var is_clicked = false
    $('.hyouji_hennkou_botton').click(function(){
      if (is_clicked == false){
        $('body').css('background-color','#fc4503');
        is_clicked = true
        
      }else{
        $('body').css('background-color','#9c5a2f');
        is_clicked = false
        
      }

  });
});