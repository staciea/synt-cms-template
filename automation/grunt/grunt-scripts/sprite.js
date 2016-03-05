// Grunt task for converting a set of images into a spritesheet and corresponding CSS variables
module.exports = {
	main: {
		src: ['<%= theme.images %>/sprite/*.png', '!<%= theme.images %>/sprite/sprite.png'],
		dest: '<%= theme.images %>/sprite/sprite.png',
		destCss: '<%= theme.images %>/sprite/sprite.css',
		algorithm: 'left-right',
		algorithmOpts: {sort: false},
		padding: 1
	}
}
