-- CreateTable
CREATE TABLE `jogador` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `posicao` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `nacionalidade` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `times` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `anoDeFundacao` INTEGER NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `tecnico` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `timesjogador` (
    `id` VARCHAR(191) NOT NULL,
    `fk_id_jogador` VARCHAR(191) NOT NULL,
    `fk_id_times` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `partidas` (
    `id` VARCHAR(191) NOT NULL,
    `data` VARCHAR(191) NOT NULL,
    `local` VARCHAR(191) NOT NULL,
    `placar` VARCHAR(191) NOT NULL,
    `timeDaCasa` VARCHAR(191) NOT NULL,
    `timeVisitante` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `timesjogador` ADD CONSTRAINT `timesjogador_fk_id_jogador_fkey` FOREIGN KEY (`fk_id_jogador`) REFERENCES `jogador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `timesjogador` ADD CONSTRAINT `timesjogador_fk_id_times_fkey` FOREIGN KEY (`fk_id_times`) REFERENCES `times`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
