/*
  Warnings:

  - You are about to drop the column `priceProducts` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `priceTotal` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `userAddress` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `userEmail` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `userName` on the `order` table. All the data in the column will be lost.
  - Added the required column `price_products` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price_total` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `priceProducts`,
    DROP COLUMN `priceTotal`,
    DROP COLUMN `userAddress`,
    DROP COLUMN `userEmail`,
    DROP COLUMN `userName`,
    ADD COLUMN `price_products` INTEGER NOT NULL,
    ADD COLUMN `price_total` INTEGER NOT NULL,
    ADD COLUMN `user_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;
