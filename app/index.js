/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'
import {
    swipeDetectionStart,
    swipeDetectionUpdate,
    swipeDetectionEnd
} from './swipe-detection.js';
import {
    reset
} from './layout-control.js';
import {
    handleKeyEvent
} from './keyboard-control.js';

const MOBILE_WIDTH = 500

$(function() {
    $(window).resize(function(event) {
        reset()        
    })

    // Keydown event handler
    $(window).keydown(handleKeyEvent)

    $('#layout').on('touchstart', swipeDetectionStart)
    $(window).on('touchmove', swipeDetectionUpdate)
    $(window).on('touchend', swipeDetectionEnd)
})