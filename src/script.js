const card = document.querySelectorAll(".card");

for (let i = 0; i <= card.length; i++){
    const card_i = card[i]
    let card_counter = card_i.querySelector('.num')
    let buttons = card_i.querySelector(".buttons")
    let but_add = card_i.querySelector('button')
    let buttons_list = buttons.querySelectorAll('.btn')

    let card_num = 0

    but_add.addEventListener("click", function(){
        card_num = 1
        card_counter.style.display = 'flex'
        card_counter.firstChild.textContent = card_num
        buttons.style.display = 'flex'
        but_add.style.display = 'none'
    })

    buttons.addEventListener('click', function (event) {
        if (event.target === buttons_list[0]){
            card_num +=1
            card_counter.firstChild.textContent = card_num
        }else {
            card_num -=1

            if (card_num > 0){
                card_counter.firstChild.textContent = card_num
            }else {
                card_counter.style.display = 'none'
                buttons.style.display = 'none'
                but_add.style.display = 'block'
            }
        }
    })
}
