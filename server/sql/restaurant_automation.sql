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

 Date: 12/03/2021 23:22:55
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
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of foodmenu
-- ----------------------------
INSERT INTO `foodmenu` VALUES (1, 'Hamburger', 1.00, 1000);
INSERT INTO `foodmenu` VALUES (2, 'Steak', 9.99, 100);
INSERT INTO `foodmenu` VALUES (3, 'French fries', 1.00, 500);
INSERT INTO `foodmenu` VALUES (4, 'Salad', 5.00, 100);
INSERT INTO `foodmenu` VALUES (5, 'Dumplings', 2.99, 40);

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
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (53, 2, 'Steven', 'TomChef', 'Steak, French fries', 10.99, 'Finished', '2021-03-12 22:59:28');
INSERT INTO `order` VALUES (54, 3, 'SteveWaiter', 'TomChef', 'Steak, French fries', 10.99, 'Ready', '2021-03-12 22:43:49');
INSERT INTO `order` VALUES (55, 5, 'SteveWaiter', 'Unassigned', 'Hamburger, Steak, French fries, Salad, Dumplings', 19.98, 'Started', '2021-03-12 22:43:27');
INSERT INTO `order` VALUES (56, 4, 'SteveWaiter', 'Unassigned', 'Steak, French fries', 10.99, 'Started', '2021-03-12 23:04:49');

-- ----------------------------
-- Table structure for table
-- ----------------------------
DROP TABLE IF EXISTS `table`;
CREATE TABLE `table`  (
  `tableID` int NOT NULL,
  `tableStatus` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`tableID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table
-- ----------------------------
INSERT INTO `table` VALUES (1, 'Free');
INSERT INTO `table` VALUES (2, 'Dirty');
INSERT INTO `table` VALUES (3, 'Busy');
INSERT INTO `table` VALUES (4, 'Busy');
INSERT INTO `table` VALUES (5, 'Busy');
INSERT INTO `table` VALUES (6, 'Free');
INSERT INTO `table` VALUES (7, 'Free');

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
INSERT INTO `user` VALUES ('BobManager', '123456', 'Manager', '2021-03-12 22:31:16', NULL, 'Steve', 'Steve');
INSERT INTO `user` VALUES ('JamesBusboy', '123456', 'Busboy', '2021-03-12 22:31:06', NULL, 'Steve', 'Jobs');
INSERT INTO `user` VALUES ('SteveWaiter', '123456', 'Waiter', '2021-03-12 22:30:59', NULL, 'Steve', 'Jobs');
INSERT INTO `user` VALUES ('TomChef', '123456', 'Chef', '2021-03-12 22:31:12', NULL, 'Steve', 'Jobs');

SET FOREIGN_KEY_CHECKS = 1;
