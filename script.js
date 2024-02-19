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
        selectCount.innerText = selectSeat;
        const availableSeat = document.getElementById('available-seat');
        availableSeat.innerText = (8 - selectSeat);  
    })
}

let totalPrice = 0;
let totalSelect = 0;
const button = document.getElementsByClassName('seat-button');
for(const seat of seatButton){
    seat.addEventListener('click', function(){
        totalSelect++;
        if(totalSelect>4){
            seat.removeEventListener('click')
        }else{
            const seatName = seat.innerText;
        const seatDetails = document.getElementById('seat-details-container');
        const li = document.createElement('li');
        li.classList.add('seat-details');
        const P1 = document.createElement('p')
        P1.innerText = seatName;
        li.appendChild(P1);
        const P2 = document.createElement('p');
        P2.innerText = 'Economy';
        li.appendChild(P2);
        const fare = document.createElement('p');
        fare.innerText = 550;
        li.appendChild(fare);
        seatDetails.appendChild(li);

        const price = parseInt(fare.innerText);
        console.log(price)
        totalPrice = totalPrice+price;

        const totalPriceContainer = document.getElementById('total-price');
        totalPriceContainer.innerText = totalPrice;

        const grandTotalContainer = document.getElementById('grand-total-price');
        grandTotalContainer.innerText = totalPrice;

            document.getElementById('apply-btn').addEventListener('click', function(){
                const inputElement = document.getElementById('input-element');
                if(inputElement.value === 'NEW15'){
                    const grandTotal = (totalPrice*15)/100;
                    grandTotalContainer.innerText = totalPrice-grandTotal;
                    inputElement.value = '';
                    const inputField =document.getElementById('input-field');
                    inputField.style.display = 'none';
                }
                else if(inputElement.value === 'Couple 20'){
                    const grandTotal = (totalPrice*20)/100;
                    grandTotalContainer.innerText = totalPrice - grandTotal;
                    inputElement.value = '';
                    const inputField =document.getElementById('input-field');
                    inputField.style.display = 'none';
                }
                else{
                    // alert('Invalid Coupon Code');
                    inputElement.value = '';
                }
                const nextButton = document.getElementById('next-btn');
                nextButton.addEventListener('click', function(){
                const head = document.getElementById('head')
                head.style.display = 'none';
                const main = document.getElementById('main')
                main.style.display = 'none';
                const foot = document.getElementById('foot')
                foot.style.display = 'none';
                const modal = document.getElementById('modal');
                modal.classList.remove('hidden');
            })

            })

        }

    })
}


// const nextButton = document.getElementById('next-btn');
// nextButton.addEventListener('click', function(){
//     const head = document.getElementById('head')
//     head.style.display = 'none';
//     const main = document.getElementById('main')
//     main.style.display = 'none';
//     const foot = document.getElementById('foot')
//     foot.style.display = 'none';

//     const modal = document.getElementById('modal');
//     modal.classList.remove('hidden');
// })

