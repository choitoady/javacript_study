const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const id = event.target.id.value;
    const name = event.target.name.value;
    const phoneNumber = event.target.phoneNumber.value;
    const position = event.target.position.value;

    // Remove the form from the document
    form.remove();

    // Create welcome message
    let welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = `환영합니다, ${name}님!`;

    // Create paragraphs for each piece of information
    let idParagraph = document.createElement("p");
    idParagraph.textContent = `아이디: ${id}`;

    let nameParagraph = document.createElement("p");
    nameParagraph.textContent = `이름: ${name}`;

    let phoneNumberParagraph = document.createElement("p");
    phoneNumberParagraph.textContent = `전화번호: ${phoneNumber}`;

    let positionParagraph = document.createElement("p");
    positionParagraph.textContent = `원하는 직무: ${position}`;

    // Append welcome message and paragraphs to the body
    document.body.append(welcomeMessage, idParagraph, nameParagraph, phoneNumberParagraph, positionParagraph);
});