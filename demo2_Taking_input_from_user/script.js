//document.querySelector gets stored in variable NamasteBtn
let namasteBtn= document.querySelector('button');

namasteBtn.addEventListener('click',inputMsg);

//showMsg is function

function inputMsg(){

   //declaring variable called name and using prompt funcn

   let name = prompt('Enter the name of student');

   namasteBtn.textContent='Roll No. 1:' +name;

}