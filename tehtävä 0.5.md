sequenceDiagram
    participant browser
    participant server

browser->>server: GET https://fullstack-exampleapp.herokuapp.com/new_notes_spa
note right of the browser: {content: "Single Page App ei tee turhia sivunlatauksia", date: "2019-01-03T15:11:22.123Z"}
activate server
server-->>browser: HTTP 201 Created
deactivate server
