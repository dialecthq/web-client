/*
  Warnings:

  - You are about to drop the `_following` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_following" DROP CONSTRAINT "_following_A_fkey";

-- DropForeignKey
ALTER TABLE "_following" DROP CONSTRAINT "_following_B_fkey";

-- DropTable
DROP TABLE "_following";
