let boxes = document.querySelectorAll(".box");
let turn0 = true; // player O starts

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner(); // ✅ Check after every click
    });
});

function checkWinner()
{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText
        let pos2=boxes[pattern[1]].innerText
        let pos3=boxes[pattern[2]].innerText
        if(pos1!=''&&pos1==pos2&&pos2==pos3){
            alert(`winner is ${pos2}`)
            disableAllBoxes();
            return ;
        }
    }
}
