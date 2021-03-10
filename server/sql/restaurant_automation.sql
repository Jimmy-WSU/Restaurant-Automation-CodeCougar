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

 Date: 11/03/2021 00:17:12
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

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderID` int NOT NULL AUTO_INCREMENT,
  `tableID` int NULL DEFAULT NULL,
  `waiterName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `chefName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `foodList` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `totalPrice` decimal(10, 2) NULL DEFAULT NULL,
  `orderStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`orderID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (28, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 22:41:39');
INSERT INTO `order` VALUES (29, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 22:44:02');
INSERT INTO `order` VALUES (30, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 22:53:52');
INSERT INTO `order` VALUES (31, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 22:54:02');
INSERT INTO `order` VALUES (32, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 23:02:58');
INSERT INTO `order` VALUES (33, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 23:10:35');
INSERT INTO `order` VALUES (34, 1, 'James', NULL, 'hamburger, steak, French fries, salad, dumplings', 19.98, 'Preparing', '2021-03-10 23:31:42');
INSERT INTO `order` VALUES (35, 1, 'James', NULL, 'hamburger, steak, dumplings, French fries', 14.98, 'Preparing', '2021-03-10 23:45:06');

-- ----------------------------
-- Table structure for table
-- ----------------------------
DROP TABLE IF EXISTS `table`;
CREATE TABLE `table`  (
  `tableID` int NOT NULL,
  `tableCleanStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `tableOccupancyStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`tableID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table
-- ----------------------------
INSERT INTO `table` VALUES (1, 'clean', 'free');
INSERT INTO `table` VALUES (2, 'clean', 'free');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `role` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logintime` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `logoutime` datetime NULL DEFAULT NULL,
  `firstname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `lastname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`username`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('James', '123456', 'Waiter', '2021-03-10 19:26:57', NULL, NULL, NULL);
INSERT INTO `user` VALUES ('Steve', '123456', 'Chef', NULL, NULL, 'Steve', 'Jobs');
INSERT INTO `user` VALUES ('Steve1', '123456', 'Chef', NULL, NULL, 'Steve', 'Jobs');
INSERT INTO `user` VALUES ('Steve111', '123456', 'Chef', NULL, NULL, 'Steve', 'Jobs');
INSERT INTO `user` VALUES ('Steven', '123456', 'Waiter', NULL, NULL, 'Steve', 'Jobs');

SET FOREIGN_KEY_CHECKS = 1;
