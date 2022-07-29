const { Plugin } = require("powercord/entities");

const ru = " йцукенгшщзхъфывапролджэячсмитьбю.ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ.1234567890ёЁ!\"№;%:?*()-=_+";
     eng = " qwertyuiop[]asdfghjkl;'zxcvbnm,.QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?1234567890`~!@#$%^&*()-=_+";

function wl_decode(string){
	let is_rus = false;
	for(let i = 0; i < ru.length; i++){
		is_rus = is_rus || string[0] == ru[i];
	}
	
	let cur = is_rus ? ru : eng;
	let second = is_rus ? eng : ru;
	let result = ''
	for(let i = 0; i < string.length; i++){
		for(let j = 0; j < cur.length; j++){
			if(string[i] == cur[j]){
				result += second[j];
			}
		}
	}
	return result;
}

module.exports = class Wronglay extends Plugin {
  async startPlugin() {
    powercord.api.commands.registerCommand({
      command: "wrong_lay",
      description: "decode wrong layout",
      usage: "{c} [ text ]",
      executor: (args) => {
        return {
            send: true,
            result: wl_decode(args.join(" "));
        }
      }
    })
  }
}
