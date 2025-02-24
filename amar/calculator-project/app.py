from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)
calculation_history = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/history')
def history():
    return render_template('history.html', historical_data=calculation_history)

@app.route('/calculate', methods=['POST'])
def calculate():
    expression = request.form['expression']
    try:
        result = eval(expression)
        calculation = f"{expression} = {result}"
        calculation_history.append(calculation)
    except Exception as e:
        calculation = f"{expression} = Error"
        calculation_history.append(calculation)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)