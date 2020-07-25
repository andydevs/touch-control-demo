/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'

// ====================== LAYOUT CONTROLS ========================

let $layout = $('#layout')

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

// ==================== KEY CONTROL HANDLER ======================

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

function handleKeyEvent(event) {
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
}

// =================== SWIPE CONTROL HANDLER ====================

// Threshold
const THRESHOLD = 100

// Vectors
let xDown, yDown
let xUp, yUp
let xDiff, yDiff

// Swipe info
let direction
let swiped

function startTouch(event) {
    // Get first touch
    let touch = event.touches[0]
 
    /*
    We set up vector to equal down vector 
    so that if touchmove event is not fired 
    before touchend, the resulting difference 
    vector is zero
    */

    // Update vectors
    xDown = touch.clientX
    yDown = touch.clientY
    xUp = touch.clientX
    yUp = touch.clientY
}

function moveTouch(event) {
    // Update last touch
    let touch = event.touches[0]
    xUp = touch.clientX
    yUp = touch.clientY
}

function endTouch(event) {
    // First console log
    console.log('Detect swipe')

    // Get difference of up and down vectors
    xDiff = xUp - xDown
    yDiff = yUp - yDown
    console.log('Vector Difference:', xDiff, yDiff)

    // Get direction
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            direction = 'right'
        }
        else {
            direction = 'left'
        }
    }
    else if (Math.abs(yDiff) > Math.abs(xDiff)) {
        if (yDiff > 0) {
            direction = 'down'
        }
        else {
            direction = 'up'
        }
    }
    else {
        direction = 'unknown'
    }
    console.log('Direction:', direction)

    // Detect swipe
    switch (direction) {
        case 'right':
            swiped = xDiff > THRESHOLD
            break;
        case 'left':
            swiped = xDiff < -THRESHOLD
            break;
        case 'up':
            swiped = yDiff > THRESHOLD
            break;
        case 'down':
            swiped = yDiff < -THRESHOLD
            break;
        case 'unknown':
        default:
            swiped = false;
            break;
    }
    console.log('Swiped:', swiped)

    // Handle swipe response
    if (swiped) {
        switch (direction) {
            case 'right':
                goLeftAction()
                break;
            case 'left':
                goRightAction()
                break;
            default:
                break;
        }
    }
}

$(function() {
    // Keydown event handler
    $(window).keydown(handleKeyEvent)

    $('#layout').on('touchstart', startTouch)
    $(window).on('touchmove', moveTouch)
    $(window).on('touchend', endTouch)
})