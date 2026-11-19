console.log(document);

function testTheDOM() {
    console.log("inside testTheDOM");
    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for(let node of nodes) {
        console.log(node);
        console.log(node.innerHTML);
        console.log(node.textContent);
    }
    var cbn = document.getElementById("checkingBalance");
    console.log("cbn is " + cbn.textContent);
    //cbn.textContent="CHANGED";
    var cbn_value = parseInt(cbn.textContent);
    cbn_value += 100;
    cbn.textContent = cbn_value;
}

function depositChecking() {
    var balance = document.getElementById("checkingBalance");
    newBalance = parseInt(balance.textContent,10);
    newBalance += 100;
    balance.textContent = newBalance;
}

function depositSavings() {
    var balance=document.getElementById("savingBalance");
    newbalance = parseInt(balance.textContent,10);
    balance.textContent=newbalance;
     if(newbalance == 0) {
        var title = document.getElementById('bankAccountTitle');
        title.textContent="Bank Account";
    }
    newbalance+=100;
    balance.textContent=newbalance;
}

function emptySavings() {
    /*get value of html element with id savings*/
    var td = document.getElementById("savingBalance");
    td.textContent = 0;
    var title = document.getElementById('bankAccountTitle');
    /*change value of title */
    title.textContent="ALERT: Savings Empty";
}