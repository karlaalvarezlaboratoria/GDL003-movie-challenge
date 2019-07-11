# **MOVIE CHALLENGE**

## **MovieKids**

La meta de este proyecto es crear una página Web de películas orientada a las necesidades del usuario.

Lo primero que hicimos fue leer el Readme, donde mencionaba que había que utilizar la API de [OMDB](http://www.omdbapi.com/) (The Open Movie Database). Ahi visualizamos nuestro primer reto porque no encontrabamos como jalar toda la data que queríamos. Hicimos pruebas e investigación un rato y una vez que vislumbramos una forma de jalar y utilizar la data (aún no sabíamos si iba a funcionar) nos sentamos a planear.

Juntas definimos que tipo de producto íbamos a crear y para quien iba a estar dirigido, dimos ideas de como podíamos testearlo y obtener feedback del usuario final. Creamos un prototipo de baja fidelidad pensando en que fuera sencillo y amigable con el usuario y pusimos manos a la obra buscando imágenes y una paleta de colores adecuada para nuestro prototipo de alta fidelidad.

<img src= "https://i.ibb.co/9hk73w8/Whats-App-Image-2019-07-11-at-10-37-35-AM.jpg" />

(falta protitipo de alta fidelidad)


Lo siguente fue probar con el método **fetch** para jalar la data y pintarla en la interfaz de forma ordenada... Continuará...

### Definición del usuario:
Niñ@s de 6 a 12 años y padres de familia con hijos de esa edad, con conocimiento básico de inglés o hablantes nativos. Que tengan la necesidad de encontrar películas apropiadas a ese rango de edad.

### Historias de usuario:

#####  Historia de usuario 1:
El usuario requiere botones por tipo de pelicula llamativos que lo lleven a la selección deseada.

##### Definition of Done:
- La interfaz muestra los 4 botones por tipo de pelicula de forma llamativa y clara.
- Cada botón muestra en la interfaz la información de las peliculas elegidas con su imagen de forma ordenada.
- La interfaz muestra un botón para volver a la página de inicio.


#### Historia de Usuario 2:
Al usuario le gustaría poder ver el trailer de la pelicula seleccionada. (Si el tiempo lo permite):



### Interfaz de usuario

La interfaz de la versión 1.0 permite al usuario:

- Seleccionar el tipo de películas que desea visualizar
- Ver el resultado de su selección con imagen e información
- Volver a la página de inicio.

### Scripts / Archivos

Este proyecto contiene los siguentes archivos.

* `README.md`: Explica cómo acceder y   ejecutar la aplicación a travéz de la liga. Así como una introducción a la aplicación, su funcionalidad y decisiones de diseño.

* `src/index.html`: Este archivo
  contiene el _markup_ (HTML) e incluye el enlace al CSS y JavaScript necesario.

* `src/data.js`: Aqui implementamos la función `fetch` para llamar a la data.

* `src/main.js`: Aquí declaro mis variable y le doy funcionalidad a mi página.

*  `src/style.css`: Damos estilo y hacemos responsivo.

//(para el usuario)//
### Definición del producto

MovieKids es una WebApp hecha especialmente para niños de 6 a 12 años y padres de familia que quieran encontrar información y recomendaciones sobre peliculas aptas para niños.

### ¿Por qué MovieKids?

En una época dónde el entretenimiento es producido en masa podemos perder la perspectiva sobre que es apropiado para que un niño lo vea y disfrute. MovieKids le da la tranquilidad a los padres de familia de que sus hijos pueden elegir películas apropiadas para ellos dentro de una interfaz amigable.

### Instrucciones

Ingresa a la liga:

Una vez dentro de la WebApp te dará la bienvenida y encontraras 4 llamativos botones uno para todas las películas de princesas, para las de súper Héroes, de aventura, y películas especiales para niños menores de 6 años. Cada uno te desplegará las películas en su tipo con su poster y la información en cada tarjetita.

En el botón de la casita podrás regresar a la pagina de inicio.
