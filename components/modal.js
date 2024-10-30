export default class Modal {
    constructor(modalId, messageId, closeId) {
        this.modal = document.getElementById(modalId);
        this.message = document.getElementById(messageId);
        this.closeButton = document.getElementById(closeId);

        this.closeButton.addEventListener('click', () => this.close());
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) this.close();
        });
    }

    open(message, imgSrc = '') {
        this.message.innerHTML = `
            <p>${message}</p>
            ${imgSrc ? `<img src="${imgSrc}" alt="Resultado" class="modal-img">` : ''}
        `;
        this.modal.style.display = 'block';
    }
    

    close() {
        this.modal.style.display = 'none';
    }
}
