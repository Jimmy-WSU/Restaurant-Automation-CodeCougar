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

 Date: 01/04/2021 16:15:25
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
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of foodmenu
-- ----------------------------
INSERT INTO `foodmenu` VALUES (1, 'Hamburger', 1.00, 1000);
INSERT INTO `foodmenu` VALUES (2, 'Steak', 9.99, 100);
INSERT INTO `foodmenu` VALUES (3, 'French fries', 1.00, 500);
INSERT INTO `foodmenu` VALUES (4, 'Salad', 5.00, 100);
INSERT INTO `foodmenu` VALUES (5, 'Dumplings', 2.99, 100);

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
) ENGINE = InnoDB AUTO_INCREMENT = 67 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES (53, 2, 'Steven', 'TomChef', 'Steak, French fries', 10.99, 'Finished', '2021-03-12 22:59:28');
INSERT INTO `order` VALUES (58, 6, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries, Salad, Dumplings', 19.98, 'Finished', '2021-03-30 14:09:04');
INSERT INTO `order` VALUES (60, 2, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries, Salad', 16.99, 'Finished', '2021-03-30 14:10:02');
INSERT INTO `order` VALUES (61, 3, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries, Salad, Dumplings', 19.98, 'Finished', '2021-03-30 20:30:51');
INSERT INTO `order` VALUES (63, 2, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries, Salad, Dumplings', 19.98, 'Finished', '2021-03-30 20:30:55');
INSERT INTO `order` VALUES (64, 5, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries', 11.99, 'Ready', '2021-03-30 20:30:05');
INSERT INTO `order` VALUES (65, 3, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries', 11.99, 'Finished', '2021-03-31 21:12:37');
INSERT INTO `order` VALUES (66, 1, 'SteveWaiter', 'TomChef', 'Hamburger, Steak, French fries, Salad, Dumplings', 19.98, 'Cooking', '2021-03-31 20:55:29');
INSERT INTO `order` VALUES (68, 6, 'SteveWaiter', 'Unassigned', 'Hamburger, Steak, French fries, Salad, Dumplings, Pizza', 30.97, 'Started', '2021-03-31 22:43:27');

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
INSERT INTO `table` VALUES (1, 'Busy');
INSERT INTO `table` VALUES (2, 'Free');
INSERT INTO `table` VALUES (3, 'Free');
INSERT INTO `table` VALUES (4, 'Busy');
INSERT INTO `table` VALUES (5, 'Busy');
INSERT INTO `table` VALUES (6, 'Busy');
INSERT INTO `table` VALUES (7, 'Busy');

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
INSERT INTO `user` VALUES ('WadeWaiter', '123456', 'Waiter', NULL, NULL, 'Dwyane', 'Wade');

SET FOREIGN_KEY_CHECKS = 1;
