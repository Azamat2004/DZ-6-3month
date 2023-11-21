let users = [
    {id: 1, name: "Aza"},
    {id: 2, name: "Nurs"},
    {id: 3, name: "Beka"}
  ];
  
  let userWithId2 = users.find(user => user.id === 2);
  
  console.log(userWithId2);
  