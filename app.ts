enum ROLE {
  ADMIN,
  READ_ONLY,
}

const object = {
  name: 'Naruto',
  kills: 4,
  role: ROLE.ADMIN,
};

console.log(object.role);
