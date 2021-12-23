module.exports = function () {

    $.gulp.task('svg', function () {
        return $.gulp.src('src/static/img/svg/*.svg')
            // minify svg
            .pipe($.gp.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            // remove all fill, style and stroke declarations in out shapes
            .pipe($.gp.cheerio({
                run: function ($) {
                    // $('[fill]').removeAttr('fill');
                    // $('[stroke]').removeAttr('stroke');
                    // $('[style]').removeAttr('style');
                },
                parserOptions: {
                    xmlMode: true
                }
            }))
            // cheerio plugin create unnecessary string '&gt;', so replace it.
            .pipe($.gp.replace('&gt;', '>'))
            // build svg sprite
            .pipe($.gp.svgSprite({

                  mode: {
                    view: { // Activate the «view» mode
                      bust: false,
                      render: {
                        scss: true // Activate Sass output (with default options)
                      }
                    },
                    symbol: true // Activate the «symbol» mode
                  }
            }))
            .pipe($.gulp.dest('build/img/svg/'));
    });
}