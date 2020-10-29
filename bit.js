
//javascript function for Searching by User Id

function myFunction() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("customers");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[2];
		if (td) {
    		txtValue = td.textContent || td.innerText;
    		if (txtValue.toUpperCase().indexOf(filter) > -1) {
    			tr[i].style.display = "";
    		} 
    		else {
        		tr[i].style.display = "none";
      		}
    	}       
  	}
}

//javascript function for Searching by Problem name
function mySunction() {
	var inp, fil, tab, trop, td, i, txtValue;
	inp = document.getElementById("myInp");
	fil = inp.value.toUpperCase();
	tab = document.getElementById("customers");
	trop = tab.getElementsByTagName("tr");
	for (i = 0; i < trop.length; i++) {
		td = trop[i].getElementsByTagName("td")[3];
		if (td) {
    		txtValue = td.textContent || td.innerText;
    		if (txtValue.toUpperCase().indexOf(fil) > -1) {
    			trop[i].style.display = "";
    		} 
    		else {
        		trop[i].style.display = "none";
      		}
    	}       
  	}
}


//javascript function for Searching by result
function myDunction() {
	var inp, fil, tab, trop, td, i, txtValue;
	inp = document.getElementById("myInpu");
	fil = inp.value.toUpperCase();
	tab = document.getElementById("customers");
	trop = tab.getElementsByTagName("tr");
	for (i = 0; i < trop.length; i++) {
		td = trop[i].getElementsByTagName("td")[5];
		if (td) {
    		txtValue = td.textContent || td.innerText;
    		if (txtValue.toUpperCase().indexOf(fil) > -1) {
    			trop[i].style.display = "";
    		} 
    		else {
        		trop[i].style.display = "none";
      		}
    	}       
  	}
}





//javascript function for sorting userID

function sortTable() {
	var table, rows, switching, i, x, y, shouldSwitch;
  	tabley = document.getElementById("customers");
  	switching = true;
  	while (switching) {
    	switching = false;
    	rows = tabley.rows;
    	for (i = 1; i < (rows.length - 1); i++) {
      		shouldSwitch = false;
      		x = rows[i].getElementsByTagName("td")[2];
      		y = rows[i + 1].getElementsByTagName("td")[2];
      		if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        		shouldSwitch = true;
        		break;
      	}
    }
    if (shouldSwitch)
    {
    	rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
    	switching = true;
    }
  }
}
