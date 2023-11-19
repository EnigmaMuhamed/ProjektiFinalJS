







class CharityDonationForm {
    constructor() {
        this.form = document.getElementById("donationForm");
        this.messageContainer = document.getElementById("message");

        this.form.addEventListener("submit", this.onSubmit.bind(this));
    }

    onSubmit(event) {
        event.preventDefault();
    
        const amount = parseFloat(this.form.querySelector("#amount").value);
        const name = this.form.querySelector("#fullName").value;
        const email = this.form.querySelector("#email").value;
        if (this.isValidFullName(fullName)) {
            this.displayErrorMessage("Please enter a valid full name (name space surname).");
            return;}
        if (amount < 5) {
            this.displayErrorMessage("Donation amount must be at least $5.");
            return;
        }
        const confirmationMessage = `Thank you, ${name}! You have donated $${amount.toFixed(2)}. Your confirmation email will be sent to ${email}.`;
    
        this.displayConfirmationMessage(confirmationMessage);
        this.clearForm();
        
    
        setTimeout(() => {
            window.location.href = `/P3/m.html?fullName=${encodeURIComponent(fullName)}`;
        }, 3000);
        
    }
 isValidFullName(fullName) {
        
        const nameSurnamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
        return nameSurnamePattern.test(fullName);
    }
    displayConfirmationMessage(message) {
        this.messageContainer.textContent = message;
    }

    displayErrorMessage(message) {
        this.messageContainer.textContent = message;
        this.messageContainer.style.color = "red";
    }
   
    clearForm() {
        this.form.querySelector("#amount").value = "";
        this.form.querySelector("#fullName").value = "";
        this.form.querySelector("#email").value = "";
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const charityDonationForm = new CharityDonationForm();
});