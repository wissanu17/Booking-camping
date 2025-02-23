# ใช้ Node.js LTS version
FROM node:20

# กำหนด Working Directory
WORKDIR /app

# คัดลอก package.json และติดตั้ง Dependencies
COPY package*.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# Build แอป (สำหรับ React หรือ Next.js)
RUN npm run build

# เปิดพอร์ต (3000 สำหรับ React, 3001 สำหรับ Next.js)
EXPOSE 3000

# เริ่มเซิร์ฟเวอร์
CMD ["npm", "start"]
