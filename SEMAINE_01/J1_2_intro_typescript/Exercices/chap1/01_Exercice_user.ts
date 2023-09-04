// Définition du type User

interface User {
  name: string;
  id: number;
  status?: string; // attribut facultatif
}

/**
 *  undifined c'est non définit pas volontairement
 *  void <=> null c'est définit volontairement
 */
function showStatus(user: User): undefined | string {
  return user.status;
}

const u1: User = {
  name: "Hayes",
  id: 0,
};

const u2: User = {
  name: "Hayes",
  id: 0,
  status: "B1",
};

console.log(showStatus(u1));
console.log(showStatus(u2));
