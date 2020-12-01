-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2020 a las 09:18:37
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `traductor`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `idiomas_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`idiomas_id`, `nombre`) VALUES
(1, 'Español'),
(2, 'Náhuatl'),
(3, 'Mazateco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabras`
--

CREATE TABLE `palabras` (
  `palabras_id` int(11) NOT NULL,
  `nombreimagen` varchar(100) NOT NULL,
  `palabra` varchar(100) NOT NULL,
  `tipos_id` int(11) NOT NULL,
  `idiomas_id` int(11) NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `palabras`
--

INSERT INTO `palabras` (`palabras_id`, `nombreimagen`, `palabra`, `tipos_id`, `idiomas_id`, `creado_por`, `fecha_creacion`) VALUES
(1, 'Gato', 'Gato', 1, 1, 1, '2020-11-20 16:02:19'),
(2, 'Perro', 'Perro', 1, 1, 2, '2020-11-20 16:02:19'),
(3, 'Serpiente', 'Serpiente', 1, 1, 3, '2020-11-20 16:02:19'),
(4, 'Vaca', 'Vaca', 1, 1, 4, '2020-11-20 16:02:19'),
(5, 'Caballo', 'Caballo', 1, 1, 5, '2020-11-20 16:02:19'),
(6, 'Conejo', 'Conejo', 1, 1, 1, '2020-11-20 16:02:19'),
(7, 'Gallina', 'Gallina', 1, 1, 2, '2020-11-20 16:02:19'),
(8, 'Toro', 'Toro', 1, 1, 3, '2020-11-20 16:02:19'),
(9, 'Ratón', 'Ratón', 1, 1, 4, '2020-11-20 16:02:19'),
(10, 'Buenos días', 'Buenos días', 2, 1, 5, '2020-11-20 16:02:19'),
(11, 'Buenas tardes', 'Buenas tardes', 2, 1, 1, '2020-11-20 16:02:19'),
(12, 'Buenas noches', 'Buenas noches', 2, 1, 2, '2020-11-20 16:02:19'),
(13, 'Uno', 'Uno', 3, 1, 3, '2020-11-20 16:02:19'),
(14, 'Dos', 'Dos', 3, 1, 4, '2020-11-20 16:02:19'),
(15, 'Tres', 'Tres', 3, 1, 5, '2020-11-20 16:02:19'),
(16, 'Cuatro', 'Cuatro', 3, 1, 1, '2020-11-20 16:02:19'),
(17, 'Cinco', 'Cinco', 3, 1, 2, '2020-11-20 16:02:19'),
(18, 'Seis', 'Seis', 3, 1, 3, '2020-11-20 16:02:19'),
(19, 'Siete', 'Siete', 3, 1, 4, '2020-11-20 16:02:19'),
(20, 'Ocho', 'Ocho', 3, 1, 5, '2020-11-20 16:02:19'),
(21, 'Nueve', 'Nueve', 3, 1, 1, '2020-11-20 16:02:19'),
(22, 'Diez', 'Diez', 3, 1, 2, '2020-11-20 16:02:19'),
(23, 'Brazo', 'Brazo', 4, 1, 3, '2020-11-20 16:02:19'),
(24, 'Pierna', 'Pierna', 4, 1, 4, '2020-11-20 16:02:19'),
(25, 'Estomago', 'Estomago', 4, 1, 5, '2020-11-20 16:02:19'),
(26, 'Nuca', 'Nuca', 4, 1, 1, '2020-11-20 16:02:19'),
(27, 'Cabeza', 'Cabeza', 4, 1, 2, '2020-11-20 16:02:19'),
(28, 'Pie', 'Pie', 4, 1, 3, '2020-11-20 16:02:19'),
(29, 'Mano', 'Mano', 4, 1, 4, '2020-11-20 16:02:19'),
(30, 'Dedo', 'Dedo', 4, 1, 5, '2020-11-20 16:02:19'),
(31, 'Cuello', 'Cuello', 4, 1, 1, '2020-11-20 16:02:19'),
(32, 'Casa', 'Casa', 5, 1, 2, '2020-11-20 16:02:19'),
(33, 'Carro', 'Carro', 5, 1, 3, '2020-11-20 16:02:19'),
(34, 'Puerta', 'Puerta', 5, 1, 4, '2020-11-20 16:02:19'),
(35, 'Ventana', 'Ventana', 5, 1, 5, '2020-11-20 16:02:19'),
(36, 'Mueble', 'Mueble', 5, 1, 1, '2020-11-20 16:02:19'),
(37, 'Mesa', 'Mesa', 5, 1, 2, '2020-11-20 16:02:19'),
(38, 'Hermano', 'Hermano', 6, 1, 3, '2020-11-20 16:02:19'),
(39, 'Hermana', 'Hermana', 6, 1, 4, '2020-11-20 16:02:19'),
(40, 'Tío', 'Tío', 6, 1, 5, '2020-11-20 16:02:19'),
(41, 'Tía', 'Tía', 6, 1, 1, '2020-11-20 16:02:19'),
(42, 'Sobrino', 'Sobrino', 6, 1, 2, '2020-11-20 16:02:19'),
(43, 'Sobrina', 'Sobrina', 6, 1, 3, '2020-11-20 16:02:19'),
(44, 'Papa', 'Papa', 6, 1, 4, '2020-11-20 16:02:19'),
(45, 'Mama', 'Mama', 6, 1, 5, '2020-11-20 16:02:19'),
(46, 'Suegra ', 'Suegra ', 6, 1, 1, '2020-11-20 16:02:19'),
(47, 'Suegro', 'Suegro', 6, 1, 2, '2020-11-20 16:02:19'),
(48, 'Nieto', 'Nieto', 6, 1, 3, '2020-11-20 16:02:19'),
(49, 'Nieta', 'Nieta', 6, 1, 4, '2020-11-20 16:02:19'),
(50, 'Rojo', 'Rojo', 7, 1, 5, '2020-11-20 16:02:19'),
(51, 'Blanco', 'Blanco', 7, 1, 1, '2020-11-20 16:02:19'),
(52, 'Azul', 'Azul', 7, 1, 2, '2020-11-20 16:02:19'),
(53, 'Verde', 'Verde', 7, 1, 3, '2020-11-20 16:02:19'),
(54, 'Morado', 'Morado', 7, 1, 4, '2020-11-20 16:02:19'),
(55, 'Negro', 'Negro', 7, 1, 5, '2020-11-20 16:02:19'),
(56, 'Café', 'Café', 7, 1, 1, '2020-11-20 16:02:19'),
(57, 'Naranja', 'Naranja', 7, 1, 2, '2020-11-20 16:02:19'),
(58, 'Gris', 'Gris', 7, 1, 3, '2020-11-20 16:02:19'),
(59, 'Rosa', 'Rosa', 7, 1, 4, '2020-11-20 16:02:19'),
(60, 'Amarillo', 'Amarillo', 7, 1, 5, '2020-11-20 16:02:19'),
(61, 'Manzana', 'Manzana', 8, 1, 1, '2020-11-20 16:02:19'),
(62, 'Pera', 'Pera', 8, 1, 2, '2020-11-20 16:02:19'),
(63, 'Sandia', 'Sandia', 8, 1, 3, '2020-11-20 16:02:19'),
(64, 'Mandarina', 'Mandarina', 8, 1, 4, '2020-11-20 16:02:19'),
(65, 'Platano', 'Platano', 8, 1, 5, '2020-11-20 16:02:19'),
(66, 'Uvas', 'Uvas', 8, 1, 1, '2020-11-20 16:02:19'),
(67, 'Melon', 'Melon', 8, 1, 2, '2020-11-20 16:02:19'),
(68, 'Guanabana', 'Guanabana', 8, 1, 3, '2020-11-20 16:02:19'),
(69, 'Naranjas', 'Naranjas', 8, 1, 4, '2020-11-20 16:02:19'),
(70, 'Tomate', 'Tomate', 9, 1, 5, '2020-11-20 16:02:19'),
(71, 'Jitomate', 'Jitomate', 9, 1, 1, '2020-11-20 16:02:19'),
(72, 'Cebolla', 'Cebolla', 9, 1, 2, '2020-11-20 16:02:19'),
(73, 'Ajo', 'Ajo', 9, 1, 3, '2020-11-20 16:02:19'),
(74, 'calabaza', 'calabaza', 9, 1, 4, '2020-11-20 16:02:19'),
(75, 'Lechuga', 'Lechuga', 9, 1, 5, '2020-11-20 16:02:19'),
(76, 'Rábanos', 'Rábanos', 9, 1, 1, '2020-11-20 16:02:19'),
(77, 'Papas', 'Papas', 9, 1, 2, '2020-11-20 16:02:19'),
(78, 'Chile', 'Chile', 9, 1, 3, '2020-11-20 16:02:19'),
(79, 'Ejotes', 'Ejotes', 9, 1, 4, '2020-11-20 16:02:19'),
(80, 'Zanahoria', 'Zanahoria', 9, 1, 5, '2020-11-20 16:02:19'),
(81, 'Coliflor', 'Coliflor', 9, 1, 1, '2020-11-20 16:02:19'),
(82, 'Espinacas', 'Espinacas', 9, 1, 2, '2020-11-20 16:02:19'),
(83, 'Limón ', 'Limón ', 9, 1, 3, '2020-11-20 16:02:19'),
(84, 'Gato', 'Mistoj', 1, 2, 4, '2020-11-20 16:02:19'),
(85, 'Perro', 'Itzcuintli', 1, 2, 5, '2020-11-20 16:02:19'),
(86, 'Serpiente', 'Coatl', 1, 2, 1, '2020-11-20 16:02:19'),
(87, 'Vaca', 'Kuakuaue', 1, 2, 2, '2020-11-20 16:02:19'),
(88, 'Caballo', 'Cahuayotl', 1, 2, 3, '2020-11-20 16:02:19'),
(89, 'Conejo', 'Tochtli', 1, 2, 4, '2020-11-20 16:02:19'),
(90, 'Gallina', 'Totolin', 1, 2, 5, '2020-11-20 16:02:19'),
(91, 'Toro', 'Okichkuakuaue', 1, 2, 1, '2020-11-20 16:02:19'),
(92, 'Ratón', 'Kimichin', 1, 2, 2, '2020-11-20 16:02:19'),
(93, 'Buenos días', 'Mah cualli tonalli', 2, 2, 3, '2020-11-20 16:02:19'),
(94, 'Buenas tardes', 'Mah cualli teotlac', 2, 2, 4, '2020-11-20 16:02:19'),
(95, 'Buenas noches', 'Mah cualli yohualli', 2, 2, 5, '2020-11-20 16:02:19'),
(96, 'Uno', 'Ce', 3, 2, 1, '2020-11-20 16:02:19'),
(97, 'Dos', 'Ome', 3, 2, 2, '2020-11-20 16:02:19'),
(98, 'Tres', 'Yei', 3, 2, 3, '2020-11-20 16:02:19'),
(99, 'Cuatro', 'Nahui', 3, 2, 4, '2020-11-20 16:02:19'),
(100, 'Cinco', 'Macuilli', 3, 2, 5, '2020-11-20 16:02:19'),
(101, 'Seis', 'Chicuace', 3, 2, 1, '2020-11-20 16:02:19'),
(102, 'Siete', 'Chicome', 3, 2, 2, '2020-11-20 16:02:19'),
(103, 'Ocho', 'Chicuei', 3, 2, 3, '2020-11-20 16:02:19'),
(104, 'Nueve', 'Chiconahui', 3, 2, 4, '2020-11-20 16:02:19'),
(105, 'Diez', 'Mahtlactli', 3, 2, 5, '2020-11-20 16:02:19'),
(106, 'Brazo', 'Ahkolli', 4, 2, 1, '2020-11-20 16:02:19'),
(107, 'Pierna', 'Kotztlantli', 4, 2, 2, '2020-11-20 16:02:19'),
(108, 'Estomago', 'Motlalash', 4, 2, 3, '2020-11-20 16:02:19'),
(109, 'Nuca', 'Quechcoxco', 4, 2, 4, '2020-11-20 16:02:19'),
(110, 'Cabeza', 'Motzonteco', 4, 2, 5, '2020-11-20 16:02:19'),
(111, 'Pie', 'Ikxitl', 4, 2, 1, '2020-11-20 16:02:19'),
(112, 'Mano', 'Maitl', 4, 2, 2, '2020-11-20 16:02:19'),
(113, 'Dedo', 'Mahpilli', 4, 2, 3, '2020-11-20 16:02:19'),
(114, 'Cuello', 'Kechtli', 4, 2, 4, '2020-11-20 16:02:19'),
(115, 'Casa', 'Calli', 5, 2, 5, '2020-11-20 16:02:19'),
(116, 'Carro', 'Teposmalakatl', 5, 2, 1, '2020-11-20 16:02:19'),
(117, 'Puerta', 'Tlatzacuilotl', 5, 2, 2, '2020-11-20 16:02:19'),
(118, 'Ventana', 'Techiancalli', 5, 2, 3, '2020-11-20 16:02:19'),
(119, 'Mueble', 'Tlatkitl', 5, 2, 4, '2020-11-20 16:02:19'),
(120, 'Mesa', 'Tlacualoni', 5, 2, 5, '2020-11-20 16:02:19'),
(121, 'Hermano', 'Xocoyotl', 6, 2, 1, '2020-11-20 16:02:19'),
(122, 'Hermana', 'Ueltiutli', 6, 2, 2, '2020-11-20 16:02:19'),
(123, 'Tío', 'Tekoli', 6, 2, 3, '2020-11-20 16:02:19'),
(124, 'Tía', 'Auitl', 6, 2, 4, '2020-11-20 16:02:19'),
(125, 'Sobrino', 'Machali', 6, 2, 5, '2020-11-20 16:02:19'),
(126, 'Sobrina', 'Siuamachtli', 6, 2, 1, '2020-11-20 16:02:19'),
(127, 'Papa', 'Tajtli', 6, 2, 2, '2020-11-20 16:02:19'),
(128, 'Mama', 'Nantsin', 6, 2, 3, '2020-11-20 16:02:19'),
(129, 'Suegra ', 'Monnantli', 6, 2, 4, '2020-11-20 16:02:19'),
(130, 'Suegro', 'Montajtli', 6, 2, 5, '2020-11-20 16:02:19'),
(131, 'Nieto', 'Ixiuitl', 6, 2, 1, '2020-11-20 16:02:19'),
(132, 'Nieta', 'Siuaixiuitl', 6, 2, 2, '2020-11-20 16:02:19'),
(133, 'Rojo', 'Chichiltic', 7, 2, 3, '2020-11-20 16:02:19'),
(134, 'Blanco', 'Iztac', 7, 2, 4, '2020-11-20 16:02:19'),
(135, 'Azul', 'Matlaltic', 7, 2, 5, '2020-11-20 16:02:19'),
(136, 'Verde', 'Xoxoctic', 7, 2, 1, '2020-11-20 16:02:19'),
(137, 'Morado', 'Camohpali', 7, 2, 2, '2020-11-20 16:02:19'),
(138, 'Negro', 'Tliltic', 7, 2, 3, '2020-11-20 16:02:19'),
(139, 'Café', 'Chocolatic', 7, 2, 4, '2020-11-20 16:02:19'),
(140, 'Naranja', 'Ayopali', 7, 2, 5, '2020-11-20 16:02:19'),
(141, 'Gris', 'Nextic', 7, 2, 1, '2020-11-20 16:02:19'),
(142, 'Rosa', 'Achichiltic', 7, 2, 2, '2020-11-20 16:02:19'),
(143, 'Amarillo', 'Coztic', 7, 2, 3, '2020-11-20 16:02:19'),
(144, 'Manzana', 'Mantsanatl', 8, 2, 4, '2020-11-20 16:02:19'),
(145, 'Pera', 'Atsapotl', 8, 2, 5, '2020-11-20 16:02:19'),
(146, 'Sandia', 'Ueleyatl', 8, 2, 1, '2020-11-20 16:02:19'),
(147, 'Mandarina', 'Otonlalaxtli', 8, 2, 2, '2020-11-20 16:02:19'),
(148, 'Platano', 'Tzapotl', 8, 2, 3, '2020-11-20 16:02:19'),
(149, 'Uvas', 'Xokomekatl', 8, 2, 4, '2020-11-20 16:02:19'),
(150, 'Melon', 'Ayotetl', 8, 2, 5, '2020-11-20 16:02:19'),
(151, 'Guanabana', 'Ilamatzapotl', 8, 2, 1, '2020-11-20 16:02:19'),
(152, 'Naranjas', 'Xocotl', 8, 2, 2, '2020-11-20 16:02:19'),
(153, 'Tomate', 'Miltomatl', 9, 2, 3, '2020-11-20 16:02:19'),
(154, 'Jitomate', 'Xitomatl', 9, 2, 4, '2020-11-20 16:02:19'),
(155, 'Cebolla', 'Xonacatl', 9, 2, 5, '2020-11-20 16:02:19'),
(156, 'Ajo', 'Coznacatl', 9, 2, 1, '2020-11-20 16:02:19'),
(157, 'calabaza', 'Ayojtli', 9, 2, 2, '2020-11-20 16:02:19'),
(158, 'Lechuga', 'Axoxoukilitl', 9, 2, 3, '2020-11-20 16:02:19'),
(159, 'Rábanos', 'Chilkamojtli', 9, 2, 4, '2020-11-20 16:02:19'),
(160, 'Papas', 'Kamojtli', 9, 2, 5, '2020-11-20 16:02:19'),
(161, 'Chile', 'Chilli', 9, 2, 1, '2020-11-20 16:02:19'),
(162, 'Ejotes', 'Exotl', 9, 2, 2, '2020-11-20 16:02:19'),
(163, 'Zanahoria', 'Xochikamojtli', 9, 2, 3, '2020-11-20 16:02:19'),
(164, 'Coliflor', 'Kiltektli', 9, 2, 4, '2020-11-20 16:02:19'),
(165, 'Espinacas', 'Kanaukilitl', 9, 2, 5, '2020-11-20 16:02:19'),
(166, 'Limón ', 'Otonxokotl', 9, 2, 1, '2020-11-20 16:02:19'),
(167, 'Gato', 'Mixtun', 1, 3, 2, '2020-11-20 16:02:19'),
(168, 'Perro', 'Naña', 1, 3, 3, '2020-11-20 16:02:19'),
(169, 'Serpiente', 'Yeeee', 1, 3, 4, '2020-11-20 16:02:19'),
(170, 'Vaca', 'Ndija na’', 1, 3, 5, '2020-11-20 16:02:19'),
(171, 'Caballo', 'Naxiinn', 1, 3, 1, '2020-11-20 16:02:19'),
(172, 'Conejo', 'Naxee’', 1, 3, 2, '2020-11-20 16:02:19'),
(173, 'Gallina', 'Chaxi chaa', 1, 3, 3, '2020-11-20 16:02:19'),
(174, 'Toro', 'Naxin', 1, 3, 4, '2020-11-20 16:02:19'),
(175, 'Ratón', 'Nisen', 1, 3, 5, '2020-11-20 16:02:19'),
(176, 'Buenos días', 'Ndali xe', 2, 3, 1, '2020-11-20 16:02:19'),
(177, 'Buenas tardes', 'Tendari', 2, 3, 2, '2020-11-20 16:02:19'),
(178, 'Buenas noches', 'Tendari Jñu', 2, 3, 3, '2020-11-20 16:02:19'),
(179, 'Uno', 'Ngu', 3, 3, 4, '2020-11-20 16:02:19'),
(180, 'Dos', 'Jo', 3, 3, 5, '2020-11-20 16:02:19'),
(181, 'Tres', 'Jia', 3, 3, 1, '2020-11-20 16:02:19'),
(182, 'Cuatro', 'Ñujun', 3, 3, 2, '2020-11-20 16:02:19'),
(183, 'Cinco', 'O’n', 3, 3, 3, '2020-11-20 16:02:19'),
(184, 'Seis', 'Gio’n', 3, 3, 4, '2020-11-20 16:02:19'),
(185, 'Siete', 'Yatu', 3, 3, 5, '2020-11-20 16:02:19'),
(186, 'Ocho', 'J’ii', 3, 3, 1, '2020-11-20 16:02:19'),
(187, 'Nueve', 'Ñaja', 3, 3, 2, '2020-11-20 16:02:19'),
(188, 'Diez', 'Tie', 3, 3, 3, '2020-11-20 16:02:19'),
(189, 'Brazo', 'Tji’a', 4, 3, 4, '2020-11-20 16:02:19'),
(190, 'Pierna', 'Ngasu', 4, 3, 5, '2020-11-20 16:02:19'),
(191, 'Estomago', 'Ngats’ua', 4, 3, 1, '2020-11-20 16:02:19'),
(192, 'Nuca', 'Ngakjain', 4, 3, 2, '2020-11-20 16:02:19'),
(193, 'Cabeza', 'Kjui', 4, 3, 3, '2020-11-20 16:02:19'),
(194, 'Pie', 'Njsukui', 4, 3, 4, '2020-11-20 16:02:19'),
(195, 'Mano', 'Ntsaa', 4, 3, 5, '2020-11-20 16:02:19'),
(196, 'Dedo', 'Pala', 4, 3, 1, '2020-11-20 16:02:19'),
(197, 'Cuello', 'Ngisin', 4, 3, 2, '2020-11-20 16:02:19'),
(198, 'Casa', 'Ngatsan’iya', 5, 3, 3, '2020-11-20 16:02:19'),
(199, 'Carro', 'Null', 5, 3, 4, '2020-11-20 16:02:19'),
(200, 'Puerta', 'Kjindetjua', 5, 3, 5, '2020-11-20 16:02:19'),
(201, 'Ventana', 'Tixatjo', 5, 3, 1, '2020-11-20 16:02:19'),
(202, 'Mueble', 'Null', 5, 3, 2, '2020-11-20 16:02:19'),
(203, 'Mesa', 'Yamexa', 5, 3, 3, '2020-11-20 16:02:19'),
(204, 'Hermano', 'Chansie', 6, 3, 4, '2020-11-20 16:02:19'),
(205, 'Hermana', 'Tich’a', 6, 3, 5, '2020-11-20 16:02:19'),
(206, 'Tío', 'Tsini', 6, 3, 1, '2020-11-20 16:02:19'),
(207, 'Tía', 'Chjunkjuan', 6, 3, 2, '2020-11-20 16:02:19'),
(208, 'Sobrino', 'Null', 6, 3, 3, '2020-11-20 16:02:19'),
(209, 'Sobrina', 'Null', 6, 3, 4, '2020-11-20 16:02:19'),
(210, 'Papa', 'Apa', 6, 3, 5, '2020-11-20 16:02:19'),
(211, 'Mama', 'Ama', 6, 3, 1, '2020-11-20 16:02:19'),
(212, 'Suegra ', 'Nayana', 6, 3, 2, '2020-11-20 16:02:19'),
(213, 'Suegro', 'Null', 6, 3, 3, '2020-11-20 16:02:19'),
(214, 'Nieto', 'Null', 6, 3, 4, '2020-11-20 16:02:19'),
(215, 'Nieta', 'Null', 6, 3, 5, '2020-11-20 16:02:19'),
(216, 'Rojo', 'Ani', 7, 3, 1, '2020-11-20 16:02:19'),
(217, 'Blanco', 'Teba', 7, 3, 2, '2020-11-20 16:02:19'),
(218, 'Azul', 'Suse', 7, 3, 3, '2020-11-20 16:02:19'),
(219, 'Verde', 'Susie', 7, 3, 4, '2020-11-20 16:02:19'),
(220, 'Morado', 'Null', 7, 3, 5, '2020-11-20 16:02:19'),
(221, 'Negro', 'Jma', 7, 3, 1, '2020-11-20 16:02:19'),
(222, 'Café', 'Chan', 7, 3, 2, '2020-11-20 16:02:19'),
(223, 'Naranja', 'Null', 7, 3, 3, '2020-11-20 16:02:19'),
(224, 'Gris', 'Isu', 7, 3, 4, '2020-11-20 16:02:19'),
(225, 'Rosa', 'San', 7, 3, 5, '2020-11-20 16:02:19'),
(226, 'Amarillo', 'Sinie', 7, 3, 1, '2020-11-20 16:02:19'),
(227, 'Manzana', 'Null', 8, 3, 2, '2020-11-20 16:02:19'),
(228, 'Pera', 'Null', 8, 3, 3, '2020-11-20 16:02:19'),
(229, 'Sandia', 'Null', 8, 3, 4, '2020-11-20 16:02:19'),
(230, 'Mandarina', 'Null', 8, 3, 5, '2020-11-20 16:02:19'),
(231, 'Platano', 'Nachja', 8, 3, 1, '2020-11-20 16:02:19'),
(232, 'Uvas', 'Null', 8, 3, 2, '2020-11-20 16:02:19'),
(233, 'Melon', 'Null', 8, 3, 3, '2020-11-20 16:02:19'),
(234, 'Guanabana', 'Null', 8, 3, 4, '2020-11-20 16:02:19'),
(235, 'Naranjas', 'Loxa', 8, 3, 5, '2020-11-20 16:02:19'),
(236, 'Tomate', 'Chjoti’xjáo', 9, 3, 1, '2020-11-20 16:02:19'),
(237, 'Jitomate', 'chjúti', 9, 3, 2, '2020-11-20 16:02:19'),
(238, 'Cebolla', 'Tsju', 9, 3, 3, '2020-11-20 16:02:19'),
(239, 'Ajo', 'Oxo', 9, 3, 4, '2020-11-20 16:02:19'),
(240, 'calabaza', 'Nacho', 9, 3, 5, '2020-11-20 16:02:19'),
(241, 'Lechuga', 'Null', 9, 3, 1, '2020-11-20 16:02:19'),
(242, 'Rábanos', 'Null', 9, 3, 2, '2020-11-20 16:02:19'),
(243, 'Papas', 'Matié', 9, 3, 3, '2020-11-20 16:02:19'),
(244, 'Chile', 'Njñan', 9, 3, 4, '2020-11-20 16:02:19'),
(245, 'Ejotes', 'Nllutin', 9, 3, 5, '2020-11-20 16:02:19'),
(246, 'Zanahoria', 'Null', 9, 3, 1, '2020-11-20 16:02:19'),
(247, 'Coliflor', 'Null', 9, 3, 2, '2020-11-20 16:02:19'),
(248, 'Espinacas', 'Null', 9, 3, 3, '2020-11-20 16:02:19'),
(249, 'Limón', 'Tusan', 9, 3, 4, '2020-11-20 16:02:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos`
--

CREATE TABLE `tipos` (
  `tipos_id` int(11) NOT NULL,
  `nombre_tipos` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipos`
--

INSERT INTO `tipos` (`tipos_id`, `nombre_tipos`) VALUES
(1, 'Animales'),
(2, 'Saludos'),
(3, 'Numeros'),
(4, 'Cuerpo'),
(5, 'Cosas'),
(6, 'Familia'),
(7, 'Colores'),
(8, 'Frutas '),
(9, 'Verduras');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `traduccion`
--

CREATE TABLE `traduccion` (
  `traduccion_id` int(11) NOT NULL,
  `palabra_id` int(11) NOT NULL,
  `traducido_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `traduccion`
--

INSERT INTO `traduccion` (`traduccion_id`, `palabra_id`, `traducido_id`) VALUES
(1,1,84),			
(2,2,85),			
(3,3,86),			
(4,4,87),			
(5,5,88),			
(6,6,89),			
(7,7,90),			
(8,8,91),			
(9,9,92),			
(10,10,93),			
(11,11,94),			
(12,12,95),			
(13,13,96),			
(14,14,97),			
(15,15,98),			
(16,16,99),			
(17,17,100),			
(18,18,101),			
(19,19,102),			
(20,20,103),			
(21,21,104),			
(22,22,105),			
(23,23,106),			
(24,24,107),			
(25,25,108),			
(26,26,109),			
(27,27,110),			
(28,28,111),			
(29,29,112),			
(30,30,113),			
(31,31,114),			
(32,32,115),			
(33,33,116),			
(34,34,117),			
(35,35,118),			
(36,36,119),			
(37,37,120),			
(38,38,121),			
(39,39,122),			
(40,40,123),			
(41,41,124),			
(42,42,125),			
(43,43,126),			
(44,44,127),			
(45,45,128),			
(46,46,129),			
(47,47,130),			
(48,48,131),			
(49,49,132),			
(50,50,133),			
(51,51,134),			
(52,52,135),			
(53,53,136),			
(54,54,137),			
(55,55,138),			
(56,56,139),			
(57,57,140),			
(58,58,141),			
(59,59,142),			
(60,60,143),			
(61,61,144),			
(62,62,145),			
(63,63,146),			
(64,64,147),			
(65,65,148),			
(66,66,149),			
(67,67,150),			
(68,68,151),			
(69,69,152),			
(70,70,153),			
(71,71,154),			
(72,72,155),			
(73,73,156),			
(74,74,157),			
(75,75,158),			
(76,76,159),			
(77,77,160),			
(78,78,161),			
(79,79,162),			
(80,80,163),			
(81,81,164),			
(82,82,165),			
(83,83,166),			
(84,1,167),			
(85,2,168),			
(86,3,169),			
(87,4,170),			
(88,5,171),			
(89,6,172),			
(90,7,173),			
(91,8,174),			
(92,9,175),			
(93,10,176),			
(94,11,177),			
(95,12,178),			
(96,13,179),			
(97,14,180),			
(98,15,181),			
(99,16,182),			
(100,17,183),			
(101,18,184),			
(102,19,185),			
(103,20,186),			
(104,21,187),			
(105,22,188),			
(106,23,189),			
(107,24,190),			
(108,25,191),			
(109,26,192),			
(110,27,193),			
(111,28,194),			
(112,29,195),			
(113,30,196),			
(114,31,197),			
(115,32,198),			
(116,33,199),			
(117,34,200),			
(118,35,201),			
(119,36,202),			
(120,37,203),			
(121,38,204),			
(122,39,205),			
(123,40,206),			
(124,41,207),			
(125,42,208),			
(126,43,209),			
(127,44,210),			
(128,45,211),			
(129,46,212),			
(130,47,213),			
(131,48,214),			
(132,49,215),			
(133,50,216),			
(134,51,217),			
(135,52,218),			
(136,53,219),			
(137,54,220),			
(138,55,221),			
(139,56,222),			
(140,57,223),			
(141,58,224),			
(142,59,225),			
(143,60,226),			
(144,61,227),			
(145,62,228),			
(146,63,229),			
(147,64,230),			
(148,65,231),			
(149,66,232),			
(150,67,233),			
(151,68,234),			
(152,69,235),			
(153,70,236),			
(154,71,237),			
(155,72,238),			
(156,73,239),			
(157,74,240),			
(158,75,241),			
(159,76,242),			
(160,77,243),			
(161,78,244),			
(162,79,245),			
(163,80,246),			
(164,81,247),			
(165,82,248),			
(166,83,249);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `name`, `age`) VALUES
(1, 'Yael', 23),
(2, 'Elizabeth', 15),
(3, 'Luis', 22),
(4, 'Jocelin', 18),
(5, 'Miguel', 25);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`idiomas_id`);

--
-- Indices de la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`palabras_id`),
  ADD KEY `Fk_palabras_tipos` (`tipos_id`),
  ADD KEY `Fk_palabras_idiomas` (`idiomas_id`),
  ADD KEY `Fk_palabras_usuario` (`creado_por`);

