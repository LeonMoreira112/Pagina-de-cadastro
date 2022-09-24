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
    
    if(!temErro) {
        form.submit()
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