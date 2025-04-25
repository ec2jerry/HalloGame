function event(game) {
    var gridContainer = $('.grid-container')[0];
    var before;
    on(gridContainer, 'click', function(e) {
        var target = e.target;
        if (target.tagName !== 'IMG') return;
        var item = target.parentNode.parentNode;
        game.view.itemAction(item);
        if (!before) {
            before = item;
            return;
        }
        if (before === item) return;
        var beforeIndex = parseInt(before.getAttribute('data-index'));
        var afterIndex = parseInt(item.getAttribute('data-index'));
        var same = game.judge(beforeIndex, afterIndex);
        if (same) {
            before = null;
        } else {
            game.view.itemCancelAction(before);
            before = item;
        }
    });

    var start = $('#start')[0];
    on(start, 'click', function(e) {
        game.blockStart();
    });

    var restartimg = $('#restartimg')[0];
    on(restartimg, 'click', function(e) {
        game.restart();
    });

    var q = $('#q')[0];
    on(q, 'click', function(e) {
        alert("相同的兩張圖片，用三根以內的直線連起來就能消除。")
    });
    var helpBtn = $('#help')[0];
    on(helpBtn, 'click', function(e) {
        game.help();
    });

    var restartBtn = $('#restart')[0];
    on(restartBtn, 'click', function(e) {
        game.restart();
    });


}