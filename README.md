# **MOVIE CHALLENGE**

## **MovieKids**

La meta de este proyecto es crear una página Web de películas orientada a las necesidades del usuario.

Lo primero que hicimos fue leer el Readme, donde mencionaba que había que utilizar la API de [OMDB](http://www.omdbapi.com/) (The Open Movie Database). Ahi visualizamos nuestro primer reto porque no encontrabamos como jalar toda la data que queríamos. Hicimos pruebas e investigación un rato y una vez que vislumbramos una forma de jalar y utilizar la data (aún no sabíamos si iba a funcionar) nos sentamos a planear.

Juntas definimos que tipo de producto íbamos a crear y para quien iba a estar dirigido, dimos ideas de como podíamos testearlo y obtener feedback del usuario final. Creamos un prototipo de baja fidelidad pensando en que fuera sencillo y amigable con el usuario y pusimos manos a la obra buscando imágenes y una paleta de colores adecuada para nuestro prototipo de alta fidelidad.

<img src= "https://i.ibb.co/9hk73w8/Whats-App-Image-2019-07-11-at-10-37-35-AM.jpg" />

(falta protitipo de alta fidelidad)

Creamos un prototipo de alta fidelidad para ver nuestro diseño y guiarnos en el.

<img src= "https://i.ibb.co/bPYXhYB/inicio-pel-culas.jpg" />
<img src= "https://i.ibb.co/NZyV7q4/66802740-688147551653833-153155754931519488-n.jpg" />
<img src= "https://i.ibb.co/NZyV7q4/66802740-688147551653833-153155754931519488-n.jpg" />

Lo siguente fue probar con el método **fetch** para jalar la data y pintarla en la interfaz de forma ordenada.

En este punto nos llegó feedback de algunos usuarios meta y de asesores de Laboratoria, lo que nos hizo replantearnos a nuestros usuarios iniciales y "estrechar" un poco el perfil. Pero también provocó que nuestro producto estuviera más enfocado a resolver una necesidad real.

### Definición del usuario:
Padres de familia con niños entre 1 y 12 años de edad, que busquen pelìculas adecuadas para ellos, y que valoren la opinión de otros padres para su selección

### Historias de usuario:

#####  Historia de usuario 1:
El usuario requiere botones por tipo de película que sean claros con respecto a lo que ofrecen y que lo lleven a la selección deseada.

##### Definition of Done:
- La interfaz muestra los 4 botones por tipo de película de forma llamativa y clara.
- Cada botón muestra en la interfaz la información de las películas elegidas con su imagen de forma ordenada.
- La interfaz se baja de forma automática a la sección donde están las películas.
- La interfaz muestra un botón para volver al inicio (o arriba)


#### Historia de Usuario 2:
El usuario requiere una caja de comentario donde pueda dejar su opinión parental sobre la película vista, para que los demás padres puedan leerla y utilizarla. (Si el tiempo lo permite):



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

MovieKids es una WebApp hecha padres de familia con niños de 2 a 12 años que quieran encontrar información y recomendaciones sobre películas aptas para sus hijos. Tiene filtro por tipo de película y la opción y oportunidad de que puedan escribir opiniones personalizadas sobre la película para que otros padres puedan valorarla.

### ¿Por qué MovieKids?

En una época dónde el entretenimiento es producido en masa podemos perder la perspectiva sobre que es apropiado para que un niño lo vea y disfrute. MovieKids le da la tranquilidad a los padres de que están eligiendo una película apropiada para sus niños y recomendada por otros padres, además de darles la oportunidad de recomendar la película desde su muy personal punto de vista. Todo esto dentro de una interfaz amigable.

### Instrucciones

Ingresa a la liga:

Una vez dentro de la WebApp te dará la bienvenida y encontraras 4 llamativos botones uno para todas las películas de princesas, para las de súper Héroes, de aventura, y películas especiales para niños menores de 6 años. Cada uno te desplegará las películas en su tipo con su poster y la información en cada tarjetita.

En el botón de la casita podrás regresar a la pagina de inicio.
