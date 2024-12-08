// Selecting form and result elements
const loanForm = document.getElementById('loan-form');
const loanResult = document.getElementById('loan-result');

// Event listener for form submission
loanForm.addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent form from reloading the page

  // Get user input values
  const loanAmount = parseFloat(document.getElementById('loan-amount').value);
  const loanDuration = parseInt(document.getElementById('loan-duration').value);
  const interestRate = parseFloat(document.getElementById('interest-rate').value);

  // Validate input
  if (isNaN(loanAmount) || isNaN(loanDuration) || isNaN(interestRate)) {
    loanResult.innerHTML = `<p style="color: red;">Please provide valid inputs.</p>`;
    return;
  }

  // Calculate monthly interest rate and the total interest
  const monthlyInterestRate = (interestRate / 100) / 12;
  const totalInterest = loanAmount * monthlyInterestRate * loanDuration;

  // Calculate total repayment and monthly installment
  const totalRepayment = loanAmount + totalInterest;
  const monthlyInstallment = totalRepayment / loanDuration;

  // Display the result
  loanResult.innerHTML = `
        <h3>Loan Application Approved</h3>
        <p><strong>Loan Amount:</strong> $${loanAmount}</p>
        <p><strong>Loan Duration:</strong> ${loanDuration} months</p>
        <p><strong>Annual Interest Rate:</strong> ${interestRate}%</p>
        <p><strong>Total Interest:</strong> $${totalInterest.toFixed(2)}</p>
        <p><strong>Total Repayment:</strong> $${totalRepayment.toFixed(2)}</p>
        <p><strong>Monthly Installment:</strong> $${monthlyInstallment.toFixed(2)}</p>
    `;
});
