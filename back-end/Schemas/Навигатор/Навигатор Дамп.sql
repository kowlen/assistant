-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: hackaton
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chapter`
--

DROP TABLE IF EXISTS `chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chapter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `guide`
--

DROP TABLE IF EXISTS `guide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `guide` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `chapter_id` int NOT NULL,
  PRIMARY KEY (`chapter_id`,`id`),
  CONSTRAINT `FKre5bbwwitec4sb5fngxr1yj2y` FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `link`
--

DROP TABLE IF EXISTS `link`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `link` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `from_user` bit(1) NOT NULL,
  `send_time` datetime NOT NULL,
  `text` varchar(255) DEFAULT NULL,
  `request_id` int DEFAULT NULL,
  PRIMARY KEY (`id`,`user_id`),
  KEY `FKqck5iqt3lmenjt3kc1tfabiwr` (`request_id`),
  KEY `FKb3y6etti1cfougkdr0qiiemgv` (`user_id`),
  CONSTRAINT `FKb3y6etti1cfougkdr0qiiemgv` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FKqck5iqt3lmenjt3kc1tfabiwr` FOREIGN KEY (`request_id`) REFERENCES `request` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `message_links`
--

DROP TABLE IF EXISTS `message_links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_links` (
  `message_id` int NOT NULL,
  `message_user_id` int NOT NULL,
  `links_id` int NOT NULL,
  UNIQUE KEY `UK_nd4j90au2137ukohnehi5b8t8` (`links_id`),
  KEY `FKrfdkihcqroi5neqxq5obswqw` (`message_id`,`message_user_id`),
  CONSTRAINT `FK10ief6v37q5upa1jw62rthx2a` FOREIGN KEY (`links_id`) REFERENCES `link` (`id`),
  CONSTRAINT `FKrfdkihcqroi5neqxq5obswqw` FOREIGN KEY (`message_id`, `message_user_id`) REFERENCES `message` (`id`, `user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `my_file`
--

DROP TABLE IF EXISTS `my_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `my_file` (
  `uri` varchar(255) NOT NULL,
  `data` binary(1) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `regex`
--

DROP TABLE IF EXISTS `regex`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regex` (
  `id` int NOT NULL AUTO_INCREMENT,
  `expression` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `regexp_solution`
--

DROP TABLE IF EXISTS `regexp_solution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `regexp_solution` (
  `weight` double NOT NULL,
  `solution_id` int NOT NULL,
  `regex_id` int NOT NULL,
  PRIMARY KEY (`regex_id`,`solution_id`),
  KEY `FK8xq8iwt45ch1x28we18s8iitl` (`solution_id`),
  CONSTRAINT `FK8xq8iwt45ch1x28we18s8iitl` FOREIGN KEY (`solution_id`) REFERENCES `solution` (`id`),
  CONSTRAINT `FKlbqxm8qb8nd81ld1ifn389nh4` FOREIGN KEY (`regex_id`) REFERENCES `regex` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `request`
--

DROP TABLE IF EXISTS `request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `request_date_time` datetime NOT NULL,
  `status` int NOT NULL,
  `template_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_b2vdpv8keied2x9w40cucfs72` (`user_id`),
  KEY `FKl9e41yb2s0wf8sa1qw2192qe7` (`template_id`),
  CONSTRAINT `FKl9e41yb2s0wf8sa1qw2192qe7` FOREIGN KEY (`template_id`) REFERENCES `template` (`id`),
  CONSTRAINT `FKqws2fdeknk90txm7qnm9bxd07` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `solution`
--

DROP TABLE IF EXISTS `solution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solution` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `solution_steps`
--

DROP TABLE IF EXISTS `solution_steps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solution_steps` (
  `solution_id` int NOT NULL,
  `steps_id` int NOT NULL,
  UNIQUE KEY `UK_cgnfghwrso4ac84omh662hbko` (`steps_id`),
  KEY `FKsu05py70tbj75yrks1p2xab8i` (`solution_id`),
  CONSTRAINT `FKsu05py70tbj75yrks1p2xab8i` FOREIGN KEY (`solution_id`) REFERENCES `solution` (`id`),
  CONSTRAINT `FKtr3f1m7k0on3yq7ejic9xashv` FOREIGN KEY (`steps_id`) REFERENCES `step` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `solution_templates`
--

DROP TABLE IF EXISTS `solution_templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solution_templates` (
  `solution_id` int NOT NULL,
  `template_id` int NOT NULL,
  PRIMARY KEY (`solution_id`,`template_id`),
  KEY `FKkiqwjt7lk4fhcxeoxrvl7316m` (`template_id`),
  CONSTRAINT `FKkiqwjt7lk4fhcxeoxrvl7316m` FOREIGN KEY (`template_id`) REFERENCES `template` (`id`),
  CONSTRAINT `FKrxqq3dnacvxhbksvaclimnci1` FOREIGN KEY (`solution_id`) REFERENCES `solution` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `step`
--

DROP TABLE IF EXISTS `step`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `step` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(255) DEFAULT NULL,
  `guide_chapter_id` int DEFAULT NULL,
  `guide_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcs7yy9pik0nu5calj7yk2eury` (`guide_chapter_id`,`guide_id`),
  CONSTRAINT `FKcs7yy9pik0nu5calj7yk2eury` FOREIGN KEY (`guide_chapter_id`, `guide_id`) REFERENCES `guide` (`chapter_id`, `id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `template`
--

DROP TABLE IF EXISTS `template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `template` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `uri` varchar(255) DEFAULT NULL,
  `request_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK87ojxppbjw95ylrflk5axi5l1` (`request_id`),
  CONSTRAINT `FK87ojxppbjw95ylrflk5axi5l1` FOREIGN KEY (`request_id`) REFERENCES `request` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `user_guide`
--

DROP TABLE IF EXISTS `user_guide`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_guide` (
  `completed_by_user` bit(1) NOT NULL,
  `user_id` int NOT NULL,
  `guide_chapter_id` int NOT NULL,
  `guide_id` int NOT NULL,
  `current_step_id` int DEFAULT NULL,
  PRIMARY KEY (`guide_chapter_id`,`guide_id`,`user_id`),
  KEY `FKs7biup2o4m83v69i6hp4p273d` (`user_id`),
  KEY `FKe2mlte6x4mp2aldjweba0jhrv` (`current_step_id`),
  CONSTRAINT `FKe2mlte6x4mp2aldjweba0jhrv` FOREIGN KEY (`current_step_id`) REFERENCES `step` (`id`),
  CONSTRAINT `FKpoafg7kqtav96kqlhafvho5nl` FOREIGN KEY (`guide_chapter_id`, `guide_id`) REFERENCES `guide` (`chapter_id`, `id`),
  CONSTRAINT `FKs7biup2o4m83v69i6hp4p273d` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-18 17:31:29
