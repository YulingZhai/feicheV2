from flask import Flask, render_template, send_file

app = Flask(__name__)


@app.route('/index')
def hello_index():
    # return "哈哈哈"
    return render_template('index.html')
    # return send_file(r"E:\feicheV2\templates\index.html")


@app.route('/demo')
def hello_demo():
    return render_template('demo.html')


if __name__ == '__main__':
    app.run(debug=True)
