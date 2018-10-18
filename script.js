// $('button').click(function(){
// 	var v1 = parseInt($('#value1').val())
// 	var v2 = parseInt($('#value2').val())
// 	var operation = $('select option:selected').val()

// 	if (operation == "tambah") {
// 		var h = v1 + v2
// 		$('#hasil').val(h)
// 	}
// 	else if (operation == "kurang") {
// 		var h = v1 - v2
// 		$('#hasil').val(h)
// 	}
// 	else if (operation == "bagi") {
// 		var h = v1 / v2
// 		$('#hasil').val(h)
// 	}
// 	else if (operation == "kali") {
// 		var h = v1 * v2
// 		$('#hasil').val(h)
// 	}
// })

var result = 0;
var prev = 0;
var operation = null;
var curr = '0';

$('button').click(function(){
	var press = $(this).val();
	if ($(this).hasClass('numb')) {
		if (curr === '0') {
			curr = press;
		}
		else{
			curr = curr + press;
		}
	}
	else if($(this).hasClass('oper')){
		prev = parseInt(curr);
		operation = press;
		curr = '';
	}
	else if ($(this).hasClass('res')) {
		if (operation == "+") {
			curr = +prev + +curr
		}
		else if (operation == "-") {
			curr = prev - curr
		}
		else if (operation == "/") {
			curr = prev / curr
		}
		else if (operation == "x") {
			curr = prev * curr
		}
	}
	else if ($(this).hasClass('ccur')) {
		curr = '';
	}
	else if ($(this).hasClass('clear')) {
		prev = '';
		curr = '';
		operation = '';
	}
	else if ($(this).hasClass('plmi')) {
		curr = curr *= -1;
	}
	else if ($(this).hasClass('prct')) {
		curr = curr / 100;
	}

	$('input').val(curr);
})