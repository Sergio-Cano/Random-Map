class City {
    constructor(name = "", lat = 0, lng = 0, places = []){
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.places = places;
    }

    setPlaces = (places) => this.places = places;
}

class Place {
    constructor(name = "", lat = 0, lng = 0, img = "", description = ""){
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.description = description;
        this.img = img;
    }

}


const barcelona = new City("Barcelona", 41.404, 2.181);

const sagradaFamilia = new Place("Basílica de la Sagrada Familia", 41.40626938342874, 2.181263228553804, "Multimedia/Barcelona/Sagrada-familia.jfif", "Famosa iglesia inacabada de la década de 1880, con museo y vistas a la ciudad.");

const parkGuell = new Place("Park Güell", 41.416559258394855, 2.161029760763826, "Multimedia/Barcelona/Park-guell.jfif","Edificios, escaleras y esculturas con mosaicos en un parque verde con el museo de Gaudí y vistas panorámicas.");

const casaBattlo = new Place("Casa Batlló", 41.39186229221637, 2.1652358237970484, "Multimedia/Barcelona/Casa-batllo.jpg", "Edificio diseñado por Gaudí con azotea, una fachada fantástica que simula las curvas de un dragón y un museo.");

barcelona.setPlaces([sagradaFamilia, parkGuell, casaBattlo]);

////////////////////////////////////

const valencia = new City("Valencia", 39.473, -0.377);

const ciudadArtesYCiencias = new Place("Ciudad de las Artes y las Ciencias", 39.45534081537482, -0.34947876283832774, "Multimedia/Valencia/Ciudad-artes.jfif","Complejo científico de vanguardia, situado en un entorno atractivo, con acuario y pantalla de cine IMAX.");

const lonjaSeda = new Place("La Lonja de la Seda", 39.47448722298779, -0.3781316836784225, "Multimedia/Valencia/Lonja-seda.jpg","Imponente edificio con elaboradas tallas de piedra, testimonio de la riqueza medieval de la ciudad.");

const elCarmen = new Place("El Carmen", 39.47933039581999, -0.3811920429596611, "Multimedia/Valencia/Barrio-el-Carmen.jfif","El concurrido barrio de El Carmen es una zona del casco antiguo donde se encuentran las Torres de Serranos y las de Quart, antiguas puertas medievales que formaban parte de las murallas de la ciudad. Sus callejuelas contienen cafeterías, bares de tapas, boutiques de moda y tiendas de recuerdos. Las terrazas y las pistas de baile de sus numerosos bares nocturnos están siempre a rebosar. Entre los museos se incluyen el Instituto Valenciano de Arte Moderno, donde se exponen obras de artistas internacionales del siglo XX.");

valencia.setPlaces([ciudadArtesYCiencias, lonjaSeda, elCarmen]);

///////////////////////////////////

const malaga = new City("Málaga", 36.721, -4.420);

const castilloGibralfaro = new Place("Castillo de Gibralfaro", 36.72370986946708, -4.410325968425905, "Multimedia/Malaga/Castillo-gibralfaro.jpg","Ruinas de un castillo y fortaleza árabe que datan del siglo XIII en el monte Gibralfaro, con murallas transitables.");

const alcazaba = new Place("Alcazaba de Málaga", 36.721591226183506, -4.415868461813956, "Multimedia/Malaga/Alcazaba.jfif","Fortaleza medieval de estilo árabe con jardines frondosos y fuentes en un monte con vistas al mar.");

const laMalagueta = new Place("La Malagueta", 36.719348038137674, -4.410924316795993, "Multimedia/Malaga/La-malagueta.jfif","La Malagueta es un céntrico distrito costero situado frente a la playa homónima, famosa por los chiringuitos y el concurrido paseo marítimo. Junto al puerto hay una hilera de tiendas de ropa de marcas conocidas, restaurantes mediterráneos y heladerías que se extiende hasta el emblemático faro de La Farola. En el Centre Pompidou se expone arte moderno en un llamativo cubo de cristal.");

malaga.setPlaces([castilloGibralfaro, alcazaba, laMalagueta]);

///////////////////////////////////

const bilbao = new City("Bilbao", 43.263, -2.934);

const guggenheim = new Place("Museo Guggenheim", 43.26885867109034, -2.9338830565580216, "Multimedia/Bilbao/Museo-guggenheim.jfif", "Museo de titanio y cristal luminoso, diseñado por Frank Gehry, que alberga obras de arte del s. XX.");

const cascoViejo = new Place("Casco viejo", 43.25787329198527, -2.9242756096955835, "Multimedia/Bilbao/Casco-viejo.jfif", "El Casco Viejo es el antiguo núcleo medieval, un animado barrio a la orilla de la ría con tiendas modernas y tabernas tradicionales en las Siete Calles. El mercado de La Ribera ofrece puestos de alimentación en una estructura parecida a un barco ubicada frente al río y con bares de pintxos. La Catedral de Santiago es un monumento del siglo XIV con un imponente capitel gótico. Al Teatro Arriaga acude un público elegante para ver óperas y espectáculos de danza.");

