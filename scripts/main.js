(function () {
    'use strict';

    class Printer {
        constructor() {
            this.$titleInput = document.querySelector('.js-post-title-input');
            this.$titleOutput = document.querySelector('.js-post-title-output');

            this.$bodyInput = document.querySelector('.js-post-body-input');
            this.$bodyOutput = document.querySelector('.js-post-body-output');
        }

        startPrinting() {
            this.$titleInput.addEventListener('keyup', this.printTitle.bind(this));
            this.$bodyInput.addEventListener('keyup', this.printBody.bind(this));
        }

        printTitle() {
            this.$titleOutput.textContent = this.$titleInput.value;
        }

        printBody() {
            this.$bodyOutput.textContent = this.$bodyInput.value;
        }
    }

    window.addEventListener('DOMContentLoaded', () => {
        let printer = new Printer();
        printer.startPrinting();
    });
}());
