# VaraAppLib
Aquí se guardan todos los componentes de react native que se compartiran entre proyectos
estos al mismo tiempo seran subido a un repositorio de npm
## storybook
En este proyecto ahora puedes ejecutar yarn storybook para iniciar Storybook en el dispositivo, o yarn start para iniciar tu aplicación con Expo. Esto funciona mediante variables de entorno y constantes de Expo.


``` sh
# cualquiera de estos
yarn storybook

# ios
yarn storybook:ios

# android
yarn storybook:android
```

Si agregas nuevas historias en la versión nativa (en el dispositivo), necesitas tener el observador activo o ejecutar el cargador de historias.

Para actualizar las historias una vez:

```sh
yarn storybook-generate

```
