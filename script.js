const apiKey = "";
const apiURL = "https://api.openai.com/v1/chat/completions";

async function postData() {
  const value = document.getElementById('message').value;
  console.log(value);
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": `Write a JavaScript solution code for this question and try to cover all edge cases that might arise. The question is: ${value}`
        }
      ]
    })
  });

  const data = await response.json();
  const res = data.choices[0].messages.content.trim();
  const card = document.createElement("pre");
  card.innerHTML = res;
  document.getElementById("chat-area").appendChild(card);

}
