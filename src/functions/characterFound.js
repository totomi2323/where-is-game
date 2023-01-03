const characterFound = (character) => {
   
    let characterListElements = document.querySelectorAll("li");
    characterListElements.forEach((char) => {
        if (char.textContent === character) {
            if ((char.parentNode.getAttribute("class")) === "nameList")
            {char.parentNode.removeChild(char)}
            else {
                char.style.textDecoration = "line-through"
            }
        }
    })
}
export default characterFound;