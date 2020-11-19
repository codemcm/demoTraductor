-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2020 at 07:09 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `traductor`
--

-- --------------------------------------------------------

--
-- Table structure for table `idiomas`
--

CREATE TABLE `idiomas` (
  `idiomas_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `idiomas`
--

INSERT INTO `idiomas` (`idiomas_id`, `nombre`) VALUES
(1, 'Nahuatl'),
(2, 'Español');

-- --------------------------------------------------------

--
-- Table structure for table `palabras`
--

CREATE TABLE `palabras` (
  `palabras_id` int(11) NOT NULL,
  `nombreimagen` varchar(100) NOT NULL,
  `palabra` varchar(100) NOT NULL,
  `idioma_id` int(11) NOT NULL,
  `creado_por` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `palabras`
--

INSERT INTO `palabras` (`palabras_id`, `nombreimagen`, `palabra`, `idioma_id`, `creado_por`, `fecha_creacion`) VALUES
(1, 'catsp.jpg', 'gato', 2, 1, '2020-11-18 16:01:48'),
(2, 'catnat.jgp', 'cat', 1, 1, '2020-11-18 16:02:19');

-- --------------------------------------------------------

--
-- Table structure for table `traduccion`
--

CREATE TABLE `traduccion` (
  `traduccion_id` int(11) NOT NULL,
  `palabra_id` int(11) NOT NULL,
  `traducido_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `traduccion`
--

INSERT INTO `traduccion` (`traduccion_id`, `palabra_id`, `traducido_id`) VALUES
(1, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `usuario_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `contrasenia` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`usuario_id`, `name`, `contrasenia`) VALUES
(1, 'admin', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`idiomas_id`);

--
-- Indexes for table `palabras`
--
ALTER TABLE `palabras`
  ADD PRIMARY KEY (`palabras_id`),
  ADD KEY `idioma_id` (`idioma_id`);

--
-- Indexes for table `traduccion`
--
ALTER TABLE `traduccion`
  ADD PRIMARY KEY (`traduccion_id`),
  ADD KEY `palabra_id` (`palabra_id`),
  ADD KEY `traducido_id` (`traducido_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `idiomas`
--
ALTER TABLE `idiomas`
  MODIFY `idiomas_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `palabras`
--
ALTER TABLE `palabras`
  MODIFY `palabras_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `traduccion`
--
ALTER TABLE `traduccion`
  MODIFY `traduccion_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `palabras`
--
ALTER TABLE `palabras`
  ADD CONSTRAINT `palabras_ibfk_1` FOREIGN KEY (`idioma_id`) REFERENCES `idiomas` (`idiomas_id`);

--
-- Constraints for table `traduccion`
--
ALTER TABLE `traduccion`
  ADD CONSTRAINT `traduccion_ibfk_1` FOREIGN KEY (`palabra_id`) REFERENCES `palabras` (`palabras_id`),
  ADD CONSTRAINT `traduccion_ibfk_2` FOREIGN KEY (`traducido_id`) REFERENCES `palabras` (`palabras_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
