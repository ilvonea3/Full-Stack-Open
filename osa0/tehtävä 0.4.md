sequenceDiagram
    participant browser
    participant server

browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note
activate server
server-->>browser: HTTP 302 Found
deactivate server

Note right of browser: The server asks the browser to automatically make a new HTTP GET request to the address that is the attribute of header's location

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server-->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: the css file
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server-->>browser: the JavaScript file
deactivate server

Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: the JSON data
deactivate server    

Note right of browser: The browser executes the callback function that renders the notes 
