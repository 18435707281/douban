 
 //一、先导入插件
 
let gulp = require('gulp');
// let concat = require('gulp-concat');
let cssnano = require('gulp-cssnano');
// let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let autoprefixer = require('gulp-autoprefixer')


// 二  创建任务

// function fnJS(){
//     console.log('hello');
// }
//处理js的任务
function fnJS(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('dist/js'))
}

//处理scss任务

function sassFn(){
    return gulp.src("./src/sass/**/*")
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(autoprefixer("last 2 version","safari 5","ie 8","ie 9","opera 12.1","ios 6","android 4"))
        // .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest("./dist/css"))
}



//拷贝html文件

function copyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}

//处理图片
function fnImg(){
    gulp.src('src/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/image'))
}





function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch("./src/sass/**/*",sassFn);
    gulp.watch('./src/index.html',copyIndex);
    // gulp.watch('./src/date/shop.json',copyDate);
    gulp.watch('src/image/*',fnImg);
}


//三、导出任务

exports.js = fnJS;
exports.sass = sassFn;
exports.img = fnImg;
exports.copyIndex = copyIndex;
exports.default = fnWatch;
exports.all = gulp.series(fnJS,sassFn,fnImg,copyIndex);
