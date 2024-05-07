class Reproductor {
    constructor(canciones) {
        this.canciones = canciones;
        this.enReproduccion = false;
        this.ahoraSuena = 0;
    }

    playPause() {
        this.enReproduccion = !this.enReproduccion;
        if (this.enReproduccion) {
            console.log("Ahora suena: " + this.canciones[this.ahoraSuena].nombre);
            document.getElementById('audioPlayer').play(); 
        } else {
            console.log("Haz pausado la reproducción");
            document.getElementById('audioPlayer').pause(); 
        }
        this.showSongInSite();
    }

    shuffle() {
        this.ahoraSuena = Math.floor(Math.random() * this.canciones.length);
        this.showSongInSite();
    }

    next() {
        if (this.ahoraSuena < this.canciones.length - 1) {
            this.ahoraSuena++;
        }
        this.showSongInSite();
    }

    prev() {
        if (this.ahoraSuena > 0) {
            this.ahoraSuena--;
        }
        this.showSongInSite();
    }

    stop() {
        console.log("Haz detenido la reproducción");
        this.enReproduccion = false;
        this.ahoraSuena = -1;
        document.getElementById('audioPlayer').pause(); 
        document.getElementById('audioPlayer').currentTime = 0; 
        this.showSongInSite();
    }

    play(song) {
        if (typeof song === 'number') {
            this.ahoraSuena = song;
        } else {
            for (let i = 0; i < this.canciones.length; i++) {
                if (this.canciones[i].nombre === song) {
                    this.ahoraSuena = i;
                    break;
                }
            }
        }
        this.showSongInSite();
    }

    songsList() {
        let html = "<ul>";
        this.canciones.forEach((cancion, index) => {
            html += `<li><a href="#" onclick="reproductor.play(${index})">${cancion.nombre}</a></li>`;
        });
        html += "</ul>";
        return html;
    }

    showSongInSite() {
        let cancionActual = this.canciones[this.ahoraSuena];
        let imagen = document.getElementById('imagen');
        let detalles = document.getElementById('detalles-cancion');
        if (this.ahoraSuena !== -1) {
            imagen.src = cancionActual.imagen;
            detalles.innerHTML = `
                <h2>${cancionActual.nombre}</h2>
                <p><strong>Álbum:</strong> ${cancionActual.album}</p>
                <p><strong>Artista:</strong> ${cancionActual.artista}</p>
                <p><strong>Duración:</strong> ${cancionActual.duracion}</p>
            `;
            document.getElementById('audioPlayer').src = cancionActual.url; 
            if (this.enReproduccion) {
                document.getElementById('audioPlayer').play(); 
            }
        } else {
            imagen.src = ""; 
            detalles.innerHTML = ""; 
            document.getElementById('audioPlayer').src = ""; 
        }
    }
}


let canciones = [
    {
        nombre: "Bohemian Rhapsody",
        album: "A Night at the Opera",
        artista: "Queen",
        duracion: "5:59",
        imagen: "Canciones/Queen-Bohemian Rhapsody.jpeg",
        url: "Queen – Bohemian Rhapsody.mp4"
    },
    {
        nombre: "Hotel California",
        album: "Hotel California",
        artista: "Eagles",
        duracion: "6:44",
        imagen: "Canciones/eagles-hotel-california.jpg",
        url: "Canciones/Eagles - Hotel California.mp4" 
    },
    {
        nombre: "Californica",
        album: "Monarca",
        artista: "La Gusana Ciega",
        duracion: "3:30",
        imagen: "Canciones/California-La Gusana Ciega.jpeg",
        url: "Canciones/Califórnica-La Gusana Ciega.mp4"
    },
    {
        nombre: "Shut up my mom is calling ",
        album: "Shut up my mom is calling ",
        artista: "Hotel ugly",
        duracion: "2:47",
        imagen: "Canciones/Shut up my mom is calling - Hotel ugly.jpeg",
        url: "Canciones/Shut up my mom is calling - Hotel ugly.mp4"
    },
    {
        nombre: "Run ",
        album: "Nectar ",
        artista: "Joji",
        duracion: "3:15",
        imagen: "Canciones/Run-Joji.jpeg",
        url: "Canciones/Run-Joji.mp4"
    },
    {
        nombre: "Valentine ",
        album: "RUSH!(ARE U COMING?) ",
        artista: "Måneskin",
        duracion: "3:39",
        imagen: "Canciones/Valentine - Måneskin.jpeg",
        url: "Canciones/Valentine - Måneskin.mp4"
    },
    {
        nombre: "Bestia ",
        album: "bestia ",
        artista: "Humbe & bruses",
        duracion: "3:39",
        imagen: "Canciones/Bestia - Humbe & bruses.jpeg",
        url: "Canciones/Bestia - Humbe & bruses.mp4"
    },
    {
        nombre: "Como te extraño mi amor",
        album: "Avalancha de Exitos ",
        artista: "Cafe tacvba",
        duracion: "3:42",
        imagen: "Reproductor/Canciones/Como Te Extraño Mi Amor -Cafe tacvba.jpeg",
        url: "Canciones/Como Te Extraño Mi Amor -Cafe tacvba.mp4"
    },
];

let reproductor = new Reproductor(canciones);
