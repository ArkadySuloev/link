var questionInput = document.getElementById('question')
var button = document.getElementById('btn')
var link = document.getElementById('link')


button.onclick = function () {
	var question = questionInput.value

	var Linknew = 'http://lmgtfy.com/?q=' + question
	
	link.href = Linknew

	questionInput.value = ''
}