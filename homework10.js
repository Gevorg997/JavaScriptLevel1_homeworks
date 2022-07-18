/*1. Create an Author class and a Book class.
Author should have: name, email, gender.
It should have appropriate getters and setters.
It should have a toString method.
Book should have: title, author(Author), price, quantity.
It should have appropriate getters and setters.
It should have a method: getProfit(), which calculates the profit from the book based on
the price and quantity.
It should have a toString method.*/

class Author {
    constructor(name, email, gender){
        this.name = name
        this.email = email
        this.gender = gender
    }
    get name() {
        return this._name
    }
    set name(n) {
        this._name = n
    }
    get email() {
        return this._email
    }
    set email(e) {
        this._email = e
    }
    get gender() {
        return this._gender
    }
    set gender(g) {
        this._gender = g
    }
    toString(){
        return `Author's name is ${this.name} , email: ${this.email} , gender: ${this.gender}`
    }
}


class Book extends Author{
    constructor(title, author, price, quantity){
        super(author)
        this.title = title
        this.price = price
        this.quantity = quantity
    }
    get title() {
        return this._title
    }
    set title(t) {
        this._title = t
    }
    get price() {
        return this._price
    }
    set price(p) {
        this._price = p
    }
    get author() {
        return this.name
    }
    set author(a) {
    }
    get quantity() {
        return this._quantity
    }
    set quantity(q) {
        this._quantity = q
    }
    getProfit(){
        return this.price * this.quantity
    } 
    toString(){
        `It's a ${this.title} book, with price ${this.price} , and ${this.quantity} quantity`
    }
    
}

/* 
2. Create an Account class. Account should have: id, name, balance.
It should have setters for name and balance, and getters for all fields.
It should have a method: credit(amount), which should add amount to balance and
return the updated balance.
It should have a method: debit(amount), which should subtract the amount from the
balance, if amount is less than the balance, otherwise output “Amount exceeded
balance.”
It should have a method: transferTo(anotherAccount, amount): which should subtract the
amount from the account balance and add it to the given anotherAccount and return the
updated balance, if amount is less than the balance, otherwise output “Amount
exceeded balance.”
It should have a static method: identifyAccounts(accountFirst, accountSecond) which
gets two accounts and identifies if they are the same or not comparing all fields.
It should have toString method.
*/

class Account {
    constructor(name){
        this._id = Math.ceil(Math.random() * 10000000)
        this.name = name
        this.balance = 0
    }
    get id(){
        return this._id
    }
    set id(i){
        
    }
    
    set name(n){
        this._name = n
    }
    get name(){
        return this._name
    }
    set balance(b){
        this._balance = b
    }
    get balance(){
        return this._balance
    }
    creditAmount(amount){
        this.balance += amount
        return this.balance
    }

    debitAmount(amount){
        if(amount <= this.balance){
            this.balance -= amount
            return this.balance
        } else {
            console.log("Amount exceeded balance.")
        }
    }

    transferTo(anotherAccount, amount){
        if(amount <= this.balance){
            this.balance -= amount
            anotherAccount.balance += amount
            return this.balance
        } else {
            console.log("Amount exceeded balance.")
        }
    }

    static identifyAccounts(accountFirst, accountSecond){
        if(accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name){
            console.log('Accounts are the same')
        } else {
            console.log('Accounts are different')
        }
    }

    toString(){
        console.log(`This is account: ${this.id} , name: ${this.name} , with balance: ${this.balance}`)
    }
}


/*
3. Write classes: Person, Student, Staff.
Person should have: firstName, lastName, gender, age.
It should have appropriate getters and setters.
It should have a method: toString().
Student is inherited from Person. It should have programs (array of strings), year, fee.
It should have appropriate getters and setters.
It should have method: passExam(program, grade). Student should contain the data
about its programs and exams. passExam will update that data, so if student passed all
the exams(grade is great or equal to 50), its year should be increased by one.
It should have a toString method.
Teacher is inherited from Person. It should have program(string), pay.
It should have appropriate getters and setters.
It should have a toString method.
*/

class Person {
    constructor(firstName, lastName, gender, age){
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.age = age
    }

    get firstName(){
        return this._firstName
    }
    set firstName(n){
        this._firstName = n
    }
    get lastName(){
        return this._lastName
    }
    set lastName(l){
        this._lastName = l
    }
    get gender(){
        return this._gender
    }
    set gender(g){
        this._gender = g
    }
    get age(){
        return this._age
    }
    set age(a){
        this._age = a
    }
    toString(){
        let gen
        if(this.gender == 'male'){
            gen = 'He'
        } else if (this.gender == 'female'){
            gen = 'She'
        } else {
            gen = 'It'
        }
        console.log(`${gen} is ${this.firstName} ${this.lastName} . ${gen} is ${this.age} years old`)
    }
    
}




class Student extends Person {
    constructor(firstName,lastName,gender,age,programs,year,fee){
        super(firstName,lastName,gender,age)
        this.programs = programs
        this.year = year
        this.fee = fee
    }
    examsData = {}

    passExam(program, grade){
        debugger
        this.examsData[program] = grade
        if(Object.values(this.examsData).length === this.programs.length){
           Object.values(this.examsData).forEach(function(el){
               if(el < 50){
                   return
               }
               
           })
            this.year += 1
         }
        
         
    }

    toString(){
        console.log(`${gen} is ${this.firstName} ${this.lastName} . ${gen} is ${this.age} years old. ${gen} is a student`)
    }
    
}


class Teacher extends Person {
    constructor(fN,lN,gender,age,program,pay){
        super(fN,lN,gender,age)
        this.program = program
        this.pay = pay
    }
    get program(){
        return this._program
    }
    set program(p){
        this._program = p
    }

    get pay(){
        return this._pay
    }

    set pay(p){
         this._pay = p
    }
    toString(){
        console.log(`${gen} is ${this.firstName} ${this.lastName} . ${gen} is ${this.age} years old. ${gen} is a teacher of ${this.program} ,with pay: ${this.pay}`)
    }
}
