document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
});

const formData = {
  name: document.getElementById("name").value,
  email: document.getElementById("email").value,
  age: document.getElementById("age").value
};

console.log(formData);

function validateForm(data) {
  let filled = 0;

  for (let key in data) {
    if (data[key] !== "") {
      filled++;
    }
  }

  if (filled < 3) {
    alert("Fill at least 3 fields");
    return false;
  }

  if (data.age < 10 || data.age > 100) {
    alert("Age must be between 10 and 100");
    return false;
  }

  return true;
}

if (!validateForm(formData)) {
  return;
}

function sendData() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "response.json", true); // use GET for GitHub Pages

  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);

      document.getElementById("responseMessage").innerText =
        response.message;

      document.getElementById("myForm").reset();
    }
  };

  xhr.send();
}

sendData();
