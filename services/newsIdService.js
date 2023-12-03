const { PrismaCliIdt } = require('@prisma/cliIdt');
const prisma = new PrismaCliIdt();

async function getAllNewsId() {
  try {
    const newsId = await prisma.newsId.findMany();
    return newsId;
  } catch (error) {
    throw error;
  }
}

async function createNewsId(title, description, linkBerita, linkImage) {
  try {
    const newsId = await prisma.newsId.create({
      data: {
        title,
        description,
        linkBerita,
        linkImage
      },
    });


    return newsId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllNewsId,
  createNewsId,
};