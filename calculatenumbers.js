
function calculateAttitudeNumber(name, birthday, gender) {
    // Tách riêng ngày, tháng, năm sinh
    const birthDate = new Date(birthday);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = birthDate.getFullYear();

    // Cộng dồn các chữ số của ngày, tháng, năm và dãy số của tên
    let nameNumbers = day + '' + month;
    let attitudeNumber = 0;
    for (const number of nameNumbers) {
        attitudeNumber += number*1;
    }

    // Giảm lifePathNumber về một chữ số (nếu là 11 hoặc 22 thì giữ nguyên)
    attitudeNumber = reduceToSingleDigit(attitudeNumber);

    return attitudeNumber;
}

function calculateMissionNumber(name, birthday, gender) {
    let num = 0;
    for(var _name of name.split(' '))
        if(_name) num += convertNameToNumbers(_name);
    return reduceToSingleDigit(num);
}

function calculatePersonalityNumber(name, birthday, gender) {
    let num = 0;
    for(var _name of name.split(' '))
        if(_name) num += convertNameToNumbers(_name,true);
    return reduceToSingleDigit(num);
}
function calculateSoulNumber(name, birthday, gender) {
    let num = 0;
    for(var _name of name.split(' '))
        if(_name) num += convertNameToNumbers(_name,false,true);
    return num;
}

function calculateLifePathNumber(name, birthday, gender) {
    // Tách riêng ngày, tháng, năm sinh
    const birthDate = new Date(birthday);
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1; // Tháng bắt đầu từ 0
    const year = birthDate.getFullYear();

    // Cộng dồn các chữ số của ngày, tháng, năm và dãy số của tên
    let nameNumbers = day + '' + month + '' + year;
    let lifePathNumber = 0;
    for (const number of nameNumbers) {
        lifePathNumber += number*1;
    }

    lifePathNumber = reduceToSingleDigit(lifePathNumber);
    return lifePathNumber;
}