# Instrucciones para la instalación del proyecto cms-mern:
0. Tener instalado Visual Studio Code de preferencia:

<https://code.visualstudio.com/>

1. Tener instalado **nodeJs** versión 10.0.0 o superior: 

<https://nodejs.org/es/>

2. Tener instalado **mongoDB** versión 4.0.0 o superior:

<https://www.mongodb.com/try/download/community>

3. Usar de preferencia el SGBD **Robo 3T** (aunque puede hacer uso de cualquier SGBD para mongoDB de su agrado, como el MongoDB Compass que viene por defecto al instalar mongoDB):

<https://robomongo.org/>

4. Una vez instalado mongoDB y su SGBD, añadir su **variable de entorno** de mongoDB que está en la ruta (ruta ejemplo de mi PC): 

**C:\Program Files\MongoDB\Server\4.4\bin**

5. Iniciar su SGBD (Robo3T, por ejemplo), y abrir sus **opciones de conexión** para configurar la dirección (*localhost*) y el puerto a utilizar

6. Clonar mi repositorio en una carpeta vacía de su preferencia:
<https://github.com/julioantonio12/cms-mern.git>

7. Dirigirse a la carpeta (en terminal de cmd o bash) de **apirest** donde se clonó el repositorio y ejecutar el comando:
    
    *npm install*

Este comando instalará los componentes y/o paquetes necesarios que quedarán en su carpeta *node_modules*

Al terminar, realizar lo mismo con la carpeta **frontend-cms**, dicha carpeta contiene el frontend del proyecto. Después, de igual forma se le instalarán los paquetes dentro de su carpeta *node_modules*

7. Para ejecutar el proyecto es necesario iniciar el **apirest** y el **frontend**; Para iniciar el apirest se dirige a la carpeta (en una terminal ya sea cmd o bash): *apirest* del repositorio y ejecutar el comando:

### *nodemon index.js*

Al hacer esto, la apirest se encarga de realizar la conexión con la BDD, la cual tiene por nombre: **cms-mern2** y a partir de este punto, ya puede ir a consultar la BDD dentro de su SGBD para observar que la conexión fue exitosa. 

La carpeta *frontend-cms* que es el frontend del proyecto, se ejecuta, estando en la raíz de esa carpeta en una terminal con el comando:

### *npm start*

## Con eso se abrirá una ventana en el navegador y ¡listo! Puede comenzar a utilizar la práctica.
---

# Esquema de la BDD y Conexión:
El APIrest hace uso del **puerto: 4000** y el frontend-cms del **puerto: 3000**.

Como mencioné anteriormente, la BDD se conecta con la APIrest de manera **automática** al ejecutar la apirest en el paso **7.**, gracias al comando: *nodemon index.js*

Si desea observar el **schema** de mongoose que generé para la entidad *administrator*, dicho archivo se llama

administradores.modelo.js

El cual está en la ruta:

apirest\modelos\administradores.modelo.js

En él se encuentra el modelo o schema de los administradores, sus propiedades y se puede observar al final el nombre de la tabla, el cual es **administrators**
