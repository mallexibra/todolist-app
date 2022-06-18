const user = document.getElementById("user");
const klik = document.getElementById("button");
const item = document.getElementById("item");

klik.addEventListener("click", function(event){
	if(user.value == ""){
		alert("Diisi dong bro to do listnya dulu");
	}else{
		item.innerHTML += `<li id="i">${user.value}</li>`;
		user.value = "";
	}
})

item.addEventListener("click", function(event){
	if(event.target.id == "i"){
		let confir = confirm("Apakah kamu yakin untuk menghapus to do list mu?");
		if(confir == true){
			event.target.remove();
			alert("To do listmu sudah terhapus");
		}
	}
})