/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import '../style/main.scss'
import './swipe-detection.js'
import './carousel-control.js'

$(function() {
    $('#layout')
        .swipeDetection()
        .carouselSystem()
})