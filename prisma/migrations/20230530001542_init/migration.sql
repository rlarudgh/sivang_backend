/*
  Warnings:

  - You are about to alter the column `type` on the `money` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `money` MODIFY `type` BOOLEAN NOT NULL;
