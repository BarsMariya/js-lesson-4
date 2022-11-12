const userOne = {
    role: 'admin',
    firstname: 'Мария',
}

function checkAccess(user, role){
    //return user.role === role;
    if (user.role === role){
        return true;
    }
    return false;
}

function showSuccessMessage(user){
    console.log('##########');
    console.log(`# Доступ открыт ${user.firstname} #`);
    console.log('##########');
}

function showErrorMessage(user){
    console.log('!!!!!!!!!!');
    console.log(`# Доступ закрыт ${user.firstname} #`);
    console.log('!!!!!!!!!!');
}

if (checkAccess(userOne, 'admin')){
    showSuccessMessage(userOne);
}

function checkAccess(user, role){
    return user.role === role;
}
    if (checkAccess(userOne, 'manager')){
        showSuccessMessage(userOne);
    } else {
        showErrorMessage(userOne)
    }