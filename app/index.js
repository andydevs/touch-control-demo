/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import './style/main.scss'

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

function goLeftAction() {
    console.log('Go Left')
}

function goRightAction() {
    console.log('Go Right')
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