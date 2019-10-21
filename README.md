This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





# COURSE NOTES

# Curso Practico de React

## 1. ¿Qué es React JS?
React es una librería o biblioteca de JavaScript, es declarativa y open source. desarrollada por Facebook (en 2013, pensada para solucionar su timeline) que nos ayuda a construir interfaces de usuario muy amigables e interactivas para todo tipo de aplicaciones: web, móviles o de escritorio (win mac o linux). Esa es su única finalidad. Y hoy en día es 
Es muy usado por Whatsapp web, platzi, uber, netflix, airnbn.
Está  basado en componentes, utiliza el patrón Modelo Vista Controlador -MVC por lo cual podemos separar cada uno de los elementos de nuestro proyecto y poderlos unir para crearlos de manera sorprendente. Cada pequeña parte de nuestra página web la conoceremos como “Componente”. Cada componente se encargará de una función en específico, además, podremos reutilizar nuestros componentes siempre que lo necesitemos.
Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.

## 2v. DOM, Virtual DOM y React DOM
El DOM es el código HTML que se transforma en páginas web.
Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.
El Virtual DOM es una herramienta que usan tecnologías como React y Vue para mejorar el rendimiento (performance) y velocidad de nuestras aplicaciones.
Es una copia exacta del DOM, pero mucho más ligera, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.
Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que debemos estar sincronizando constantemente las copias con el DOM. Pero no te preocupes, React DOM lo hace por nosotros.

Es una herramienta que implementa react para darle performans y velocidad a nuestros desarrollos, esto significa que tenemos una copia exacta del DOM.

### 3v. Create React App y Tipos de Componentes
#### Creación y Tipos de Componentes
Los nombres de nuestros ‘componentes’ deben empezar con una letra mayúscula, al igual que cada nueva palabra del componente. Esto lo conocemos como Pascal Case o Upper Camel Case.
Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component. Nos permiten manejar estado y ciclo de vida (más adelante los estudiaremos a profundidad).

## Que es NPX?
npx es una herramienta destinada a ayudar a completar la experiencia de usar paquetes del registro npm: de la misma manera que npm hace que sea muy fácil instalar y administrar dependencias alojadas en el registro, npx facilita el uso de herramientas CLI y otros ejecutables alojados en el registro Simplifica enormemente una serie de cosas que, hasta ahora, requerían un poco de ceremonia para hacer con npm simple

## Principales componentes de React
Stateful: es conocido en React como la estructura de clases que nos va permirir tener ciclo de vida, eventos y estado. Es el componente más robusto que tiene React.
Stateless: No depende de tener un estado ni un ciclo de vida y solo va presentar la lógica. Son muy utilizados porque trabajan con la parte funcional (funciones) y nos permite enfocarnos en una particularidad, es decir, solo lo que necesitamos.
Presentacional: No tiene estado. Son aquellos que no poseen lógica solo contienen HTML, ni tienen propiedades.

## JSX: JavaScript + HTML
React usa JSX: una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.


## 5v. Props: Comunicación entre Componentes
Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación.

## 6t. ¿Qué son los métodos del ciclo vida?
Todos los componentes en React pasan por una serie de fases que generalmente se denominan “Ciclo de Vida del componente” es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.
Los componentes en react pasan por un Montaje, Actualización, Desmontaje y Manejo de errores.
### Montaje:
En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.
### Actualización:
En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.
### Desmontaje:
En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.
Manejo de Errores:
Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.
Algo que debemos tener en cuenta es que un componente NO debe pasar por toda las fases, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.
Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.
### Montado:
`Constructor()`
Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.
`getDerivedStateFromProps()`
Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.
`render()`
Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.
`ComponentDidMount()`
Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.
### Actualización:
`getDerivedStateFromProps()`
Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.
`shouldComponentUpdate()`
Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.
### `render()`
Se llama el método render que representa los cambios en el DOM.
`componentDidUpdate()`
Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.
### Desmontado
`componentWillUnmount()`
Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.
### Manejo de Errores:
`getDerivedStateFromError()`
Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.
`componentDidCatch()`
Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.
Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.


## 7v. State – Events
"React nos permite responder a las interacciones de los usuarios con propiedades como `onClick, onChange, onKeyPress, onFocus, onScroll`, entre otras.
Estas propiedades reciben el nombre de la función que ejecuta el código que responde a las interacciones de los usuarios. Seguramente, esta función usará la función this.setState para actualizar el estado de nuestro componente.
Recuerda que los nombres de estos eventos deben seguir la nomenclatura camelCase: primera palabra en minúsculas, iniciales de las siguientes palabras en mayúsculas y el resto también en minúsculas."


## Que es el estado en React?
En un objeto al cual le podemos definir variables que pueden ser de tipo string, booleanos o funciones y poder acceder al componente al momento en el que se inicializa y esto nos permite tener elementos que vamos a usar.

### Manejando eventos
Manejar eventos en elementos de React es muy similar a manejar eventos con elementos del DOM. Hay algunas diferencias de sintaxis:

