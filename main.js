// console.log(str[1]);
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("w"));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log(str.includes('world'))
// console.log(str.startsWith('Hi'))
// console.log(str.endsWith('world'))
// console.log(str.substring(0, -4))
// console.log(str.slice(0, -1))
// console.log(str.substr(0, 2))
// console.log(str.trim())

// У вас должен быть инпут  на который вы будете писать текст. Данный инпут должен загорется зеленым если вы ввели ссылку на сайт, иначе красным также будет второй инпут который будет проверять правильно ли вы ввели свой емаил
// например:
// input:
// https://example.com => true
// timau32@gmail.com => true

// https:google.com => false
// htt:google => false
// google.com => false
// https://google.com/search => true

// timau32mail.ru =>  false
// timau32@test.ru => true

// правила для ссылок: ссылка должна в тексте содержать "." и "https://" или "http://"
// правила для мейлов: мейл должен в тексте содержать "." и "@"

// Тут основне задание это проверка ссылки, а доп задание проверка мейл

document.getElementById('link-inp').onchange = e => {
	let link = e.target.value.trim()
	let inp1 = document.getElementById('link-inp')

	if (
		link.includes('.') &&
		(link.startsWith('https://') || link.startsWith('http://'))
	) {
		inp1.style.borderColor = '#2EC300'
	} else {
		inp1.style.borderColor = '#FF1F1F'
	}
}

document.getElementById('email-inp').onchange = e => {
	let link = e.target.value.trim()
	let inp2 = document.getElementById('email-inp')

	if (link.includes('.') && link.includes('@')) {
		inp2.style.borderColor = '#2EC300'
	} else {
		inp2.style.borderColor = '#FF1F1F'
	}
}
