
const mongoose_date = new Date();
console.log(`old date: ${mongoose_date}`)
const formate= (date)=>{
    const year = mongoose_date.getFullYear();
    const month = String(mongoose_date.getMonth() + 1).padStart(2,'0');
    const day = String(mongoose_date.getDate()).padStart(2,'0');

    const fromatedDate = `${year}-${month}-${day}`;

    return fromatedDate;
}



console.log(formate("1"));