const loginsection = document.querySelector('.containerlogin')
const cadastrosection = document.querySelector('.containercadastro')
const btncadastro = document.querySelector('.btncadastro')
const form = document.querySelector('.form')
const name_input = document.querySelector('.inputname')
const data = document.querySelector('.inpudata')
const email_input_cadastro = document.querySelector('.inputmailc')
const input_senha_cadastro = document.querySelector('.passwordc')
const btnconfirm = document.querySelector('.btnconfirm')
const btnlogin = document.querySelector('.btnlogin')
const email_login = document.querySelector('.inptemail')
const password_login = document.querySelector('.inptpassword')


btncadastro.addEventListener('click', ()=> {
    loginsection.classList.add('hidden')
    cadastrosection.classList.remove('hidden')
    cadastrosection.classList.add('show')
})

btnconfirm.addEventListener('click', ()=> {
    loginsection.classList.remove('hidden')
    loginsection.classList.add('show')
    cadastrosection.classList.add('hidden')
})

let teste=false


function verificaForcaSenha() {
	var numeros = /([0-9])/
	var alfabeto = /([a-zA-Z])/
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/

	if($('.passwordc').val().length<6) {
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>")
	} else {  	
		if($('.passwordc').val().match(numeros) && $('.passwordc').val().match(alfabeto) && $('.passwordc').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>")
            teste=true
		} else {
			$('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>")
		}
	}
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let temErro = false

    if(teste==true) {
        temErro = false
        input_senha_cadastro.classList.remove("error")
    } else {
        temErro = true
        input_senha_cadastro.classList.add("error")
    }
})


data.addEventListener('input', setDataValue)

function validadeInt(s){
    var rgx = /^[0-9-/]*$/
    return s.match(rgx)
} //Validar apenas números e "/"

function setDataValue() {
    if(!validadeInt(data.value)){
        data.value = data.value.substring(0, data.value.length-1)
    }
}

btnconfirm.addEventListener('click', saveDataToLocalStorage)

function saveDataToLocalStorage() {

    let cadastrados = localStorage['cadastrados'] ? JSON.parse(localStorage['cadastrados']) : []

    cadastrados.push ({
        nome:  name_input.value,
        emailcad: email_input_cadastro.value,
        senhacad: input_senha_cadastro.value,
    })

    localStorage.setItem('cadastrados', JSON.stringify(cadastrados));

}


btnlogin.addEventListener('click', confirmLogin)

function confirmLogin() {
    let cadastrados = []
    let cadastrados_valid = {
        email: '',
        senha: '',
    }
    cadastrados = JSON.parse(localStorage.getItem('cadastrados'))

    cadastrados.forEach((item) => {
        if(email_login.value == item.emailcad && password_login.value == item.senhacad){
            cadastrados_valid = {
                email: item.emailcad,
                senha: item.senhacad,
            }
        }
    })

        if(email_login.value == cadastrados_valid.email && password_login.value == cadastrados_valid.senha) {
            alert('Deu certo')
        } else {
            alert('Deu errado')
        }
}