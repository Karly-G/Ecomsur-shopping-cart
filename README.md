# Bienvenidos amantes de la tecnología

TechShop es una tienda de comercio electrónico que ofrece una amplia gama de productos tecnológicos y de vanguardia, como lo son audífinos, cámaras fotográficas, asistentes de voz inteligentes, consolas de videojuegos, celulares y más. Apartir de su interfaz amigable desde que entras a nuestra página podrás encontrar todo el stock tecnológico con el que contamos. Tendrás una vista previa de la imágen del producto como su respectivo precio. Lo puedes añadir a tu carrito de inmediato o ver la descripción detallada de cada uno de los productos.

Además con nuestro diseño responsive podrás visitar `TechShop` desde cualquier dispositivo movil o computadora. 😉

¿No suena genial? 😎

## TechShop ¡La tienda ideal de todo geek! 🤓🧑🏻‍💻👩🏻‍💻
 ![Running app](/techShop.png)

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción de la prueba](#descripción-de-la-prueba)
  - [Reglas de entrega](#reglas-de-entrega)

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Instalar API y el CRA:

1. En el directorio `root` correr:
   ` npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:



- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/imagenes/{{nombre-de-la-imagen}}`

## Descripción de la prueba

Se requiere implementar un carrito de compras simple, éste debe contar con las siguientes secciones:

- Una lista de ítems mostrando el catálogo de productos. (Product List Page)
- Página de producto mostrando detalle de producto. (Product Display Page)
- Un carrito de compras que tenga todos los ítems que serán comprados por el usuario. (Cart Page)
- Espacio donde se muestre la sincronización de los ítems añadidos al carrito. (Mini cart) ![mini cart example](/minicart-example.png)

`Favor de no utilizar CSS o Component frameworks como Bootstrap, MUI, Semantic UI, etc. Parte importante de la prueba es ver tu uso de CSS.`

#### Las reglas del negocio son:

- Cada ítem del catálogo debe tener un action button con el texto `Add item to cart`.
- Si no hay stock el `action button` debe deshabilitarse
- Cada ítem en el carro debe tener un `action button` para remover el ítem del carro.
- La sincronización de los ítems se puede mostrar con textos o números.

#### Puntos extras:

- Mostrar el rating y número de reviews en el PLP y PDP
- Usar Redux para mantener el estado global.
- Mantener info de ítems en carrito al recargar la página

## Reglas de entrega

1. Documenta la resolución de tu problema en un un archivo BITACORA.md, además, indica detalladamente cómo instalar las dependencias o archivos necesarios para correr tu aplicación.

2. Es necesario que garantices que tu aplicación pueda correr en la máquina de otra persona.

3. Sube tu respuesta a un repositorio en una cuenta tuya de GitHub, GitLab o BitBucket y da acceso a `kbarcelo@ecomsur.com` y posiblemente a otros correos que te pida RRHH

### Proyecto creado como prueba técnica para Ecomsur by Karla González©. 


