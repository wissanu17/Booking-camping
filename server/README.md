In the .env file need this code


CLERK_PUBLISHABLE_KEY=Your
CLERK_SECRET_KEY= Your
CLOUNDINAY_CLOUD_NAME = Your
CLOUNDINAY_API_KEY = Your
CLOUNDINAY_API_SECRET= Your
DATABASE_URL="Your"


To use docker

คำสั่งสำหรับใช้งาน

สร้างและรันคอนเทนเนอร์ทั้งหมด
docker-compose up -d --build

ตรวจสอบสถานะคอนเทนเนอร์
docker-compose ps

ดู Log ของแอป
docker-compose logs app

หยุดและลบคอนเทนเนอร์ทั้งหมด
docker-compose down

Node.js + MySQL + Clerk API ทำงานพร้อมกันใน Docker