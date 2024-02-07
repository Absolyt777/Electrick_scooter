btnWhite.onclick = function () {
    btnBg.style.animation = "sect-1-btn-bg 3s linear forwards"
    body.style.background = "#E0E0E0"
}

btnBlack.onclick = function () {
    btnBg.style.animation = "sect-1-btn-bg2 3s linear forwards"
    body.style.background = "#222"
}

$('.sect-6-list').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='sect-6-nav-right-btns-left'><img src='img/sect-6-nav-right-btns-left.png'></button>",
    nextArrow: "<button type='button' class='sect-6-nav-right-btns-right'><img src='img/sect-6-nav-right-btns-right.png'></button>",
    responsive: [
        {
            breakpoint: 961,
            settings: {
                slidesToShow: 2,
                centerMode: false,
                variableWidth: true
            }
        }
    ]
});



const scooterWhiteImg = document.querySelector('.scooter')
const scooterBlackImg = document.querySelector('.scooter-black')


btnWhiteFooter.onclick = function () {
    btnBgFooter.style.animation = "sect-1-btn-bg 1s linear forwards"
    scooterWhiteImg.classList.add('hidden')
    scooterBlackImg.classList.remove('hidden')
}

btnBlackFooter.onclick = function () {
    btnBgFooter.style.animation = "sect-1-btn-bg2 1s linear forwards"
    scooterWhiteImg.classList.remove('hidden')
    scooterBlackImg.classList.add('hidden')
}


const tabletScooterWhiteImg = document.querySelector('.sect-7-scooter')
const tabletScooterBlackImg = document.querySelector('.sect-7-scooter-black')


btnWhiteFooterTablet.onclick = function () {
    btnBgFooterTablet.style.animation = "sect-1-btn-bg 1s linear forwards"
    tabletScooterWhiteImg.classList.add('hidden')
    tabletScooterBlackImg.classList.remove('hidden')
}


btnBlackFooterTablet.onclick = function () {
    btnBgFooterTablet.style.animation = "sect-1-btn-bg2 1s linear forwards"
    tabletScooterWhiteImg.classList.remove('hidden')
    tabletScooterBlackImg.classList.add('hidden')
}

const mobileScooterWhite = document.querySelector('.mobile-wrapper-img-white')
const mobileScooterBlack = document.querySelector('.mobile-wrapper-img-black')

mobileBtnWhite.onclick = function () {
    mobileWrapperBtnBg.style.animation = "sect-1-btn-bg 1s linear forwards"
    mobileScooterWhite.classList.add('hidden')
    mobileScooterBlack.classList.remove('hidden')
}

mobileBtnBlack.onclick = function () {
    mobileWrapperBtnBg.style.animation = "sect-1-btn-bg2 1s linear forwards"
    mobileScooterWhite.classList.remove('hidden')
    mobileScooterBlack.classList.add('hidden')
}









