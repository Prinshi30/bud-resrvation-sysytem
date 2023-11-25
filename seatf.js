document.addEventListener('DOMContentLoaded', () => {
    const seats = document.querySelectorAll('.seat');
    const selectedSeats = document.getElementById('selected-seats');
    const totalPriceElement = document.getElementById('total-price');
    const bookButton = document.getElementById('book-button');

    let selectedSeatCount = 0;
    let totalPrice = 0;

    seats.forEach((seat) => {
        seat.addEventListener('click', () => {
            if (!seat.classList.contains('selected')) {
                seat.classList.add('selected');
                selectedSeatCount++;
                totalPrice += 10; // Adjust the price as needed
            } else {
                seat.classList.remove('selected');
                selectedSeatCount--;
                totalPrice -= 10; // Adjust the price as needed
            }

            updateSelectedSeats();
        });
    });

    function updateSelectedSeats() {
        selectedSeats.innerHTML = '';
        selectedSeats.appendChild(document.createTextNode(`Selected Seats: ${selectedSeatCount}`));
        totalPriceElement.textContent = totalPrice;

        if (selectedSeatCount > 0) {
            bookButton.removeAttribute('disabled');
        } else {
            bookButton.setAttribute('disabled', true);
        }
    }
});
