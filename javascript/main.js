function averageAge(agesArray) {
    const total = agesArray.reduce((sum, age) => sum + age, 0);
    return (total / agesArray.length).toFixed(2);
  }
  
  document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const ageInput = document.getElementById('ageInput').value;
  
    const agesArray = ageInput.split(' ').map(Number);
  
    const validAges = agesArray.filter(age => !isNaN(age));
  
    if (validAges.length > 0) {
      const avgAge = averageAge(validAges);
      document.getElementById('output').textContent = `Average Age: ${avgAge}`;
    } else {
      document.getElementById('output').textContent = 'Please enter valid ages.';
    }
  });
  