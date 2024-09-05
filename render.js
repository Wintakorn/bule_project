const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, 'output'); // ตัวแปรนี้ใช้ชื่อ outputDir

// สร้างไดเรกทอรี output ถ้ายังไม่มี
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

const renderEJS = async (inputFilePath, outputFilePath, data = {}) => {
  try {
    const template = await fs.promises.readFile(inputFilePath, 'utf-8');
    const htmlContent = ejs.render(template, data, {
      filename: inputFilePath,
    });
    await fs.promises.writeFile(outputFilePath, htmlContent);
    console.log(`HTML file generated at ${outputFilePath}`);
  } catch (err) {
    console.error(err);
  }
};

// ตัวอย่างการใช้งาน
renderEJS(
  path.join(__dirname, 'views/index.ejs'), // ไฟล์ EJS ที่ต้องการประมวลผล
  path.join(outputDir, 'index.html') // ไฟล์ HTML ที่จะสร้างขึ้นในโฟลเดอร์ output
);