--
-- Indices de la tabla `tipos`
--
ALTER TABLE `tipos`
  ADD PRIMARY KEY (`tipos_id`);

--
-- Indices de la tabla `traduccion`
--
ALTER TABLE `traduccion`
  ADD PRIMARY KEY (`traduccion_id`),
  ADD KEY `FK_traduccion_palabras` (`palabra_id`),
  ADD KEY `FK_traduccion_palabra` (`traducido_id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `idiomas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `palabras`
--
ALTER TABLE `palabras`
  MODIFY `palabras_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT de la tabla `tipos`
--
ALTER TABLE `tipos`
  MODIFY `tipos_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `traduccion`
--
ALTER TABLE `traduccion`
  MODIFY `traduccion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=665;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `palabras`
--
ALTER TABLE `palabras`
  ADD CONSTRAINT `Fk_palabras_idiomas` FOREIGN KEY (`idiomas_id`) REFERENCES `idiomas` (`idiomas_id`),
  ADD CONSTRAINT `Fk_palabras_tipos` FOREIGN KEY (`tipos_id`) REFERENCES `tipos` (`tipos_id`),
  ADD CONSTRAINT `Fk_palabras_usuario` FOREIGN KEY (`creado_por`) REFERENCES `usuario` (`usuario_id`);

--
-- Filtros para la tabla `traduccion`
--
ALTER TABLE `traduccion`
  ADD CONSTRAINT `FK_traduccion_palabra` FOREIGN KEY (`traducido_id`) REFERENCES `palabras` (`palabras_id`),
  ADD CONSTRAINT `FK_traduccion_palabras` FOREIGN KEY (`palabra_id`) REFERENCES `palabras` (`palabras_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
