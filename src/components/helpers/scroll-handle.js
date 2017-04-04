/*
    abstracts scroll handling for the nav components
    assign this class to the component first, with one argument:
        - requiredConsecutives: how many times must the window move in one direction in a row before firing the callback
    when ready to use, just call it with a callback that will be passed one arg:
        - direction: 'up' || 'down'
    this callbak will only fired once the required consecutives is satisfied, so no need to worry about a false being returned to your component
*/

export default function _handleScroll (_requiredConsecutives) {
    const requiredConsecutives  = _requiredConsecutives;
    let
        prevScroll    = 0,
        prevDirection = 'down',
        consecutives  = 0;

    if (isNaN(requiredConsecutives)) {
        throw new Error ('required consecutives is not a number');
        return false
    }

    return function (callback) {
        const
            scroll    = window.scrollY,
            direction = scroll > prevScroll ? 'down' : 'up',
            goesUp    = direction == prevDirection ? consecutives + 1 : 0;

        consecutives = goesUp;
        prevScroll   = scroll;
        console.log(consecutives)
        if (consecutives == requiredConsecutives) {
            callback(direction);
        } else {
            prevDirection = direction;
            return false;
        }
    }
}
