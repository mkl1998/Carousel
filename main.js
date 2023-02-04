window.addEventListener('load',function(){
    // 获取左，右dom节点
    var leftArrow=this.document.querySelector('.left')
    var rightArrow=this.document.querySelector('.right')

    // 移入左箭头图标时，呈现灰色箭头
    leftArrow.addEventListener('mouseenter',function(){
        this.style.backgroundPosition='0 0'
    })
    // 移出左箭头图标时，恢复普通箭头
    leftArrow.addEventListener('mouseleave',function(){
        this.style.backgroundPosition='-83px 0'
    })
    // 移入右箭头时，呈现灰色箭头
    rightArrow.addEventListener('mouseenter',function(){
        this.style.backgroundPosition='-42px 0'
    })
     // 移出右箭头图标时，恢复普通箭头
     rightArrow.addEventListener('mouseleave',function(){
        this.style.backgroundPosition='-123px 0'
    })
    // 获取图片和圆点
    var img=this.document.querySelectorAll('.img')
    var span=this.document.querySelectorAll('span')
    // 为图片绑定index，作为唯一标识符
    for(i=0;i<img.length;i++){
        img[i].setAttribute('index',i)
    }
    // 获取当前图片和当前图片的下标
    var currentImg=this.document.querySelector('.current')
    var currentImgIndex=currentImg.getAttribute('index')
    // 左箭头点击事件
    leftArrow.addEventListener('click',function(){
        if(currentImgIndex>0){
            img[currentImgIndex].classList.remove('current')
            span[currentImgIndex].classList.remove('square')
            img[--currentImgIndex].classList.add('current')
            span[currentImgIndex].classList.add('square')
        }else{
            img[currentImgIndex].classList.remove('current')
            span[currentImgIndex].classList.remove('square')
            currentImgIndex=2
            img[currentImgIndex].classList.add('current')
            span[currentImgIndex].classList.add('square')
        }
    })
    // 右箭头点击事件
    rightArrow.addEventListener('click',changeImg)
    function changeImg(){
        if(currentImgIndex<2){
            img[currentImgIndex].classList.remove('current')
            span[currentImgIndex].classList.remove('square')
            img[++currentImgIndex].classList.add('current')
            span[currentImgIndex].classList.add('square')
        }else{
            img[currentImgIndex].classList.remove('current')
            span[currentImgIndex].classList.remove('square')
            currentImgIndex=0
            img[currentImgIndex].classList.add('current')
            span[currentImgIndex].classList.add('square')
        }
    }
    // 为右箭头事件添加定时器，自动轮播
    var timer=this.setInterval(changeImg,2000)
    // 圆点点击事件
    for(s=0;s<span.length;s++){
        // 为每个圆点绑定index,点击事件
        span[s].setAttribute('index',s)
        span[s].addEventListener('click',function(){
            // 获取圆点index
            var index=this.getAttribute('index')
            if(index!=currentImgIndex){
                img[currentImgIndex].classList.remove('current')
                span[currentImgIndex].classList.remove('square')
                img[index].classList.add('current')
                span[index].classList.add('square')
                currentImgIndex=index
            }
        })
    }
})