const parqueCasilda = new Place("Parque Casilda Iturrizar", 43.26546154498257, -2.9397098844081926, "Multimedia/Bilbao/Parque-Casilda.jfif", "Si Bilbao no estuviera rodeada por un hermoso paisaje verde, podría decirse que este es su pulmón, el Parque de Doña Casilda. El Parque fue inaugurado en 1920, después de que Doña Casilda Iturrizar cediera los terrenos al Ayuntamiento de Bilbao.");

bilbao.setPlaces([guggenheim, cascoViejo, parqueCasilda]);

///////////////////////////////////

const sevilla = new City("Sevilla", 37.388, -5.987);

const torreOro = new Place("Torre del Oro", 37.38261752796557, -5.996264613871414, "Multimedia/Sevilla/Torre-oro.jfif", "Torre defensiva exterior construida alrededor de 1220, cuyo nombre responde a diversas teorías.");

const plazaEspana = new Place("Plaza de España", 37.376674650277145, -5.986932339770024, "Multimedia/Sevilla/Plaza-Espana.jfif", "La Plaza de España es un conjunto arquitectónico enclavado en el parque de María Luisa de la ciudad de Sevilla. Fue proyectada por el arquitecto Aníbal González. Se levantó entre 1914 y 1929 como una de las construcciones principales de la Exposición Iberoamericana de 1929.");

const puenteTriana = new Place("Puente de Triana", 37.38648022425561, -6.002385831832408, "Multimedia/Sevilla/Puente-triana.jfif", "Histórico puente de hierro con 3 arcos, construido en 1852, que conecta el barrio de Triana con el centro.");

sevilla.setPlaces([torreOro, plazaEspana, puenteTriana]);

///////////////////////////////////

const madrid = new City("Madrid", 40.416, -3.703);

const puertaSol = new Place("Puerta del Sol", 40.416991509524266, -3.7034628923497777, "Multimedia/Madrid/Puerta-sol.jpg", "Plaza con una estatua ecuestre del rey Carlos III y kilómetro 0 de las carreteras radiales españolas.");

const plazaMayor = new Place("Plaza Mayor", 40.415599479999855, -3.7072647601969755, "Multimedia/Madrid/Plaza-mayor.jpg", "Majestuosa plaza con cafeterías y restaurantes bajo sus arcos y la estatua de Felipe III en el centro.");

const elRetiro = new Place("Parque de El Retiro", 40.415076990992624, -3.684967219994423, "Multimedia/Madrid/Parque-retiro.jfif", "Amplio parque del siglo XIX con lago para barcas y rosaleda, además de diversas fuentes y estatuas.");

const theBridge = new Place("The Bridge", 40.42154558608357, -3.6926217773477292, "Multimedia/Madrid/The-Bridge.png", "La mejor academia de Madrid, de la que seguro saldrás llorando los viernes y con ganas de no volver a tocar el ordenador en tu vida pero te vas sabiendo más que el día anterior. La promoción de Full-Stack part time es sin duda alguna la mejor de todo el centro y Molpe lo sabe.");

madrid.setPlaces([puertaSol, plazaMayor, elRetiro, theBridge]);

///////////////////////////////////
///////////////////////////////////

const tokio = new City("Tokio", 35.681, 139.770);

const torreTokio = new Place("Torre de Tokio", 35.65856299168953, 139.74542215131402, "Multimedia/Tokio/Torre-Tokio.jfif", "Emblemática torre similar a la torre Eiffel, con varios miradores y otras atracciones.");

const jardinShinjuku = new Place("Jardín nacional Shinjuku Gyoen", 35.685318996724746, 139.71022589006108, "Multimedia/Tokio/Jardin-Shinjuku.jfif", "Antigua finca convertida en un parque de 58 hectáreas, con varios jardines, extensas zonas verdes y un invernadero.");

const sensoji = new Place ("Sensō-ji", 35.7148173467524, 139.796708941118, "Multimedia/Tokio/Jardin-Shinjuku.jfif", "Templo más antiguo de Tokio, terminado en el año 645, en honor a Kannon, diosa de la misericordia.");

tokio.setPlaces([torreTokio, jardinShinjuku, sensoji]);

///////////////////////////////////

const nuevaYork = new City("Nueva York", 40.717, -74.003);

const estatuaLibertad = new Place("Estatua de la Libertad", 40.68970664729855, -74.04428205381744, "Multimedia/Nueva-York/Estatua-libertad.jfif", "Monumento nacional emblemático inaugurado en 1886, con visitas guiadas, un museo y vistas a la ciudad y al puerto.");

const centralPark = new Place("Central Park", 40.782761254191925, -73.96538406230432, "Multimedia/Nueva-York/Central-park.jfif", "Extenso parque urbano con senderos peatonales, zonas deportivas, zoo, tiovivo, alquiler de barcos y estanque.");

