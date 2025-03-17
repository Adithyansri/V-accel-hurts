jQuery(document).ready(function() {
    const textArray = $('h1').data('texts').split(',');
    let $typeJsText = $(".animatedText");
    let stringIndex = 0;
    let charIndex = 0;
    let isTyping = !0;
    let delay = !1;

    function typeJs() {
        if (stringIndex < textArray.length) {
            const currentString = textArray[stringIndex];
            if (isTyping) {
                if (charIndex < currentString.length) {
                    $typeJsText.append(currentString.charAt(charIndex));
                    charIndex++
                } else {
                    isTyping = !1;
                    delay = !0;
                    setTimeout(() => {
                        delay = !1
                    }, 1500)
                }
            } else {
                if (charIndex > 0) {
                    $typeJsText.text(currentString.substring(0, charIndex - 1));
                    charIndex--
                } else {
                    isTyping = !0;
                    stringIndex++;
                    if (stringIndex >= textArray.length) {
                        stringIndex = 0
                    }
                    charIndex = 0;
                    $typeJsText.text("")
                }
            }
        }
    }
    setInterval(() => {
        if (!delay) {
            typeJs()
        }
    }, 100)
})