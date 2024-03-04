const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  const originalStr = str;

  if (str === "") {
    alert("Please input a value.");
    return;
  }

  str = str.toLowerCase().replace(/[\W_]/g, "");

  const reversedStr = str.split("").reverse().join("");

  if (str === reversedStr) {
    result.innerText = `${originalStr} is a palindrome.`;
  } else {
    result.innerText = `${originalStr} is not a palindrome.`;
  }
};

checkBtn.addEventListener("click", (event) => {
  event.preventDefault();
  isPalindrome(textInput.value);
});
