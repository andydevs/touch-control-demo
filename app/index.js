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
import {
    reset
} from './layout-control.js';

$(function() {
    $(window).resize(reset)

    $('#layout').on('touchstart', swipeDetectionStart)
})