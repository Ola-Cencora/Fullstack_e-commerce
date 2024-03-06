-- CreateTable
CREATE TABLE `Product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` INTEGER NOT NULL,
    `description_title` VARCHAR(191) NOT NULL,
    `description_first_paragraph` TEXT NOT NULL,
    `description_subtitle` VARCHAR(191) NOT NULL,
    `description_second_paragraph` TEXT NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `main_img` VARCHAR(191) NOT NULL,
    `gallery` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NULL,
    `height` INTEGER NULL,
    `width` INTEGER NULL,
    `length` INTEGER NULL,
    `diameter` INTEGER NULL,

    UNIQUE INDEX `Product_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `userName` VARCHAR(191) NOT NULL,
    `userEmail` VARCHAR(191) NOT NULL,
    `userAddress` VARCHAR(191) NOT NULL,
    `comment` VARCHAR(191) NULL,
    `productId` VARCHAR(191) NULL,
    `delivery` VARCHAR(191) NOT NULL,
    `priceProducts` INTEGER NOT NULL,
    `priceTotal` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
