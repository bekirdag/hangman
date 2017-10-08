/**
 * @file
 * Handling the user actions.
 */

(function ($) {
    $(document).ready(function () {
        Game.construct_game();
        var found = 0;
        $("#hangman_alphabet li").click(function () {
            if (Game.tries > 0 && !$(this).hasClass("used")) {
                found = 0;
                var letter = $(this).text().toLowerCase();
                $(this).addClass("used");
                $(".hangman_letter").each(function () {

                    if (letter == $(this).attr("letter")) {
                        $(this).text($(this).attr("letter"));
                        found++;
                        Game.found_letters++;
                        if (Game.found_letters == Game.target_word.length) {
                            $("#message").html("<p>YOU WIN!</p>");
                            $(".hangman_letter").addClass("green");
                            var username = Drupal.settings.hangman.username;
                            $.get("hangman/score/" + Game.score + "/" + username)
                            .done(function (data) {
                                refresh_scoreboard();
                            });
                        }
                    }
                });
                if (found == 0) {
                    Game.tries--;
                    Game.score = parseInt(Game.score - Game.score_steps);
                    var animation_height = parseInt($("#status").height());
                    $("#status").css("background-position-y",animation_height * (Game.tries + 2));
                    if (Game.tries == 0) {
                        Game.score = 0;
                        $("#message").html("<p>GAME OVER!</p>");
                        $(".hangman_letter").addClass("red");
                        $(".hangman_letter").each(function () {
                            $(this).text($(this).attr("letter"));
                        });
                    }
                    $("#score").text(Game.score);
                }
            }

        });
        $("#new_game").click(function () {
            Game.construct_game();
            refresh_scoreboard();
        });
    });

    function refresh_scoreboard() {
        $.get("hangman/scoreboard", function (data) {
            $("#hangman_scoreboard").html(data);
        });
    }
})(jQuery);
