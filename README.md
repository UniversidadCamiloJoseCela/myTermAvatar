# myTermAvatar 
- Abre la terminal de Linux y en el navegador busca = localhost:3000
- cd para ingresar en el directorio del proyecto
- Para ver la lista de comandos cada vez que los necesites dentro de la terminal de linux:
> cat README.md
> cd Download/myTermAvatar
>
> / -> acceder a otro directorio dentro de otro directorio 
- Ahora instalaremos tree -> comando para listar en forma de árbol
> sudo apt install tree
- Una vez instalado, escribimos tree public para ver la estructura en la que nos moveremos
- Para darle nombre a tu avatar , crearemos un fichero nombre.txt y dentro de él, añadiremos el nombre
- Para crear el fichero nombre, usaremos el comando touch
> touch public/avatar/nombre.txt
- Usaremos el comando nano para añadir el nombre que quieras
> nano public/avatar/nombre.txt
- Una vez puesto el nombre, usa control o para guardar y pulsaremos enter para confirmar, finalmente control x para salir -> El nombre aparecerá en tu avatar del navegador
- Otro comando a utilizar para editar el fichero nombre.txt
> echo "Introduce el nombre de tu avatar" > public/avatar/nombre.txt
- Un comando más para la edición del fichero nombre.txt es vi
> vi public/avatar/nombre.txt
- Pulsa i para insertar el nombre, una vez insertado, pulsa scape y escribe
> :wq -> para guardar y salir
- Ahora para insertar una expresión facial a tu avatar, entra en inventario, usando de nuevo el comando cd
> cd inventario/expresion_facial
- Para ver las expresiones faciales
> ls
- Para añadir la expresion que quieras, hay que mover la expresión (fichero png) a la ruta avatar/expresion_facial
> Ejemplo: mv burla.png ../../avatar/expresion_facial
> 
>  ../ -> Ir un directorio hacia atrás
> 
>  ../../ -> Dos directorios hacia atrás
- Para saber nuestro directorio de refencia, usaremos el comando
> pwd -> imprime el directorio de trabajo actual
- Se puede observar el cambio de la expresión facial en el navegador
- Para cambiar de expresión facial, devolveremos la que teníamos al directorio donde están las expresiones faciales
> mv ../../avatar/expresion_facial/burla.png .
>
> . -> hace referencia al directorio actual
- Recordatorio: Para ver los comandos usados con anterioridad y si quieres volver a usarlos, escribe:
> history
- Para borrar un directorio desde el directorio expresion_facial
> rmdir ../complemento
- Otro comando para borrar directorio en la ruta avatar
> rm -r ../../avatar/complemento
- Para crear un directorio
> mkdir "Inserta el nombre del directorio"
- Entra en el directorio
> cd "nombre del directorio creado"
-Para descargar una imagen png de prueba, que puede ser usada como expresión facial posteriormente moviéndola a avatar/expresion_facial
> wget "URL de la imagen a descargar"

