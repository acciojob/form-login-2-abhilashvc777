//your JS code here. If required.
const form = document.querySelector("form")
const btn = document.querySelector("button")
const  input1= document.querySelector("#firstName")
const label1 = document.querySelector("#label1")
const  input2= document.querySelector("#lastName")
const label2 = document.querySelector("#label2")
const  input3= document.querySelector("#phNumber")
const label3 = document.querySelector("#label3")
const  input4= document.querySelector("#email")
const label4 = document.querySelector("#label4")
const text1 = label1.textContent
const text2 = label2.textContent
const text3 = label3.textContent
const text4 = label4.textContent
form.addEventListener("submit", ()=>{
	alert(`${text1} ${input1.value} ${text2} ${input2.value} ${text3} ${input3.value} ${text4} ${input4.value}`)
})
