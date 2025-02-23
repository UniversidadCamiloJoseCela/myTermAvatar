# myTermAvatar 
- Abre la terminal de Linux y en el navegador busca = localhost:3000
- cd para ingresar en el directorio del proyecto
> cd Download/myTermAvatar
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
> vi public/avatar/nombre.txt , pulsa i para insertar el nombre, una vez insertado, pulsa scape y escribe :wq para guardar y salir
- Ahora para insertar una expresión facial a tu avatar, entra en inventario, usando de nuevo el comando cd
> cd inventario/expresion_facial
- Para ver las expresiones faciales
> ls
- Para añadir la expresion que quieras, hay que mover la expresión (fichero png) a la ruta avatar/expresion_facial
> Ejemplo: mv burla.png ../../avatar/expresion_facial
>  ../ -> Ir un directorio hacia atrás
