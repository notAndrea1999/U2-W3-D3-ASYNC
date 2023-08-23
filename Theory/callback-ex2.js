const answer = (time) => {
  console.log("📞 Pronto? Chi è? tempo: " + time / 1000 + "s");
};

const grannysAnswer = (time) => {
  console.log("📞Hai mangiato?? tutto bene? ti vedo sciupato. tempo: " + time / 1000 + "s");
};

const phoneCall = (callback) => {
  const randTime = Math.floor(Math.random() * 3000);

  setTimeout(() => callback(randTime), randTime); // answer(randTime), grannysAnswer(randTime), (time => console.log("📞 Ciao, quanto tempo! tempo: " + time / 1000 + "s"))(randTime)

  console.log("☎️ Il telefono sta squillando");
};

phoneCall(answer);
phoneCall(grannysAnswer);
phoneCall((time) => console.log("📞 Ciao, quanto tempo! tempo: " + time / 1000 + "s"));
