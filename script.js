
const loginsection = document.querySelector('.containerlogin')
const cadastrosection = document.querySelector('.containercadastro')
const btncadastro = document.querySelector('.btncadastro')
const form = document.querySelector('.form')
const name_input = document.querySelector('.inputname')
const data = document.querySelector('.inpudata')
const email_input_cadastro = document.querySelector('.inputmailc')
const input_senha_cadastro = document.querySelector('.passwordc')
const passwordstatus = document.querySelector('#password-status')


btncadastro.addEventListener('click', ()=> {
    loginsection.classList.add('hidden')
    cadastrosection.classList.remove('hidden')
    cadastrosection.classList.add('show')
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let temErro = false

    const name_input_value = name_input.value
    const data_value = data.value
    const email_inputcadastroValue = email_input_cadastro.value
    const password_status_value = passwordstatus.innerHTML

    if(name_input_value === '') {
        temErro = true
        name_input.classList.add("error")
    }else {
        temErro = false
        name_input.classList.remove("error")
    }
    if(email_inputcadastroValue === '') {
        temErro = true
        email_input_cadastro.classList.add("error")
    }else {
        temErro = false
        email_input_cadastro.classList.remove("error")
    }
    if(password_status_value === ("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>")) {
        temErro = false
        input_senha_cadastro.classList.remove("error")
        
    } else {
        temErro = true
        input_senha_cadastro.classList.add("error")
    }
    
    if(!temErro) {
        form.submit()
    }
})

function verificaForcaSenha() {
	var numeros = /([0-9])/;
	var alfabeto = /([a-zA-Z])/;
	var chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,.])/;

	if($('.passwordc').val().length<6) 
	{
		$('#password-status').html("<span style='color:red'>Fraco, insira no mínimo 6 caracteres</span>");
	} else {  	
		if($('.passwordc').val().match(numeros) && $('.passwordc').val().match(alfabeto) && $('.passwordc').val().match(chEspeciais))
		{            
			$('#password-status').html("<span style='color:green'><b>Forte</b></span>");
		} else {
			$('#password-status').html("<span style='color:orange'>Médio, insira um caracter especial</span>");
		}
	}
}