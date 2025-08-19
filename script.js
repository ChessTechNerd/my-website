const token = "7972268651:AAGqA0fwKNgXRtDjxZmBp021gXm7sbazAZs";
const chat_id = "378295625";

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = e.target.querySelectorAll("input, textarea");
  const fullName = inputs[0].value;
  const email = inputs[1].value;
  const phone = inputs[2].value;
  const message = inputs[3].value;

  const text = `📞 New Call Request from Website:\n\n👤 Name: ${fullName}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;

  fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id,
      text,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      alert("✅ Your message has been sent!");
      e.target.reset();
    })
    .catch((err) => {
      alert("❌ Failed to send message.");
      console.error(err);
    });
});
