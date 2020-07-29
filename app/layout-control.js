/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */

let $layout = $('#layout')

export function getState() {
    let pixels = $layout.css('left')
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

export function goLeftAction() {
    let state = getState()
    console.log('Current State:', state)
    if (state > -1) {
        $layout.animate({ 'left': '+=100vw' }, 'fast')
    }
}

export function goRightAction() {
    let state = getState()
    console.log('Current State:', state)
    if (state < 1) {
        $layout.animate({ 'left': '-=100vw' }, 'fast')
    }
}

export function reset() {
    $layout.css({ 'left': '0' })
}