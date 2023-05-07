-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-05-2023 a las 23:06:38
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
  `img_id` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `blog`
--

INSERT INTO `blog` (`id`, `titulo`, `subtitulo`, `cuerpo`, `url_imagen`, `fec_alta`, `usuario_alta`, `img_id`) VALUES
(1, '1Enfermedades más comunes en perros de raza pequeña', 'Los perros de raza pequeña presentan más predisposición a padecer ciertas enfermedades y patologías que otros de raza mediana o grande. Vamos a hablar un poco acerca de algunas de ellas.', '<p>Un alto porcentaje de perros pequeños van a padecer un problema degenerativo de la válvula mitral. Aparece tardíamente en la edad adulta o senior. El veterinario lo detectará a partir de la auscultación de un soplo. Una ecocardiografía confirmará la presencia de la enfermedad. Esto va a provocar que de un modo lento y progresivo el corazón se vaya agrandando. Al inicio no afecta a la calidad de vida del perro, ni produce ningún signo de enfermedad. Con el paso de los años puede desembocar en un fallo cardíaco que ya va a ocasionar problemas, como dificultad respiratoria o tos. El veterinario, a través de diversas pruebas, va a determinar si necesita o no tratamiento. Esto depende de en qué fase se encuentre la enfermedad.</p>\r\n\r\n<p>Algunas razas de perros pequeños, especialmente el yorkshire terrier, nacen con un tejido traqueal anormal. Este hecho hace que, en ocasiones, la tráquea se colapse aplanándose dorsoventralmente. Produce tos y dificultad respiratoria de importancia variable según el grado de colapso. Evitar el sobrepeso, la inhalación de irritantes como el humo, situaciones estresantes para el perro, y el uso de collares que tiren del cuello, son las principales acciones de prevención para evitar la aparición de este problema.</p>', 'https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg', '2023-04-15', 'DANIEL', 'hfeanlo8tcu9xxbrr1tl'),
(2, 'Cómo llevar al gato al veterinario sin estrés', 'Como cuidadores de gatos una de nuestras mayores preocupaciones es la dificultad para conseguir que accedan a entrar al transportín y así poder llevarlos a la consulta veterinaria.', '<p>Utiliza siempre un transportín rígido y desmontable, de forma que puedas acostumbrar a tu gato a su presencia progresivamente y por piezas. Además, este tipo de transportines permiten que en las visitas al veterinario el profesional lo pueda manipular en la parte de abajo del mismo, ayudando a que se sientan más cómodos y seguros.</p>\r\n\r\n<p>Si el transportín está siempre disponible para que tu gato lo utilice a modo de escondite o lugar de descanso se familiarizará con él y lo percibirá como parte de su entorno.</p>\r\n\r\n<p>Puedes premiar a tu gato cada vez que le veas usando su transportín por voluntad propia de forma que se genere una asociación positiva “transportín-recompensa”; esto fomentará que lo perciba como una experiencia inocua y positiva.</p>\r\n\r\n\r\n<p>La feromona facial felina sintética F3 de Feliway imita a la feromona facial F3, sustancia química que de forma natural el gato segrega mediante el frotamiento de su cara contra superficies, objetos, e incluso contra nosotros mismos. Deja de esta manera su olor impregnado el entorno, lo que favorece que se sienta seguro y relajado. El difusor que libera de forma constante esta feromona puede contribuir a reducir el nivel del estrés del gato, por ejemplo ante un cambio o una situación atípica o nueva para él. Para desplazamientos al veterinario u otros viajes se recomienda rociar el transportin con Feliway en spray por dentro y por fuera unos 20 minutos antes de hacerle entrar en él. Así conseguimos potenciar el olor familiar y mitiga la sensación de angustia.</p>', 'https://images.hola.com/imagenes/mascotas/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg', '2023-04-17', 'PEDRO', ''),
(9, 'Perros y fuegos artificiales: cómo calmar a tu mascota', 'Los perros y los fuegos artificiales no son una buena combinación. Hay que tener en cuenta que estos animales poseen un oído mucho más desarrollado que el de los humanos', '<h5>Consejos para calmar a tu perro </h5>\r\n\r\n<p>Para que este año puedas celebrar las fiestas junto a tu pequeño sin que se asuste, te traemos algunos consejos para protegerlo y calmarlo cuando escuche el ruido de los petardos y fuegos artificiales.</p>\r\n\r\n<h6>1. Vendaje anti ansiedad</h6>\r\n<p>Un vendaje anti ansiedad es una solución muy recomendable para perros que se asustan o se ponen nerviosos con los fuegos artificiales. Cuando los perros están asustados, sus patas, sus orejas, su cola y la zona lumbar se vuelven más sensibles. Este vendaje ayuda a ejercer presión en zonas concretas y reduce sus niveles de estrés ayudándole a relajarse.</p>\r\n\r\n<p>Para aplicar esta técnica, necesitas poner una venda alrededor del cuerpo del animal en forma de ocho. No duele, pero es necesario practicarlo varias veces para que el perro se acostumbre.</p>\r\n\r\n<h6>2. Amortiguar el ruido</h6>\r\n<p>Para intentar amortiguar el ruido, lo mejor es que cierres las ventanas y bajes las persianas o corras las cortinas. De esta forma, tu mascota no estará tan inquieta. Además, puedes poner música o la televisión para que no escuche el estruendo de los fuegos artificiales.</p>\r\n\r\n<h6>3. Intenta cansarlo durante el día</h6>\r\n<p>Si se cansa durante el día, se dormirá y será más difícil que se entere del ruido. Llévalo a dar un largo paseo por la mañana y juega con él o deja que corra por el patio o el jardín todo lo que quiera. Pero incluso si no se duerme, estará tan cansado que le resultará más fácil conservar la calma.</p>\r\n\r\n\r\n<h6>4. Déjalo en casa</h6>\r\n<p>Si tienes previsto asistir a algún lugar donde vaya a haber fuegos artificiales, no es recomendable sacarlo a la calle, ya que puede asustarse. Lo más recomendable es que se quede en casa, incluso dentro de una habitación en la que no pueda huir. Además, se sentirá más confortable si le dejas una manta y algunos de sus juguetes en el sitio donde suele dormir. No obstante, si no quieres dejarlo solo, una buena solución son los cuidadores de perros.</p>\r\n\r\n<h6>5. Prueba la aromaterapia</h6>\r\n<p>Los aromas relajantes no solamente sirven para los humanos, sino que nuestros perros también pueden beneficiarse de ello. Por ejemplo, la manzanilla o la lavanda ayudan a calmar los nervios. No obstante, es importante que lo consultes antes con tu veterinario, ya que hay aromas que pueden ser tóxicos para los perros.</p>\r\n\r\n<p>Esperamos que estos consejos te resulten útiles para que tu perro se relaje y no vuelva a pasarlo mal con los fuegos artificiales. Pero si nada funciona, lo mejor es que le pregunte a tu veterinario para que pueda prescribirle a tu mascota algún medicamento para la ansiedad.</p>', '', '2023-04-27', 'DANIEL', 'dxgu8whtmigk532yokmb'),
(10, 'Vacunas para perros', 'Cuáles poner y cuándo hacerlo', '<p>El sistema inmune de los perros no está preparado para atacar a diversos virus y enfermedades, por este motivo es de vital importancia que reciban esta inmunización a través de las vacunas.</p>\r\n\r\n<p>Asimismo, debemos tener en cuenta el término de Zoonosis. ¿Te suena a chino? Nos referimos ni más ni menos que a aquellas enfermedades que pueden transmitirse de animales a humanos, y viceversa. Así que, si tu perro está vacunado, disminuye este fenómeno en tu núcleo de convivencia, proteges a tu perro y a tu familia.</p>\r\n<p>Además, las vacunas ayudarán a que el sistema inmune de tu perro trabaje a pleno rendimiento. Esto se traducirá en un perro sano. Y un perro sano es siempre un ¡perro feliz! </p>\r\n\r\n<h6>¿Cuáles son estos virus o enfermedades y cómo pueden afectar a la salud de tu perro?</h6>\r\n\r\n<ul>\r\n  <li><strong>La rabia.</strong> La enfermedad de la rabia se considera un problema de salud pública, de ahí la obligatoriedad de inocular la vacuna antirrábica a perros. Es una enfermedad contagiosa que se trasmite entre mamíferos a través de la la saliva, principalmente por mordeduras, y afecta al sistema nervioso central produciendo parálisis, cambios de comportamiento, agresividad e incluso la muerte.</li>\r\n  <li><strong>Moquillo.</strong> Se trata de una enfermedad vírica que causa fiebre, tos, inapetencia y decaimiento en el perro. Es esencial administrar esta vacuna a los cachorros en las primeras semanas de vida.</li>\r\n  <li><strong>Parvovirus.</strong> Es una enfermedad infectocontagiosa que afecta al tracto intestinal de los perros y puede ser letal. Se contagia a través de los excrementos del animal, donde el virus puede llegar a vivir hasta dos semanas. La vacuna contra el parvovirus también debe administrarse en las primeras semanas de vida.</li>\r\n  <li><strong>Hepatitis vírica o adenovirus canino.</strong> Aunque el nombre nos lleve a ello, no debemos relacionarla con la hepatitis humana. De hecho, esta enfermedad afecta únicamente a los perros. Aunque la presencia de este virus se ha visto drásticamente reducido gracias a las vacunas, todavía se dan casos de hepatitis canina. Puede causar la muerte en muy pocas horas a perros que no hayan sido vacunados.</li>\r\n  <li><strong>Leptospirosis.</strong> Se trata de una enfermedad bacteriana que causa fiebre, inapetencia, afecciones nerviosas, diarreas y vómitos en el perro.</li>\r\n  <li><strong>Tos de las perreras.</strong> Es una enfermedad infecciosa normalmente de carácter leve que causa tos seca, vómitos e incluso expulsión de espuma blanca por la boca. Se denomina ‘de las perreras’ porque es muy contagiosa y es en las residencias o lugares donde conviven muchos perros juntos donde más se propaga.</li>\r\n  <li><strong>Leishmaniasis.</strong> Se trata de una enfermedad parasitaria causada por la picadura de un insecto que causa inapetencia, atrofia muscular, hemorragias, anemia y alteraciones renales entre otros síntomas.</li>\r\n</ul>', '', '2023-05-07', 'DANIEL', 'wwywqjkzucsyrvbcktka');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipousuario`
--

DROP TABLE IF EXISTS `tipousuario`;
CREATE TABLE IF NOT EXISTS `tipousuario` (
  `cod_tipo_usuario` int NOT NULL,
  `des_tipo_usuario` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `tipousuario`
--

INSERT INTO `tipousuario` (`cod_tipo_usuario`, `des_tipo_usuario`) VALUES
(1, 'Administrador'),
(2, 'Redactor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `cod_tipo_usuario` int NOT NULL,
  `fec_baja` datetime DEFAULT NULL,
  `usuario_baja` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `cod_tipo_usuario`, `fec_baja`, `usuario_baja`) VALUES
(1, 'daniel', '81dc9bdb52d04dc20036dbd8313ed055', 1, NULL, NULL),
(2, 'pedro', '81dc9bdb52d04dc20036dbd8313ed055', 2, NULL, NULL),
(3, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055', 1, NULL, NULL),
(4, 'pedrito', '81dc9bdb52d04dc20036dbd8313ed055', 1, NULL, NULL),
(5, 'juan', '81dc9bdb52d04dc20036dbd8313ed055', 2, NULL, NULL),
(6, 'luis', '81dc9bdb52d04dc20036dbd8313ed055', 1, NULL, NULL),
(7, 'aaaa', '81dc9bdb52d04dc20036dbd8313ed055', 2, NULL, NULL),
(8, 'alberto', '81dc9bdb52d04dc20036dbd8313ed055', 2, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
