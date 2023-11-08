
  function submitData(UserName, UserEmail){
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
        name:  UserName,
        email: UserEmail,
        })
    
      };
    
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
      }).then(function (Data){
        document.body.append(Data.id)
      }).catch(function (error){
        alert(error.message)
        document.body.append(error.message);
      });
      
  }