Los eventos de React se nombran usando camelCase, en vez de minúsculas.
Con JSX pasas una función como el manejador del evento, en vez de un string.
Por ejemplo, el HTML:

<button onclick="activateLasers()">
  Activate Lasers
</button>
En React es algo diferente:

<button onClick={activateLasers}>
  Activate Lasers
</button>
Otra diferencia es que en React no puedes retornar false para prevenir el comportamiento por defecto. Debes, explícitamente, llamar preventDefault. Por ejemplo, en un HTML plano, para prevenir el comportamiento por defecto de un enlace de abrir una nueva página, puedes escribir:

<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
En cambio en React, esto podría ser:

functionActionLink() {
  functionhandleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <ahref="#"onClick={handleClick}>
      Click me
    </a>
  );
}
Aquí, e es un evento sintético. React define estos eventos sintéticos acorde a las especificaciones W3C, entonces no debes preocuparte por la compatibilidad a tráves de los navegadores. Mira la guía de referencia SyntheticEvent para aprender más.

Cuando estás utilizando React, generalmente, no debes llamar addEventListener para agregar escuchadores de eventos a un elemento del DOM después de que este es creado. Por el contrario, solo debes proveer un manejador de eventos cuando el elemento es inicialmente renderizado.

Cuando defines un componente usando una clase de ES6, un patrón muy común es que los manejadores de eventos sean un método de la clase. Por ejemplo, este componente Toggle renderiza un botón que permite al usuario cambiar el estado entre “ENCENDIDO” y “APAGADO”:

classToggleextendsReact.Component{
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <buttononClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
Pruébalo en CodePen

Tienes que tener mucho cuidado en cuanto al significado de this en los callbacks de JSX. En JavaScript, los métodos de clase no están ligados por defecto. Si olvidas ligar this.handleClick y lo pasas a onClick, this será undefined cuando se llame la función.

Esto no es un comportamiento especifico de React; esto hace parte de como operan las funciones JavaScript. Generalmente, si refieres un método sin usar () después de este, tal como onClick={this.handleClick}, deberías ligar ese método.

Si te molesta llamar bind, existen dos maneras de evitarlo. Si usas la sintaxis experimental campos públicos de clases, puedes usar los campos de clases para ligar los callbacks correctamente:

classLoggingButtonextendsReact.Component{
  // Esta sintaxis nos asegura que `this` está ligado dentro de handleClick
  // Peligro: esto es una sintaxis *experimental*
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <buttononClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
Esta sintaxis está habilitada por defecto en Create React App.

Si no estas usando la sintaxis de campos públicos de clases, puedes usar una función flecha en el callback:

classLoggingButtonextendsReact.Component{
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // Esta sintaxis nos asegura que `this` esta ligado dentro de handleClick
    return (
      <buttononClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
}
El problema con esta sintaxis es que un callback diferente es creado cada vez que LogginButton es renderizado. En la mayoría de los casos, esto está bien. Sin embargo, si este callback se pasa como una propiedad a componentes más bajos, estos componentes podrían renderizarse nuevamente. Generalmente, recomendamos ligar en el constructor o usar la sintaxis de campos de clases, para evitar esta clase de problemas de rendimiento.

Pasando argumentos a escuchadores de eventos
Dentro de un bucle es muy común querer pasar un parámetro extra a un manejador de eventos. Por ejemplo, si id es el ID de una fila, cualquiera de los códigos a continuación podría funcionar:

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
Las dos líneas anteriores son equivalentes, y utilizan funciones flecha y Function.prototype.bind respectivamente.

En ambos casos, el argumento e que representa el evento de React va a ser pasado como un segundo argumento después del ID. Con una función flecha, tenemos que pasarlo explícitamente, pero con bind cualquier argumento adicional es pasado automáticamente.


## 8v.
Paso a paso
En terminal crear capeta: `mkdir` NombreDeCarpeta.
Inicializar Repositorio (local) en Git : `git init`.
Inicializar proyecto `npm init -y`. La `-y` significa que se preconfigurará este proyecto y lo va crear automaticamente.
Abrimos editor de codigo con `code .`.

Armar estructura del proyecto:
Establecer donde va vivir el codigo: crear carpeta `src` y dentro de ella `index.js`
Contenedor de todos los archivos a publicar cuando se mande a producción: `public` y dentro de ella `index.html` que será utilizado para publicarse cuando llegue el momento.
Contenedor de principales archivos del proyecto: `components` 
Todo esto es lo básico para desarrollar un proyecto.

Luego, corremos el comando: `npm react react-dom` que instalará react y react DOM y con ello aparecen archivos como `package-lock.json`el cual permite manejar el vesionado de todos los paquetes que estamos instalando junto a las dependencias (poco a poco se irá actualizando con la informacion necesaria para vivir) y la carpeta `node_modules` donde estan todos los paquetes y dependencias de los elementos que se iran instalando. Tenemos `package.json` que contendra la historia de los elementos instalados, configuaraciones, scripts y como reconoces nuestro documento.

... Contunúa en repo PLatziVideo

