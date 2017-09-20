function new_word() {
	n_choice = document.getElementById('n')
	t_choice = document.getElementById('t')
	next = document.getElementById('next')
	write = document.getElementById('word')
	
	n_choice.checked = false
	t_choice.checked = false
	next.classList.add('hidden')
	
	pick = Math.floor(Math.random()*words.length)
	
	picked_word = words[pick][0]
		console.log('picked: ' + picked_word)
	picked_type = words[pick][1]
		console.log('picked_type: ' + picked_type)
	
	if (picked_type == 'n') {
		n_choice.setAttribute('data-answer', 'right')
		t_choice.setAttribute('data-answer', 'wrong')
	} else if (picked_type == 't') {
		t_choice.setAttribute('data-answer', 'right')
		n_choice.setAttribute('data-answer', 'wrong')
	}

	write.innerHTML = picked_word
}

function check_word() {
	next.classList.remove('hidden')
	write.innerHTML = 'e' + picked_type + ' ' + picked_word
}
