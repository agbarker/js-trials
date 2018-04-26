// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addressInfo = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
	['home', '510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-123-4567']
	]);

let startingBalance = 26000;

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountLog(name, number, business) {
	console.log(`Addresses: \n${name}, ${number}, ${business}`);
}


//accountLog(accountHolder, accountNumber, businessName);

// Add function to print all addresses, including a header

function showAddresses(addresses) {
	for (let address of addresses) {
		console.log(address);
	}
}


// showAddresses(addressInfo);

// Add function to print phone types and numbers

function showPhoneNums(phoneNums)	{
	for (let [type, number] of phoneNums)	{
		console.log(`${type}: ${number}`);
	}
}

// showPhoneNums(phoneNumbers);


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

let accountTransactions = new Map();


// Add function to add transactions

function addTransaction(ledger, date, amount) {
	ledger.set(date, amount);
	//console.log(ledger);
}



// Use the function to add transactions

addTransaction(accountTransactions, 'May-2', -500);
addTransaction(accountTransactions, 'May-13', 1200);
addTransaction(accountTransactions, 'May-15', -100);
addTransaction(accountTransactions, 'May-21', -359);
addTransaction(accountTransactions, 'May-29', 2200);



// Add function to show balance status

function showBalanceStatus(balance)	{

	console.log(`Balance: \$${balance}`);

	if (balance < 0)	{
		console.log("YOU ARE OVERDRAWN");
	} else if (balance < 20)	{
		console.log("Warning: You are close to zero balance");
	} else	{
		console.log("Thank you for your business.");
	}
}

// showBalanceStatus(-50);
// showBalanceStatus(1);
// showBalanceStatus(200);

// Add function to show transactions

function showTransactions(balance, ledger) {

	console.log(`Starting balance: \$${balance}`);

	for (let [date, amount] of ledger) {
		
		if (amount < 0) {
			var depOrWd = 'Withdrawal';
		} else {
			var depOrWd = 'Deposit';
		}

		console.log(`${date}\n${depOrWd}: \$${Math.abs(amount)}`);

		if (Math.sign(balance) === 1 && Math.sign(balance + amount) === -1) {
			amount -= 25;
		}

		balance += amount;
		showBalanceStatus(balance);
	}
}


showTransactions(25, accountTransactions);


// ///////////////////////////////////////////////////////
// All Customer Info:

// const cat = {
//   "name": 'Anna',
//   "color": 'tabby',
//   "age": 5
// };

// Make an object with customer info

const accountInformation = {
	"acctHolder": accountHolder,
	"acctNumber": accountNumber,
	"business": businessName,
	"addresses": addressInfo,
	"phoneNums": phoneNumbers,
	"transactions": accountTransactions,
	"startingBalance": startingBalance
};

// Function to add customer attributes

function addMelonsAndPet(accountInfo, melon='Cantaloupe', numPets=0)	{
	accountInfo['favorite melon'] = melon;
	accountInfo['number of pets'] = numPets;
}

//console.log(accountInformation);

// Add attributes for this user
// addMelonsAndPet(accountInformation, 'Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




