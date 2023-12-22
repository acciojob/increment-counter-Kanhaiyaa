
const para=document.getElementById("count")

function incre() {
	let count=Number(para.innerText)
	alert(count)
	para.innerText=++count
}