const timesSquare = new Place("Times Square", 40.75800055307333, -73.9856041835966, "Multimedia/Nueva-York/Times-square.jfif", "Destino animado en el corazón del distrito teatral, famoso por las luces de neón, espectáculos y comercios.");

nuevaYork.setPlaces([estatuaLibertad, centralPark, timesSquare]);

///////////////////////////////////

const paris = new City("París", 48.855, 2.350);

const torreEiffel = new Place("Torre Eiffel", 48.85835341941597, 2.2946222682868296, "Multimedia/Paris/Torre-eiffel.jfif", "Emblemática torre de hierro forjado diseñada por Gustave Eiffel y construida en 1889, dispone de observatorio.");

const museoLouvre = new Place("Museo del Louvre", 48.86059696243445, 2.3376547264674694, "Multimedia/Paris/Museo-louvre.jfif", "Antiguo palacio con una gran colección de arte, desde esculturas romanas hasta 'La Mona Lisa' de da Vinci.");

const arcoTriunfo = new Place("Arco del Triunfo", 48.87386224492479, 2.295038226347088, "Multimedia/Paris/Arco-triunfo.jfif", "Arco triunfal emblemático conmemorativo de las victorias de Napoleón, cuenta con observatorio.");

paris.setPlaces([torreEiffel, museoLouvre, arcoTriunfo]);

//////////////////////////////////

const elCairo = new City("El Cairo", 30.050, 31.235);

const piramidesGiza = new Place("Pirámides de Giza", 29.97722922374836, 31.132393211827054, "Multimedia/El-Cairo/Piramides-Giza.jfif", "Famoso yacimiento arqueológico en el que se hallan las pirámides de Guiza, la Gran Esfinge y otras ruinas famosas.");

const ciudadelaElCairo = new Place("Ciudadela de El Cairo", 30.02880141438361, 31.25967148227794, "Multimedia/El-Cairo/Ciudadela-Cairo.jfif", "Imponente fortaleza y muro construido por Saladino en el siglo XII como protección contra las cruzadas.");

const babZuweila = new Place("Bab Zuweila", 30.04269469443883, 31.257734081396272, "Multimedia/El-Cairo/Bab-Zuweila.jfif", "Bab Zuwayla, también escrita Bab Zuweila, es una de las tres puertas que perduran en las murallas de la Ciudad Vieja de El Cairo, Egipto. También se conoce como Bawabbat al-Mitwali durante el Imperio otomano. Se considera uno de los hitos más importantes de la ciudad y es la última puerta que queda de las murallas del sur del Cairo fatimí de los siglos XI y XII .​ Su nombre proviene de Bab, que significa 'puerta', y Zuwayla, el nombre de una tribu de guerreros bereberes del desierto occidental, cuyos miembros se encargaron de la vigilancia de la puerta.");

elCairo.setPlaces([piramidesGiza, ciudadelaElCairo, babZuweila]);

//////////////////////////////////

const rioJaneiro = new City("Rio de Janeiro", -22.908, -43.180);

const cristoRedentor = new Place("Cristo Redentor", -22.951955502816528, -43.21046574534313, "Multimedia/Rio-Janeiro/Cristo-redentor.jfif", "Estatua gigante de Jesucristo de 30 m en la cima de una montaña con vistas a la ciudad y acceso en tren.");

const escaleraSelaron = new Place("Escalera de Selarón", -22.915272520741233, -43.179182145794634, "Multimedia/Rio-Janeiro/Escalera-selaron.jfif", "Emblemática escalera, adornada por el artista Jorge Selarón, con mosaicos pintados a mano y llenos de color.");

const panAzucar = new Place("Pan de Azúcar", -22.94929752845227, -43.15457575486447, "Multimedia/Rio-Janeiro/Escalera-selaron.jfif", "El Pan de Azúcar es un peñasco situado en Río de Janeiro, Brasil, en la boca de la bahía de Guanabara sobre una península que sobresale en el océano Atlántico.");

rioJaneiro.setPlaces([cristoRedentor, escaleraSelaron, panAzucar]);

///////////////////////////////////

const atenas = new City("Atenas", 37.984, 23.726);

const acropolis = new Place("Acropolis", 37.971547250580244, 23.725747698324508, "Multimedia/Atenas/Acropolis.jfif", "La Acrópolis de Atenas puede considerarse la más representativa de las acrópolis griegas. La acrópolis era, literalmente, la ciudad alta​ y estaba presente en la mayoría de las ciudades griegas, con una doble función: defensiva y como sede de los principales lugares de culto.");

const agora = new Place("Ágora", 37.97583278242896, 23.723163792711677, "Multimedia/Atenas/Agora.jfif", "Emblemáticas ruinas de una antigua ágora griega, con un museo en el que se exponen objetos.");

const odeonHerodes = new Place("Odeón de Herodes Ático", 37.970879035585035, 23.724703522877547, "Multimedia/Atenas/Odeon.jfif", "Teatro de piedra restaurado, del año 161, donde se organizan conciertos y otros espectáculos.");

atenas.setPlaces([acropolis, agora, odeonHerodes]);