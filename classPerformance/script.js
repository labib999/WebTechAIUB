function analyze() {
    let text = document.getElementById("text").value;

    if (text.trim() === "") {
        document.getElementById("output").innerHTML = "Please enter text.";
        return;
    }

    let charCount = text.length;

    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    let reversed = text.split("").reverse().join("");

    document.getElementById("output").innerHTML =
        "Characters: " + charCount + "<br>" +
        "Words: " + wordCount + "<br>" +
        "Reversed: " + reversed;
}