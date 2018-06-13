var gulp = require('gulp');
var server = require('gulp-webserver');
var path = require('path');
var js = require("fs");
var url = require('url');
// 起服务
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 8012,
            livereload: true,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false;
                }
                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(path.join(__dirname, 'src', pathname))
            }
        }))
})