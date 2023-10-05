const username = document.getElementById("username");
const nickname = document.getElementById("nickname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_check = document.getElementById("password_check");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submit");
let div = document.getElementsByClassName("message_div");

let message;
let label;
let newElement;

success_func = (num, message) => {
  let div = document.getElementsByClassName("message_div")[num];
  div.textContent = message;

  if (div.classList.contains("error")) {
    div.classList.remove("error");
  }

  div.classList.add("success");
};

fail_func = (num, message) => {
  let div = document.getElementsByClassName("message_div")[num];
  div.textContent = message;

  if (div.classList.contains("success")) {
    div.classList.remove("success");
  }

  div.classList.add("error");
};

// username 입력 필드에 input 이벤트 리스너 추가
username.addEventListener("input", function () {
  let num = 0;
  if (username.value.length == 0) {
    message = "필수 입력 항목입니다!";
    fail_func(num, message);
  } else {
    message = "멋진 이름이네요!";
    success_func(num, message);
  }
});

//nickname 입력 필드에 input 이벤트 리스너 추가
nickname.addEventListener("input", function () {
  let num = 1;
  if (nickname.value.length < 2 || nickname.value.length > 5) {
    message = "닉네임은 2~5글자로 구성해주세요!";
    fail_func(num, message);
  } else {
    message = "멋진 닉네임이군요!";
    success_func(num, message);
  }
});

//email 입력 필드에 input 이벤트 리스너 추가
email.addEventListener("input", function () {
  let num = 2;
  let email_format =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!email_format.test(email.value)) {
    message = "올바른 메일 형식이 아닙니다!";
    fail_func(num, message);
  } else {
    message = "올바른 메일 형식입니다!";
    success_func(num, message);
  }
});

//password 입력 필드에 input 이벤트 리스너 추가
password.addEventListener("input", function () {
  let pattern1 = /[0-9]/;
  let pattern2 = /[a-z]/;
  let pattern3 = /[A-Z]/;
  let pattern4 = /[~!@#$%^&*()_+|<>?:{}]/;

  let num = 3;

  if (
    pattern1.test(password.value) == false ||
    pattern2.test(password.value) == false ||
    pattern3.test(password.value) == false ||
    pattern4.test(password.value) == false
  ) {
    message = "영어+숫자+특수문자를 조합하여 작성해주세요.";
    fail_func(num, message);
  } else {
    message = "안전한 비밀번호입니다!";
    success_func(num, message);
  }
});

//password_check 입력 필드에 input 이벤트 리스너 추가
password_check.addEventListener("input", function () {
  let num = 4;
  if (password_check.value == password.value) {
    message = "비밀번호가 일치합니다.";
    success_func(num, message);
  } else {
    message = "비밀번호가 일치하지 않습니다.";
    fail_func(num, message);
  }
});

//버튼 활성화
function checkInputs() {
  if (
    div[0].classList.contains("success") &&
    div[1].classList.contains("success") &&
    div[2].classList.contains("success") &&
    div[3].classList.contains("success") &&
    div[4].classList.contains("success")
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

const inputList = [username, nickname, email, password, password_check];

for (const input of inputList) {
  input.addEventListener("input", checkInputs);
}

//modal
const closeBtn = document.getElementById("closeButton");
const modal = document.querySelector(".modalDiv");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
