/**
 * Use this template for building basic static websites
 * 
 * Author:  Anshul Kharbanda
 * Created: 7 - 22 - 2020
 */

/**
 * Jquery plugin for get state
 */
(function($) {

    /**
     * Compute carousel state based on position
     * 
     * @returns {int} integer state
     */
    $.fn.carouselState = function() {
        let pixels = $(this).css('left')
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

    /**
     * Initialize carousel system for the given element
     * 
     * @returns {jQuery} jquery object for chaining
     */
    $.fn.carouselSystem = function() {
        // Resize handler
        $(window).on('resize', (function(event) {
            this.css({ 'left' : '0px' })
        }).bind(this))

        // Swipe left
        this.on('swipeleft', function(event) {
            console.group('Swipe Left')
            let state = $(this).carouselState()
            console.log('Current State:', state)
            if (state < 1) {
                $(this).animate({ 'left': '-=100vw' }, 'fast')
                console.log('Go to right panel')
            }
            else {
                console.log('At rightmost panel')
            }
            console.groupEnd()
        })
        // Swipe right
        .on('swiperight', function(event) {
            console.group('Swipe Right')
            let state = $(this).carouselState()
            console.log('Current State:', state)
            if (state > -1) {
                $(this).animate({ 'left': '+=100vw' }, 'fast')
                console.log('Go to left panel')
            }
            else {
                console.log('At leftmost panel')
            }
            console.groupEnd()
        })
        
        // Return jQuery
        return this
    }

})(jQuery)