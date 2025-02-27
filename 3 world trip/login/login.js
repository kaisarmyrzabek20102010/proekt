document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      window.location.href = "/dashboard";
    } else {
      alert(data.message || "Login failed. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});

const a = document.getElementById("a");

a.addEventListener("click", () => {
  document.body.innerHTML = `
  <div class="login-container">
  <h2>sign up to your travel account</h2>

    <form id="loginForm">
      <label for="email">Email:</label>
      <input type="email" id="email" placeholder="email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" placeholder="password" required>

      <button type="submit">sign in</button>

      <a class='a' href="/3 world trip/main/index.html">go back</a>
    </form>
  </div>
  `;
});
