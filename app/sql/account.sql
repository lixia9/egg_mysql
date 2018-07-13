/*
 Navicat MySQL Data Transfer

 Source Server         : root
 Source Server Version : 50722
 Source Host           : localhost
 Source Database       : test

 Target Server Version : 50722
 File Encoding         : utf-8

 Date: 07/13/2018 13:17:14 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `account`
-- ----------------------------
DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nickName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `account`
-- ----------------------------
BEGIN;
INSERT INTO `account` VALUES ('1', 'lixiaolong', 'Pass1234', '科比', '380636311@qq.com', '18721721426'), ('2', 'kobe', 'Pass1234', 'jay', '380636311@qq.com', '18721721426'), ('4', 'lxl', 'Pass1234', 'lxlasd', '3923@11.com', '1982121212'), ('5', 'lxl2', 'Pass12341', 'lxlasd', '32923@11.com', '19821212w12'), ('6', 'lixiaolong', 'Pass12341', 'lxlasd', '32923@11.com', '19821212w12');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
