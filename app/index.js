/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

let state = 0
let $layout = $('#layout')

function goLeftAction() {
    if (state > -1) {
        $layout.css('left', '+=100vw')
        state--
    }
}

function goRightAction() {
    if (state < 1) {
        $layout.css('left', '-=100vw')
        state++
    }
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


})