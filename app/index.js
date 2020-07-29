/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'
import {
    swipeDetectionStart
} from './swipe-detection.js';

export function getState($element) {
    let pixels = $element.css('left')
    let firstChar = pixels[0]
    if (firstChar === '-') {
        return 1
    }
    else if (firstChar === '0') {
        return 0
    }
    else {
        return -1
    }
}

$(function() {
    $(window).resize(function reset() {
        $layout.css({ 'left': '0' })
    })

    $('#layout')
        .on('touchstart', swipeDetectionStart)
        .on('swipeleft', function(event) {
            let state = getState($(this))
            console.log('Current State:', state)
            if (state < 1) {
                $(this).animate({ 'left': '-=100vw' }, 'fast')
            }
        })
        .on('swiperight', function(event) {
            let state = getState($(this))
            console.log('Current State:', state)
            if (state > -1) {
                $(this).animate({ 'left': '+=100vw' }, 'fast')
            }
        })
})