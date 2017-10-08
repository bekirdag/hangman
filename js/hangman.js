/**
 * @file
 * Main game data and functions object.
 */

Game = {
    target_word : "",
    tries: 0,
    initial_tries: 5,
    found_letters: 0,
    score: 100,
    score_steps: 10,
    construct_game : function () {
        Game.tries = Game.initial_tries;
        Game.target_word = "";
        Game.found_letters = 0;
        Game.score = 100;
        jQuery("#message").text("");
        jQuery("#score").text(Game.score);
        jQuery(".hangman_letter").remove();
        jQuery(".used").removeClass("used");
        jQuery("#status").css("background-position-y","0");
        Game.choose_words();
        Game.set_letters();
        Game.score_steps = Game.score / Game.target_word.length;
    },
    choose_words : function () {
        var words = ['3dhubs', 'marvin', 'print', 'filament', 'order', 'layer'];
        var words_index = Math.floor(Math.random() * words.length);
        Game.target_word = words[words_index];
    },
    set_letters : function () {
        var num_of_letters = Game.target_word.length;
        for (i = 0; i < num_of_letters; i++) {
            var letter = Game.target_word.charAt(i);
            jQuery("#hangman_letters_wrapper").append("<div class='hangman_letter' num='" + i + "' letter='" + letter + "'></div>");
        }
    }
}
