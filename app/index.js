/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'

let $layout = $('#layout')

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

let state = 0

function goLeftAction() {
    if (state > -1) {
        $layout.animate({ 'left': '+=100vw' })
        state--
    }
}

function goRightAction() {
    if (state < 1) {
        $layout.animate({ 'left': '-=100vw' })
        state++
    }
}


const THRESHOLD = 60
let xDown
let xUp

function startTouch(event) {
    console.log('touchStart')
    xDown = event.touches[0].clientX
}

function moveTouch(event) {
    console.log('touchMove')
    xUp = event.touches[0].clientX
}

function endTouch(event) {
    let distance = Math.round( (xUp - xDown) / $(window).width() * 100 )
    if (distance > THRESHOLD) {
        goLeftAction()
    }
    else if (distance < -THRESHOLD) {
        goRightAction()
    }

    xDown = 0
    xUp = 0
}


$(function() {
    // Keydown event handler
    $(window).keydown(function(event) {
        switch (event.which) {
            case LEFT_ARROW:
                goLeftAction()
                break;
            case RIGHT_ARROW:
                goRightAction()
                break;
            default:
                break;
        }
    })

    $('#layout').on('touchstart', startTouch)
    $(window).on('touchmove', moveTouch)
    $(window).on('touchend', endTouch)
})