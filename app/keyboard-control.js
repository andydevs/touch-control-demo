/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */
import {
    goLeftAction,
    goRightAction
} from './layout-control.js';

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

export function handleKeyEvent(event) {
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