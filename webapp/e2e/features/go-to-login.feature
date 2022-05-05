Feature: Acceder a vista de iniciar sesión
Scenario: Un usuario intenta quiere loggearse
  Given un usuario sin loggear
  When hace click en el botón de login de la barra de navegación
  Then se le muestra la vista de login