-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-04-2023 a las 09:51:26
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `veterinario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog`
--

DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(150) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  `url_imagen` varchar(250) DEFAULT NULL,
  `fec_alta` date NOT NULL,
  `usuario_alta` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `titulo`, `subtitulo`, `cuerpo`, `url_imagen`, `fec_alta`, `usuario_alta`) VALUES
(1, 'Enfermedades más comunes en perros de raza pequeña', 'Los perros de raza pequeña presentan más predisposición a padecer ciertas enfermedades y patologías que otros de raza mediana o grande. Vamos a hablar un poco acerca de algunas de ellas.', 'Un alto porcentaje de perros pequeños van a padecer un problema degenerativo de la válvula mitral. Aparece tardíamente en la edad adulta o senior. El veterinario lo detectará a partir de la auscultación de un soplo. Una ecocardiografía confirmará la presencia de la enfermedad. Esto va a provocar que de un modo lento y progresivo el corazón se vaya agrandando. Al inicio no afecta a la calidad de vida del perro, ni produce ningún signo de enfermedad. Con el paso de los años puede desembocar en un fallo cardíaco que ya va a ocasionar problemas, como dificultad respiratoria o tos. El veterinario, a través de diversas pruebas, va a determinar si necesita o no tratamiento. Esto depende de en qué fase se encuentre la enfermedad.\r\n\r\nAlgunas razas de perros pequeños, especialmente el yorkshire terrier, nacen con un tejido traqueal anormal. Este hecho hace que, en ocasiones, la tráquea se colapse aplanándose dorsoventralmente. Produce tos y dificultad respiratoria de importancia variable según el grado de colapso. Evitar el sobrepeso, la inhalación de irritantes como el humo, situaciones estresantes para el perro, y el uso de collares que tiren del cuello, son las principales acciones de prevención para evitar la aparición de este problema.', 'https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg', '2023-04-16', 'daniel'),
(2, 'Cómo llevar al gato al veterinario sin estrés', 'Como cuidadores de gatos una de nuestras mayores preocupaciones es la dificultad para conseguir que accedan a entrar al transportín y así poder llevarlos a la consulta veterinaria.', 'Utiliza siempre un transportín rígido y desmontable, de forma que puedas acostumbrar a tu gato a su presencia progresivamente y por piezas. Además, este tipo de transportines permiten que en las visitas al veterinario el profesional lo pueda manipular en la parte de abajo del mismo, ayudando a que se sientan más cómodos y seguros.\r\n\r\nSi el transportín está siempre disponible para que tu gato lo utilice a modo de escondite o lugar de descanso se familiarizará con él y lo percibirá como parte de su entorno.\r\n\r\nPuedes premiar a tu gato cada vez que le veas usando su transportín por voluntad propia de forma que se genere una asociación positiva “transportín-recompensa”; esto fomentará que lo perciba como una experiencia inocua y positiva.\r\n\r\n\r\nLa feromona facial felina sintética F3 de Feliway imita a la feromona facial F3, sustancia química que de forma natural el gato segrega mediante el frotamiento de su cara contra superficies, objetos, e incluso contra nosotros mismos. Deja de esta manera su olor impregnado el entorno, lo que favorece que se sienta seguro y relajado. El difusor que libera de forma constante esta feromona puede contribuir a reducir el nivel del estrés del gato, por ejemplo ante un cambio o una situación atípica o nueva para él. Para desplazamientos al veterinario u otros viajes se recomienda rociar el transportin con Feliway en spray por dentro y por fuera unos 20 minutos antes de hacerle entrar en él. Así conseguimos potenciar el olor familiar y mitiga la sensación de angustia.', 'https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg', '2023-04-16', 'pedro'),
(9, '1', '1', '1', 'https://google.es', '2023-04-27', 'daniel'),
(10, '22', '23', '23', 'https://google.es/', '2023-05-01', 'daniel');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'daniel', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'pedro', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
