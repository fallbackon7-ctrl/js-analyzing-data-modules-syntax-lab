
require("datejs");

function combineUsers(...userArrays) {
  const users = userArrays.flat();

  return {
    users: users,
    merge_date: Date.today().toString("M/d/yyyy")
  };
}

module.exports = {
  combineUsers
};
