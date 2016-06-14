var RecordStore = require("./record/record.js");
var StoreView = require("./record/record_view.js");
var sample =  require("./sample.json")


var main = function(){
  var recordStore = new RecordStore();
  createAccounts(bank);
  var StoreView = new StoreView(document.getElementById('store_view'), store);
  StoreView.render();
};

var createInventory = function(recordStore) {

    for (var i = 0; i < sample.length; i++) {
        recordStore.addRecord(sample[i]);
    }
};

window.onload = main;
































// var main = function() {
//     var bank = new Bank();
//     createAccounts(bank);

//     displayTotals(bank);

//     document.getElementById('addInterest').onclick = function() {
//         addInterest(bank);
//     };
//     document.getElementById('reset').onclick = function() {
//         console.log("here");
//         main();
//     };

// };

// var addInterest = function(bank) {
//     bank.addInterest();
//     displayTotals(bank);
// };

// var displayTotal = function(type, bank) {
//     var actualType = 'total';
//     var str = "Total cash in bank: £";
//     if (type) {
//         actualType = type + "-total";
//         str = "Total " + type + " cash in bank: £";
//     }
//     var total = document.getElementById(actualType);
//     total.innerText = str + bank.totalCash(type);
// };

// var displayTotals = function(bank) {
//     displayTotal(null, bank);
//     displayAccounts(null, bank);
//     displayTotal('personal', bank);
//     displayAccounts('personal', bank);
//     displayTotal('business', bank);
//     displayAccounts('business', bank);
// };

// var displayAccounts = function(type, bank) {
//     var accounts = bank.filteredAccounts(type);
//     var ulName = "accounts";
//     if (type) {
//         ulName = type + "-accounts";
//     }
//     var ul = document.getElementById(ulName);
//     clearElement(ul);
//     for (var i = 0; i < accounts.length; i++) {
//         var li = document.createElement('li');
//         li.innerText = accounts[i].owner + ": £" + accounts[i].amount + " - Type: " + accounts[i].type;
//         ul.appendChild(li);
//     }
// };

// var createAccounts = function(bank) {

//     for (var i = 0; i < sample.length; i++) {
//         bank.addAccount(sample[i]);
//     }
// };

// var clearElement = function(element) {
//     while (element.firstChild) {
//         element.removeChild(element.firstChild);
//     }
// };


// window.onload = main;



// var Bank = require('./bank/bank.js');
// var sampleAccounts = require('./sample.json');
// var Account = require('./bank/account.js');

// window.onload = function(){
//   console.log("sample accounts ", sampleAccounts);

//   var bank = new Bank();

//   for(accountData of sampleAccounts){
//     bank.addAccount( new Account(accountData));
//   }

//   console.log("We created a bank in the browser! ", bank);

//   var totalDisplay  = document.getElementById('total');
//   totalDisplay.innerText = "Total: " + bank.totalCash();

//   var accountList = document.getElementById('accounts');

//   for(account of bank.accounts){
//     var accountListItem = document.createElement('li');
//     accountListItem.innerText = account.owner + ": £" + account.amount;
//     accountList.appendChild(accountListItem)
//   }

//   var businessList = document.getElementById('business-accounts')
//   var businessAccountsArray = bank.filteredAccounts('business')

//   for(account of businessAccountsArray){
//     var businessAccountsListItem = document.createElement('li')
//      businessList.appendChild(businessAccountsListItem);
//      businessAccountsListItem.innerText = "Owner: " + account.owner + ", Balance: " + account.amount;


      
//     }
   
//     var totalBusinessAccountDisplay = document.getElementById('business-total');

//     totalBusinessAccountDisplay.innerText = "Total: " + bank.totalCash('business')

// //     var interestButton = document.getElementById('interest')

// //     interestButton.onclick = function(){
// //       bank.interestPayment();
// //     }

// // //     }

// // // }


// // var refillButton = document.getElementById('refill');
// // var drinkButton = document.getElementById('drink');

// // refillButton.onclick = function(){
// //   waterBottle.fill();
// //   displayVolume();
// // }

// // drinkButton.onclick = function(){
// //   waterBottle.drink();
// //   displayVolume();