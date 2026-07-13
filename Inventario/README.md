# Sistema de inventarios.

# 👥 Integrantes

- David Castellanos C.I. 32.724.748
- Moisés Rivas C.I. 32.730.809
- Carlos Abreu C.I. 33.598.193
- Sebastián Olmos C.I. 33.639.742

# ▶️ Cómo ejecutar el programa

1. Abra una terminal en la carpeta donde se encuentra el proyecto.
2. Ejecute el siguiente comando: **node main.js**

# 📋 Menú principal

Al ejecutar el programa aparecerá un menú con las siguientes opciones:

1. Agregar Producto
2. Ver Productos
3. Actualizar Producto
4. Eliminar Producto
5. Mostrar Estadísticas
6. Salir
   
-Escriba el número de la opción deseada y presione **Enter**.

# 🟢 Opción 1 - Agregar Producto

Permite registrar un nuevo producto.

El sistema solicitará:

- Nombre
- Categoría
- Precio
- Stock

Si algún dato es inválido, el programa volverá a solicitarlo hasta que sea correcto.Al finalizar, el producto se guardará automáticamente.

# 📦 Opción 2 - Ver Productos

Muestra todos los productos registrados en el inventario junto con su información:

- Nombre
- Categoría
- Precio
- Stock

Si no existen productos registrados, el sistema mostrará un mensaje indicando que el inventario está vacío.

# ✏️ Opción 3 - Actualizar Producto

-Permite modificar el precio o stock de un producto existente. En caso de que un producto no exista el sistema lo informará y si existe los cambios se guardarán automáticamente.

# 🗑️ Opción 4 - Eliminar Producto

Permite eliminar un producto del inventario. El usuario solo debe escribir el nombre del producto y si existe, será eliminado permanentemente del archivo **inventario.json**.

# 📊 Opción 5 - Mostrar Estadísticas

Calcula automáticamente el valor total del inventario.

El cálculo se realiza multiplicando: **Precio × Stock** de cada producto y sumando todos los resultados.

# 🚪 Opción 6 - Salir

Cierra el programa de forma segura.
