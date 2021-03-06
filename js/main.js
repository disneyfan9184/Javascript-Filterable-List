// Get input element.
let filterInput = document.getElementById('filterInput');

// Add event listener to the input filter box
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // Get value of input.
  let filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  let ul = document.getElementById('names');

  // Get lis form ul
  let li = ul.querySelectorAll('li.collection-item');

  // Loop through collection items li's
  for(let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    // If matched
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }

  // li.forEach(function(listItem) {
  //   let a = listItem.getElementsByTagName('a');
  //
  //   // If matched
  //   if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
  //     listItem.style.display = '';
  //   } else {
  //     listItem.style.display = 'none';
  //   }
  // });


}
