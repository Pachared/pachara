import PORTFOLIO from "/image/projectImage/PORTFOLIO.png";
import ECOMMERCE from "/image/projectImage/E-Commerce Platform.png";
import PIVOTZONE from "/image/projectImage/PivotZone.png";
import StoreManagementSystemSCI_NEXT from "/image/projectImage/Store Management System SCI_NEXT.png";
import Novacloud from "/image/projectImage/Novacloud.png";
import RedisDashboard from "/image/projectImage/Redis.png"
import RentFlow from "/image/projectImage/RentFlow.png"
import DocumentSemina from "/image/projectImage/document-semina.png"
import SCISTOCKAPI from "/image/projectImage/sci-stock-api.png"

export const PROJECTS = [
  {
    id: 1,
    name: "เว็บไซต์ Portfolio ส่วนตัว",
    category: "Web",
    description:
      "เว็บไซต์พอร์ตโฟลิโอส่วนตัวที่ออกแบบให้ดูทันสมัยและใช้งานได้กับทุกอุปกรณ์ แสดงผลงาน ความสามารถ และประสบการณ์ของฉัน พร้อม UI ที่เรียบหรูและแอนิเมชันที่ลื่นไหล",
    image: PORTFOLIO,
    githubLink: "https://github.com/Pachared/pachara",
    stackIcons: [
      { src: "/image/skills/react_dark.svg", alt: "React", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/motion_dark.svg", alt: "motion", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/vercel_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 2,
    name: "ระบบแพลตฟอร์ม E-Commerce",
    category: "Fullstack",
    description:
      "เว็บไซต์ร้านขายคีย์บอร์ดเกมมิ่งที่ออกแบบมาเพื่อให้ผู้ใช้งานสามารถเลือกซื้อสินค้าได้อย่างสะดวก พร้อมระบบค้นหา เปรียบเทียบรุ่น และดูรายละเอียดสินค้าแบบครบถ้วน รองรับการแสดงผลทั้งบนมือถือและเดสก์ท็อป",
    image: ECOMMERCE,
    githubLink: "https://github.com/Pachared/melgeeks_shop",
    stackIcons: [
      { src: "/image/skills/php_dark.svg", alt: "php", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/html5.svg", alt: "html5", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/css.svg", alt: "css", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/javascript.svg", alt: "javascript", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 3,
    name: "แอปพลิเคชันเดสก์ท็อป PivotZone",
    category: "Desktop",
    description:
      "เครื่องมือวิเคราะห์หุ้นที่ใช้งานง่าย เหมาะสำหรับนักลงทุนทุกระดับ พัฒนาโดย Python และ Tkinter พร้อมอินเทอร์เฟซเรียบง่าย ทำงานรวดเร็ว และดึงข้อมูลแบบเรียลไทม์จาก Yahoo Finance เพื่อช่วยให้คุณตัดสินใจลงทุนได้อย่างแม่นยำยิ่งขึ้น มาพร้อมกราฟสวยคมชัดและฟีเจอร์ครบครันในแอปเดียว",
    image: PIVOTZONE,
    githubLink: "https://github.com/Pachared/PivotZone",
    stackIcons: [
      { src: "/image/skills/python.svg", alt: "python", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 4,
    name: "ระบบจัดการร้านค้า SCI_NEXT \n (โครงการในมหาวิทยาลัย)",
    category: "Fullstack",
    description:
      "ระบบบริหารจัดการร้านค้าแบบครบวงจร พัฒนาขึ้นในโครงการภายในมหาวิทยาลัย โดยมีเป้าหมายเพื่อเพิ่มประสิทธิภาพการจัดเก็บข้อมูลสินค้า การขาย และการจัดการสต๊อกให้เป็นระบบมากขึ้น ผ่านเทคโนโลยีสมัยใหม่และโครงสร้างระบบที่ใช้งานง่าย",
    image: StoreManagementSystemSCI_NEXT,
    githubLink: "https://github.com/Pachared/sci-stock-app",
    stackIcons: [
      { src: "/image/skills/react_dark.svg", alt: "React", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/golang_dark.svg", alt: "golang", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/materialui.svg", alt: "materialui", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/mysql-wordmark-dark.svg", alt: "mysql", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/railway_dark.svg", alt: "railway", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/vercel_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 5,
    name: "ระบบคลาวด์ Nova",
    category: "Fullstack",
    description:
      "เป็น Cloud Platform สำหรับการ Deploy โปรเจกต์จาก GitHub Repository ซึ่งพัฒนาขึ้นเพื่อวัตถุประสงค์ทางการศึกษาเท่านั้น ไม่ได้มีการนำไปใช้งานเชิงพาณิชย์หรือเปิดให้บริการจริง โดยมีฟีเจอร์หลัก ๆ เช่น การเชื่อมต่อกับ GitHub และการจัดการโปรเจกต์ผ่านแดชบอร์ดที่ใช้งานง่าย",
    image: Novacloud,
    githubLink: "https://github.com/Pachared/Nova",
    stackIcons: [
      { src: "/image/skills/react_dark.svg", alt: "React", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/motion_dark.svg", alt: "motion", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/golang_dark.svg", alt: "golang", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/materialui.svg", alt: "materialui", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/mysql-wordmark-dark.svg", alt: "mysql", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/vercel_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/railway_dark.svg", alt: "railway", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 6,
    name: "แดชบอร์ดทดสอบ Redis",
    category: "Frontend",
    description:
      "แดชบอร์ดทดสอบ Redis แบบ Real-time สำหรับทดลองระบบ Cache พัฒนาด้วย Next.js และ TypeScript",
    image: RedisDashboard,
    githubLink: "https://github.com/Pachared/Next-Redis-App",
    stackIcons: [
      { src: "/image/skills/nextjs_icon_dark.svg", alt: "nextjs", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/typescript.svg", alt: "typescript", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/redis.svg", alt: "redis", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/docker.svg", alt: "docker", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 7,
    name: "RentFlow เช่ารถออนไลน์",
    category: "Fullstack",
    description:
      "ระบบเช่ารถออนไลน์แบบ Fullstack สำหรับจัดการการจองรถ ตรวจสอบสถานะ และบริหารข้อมูลรถผ่านแดชบอร์ดที่ใช้งานง่าย",
    image: RentFlow,
    githubLink: "https://github.com/fulltank-garage/RentFlow-Web-App",
    stackIcons: [
      { src: "/image/skills/nextjs_icon_dark.svg", alt: "nextjs", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/materialui.svg", alt: "materialui", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/typescript.svg", alt: "typescript", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/redis.svg", alt: "redis", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/golang_dark.svg", alt: "golang", className: "w-10 sm:w-10 md:w-12.5 lg:w-13.75 xl:w-15" },
      { src: "/image/skills/mysql-wordmark-dark.svg", alt: "mysql", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/railway_dark.svg", alt: "railway", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/vercel_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 8,
    name: "Documentation สัมมนา \n (ใช้การสอนในรายวิชาสัมมนา)",
    category: "Frontend",
    description:
      "เว็บไซต์เอกสารประกอบการสอนสำหรับรายวิชาสัมมนา พัฒนาด้วย React และ TailwindCSS เพื่อจัดแสดงเนื้อหาและข้อมูลการนำเสนออย่างเป็นระบบ",
    image: DocumentSemina,
    githubLink: "https://github.com/Pachared/Document-seminar",
    stackIcons: [
      { src: "/image/skills/react_dark.svg", alt: "nextjs", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/tailwindcss.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/reactrouter.svg", alt: "reactrouter", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/motion_dark.svg", alt: "motion", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/vercel_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
  {
    id: 9,
    name: "API ระบบจัดการร้านค้า SCI_NEXT \n (โครงการในมหาวิทยาลัย)",
    category: "Backend",
    description:
      "Backend REST API สำหรับระบบจัดการร้านค้า SCI_NEXT พัฒนาด้วย Golang รองรับการจัดการสินค้า สต๊อก และระบบยืนยันตัวตน JWT พร้อมฐานข้อมูล MySQL และ Redis Cache",
    image: SCISTOCKAPI,
    githubLink: "https://github.com/Pachared/sci-stock-api",
    stackIcons: [
      { src: "/image/skills/golang_dark.svg", alt: "nextjs", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/redis.svg", alt: "tailwindcss", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/mysql-wordmark-dark.svg", alt: "reactrouter", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/jwt.svg", alt: "jwt", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
      { src: "/image/skills/railway_dark.svg", alt: "vercel", className: "w-7.5 sm:w-7.5 md:w-10 lg:w-11.25 xl:w-12.5" },
    ],
  },
];
