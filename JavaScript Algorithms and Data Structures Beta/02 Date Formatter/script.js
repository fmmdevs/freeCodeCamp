const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
// numero de dia del mes ( entre 1 y 31)
const day = date.getDate();
// numero de mes (entre 0 y 11), le sumamos 1.
const month = date.getMonth()+1;

// numero de año (YYYY)
const year = date.getFullYear();

// numero de hora (0-23)
const hours = date.getHours();

// numero de minutos (0-59)
const minutes = date.getMinutes();


const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change",()=>{
    switch(dateOptionsSelectElement.value){
        case "dd-mm-yyyy": currentDateParagraph.textContent=formattedDate;
        break;
        case "yyyy-mm-dd": currentDateParagraph.textContent=`${year}-${month}-${day}`;
            break;
        case "mm-dd-yyyy-h-mm": currentDateParagraph.textContent=`${month}-${day}-${year} ${hours}:${minutes}`;
            break;
        default: currentDateParagraph.textContent= formattedDate;
    }
})