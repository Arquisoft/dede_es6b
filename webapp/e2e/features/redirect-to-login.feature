Feature: Redirección al Log in

Scenario: Un usuario intenta iniciar un proceso de compra sin estar loggeado
  Given un usuario sin loggear
  When añade un elemento al carrito e intenta pagar
  Then es redireccionado a la ventana de log in