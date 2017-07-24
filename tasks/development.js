import gulp from 'gulp'
import babel from 'gulp-babel'
import sourcemaps from 'gulp-sourcemaps'
import path from 'path'
import del from 'del'
import ava from 'gulp-ava'
import gutil from 'gulp-util'

const paths = {
  js: {
    src: 'src/**/*.js',
    dist: 'dist/'
  },
  test: {
    src: 'test/**/*.js',
    dist: 'dist/test/',
    run: 'dist/test/**/*.js'
  },
  config: {
    src: 'src/config/**/*',
    dist: 'dist/config'
  },
  sourceRoot: path.resolve('src')
}

/**
 * @description Clean test compiled files & sourcemaps
 * @ gulp babel:test
 */
gulp.task('babel:test', ['babel:src', 'clean:test'], () =>
  gulp.src(paths.test.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', {sourceRoot: paths.sourceRoot}))
    .pipe(gulp.dest(paths.test.dist))
)

/**
 * @description Compile es6 files to es5 and put them in dist directory
 * @example gulp babel:src
 */
gulp.task('babel:src', ['clean:dist', 'babel:config'], () =>
  gulp.src(paths.js.src)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', {sourceRoot: paths.sourceRoot}))
    .pipe(gulp.dest(paths.js.dist))
)

/**
 * @description Compile all es6 files to es5 and put them in dist directories
 * @example gulp babel
 */
gulp.task('babel:config', ['config', 'clean:config'], () =>
  gulp.src(`${paths.config.src}.js`)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.', {sourceRoot: paths.sourceRoot}))
    .pipe(gulp.dest(paths.config.dist)))

/**
 * @description Compile all es6 files to es5 and put them in dist directories
 * @example gulp babel
 */
gulp.task('babel', ['babel:src', 'babel:test'])

/**
 * @description Copy config directory to dist directory
 * @example gulp config
 */
gulp.task('config', ['clean:config'], () => {
  gulp.src(`${paths.config.src}.json`)
    .pipe(gulp.dest(paths.config.dist))
})

/**
 * @description Cleans config files
 * @example gulp clean:config
 **/
gulp.task('clean:config', () => del(paths.config.dist))

/**
 * @description Cleans compiled test files
 * @example gulp clean:test
 **/
gulp.task('clean:test', () => del(paths.test.dist))

/**
 * @description Cleans dist directory
 * @example gulp clean:dist
 * */
gulp.task('clean:dist', [], () => del(paths.js.dist))

/**
 * @description Cleans all compiled files
 * @example gulp clean
 */
gulp.task('clean', ['clean:dist', 'clean:test'])

/**
 * @description Runs unit tests
 * @example gulp ava
 * */
gulp.task('ava', () => {
  gulp.src([paths.test.run], {read: false})
    .pipe(ava({verbose: true}))
    .on('error', gutil.log)
})

/**
 * @description Watches change in working files
 * @example gulp watch
 */
gulp.task('watch', () => {
  gulp.watch(paths.js.src, ['babel:src'])
  gulp.watch(paths.test.src, ['babel:test'])
})

/**
 * @description Watches change in test folder
 * @example gulp watch:ava
 */
gulp.task('watch:ava', () => {
  gulp.watch(paths.test.src, ['ava'])
})

/**
 * @description Start the development environment
 * @example gulp
 */
gulp.task('default', ['babel', 'ava'])
