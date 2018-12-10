jQuery(document).ready(function() {
	jQuery('.tabs .tab-links a').on('click', function(e) {
		var currentAttrValue = jQuery(this).attr('href');


		e.preventDefault();
	});
});

const input_phone = document.getElementById("phone")

input_phone.addEventListener("focus" , function(event) {
    input_phone.value = "(__)_____-____"
    setTimeout(function() {
        input_phone.setSelectionRange(0, 0)
    }, 1)
})

input_phone.addEventListener("blur" , function() {
    this.value = ""
})

input_phone.addEventListener("keydown", function(event) {
    event.preventDefault()
    if("0123456789".indexOf(event.key) !== -1
        && this.value.indexOf("_") !== -1) {
            this.value = this.value.replace(/_/, event.key)
            const next_index = this.value.indexOf("_")
            this.setSelectionRange(next_index, next_index)
    } else if (event.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_")
        const next_index = this.value.indexOf("_")
        this.setSelectionRange(next_index, next_index)
    }
})
