const modal = document.querySelector(".modal");
const submitBtn = document.querySelector("#donation-form button");
const donationForm = document.getElementById("donation-form");

donationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const amount = document.getElementById('amount').value.trim();

    if (name === '' || email === '' || amount === '' || Number(amount) <= 0) {
      return;
    }


    modal.style.display = 'block';
    donationForm.reset();
  });

  function closeModal() {
    modal.style.display = 'none';
  }