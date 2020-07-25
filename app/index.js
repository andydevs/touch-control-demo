/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'

const MOBILE_WIDTH = 500

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

function reset() {
    $layout.css({ 'left': '0' })
    state = 0
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
const DISTANCE_THRESHOLD = 100
const TIME_THRESHOLD = 200

// Vectors
let tDown, xDown, yDown
let tUp, xUp, yUp
let tDiff, xDiff, yDiff

// Swipe info
let direction
let swiped

/**
 * Handles touchstart events, initializes swipe 
 * detection system
 * 
 * @param {TouchEvent} event javascript touch event
 */
function startTouch(event) {
    // Get first touch
    let touch = event.touches[0]
 
    /*
    We set up vector to equal down vector 
    so that if touchmove event is not fired 
    before touchend, the resulting difference 
    vector is zero
    */

    // Initialize touch vectors
    xDown = touch.clientX
    yDown = touch.clientY
    xUp = touch.clientX
    yUp = touch.clientY

    /*
    For the case of time, a smaller difference
    would actually mean that it would pass the
    swipe threshold. Therefore it wouldn't be
    viable to use zero as a null timediff. We
    need to use Infinity
    */

    // Initialize touch times
    tDown = Math.round(event.timeStamp)
    tUp = Infinity;
}

/**
 * Handles touchmove events. Updates swipe detection
 * data (namely ending touch position)
 * 
 * @param {TouchEvent} event javascript touch event
 */
function moveTouch(event) {
    /**
     * Since touchend doesn't store any
     * touches, we will need to continuously
     * update the up touch data in touchmove
     */
    // Get first touch
    let touch = event.touches[0]

    // Update up vector
    xUp = touch.clientX
    yUp = touch.clientY

    // Update up time
    tUp = Math.round(event.timeStamp)
}


/**
 * Handles touchend events. Uses swipe detection data
 * to determine if swipe occured and in which direction
 * 
 * @param {TouchEvent} event javascript touch event
 */
function endTouch(event) {
    // First console log
    console.log('Detect swipe')

    // Get difference of up and down vectors and times
    xDiff = xUp - xDown
    yDiff = yUp - yDown
    tDiff = tUp - tDown
    console.log('Vector Difference:', xDiff, yDiff)
    console.log('Time Difference:', tDiff)

    // Get direction
    if (Math.abs(xDiff) == 0 && Math.abs(yDiff) == 0) {
        direction = 'none'
    }
    else if (Math.abs(xDiff) > Math.abs(yDiff)) {
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
            swiped = xDiff > DISTANCE_THRESHOLD
            break;
        case 'left':
            swiped = xDiff < -DISTANCE_THRESHOLD
            break;
        case 'up':
            swiped = yDiff < -DISTANCE_THRESHOLD
            break;
        case 'down':
            swiped = yDiff > DISTANCE_THRESHOLD
            break;
        case 'none':
        case 'unknown':
        default:
            swiped = false;
            break;
    }
    swiped = swiped && (tDiff < TIME_THRESHOLD)
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