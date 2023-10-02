export const typeRegex: {
    [key: string]: RegExp
} = {
    email: new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'),
    password: new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'),
    name: new RegExp('^[a-zA-Z ]{2,30}$'),
    phone: new RegExp('^[0-9]{10}$'),
    address: new RegExp('^[a-zA-Z0-9 ]{2,100}$'),
    city: new RegExp('^[a-zA-Z ]{2,30}$'),
    state: new RegExp('^[a-zA-Z ]{2,30}$'),
    zip: new RegExp('^[0-9]{5}$'),
    country: new RegExp('^[a-zA-Z ]{2,30}$'),
    cardNumber: new RegExp('^[0-9]{16}$'),
    cardName: new RegExp('^[a-zA-Z ]{2,30}$'),
    cardDate: new RegExp('^[0-9]{2}/[0-9]{2}$'),
    cardCvv: new RegExp('^[0-9]{3}$'),
    date: new RegExp('^[0-9]{2}/[0-9]{2}/[0-9]{4}$'),
}