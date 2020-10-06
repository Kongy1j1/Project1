function dis(val)
{
	document.getElementById("result").value+=val
}
function solve()
{
	let x = document.getElementById("result").value
	let y = eval(x)
	document.getElementById("result").value = y
}
function clr()
{
	document.getElementById("result").value = ""
}
function keyboardInput(key) {
    if ((key.which < 0 || key.which > 57) && (key.which !== 13 && key.which !== 99)) {
        return false;
    } else {
        key.preventDefault();
        if (key.which === 48) {
            dis(0);
        } else if (key.which === 49) {
            document.getElementById("result").value+= "1";
        } else if (key.which === 50) {
            display.value += "2";
        } else if (key.which === 51) {
            display.value += "3";
        } else if (key.which === 52) {
            display.value += "4";
        } else if (key.which === 53) {
            display.value += "5";
        } else if (key.which === 54) {
            display.value += "6";
        } else if (key.which === 55) {
            display.value += "7";
        } else if (key.which === 56) {
            display.value += "8";
        } else if (key.which === 57) {
            display.value += "9";
        } else if (key.which === 46) {
            display.value += ".";
        } else if (key.which === 42) {
            display.value += "*";
        } else if (key.which === 47) {
            display.value += "/";
        } else if (key.which === 43) {
            display.value += "+";
        } else if (key.which === 45) {
            display.value += "-";
        } else if (key.which === 13) {
            dis();
        } else if (key.which === 99) {
            clr();
        }
        return true;
    }
}




function play_0() {
	var audio = document.getElementById("0");
	audio.play();
}
function play_1() {
	var audio = document.getElementById("1");
	audio.play();
}
function play_2() {
	var audio = document.getElementById("2");
	audio.play();
}
function play_3() {
	var audio = document.getElementById("3");
	audio.play();
}
function play_4() {
	var audio = document.getElementById("4");
	audio.play();
}
function play_5() {
	var audio = document.getElementById("5");
	audio.play();
}
function play_6() {
	var audio = document.getElementById("6");
	audio.play();
}
function play_7() {
	var audio = document.getElementById("7");
	audio.play();
}
function play_8() {
	var audio = document.getElementById("8");
	audio.play();
}
function play_9() {
	var audio = document.getElementById("9");
	audio.play();
}
function play_clear() {
	var audio = document.getElementById("clear");
	audio.play();
}
function play_div() {
	var audio = document.getElementById("div");
	audio.play();
}
function play_plus() {
	var audio = document.getElementById("plus");
	audio.play();
}
function play_muli() {
	var audio = document.getElementById("muli");
	audio.play();
}
function play_sub() {
	var audio = document.getElementById("sub");
	audio.play();
}
function play_equal() {
	var audio = document.getElementById("equal");
	audio.play();
}
function play_dec() {
	var audio = document.getElementById("dec");
	audio.play();
}
