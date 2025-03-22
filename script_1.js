var counter = 0;

function onClickBut(but) {
    counter++;
    but.innerHTML = "Вы нажали на кнопку: " + counter + " раз";
    but.style.background = "blue";
    but.style.color = "red"
    but.style.width = "min-content"

    but.style.cssText = "border-radius:20px;border:solid 2px;box-shadow:0 2px 3px rgba(0,0,0,05);"
    if (counter % 2 == 0) {
        but.style.background = "red";
        but.style.color = "blue"
        but.style.cssText = "font-size:20px; height:30px; border-radius:30px;background:red;color:blue;box-shadow:0 4px 5px rgba(0,0,0,05); "
    }
    if(counter%3==0){
        but.innerHTML="Ты пидор: "+"x"+counter;
    }
    if(counter==1){
        but.innerHTML="Че нажимаешь? ";

    }
}
function onInput(but) {
    if (but.value == "Привет!")
        alert("И тебе привет!")
    else
    alert(but.value== false ?"Ты чорт":"Ты гей ,но напиши Привет!");
    


}
function onClickMenu(but) {
    var menu = document.getElementById("menu");
    if (!menu) {
        menu = document.createElement("div");
        menu.id = "menu";
        menu.style.display = "block";
        menu.style.position = "absolute";
        menu.style.width = "40px";
        menu.style.background = "white";
        menu.style.border = "1px solid black";
        menu.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        menu.style.padding = "10px";
        menu.style.zIndex = "1000";
        menu.style.borderRadius = "10px";
        menu.style.top = but.getBoundingClientRect().bottom + "px";
        menu.style.left = but.getBoundingClientRect().left + "px";
        menu.style.textDecoration = "none";
        menu.style.transition = "all 1s ease";
        menu.innerHTML = "<ul style='list-style:none; margin:0; padding:0; '><li><a style='text-decoration:none;align-items:center;'  href='https://www.youtube.com/' target='blank'><img style='max-width:40px;' src='https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png'></a></li><li>Option 2</li><li>Option 3</li></ul>";
        document.body.appendChild(menu);

        // Close the menu when clicking outside
        document.addEventListener("click", function handleClickOutside(event) {
            if (!menu.contains(event.target) && event.target !== but) {
                menu.style.display = "none";
                document.removeEventListener("click", handleClickOutside);
            }
        });
    } else if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}