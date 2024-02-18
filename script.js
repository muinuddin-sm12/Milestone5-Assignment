
// const seatButton = document.getElementById('seat-button');
// seatButton.addEventListener('click', function(){
//     const totalSeat = document.getElementById('total-seat');
//     const totalSeatNumber = parseInt(totalSeat.innerText);
//     // console.log(totalSeat.innerText);
//     const seat = totalSeatNumber-1;
//     console.log(seat)
// })

// const seatButton = document.getElementsByClassName('seat-btn');
// for(const button of seatButton){
//     button.addEventListener('click', function(){
//         const totalSeat = document.getElementById('total-seat');
//         const totalSeatNumber = parseInt(totalSeat.innerText);
//         // console.log(totalSeat.innerText);
//         const seat = totalSeatNumber;
//         const seatLeft = seat-1;
//         console.log(seatLeft)
//     })
// }


// const selectCount = document.getElementById('seat-count');
const seatButton = document.getElementsByClassName('seat-button');
let selectSeat = 0;
for(const seat of seatButton){
    seat.addEventListener('click', function(){
        if(seat.classList.contains('selected')){
            seat.classList.remove('selected');
            seat.style.backgroundColor = '#F7F8F8';
            selectSeat --; 
        }else {
            if(selectSeat<4){
                seat.classList.add('selected');
                seat.style.backgroundColor = '#1DD100';
                selectSeat ++;
            }
        }
        increaseSeat();
        decreaseSeat();
    })
}
const selectCount = document.getElementById('seat-count');
function increaseSeat(){
    selectCount.innerText = selectSeat;
}
const availableSeat = document.getElementById('available-seat');
function decreaseSeat(){
    availableSeat.innerText = (40 - selectSeat);
}
