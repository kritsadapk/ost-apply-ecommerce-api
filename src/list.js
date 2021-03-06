const js = {
  userLogin: {
    fistName: "จุดเริ่มต้น",
    lastName: "จันโอชา",
    tel: "0988878786",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Prayut_Chan-o-cha_at_the_Enthronement_of_Naruhito_%281%29.jpg/300px-Prayut_Chan-o-cha_at_the_Enthronement_of_Naruhito_%281%29.jpg",
  },
  products: [
    {
      id: 1,
      name: "Hospital OS Community",
      imageUrl:
        "http://www.opensource-technology.com/th/images/product_enterprise.png",
      price: "600000",
      desc: "พัฒนาเพิ่มเติมจาก Hospital OS 3.9.xx เหมาะสำหรับโรงพยาบาลชุมชน(รพช.) ขนาด 100 เตียง รองรับระบบการดูแลรักษาผู้ป่วย, การส่งเสริมสุขภาพ และระบบรายงาน.",
      stock: 10,
    },
    {
      id: 2,
      name: "iAnalysis",
      imageUrl: "http://www.opensource-technology.com/th/images/product_bi.png",
      price: "50000",
      desc: "iAnalysis ระบบคลังข้อมูล เพื่อสนับสนุนการวิเคราะห์และตัดสินใจ สำหรับผู้บริหารงานโรงพยาบาล โดยใช้เทคโนโลยีธุรกิจอัจฉริยะมีคลังข้อมูลเป็นศูนย์กลางในการจัดเก็บข้อมูล และนำข้อมูลที่ได้ไปสร้างระบบตัวชี้วัด.",
      stock: 1,
    },
    {
      id: 3,
      name: "Hospital OS Inventory",
      imageUrl:
        "http://www.opensource-technology.com/th/images/product_inventory.png",
      price: "50000",
      desc: "โปรแกรมบริหารคลังยาและเวชภัณฑ์ เป็นโปรแกรมจัดการข้อมูลคลังยา แบบไม่จำกัดจำนวนคลัง : เหมาะสำหรับ โรงพยาบาลชุมชน, โรงพยาบาลเอกชน.",
      stock: 0,
    },
    {
      id: 4,
      name: "Home Visit",
      imageUrl:
        "http://www.opensource-technology.com/th/images/product_homevisit.png",
      price: "65000",
      desc: "ระบบเยี่ยมบ้านที่ทันสมัย ใช้ iPad เป็นอุปกรณ์หลักในการบันทึกข้อมูลสามารถนำข้อมูลที่บันทึกจาก iPad กลับเข้าสู่โปรแกรม Hospital OS : เหมาะสำหรับ โรงพยาบาลที่มีกิจกรรมเยี่ยมบ้าน.",
      stock: 10,
    },
    {
      id: 5,
      name: "ZThrough",
      imageUrl: "http://www.opensource-technology.com/th/images/product_z.png",
      price: "19000",
      desc: "ระบบศูนย์ข้อมูลสุขภาพ พัฒนาขึ้นโดยใช้การรับบริการเป็นศูนย์กลางเพื่อเชื่อมโยงข้อมูลรับบริการของผู้ป่วยจากทุกหน่วยบริการในเครือข่าย มารวมศูนย์ที่เดียวกัน รองรับตั้งแต่ระดับชุมชน จนถึงระดับเขต",
      stock: 9,
    },
    {
      id: 6,
      name: "IPD Round Ward",
      imageUrl:
        "https://www.dinsow.com/wp-content/uploads/2021/01/IPD02-1024x914.png",
      price: "70000",
      desc: "ประกอบด้วย 1.Doctor Order, 2.Admission Note, 3.กิจกรรมพยาบาล, 4.Nurse Note, 5.Nurse Station, 6.ฟอร์มปรอท, 7.Round ward, 8.การส่งเวร, 9.Dischart Summary ",
      stock: 0,
    },
    {
      id: 7,
      name: "Queue management",
      imageUrl: "https://i.ytimg.com/vi/Iz7qIZRjAp0/maxresdefault.jpg",
      price: "60000",
      desc: "Hospital Queue Management System ระบบบริหารจัดการคิวและข้อมูลผู้ป่วย",
      stock: 10,
    },
    {
      id: 8,
      name: "Kiosk registration",
      imageUrl:
        "https://487985-1538468-raikfcquaxqncofqfm.stackpathdns.com/app/uploads/2020/09/Public-Services-Hospital-Kiosk-Prescription-Collection-Medical-Kiosk.jpg",
      price: "90000",
      desc: "ตู้ลงทะเบียนผู้ป่วย Smart Hospital Kiosk ให้บริการประชาชน สะดวกรวดเร็ว ลดการรอคอยของผู้ป่วย และผู้มาใช้บริการในโรงพยาบาล.",
      stock: 10,
    },
    {
      id: 9,
      name: "EHHC",
      imageUrl:
        "https://karn.work/assets/images/projects/ehhc/screenshot_1.png",
      price: "45000",
      desc: "ระบบสารสนเทศเพื่อส่งต่อผู้ป่วย สำหรับหน่วยบริการในระบบหลักประกันสุขภาพถ้วนหน้า เขตพื้นที่กทม. (EHHC)",
      stock: 10,
    },
    {
      id: 10,
      name: "iMed",
      imageUrl: "http://www.intermedisoft.com/images/hospital-workflow.jpg",
      price: "1590000",
      desc: "Web application  iMed จึงเริ่มพัฒนาเป็นซอฟต์แวร์ตัวแรกๆ ของเมืองไทยที่เป็น Web application และใช้เทคนิค  แยก client application server และ database server ออกจากกันและสามารถขยายได้อย่างไม่จำกัด จะทำเป็น application service center ก็ได้ ใช้ Database อะไรก็ได้ แต่ใช้ไปซื้อโอเลี้ยงไม่ได้",
      stock: 10,
    },
    {
      id: 11,
      name: "THIP: ระบบสารสนเทศเปรียบเทียบวัดระดับคุณภาพโรงพยาบาล",
      imageUrl: "https://karn.work/assets/images/projects/thip/cover.png",
      price: "200000",
      desc: "ระบบสารสนเทศเปรียบเทียบวัดระดับคุณภาพโรงพยาบาล พัฒนากลไกเครื่องมือเทคโนโลยีระบบสารสนเทศเปรียบเทียบวัดระดับคุณภาพโรงพยาบาล",
      stock: 10,
    },
  ],
};

const FileSystem = require("fs");
FileSystem.writeFile("list.json", JSON.stringify(js), (error) => {
  if (error) throw error;
});
