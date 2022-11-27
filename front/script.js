function mostrar(el) {
  document.getElementById(el).style.display = "flex";
  document.getElementById("botao1").style.display = "none";
  document.getElementById("p_titulo").style.display = "none";
  document.getElementById("prox_questao").style.display = "flex";
}

function proxima(e) {
  document.getElementById(e).style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("alter").style.display = "none";
  document.getElementById("botao1").style.display = "none";
}

function sumir() {
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("prox_q2").style.display = "flex";
}

let elem1 = document.getElementById("botao1");

elem1.addEventListener("click", () => {
  console.log("cliquei no botão 1");
  axios.get("http://localhost:3000/questoes/q01").then((response) => {
    // handle success

    console.log(response.data);

    let question = document.getElementById("question");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");

    let questao = response.data;

    question.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
  });
});

function proxima(e) {
  document.getElementById(e).style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("alter").style.display = "none";
  document.getElementById("botao1").style.display = "none";
}

function sumir() {
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("prox_q2").style.display = "flex";
}

let elem2 = document.getElementById("prox_q2");

elem2.addEventListener("click", () => {
  console.log("cliquei no botão 2");
  axios.get("http://localhost:3000/questoes/q02").then((response) => {
    // handle success

    console.log(response.data);

    let question = document.getElementById("question");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");

    let questao = response.data;

    question.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
  });
});

function proxima(c) {
  document.getElementById(c).style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("alter").style.display = "none";
  document.getElementById("botao1").style.display = "none";
}

function sumir() {
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("prox_q2").style.display = "none";
  document.getElementById("prox_q3").style.display = "flex";
}

let elem3 = document.getElementById("prox_q3");

elem3.addEventListener("click", () => {
  console.log("cliquei no botão 3");
  axios.get("http://localhost:3000/questoes/q03").then((response) => {
    // handle success

    console.log(response.data);

    let question = document.getElementById("question");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");

    let questao = response.data;

    question.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
  });
});

function proxima(c) {
  document.getElementById(c).style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("alter").style.display = "none";
  document.getElementById("botao1").style.display = "none";
}

function sumir() {
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("prox_q2").style.display = "none";
  document.getElementById("prox_q3").style.display = "none";
  document.getElementById("prox_q4").style.display = "flex";
}

let elem4 = document.getElementById("prox_q4");

elem4.addEventListener("click", () => {
  console.log("cliquei no botão 3");
  axios.get("http://localhost:3000/questoes/q04").then((response) => {
    // handle success

    console.log(response.data);

    let question = document.getElementById("question");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");

    let questao = response.data;

    question.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
  });
});

function proxima(c) {
  document.getElementById(c).style.display = "none";
  document.getElementById("question").style.display = "none";
  document.getElementById("alter").style.display = "none";
  document.getElementById("botao1").style.display = "none";
}

function sumir() {
  document.getElementById("prox_questao").style.display = "none";
  document.getElementById("prox_q2").style.display = "none";
  document.getElementById("prox_q3").style.display = "none";
  document.getElementById("prox_q4").style.display = "none";
  document.getElementById("prox_q5").style.display = "flex";
}

let elem5 = document.getElementById("prox_q5");

elem5.addEventListener("click", () => {
  console.log("cliquei no botão 3");
  axios.get("http://localhost:3000/questoes/q05").then((response) => {
    // handle success

    console.log(response.data);

    let question = document.getElementById("question");
    let resp_a = document.getElementById("resp_a");
    let resp_b = document.getElementById("resp_b");
    let resp_c = document.getElementById("resp_c");
    let resp_d = document.getElementById("resp_d");

    let questao = response.data;

    question.innerHTML = questao.question;
    resp_a.innerHTML = questao.answers.answer_a;
    resp_b.innerHTML = questao.answers.answer_b;
    resp_c.innerHTML = questao.answers.answer_c;
    resp_d.innerHTML = questao.answers.answer_d;
  });
});
