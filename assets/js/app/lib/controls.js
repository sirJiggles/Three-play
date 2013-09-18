// messing arround with key controls

function addControls(callback) {
    // State of the different controls
    direction = {
        left: false,
        up: false,
        right: false,
        down: false
    };

    // When the user presses a key 
    $(document).keydown(function (e) {

        e.preventDefault();

        switch (e.keyCode) {
            case 37:
                direction.left = true;
                break;
            case 38:
                direction.up = true;
                break;
            case 39:
                direction.right = true;
                break;
            case 40:
                direction.down = true;
                break;
            default:
                prevent = false;
        }

        callback(direction);
    });

    $(document).keyup(function (e) {
        e.preventDefault();

        switch (e.keyCode) {
            case 37:
                direction.left = false;
                break;
            case 38:
                direction.up = false;
                break;
            case 39:
                direction.right = false;
                break;
            case 40:
                direction.down = false;
                break;
            default:
                prevent = false;
        }

        callback(direction);
    });
}