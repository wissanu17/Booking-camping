/*
  Warnings:

  - Added the required column `public_id` to the `Landmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secure_url` to the `Landmark` table without a default value. This is not possible if the table is not empty.
  - Made the column `profileId` on table `landmark` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `landmark` DROP FOREIGN KEY `Landmark_profileId_fkey`;

-- DropIndex
DROP INDEX `Landmark_profileId_fkey` ON `landmark`;

-- AlterTable
ALTER TABLE `landmark` ADD COLUMN `public_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `secure_url` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(1500) NOT NULL,
    MODIFY `profileId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Booking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `checkIn` DATETIME(3) NOT NULL,
    `checkOut` DATETIME(3) NOT NULL,
    `total` INTEGER NOT NULL,
    `paymentStatus` BOOLEAN NOT NULL DEFAULT false,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateAt` DATETIME(3) NOT NULL,
    `profileId` VARCHAR(191) NOT NULL,
    `landmarkId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Landmark` ADD CONSTRAINT `Landmark_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`clerkId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_landmarkId_fkey` FOREIGN KEY (`landmarkId`) REFERENCES `Landmark`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
