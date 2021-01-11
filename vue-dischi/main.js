/*
Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
Servendoci di Vue JS stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
*/
let vm = new Vue({
	el:"#app",
	data: {
		artist: [],
		selected:"",
		options: [
			{ text: 'Rock', value: 'Rock' },
			{ text: 'Pop', value: 'Pop' },
			{ text: 'Metal', value: 'Metal' },
			{ text: 'Jazz', value: 'Jazz' }
		  ]
	},
	methods: {
		getArtist(){
			axios.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then(response => {
				this.artist = response.data.response;
			});
		}
	},		
	mounted(){
		this.getArtist();
	},
	computed: {

	},
});