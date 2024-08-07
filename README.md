# Mistral Chat Application

## Descripción

Este proyecto es una aplicación de chat desarrollada en React que interactúa con la API de Mistral para mantener conversaciones inteligentes. Utiliza Material-UI para el diseño de la interfaz de usuario y `react-syntax-highlighter` para el formateo y resaltado de código en las respuestas. La aplicación está diseñada para mantener el contexto de la conversación, proporcionando una experiencia de chat coherente y continua.

## Características

- **Interfaz de Usuario Moderna**: Implementada con Material-UI para un diseño limpio y profesional.
- **Soporte para Código**: Utiliza `react-syntax-highlighter` para resaltar bloques de código en las respuestas.
- **Mantenimiento de Contexto**: Guarda el historial de mensajes para mantener el contexto de la conversación.
- **Indicador de Carga**: Muestra un indicador de carga mientras se espera la respuesta de la API.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/mistral-chat.git
   cd mistral-chat
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y añade tu clave API de Mistral:

   ```env
   REACT_APP_MISTRAL_API_KEY=your_mistral_api_key_here
   ```

## Uso

1. Inicia la aplicación:

   ```bash
   npm start
   ```

2. Abre tu navegador y ve a `http://localhost:3000`.

3. Escribe un mensaje en el campo de entrada y presiona "Send". La aplicación enviará el mensaje a la API de Mistral y mostrará la respuesta.

## Dependencias

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Material-UI**: Biblioteca de componentes de React para un diseño consistente y moderno.
- **react-syntax-highlighter**: Biblioteca para el resaltado de sintaxis de código.
- **@mistralai/mistralai**: Cliente para interactuar con la API de Mistral.

## Estructura del Proyecto

```plaintext
mistral-chat/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── Chat.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir cualquier cambio importante antes de enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.