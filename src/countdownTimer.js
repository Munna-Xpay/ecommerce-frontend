
export const getCountDownTime = (offerEnd) => {
    const offerEndDate = new Date(offerEnd)
    // console.log(offerEndDate)
    const timeLeft = offerEndDate - new Date();
    // console.log(timeLeft)
    let day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    let minute = Math.floor((timeLeft / (1000 * 60)) % 60);
    let second = Math.floor((timeLeft / (1000)) % 60);

    return { day, hour, minute, second }
}