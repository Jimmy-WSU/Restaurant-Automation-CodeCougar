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

 Date: 10/03/2021 23:34:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
