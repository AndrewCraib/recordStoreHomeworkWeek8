/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Bank = __webpack_require__(1);
	var BankView = __webpack_require__(4);
	var sample =  __webpack_require__(2)
	
	
	var main = function(){
	  var bank = new Bank();
	  createAccounts(bank);
	  var bankView = new BankView(document.getElementById('bank_view'), bank);
	  bankView.render();
	};
	
	var createAccounts = function(bank) {
	
	    for (var i = 0; i < sample.length; i++) {
	        bank.addAccount(sample[i]);
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	var Bank = function(){
	  this.accounts = [];
	}
	
	Bank.prototype = {
	  addAccount: function(account){
	    this.accounts.push(account);
	  },
	  findAccountByOwnerName:function(ownerName){
	    var foundAccount = null;
	    for (account of this.accounts) {
	      if(account.owner === ownerName){
	        foundAccount = account;
	      }
	    }
	    return foundAccount;
	  },
	  filteredAccounts: function(type){
	    if(!type) return this.accounts
	    var filteredAccounts = [];
	    for (account of this.accounts) {
	      if(type === account.type)
	        filteredAccounts.push(account);
	    }
	    return filteredAccounts;
	  },
	  totalCash:function(type){
	    var total = 0;
	    for (account of this.filteredAccounts(type)) {
	      total += account.amount;
	    }
	    return total;
	  },
	  accountAverage:function(){
	    return this.totalCash()/this.accounts.length;
	  },
	
	  addInterest: function(type) {
	        var accounts = this.filteredAccounts(type);
	        for (var i = 0; i < accounts.length; i++) {
	            accounts[i].amount *= 1.1;
	            accounts[i].amount = Math.round(accounts[i].amount * 100) / 100;
	        }
	  }
	}
	
	
	module.exports = Bank;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = [
	  { "owner": "jay",
	    "amount": 125.50,
	    "type": "personal"
	  },
	  { "owner": "val",
	    "amount": 55125.10,
	    "type": "personal"
	  },
	  { "owner": "marc",
	    "amount": 400.00,
	    "type": "personal"
	  },
	  { "owner": "keith",
	    "amount": 220.25,
	    "type": "business"
	  },
	  { "owner": "rick",
	    "amount": 1.00,
	    "type": "business"
	  },
	]


/***/ },
/* 3 */
/***/ function(module, exports) {

	var Account = function(params){
	  this.owner = params.owner;
	  this.amount = params.amount;
	  this.type = params.type;
	};
	
	module.exports = Account;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Account = __webpack_require__(3);
	
	
	var BankView = function(container, bank){
	    this.bank = bank;
	    this.container = container;
	    this.create();
	}; 
	
	BankView.prototype = {
	    render: function(){
	        this.displayTotal(null, this.bank);
	        this.displayAccounts(null, this.bank);
	        this.displayTotal('personal', this.bank);
	        this.displayAccounts('personal', this.bank);
	        this.displayTotal('business', this.bank);
	        this.displayAccounts('business', this.bank);
	    },
	    create: function(){
	        var elements = [];
	        
	        elements.push(this.createElement('button', 'addInterest', 'Add Interest'));
	        elements.push(this.createElement('button', 'reset', 'Reset'));
	
	        elements[0].onclick = function(){
	            this.addInterest(this.bank);
	        }.bind(this)
	
	        elements[1].onclick = function(){
	            console.log("Reset....")
	        }
	
	
	
	        elements.push(this.createElement('h4', 'total', null));
	        elements.push(this.createElement('ul', 'accounts', null));
	        elements.push(this.createElement('h4', 'business-total', null));
	        elements.push(this.createElement('ul', 'business-accounts', null));
	        elements.push(this.createElement('h4', 'personal-total', null));
	        elements.push(this.createElement('ul', 'personal-accounts', null));
	
	        
	        elements[6].onclick = function () {
	            console.log("INTEREST");
	        };
	
	        elements[7].onclick = function () {
	            console.log("RESET");
	        };
	
	        for (var i = 0; i < elements.length; i++) {
	            this.container.appendChild(elements[i]);
	        }
	    },
	    displayTotal: function(type, bank) {
	        var actualType = 'total';
	        var str = "Total cash in bank: £";
	        if (type) {
	            actualType = type + "-total";
	            str = "Total " + type + " cash in bank: £";
	        }
	        var total = document.getElementById(actualType);
	        total.innerText = str + bank.totalCash(type);
	    },
	    displayAccounts: function(type, bank) {
	        var accounts = bank.filteredAccounts(type);
	        var ulName = "accounts";
	        if (type) {
	            ulName = type + "-accounts";
	        }
	        var ul = document.getElementById(ulName);
	        this.clearElement(ul);
	        for (var i = 0; i < accounts.length; i++) {
	            var li = document.createElement('li');
	            li.innerText = accounts[i].owner + ": £" + accounts[i].amount + " - Type: " + accounts[i].type;
	            ul.appendChild(li);
	        }
	    },
	
	    addInterest: function() {
	        this.bank.addInterest();
	        this.render();
	    },
	    createElement:function(type, id, inner){
	        var tmp = document.createElement(type);
	        tmp.setAttribute('id', id);
	        tmp.innerText = inner
	        return tmp;
	    },
	    clearElement: function(element) {
	        while (element.firstChild) {
	            element.removeChild(element.firstChild);
	        }
	    }
	};
	
	
	
	module.exports = BankView;
	
	
	
	
	// var addInterest = function(bank) {
	//     bank.addInterest();
	//     displayTotals(bank);
	// };
	
	
	
	
	
	
	// window.onload = main;
	
	
	
	// // var Bank = require('./bank/bank.js');
	// // var sampleAccounts = require('./sample.json');
	// // var Account = require('./bank/account.js');
	
	// // window.onload = function(){
	// //   console.log("sample accounts ", sampleAccounts);
	
	// //   var bank = new Bank();
	
	// //   for(accountData of sampleAccounts){
	// //     bank.addAccount( new Account(accountData));
	// //   }
	
	// //   console.log("We created a bank in the browser! ", bank);
	
	// //   var totalDisplay  = document.getElementById('total');
	// //   totalDisplay.innerText = "Total: " + bank.totalCash();
	
	// //   var accountList = document.getElementById('accounts');
	
	// //   for(account of bank.accounts){
	// //     var accountListItem = document.createElement('li');
	// //     accountListItem.innerText = account.owner + ": £" + account.amount;
	// //     accountList.appendChild(accountListItem)
	// //   }
	
	// //   var businessList = document.getElementById('business-accounts')
	// //   var businessAccountsArray = bank.filteredAccounts('business')
	
	// //   for(account of businessAccountsArray){
	// //     var businessAccountsListItem = document.createElement('li')
	// //      businessList.appendChild(businessAccountsListItem);
	// //      businessAccountsListItem.innerText = "Owner: " + account.owner + ", Balance: " + account.amount;
	
	
	      
	// //     }
	   
	// //     var totalBusinessAccountDisplay = document.getElementById('business-total');
	
	// //     totalBusinessAccountDisplay.innerText = "Total: " + bank.totalCash('business')
	
	// // //     var interestButton = document.getElementById('interest')
	
	// // //     interestButton.onclick = function(){
	// // //       bank.interestPayment();
	// // //     }
	
	// // // //     }
	
	// // // // }
	
	
	// // // var refillButton = document.getElementById('refill');
	// // // var drinkButton = document.getElementById('drink');
	
	// // // refillButton.onclick = function(){
	// // //   waterBottle.fill();
	// // //   displayVolume();
	// // // }
	
	// // // drinkButton.onclick = function(){
	// // //   waterBottle.drink();
	// // //   displayVolume();
	
	
	
	
	// // this.render = function(){
	// //     this.displayTotal(null, bank);
	// //     this.displayAccounts(null, bank);
	// //     this.displayTotal('personal', bank);
	// //     this.displayAccounts('personal', bank);
	// //     this.displayTotal('business', bank);
	// //     this.displayAccounts('business', bank);
	// // };
	
	// // this.create = function(){
	// //     var elements = [];
	// //     elements.push(document.createElement("<h4 id='total'></h4>"));
	// //     elements.push(document.createElement("<ul id='accounts'></ul>"));
	// //     elements.push(document.createElement("<h4 id='business-total'></h4>"));
	// //     elements.push(document.createElement("<ul id='business-accounts'></ul>"));
	// //     elements.push(document.createElement("<h4 id='personal-total'></h4>"));
	// //     elements.push(document.createElement("<ul id='personal-accounts'></ul>"));
	// //     elements.push(document.createElement("<button id='addInterest'>Add Interest</button>"));
	// //     elements.push(document.createElement("<button id='reset'>Reset</button>"));
	
	// //     elements[6].onclick = function () {
	// //         console.log("INTEREST");
	// //     };
	
	// //     elements[7].onclick = function () {
	// //         console.log("RESET");
	// //     };
	
	// //     for (var i = 0; i < elements.length; i++) {
	// //         this.container.appendChild(elements[i]);
	// //     }
	// // };

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map