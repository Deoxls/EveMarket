const {Select} = require("enquirer")
const Menu = require("../data/menu.json")
const CategorieMat = require("../data/categoriesMateriaux.json")

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
	.then(answer=>this.choiceComparator(answer))
	.catch(console.error)
    })()
  }

  choiceComparator(answer){
    if (answer === "Matériaux"){

      let res = []

      for(const [id, materiaux ] of Object.entries(CategorieMat)){
	console.log(materiaux.title)
	res.push(
	   materiaux.title
	)   
      }

      (async ()=> {
	const listeSelect = new Select({
	  name: 'Matériaux',
	  message: 'Choisisser:',
	  choices: res
	})
	listeSelect.run()
	  .then(answer=>this.choiceComparator(answer))
	  .catch(console.error)
      })()


    }
    else{

      console.log('Données insufisante pour ', answer)
    }
  }

}
