/*
 Navicat Premium Data Transfer

 Source Server         : Restaurant Automation
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : restaurant_automation

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 10/03/2021 23:35:19
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for foodmenu
-- ----------------------------
DROP TABLE IF EXISTS `foodmenu`;
CREATE TABLE `foodmenu`  (
  `key` int NOT NULL AUTO_INCREMENT,
  `foodname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `foodprice` decimal(10, 2) NOT NULL,
  `sale` int NULL DEFAULT NULL,
  PRIMARY KEY (`key`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of foodmenu
-- ----------------------------
INSERT INTO `foodmenu` VALUES (1, 'hamburger', 1.00, 1000);
INSERT INTO `foodmenu` VALUES (2, 'steak', 9.99, 100);
INSERT INTO `foodmenu` VALUES (3, 'French fries', 1.00, 500);
INSERT INTO `foodmenu` VALUES (4, 'salad', 5.00, 100);
INSERT INTO `foodmenu` VALUES (5, 'dumplings', 2.99, 40);

SET FOREIGN_KEY_CHECKS = 1;
