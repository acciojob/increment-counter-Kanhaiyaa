//your JS code here. If required.

const counterElement=document.getElementById('counter')
const incrementBtn=document.getElementById('incrementBtn')

let counterValue=0

function incrementCounter() {
	alert("un--incremented value: "+counterValue)
	counterValue++

	counterElement.textContent=counterValue
}
incrementBtn.addEventListener('click',incrementCounter)