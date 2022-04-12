const LIST = [
  { id: "1", name: "ITEM_TYPE_LAB", description: "Lab" },
  { id: "2", name: "ITEM_TYPE_XRAY", description: "Xray" },
  { id: "0", name: "NURSE", description: "ยา" },
  { id: "10", name: "I_D", description: "ค่าแพทย์" },
  { id: "7", name: "I_T_D", description: "ห้ตถการ" },
  { id: "11", name: "XXX", description: "เลื้อด" },
  { id: "4", name: "DDD", description: "เวชภัณฑ์" },
  { id: "3", name: "KKK", description: "ค่าบริการ" },
];

const FIX_ITEM_TYPE_DESC = (LIST) => {
  return LIST.reduce((prev, curr) => {
    prev.push({
      id: curr["id"],
      description: curr["description"],
    });
    return prev;
  }, []);
};

const FIX_ITEM_TYPE = (LIST) => {
  return LIST.reduce((prev, curr) => (prev[curr["name"]] = curr["id"]), {});
};
