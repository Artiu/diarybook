export default function formatDate(date) {
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    return date.toLocaleDateString() + " " + date.getHours() + ":" + minutes;
}