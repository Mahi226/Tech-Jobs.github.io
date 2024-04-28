const bar = document.getElementById("mobile")
const nav = document.getElementById("navbar")



if(bar) {
	bar.addEventListener("click",()=>{
		nav.classList.add("active");
	})
}



const List = [
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Bangalore",
	qualification:"BE/B-Tech Bsc",
	work:"Fresh",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	description:"walkin"
},
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Noida",
	qualification:"Bachelor’s Degree",
	work:"0 – 2 years	",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/01/Paytm.jpg",
	description:"walkin"
},
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Hyderabad",
	qualification:"BE/B-Tech Bsc",
	work:"Fresh",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/01/Amazon.png",
	description:"online"
},
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Bangalore",
	qualification:"BE/B-Tech Bsc",
	work:"Freshers / Experience",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Accenture.jpg",
	description:"walkin"
},
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Bangalore",
	qualification:"BE/B-Tech Bsc",
	work:"Fresh",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/01/Tech-Mahindra.jpg",
	description:"walkin"
},
{
	link:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	name:"Software ",
	location:"Bangalore",
	qualification:"BE/B-Tech Bsc",
	work:"Fresh",
	image:"https://www.jobscoupe.com/wp-content/uploads/2019/03/Intel.png",
	description:"walkin"
},
		{link:"https://www.google.com/search?q=who+discovered+python&oq=w&gs_lcrp=EgZjaHJvbWUqBggEEEUYOzIGCAAQRRg8Mg4IARBFGCcYOxiABBiKBTIGCAIQRRg5MgYIAxBFGDsyBggEEEUYOzIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDMzNzhqMGo3qAIIsAIB&sourceid=chrome&ie=UTF-8",name:"Govt",title:"Railway",image:"https://www.jobscoupe.com/wp-content/uploads/2019/01/Paytm.jpg",description:"qenlfcbvibwjfabnc"},
		{link:"",name:"Govt",title:"Backend",image:"https://res.cloudinary.com/djuqhfvux/image/upload/v1714148763/Internet_Slow__Here_s_How_to_Troubleshoot_Your_Router-removebg-preview_tlpjds.png",description:"j fbvibwjfabnc"},
		{link:"",name:"Govt",title:"frontend",image:"https://res.cloudinary.com/djuqhfvux/image/upload/v1714149569/Premium_Vector___Team_connecting_puzzle_parts-removebg-preview_s2jenw.png",description:"qbfbvjvibwjfabnc"},
		{link:"",name:"Govt",title:"SBI",image:"https://res.cloudinary.com/djuqhfvux/image/upload/v1714119904/download__2_-removebg-preview_1_rlix5b.png",description:"bcjwenvd akmbv"},
	]


const a = List.filter(each => each.name == "Govt")
console.log(b)

const b = a.map(each => {
	let parent = document.getElementById("parent") 
	let bg = document = document.createElement("div")
	let container1 = document.createElement("div")
	let image = document.createElement("img")

	let container2 = document.createElement("div")
	let name = document.createElement("h3")
	let location = document.createElement("h5")
	let description = document.createElement("p")
	let work = document.createElement("p")
	let qualification = document.createElement("p")

	let link = document.createElement("a")
	let button1 = document.createElement("button")


	parent.appendChild(bg)
	bg.setAttribute("id","bg")	
	bg.appendChild(container1)
	container1.setAttribute("id","container1")
	container2.setAttribute("id","container2")

	bg.appendChild(container2)	

	image.setAttribute("src",each.image)
	image.setAttribute("class","image-job")


	name.textContent = each.name 
	location.textContent = `Loctaion : ${each.location}`
	description.textContent= each.description
	work.textContent = `Work Experience : ${each.work}`
	qualification.textContent = `Qualification : ${each.qualification}`
	


	button1.textContent="Apply"
	link.setAttribute("href",each.link)
	link.appendChild(button1)

	container1.appendChild(image)
	container2.appendChild(name)
	container2.appendChild(location)
	container2.appendChild(qualification)
	container2.appendChild(work)

	container2.appendChild(description)
	container2.appendChild(link)


})