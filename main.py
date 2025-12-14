from flask import Flask, render_template, request
import os

app = Flask(__name__)

PASSWORD = "arsin i love you"   # 👉 yahan password change kar sakte ho

@app.route("/", methods=["GET", "POST"])
def home():
    if request.method == "POST":
        if request.form.get("password") == PASSWORD:
            return render_template("index.html")
        else:
            return "<h3 style='text-align:center;'>Wrong password 😢</h3>"

    return """
    <html>
    <head>
      <title>Private Surprise</title>
    </head>
    <body style="text-align:center;margin-top:100px;font-family:sans-serif;">
      <h2>🔒 Private Surprise</h2>
      <p>Sirf Asrin ke liye ❤️</p>
      <form method="post">
        <input type="password" name="password" placeholder="Enter password"
               style="padding:10px;font-size:16px;">
        <br><br>
        <button style="padding:10px 20px;font-size:16px;">Enter ❤️</button>
      </form>
    </body>
    </html>
    """

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))
