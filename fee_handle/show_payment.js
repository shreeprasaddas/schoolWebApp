import payment from "./payment_record.js";
import user_record from "../user_database/user_record.js";
import select_user from "./select_user.js";

const show_bill = async (name, grade, roll, oldDate, newDate) => {
    const foldDate = new Date(oldDate);
    const fnewDate = new Date(newDate);
    const betwDate = {
        $gte: foldDate,
        $lte: fnewDate
    }

    try {
        const user = await select_user(name, grade, roll);
        const payment_detail = await payment.find({ student_objId: user.obid, date: betwDate });

        if (payment_detail.length > 0) {
            let data = {};
            payment_detail.forEach(element => {
                const amount = element.amount;
                const date= element.date;
                data[date] =amount;
            });
            return {
                name: name,
                class: grade,
                roll_no: roll,
                data: data, // Changed 'statment' to 'data'
                error: false
            };
        } else {
            // No payment details found
            return {
                name: name,
                class: grade,
                roll_no: roll,
                data: {},
                error: false // Assuming no payment details found is not an error
            };
        }
    }
    catch (error) {
        // Catch any errors occurred during the process
        console.error(error);
        return {
            error: true
        }
    }
}

(async () => {
    console.log(await show_bill("User 1", "8", 1, '2023-01-02', '2025-09-30'));
})();

// export default show_bill;
