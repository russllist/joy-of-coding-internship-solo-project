-- CreateTable
CREATE TABLE `Replay` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url` TEXT NOT NULL,
    `thumbnail` TEXT NOT NULL,
    `title` TEXT NOT NULL,
    `host` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `duration` TIME NOT NULL,
    `description` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
