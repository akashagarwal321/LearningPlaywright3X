class Payment {

    #validatePayment(amount) {
        return amount > 0;
    }

    #checkAccount() {
        console.log("Checking account...");
    }

    #connectToGateway() {
        console.log("Connecting to payment gateway...");
    }

    processPayment(amount) {                            // only simple public method - rest is hidden

        if (!this.#validatePayment(amount)) {
            console.log("Invalid payment amount");
            return;
        }

        this.#checkAccount();

        this.#connectToGateway();

        console.log("Payment successful:", amount);
    }
}

const payment = new Payment();

payment.processPayment(5000); //this is abstraction - hide what is not needed only expose what is needed