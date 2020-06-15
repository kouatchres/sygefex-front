import react from "react";

uniqueCodeGen = keyLength => {
  var i,
    key = "",
    //  characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    characters = "abcdefghijklmnopqrstuvwxyzABCDEF@#$%&GHIJKLMNOPQRSTUVWXYZ0123456789";

  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
    key += characters.substr(Math.floor(Math.random() * charactersLength + 1), 1);
  }
  return key;
};
const CodeGenerator = () => {
  return <h1>Hi</h1>;
};

export default CodeGenerator;
export { uniqueCodeGen };
