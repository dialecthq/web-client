/*
  Warnings:

  - You are about to drop the column `actionAuthorUsername` on the `Notification` table. All the data in the column will be lost.
  - Added the required column `actionAuthorName` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "actionAuthorUsername",
ADD COLUMN     "actionAuthorName" TEXT NOT NULL,
ADD COLUMN     "body" TEXT;
