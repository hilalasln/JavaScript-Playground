/**
 * Function to populate values in card from form input
 */
function generateCard() {
    document.getElementById("collegeCard").style.display = "block";
    const nameElement = document.getElementById("name");
    var nameValue = nameElement.value; 


    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = nameValue;

    var collegeName = document.getElementById('collegeName');
    var collegeNameValue = collegeName.value;
    const cardCollegeNameElement = document.getElementById('cardCollegeName');
    cardCollegeNameElement.innerHTML = collegeNameValue;

    document.getElementById('cardLocation').innerHTML=document.getElementById('location').value;

}
