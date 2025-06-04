curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{
  "nombre": "Juan Pérez",
  "nombreUsuario": "3_juanitooooo",
  "generos": ["accion", "drama"]
}'

curl -X GET http://localhost:3000/users