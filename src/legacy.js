//FUNCION CREAR USUARIOS (usada en debugging, en producto final los usuarios son creados al registrarse)
//<Button onClick={createUser}>Crear Usuario (debugging, no usar)</Button>
/* export function createUser() {
  firebase
    .firestore()
    .collection("users")
    .add({
      coins: 400,
      uid: "1",
      stats: {
        coinsEarned: 400,
        hitRate: 0,
        hitStreak: 0
      }
    })
    .then(function (docRef) {
      console.log(
        "Document written with ID: ",
        docRef.id
      );
    })
    .catch(function (error) {
      console.error(
        "Error adding document: ",
        error
      );
    });
} */

export function sonAmigosPrueba(
  comando
) {
  var uid_a = firebase
    .auth()
    .currentUser.uid.toString();
  var uid_b =
    "cWr273EKn4TRFWlZmrBKhQIGPWQ2";
  var amigos;

  amigos = firebase
    .firestore()
    .collection(
      "friendships"
    ) /*
    .where("uid_a", "==", uid_a)
    .where("uid_b", "==", uid_b)
    .where("status", "==", "ACCEPTED")*/;

  console.log("LOL" + amigos);

  /*if( comando == true){
      return true;
    } else {
      return false
    }*/
}

/* var cadena =
    "The email address is already in use by another account.";

 await firebase
    .auth()
    .createUserWithEmailAndPassword(
      email,
      password
    )
    .then((user) => {
      console.log(
        "Usuario creado con éxito" // ¿Por qué no aparece cuando se crea con éxito?
      );
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var user = firebase.auth()
        .currentUser;

      if (errorMessage !== cadena) {
        firebase
          .firestore()
          .collection("users")
          .add({
            coins: 0,
            uid: user.uid.toString(),
            stats: {
              coinsEarned: 0,
              hitRate: 0,
              hitStreak: 0
            }
          })
          .catch(function (error) {
            console.error(
              "Error adding document: ",
              error
            );
          });
      } else {
        console.log(
          "Este usuario ya existe."
        );
      }
    });

  await firebase
    .auth()
    .signInWithEmailAndPassword(
      email,
      password
    ); */

    /*
function updateBetContext(subjectId, id) {


  var algo = firebase
    .firestore()
    .collection("subjects")
    .where("code", "==", subjectId)
    .get()
    .then((querySnapshot) => {
      console.log("HEy");

      querySnapshot.forEach((doc) => {
        firebase
          .firestore()
          .collection("betContexts")
          .doc(id)
          .update({
            subjects: {
              acronym: doc.get("acronym"),
              name: "nomre",
              year: "9"
            }
          })
          .then(function () {
            console.log("Document successfully updated!");
          })
          .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
}
*/

function sonAmigos(uid_a, uid_b) {
  var amigos = false;
  var solicitudes = firebase.firestore().collection("friendships");
  var query = solicitudes
    .where("uid_a", "==", uid_a)
    .where("uid_b", "==", uid_b);

  amigos = query
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().status == "ACCEPTED") {
          console.log("amigos es true");
          return true;
        } else {
          console.log("amigos es false");
          return false;
        }
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });
  return amigos;
}


export async function pruebas() {
  var uidEmisor = firebase.auth().currentUser.uid;
  var uidReceptor = document.getElementById("uidReceptor").value;

  console.log("EH");
  firebase.firestore().collection("bets").add({
    amount: 5,
    betContextId: "twSrQBtGuBGiNeryKIYM",
    type: "APRUEBA_SUSPENDE",
    uid: "CzzhhlAokLW4mMTWz2DmDnxpi1U2",
    value: true
  });
  firebase.firestore().collection("bets").add({
    amount: 10,
    betContextId: "twSrQBtGuBGiNeryKIYM",
    type: "NOTA",
    uid: "CzzhhlAokLW4mMTWz2DmDnxpi1U2",
    value: 8
  });
  firebase
    .firestore()
    .collection("betContexts")
    .doc("twSrQBtGuBGiNeryKIYM")
    .set({
      uid: "1HAabYbLxQZH12E1SOVJQC9QWIz1",
      subjects: {
        code: "21714008",
        degreeId: "1725"
      }
    });
}