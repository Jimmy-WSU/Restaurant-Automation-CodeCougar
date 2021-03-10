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

 Date: 10/03/2021 23:35:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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

SET FOREIGN_KEY_CHECKS = 1;
