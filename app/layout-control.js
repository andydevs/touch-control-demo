/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */

let $layout = $('#layout')

let state = 0

export function goLeftAction() {
    if (state > -1) {
        $layout.animate({ 'left': '+=100vw' }, 'fast')
        state--
    }
}

export function goRightAction() {
    if (state < 1) {
        $layout.animate({ 'left': '-=100vw' }, 'fast')
        state++
    }
}

export function reset() {
    $layout.css({ 'left': '0' })
    state = 0
}