let susanButton = document.querySelector('.susan-button');
let title = document.querySelector('.title');
let job = document.querySelector('.job');
let text = document.querySelector('.text');
let age = document.querySelector('.age');
let address = document.querySelector('.address');
let count = 0
const fakeApi = 'https://my-json-server.typicode.com/jerome310/jeromejson/susan'
susanButton.addEventListener('click',function(){
    async function getData() {
        const response = await fetch(fakeApi);
        const data = await response.json();
        let personName = data[count].position;
        let personJob = data[count]['start date'];
        let personContacts = data[count].contacts;
        let personAge = data[count].Age;
        let personAddress = data[count].Address;
        title.textContent = personName;
        job.textContent = personJob;
        text.textContent = personContacts;
        age.textContent = personAge;
        address.textContent = personAddress;
        }
        getData()
})