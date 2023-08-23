const sayHi = (str) => console.log("Buongiorno, " + str);

const sayBye = (str) => console.log("Ci vediamo, " + str);

const greetWithEnthusiasm = (string, customFunc) => {
  const withEnthusiasm = string + "!!!";

  // la chiamata a customFunc deve aspettare la fine dell'operazione precedente
  // se l'operazione richiede del tempo customFunc aspetterà il tempo necessario prima di essere chiamata
  customFunc(withEnthusiasm); // sayHi(withEnthusiasm); sayBye(withEnthusiasm)
};

greetWithEnthusiasm("Stefano", sayHi);
greetWithEnthusiasm("Alessandro", sayBye);
greetWithEnthusiasm("Emanuele", (str) => console.log("Ciao Ciao, " + str));
