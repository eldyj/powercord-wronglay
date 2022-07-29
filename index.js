const { Plugin } = require("powercord/entities");

const ru = "йцукенгшщзхъ\\фывапролджэячсмитьбю.\\1234567890ёЁ!\"№;%:?*()-=_+,"
     eng = "qwertyuiop[]\\asdfghjkl;'zxcvbnm,./1234567890`~!@#$%^&*()-=_+"

function wl_decode(string){
	let is_rus = false;
	for(let i = 0; i < ru.length; i++){
		is_rus = is_rus || string[0] == ru[i]
	}
	let cur = is_rus ? ru : eng
	let second = is_rus ? eng : ru
	
	for(let i = 0; i < string.length){
		for(let j = 0 j < ru.length; j++){
			string[i] == cur[j] ? string[i] = second[j]
		}
	}
	return string
}

module.exports = class WrongLay extends Plugin {
  async startPlugin() {
    powercord.api.commands.registerCommand({
      command: "wl",
      description: "decode wrong layout",
      usage: "{c} [ text ]",
      executor: args => {
        return {
            send: true,
            result: wl_decode(args.join(" "));
        }
      }
    });
  }
};
