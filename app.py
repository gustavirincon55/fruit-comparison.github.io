from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def get_index():
    return render_template("INDEX-2.html")