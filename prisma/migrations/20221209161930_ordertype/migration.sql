-- CreateTable
CREATE TABLE "OrderType" (
    "id" TEXT NOT NULL,
    "orderTypeName" TEXT NOT NULL,
    "orderTypeCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderType_pkey" PRIMARY KEY ("id")
);
