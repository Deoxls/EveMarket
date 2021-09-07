const {Select} = require("enquirer")

const Menu = require("../data/menu.json")

module.exports = class MenuClass {

  begin(){
    let res = []

    for(const [title, position] of Object.entries(Menu)){
      res.push(
	position.Title 
      )   
    }

    (async ()=> {
      const listeSelect = new Select({
	name: 'Catégorie',
	message: 'Choisisser:',
	choices: res
      })
      listeSelect.run()
	.then(answer=>console.log('Answer: ', answer))
	.catch(console.error)
    })()

  }

}

