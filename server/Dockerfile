# ใช้ Node.js LTS version
FROM node:20

# กำหนด Working Directory
WORKDIR /app

# คัดลอก package.json และติดตั้ง Dependencies
COPY package*.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# เปิดพอร์ตที่ Express ใช้
EXPOSE 3000

# คำสั่งสำหรับเริ่มเซิร์ฟเวอร์
CMD ["npm", "run", "dev"]
