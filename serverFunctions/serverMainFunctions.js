const fs = require("fs");
const path = require("path");

const noteCreateFun = (data, noteArr) => {
  noteArr.push(data);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteArr)
  );
  return data;
};

const noteDeleteFun = (noteArr, id) => {
  const delID = parseInt(id);

  noteArr.forEach(({ id }, index) => {
    if (id === delID) {
      noteArr.splice(index, 1);
    }
  });

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(noteArr)
  );
};

module.exports = {
  noteCreateFun,
  noteDeleteFun,
};
