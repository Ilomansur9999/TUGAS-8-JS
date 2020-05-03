function objectsatu(){
	var Rumah = {
		type: 'Luxury',
		harga: 20000000000,
		lokasi: 'Sentul',
		Fasilitas: ['Dekat Toll', 'Sekolah dan Pusat Perbelanjaan', 'Jalanan Asri dan Tropis' , 'Kemananan 24 jam']
	}


	Rumah.harga = 5000000000;

	console.log(Rumah)
	console.log(Rumah.type)

}

objectsatu()





// C:\Users\USER\Documents\JS\javascript>node tugas8.js
// {
//   type: 'Luxury',
//   harga: 5000000000,
//   lokasi: 'Sentul',
//   Fasilitas: [
//     'Dekat Toll',
//     'Sekolah dan Pusat Perbelanjaan',
//     'Jalanan Asri dan Tropis',
//     'Kemananan 24 jam'
//   ]
// }
// Luxury
