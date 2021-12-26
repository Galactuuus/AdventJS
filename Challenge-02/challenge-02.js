const carta = 'bici coche balón _playstation bici coche peluche';


export default function listGifts(letter) {
    const giftsCount = {};
  
    const gifts = letter.split(/(\s+)/).map(gift => gift.trim()).filter(gift => gift !== '' && !gift.startsWith('_'));
  
    gifts.forEach(gift => {
      giftsCount[gift] ||= 0;
      giftsCount[gift] += 1;
    });
  
   return giftsCount;

}

console.log(listGifts(carta));