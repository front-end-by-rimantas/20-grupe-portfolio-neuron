function projectSlide() {
    let slides = document.querySelectorAll('.slide-single');
    let slider = [];
    let wrapper = document.querySelector('.img')
    let flag = true;
    for(let i = 0; i < slides.length; i++) {
       slider[i] = slides[i].src;
       slides[i].remove();
    }
    
    let step = 0;
    let onMove = true;
    
    function draw(offset) {
        let img = document.createElement('img');
        img.src = slider[step];
        img.classList.add('slide-single');
        img.style.left = offset*33 +'%';
        document.querySelector('.img').appendChild(img);
        step++;
        if(step === slider.length) {
            step = 0;
        }
    } 
    
    function left() {
        let slides2 = document.querySelectorAll('.slide-single');
        let offset2 = 0;
        slides2[0].style.left = -33 + '%';
        setTimeout(function() {
            slides2[0].remove();
        }, 2000);

        for(let i = 1; i < slides2.length; i++) {
            slides2[i].style.left = offset2*33 + '%'; 
            offset2++;
        }

        setTimeout(function(){
           draw(3);
        }, 2000);
    }

    draw(0);draw(1);draw(2);draw(3);
     
    setInterval(function(){if(flag){left()}}, 6000);
    
    wrapper.addEventListener('mouseover', function(){
        flag = false;
    })
    wrapper.addEventListener('mouseout', function(){
        flag = true;
    })
}

export {projectSlide}