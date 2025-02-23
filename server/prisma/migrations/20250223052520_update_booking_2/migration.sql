/*
  Warnings:

  - You are about to alter the column `description` on the `landmark` table. The data in that column could be lost. The data in that column will be cast from `VarChar(1500)` to `VarChar(1000)`.
  - Added the required column `totalNights` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` ADD COLUMN `totalNights` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `landmark` MODIFY `description` VARCHAR(1000) NOT NULL;
