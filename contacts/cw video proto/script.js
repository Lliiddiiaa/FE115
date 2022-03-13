(_=> {

    window.addEventListener ('load', _=> {

        const authInfo = {
            login:'admin',
            password:'nimda'
        };

        function getCookie(name) {
            let matches = document.cookie.match(new RegExp(
              "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        const auth = function() {
            let form = this.closest('.form'),//находим родителя
            inputLogin = form.querySelector('input.[name="login"]').value,
            inputPass = form.querySelector('input.[name="password"]').value;

            if(inputLogin === authInfo && inputPass === authInfo.password) {
                document.cookie = 'auth=true';//куки
                document.cookie = 'authLogin=' + inputLogin;

                window.location = './app.html';
            } else {
                alert('Пароль или логин не верны')
            }
        };

        const logout = function() {
            if(!getCookie('auth') || !getCookie('authLogin')) return;

            document.cookie = 'auth;max-age=-1';
            document.cookie = 'authLogin;max-age=-1';

            if(!getCookie('auth')) window.location.reload();
        };

        //проверка 
        if (window.location.pathname == '/app.html' && !getCookie('auth')) window.location = './index.html';

        if (window.location.pathname == '/index.html' && getCookie('auth') === 'true') window.location = './app.html';

        //событие на кнопку 
        let buttonSignin = document.querySelector('.form .signin');
            buttonLogout = document.querySelector('.contacts .logout');

        if(buttonSignin) buttonSignin.addEventListener('click',auth);
        if(buttonLogout) buttonLogout.addEventListener('click',logout);

        let contactsData = [];

        const contactsUpdate = function() {
            contactsList.innerHTML = '';
            let localContactsData = localStorage.getItem('contactsData');
            if(localContactsData.length > 0) contactsData = JSON.parse(localContactsData);

            let contactsList = document.querySelector('.contacts_list ul');
            contactsData.forEach(function(contact,id) {
                let elemContact  = document.createElement('li');
                    
                elemContact.innerHTML = `
                    <div class="id">${id + 1}</div>
                    <div class="name">${contact.name}</div>
                    <div class="phone">${contact.phone}</div>
                `
            });
        }
    
        const contactAdd = function() {
            let form = this.closest('.form_add'),
                inputName = form.querySelector('input[name="name"]'),
                inputPhone = form.querySelector('input[name="phone"]');

            if(inputName.length == 0 || inputName == ' ' || inputPhone.length == 0 || inputPhone == ' ') return

            let contact = {
                name:inputName,
                phone:inputPhone
            };

            contactsData.push(contact);

            localStorage.setItem('contactsData',JSON.stringify(contactsData));

            contactsUpdate();

            sessionStorage.removeItem('contactInputName'),
            sessionStorage.removeItem('contactInputPhone');
            
        };

        const contactSave = function() {
            let form = this.closest('.form_add'),
                inputName = form.querySelector('input[name="name"]'),
                inputPhone = form.querySelector('input[name="phone"]');

            if(inputName.length == 0 || inputName == ' ' || inputPhone.length == 0 || inputPhone == ' ') return

            let contact = {
                name:inputName,
                phone:inputPhone
            };

            sessionStorage.setItem('contactInputName', inputName);
            sessionStorage.setItem('contactInputPhone', inputPhone);
        }

       let buttonAdd = document.querySelector('.form_add .add'),
        buttonSave = document.querySelector('.form_add .save');

       if(buttonAdd) buttonAdd.addEventListener('click',contactAdd);
       if(buttonSave) buttonSave.addEventListener('click',contactSave);

       if (window.location.pathname == '/app.html') {
           contactsUpdate();

           let contactInputName = sessionStorage.getItem('contactInputName'),
                contactInputPhone = sessionStorage.getItem('contactInputPhone');

           if(contactInputName && contactInputName.length > 0 && contactInputPhone && contactInputPhone.length > 0) {
            let form = querySelector('.form_add'),
            inputName = form.querySelector('input[name="name"]'),
            inputPhone = form.querySelector('input[name="phone"]');

            inputName.value = contactInputName;
            inputPhone.value = contactInputPhone;

           }
       }

    })
})