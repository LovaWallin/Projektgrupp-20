/*----------------------------STYLING AV LANDNINGSSIDA----------------------------*/

/*------------------------------JAVA AV STORY-SIDA-----------------------------*/

/*----------------------------JAVA AV BILJETTER-SIDA---------------------------*/

document.addEventListener("DOMContentLoaded", function () {
    const seats = document.querySelectorAll(".seat");
    const bookButton = document.getElementById("book-button");
    const totalPriceElement = document.getElementById("total-price");

    let totalPrice = 100;

    seats.forEach((seat) => {
        seat.addEventListener("click", () => {
            if (!seat.classList.contains("booked")) {
                seat.classList.toggle("booked");
                const price = parseInt(seat.getAttribute("data-price"));
                totalPrice += price;
                updateTotalPrice();
            }
        });
    });

    bookButton.addEventListener("click", () => {
        alert(`Bokning genomförd! Totalt pris: ${totalPrice} kr`);
        // Här kan du skicka bokningsinformationen till en server eller liknande
    });

    function updateTotalPrice() {
        totalPriceElement.textContent = `Totalt pris: ${totalPrice} kr`;
    }
});
