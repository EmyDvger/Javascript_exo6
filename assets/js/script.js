//fonction validation "onclick", je veux obtenir cette fonction :
function validation() {
  //declaration des variables date anniversaire et pointure
  //get getElementById = obtenir les informations par l'identifiant
  var birthDate = document.getElementById('birthDate').value;
  var shoesSize = document.getElementById('shoesSize').value;

  alert((shoesSize * 2 + 5) * 50 - birthDate + 1769);
}
