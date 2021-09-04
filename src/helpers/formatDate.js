export default function formatDate(date) {
    return date.toLocaleDateString() + " " + date.getHours() + ":" + date.getMinutes();
}