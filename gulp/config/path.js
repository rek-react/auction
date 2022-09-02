const sourceFolder = './src'
const buildFolder = './build'

export const path = {
    src: {
        html: `${sourceFolder}/*.html`,
        scripts: `${sourceFolder}/assets/scripts/script.js`,
        styles: `${sourceFolder}/assets/styles/style.scss`,
        images: `${sourceFolder}/assets/images/**/*.{jpeg,jpg,png,gif}`,
        files: `${sourceFolder}/assets/files/**/*.*`
    },
    build: {
        html: `${buildFolder}/`,
        scripts: `${buildFolder}/assets/scripts/`,
        styles: `${buildFolder}/assets/styles/`,
        images: `${buildFolder}/assets/images/`,
        files: `${buildFolder}/assets/files/`,
        fonts: `${buildFolder}/assets/fonts/`
    },
    watch: {
        html: `${sourceFolder}/**/*.html`,
        scripts: `${sourceFolder}/assets/scripts/**/*.js`,
        styles: `${sourceFolder}/assets/styles/**/*.scss`,
        images: `${sourceFolder}/assets/images/**/*.{jpeg,jpg,png,gif}`,
        files: `${sourceFolder}/assets/files/**/*.*`
    },
    scrFolder: sourceFolder,
    reset: buildFolder,
}