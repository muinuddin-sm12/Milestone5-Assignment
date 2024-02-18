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
        const selectCount = document.getElementById('seat-count');
        selectCount.innerText = selectSeat
        const availableSeat = document.getElementById('available-seat');
        availableSeat.innerText = (40 - selectSeat);        
    })
}